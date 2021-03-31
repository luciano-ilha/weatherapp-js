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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: \\\"montserrat\\\", sans-serif;\\n  background-size: cover;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  overflow: hidden;\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\n.app-wrap {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)); }\\n\\n.topbox {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 50px 15px 15px;\\n  margin-top: 60px; }\\n  .topbox-search {\\n    width: 100%;\\n    max-width: 280px;\\n    padding: 10px 15px;\\n    border: none;\\n    outline: none;\\n    background-color: rgba(255, 255, 255, 0.3);\\n    border-radius: 16px 0 16px 9px;\\n    border-bottom: 3px solid #df8e00;\\n    color: #313131;\\n    font-size: 20px;\\n    font-weight: 300;\\n    transition: 0.2s ease-out;\\n    box-shadow: 0 0 38px 4px rgba(0, 0, 0, 0.8); }\\n    .topbox-search:focus {\\n      background-color: rgba(255, 255, 255, 0.6); }\\n\\n.mainbox {\\n  flex: 1 1 100%;\\n  padding: 25px 25px 50px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  text-align: center; }\\n  .mainbox-location-city {\\n    color: #fff;\\n    font-size: 60px;\\n    font-weight: 500;\\n    margin-bottom: 16px; }\\n  .mainbox-location-date {\\n    color: #fff;\\n    font-size: 28px;\\n    margin-top: 8px; }\\n\\n.currentbox-temp {\\n  color: #fff;\\n  font-size: 110px;\\n  font-weight: 900;\\n  margin: 30px 0;\\n  text-shadow: 2px 10px rgba(0, 0, 0, 0.6); }\\n  .currentbox-temp-unit {\\n    font-weight: 500; }\\n  .currentbox-temp-toggle {\\n    font-size: 20px;\\n    color: #363636;\\n    background-color: #f7a519;\\n    text-shadow: none;\\n    padding: 10px;\\n    border-radius: 5px;\\n    margin-left: 30px; }\\n    .currentbox-temp-toggle:hover {\\n      cursor: pointer;\\n      animation: color-change 0.4s infinite; }\\n\\n@keyframes color-change {\\n  0% {\\n    color: #e7e7e7; }\\n  50% {\\n    color: #363636; }\\n  100% {\\n    color: #e7e7e7; } }\\n\\n.currentbox-weather {\\n  color: #fff;\\n  font-size: 35px;\\n  font-weight: 700;\\n  font-style: italic;\\n  margin-bottom: 20px;\\n  text-shadow: 0 3px rgba(0, 0, 0, 0.4); }\\n\\n.currentbox-hilo {\\n  color: #fff;\\n  font-size: 26px;\\n  font-weight: 500;\\n  text-shadow: 0 3px rgba(0, 0, 0, 0.4); }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weatherapp/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\n\nconst api = {\n  key: \"506cbac2b3ba4e29e7a6542e49fa22bb\",\n  base: \"https://api.openweathermap.org/data/2.5/\",\n};\n\nconst bodyTag = document.querySelector(\"body\");\nbodyTag.style.backgroundImage = \"url('/assets/weatherscshot.jpeg')\";\n\nconst temp = document.querySelector(\".currentbox-temp-value\");\nconst displayUnit = document.querySelector(\".currentbox-temp-unit\");\nconst tempUnit = document.querySelector(\".currentbox-temp-toggle\");\nconst hiloLovalue = document.querySelector(\".currentbox-hilo-lovalue\");\nconst hiloLounit = document.querySelector(\".currentbox-hilo-lounit\");\nconst hiloHivalue = document.querySelector(\".currentbox-hilo-hivalue\");\nconst hiloHiunit = document.querySelector(\".currentbox-hilo-hiunit\");\n\nconst setQuery = (event) => {\n  if (event.keyCode == 13) {\n    getResults(searchBox.value)\n      .then(displayResults)\n      .catch((err) => {\n        let errMsg = document.querySelector(\".mainbox-location-city\");\n        errMsg.innerText = `${err}`;\n        let errDate = document.querySelector(\".mainbox-location-date\");\n        errDate.innerText = \"\";\n        temp.innerText = \"\";\n        let errSky = document.querySelector(\".currentbox-weather\");\n        errSky.innerText = \"\";\n        hiloLovalue.innerText = \"\";\n        hiloHivalue.innerText = \"\";\n        searchBox.value = \"\";\n      });\n  }\n};\n\nconst searchBox = document.querySelector(\".topbox-search\");\nsearchBox.addEventListener(\"keypress\", setQuery);\n\nconst getResults = async (query) => {\n  const queryResult = await fetch(\n    `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`\n  );\n\n  if (queryResult.status !== 200) {\n    throw new Error(\"Oooops! Sorry, city not found! Please try again.\");\n  }\n\n  const weatherResponse = await queryResult.json();\n\n  return weatherResponse;\n};\n\nconst displayResults = (weather) => {\n  let city = document.querySelector(\".mainbox-location-city\");\n  city.innerText = `${weather.name}, ${weather.sys.country}`;\n\n  let now = new Date();\n\n  let date = document.querySelector(\".mainbox-location-date\");\n  date.innerText = dateBuilder(now);\n\n  if (displayUnit.innerText == \"°c\") {\n    temp.innerText = `${Math.round(weather.main.temp)}`;\n    hiloLovalue.innerText = `${Math.round(weather.main.temp_min)}`;\n    hiloHivalue.innerText = `${Math.round(weather.main.temp_max)}`;\n  } else {\n    temp.innerText = `${Math.round((weather.main.temp * 9) / 5 + 32)}`;\n    hiloLovalue.innerText = `${Math.round(\n      (weather.main.temp_min * 9) / 5 + 32\n    )}`;\n    hiloHivalue.innerText = `${Math.round(\n      (weather.main.temp_max * 9) / 5 + 32\n    )}`;\n  }\n\n  let dayStatus = document.querySelector(\".currentbox-weather\");\n  dayStatus.innerText = weather.weather[0].main;\n\n  if (weather.weather[0].main == \"Clear\") {\n    bodyTag.style.backgroundImage = \"url('/assets/sunny.jpeg')\";\n  } else if (weather.weather[0].main == \"Clouds\") {\n    bodyTag.style.backgroundImage = \"url('/assets/clouds.jpeg')\";\n  } else if (weather.weather[0].main == \"Rain\") {\n    bodyTag.style.backgroundImage = \"url('/assets/rain.jpeg')\";\n  } else if (weather.weather[0].main == \"Mist\") {\n    bodyTag.style.backgroundImage = \"url('/assets/mist.jpeg')\";\n  } else if (weather.weather[0].main == \"Haze\") {\n    bodyTag.style.backgroundImage = \"url('/assets/haze.jpeg')\";\n  } else {\n    bodyTag.style.backgroundImage = \"url('/assets/weatherscshot.jpeg')\";\n  }\n\n  searchBox.value = \"\";\n};\n\nconst dateBuilder = (d) => {\n  let months = [\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\",\n  ];\n\n  let days = [\n    \"Sunday\",\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\",\n    \"Saturday\",\n  ];\n\n  let day = days[d.getDay()];\n  let date = d.getDate();\n  let month = months[d.getMonth()];\n  let year = d.getFullYear();\n\n  return `${day}, ${date} ${month} - ${year}`;\n};\n\nconst tempUnitChanger = () => {\n  if (displayUnit.innerText == \"°c\") {\n    temp.innerText = `${(temp.innerText * 9) / 5 + 32}`;\n    displayUnit.innerText = \"°f\";\n    tempUnit.innerText = \"Celsius\";\n    hiloLovalue.innerText = `${Math.round(\n      (hiloLovalue.innerText * 9) / 5 + 32\n    )}`;\n    hiloLounit.innerText = \"°f /\";\n    hiloHivalue.innerText = `${Math.round(\n      (hiloHivalue.innerText * 9) / 5 + 32\n    )}`;\n    hiloHiunit.innerText = \"°f\";\n  } else {\n    temp.innerHTML = `${Math.round(((temp.innerText - 32) * 5) / 9)}`;\n    displayUnit.innerText = \"°c\";\n    tempUnit.innerText = \"Farenheit\";\n    hiloLovalue.innerText = `${Math.round(\n      ((hiloLovalue.innerText - 32) * 5) / 9\n    )}`;\n    hiloLounit.innerText = \"°c /\";\n    hiloHivalue.innerText = `${Math.round(\n      ((hiloHivalue.innerText - 32) * 5) / 9\n    )}`;\n    hiloHiunit.innerText = \"°c\";\n  }\n};\n\ntempUnit.addEventListener(\"click\", tempUnitChanger);\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;