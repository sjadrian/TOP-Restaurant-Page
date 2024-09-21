/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\n\nhtml,body {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n\nbody {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;                      \n    background-repeat: no-repeat;\n    background-attachment: fixed;\n\n    display: flex;\n    flex-direction: column;\n  }\n\nheader {\n    background-color: black;\n    opacity: 0.8;\n    color: aliceblue;\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#restaurant-name {\n    padding: 10px;\n    font-size: 70px;\n}\n\nbutton {\n    background-color: black;\n    color: aliceblue;\n    font-size: 25px;\n    opacity: 0.8;\n    padding: 10px 20px;\n    border: none;\n\n    /* added for moving button hover */\n    position: relative; \n    /* Smooth transition for transform and color */\n    transition: transform 0.3s ease, color 0.3s ease; \n}\n\nbutton:hover {\n    color: orange;\n    transform: translateY(-5px);\n    cursor: pointer;\n}\n\n#home-button {\n    border-bottom: 1px white solid;\n}\n\n#content {\n    flex-grow: 1;\n    color: aliceblue;\n    background-color: rgba(0, 0, 0, 0.7); \n\n    /* Set the width properties */\n    max-width: 700px;   \n    min-width: 300px;    \n \n    margin: 60px auto;  \n    padding: 40px;\n    text-align: center;\n\n    /* initially hidden */\n    opacity: 0;          \n    /* Smooth transition effect */\n    transition: opacity 0.3s ease-in-out; \n}\n\n#content.visible {\n    opacity: 1;\n}\n\n#chef-image-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    padding: 20px 0px;\n}\n\n#chef-image {\n    width: 50%;\n    opacity: 1;\n}\n\n.text-container {\n    padding: 20px;\n    font-size: 25px;\n}\n\n.grid-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 40px;\n}\n\n.item-container {\n    padding: 20px;\n    border: 1px solid orange;\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.item-container:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    transition: transform 0.3s ease, color 0.3s ease; \n    cursor: pointer;\n}\n\n.menu-title, .menu-ingredient {\n    padding: 10px;\n}\n\n.menu-title {\n    font-size: 32px;\n}\n\n.menu-ingredient {\n    font-size: 18px;\n}\n\n#phone-number, #address, .location-image-container {\n    text-align: left;\n    padding: 10px;\n    font-size: 20px;\n}\n\nfooter {\n    background-color: aqua;\n    color: aliceblue;\n    background-color: black;\n    opacity: 0.8;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    padding: 10px 0px;\n    font-size: 20px;\n}\n\n/* for mobile phones */\n@media (max-width: 600px) {\n\n    #restaurant-name {\n        font-size: 40px;\n        text-align: center;\n    }\n\n    button {\n        font-size: 18px;           \n        padding: 10px;             \n        margin: 5px 0;             \n        width: 100%;               \n    }\n\n    nav {\n        display: flex;\n    };\n\n    #content {\n        max-width: 100%;           \n        padding: 20px;             \n        margin: 20px auto;\n    }\n\n    .grid-container {\n        grid-template-columns: 1fr; \n        gap: 20px;                  \n    }\n\n    .item-container {\n        padding: 10px;             \n    }\n\n    .text-container {\n        font-size: 18px;           \n        padding: 10px;             \n    }\n    \n    #chef-image {\n        width: 80%;                \n    }\n\n    #location-image {\n        width: 100%;\n    }\n}\n\n\n/* Styles for screens 390px and below */\n@media (max-width: 400px) {\n\n    #restaurant-name {\n        font-size: 35px;        \n        text-align: center;\n    }\n\n    button {\n        font-size: 16px;           \n        padding: 8px;              \n        margin: 5px 5px;\n        width: 80%;\n    }\n\n    nav {\n        display: flex;\n    };\n\n    #content {\n        max-width: 100%;\n        padding: 15px;\n        margin: 15px auto;\n        height: auto;\n\n        display: flex;\n    }\n\n    .grid-container {\n        grid-template-columns: 1fr; \n        gap: 15px;\n    }\n\n    .item-container {\n        padding: 8px;\n    }\n\n    .text-container {\n        font-size: 16px;\n        padding: 8px;\n    }\n    \n    #chef-image {\n        width: 80%;\n    }\n\n    #location-image {\n        width: 100%;\n    }\n\n    footer {\n        font-size: 14px;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactLoad: () => (/* binding */ contactLoad)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant-location.png */ \"./src/images/restaurant-location.png\");\n// contact.js\n\n\n\nfunction contactLoad() {\n    console.log(\"contact load called\");\n\n    const content = document.getElementById(\"content\");\n\n    const phoneDiv = document.createElement(\"div\");\n    phoneDiv.innerHTML = `📞 123 456 789`;\n    phoneDiv.id = `phone-number`;\n\n    const addressDiv = document.createElement(\"div\");\n    addressDiv.innerHTML = `🏠 Hollywood Boulevard 42, Los Angeles, USA`;\n    addressDiv.id = `address`;\n\n    const image = document.createElement(\"img\");\n    image.src = _images_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__;\n    image.id = `location-image`;\n\n    content.appendChild(phoneDiv);\n    content.appendChild(addressDiv);\n    content.appendChild(image);\n}\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeLoad: () => (/* binding */ homeLoad)\n/* harmony export */ });\n/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/chef.png */ \"./src/images/chef.png\");\n\n\nfunction homeLoad() {\n    console.log(\"page load called\");\n\n    const content = document.getElementById(\"content\");\n\n    const textDiv = document.createElement(\"div\");\n    textDiv.classList.add(\"text-container\");\n    textDiv.innerHTML = `Best pizza in your country`\n\n    const textDiv2 = document.createElement(\"div\");\n    textDiv2.classList.add(\"text-container\");\n    textDiv2.innerHTML = `Made with passion since 1908`;\n\n    content.appendChild(textDiv);\n    content.appendChild(textDiv2);\n\n    const imgDiv = document.createElement(\"div\");\n    imgDiv.id = `chef-image-container`;\n   \n    const image = document.createElement(\"img\");\n    image.src = _images_chef_png__WEBPACK_IMPORTED_MODULE_0__;\n    image.id = `chef-image`;\n    \n    imgDiv.appendChild(image);\n    content.appendChild(imgDiv);\n\n    const textDiv3 = document.createElement(\"div\");\n    textDiv3.classList.add(\"text-container\");\n    textDiv3.innerHTML = `Order online or visit us!`;\n\n    content.appendChild(textDiv3);\n}\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* index.js */\n\n\n\n\n\nconst states = {\n    HOME: 0,\n    MENU: 1,\n    CONTACT: 2,\n};\n\nlet active = states.HOME;\n\n\ndocument.addEventListener('DOMContentLoaded', () => { \n    // initial home page load\n    const content = document.getElementById(\"content\");\n    content.classList.add(\"visible\"); \n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.homeLoad)();\n\n    const homeButton = document.getElementById('home-button');\n    const menuButton = document.getElementById('menu-button');\n    const contactButton = document.getElementById('contact-button');\n\n    homeButton.onclick = () => setActiveState(states.HOME, homeButton);\n    menuButton.onclick = () => setActiveState(states.MENU, menuButton);\n    contactButton.onclick = () => setActiveState(states.CONTACT, contactButton);\n});\n\n\nfunction setActiveState(newState, button) {\n    if (active !== newState) {\n        active = newState;\n\n        // with transition\n        const content = document.getElementById(\"content\");\n\n        // Start fade-out\n        content.classList.remove(\"visible\"); \n\n        // Wait for fade-out to complete before clearing and updating content\n        setTimeout(() => {\n            clearContent();\n            updateContent(newState, () => {\n                // Start fade-in only after content is fully loaded\n                content.classList.add(\"visible\");\n            });\n            updateButtonStyles(button);\n        }, 300);\n    }\n}\n\n\nfunction clearContent() {\n    const content = document.getElementById(\"content\");\n    content.innerHTML = '';\n}\n\n\nfunction updateContent(state, callback) {\n    switch(state) {\n        case states.HOME:\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__.homeLoad)();\n            break;\n        case states.MENU:\n            (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuLoad)();\n            break;\n        case states.CONTACT:\n            (0,_contact__WEBPACK_IMPORTED_MODULE_3__.contactLoad)();\n            break;\n        default:\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__.homeLoad)();\n    }\n    // Call the callback to trigger the fade-in\n    callback(); \n}\n\n\nfunction updateButtonStyles(activeButton) {\n    const buttons = [\n        document.getElementById('home-button'), \n        document.getElementById('menu-button'), \n        document.getElementById('contact-button')\n    ];\n    buttons.forEach(button => {\n        if (button === activeButton) {\n            button.style.borderBottom = \"1px white solid\";\n        } else {\n            button.style.borderBottom = \"none\";\n        }\n    });\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\n/* harmony import */ var _images_pizzas_salsiccia_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizzas/salsiccia.png */ \"./src/images/pizzas/salsiccia.png\");\n/* harmony import */ var _images_pizzas_gamberi_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizzas/gamberi.png */ \"./src/images/pizzas/gamberi.png\");\n/* harmony import */ var _images_pizzas_pepe_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pizzas/pepe.png */ \"./src/images/pizzas/pepe.png\");\n/* harmony import */ var _images_pizzas_disgustoso_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pizzas/disgustoso.png */ \"./src/images/pizzas/disgustoso.png\");\n/* harmony import */ var _images_pizzas_colorato_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pizzas/colorato.png */ \"./src/images/pizzas/colorato.png\");\n/* harmony import */ var _images_pizzas_pomodoro_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pizzas/pomodoro.png */ \"./src/images/pizzas/pomodoro.png\");\n/* harmony import */ var _images_pizzas_crema_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/pizzas/crema.png */ \"./src/images/pizzas/crema.png\");\n/* harmony import */ var _images_pizzas_carne_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/pizzas/carne.png */ \"./src/images/pizzas/carne.png\");\n// menu.js\n\n\n\n\n\n\n\n\n\n\nconst pizzas = [\n    {\n        name : 'Salsiccia',\n        ingredient : 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil',\n        src: _images_pizzas_salsiccia_png__WEBPACK_IMPORTED_MODULE_0__,\n    },\n    {\n        name : 'Gamberi',\n        ingredient : 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',\n        src: _images_pizzas_gamberi_png__WEBPACK_IMPORTED_MODULE_1__,\n    },\n    {\n        name : 'Pepe',\n        ingredient : 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil',\n        src: _images_pizzas_pepe_png__WEBPACK_IMPORTED_MODULE_2__,\n    },\n    {\n        name : 'Disgustoso',\n        ingredient : 'Tomato sauce, Bacon, Pineapple, Olives, Basil',\n        src: _images_pizzas_disgustoso_png__WEBPACK_IMPORTED_MODULE_3__,\n    },\n    {\n        name : 'Colorato',\n        ingredient : 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil',\n        src: _images_pizzas_colorato_png__WEBPACK_IMPORTED_MODULE_4__,\n    },\n    {\n        name : 'Pomodoro',\n        ingredient : 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli',\n        src: _images_pizzas_pomodoro_png__WEBPACK_IMPORTED_MODULE_5__,\n    },\n    {\n        name : 'Crema',\n        ingredient : 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil',\n        src: _images_pizzas_crema_png__WEBPACK_IMPORTED_MODULE_6__,\n    },\n    {\n        name : 'Carne',\n        ingredient : 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli',\n        src: _images_pizzas_carne_png__WEBPACK_IMPORTED_MODULE_7__,\n    },\n]\n\n\nfunction menuLoad() {\n    console.log(\"menu load called\");\n\n    const content = document.getElementById(\"content\");\n\n    const gridDiv = document.createElement(\"div\");\n    gridDiv.classList.add(\"grid-container\");\n\n    pizzas.forEach(pizza => {\n        console.log(pizza.name);\n\n        const itemDiv = document.createElement(\"div\");\n        itemDiv.classList.add(\"item-container\");\n\n        const menuImgDiv = document.createElement(\"div\");\n        menuImgDiv.classList.add(\"menu-image\");\n\n        const image = document.createElement(\"img\");\n        image.src = pizza.src;\n        image.id = `pizza-image`;\n\n        menuImgDiv.appendChild(image);\n\n        const menuTitleDiv = document.createElement(\"div\");\n        menuTitleDiv.classList.add(\"menu-title\");\n        menuTitleDiv.innerHTML = pizza.name;\n\n        const menuIngredDiv = document.createElement(\"div\");\n        menuIngredDiv.classList.add(\"menu-ingredient\");\n        menuIngredDiv.innerHTML = pizza.ingredient;\n\n        itemDiv.appendChild(menuImgDiv);\n        itemDiv.appendChild(menuTitleDiv);\n        itemDiv.appendChild(menuIngredDiv);\n\n\n        gridDiv.appendChild(itemDiv);\n    });\n    content.appendChild(gridDiv);\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"44a51f979cae2c1c83ce.jpg\";\n\n//# sourceURL=webpack:///./src/images/background.jpg?");

/***/ }),

/***/ "./src/images/chef.png":
/*!*****************************!*\
  !*** ./src/images/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3775a89200c940bff3b0.png\";\n\n//# sourceURL=webpack:///./src/images/chef.png?");

/***/ }),

/***/ "./src/images/pizzas/carne.png":
/*!*************************************!*\
  !*** ./src/images/pizzas/carne.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8bf9bfdca8c5e63f3aa.png\";\n\n//# sourceURL=webpack:///./src/images/pizzas/carne.png?");

/***/ }),

/***/ "./src/images/pizzas/colorato.png":
/*!****************************************!*\
  !*** ./src/images/pizzas/colorato.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"16638ff23489422a5d03.png\";\n\n//# sourceURL=webpack:///./src/images/pizzas/colorato.png?");

/***/ }),

/***/ "./src/images/pizzas/crema.png":
/*!*************************************!*\
  !*** ./src/images/pizzas/crema.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7f675715f467c0f08f3.png\";\n\n//# sourceURL=webpack:///./src/images/pizzas/crema.png?");

/***/ }),

/***/ "./src/images/pizzas/disgustoso.png":
/*!******************************************!*\
  !*** ./src/images/pizzas/disgustoso.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34362ada84919363d765.png\";\n\n//# sourceURL=webpack:///./src/images/pizzas/disgustoso.png?");

/***/ }),

/***/ "./src/images/pizzas/gamberi.png":
/*!***************************************!*\
  !*** ./src/images/pizzas/gamberi.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39cec0b6bfec797325ef.png\";\n\n//# sourceURL=webpack:///./src/images/pizzas/gamberi.png?");

/***/ }),

/***/ "./src/images/pizzas/pepe.png":
/*!************************************!*\
  !*** ./src/images/pizzas/pepe.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c8c231f8597e0da675e.png\";\n\n//# sourceURL=webpack:///./src/images/pizzas/pepe.png?");

/***/ }),

/***/ "./src/images/pizzas/pomodoro.png":
/*!****************************************!*\
  !*** ./src/images/pizzas/pomodoro.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1896a43718b529295942.png\";\n\n//# sourceURL=webpack:///./src/images/pizzas/pomodoro.png?");

/***/ }),

/***/ "./src/images/pizzas/salsiccia.png":
/*!*****************************************!*\
  !*** ./src/images/pizzas/salsiccia.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f1a48a94a2ff7cfbbe3.png\";\n\n//# sourceURL=webpack:///./src/images/pizzas/salsiccia.png?");

/***/ }),

/***/ "./src/images/restaurant-location.png":
/*!********************************************!*\
  !*** ./src/images/restaurant-location.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d4ead59a4044100f85f.png\";\n\n//# sourceURL=webpack:///./src/images/restaurant-location.png?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;