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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body,\\nhtml {\\n  height: 95%;\\n  /* background-color: #f8fafc; */\\n  background-color: #222629;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  color: #f8fafc;\\n}\\n\\n.main-container {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n  margin: 2em;\\n  gap: 0.25em;\\n}\\n\\n.input-container {\\n  display: flex;\\n  justify-content: flex-end;\\n  gap: 1em;\\n}\\n\\n.weather-container {\\n  display: grid;\\n  grid-template-rows: 1fr;\\n  grid-template-columns: repeat(5, 1fr);\\n  height: 100%;\\n  /* background: #557a9b; */\\n  /* border-radius: 1em; */\\n}\\n\\n#weather-card {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 1em;\\n  padding: 1em;\\n  border: 1px solid #f8fafc;;\\n  border-radius: 1em;\\n}\\n\\n.location {\\n    margin-bottom: 1em;\\n}\\n\\n#temperature {\\n    margin-top: 1em;\\n    margin-bottom: 1em;\\n}\\n\\n#feels-like {\\n    margin-top: 1em;\\n    margin-bottom: 1em;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherapp/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/WeatherObjectImperial.js":
/*!**************************************!*\
  !*** ./src/WeatherObjectImperial.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WeatherObjectImperial)\n/* harmony export */ });\n/* It takes in the weather data from the API and returns it in a format that is easier to use */\nclass WeatherObjectImperial {\n  constructor(\n    weatherLocation,\n    weatherDescription,\n    weatherTemperature,\n    weatherFeel,\n    weatherHumidity,\n    weatherWindSpeed,\n  ) {\n    this.location = weatherLocation;\n    this.description = weatherDescription;\n    this.temperature = `${weatherTemperature} °F`;\n    this.feel = `${weatherFeel} °F`;\n    this.humidity = weatherHumidity;\n    this.wind = `${weatherWindSpeed} MPH`;\n  }\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/WeatherObjectImperial.js?");

/***/ }),

/***/ "./src/WeatherObjectMetric.js":
/*!************************************!*\
  !*** ./src/WeatherObjectMetric.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WeatherObjectMetric)\n/* harmony export */ });\n/* Class that takes in the weather data from the API and returns a new object with the data */\nclass WeatherObjectMetric {\n  constructor(\n    weatherLocation,\n    weatherDescription,\n    weatherTemperature,\n    weatherFeel,\n    weatherHumidity,\n    weatherWindSpeed,\n  ) {\n    this.location = weatherLocation;\n    this.description = weatherDescription;\n    this.temperature = `${weatherTemperature} °C`;\n    this.feel = `${weatherFeel} °C`;\n    this.humidity = weatherHumidity;\n    this.wind = `${weatherWindSpeed} KPH`;\n  }\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/WeatherObjectMetric.js?");

/***/ }),

/***/ "./src/WeatherUI.js":
/*!**************************!*\
  !*** ./src/WeatherUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WeatherUI)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI */ \"./src/weatherAPI.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\nclass WeatherUI {\n  // Description string is adjusted to be capitalized\n  static capEachWord = (cityWeather) => {\n    const description = cityWeather.description.split(' ');\n    // console.log(description);\n\n    // eslint-disable-next-line no-plusplus\n    for (let i = 0; i < description.length; i++) {\n      description[i] = description[i][0].toUpperCase() + description[i].substr(1);\n    }\n\n    const newDescription = description.join(' ');\n\n    return newDescription;\n  };\n\n  static appendWeatherInfo = (cityWeather) => {\n    // Set weather div element and class and id\n    const weatherCard = document.createElement('div');\n    const weatherLocation = `${cityWeather.location}`.replaceAll(' ', '-');\n    weatherCard.classList.add(`weather-card-${weatherLocation}`);\n    weatherCard.setAttribute('id', 'weather-card');\n\n    // const windSpeedConverted = this.convertMPH(cityWeather);\n    const description = this.capEachWord(cityWeather);\n\n    // Define information in weather card\n    weatherCard.innerHTML = `\n    <div class='location'>Location: <span class='location-name'>${cityWeather.location}</span></div>\n    <p>Description: ${description}</p>\n    <div class='temperature-${weatherLocation}' id='temperature'><a class=\"${cityWeather.location}\" id=\"temp-toggle\" href=\"#\">Temperature:</a> <span>${cityWeather.temperature}</span></div>\n    <div class='feels-like-${weatherLocation}' id='feels-like'>Feels Like: <span>${cityWeather.feel}</span></div>\n    <p>Humidity: ${cityWeather.humidity}%</p>\n    <p>Wind Speed: ${cityWeather.wind}</p>\n    `;\n\n    // Change background image based on temperature ranges (<=32, snowy, 33=<, sunny)\n\n    _index__WEBPACK_IMPORTED_MODULE_0__.WEATHER_CARD_CONTAIN_DIV.prepend(weatherCard);\n  };\n\n  static changeWeatherUnit = (target) => {\n\n    console.log(target.nextElementSibling);\n\n    const weatherCard = `${target.classList}`;\n    const locationName = weatherCard.replaceAll('-', ' ');\n    // Gives us the city name for API (e.g. New York)\n\n    // If nextElementSibling includes F or C then execute Metric / Imperial weather functions\n    if (target.nextElementSibling.innerText.includes('°F') == true) {\n      // Function - Replace Imperial units with Metric\n      return (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.currentWeatherMetric)(locationName);\n    } else {\n      // Function - Replace Metric units with Imperial\n      return (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.currentWeatherImperial)(locationName);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/WeatherUI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WEATHER_CARD_CONTAIN_DIV\": () => (/* binding */ WEATHER_CARD_CONTAIN_DIV)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI */ \"./src/weatherAPI.js\");\n/* harmony import */ var _WeatherUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeatherUI */ \"./src/WeatherUI.js\");\n/* eslint-disable no-unused-vars */\n/* eslint-disable import/no-cycle */\n/* eslint-disable no-console */\n/* eslint-disable no-undef */\n\n\n\n\n/* This is creating the elements that will be used in the app. */\nconst BODY = document.querySelector('body');\nconst CONTAINER_DIV = document.createElement('div');\nconst USER_INPUT_CONTAIN_DIV = document.createElement('div');\nconst WEATHER_CARD_CONTAIN_DIV = document.createElement('div');\nconst LOCATION_INPUT = document.createElement('input');\nconst LOCATION_UPDATE_BTN = document.createElement('button');\n\n// SET UP - WEB APP ELEMENTS\nCONTAINER_DIV.classList.add('main-container');\nUSER_INPUT_CONTAIN_DIV.classList.add('input-container');\nLOCATION_INPUT.classList.add('location-input');\nLOCATION_UPDATE_BTN.classList.add('location-submit');\nLOCATION_UPDATE_BTN.innerHTML = 'Update';\n\nWEATHER_CARD_CONTAIN_DIV.classList.add('weather-container');\n\nBODY.appendChild(CONTAINER_DIV);\nCONTAINER_DIV.append(USER_INPUT_CONTAIN_DIV, WEATHER_CARD_CONTAIN_DIV);\nUSER_INPUT_CONTAIN_DIV.append(LOCATION_INPUT, LOCATION_UPDATE_BTN);\n\n// Event - Update location\nLOCATION_UPDATE_BTN.addEventListener('click', () => {\n  // Function - Modify location string to be consistent\n  const location = LOCATION_INPUT.value;\n\n  // Define - City Weather API, return within another async function\n  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.currentWeatherImperial)(location);\n\n  // Event - Clear input field after click\n  document.querySelector('.location-input').value = '';\n});\n\n// Event - Toggle Fahrenheit / Celsius\nWEATHER_CARD_CONTAIN_DIV.addEventListener('click', (e) => {\n  console.log(e.target);\n\n  _WeatherUI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeWeatherUnit(e.target);\n});\n\n// eslint-disable-next-line import/prefer-default-export\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentWeatherImperial\": () => (/* binding */ currentWeatherImperial),\n/* harmony export */   \"currentWeatherMetric\": () => (/* binding */ currentWeatherMetric)\n/* harmony export */ });\n/* harmony import */ var _WeatherObjectMetric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherObjectMetric */ \"./src/WeatherObjectMetric.js\");\n/* harmony import */ var _WeatherObjectImperial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeatherObjectImperial */ \"./src/WeatherObjectImperial.js\");\n/* harmony import */ var _WeatherUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeatherUI */ \"./src/WeatherUI.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nasync function fetchGeocode(location) {\n  try {\n    const geocodeResponse = await fetch(\n      `http://api.openweathermap.org/geo/1.0/direct?q=${location},USA&limit=5&appid=1228246814ef93d1b972cc316a42abeb`,\n      { mode: 'cors' },\n    );\n    const geocode = await geocodeResponse.json();\n    const geocodeLat = geocode[0].lat;\n    const geocodeLon = geocode[0].lon;\n\n    return { \n      'latitude': geocodeLat, \n      'longitude': geocodeLon \n    };\n  } catch (err) {\n    console.log(err);\n  }\n}\n\nasync function fetchWeather(latitude, longitude) {\n  try {\n    const weatherResponse = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=1228246814ef93d1b972cc316a42abeb`,\n      { mode: 'cors' },\n    );\n\n    const weatherImperial = await weatherResponse.json();\n\n    return weatherImperial;\n  } catch (err) {\n    console.log(err);\n  }\n}\n\nfunction defineWeatherInfo(weatherAPI) {\n  \n  const weatherLocation = weatherAPI.name;\n  const weatherDescription = weatherAPI.weather[0].description;\n  const weatherTemperature = weatherAPI.main.temp;\n  const weatherFeel = weatherAPI.main.feels_like;\n  const weatherHumidity = weatherAPI.main.humidity;\n  const weatherWindSpeed = weatherAPI.wind.speed;\n\n  const cityWeather = new _WeatherObjectImperial__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n    weatherLocation,\n    weatherDescription,\n    weatherTemperature,\n    weatherFeel,\n    weatherHumidity,\n    weatherWindSpeed,\n  );\n\n  return cityWeather;\n\n  // If statement to choose Fahrenheit or Celsius\n  // if (variable == 'F') {\n  //   const cityWeather = new WeatherObjectImperial(\n  //     weatherLocation,\n  //     weatherDescription,\n  //     weatherTemperature,\n  //     weatherFeelFahrenheit,\n  //     weatherHumidity,\n  //     weatherWindSpeedMPH,\n  //   );\n\n  //   return cityWeather;\n  // } else if (unit == 'C') {\n  //   const cityWeather = new WeatherObjectMetric(\n  //     weatherLocation,\n  //     weatherDescription,\n  //     weatherTemperature,\n  //     weatherFeelFahrenheit,\n  //     weatherHumidity,\n  //     weatherWindSpeedMPH,\n  //   );\n\n  //   return cityWeather;    \n  // }\n}\n\n// eslint-disable-next-line consistent-return\nasync function currentWeatherImperial(location) {\n  try {\n\n    // Defining variable with await still calls the function\n    const geocode = await fetchGeocode(location);\n    // console.log(geocode);\n\n    const weatherAPI = await fetchWeather(geocode.latitude, geocode.longitude);\n    console.log(weatherAPI);\n    \n    // define weatherAPI;\n    const cityWeather = defineWeatherInfo(weatherAPI);\n\n    _WeatherUI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].appendWeatherInfo(cityWeather);\n\n    return cityWeather;\n  } catch (err) {\n    // eslint-disable-next-line no-console\n    console.log(err);\n  }\n}\n\n// eslint-disable-next-line consistent-return\nasync function currentWeatherMetric(location) {\n  try {\n\n    // Defining variable with await still calls the function\n    const geocode = await fetchGeocode(location);\n    // console.log(geocode);\n\n    const weatherResponse = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?lat=${geocode.latitude}&lon=${geocode.longitude}&units=metric&appid=1228246814ef93d1b972cc316a42abeb`,\n      { mode: 'cors' },\n    );\n    const weatherAPI = await weatherResponse.json();\n    \n    // define weatherAPI;\n    const cityWeather = defineWeatherInfo(weatherAPI);\n\n    _WeatherUI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].appendWeatherInfo(cityWeather);\n\n    return cityWeather;\n  } catch (err) {\n    // eslint-disable-next-line no-console\n    console.log(err);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/weatherAPI.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;