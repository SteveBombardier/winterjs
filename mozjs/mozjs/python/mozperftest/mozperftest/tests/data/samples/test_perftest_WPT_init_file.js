// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
/* eslint-env node */
"use strict";
function setUp() {}

function tearDown() {}

function test() {}

module.exports = {
  setUp,
  tearDown,
  test,
  owner: "Performance Testing Team",
  name: "webpagetest",
  description:
    "Run webpagetest performance pageload tests on Firefox against Alexa top 50 websites",
  longDescription: `This mozperftest gets webpagetest to run pageload tests on Firefox against the 50 most popular
  websites and provide data. The full list of data returned from webpagetest: firstContentfulPaint,
  timeToContentfulPaint, visualComplete90, firstPaint, visualComplete99, visualComplete, SpeedIndex, bytesIn, bytesOut,
  TTFB, fullyLoadedCPUms, fullyLoadedCPUpct, domElements, domContentLoadedEventStart, domContentLoadedEventEnd,
  loadEventStart, loadEventEnd`,
  options: {
    test_parameters: {
      location: "ec2-us-east-1",
      browser: "Firefox",
      connection: "Cable",
      timeout_limit: 21600,
      wait_between_requests: 5,
      statistics: ["average", "median", "standardDeviation"],
      label: "",
      runs: 3,
      fvonly: 0,
      private: 0,
      web10: 0,
      script: "",
      block: "",
      video: 1,
      tcpdump: 0,
      noimages: 0,
      keepua: 1,
      uastring: "",
      htmlbody: 0,
      custom: "",
      ignoreSSL: 0,
      appendua: "",
      injectScript: "",
      disableAVIF: 0,
      disableWEBP: 0,
      disableJXL: 0,
    },
    test_list: [
      "google.com",
      "youtube.com",
      "facebook.com",
      "qq.com",
      "baidu.com",
      "sohu.com",
      "360.cn",
      "jd.com",
      "amazon.com",
      "yahoo.com",
      "zoom.us",
      "sina.com.cn",
      "live.com",
      "reddit.com",
      "netflix.com",
      "microsoft.com",
      "instagram.com",
      "panda.tv",
      "google.com.hk",
      "csdn.net",
      "bing.com",
      "vk.com",
      "yahoo.co.jp",
      "twitter.com",
      "naver.com",
      "canva.com",
      "ebay.com",
      "force.com",
      "amazon.in",
      "adobe.com",
      "aliexpress.com",
      "linkedin.com",
      "tianya.cn",
      "yy.com",
      "huanqiu.com",
      "amazon.co.jp",
      "okezone.com",
    ],
    browser_metrics: [
      "firstContentfulPaint",
      "timeToContentfulPaint",
      "visualComplete90",
      "firstPaint",
      "visualComplete99",
      "visualComplete",
      "SpeedIndex",
      "bytesIn",
      "bytesOut",
      "TTFB",
      "fullyLoadedCPUms",
      "fullyLoadedCPUpct",
      "domElements",
      "domContentLoadedEventStart",
      "domContentLoadedEventEnd",
      "loadEventStart",
      "loadEventEnd",
    ],
  },
};
