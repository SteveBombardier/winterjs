# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# This script generates jit/LIROpsGenerated.h (list of LIR instructions)
# from LIROps.yaml.

from collections import OrderedDict

import buildconfig
import six
import yaml
from mozbuild.preprocessor import Preprocessor

HEADER_TEMPLATE = """\
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef %(includeguard)s
#define %(includeguard)s

/* This file is generated by jit/GenerateLIRFiles.py. Do not edit! */

%(contents)s

#endif // %(includeguard)s
"""


def load_yaml(yaml_path):
    # First invoke preprocessor.py so that we can use #ifdef JS_SIMULATOR in
    # the YAML file.
    pp = Preprocessor()
    pp.context.update(buildconfig.defines["ALLDEFINES"])
    pp.out = six.StringIO()
    pp.do_filter("substitution")
    pp.do_include(yaml_path)
    contents = pp.out.getvalue()

    # Load into an OrderedDict to ensure order is preserved. Note: Python 3.7
    # also preserves ordering for normal dictionaries.
    # Code based on https://stackoverflow.com/a/21912744.
    class OrderedLoader(yaml.Loader):
        pass

    def construct_mapping(loader, node):
        loader.flatten_mapping(node)
        return OrderedDict(loader.construct_pairs(node))

    tag = yaml.resolver.BaseResolver.DEFAULT_MAPPING_TAG
    OrderedLoader.add_constructor(tag, construct_mapping)
    return yaml.load(contents, OrderedLoader)


def generate_header(c_out, includeguard, contents):
    c_out.write(
        HEADER_TEMPLATE
        % {
            "includeguard": includeguard,
            "contents": contents,
        }
    )


operand_types = {
    "WordSized": "LAllocation",
    "BoxedValue": "LBoxAllocation",
    "Int64": "LInt64Allocation",
}


result_types = {
    "WordSized": "1",
    "BoxedValue": "BOX_PIECES",
    "Int64": "INT64_PIECES",
}


def gen_helper_template_value(num_regular_allocs, num_value_allocs, num_int64_allocs):
    template_str = ""
    if num_value_allocs:
        template_str += str(num_value_allocs) + " * BOX_PIECES + "
    if num_int64_allocs:
        template_str += str(num_int64_allocs) + " * INT64_PIECES + "
    template_str += str(num_regular_allocs)
    return template_str


def build_index_def(num_specials_operands, index_value, num_reg_operands, piece):
    if num_specials_operands:
        return "  static const size_t {} = {} + {} * {};\\\n".format(
            index_value, num_reg_operands, piece, num_specials_operands
        )
    else:
        return "  static const size_t {} = {};\\\n".format(
            index_value, num_reg_operands
        )


def gen_lir_class(
    name, result_type, operands, arguments, num_temps, call_instruction, mir_op
):
    """Generates class definition for a single LIR opcode."""
    class_name = "L" + name

    getters = []
    setters = []
    # Operand index definitions.
    oper_indices = []
    # Parameters for the class constructor.
    constructor_params = []

    num_reg_operands = 0
    num_value_operands = 0
    num_int64_operands = 0
    if operands:
        # Get number of LAllocations to use for defining indices.
        for operand in operands:
            if operands[operand] == "WordSized":
                num_reg_operands += 1

        current_reg_oper = 0
        for operand in operands:
            op_type = operands[operand]
            op_alloc_type = operand_types[op_type]
            constructor_params.append("const " + op_alloc_type + "& " + operand)
            if op_type == "WordSized":
                index_value = str(current_reg_oper)
                current_reg_oper += 1
                getters.append(
                    "  const "
                    + op_alloc_type
                    + "* "
                    + operand
                    + "() { return getOperand("
                    + index_value
                    + "); }"
                )
                setters.append("    setOperand(" + index_value + ", " + operand + ");")
            elif op_type == "BoxedValue":
                index_value = operand[0].upper() + operand[1:] + "Index"
                oper_indices.append(
                    build_index_def(
                        num_value_operands, index_value, num_reg_operands, "BOX_PIECES"
                    )
                )
                num_value_operands += 1
                # No getters generated for BoxedValue operands.
                setters.append(
                    "    setBoxOperand(" + index_value + ", " + operand + ");"
                )
            elif op_type == "Int64":
                index_value = operand[0].upper() + operand[1:] + "Index"
                oper_indices.append(
                    build_index_def(
                        num_int64_operands,
                        index_value,
                        num_reg_operands,
                        "INT64_PIECES",
                    )
                )
                num_int64_operands += 1
                getters.append(
                    "  const "
                    + op_alloc_type
                    + " "
                    + operand
                    + "() { return getInt64Operand("
                    + index_value
                    + "); }"
                )
                setters.append(
                    "    setInt64Operand(" + index_value + ", " + operand + ");"
                )
            else:
                raise Exception("Invalid operand type: " + op_type)
    if num_temps:
        for temp in range(num_temps):
            constructor_params.append("const LDefinition& temp" + str(temp))
            setters.append("    setTemp(" + str(temp) + ", temp" + str(temp) + ");")
            getters.append(
                "  const LDefinition* temp"
                + str(temp)
                + "() { return getTemp("
                + str(temp)
                + "); }"
            )
    code = "class {} : public LInstructionHelper<".format(class_name)
    if result_type:
        code += result_types[result_type] + ", "
    else:
        code += "0, "
    code += gen_helper_template_value(
        num_reg_operands, num_value_operands, num_int64_operands
    )
    code += ", {}> {{\\\n".format(num_temps)
    if arguments:
        for arg_name in arguments:
            arg_type_sig = arguments[arg_name]
            constructor_params.append(arg_type_sig + " " + arg_name)
            code += "  " + arg_type_sig + " " + arg_name + "_;\\\n"
    code += " public:\\\n  LIR_HEADER({})\\\n".format(name)
    code += "  explicit {}(".format(class_name)
    code += ", ".join(constructor_params)
    code += ") : LInstructionHelper(classOpcode)"
    if arguments:
        for arg_name in arguments:
            code += ", " + arg_name + "_(" + arg_name + ")"
    code += " {"
    if call_instruction:
        code += "\\\n    this->setIsCall();"
    code += "\\\n"
    code += "\\\n".join(setters)
    code += "\\\n  }\\\n"
    code += "\\\n".join(getters)
    if arguments:
        for arg_name in arguments:
            code += "  " + arguments[arg_name] + " " + arg_name + "() const { "
            code += "return " + arg_name + "_; }\\\n"
    code += "\\\n"
    if operands:
        code += "\\\n".join(oper_indices)
    if mir_op:
        if mir_op is True:
            code += "  M{}* mir() const {{ return mir_->to{}(); }};\\\n".format(
                name, name
            )
        else:
            code += "  M{}* mir() const {{ return mir_->to{}(); }};\\\n".format(
                mir_op, mir_op
            )
    code += "};\\\n"
    return code


def generate_lir_header(c_out, yaml_path):
    data = load_yaml(yaml_path)

    # LIR_OPCODE_LIST opcode.
    ops = []

    # Generated LIR op class definitions.
    lir_op_classes = []

    for op in data:
        name = op["name"]

        gen_boilerplate = op.get("gen_boilerplate", True)
        assert isinstance(gen_boilerplate, bool)

        if gen_boilerplate:
            result_type = op.get("result_type", None)
            assert result_type is None or str
            if result_type:
                assert result_types[result_type]

            operands = op.get("operands", None)
            assert operands is None or OrderedDict

            arguments = op.get("arguments", None)
            assert arguments is None or isinstance(arguments, OrderedDict)

            num_temps = op.get("num_temps", 0)
            assert num_temps is None or int

            gen_boilerplate = op.get("gen_boilerplate", True)
            assert isinstance(gen_boilerplate, bool)

            call_instruction = op.get("call_instruction", None)
            assert call_instruction is None or True

            mir_op = op.get("mir_op", None)
            assert mir_op is None or True or str

            lir_op_classes.append(
                gen_lir_class(
                    name,
                    result_type,
                    operands,
                    arguments,
                    num_temps,
                    call_instruction,
                    mir_op,
                )
            )

        ops.append("_({})".format(name))

    contents = "#define LIR_OPCODE_LIST(_)\\\n"
    contents += "\\\n".join(ops)
    contents += "\n\n"

    contents += "#define LIR_OPCODE_CLASS_GENERATED \\\n"
    contents += "\\\n".join(lir_op_classes)
    contents += "\n\n"

    generate_header(c_out, "jit_LIROpsGenerated_h", contents)
