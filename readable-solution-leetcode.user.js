// ==UserScript==
// @name         Readable Solution LeetCode
// @namespace    https://github.com/DungGramer/
// @copyright    2022, DungGramer
// @version      1.0.1
// @description  Remove Blur Solution LeetCode
// @author       DungGramer
// @icon         https://iconarchive.com/download/i87099/graphicloads/colorful-long-shadow/Lock.ico
// @match        https://leetcode.com/problems/*/solution/
// @license      MIT

// ==/UserScript==


(function () {
  'use strict';
  const style = document.createElement('style');
  style.innerHTML = `
  div[class^="css-"]::before {
      content: initial !important;
  }
  div {
      filter: initial !important;
  }
  div[class$="StyledIconWrapper"], .css-1y94pdf, .css-1y94pdf * {
      display: none !important;
  }
`;

  document.head.appendChild(style);
})();
