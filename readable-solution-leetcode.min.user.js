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

!function(){"use strict";const n=document.createElement("style");n.innerHTML='\n  div[class^="css-"]::before {\n      content: initial !important;\n  }\n  div {\n      filter: initial !important;\n  }\n  div[class$="StyledIconWrapper"], .css-1y94pdf, .css-1y94pdf * {\n      display: none !important;\n  }\n',document.head.appendChild(n)}();