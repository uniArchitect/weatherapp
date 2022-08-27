/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* eslint-disable no-console */\n/* eslint-disable no-undef */\n// Geocoding API\n// Promise Version\n// refreshAPI = () => {\n//   fetch(\n//     \"http://api.openweathermap.org/geo/1.0/direct?q=New York,USA&limit=5&appid=1228246814ef93d1b972cc316a42abeb\",\n//     { mode: \"cors\" }\n//   )\n//     .then((response) => response.json())\n//     .then((response) => {\n//       console.log(response);\n//       console.log(response[0].lat);\n//       console.log(response[0].lon);\n//     })\n//     .catch(console.err);\n// };\n\n// Async Version\nasync function refreshAPI() {\n  try {\n    const response = await fetch(\n      \"http://api.openweathermap.org/geo/1.0/direct?q=New York,USA&limit=5&appid=1228246814ef93d1b972cc316a42abeb\",\n      { mode: \"cors\" }\n    );\n    const geocode = await response.json();\n    const geocodeLat = geocode[0].lat;\n    const geocodeLon = geocode[0].lon;\n\n    console.log(geocodeLat, geocodeLon);\n\n    return geocodeLat, geocodeLon;\n\n  } catch (err) {\n    console.log(err);\n  }\n}\n\nrefreshAPI();\n\n// Current Weather Data\n// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}\n\ncurrentWeatherAPI = (geocodeLat, geocodeLon) => {\n  fetch(\n    `https://api.openweathermap.org/data/2.5/weather?lat=${geocodeLat}&lon=${geocodeLon}&appid=1228246814ef93d1b972cc316a42abeb`,\n    { mode: \"cors\" }\n  )\n    .then((response) => response.json())\n    .then((response) => {\n      console.log(response);\n    })\n    .catch(console.err);\n};\n\ncurrentWeatherAPI(geocodeLat, geocodeLon);\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;