/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addlist.js":
/*!************************!*\
  !*** ./src/addlist.js ***!
  \************************/
/***/ (() => {

// self contain modules
// everything to do with my module is in my module
// no global variable
// if a module manages more than one thing it should split into multiple
// separation of concerns 
// Dry code -  Don't repeat yourself 
// efficient DOM usage 
// very few selections 
// no memory leaks
// all event can be unbound
var addList = function () {
  var inbox = [];
  var today = [];
  var week = [];

  function List(newToDo) {
    newToDo = {
      textArea: function textArea() {
        return this.priority;
      },
      priority: "Low",
      dueDate: "2/07/2022",
      addList: "Add to my list"
    };
    return {
      newToDo: newToDo
    };
  }

  var newList = List();
  console.log(newList.newToDo.textArea());
  var btnClick = document.querySelector('#jokeBtn');
  btnClick.addEventListener('click', function (e) {
    e.preventDefault();
    inbox.push(newList);
    console.log(inbox);
  });
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/plus-sign.png */ "./src/assets/plus-sign.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lato:ital,wght@0,400;0,700;1,700&family=Lora:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"inter\", sans-serif;\n  font-weight: normal;\n  height: 100vh;\n  overflow: hidden;\n  color: #212121;\n  font-size: 1.1111111111vw;\n}\n\n@media screen and (min-width: 1920px) {\n  body {\n    font-size: 21.3333333333px;\n  }\n}\n@media screen and (max-width: 991px) {\n  body {\n    font-size: 11.0111111111px;\n  }\n}\na {\n  text-decoration: none;\n  color: #212121;\n}\n\nh3 {\n  font-weight: 600;\n  font-size: 1.5em;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 32px;\n  width: 100%;\n  height: 4.75em;\n  background-color: #DF7861;\n}\n.nav-bar a {\n  text-decoration: none;\n  color: #F5F5F5;\n  font-size: 2.625em;\n  font-weight: 500;\n}\n.nav-bar a span {\n  color: #94B49F;\n}\n\n.container {\n  position: relative;\n  max-width: 1920px;\n  border-radius: 10px;\n}\n\n.task-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 999;\n}\n\n.task-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-top: 150px;\n  padding: 16px;\n  width: 46.875em;\n  height: 21.25em;\n  background-color: #F5F5F5;\n}\n.task-wrapper input[type=text] {\n  font-size: 1.5em;\n  background: none;\n  font-family: \"inter\", Arial, Helvetica, sans-serif;\n  color: #212121;\n  padding: 8px;\n  outline: none;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: none;\n}\n.task-wrapper input[type=text]::placeholder {\n  color: #595959;\n  font-weight: 500;\n  border-radius: 3px solid #555;\n}\n.task-wrapper textarea {\n  font-size: 1em;\n  background: none;\n  font-family: \"inter\", Arial, Helvetica, sans-serif;\n  color: #212121;\n  padding: 8px;\n  outline: none;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: none;\n}\n.task-wrapper input[type=text]:focus, .task-wrapper textarea:focus {\n  border: none;\n}\n\nli:hover {\n  background-color: #C5C5C5;\n}\n\n.active-list {\n  background-color: #C5C5C5;\n}\n\naside {\n  position: relative;\n  padding-left: 24px;\n  padding-right: 16px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  width: 16.875em;\n  height: 100vh;\n  background-color: #D7D6D6;\n}\naside ul {\n  list-style-type: none;\n  text-decoration: none;\n}\naside ul li {\n  margin-bottom: 8px;\n  width: 100%;\n  padding: 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n}\naside ul li a {\n  font-weight: 500;\n  font-size: 1.25em;\n  margin-left: 16px;\n}\naside ul li img {\n  width: 20px;\n  height: 20px;\n}\naside .button-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\naside .button-wrapper .addlist {\n  position: absolute;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: 50px 50px;\n  background-position: center;\n  bottom: 100px;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  border: none;\n  background-color: #94B49F;\n  cursor: pointer;\n}\n\n.content-wrapper {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100vh;\n}\n\n.note-wrapper {\n  width: calc(100% - 16.875em);\n  height: 100vh;\n  background-color: #EAEAEA;\n}\n\n.project-wrapper {\n  width: 100%;\n  margin-top: 70px;\n  padding: 8px;\n}", "",{"version":3,"sources":["webpack://./src/style/main.scss"],"names":[],"mappings":"AAYA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AAVF;;AAaA;EACE,gCAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,cAhBY;EAiBZ,yBAAA;AAVF;;AAaA;EACE;IAAM,0BAAA;EATN;AACF;AAWC;EACC;IAAM,0BAAA;EARN;AACF;AAUC;EACC,qBAAA;EACA,cA9BY;AAsBd;;AAWC;EACC,gBAAA;EACA,gBAAA;AARF;;AAWA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,WAAA;EACA,cAAA;EACA,yBAlDc;AA0ChB;AAUE;EACE,qBAAA;EACA,cA/CU;EAgDV,kBAAA;EACA,gBAAA;AARJ;AAUI;EACE,cA1DY;AAkDlB;;AAeA;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;AAZF;;AAeA;EACE,eAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,oCAAA;EAEA,YAAA;AAbF;;AAiBA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,aAAA;EACA,eAAA;EACA,eAAA;EACA,yBArFY;AAuEd;AAgBE;EACE,gBAAA;EACA,gBAAA;EACA,kDAAA;EACA,cA7FU;EA8FV,YAAA;EACA,aAAA;EACA,wBAAA;EACA,uBAAA;EACA,YAAA;AAdJ;AAiBE;EACE,cArGgB;EAsGhB,gBAAA;EACA,6BAAA;AAfJ;AAmBE;EACE,cAAA;EACA,gBAAA;EACA,kDAAA;EACA,cAhHU;EAiHV,YAAA;EACA,aAAA;EACA,wBAAA;EACA,uBAAA;EACA,YAAA;AAjBJ;AAoBE;EACE,YAAA;AAlBJ;;AAyBA;EACE,yBAlI4B;AA4G9B;;AA0BA;EACE,yBAvI4B;AAgH9B;;AA2BA;EACE,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;EACA,eAAA;EACA,aAAA;EACA,yBApJ0B;AA4H5B;AA0BE;EACE,qBAAA;EACA,qBAAA;AAxBJ;AA0BI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;AAxBN;AA0BM;EACE,gBAAA;EACA,iBAAA;EACA,iBAAA;AAxBR;AA2BM;EACE,WAAA;EACA,YAAA;AAzBR;AA+BE;EACE,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AA7BJ;AA+BI;EACE,kBAAA;EACA,yDAAA;EACA,4BAAA;EACA,0BAAA;EACA,2BAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,yBArMY;EAsMZ,eAAA;AA7BN;;AAoCA;EACE,aAAA;EACA,8BAAA;EACA,WAAA;EACA,aAAA;AAjCF;;AAqCA;EACE,4BAAA;EACA,aAAA;EACA,yBAvN2B;AAqL7B;;AAqCA;EACE,WAAA;EACA,gBAAA;EACA,YAAA;AAlCF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lato:ital,wght@0,400;0,700;1,700&family=Lora:wght@400;500;600;700&display=swap');\n\n$primary-color: #DF7861;\n$secondary-color: #94B49F;\n$secondary-color-light-gray: #EAEAEA;\n$secondary-color-dark-gray: #D7D6D6;\n$secondary-color-darker-gray: #C5C5C5;\n$black-color: #212121;\n$black-color-light: #595959;\n$white-color: #F5F5F5;\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n\n*,*::before,*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'inter', sans-serif;\n  font-weight: normal;\n  height: 100vh;\n  overflow: hidden;\n  color: $black-color;\n  font-size: 1.1111111111111112vw;\n}\n\n@media screen and (min-width:1920px) {\n  body {font-size: 21.333333333333332px;}\n }\n\n @media screen and (max-width:991px) {\n  body {font-size: 11.011111111111111px;}\n }\n\n a {\n  text-decoration: none;\n  color: $black-color;\n }\n\n h3 {\n  font-weight: 600;\n  font-size: 1.5em;\n }\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 32px;\n  width: 100%;\n  height: 4.75em;\n  background-color: $primary-color;\n\n  a {\n    text-decoration: none;\n    color: $white-color;\n    font-size: 2.625em;\n    font-weight: 500;\n\n    span {\n      color: $secondary-color;\n    }\n\n  }\n}\n\n\n.container {\n  position: relative;\n  max-width: 1920px;\n  border-radius: 10px;\n}\n\n.task-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n\n  z-index: 999;\n}\n\n\n.task-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-top: 150px;\n  padding: 16px;\n  width: 46.875em;\n  height: 21.25em;\n  background-color: $white-color;\n\n  input[type=text] {\n    font-size: 1.5em;\n    background: none;\n    font-family: 'inter', Arial, Helvetica, sans-serif;\n    color: $black-color;\n    padding: 8px;\n    outline: none;\n    padding: 3px 0px 3px 3px;\n    margin: 5px 1px 3px 0px;\n    border: none;\n  }\n\n  input[type=text]::placeholder {\n    color: $black-color-light;\n    font-weight: 500;\n    border-radius: 3px solid #555;\n    \n  }\n\n  textarea {\n    font-size: 1em;\n    background: none;\n    font-family: 'inter', Arial, Helvetica, sans-serif;\n    color: $black-color;\n    padding: 8px;\n    outline: none;\n    padding: 3px 0px 3px 3px;\n    margin: 5px 1px 3px 0px;\n    border: none;\n  }\n\n  input[type=text]:focus, textarea:focus {\n    border: none;\n}\n\n\n\n}\n\nli:hover {\n  background-color: $secondary-color-darker-gray;\n\n}\n\n.active-list {\n  background-color: $secondary-color-darker-gray;\n\n}\n\naside {\n  position: relative;\n  padding-left: 24px;\n  padding-right: 16px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  width: 16.875em;\n  height: 100vh;\n  background-color: $secondary-color-dark-gray;\n\n  ul {\n    list-style-type: none;\n    text-decoration: none;\n\n    li {\n      margin-bottom: 8px;\n      width: 100%;\n      padding: 8px;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      cursor: pointer;\n\n      a {\n        font-weight: 500;\n        font-size: 1.25em;\n        margin-left: 16px;\n      }\n\n      img {\n        width: 20px;\n        height: 20px;\n      }\n    }\n\n  }\n\n  .button-wrapper {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    .addlist {\n      position: absolute;\n      background-image: url('../assets/plus-sign.png');\n      background-repeat: no-repeat;\n      background-size: 50px 50px;\n      background-position: center;\n      bottom: 100px;\n      width: 70px;\n      height: 70px;\n      border-radius: 50%;\n      border: none;\n      background-color: $secondary-color;\n      cursor: pointer;\n    }\n\n  }\n\n}\n\n.content-wrapper {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100vh;\n}\n\n\n.note-wrapper {\n  width: calc(100% - 16.875em);\n  height: 100vh;\n  background-color: $secondary-color-light-gray;\n}\n\n.project-wrapper {\n  width: 100%;\n  margin-top: 70px;\n  padding: 8px;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/plus-sign.png":
/*!**********************************!*\
  !*** ./src/assets/plus-sign.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "plus-sign.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _addlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addlist */ "./src/addlist.js");
/* harmony import */ var _addlist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_addlist__WEBPACK_IMPORTED_MODULE_1__);



console.log("This is my man and we are going to make things much better and more interesting for you.");
})();

/******/ })()
;
//# sourceMappingURL=bundle89097810805f5151d88e.js.map