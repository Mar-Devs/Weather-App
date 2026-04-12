/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../node_modules/css-loader/dist/cjs.js!./src/daily-display.css"
/*!****************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./src/daily-display.css ***!
  \****************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.flex-container {
  grid-row: 2/3;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.daily-container {
  width: 60%;
  height: 12.5rem;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, #ffd6e7, white);
  border-style: solid;
  border-color: #ff85aa;
  border-width: 0.5px;
  border-radius: 10px;
  padding: 2rem;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: pink white;
}

.daily-display {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
}

.daily-display h2 {
  font-size: 2rem;
}

.daily-display-h2 {
  display: flex;
  align-items: center;
}

.date-display,
.condition {
  font-size: 0.6rem;
  opacity: 0.8;
}

.daily-info {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.humidity,
.wind-speed,
.visibility {
  height: 2rem;
  width: 5rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}

.humidity img,
.wind-speed img,
.visibility img {
  height: 0.8rem;
  width: 0.8rem;
  margin-right: 5px;
}

.daily-temp-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.daily-temp-container h2 {
  font-size: 5rem;
}

.daily-temp-container p {
  font-size: 1rem;
  opacity: 0.8;
}

.main-weather-icon {
  height: 4rem;
  width: 4rem;
}
`, "",{"version":3,"sources":["webpack://./src/daily-display.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,kDAAkD;EAClD,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;;;EAGE,YAAY;EACZ,WAAW;EACX,0CAA0C;EAC1C,mBAAmB;EACnB,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;;;EAGE,cAAc;EACd,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":[".flex-container {\r\n  grid-row: 2/3;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.daily-container {\r\n  width: 60%;\r\n  height: 12.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background: linear-gradient(90deg, #ffd6e7, white);\r\n  border-style: solid;\r\n  border-color: #ff85aa;\r\n  border-width: 0.5px;\r\n  border-radius: 10px;\r\n  padding: 2rem;\r\n  overflow: auto;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: pink white;\r\n}\r\n\r\n.daily-display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n  height: 100%;\r\n}\r\n\r\n.daily-display h2 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.daily-display-h2 {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.date-display,\r\n.condition {\r\n  font-size: 0.6rem;\r\n  opacity: 0.8;\r\n}\r\n\r\n.daily-info {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 5px;\r\n}\r\n\r\n.humidity,\r\n.wind-speed,\r\n.visibility {\r\n  height: 2rem;\r\n  width: 5rem;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  border-radius: 10px;\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.humidity img,\r\n.wind-speed img,\r\n.visibility img {\r\n  height: 0.8rem;\r\n  width: 0.8rem;\r\n  margin-right: 5px;\r\n}\r\n\r\n.daily-temp-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.daily-temp-container h2 {\r\n  font-size: 5rem;\r\n}\r\n\r\n.daily-temp-container p {\r\n  font-size: 1rem;\r\n  opacity: 0.8;\r\n}\r\n\r\n.main-weather-icon {\r\n  height: 4rem;\r\n  width: 4rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../node_modules/css-loader/dist/cjs.js!./src/hourly.css"
/*!*********************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./src/hourly.css ***!
  \*********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.outer-container {
  grid-row: 3/4;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hourly-display {
  display: grid;
  grid-auto-flow: row;
  background-color: white;
  border-style: solid;
  border-width: 0.5px;
  border-color: var(--border-color);
  max-width: 60%;
  min-width: 60%;
  height: 10rem;
  border-radius: 10px;
  padding: 2rem;
  gap: 2rem;
}

.hourly-p p {
  color: var(--text-color);
  overflow: scroll;
}

/* .hour-divs {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: pink white;
   display: grid;
  grid-template-columns: repeat(24,1fr); 
  gap: 1rem;
} */

.hour-divs {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: pink white;
  display: grid;
  grid-auto-flow: column;
  min-width: inherit;
  gap: 1rem;
}

.now {
  background-color: #ff85aa;
}

.now,
.hour-divs-dynamic {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 5rem;
  border-radius: 10px;
  min-width: 0;
  min-height: 0;
}

.hour-divs-dynamic {
  background-color: pink;
}

.temps-icon {
  height: 2rem;
  width: 2rem;
}
`, "",{"version":3,"sources":["webpack://./src/hourly.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,iCAAiC;EACjC,cAAc;EACd,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;;;;;;;GAOG;;AAEH;EACE,cAAc;EACd,qBAAqB;EACrB,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":[".outer-container {\r\n  grid-row: 3/4;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.hourly-display {\r\n  display: grid;\r\n  grid-auto-flow: row;\r\n  background-color: white;\r\n  border-style: solid;\r\n  border-width: 0.5px;\r\n  border-color: var(--border-color);\r\n  max-width: 60%;\r\n  min-width: 60%;\r\n  height: 10rem;\r\n  border-radius: 10px;\r\n  padding: 2rem;\r\n  gap: 2rem;\r\n}\r\n\r\n.hourly-p p {\r\n  color: var(--text-color);\r\n  overflow: scroll;\r\n}\r\n\r\n/* .hour-divs {\r\n  overflow: auto;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: pink white;\r\n   display: grid;\r\n  grid-template-columns: repeat(24,1fr); \r\n  gap: 1rem;\r\n} */\r\n\r\n.hour-divs {\r\n  overflow: auto;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: pink white;\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  min-width: inherit;\r\n  gap: 1rem;\r\n}\r\n\r\n.now {\r\n  background-color: #ff85aa;\r\n}\r\n\r\n.now,\r\n.hour-divs-dynamic {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 5rem;\r\n  width: 5rem;\r\n  border-radius: 10px;\r\n  min-width: 0;\r\n  min-height: 0;\r\n}\r\n\r\n.hour-divs-dynamic {\r\n  background-color: pink;\r\n}\r\n\r\n.temps-icon {\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../node_modules/css-loader/dist/cjs.js!./src/landing-page.css"
/*!***************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./src/landing-page.css ***!
  \***************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.landing-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  background-color: white;
  border-style: solid;
  border-width: 0.5px;
  border-color: var(--border-color);
  border-radius: 10px;
  margin: 1rem;
}

.landing-container h2 {
  font-style: italic;
  color: var(--text-color);
}

.input-container-landing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--text-color);
}

.search-city-input-first {
  color: var(--text-color);
  font-size: 16px;
}

.landing-unit {
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: stretch;
}

.user-unit-first {
  color: var(--text-color);
  width: auto;
  margin-top: 2px;
  background-color: white;
  padding: 0.1rem;
  border-radius: 10px;
}

button {
  width: 10rem;
  margin-top: 1rem;
  background-color: white;
  border-color: var(--border-color);
  color: var(--text-color);
  border-style: solid;
  padding: 0.2rem;
}

button:active {
  transform: translateY(10px);
}

.city {
  display: flex;
  flex-direction: column;
  width: auto;
}

.city input {
  margin-top: 2px;
}
`, "",{"version":3,"sources":["webpack://./src/landing-page.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,iCAAiC;EACjC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;EACxB,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,iCAAiC;EACjC,wBAAwB;EACxB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB","sourcesContent":[".landing-input {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem;\r\n  gap: 1rem;\r\n  background-color: white;\r\n  border-style: solid;\r\n  border-width: 0.5px;\r\n  border-color: var(--border-color);\r\n  border-radius: 10px;\r\n  margin: 1rem;\r\n}\r\n\r\n.landing-container h2 {\r\n  font-style: italic;\r\n  color: var(--text-color);\r\n}\r\n\r\n.input-container-landing {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  color: var(--text-color);\r\n}\r\n\r\n.search-city-input-first {\r\n  color: var(--text-color);\r\n  font-size: 16px;\r\n}\r\n\r\n.landing-unit {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: auto;\r\n  align-items: stretch;\r\n}\r\n\r\n.user-unit-first {\r\n  color: var(--text-color);\r\n  width: auto;\r\n  margin-top: 2px;\r\n  background-color: white;\r\n  padding: 0.1rem;\r\n  border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n  width: 10rem;\r\n  margin-top: 1rem;\r\n  background-color: white;\r\n  border-color: var(--border-color);\r\n  color: var(--text-color);\r\n  border-style: solid;\r\n  padding: 0.2rem;\r\n}\r\n\r\nbutton:active {\r\n  transform: translateY(10px);\r\n}\r\n\r\n.city {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: auto;\r\n}\r\n\r\n.city input {\r\n  margin-top: 2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../node_modules/css-loader/dist/cjs.js!./src/media-queries.css"
/*!****************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./src/media-queries.css ***!
  \****************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 1000px) and (min-width: 470px) {
  .daily-container {
    flex-direction: column;

    width: 80%;
  }

  .search-city-input {
    font-size: 16px;
  }
  .week-conditions {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 469px) {
  html {
    font-size: clamp(12px, 16px, 20px);
  }
  .daily-container {
    flex-direction: column;
  }

  .search-city-input {
    font-size: 16px;
  }

  .week-conditions {
    flex-direction: column;
    gap: 1rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/media-queries.css"],"names":[],"mappings":"AAAA;EACE;IACE,sBAAsB;;IAEtB,UAAU;EACZ;;EAEA;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;IACtB,SAAS;EACX;AACF;;AAEA;EACE;IACE,kCAAkC;EACpC;EACA;IACE,sBAAsB;EACxB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,sBAAsB;IACtB,SAAS;EACX;AACF","sourcesContent":["@media (max-width: 1000px) and (min-width: 470px) {\r\n  .daily-container {\r\n    flex-direction: column;\r\n\r\n    width: 80%;\r\n  }\r\n\r\n  .search-city-input {\r\n    font-size: 16px;\r\n  }\r\n  .week-conditions {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 469px) {\r\n  html {\r\n    font-size: clamp(12px, 16px, 20px);\r\n  }\r\n  .daily-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .search-city-input {\r\n    font-size: 16px;\r\n  }\r\n\r\n  .week-conditions {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../node_modules/css-loader/dist/cjs.js!./src/search-bar.css"
/*!*************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./src/search-bar.css ***!
  \*************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/fonts/Inconsolata-VariableFont_wdth,wght.ttf */ "./src/resources/fonts/Inconsolata-VariableFont_wdth,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --text-color: #b07090;
  --border-color: #ff85aa;
}

* {
  padding: 0;
  margin: 0;
}

html {
  font-size: clamp(16px, 20px, 26px);
}

body {
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff0f5;
  overflow: hidden;
  font-family: "Inconsolata";
  padding-top: 1rem ;
}

@font-face {
  font-family: "Inconsolata";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@keyframes spin {
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-icon {
  height: 50px;
  width: 50px;
  animation: spin 0.5s infinite;
}

.loader-div {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #fff0f5;
  z-index: 999;
  position: absolute;
  justify-content: center;
  align-items: center;
  display: none;
}
.container {
  height: 100vh;
  grid-template-rows: repeat(5, 1fr);
  display: none;
  padding-top: 1rem;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 2rem;
  justify-content: center;
}

.search-city {
  grid-row: 1/2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-city input {
  width: 60%;
  padding: 1rem;
  height: 1rem;
  border-radius: 10px;
  border: solid;
  border-width: 0.5px;
  border-color: var(--border-color);
  padding-left: 2.5rem;
  color: var(--text-color);
}

.search-city-icon {
  z-index:  2;;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.2rem;
  width: 1.2rem;
  margin-right: -2.2rem;
}

.search-city-icon img {
  height: 1.2rem;
  width: 1.2rem;
}

@keyframes spin {
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`, "",{"version":3,"sources":["webpack://./src/search-bar.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,gBAAgB;EAChB,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,4CAAoE;AACtE;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,aAAa;EACb,kCAAkC;EAClC,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,iCAAiC;EACjC,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[":root {\r\n  --text-color: #b07090;\r\n  --border-color: #ff85aa;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  font-size: clamp(16px, 20px, 26px);\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #fff0f5;\r\n  overflow: hidden;\r\n  font-family: \"Inconsolata\";\r\n  padding-top: 1rem ;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Inconsolata\";\r\n  src: url(\"./resources/fonts/Inconsolata-VariableFont_wdth,wght.ttf\");\r\n}\r\n\r\n@keyframes spin {\r\n  form {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.loading-icon {\r\n  height: 50px;\r\n  width: 50px;\r\n  animation: spin 0.5s infinite;\r\n}\r\n\r\n.loader-div {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n  background-color: #fff0f5;\r\n  z-index: 999;\r\n  position: absolute;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: none;\r\n}\r\n.container {\r\n  height: 100vh;\r\n  grid-template-rows: repeat(5, 1fr);\r\n  display: none;\r\n  padding-top: 1rem;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  gap: 2rem;\r\n  justify-content: center;\r\n}\r\n\r\n.search-city {\r\n  grid-row: 1/2;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.search-city input {\r\n  width: 60%;\r\n  padding: 1rem;\r\n  height: 1rem;\r\n  border-radius: 10px;\r\n  border: solid;\r\n  border-width: 0.5px;\r\n  border-color: var(--border-color);\r\n  padding-left: 2.5rem;\r\n  color: var(--text-color);\r\n}\r\n\r\n.search-city-icon {\r\n  z-index:  2;;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 1.2rem;\r\n  width: 1.2rem;\r\n  margin-right: -2.2rem;\r\n}\r\n\r\n.search-city-icon img {\r\n  height: 1.2rem;\r\n  width: 1.2rem;\r\n}\r\n\r\n@keyframes spin {\r\n  form {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../node_modules/css-loader/dist/cjs.js!./src/weekly-and-conditions.css"
/*!************************************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./src/weekly-and-conditions.css ***!
  \************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.outer{
    grid-row: 4/5;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.week-conditions{
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    width: 80%;
    gap: 1rem;
}

.week{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-color: var(--border-color);
    border-radius: 10px;
    padding: 2rem;
    gap: 1rem;
    width: auto;
    border: solid 0.5px var(--border-color);
    overflow: auto;
    overflow: hidden;
}

.this-week{
    width: 100%;
}

.this-week p{
    color: var(--text-color);
}

.week-day{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
    margin: 5px;
    border-bottom: solid;
    border-width: 0.5px;
    padding: 1rem;
    border-color: var(--border-color);
}

.high-and-low{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.conditions-div-uv{
    background-color: white;
    border: solid 0.5px var(--border-color);
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: fit-content;
}

.conditions-div-uv p{
    color: var(--text-color);
}

.conditions-div-uv h4{
    font-size: 2rem;
}

.icon-and-condition{
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-and-condition img{
    height: 2rem;
    width: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/weekly-and-conditions.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,oBAAoB;IACpB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,iCAAiC;IACjC,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,WAAW;IACX,uCAAuC;IACvC,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,WAAW;IACX,oBAAoB;IACpB,mBAAmB;IACnB,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,uCAAuC;IACvC,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf","sourcesContent":[".outer{\r\n    grid-row: 4/5;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.week-conditions{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: stretch;\r\n    width: 80%;\r\n    gap: 1rem;\r\n}\r\n\r\n.week{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: white;\r\n    border-color: var(--border-color);\r\n    border-radius: 10px;\r\n    padding: 2rem;\r\n    gap: 1rem;\r\n    width: auto;\r\n    border: solid 0.5px var(--border-color);\r\n    overflow: auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.this-week{\r\n    width: 100%;\r\n}\r\n\r\n.this-week p{\r\n    color: var(--text-color);\r\n}\r\n\r\n.week-day{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    gap: 1rem;\r\n    margin: 5px;\r\n    border-bottom: solid;\r\n    border-width: 0.5px;\r\n    padding: 1rem;\r\n    border-color: var(--border-color);\r\n}\r\n\r\n.high-and-low{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\n.conditions-div-uv{\r\n    background-color: white;\r\n    border: solid 0.5px var(--border-color);\r\n    padding: 2rem;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    max-height: fit-content;\r\n}\r\n\r\n.conditions-div-uv p{\r\n    color: var(--text-color);\r\n}\r\n\r\n.conditions-div-uv h4{\r\n    font-size: 2rem;\r\n}\r\n\r\n.icon-and-condition{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.icon-and-condition img{\r\n    height: 2rem;\r\n    width: 2rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../node_modules/css-loader/dist/runtime/api.js"
/*!************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/runtime/api.js ***!
  \************************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ },

/***/ "../../../node_modules/css-loader/dist/runtime/getUrl.js"
/*!***************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \***************************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "../../../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*******************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*******************************************************************/
(module) {

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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/daily-display.css"
/*!*******************************!*\
  !*** ./src/daily-display.css ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_daily_display_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./daily-display.css */ "../../../node_modules/css-loader/dist/cjs.js!./src/daily-display.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_daily_display_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_daily_display_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_daily_display_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_daily_display_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/hourly.css"
/*!************************!*\
  !*** ./src/hourly.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hourly_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./hourly.css */ "../../../node_modules/css-loader/dist/cjs.js!./src/hourly.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hourly_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hourly_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_hourly_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_hourly_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/landing-page.css"
/*!******************************!*\
  !*** ./src/landing-page.css ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_landing_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./landing-page.css */ "../../../node_modules/css-loader/dist/cjs.js!./src/landing-page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_landing_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_landing_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_landing_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_landing_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/media-queries.css"
/*!*******************************!*\
  !*** ./src/media-queries.css ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./media-queries.css */ "../../../node_modules/css-loader/dist/cjs.js!./src/media-queries.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/search-bar.css"
/*!****************************!*\
  !*** ./src/search-bar.css ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./search-bar.css */ "../../../node_modules/css-loader/dist/cjs.js!./src/search-bar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_search_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_search_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_search_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_search_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/weekly-and-conditions.css"
/*!***************************************!*\
  !*** ./src/weekly-and-conditions.css ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weekly_and_conditions_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./weekly-and-conditions.css */ "../../../node_modules/css-loader/dist/cjs.js!./src/weekly-and-conditions.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weekly_and_conditions_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weekly_and_conditions_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_weekly_and_conditions_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_weekly_and_conditions_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!***********************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***********************************************************************************/
(module) {

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

/***/ },

/***/ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!***************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \***************************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ },

/***/ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!*****************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \*****************************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!*****************************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \*****************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!**********************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \**********************************************************************/
(module) {

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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ },

/***/ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!****************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \****************************************************************************/
(module) {

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

/***/ },

/***/ "./src/svg lazy recursive ^\\.\\/.*\\.svg$ referencedExports: default"
/*!****************************************************************************************!*\
  !*** ./src/svg/ lazy ^\.\/.*\.svg$ referencedExports: default strict namespace object ***!
  \****************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./alert-avalanche-danger.svg": [
		"./src/svg/alert-avalanche-danger.svg",
		[
			"src_svg_alert-avalanche-danger_svg"
		]
	],
	"./alert-falling-rocks.svg": [
		"./src/svg/alert-falling-rocks.svg",
		[
			"src_svg_alert-falling-rocks_svg"
		]
	],
	"./barometer.svg": [
		"./src/svg/barometer.svg",
		[
			"src_svg_barometer_svg"
		]
	],
	"./beanie.svg": [
		"./src/svg/beanie.svg",
		[
			"src_svg_beanie_svg"
		]
	],
	"./celsius.svg": [
		"./src/svg/celsius.svg",
		[
			"src_svg_celsius_svg"
		]
	],
	"./clear-day.svg": [
		"./src/svg/clear-day.svg",
		[
			"src_svg_clear-day_svg"
		]
	],
	"./clear-night.svg": [
		"./src/svg/clear-night.svg",
		[
			"src_svg_clear-night_svg"
		]
	],
	"./cloud-down.svg": [
		"./src/svg/cloud-down.svg",
		[
			"src_svg_cloud-down_svg"
		]
	],
	"./cloud-up.svg": [
		"./src/svg/cloud-up.svg",
		[
			"src_svg_cloud-up_svg"
		]
	],
	"./cloudy.svg": [
		"./src/svg/cloudy.svg",
		[
			"src_svg_cloudy_svg"
		]
	],
	"./code-green.svg": [
		"./src/svg/code-green.svg",
		[
			"src_svg_code-green_svg"
		]
	],
	"./code-orange.svg": [
		"./src/svg/code-orange.svg",
		[
			"src_svg_code-orange_svg"
		]
	],
	"./code-red.svg": [
		"./src/svg/code-red.svg",
		[
			"src_svg_code-red_svg"
		]
	],
	"./code-yellow.svg": [
		"./src/svg/code-yellow.svg",
		[
			"src_svg_code-yellow_svg"
		]
	],
	"./compass.svg": [
		"./src/svg/compass.svg",
		[
			"src_svg_compass_svg"
		]
	],
	"./drizzle.svg": [
		"./src/svg/drizzle.svg",
		[
			"src_svg_drizzle_svg"
		]
	],
	"./dust-day.svg": [
		"./src/svg/dust-day.svg",
		[
			"src_svg_dust-day_svg"
		]
	],
	"./dust-night.svg": [
		"./src/svg/dust-night.svg",
		[
			"src_svg_dust-night_svg"
		]
	],
	"./dust-wind.svg": [
		"./src/svg/dust-wind.svg",
		[
			"src_svg_dust-wind_svg"
		]
	],
	"./dust.svg": [
		"./src/svg/dust.svg",
		[
			"src_svg_dust_svg"
		]
	],
	"./extreme-day-drizzle.svg": [
		"./src/svg/extreme-day-drizzle.svg",
		[
			"src_svg_extreme-day-drizzle_svg"
		]
	],
	"./extreme-day-fog.svg": [
		"./src/svg/extreme-day-fog.svg",
		[
			"src_svg_extreme-day-fog_svg"
		]
	],
	"./extreme-day-hail.svg": [
		"./src/svg/extreme-day-hail.svg",
		[
			"src_svg_extreme-day-hail_svg"
		]
	],
	"./extreme-day-haze.svg": [
		"./src/svg/extreme-day-haze.svg",
		[
			"src_svg_extreme-day-haze_svg"
		]
	],
	"./extreme-day-rain.svg": [
		"./src/svg/extreme-day-rain.svg",
		[
			"src_svg_extreme-day-rain_svg"
		]
	],
	"./extreme-day-sleet.svg": [
		"./src/svg/extreme-day-sleet.svg",
		[
			"src_svg_extreme-day-sleet_svg"
		]
	],
	"./extreme-day-smoke.svg": [
		"./src/svg/extreme-day-smoke.svg",
		[
			"src_svg_extreme-day-smoke_svg"
		]
	],
	"./extreme-day-snow.svg": [
		"./src/svg/extreme-day-snow.svg",
		[
			"src_svg_extreme-day-snow_svg"
		]
	],
	"./extreme-day.svg": [
		"./src/svg/extreme-day.svg",
		[
			"src_svg_extreme-day_svg"
		]
	],
	"./extreme-drizzle.svg": [
		"./src/svg/extreme-drizzle.svg",
		[
			"src_svg_extreme-drizzle_svg"
		]
	],
	"./extreme-fog.svg": [
		"./src/svg/extreme-fog.svg",
		[
			"src_svg_extreme-fog_svg"
		]
	],
	"./extreme-hail.svg": [
		"./src/svg/extreme-hail.svg",
		[
			"src_svg_extreme-hail_svg"
		]
	],
	"./extreme-haze.svg": [
		"./src/svg/extreme-haze.svg",
		[
			"src_svg_extreme-haze_svg"
		]
	],
	"./extreme-night-drizzle.svg": [
		"./src/svg/extreme-night-drizzle.svg",
		[
			"src_svg_extreme-night-drizzle_svg"
		]
	],
	"./extreme-night-fog.svg": [
		"./src/svg/extreme-night-fog.svg",
		[
			"src_svg_extreme-night-fog_svg"
		]
	],
	"./extreme-night-hail.svg": [
		"./src/svg/extreme-night-hail.svg",
		[
			"src_svg_extreme-night-hail_svg"
		]
	],
	"./extreme-night-haze.svg": [
		"./src/svg/extreme-night-haze.svg",
		[
			"src_svg_extreme-night-haze_svg"
		]
	],
	"./extreme-night-rain.svg": [
		"./src/svg/extreme-night-rain.svg",
		[
			"src_svg_extreme-night-rain_svg"
		]
	],
	"./extreme-night-sleet.svg": [
		"./src/svg/extreme-night-sleet.svg",
		[
			"src_svg_extreme-night-sleet_svg"
		]
	],
	"./extreme-night-smoke.svg": [
		"./src/svg/extreme-night-smoke.svg",
		[
			"src_svg_extreme-night-smoke_svg"
		]
	],
	"./extreme-night-snow.svg": [
		"./src/svg/extreme-night-snow.svg",
		[
			"src_svg_extreme-night-snow_svg"
		]
	],
	"./extreme-night.svg": [
		"./src/svg/extreme-night.svg",
		[
			"src_svg_extreme-night_svg"
		]
	],
	"./extreme-rain.svg": [
		"./src/svg/extreme-rain.svg",
		[
			"src_svg_extreme-rain_svg"
		]
	],
	"./extreme-sleet.svg": [
		"./src/svg/extreme-sleet.svg",
		[
			"src_svg_extreme-sleet_svg"
		]
	],
	"./extreme-smoke.svg": [
		"./src/svg/extreme-smoke.svg",
		[
			"src_svg_extreme-smoke_svg"
		]
	],
	"./extreme-snow.svg": [
		"./src/svg/extreme-snow.svg",
		[
			"src_svg_extreme-snow_svg"
		]
	],
	"./extreme.svg": [
		"./src/svg/extreme.svg",
		[
			"src_svg_extreme_svg"
		]
	],
	"./fahrenheit.svg": [
		"./src/svg/fahrenheit.svg",
		[
			"src_svg_fahrenheit_svg"
		]
	],
	"./falling-stars.svg": [
		"./src/svg/falling-stars.svg",
		[
			"src_svg_falling-stars_svg"
		]
	],
	"./flag-gale-warning.svg": [
		"./src/svg/flag-gale-warning.svg",
		[
			"src_svg_flag-gale-warning_svg"
		]
	],
	"./flag-hurricane-warning.svg": [
		"./src/svg/flag-hurricane-warning.svg",
		[
			"src_svg_flag-hurricane-warning_svg"
		]
	],
	"./flag-small-craft-advisory.svg": [
		"./src/svg/flag-small-craft-advisory.svg",
		[
			"src_svg_flag-small-craft-advisory_svg"
		]
	],
	"./flag-storm-warning.svg": [
		"./src/svg/flag-storm-warning.svg",
		[
			"src_svg_flag-storm-warning_svg"
		]
	],
	"./fog-day.svg": [
		"./src/svg/fog-day.svg",
		[
			"src_svg_fog-day_svg"
		]
	],
	"./fog-night.svg": [
		"./src/svg/fog-night.svg",
		[
			"src_svg_fog-night_svg"
		]
	],
	"./fog.svg": [
		"./src/svg/fog.svg",
		[
			"src_svg_fog_svg"
		]
	],
	"./glove.svg": [
		"./src/svg/glove.svg",
		[
			"src_svg_glove_svg"
		]
	],
	"./hail.svg": [
		"./src/svg/hail.svg",
		[
			"src_svg_hail_svg"
		]
	],
	"./haze-day.svg": [
		"./src/svg/haze-day.svg",
		[
			"src_svg_haze-day_svg"
		]
	],
	"./haze-night.svg": [
		"./src/svg/haze-night.svg",
		[
			"src_svg_haze-night_svg"
		]
	],
	"./haze.svg": [
		"./src/svg/haze.svg",
		[
			"src_svg_haze_svg"
		]
	],
	"./horizon.svg": [
		"./src/svg/horizon.svg",
		[
			"src_svg_horizon_svg"
		]
	],
	"./humidity.svg": [
		"./src/svg/humidity.svg",
		[
			"src_svg_humidity_svg"
		]
	],
	"./hurricane.svg": [
		"./src/svg/hurricane.svg",
		[
			"src_svg_hurricane_svg"
		]
	],
	"./lightning-bolt.svg": [
		"./src/svg/lightning-bolt.svg",
		[
			"src_svg_lightning-bolt_svg"
		]
	],
	"./mist.svg": [
		"./src/svg/mist.svg",
		[
			"src_svg_mist_svg"
		]
	],
	"./moon-first-quarter.svg": [
		"./src/svg/moon-first-quarter.svg",
		[
			"src_svg_moon-first-quarter_svg"
		]
	],
	"./moon-full.svg": [
		"./src/svg/moon-full.svg",
		[
			"src_svg_moon-full_svg"
		]
	],
	"./moon-last-quarter.svg": [
		"./src/svg/moon-last-quarter.svg",
		[
			"src_svg_moon-last-quarter_svg"
		]
	],
	"./moon-new.svg": [
		"./src/svg/moon-new.svg",
		[
			"src_svg_moon-new_svg"
		]
	],
	"./moon-waning-crescent.svg": [
		"./src/svg/moon-waning-crescent.svg",
		[
			"src_svg_moon-waning-crescent_svg"
		]
	],
	"./moon-waning-gibbous.svg": [
		"./src/svg/moon-waning-gibbous.svg",
		[
			"src_svg_moon-waning-gibbous_svg"
		]
	],
	"./moon-waxing-crescent.svg": [
		"./src/svg/moon-waxing-crescent.svg",
		[
			"src_svg_moon-waxing-crescent_svg"
		]
	],
	"./moon-waxing-gibbous.svg": [
		"./src/svg/moon-waxing-gibbous.svg",
		[
			"src_svg_moon-waxing-gibbous_svg"
		]
	],
	"./moonrise.svg": [
		"./src/svg/moonrise.svg",
		[
			"src_svg_moonrise_svg"
		]
	],
	"./moonset.svg": [
		"./src/svg/moonset.svg",
		[
			"src_svg_moonset_svg"
		]
	],
	"./not-available.svg": [
		"./src/svg/not-available.svg",
		[
			"src_svg_not-available_svg"
		]
	],
	"./overcast-day-drizzle.svg": [
		"./src/svg/overcast-day-drizzle.svg",
		[
			"src_svg_overcast-day-drizzle_svg"
		]
	],
	"./overcast-day-fog.svg": [
		"./src/svg/overcast-day-fog.svg",
		[
			"src_svg_overcast-day-fog_svg"
		]
	],
	"./overcast-day-hail.svg": [
		"./src/svg/overcast-day-hail.svg",
		[
			"src_svg_overcast-day-hail_svg"
		]
	],
	"./overcast-day-haze.svg": [
		"./src/svg/overcast-day-haze.svg",
		[
			"src_svg_overcast-day-haze_svg"
		]
	],
	"./overcast-day-rain.svg": [
		"./src/svg/overcast-day-rain.svg",
		[
			"src_svg_overcast-day-rain_svg"
		]
	],
	"./overcast-day-sleet.svg": [
		"./src/svg/overcast-day-sleet.svg",
		[
			"src_svg_overcast-day-sleet_svg"
		]
	],
	"./overcast-day-smoke.svg": [
		"./src/svg/overcast-day-smoke.svg",
		[
			"src_svg_overcast-day-smoke_svg"
		]
	],
	"./overcast-day-snow.svg": [
		"./src/svg/overcast-day-snow.svg",
		[
			"src_svg_overcast-day-snow_svg"
		]
	],
	"./overcast-day.svg": [
		"./src/svg/overcast-day.svg",
		[
			"src_svg_overcast-day_svg"
		]
	],
	"./overcast-drizzle.svg": [
		"./src/svg/overcast-drizzle.svg",
		[
			"src_svg_overcast-drizzle_svg"
		]
	],
	"./overcast-fog.svg": [
		"./src/svg/overcast-fog.svg",
		[
			"src_svg_overcast-fog_svg"
		]
	],
	"./overcast-hail.svg": [
		"./src/svg/overcast-hail.svg",
		[
			"src_svg_overcast-hail_svg"
		]
	],
	"./overcast-haze.svg": [
		"./src/svg/overcast-haze.svg",
		[
			"src_svg_overcast-haze_svg"
		]
	],
	"./overcast-night-drizzle.svg": [
		"./src/svg/overcast-night-drizzle.svg",
		[
			"src_svg_overcast-night-drizzle_svg"
		]
	],
	"./overcast-night-fog.svg": [
		"./src/svg/overcast-night-fog.svg",
		[
			"src_svg_overcast-night-fog_svg"
		]
	],
	"./overcast-night-hail.svg": [
		"./src/svg/overcast-night-hail.svg",
		[
			"src_svg_overcast-night-hail_svg"
		]
	],
	"./overcast-night-haze.svg": [
		"./src/svg/overcast-night-haze.svg",
		[
			"src_svg_overcast-night-haze_svg"
		]
	],
	"./overcast-night-rain.svg": [
		"./src/svg/overcast-night-rain.svg",
		[
			"src_svg_overcast-night-rain_svg"
		]
	],
	"./overcast-night-sleet.svg": [
		"./src/svg/overcast-night-sleet.svg",
		[
			"src_svg_overcast-night-sleet_svg"
		]
	],
	"./overcast-night-smoke.svg": [
		"./src/svg/overcast-night-smoke.svg",
		[
			"src_svg_overcast-night-smoke_svg"
		]
	],
	"./overcast-night-snow.svg": [
		"./src/svg/overcast-night-snow.svg",
		[
			"src_svg_overcast-night-snow_svg"
		]
	],
	"./overcast-night.svg": [
		"./src/svg/overcast-night.svg",
		[
			"src_svg_overcast-night_svg"
		]
	],
	"./overcast-rain.svg": [
		"./src/svg/overcast-rain.svg",
		[
			"src_svg_overcast-rain_svg"
		]
	],
	"./overcast-sleet.svg": [
		"./src/svg/overcast-sleet.svg",
		[
			"src_svg_overcast-sleet_svg"
		]
	],
	"./overcast-smoke.svg": [
		"./src/svg/overcast-smoke.svg",
		[
			"src_svg_overcast-smoke_svg"
		]
	],
	"./overcast-snow.svg": [
		"./src/svg/overcast-snow.svg",
		[
			"src_svg_overcast-snow_svg"
		]
	],
	"./overcast.svg": [
		"./src/svg/overcast.svg",
		[
			"src_svg_overcast_svg"
		]
	],
	"./partly-cloudy-day-drizzle.svg": [
		"./src/svg/partly-cloudy-day-drizzle.svg",
		[
			"src_svg_partly-cloudy-day-drizzle_svg"
		]
	],
	"./partly-cloudy-day-fog.svg": [
		"./src/svg/partly-cloudy-day-fog.svg",
		[
			"src_svg_partly-cloudy-day-fog_svg"
		]
	],
	"./partly-cloudy-day-hail.svg": [
		"./src/svg/partly-cloudy-day-hail.svg",
		[
			"src_svg_partly-cloudy-day-hail_svg"
		]
	],
	"./partly-cloudy-day-haze.svg": [
		"./src/svg/partly-cloudy-day-haze.svg",
		[
			"src_svg_partly-cloudy-day-haze_svg"
		]
	],
	"./partly-cloudy-day-rain.svg": [
		"./src/svg/partly-cloudy-day-rain.svg",
		[
			"src_svg_partly-cloudy-day-rain_svg"
		]
	],
	"./partly-cloudy-day-sleet.svg": [
		"./src/svg/partly-cloudy-day-sleet.svg",
		[
			"src_svg_partly-cloudy-day-sleet_svg"
		]
	],
	"./partly-cloudy-day-smoke.svg": [
		"./src/svg/partly-cloudy-day-smoke.svg",
		[
			"src_svg_partly-cloudy-day-smoke_svg"
		]
	],
	"./partly-cloudy-day-snow.svg": [
		"./src/svg/partly-cloudy-day-snow.svg",
		[
			"src_svg_partly-cloudy-day-snow_svg"
		]
	],
	"./partly-cloudy-day.svg": [
		"./src/svg/partly-cloudy-day.svg",
		[
			"src_svg_partly-cloudy-day_svg"
		]
	],
	"./partly-cloudy-night-drizzle.svg": [
		"./src/svg/partly-cloudy-night-drizzle.svg",
		[
			"src_svg_partly-cloudy-night-drizzle_svg"
		]
	],
	"./partly-cloudy-night-fog.svg": [
		"./src/svg/partly-cloudy-night-fog.svg",
		[
			"src_svg_partly-cloudy-night-fog_svg"
		]
	],
	"./partly-cloudy-night-hail.svg": [
		"./src/svg/partly-cloudy-night-hail.svg",
		[
			"src_svg_partly-cloudy-night-hail_svg"
		]
	],
	"./partly-cloudy-night-haze.svg": [
		"./src/svg/partly-cloudy-night-haze.svg",
		[
			"src_svg_partly-cloudy-night-haze_svg"
		]
	],
	"./partly-cloudy-night-rain.svg": [
		"./src/svg/partly-cloudy-night-rain.svg",
		[
			"src_svg_partly-cloudy-night-rain_svg"
		]
	],
	"./partly-cloudy-night-sleet.svg": [
		"./src/svg/partly-cloudy-night-sleet.svg",
		[
			"src_svg_partly-cloudy-night-sleet_svg"
		]
	],
	"./partly-cloudy-night-smoke.svg": [
		"./src/svg/partly-cloudy-night-smoke.svg",
		[
			"src_svg_partly-cloudy-night-smoke_svg"
		]
	],
	"./partly-cloudy-night-snow.svg": [
		"./src/svg/partly-cloudy-night-snow.svg",
		[
			"src_svg_partly-cloudy-night-snow_svg"
		]
	],
	"./partly-cloudy-night.svg": [
		"./src/svg/partly-cloudy-night.svg",
		[
			"src_svg_partly-cloudy-night_svg"
		]
	],
	"./pollen-flower.svg": [
		"./src/svg/pollen-flower.svg",
		[
			"src_svg_pollen-flower_svg"
		]
	],
	"./pollen-grass.svg": [
		"./src/svg/pollen-grass.svg",
		[
			"src_svg_pollen-grass_svg"
		]
	],
	"./pollen-tree.svg": [
		"./src/svg/pollen-tree.svg",
		[
			"src_svg_pollen-tree_svg"
		]
	],
	"./pollen.svg": [
		"./src/svg/pollen.svg",
		[
			"src_svg_pollen_svg"
		]
	],
	"./pressure-high-alt.svg": [
		"./src/svg/pressure-high-alt.svg",
		[
			"src_svg_pressure-high-alt_svg"
		]
	],
	"./pressure-high.svg": [
		"./src/svg/pressure-high.svg",
		[
			"src_svg_pressure-high_svg"
		]
	],
	"./pressure-low-alt.svg": [
		"./src/svg/pressure-low-alt.svg",
		[
			"src_svg_pressure-low-alt_svg"
		]
	],
	"./pressure-low.svg": [
		"./src/svg/pressure-low.svg",
		[
			"src_svg_pressure-low_svg"
		]
	],
	"./rain.svg": [
		"./src/svg/rain.svg",
		[
			"src_svg_rain_svg"
		]
	],
	"./rainbow-clear.svg": [
		"./src/svg/rainbow-clear.svg",
		[
			"src_svg_rainbow-clear_svg"
		]
	],
	"./rainbow.svg": [
		"./src/svg/rainbow.svg",
		[
			"src_svg_rainbow_svg"
		]
	],
	"./raindrop-measure.svg": [
		"./src/svg/raindrop-measure.svg",
		[
			"src_svg_raindrop-measure_svg"
		]
	],
	"./raindrop.svg": [
		"./src/svg/raindrop.svg",
		[
			"src_svg_raindrop_svg"
		]
	],
	"./raindrops.svg": [
		"./src/svg/raindrops.svg",
		[
			"src_svg_raindrops_svg"
		]
	],
	"./sleet.svg": [
		"./src/svg/sleet.svg",
		[
			"src_svg_sleet_svg"
		]
	],
	"./smoke-particles.svg": [
		"./src/svg/smoke-particles.svg",
		[
			"src_svg_smoke-particles_svg"
		]
	],
	"./smoke.svg": [
		"./src/svg/smoke.svg",
		[
			"src_svg_smoke_svg"
		]
	],
	"./snow.svg": [
		"./src/svg/snow.svg",
		[
			"src_svg_snow_svg"
		]
	],
	"./snowflake.svg": [
		"./src/svg/snowflake.svg",
		[
			"src_svg_snowflake_svg"
		]
	],
	"./snowman.svg": [
		"./src/svg/snowman.svg",
		[
			"src_svg_snowman_svg"
		]
	],
	"./solar-eclipse.svg": [
		"./src/svg/solar-eclipse.svg",
		[
			"src_svg_solar-eclipse_svg"
		]
	],
	"./star.svg": [
		"./src/svg/star.svg",
		[
			"src_svg_star_svg"
		]
	],
	"./starry-night.svg": [
		"./src/svg/starry-night.svg",
		[
			"src_svg_starry-night_svg"
		]
	],
	"./sun-hot.svg": [
		"./src/svg/sun-hot.svg",
		[
			"src_svg_sun-hot_svg"
		]
	],
	"./sunrise.svg": [
		"./src/svg/sunrise.svg",
		[
			"src_svg_sunrise_svg"
		]
	],
	"./sunset.svg": [
		"./src/svg/sunset.svg",
		[
			"src_svg_sunset_svg"
		]
	],
	"./thermometer-celsius.svg": [
		"./src/svg/thermometer-celsius.svg",
		[
			"src_svg_thermometer-celsius_svg"
		]
	],
	"./thermometer-colder.svg": [
		"./src/svg/thermometer-colder.svg",
		[
			"src_svg_thermometer-colder_svg"
		]
	],
	"./thermometer-fahrenheit.svg": [
		"./src/svg/thermometer-fahrenheit.svg",
		[
			"src_svg_thermometer-fahrenheit_svg"
		]
	],
	"./thermometer-glass-celsius.svg": [
		"./src/svg/thermometer-glass-celsius.svg",
		[
			"src_svg_thermometer-glass-celsius_svg"
		]
	],
	"./thermometer-glass-fahrenheit.svg": [
		"./src/svg/thermometer-glass-fahrenheit.svg",
		[
			"src_svg_thermometer-glass-fahrenheit_svg"
		]
	],
	"./thermometer-glass.svg": [
		"./src/svg/thermometer-glass.svg",
		[
			"src_svg_thermometer-glass_svg"
		]
	],
	"./thermometer-mercury-cold.svg": [
		"./src/svg/thermometer-mercury-cold.svg",
		[
			"src_svg_thermometer-mercury-cold_svg"
		]
	],
	"./thermometer-mercury.svg": [
		"./src/svg/thermometer-mercury.svg",
		[
			"src_svg_thermometer-mercury_svg"
		]
	],
	"./thermometer-moon.svg": [
		"./src/svg/thermometer-moon.svg",
		[
			"src_svg_thermometer-moon_svg"
		]
	],
	"./thermometer-raindrop.svg": [
		"./src/svg/thermometer-raindrop.svg",
		[
			"src_svg_thermometer-raindrop_svg"
		]
	],
	"./thermometer-snow.svg": [
		"./src/svg/thermometer-snow.svg",
		[
			"src_svg_thermometer-snow_svg"
		]
	],
	"./thermometer-sun.svg": [
		"./src/svg/thermometer-sun.svg",
		[
			"src_svg_thermometer-sun_svg"
		]
	],
	"./thermometer-warmer.svg": [
		"./src/svg/thermometer-warmer.svg",
		[
			"src_svg_thermometer-warmer_svg"
		]
	],
	"./thermometer-water.svg": [
		"./src/svg/thermometer-water.svg",
		[
			"src_svg_thermometer-water_svg"
		]
	],
	"./thermometer.svg": [
		"./src/svg/thermometer.svg",
		[
			"src_svg_thermometer_svg"
		]
	],
	"./thunderstorms-day-extreme-rain.svg": [
		"./src/svg/thunderstorms-day-extreme-rain.svg",
		[
			"src_svg_thunderstorms-day-extreme-rain_svg"
		]
	],
	"./thunderstorms-day-extreme-snow.svg": [
		"./src/svg/thunderstorms-day-extreme-snow.svg",
		[
			"src_svg_thunderstorms-day-extreme-snow_svg"
		]
	],
	"./thunderstorms-day-extreme.svg": [
		"./src/svg/thunderstorms-day-extreme.svg",
		[
			"src_svg_thunderstorms-day-extreme_svg"
		]
	],
	"./thunderstorms-day-overcast-rain.svg": [
		"./src/svg/thunderstorms-day-overcast-rain.svg",
		[
			"src_svg_thunderstorms-day-overcast-rain_svg"
		]
	],
	"./thunderstorms-day-overcast-snow.svg": [
		"./src/svg/thunderstorms-day-overcast-snow.svg",
		[
			"src_svg_thunderstorms-day-overcast-snow_svg"
		]
	],
	"./thunderstorms-day-overcast.svg": [
		"./src/svg/thunderstorms-day-overcast.svg",
		[
			"src_svg_thunderstorms-day-overcast_svg"
		]
	],
	"./thunderstorms-day-rain.svg": [
		"./src/svg/thunderstorms-day-rain.svg",
		[
			"src_svg_thunderstorms-day-rain_svg"
		]
	],
	"./thunderstorms-day-snow.svg": [
		"./src/svg/thunderstorms-day-snow.svg",
		[
			"src_svg_thunderstorms-day-snow_svg"
		]
	],
	"./thunderstorms-day.svg": [
		"./src/svg/thunderstorms-day.svg",
		[
			"src_svg_thunderstorms-day_svg"
		]
	],
	"./thunderstorms-extreme-rain.svg": [
		"./src/svg/thunderstorms-extreme-rain.svg",
		[
			"src_svg_thunderstorms-extreme-rain_svg"
		]
	],
	"./thunderstorms-extreme-snow.svg": [
		"./src/svg/thunderstorms-extreme-snow.svg",
		[
			"src_svg_thunderstorms-extreme-snow_svg"
		]
	],
	"./thunderstorms-extreme.svg": [
		"./src/svg/thunderstorms-extreme.svg",
		[
			"src_svg_thunderstorms-extreme_svg"
		]
	],
	"./thunderstorms-night-extreme-rain.svg": [
		"./src/svg/thunderstorms-night-extreme-rain.svg",
		[
			"src_svg_thunderstorms-night-extreme-rain_svg"
		]
	],
	"./thunderstorms-night-extreme-snow.svg": [
		"./src/svg/thunderstorms-night-extreme-snow.svg",
		[
			"src_svg_thunderstorms-night-extreme-snow_svg"
		]
	],
	"./thunderstorms-night-extreme.svg": [
		"./src/svg/thunderstorms-night-extreme.svg",
		[
			"src_svg_thunderstorms-night-extreme_svg"
		]
	],
	"./thunderstorms-night-overcast-rain.svg": [
		"./src/svg/thunderstorms-night-overcast-rain.svg",
		[
			"src_svg_thunderstorms-night-overcast-rain_svg"
		]
	],
	"./thunderstorms-night-overcast-snow.svg": [
		"./src/svg/thunderstorms-night-overcast-snow.svg",
		[
			"src_svg_thunderstorms-night-overcast-snow_svg"
		]
	],
	"./thunderstorms-night-overcast.svg": [
		"./src/svg/thunderstorms-night-overcast.svg",
		[
			"src_svg_thunderstorms-night-overcast_svg"
		]
	],
	"./thunderstorms-night-rain.svg": [
		"./src/svg/thunderstorms-night-rain.svg",
		[
			"src_svg_thunderstorms-night-rain_svg"
		]
	],
	"./thunderstorms-night-snow.svg": [
		"./src/svg/thunderstorms-night-snow.svg",
		[
			"src_svg_thunderstorms-night-snow_svg"
		]
	],
	"./thunderstorms-night.svg": [
		"./src/svg/thunderstorms-night.svg",
		[
			"src_svg_thunderstorms-night_svg"
		]
	],
	"./thunderstorms-overcast-rain.svg": [
		"./src/svg/thunderstorms-overcast-rain.svg",
		[
			"src_svg_thunderstorms-overcast-rain_svg"
		]
	],
	"./thunderstorms-overcast-snow.svg": [
		"./src/svg/thunderstorms-overcast-snow.svg",
		[
			"src_svg_thunderstorms-overcast-snow_svg"
		]
	],
	"./thunderstorms-overcast.svg": [
		"./src/svg/thunderstorms-overcast.svg",
		[
			"src_svg_thunderstorms-overcast_svg"
		]
	],
	"./thunderstorms-rain.svg": [
		"./src/svg/thunderstorms-rain.svg",
		[
			"src_svg_thunderstorms-rain_svg"
		]
	],
	"./thunderstorms-snow.svg": [
		"./src/svg/thunderstorms-snow.svg",
		[
			"src_svg_thunderstorms-snow_svg"
		]
	],
	"./thunderstorms.svg": [
		"./src/svg/thunderstorms.svg",
		[
			"src_svg_thunderstorms_svg"
		]
	],
	"./tide-high.svg": [
		"./src/svg/tide-high.svg",
		[
			"src_svg_tide-high_svg"
		]
	],
	"./tide-low.svg": [
		"./src/svg/tide-low.svg",
		[
			"src_svg_tide-low_svg"
		]
	],
	"./time-afternoon.svg": [
		"./src/svg/time-afternoon.svg",
		[
			"src_svg_time-afternoon_svg"
		]
	],
	"./time-evening.svg": [
		"./src/svg/time-evening.svg",
		[
			"src_svg_time-evening_svg"
		]
	],
	"./time-late-afternoon.svg": [
		"./src/svg/time-late-afternoon.svg",
		[
			"src_svg_time-late-afternoon_svg"
		]
	],
	"./time-late-evening.svg": [
		"./src/svg/time-late-evening.svg",
		[
			"src_svg_time-late-evening_svg"
		]
	],
	"./time-late-morning.svg": [
		"./src/svg/time-late-morning.svg",
		[
			"src_svg_time-late-morning_svg"
		]
	],
	"./time-late-night.svg": [
		"./src/svg/time-late-night.svg",
		[
			"src_svg_time-late-night_svg"
		]
	],
	"./time-morning.svg": [
		"./src/svg/time-morning.svg",
		[
			"src_svg_time-morning_svg"
		]
	],
	"./time-night.svg": [
		"./src/svg/time-night.svg",
		[
			"src_svg_time-night_svg"
		]
	],
	"./tornado.svg": [
		"./src/svg/tornado.svg",
		[
			"src_svg_tornado_svg"
		]
	],
	"./umbrella-wind-alt.svg": [
		"./src/svg/umbrella-wind-alt.svg",
		[
			"src_svg_umbrella-wind-alt_svg"
		]
	],
	"./umbrella-wind.svg": [
		"./src/svg/umbrella-wind.svg",
		[
			"src_svg_umbrella-wind_svg"
		]
	],
	"./umbrella.svg": [
		"./src/svg/umbrella.svg",
		[
			"src_svg_umbrella_svg"
		]
	],
	"./uv-index-1.svg": [
		"./src/svg/uv-index-1.svg",
		[
			"src_svg_uv-index-1_svg"
		]
	],
	"./uv-index-10.svg": [
		"./src/svg/uv-index-10.svg",
		[
			"src_svg_uv-index-10_svg"
		]
	],
	"./uv-index-11.svg": [
		"./src/svg/uv-index-11.svg",
		[
			"src_svg_uv-index-11_svg"
		]
	],
	"./uv-index-2.svg": [
		"./src/svg/uv-index-2.svg",
		[
			"src_svg_uv-index-2_svg"
		]
	],
	"./uv-index-3.svg": [
		"./src/svg/uv-index-3.svg",
		[
			"src_svg_uv-index-3_svg"
		]
	],
	"./uv-index-4.svg": [
		"./src/svg/uv-index-4.svg",
		[
			"src_svg_uv-index-4_svg"
		]
	],
	"./uv-index-5.svg": [
		"./src/svg/uv-index-5.svg",
		[
			"src_svg_uv-index-5_svg"
		]
	],
	"./uv-index-6.svg": [
		"./src/svg/uv-index-6.svg",
		[
			"src_svg_uv-index-6_svg"
		]
	],
	"./uv-index-7.svg": [
		"./src/svg/uv-index-7.svg",
		[
			"src_svg_uv-index-7_svg"
		]
	],
	"./uv-index-8.svg": [
		"./src/svg/uv-index-8.svg",
		[
			"src_svg_uv-index-8_svg"
		]
	],
	"./uv-index-9.svg": [
		"./src/svg/uv-index-9.svg",
		[
			"src_svg_uv-index-9_svg"
		]
	],
	"./uv-index.svg": [
		"./src/svg/uv-index.svg",
		[
			"src_svg_uv-index_svg"
		]
	],
	"./wind-alert.svg": [
		"./src/svg/wind-alert.svg",
		[
			"src_svg_wind-alert_svg"
		]
	],
	"./wind-beaufort-0.svg": [
		"./src/svg/wind-beaufort-0.svg",
		[
			"src_svg_wind-beaufort-0_svg"
		]
	],
	"./wind-beaufort-1.svg": [
		"./src/svg/wind-beaufort-1.svg",
		[
			"src_svg_wind-beaufort-1_svg"
		]
	],
	"./wind-beaufort-10.svg": [
		"./src/svg/wind-beaufort-10.svg",
		[
			"src_svg_wind-beaufort-10_svg"
		]
	],
	"./wind-beaufort-11.svg": [
		"./src/svg/wind-beaufort-11.svg",
		[
			"src_svg_wind-beaufort-11_svg"
		]
	],
	"./wind-beaufort-12.svg": [
		"./src/svg/wind-beaufort-12.svg",
		[
			"src_svg_wind-beaufort-12_svg"
		]
	],
	"./wind-beaufort-2.svg": [
		"./src/svg/wind-beaufort-2.svg",
		[
			"src_svg_wind-beaufort-2_svg"
		]
	],
	"./wind-beaufort-3.svg": [
		"./src/svg/wind-beaufort-3.svg",
		[
			"src_svg_wind-beaufort-3_svg"
		]
	],
	"./wind-beaufort-4.svg": [
		"./src/svg/wind-beaufort-4.svg",
		[
			"src_svg_wind-beaufort-4_svg"
		]
	],
	"./wind-beaufort-5.svg": [
		"./src/svg/wind-beaufort-5.svg",
		[
			"src_svg_wind-beaufort-5_svg"
		]
	],
	"./wind-beaufort-6.svg": [
		"./src/svg/wind-beaufort-6.svg",
		[
			"src_svg_wind-beaufort-6_svg"
		]
	],
	"./wind-beaufort-7.svg": [
		"./src/svg/wind-beaufort-7.svg",
		[
			"src_svg_wind-beaufort-7_svg"
		]
	],
	"./wind-beaufort-8.svg": [
		"./src/svg/wind-beaufort-8.svg",
		[
			"src_svg_wind-beaufort-8_svg"
		]
	],
	"./wind-beaufort-9.svg": [
		"./src/svg/wind-beaufort-9.svg",
		[
			"src_svg_wind-beaufort-9_svg"
		]
	],
	"./wind-offshore.svg": [
		"./src/svg/wind-offshore.svg",
		[
			"src_svg_wind-offshore_svg"
		]
	],
	"./wind-onshore.svg": [
		"./src/svg/wind-onshore.svg",
		[
			"src_svg_wind-onshore_svg"
		]
	],
	"./wind-snow.svg": [
		"./src/svg/wind-snow.svg",
		[
			"src_svg_wind-snow_svg"
		]
	],
	"./wind.svg": [
		"./src/svg/wind.svg",
		[
			"src_svg_wind_svg"
		]
	],
	"./windsock-weak.svg": [
		"./src/svg/windsock-weak.svg",
		[
			"src_svg_windsock-weak_svg"
		]
	],
	"./windsock.svg": [
		"./src/svg/windsock.svg",
		[
			"src_svg_windsock_svg"
		]
	]
};
function webpackAsyncContext(req) {
	try {
		if(!__webpack_require__.o(map, req)) {
			return Promise.resolve().then(() => {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
});
		}
	} catch(err) {
		return Promise.reject(err);
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1][0]).then(() => (__webpack_require__.t(id, 1 | 16)));
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/svg lazy recursive ^\\.\\/.*\\.svg$ referencedExports: default";
module.exports = webpackAsyncContext;

/***/ },

/***/ "./src/resources/air_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24.svg"
/*!**********************************************************************!*\
  !*** ./src/resources/air_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24.svg ***!
  \**********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "7c5cfdce59001a9871db.svg";

/***/ },

/***/ "./src/resources/cloud_24dp_9B5278_FILL0_wght400_GRAD0_opsz24.svg"
/*!************************************************************************!*\
  !*** ./src/resources/cloud_24dp_9B5278_FILL0_wght400_GRAD0_opsz24.svg ***!
  \************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "aabbc6532ec5d51cb718.svg";

/***/ },

/***/ "./src/resources/fonts/Inconsolata-VariableFont_wdth,wght.ttf"
/*!********************************************************************!*\
  !*** ./src/resources/fonts/Inconsolata-VariableFont_wdth,wght.ttf ***!
  \********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "ecc7975f1fb4ad9869f1.ttf";

/***/ },

/***/ "./src/resources/progress_activity_24dp_6B2346_FILL0_wght400_GRAD0_opsz24.svg"
/*!************************************************************************************!*\
  !*** ./src/resources/progress_activity_24dp_6B2346_FILL0_wght400_GRAD0_opsz24.svg ***!
  \************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "794c1e4b9a915536b453.svg";

/***/ },

/***/ "./src/resources/search_24dp_B07090_FILL0_wght400_GRAD0_opsz24.svg"
/*!*************************************************************************!*\
  !*** ./src/resources/search_24dp_B07090_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "42bc718e396685cdd6a4.svg";

/***/ },

/***/ "./src/resources/visibility_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24.svg"
/*!*****************************************************************************!*\
  !*** ./src/resources/visibility_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "475cabb73904c7f2af3f.svg";

/***/ },

/***/ "./src/resources/water_drop_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg"
/*!*****************************************************************************!*\
  !*** ./src/resources/water_drop_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "8d926739f9451677335a.svg";

/***/ },

/***/ "./src/hourly-data.js"
/*!****************************!*\
  !*** ./src/hourly-data.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hourlyData: () => (/* binding */ hourlyData)
/* harmony export */ });
function getHTMLELM(dataGet) {
  const nowTemp = document.querySelector(".now-temp");
  nowTemp.textContent = `${dataGet}\u00B0`;
}

function createContainers(temp, i, iconRetrieved) {
  async function mapSrc(iconRetrieved, htmlElement) {
    const iconName = await iconRetrieved;
    __webpack_require__("./src/svg lazy recursive ^\\.\\/.*\\.svg$ referencedExports: default")(`./${iconName}.svg`).then((mod) => {
      htmlElement.src = mod.default;
    });
  }
  const div = document.createElement("div");
  div.className = `hour-divs-dynamic`;
  const hourDivs = document.querySelector(".hour-divs");
  hourDivs.appendChild(div);

  const p = document.createElement("p");
  p.textContent = i;
  div.appendChild(p);

  const img = document.createElement("img");
  img.className = "temps-icon";
  mapSrc(iconRetrieved, img);
  div.appendChild(img);

  const h6 = document.createElement("h6");
  h6.className = "now-temp";
  h6.textContent = `${temp}\u00B0`;
  div.appendChild(h6);
}

function nowDivImgIcon(iconRetrieved) {
  const nowDiv = document.querySelector(".img-div");
  const img = document.createElement("img");
  img.className = 'temps-icon'
  nowDiv.appendChild(img)

  async function getSrcPath(iconRetrieved, htmlElement) {
    const iconName = await iconRetrieved;
    __webpack_require__("./src/svg lazy recursive ^\\.\\/.*\\.svg$ referencedExports: default")(`./${iconName}.svg`).then((mod) => {
      htmlElement.src = mod.default;
    });
  }

  getSrcPath(iconRetrieved,img)
}

async function hourlyData(city) {
  try{
    console.log(city)
  let retrieve = await fetch(city);
  let data = await retrieve.json();
  console.log(data)

  let currentTime = data.currentConditions.datetime;

  for (let i = 0; i <= 23; i++) {
    let futureTime = data.days[0].hours[i].datetime;
    if (currentTime === futureTime) {
      console.log(`It is currently hour ${i}`);
      let getData = data.days[0].hours[i].temp;
      getData = Math.round(getData);
      console.log(`Temp at hour ${i} is: ${getData}`);
      getHTMLELM(getData);
      let getIconData = data.days[0].hours[i].icon;
      console.log(`Icon-name is: ${getIconData}`);
      nowDivImgIcon(getIconData)

      for (let j = i+1; j <= 23; j++) {
        let temptemp = data.days[0].hours[j].temp;
        temptemp = Math.round(temptemp);
        let tempicon = data.days[0].hours[j].icon;
        createContainers(temptemp, j, tempicon);
        console.log(
          `The index of the hour is ${j}, the temp is:${temptemp}, and the icon is ${tempicon}`,
        );
      }
    }
  }
  } catch{
    console.log(new Error())
  }
  finally{
    console.log("Done")
  }
}

// async function dailyH2Icon(importedIcon) {
//   const weatherIcon = document.createElement("img");
//   weatherIcon.className = "main-weather-icon";
//   const iconName = await importedIcon;
//   import(`./svg/${iconName}.svg`).then((mod) => {
//     weatherIcon.src = mod.default;
//   });

//   const div = document.querySelector(".daily-display-h2");
//   div.appendChild(weatherIcon);
// }


/***/ },

/***/ "./src/small-functions.js"
/*!********************************!*\
  !*** ./src/small-functions.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLoadingIcon: () => (/* binding */ addLoadingIcon),
/* harmony export */   dailyH2Icon: () => (/* binding */ dailyH2Icon),
/* harmony export */   deleteDOM: () => (/* binding */ deleteDOM),
/* harmony export */   displayData: () => (/* binding */ displayData),
/* harmony export */   loadInject: () => (/* binding */ loadInject),
/* harmony export */   logicToUi: () => (/* binding */ logicToUi),
/* harmony export */   objectToString: () => (/* binding */ objectToString),
/* harmony export */   visibilityIconFunc: () => (/* binding */ visibilityIconFunc),
/* harmony export */   waterIconFunc: () => (/* binding */ waterIconFunc),
/* harmony export */   windIconFunc: () => (/* binding */ windIconFunc)
/* harmony export */ });
/* harmony import */ var _resources_search_24dp_B07090_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/search_24dp_B07090_FILL0_wght400_GRAD0_opsz24.svg */ "./src/resources/search_24dp_B07090_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _resources_water_drop_24dp_5985E1_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/water_drop_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg */ "./src/resources/water_drop_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _resources_air_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/air_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24.svg */ "./src/resources/air_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _resources_visibility_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/visibility_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24.svg */ "./src/resources/visibility_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _resources_progress_activity_24dp_6B2346_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/progress_activity_24dp_6B2346_FILL0_wght400_GRAD0_opsz24.svg */ "./src/resources/progress_activity_24dp_6B2346_FILL0_wght400_GRAD0_opsz24.svg");






function objectToString(obj) {
  let obj2 = JSON.stringify(obj);
  return obj2;
}

function logicToUi(htmlElement, reading) {
  let htmlDOM = htmlElement;
  htmlDOM.textContent = reading;
}

function displayData() {
  const weatherDataDisplay = document.querySelector(".weather-data-display");
  weatherDataDisplay.style.display = "flex";
}

function addLoadingIcon() {
  const icon = document.createElement("img");
  icon.className = "search-icon";
  icon.src = _resources_search_24dp_B07090_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_0__;
  icon.alt = "search";

  const searchCityDiv = document.querySelector(".search-city-icon");
  searchCityDiv.appendChild(icon);
}

function waterIconFunc() {
  const waterIconImg = document.createElement("img");
  waterIconImg.className = "water-icon";
  waterIconImg.alt = "humidity";
  waterIconImg.src = _resources_water_drop_24dp_5985E1_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_1__;

  const humidity = document.querySelector(".humidity");
  humidity.appendChild(waterIconImg);
}

function windIconFunc() {
  const windIconImg = document.createElement("img");
  windIconImg.className = "wind-icon";
  windIconImg.alt = "wind-speed";
  windIconImg.src = _resources_air_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__;

  const windSpeed = document.querySelector(".wind-speed");
  windSpeed.appendChild(windIconImg);
}

function visibilityIconFunc() {
  const visibilityIconImg = document.createElement("img");
  visibilityIconImg.className = "visibility-icon";
  visibilityIconImg.alt = "visibility";
  visibilityIconImg.src = _resources_visibility_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_3__;

  const visibilityDiv = document.querySelector(".visibility");
  visibilityDiv.appendChild(visibilityIconImg);
}

async function dailyH2Icon(importedIcon) {
  const weatherIcon = document.createElement("img");
  weatherIcon.className = "main-weather-icon";
  const iconName = await importedIcon;
  __webpack_require__("./src/svg lazy recursive ^\\.\\/.*\\.svg$ referencedExports: default")(`./${iconName}.svg`).then((mod) => {
    weatherIcon.src = mod.default;
  });

  const div = document.querySelector(".daily-display-h2");
  div.appendChild(weatherIcon);
}

function deleteDOM(className) {
  const weatherIcon = document.querySelector(className);
  if (weatherIcon) {
    weatherIcon.remove();
  } else {
    console.log("Uhhh");
  }
}

function loadInject() {
  const div = document.querySelector(".loader-div");
  div.style.display = "flex";
  const imgExists = document.querySelector(".loading-icon");
  if (imgExists) {
  } else {
    const img = document.createElement("img");
    div.appendChild(img);
    img.src = _resources_progress_activity_24dp_6B2346_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_4__;
    img.className = "loading-icon";
  }

  return div;
}


/***/ },

/***/ "./src/ten-day-forecast.js"
/*!*********************************!*\
  !*** ./src/ten-day-forecast.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tenDayForevast: () => (/* binding */ tenDayForevast)
/* harmony export */ });
/* harmony import */ var _weekly_and_conditions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekly-and-conditions.js */ "./src/weekly-and-conditions.js");


function dayIndexToDayOfWeek(dayIndex) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfTheWeek = daysOfWeek[dayIndex];

  return dayOfTheWeek;
}

async function tenDayForevast(city) {
  console.log("This is running")
  try {
    let response = await fetch(city);
    let data = await response.json();

    for (let i = 1; i <= 10; i++) {
      let condition = data.days[i].conditions;

      let high = data.days[i].tempmax;
      high = Math.round(high);
      high = JSON.stringify(high);

      let low = data.days[i].tempmin;
      low = Math.round(low);
      low = JSON.stringify(low);

      let icon = data.days[i].icon;

      let day = data.days[i].datetime;
      let date = new Date(day);
      let dayIndex = date.getDay();
      let dayOfWeek = dayIndexToDayOfWeek(dayIndex);

      console.log(`Is it: ${dayOfWeek}, the condition is: ${condition}, the high and low are: ${high} and ${low}`)

      ;(0,_weekly_and_conditions_js__WEBPACK_IMPORTED_MODULE_0__.createWeekleyDivs)(dayOfWeek, condition, high, low, icon);
    }
  } catch {
    new Error("Something went wrong while fetching the ten day forecast :(");
  }
}


/***/ },

/***/ "./src/to-days-weather.js"
/*!********************************!*\
  !*** ./src/to-days-weather.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentWeather: () => (/* binding */ getCurrentWeather)
/* harmony export */ });
/* harmony import */ var _small_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./small-functions.js */ "./src/small-functions.js");


async function getCurrentWeather(city) {
  try {
    console.log(typeof city)
    let response = await fetch(city);
    let data = await response.json();
    console.log(`getCurrentWeather func func: ${city}`);

    let cityAddress = data.address;
    console.log(cityAddress);

    let cityTemp = data.currentConditions.temp;
    cityTemp = Math.round(cityTemp);
    console.log(cityTemp)

    let feelsLike = data.currentConditions.feelslike;
    feelsLike = Math.round(feelsLike);
    console.log(feelsLike)

    let windSpeed = data.currentConditions.windspeed;
    console.log(windSpeed)

    let visibilityToday = data.currentConditions.visibility;
    console.log(visibilityToday)

    let cityConditions = data.currentConditions.conditions;
    console.log(cityConditions)

    let nowIcon = data.currentConditions.icon;
    console.log(nowIcon)

    let cityUV = data.currentConditions.uvindex;

    let apiDescription = data.description;

    let humidityToday = data.currentConditions.humidity;

    let high = data.days[0].tempmax;
    high = Math.round(high);

    let low = data.days[0].tempmin;
    low = Math.round(low);

    return [
      cityTemp,
      cityConditions,
      cityUV,
      apiDescription,
      high,
      low,
      cityAddress,
      feelsLike,
      humidityToday,
      windSpeed,
      visibilityToday,
      nowIcon,
    ];
  } catch {
    new Error("Something went wrong at 'to-days-weather.js'...");
  }
}


/***/ },

/***/ "./src/user-input.js"
/*!***************************!*\
  !*** ./src/user-input.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCity: () => (/* binding */ getCity),
/* harmony export */   getCityInitial: () => (/* binding */ getCityInitial)
/* harmony export */ });
const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=metric&key=NJ2PF5Y4ZXAQT3W4RX22TQGF5&contentType=json";

async function getCity() {
  try {
    const userCity = document.querySelector(".search-city-input");
    let city = url.replace("London", userCity.value);
    console.log(city);
    console.log(url);

    // const userUnit = document.querySelector(".user-unit-first");
    // const unit = city.replace("us", userUnit.value);

    return city;
  } catch {
    return url;
  }
}

function getCityInitial() {
  try {
    const userCity = document.querySelector(".search-city-input-first");
    let city = url.replace("London", userCity.value);

    const userUnit = document.querySelector(".user-unit-first");
    console.log(userUnit.value);
    const unit = city.replace("metric", userUnit.value);

    if (userCity.value === "") {
      alert("Please enter a city.");
    } else {
      return unit;
    }

    console.log(`From the function: ${unit}`);
  } catch {
    console.log("Oops, something went wrong at getCityInitial()...");
  }
}


/***/ },

/***/ "./src/weekly-and-conditions.js"
/*!**************************************!*\
  !*** ./src/weekly-and-conditions.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWeekleyDivs: () => (/* binding */ createWeekleyDivs)
/* harmony export */ });
function createWeekleyDivs(
  weekDay,
  conditionS,
  highGet,
  lowGet,
  iconRetrieved,
) {
  async function getSrcPath(iconRetrieved, htmlElement) {
    const iconName = await iconRetrieved;
    __webpack_require__("./src/svg lazy recursive ^\\.\\/.*\\.svg$ referencedExports: default")(`./${iconName}.svg`).then((mod) => {
      htmlElement.src = mod.default;
    });
  }
  const weekDayDiv = document.querySelector(".week");
  const newDiv = document.createElement("div");
  newDiv.className = "week-day";
  weekDayDiv.appendChild(newDiv);

  const pDiv = document.createElement("div");
  pDiv.className = "weekly-day-of-week";
  newDiv.appendChild(pDiv);

  const p = document.createElement("p");
  p.textContent = weekDay;
  console.log(`THIS IS FROM WEEKLY FUNC ${weekDay}`)
  p.className = "week-in-p";
  pDiv.appendChild(p);

  const iconAndCondition = document.createElement("div");
  newDiv.appendChild(iconAndCondition);
  iconAndCondition.className = "icon-and-condition";

  const iconAppend = document.createElement("div");
  iconAppend.className = "icon-append";
  iconAndCondition.appendChild(iconAppend);

  const img = document.createElement("img");
  img.className = "weekley-icon-get";
  getSrcPath(iconRetrieved, img);
  iconAppend.appendChild(img);

  const condition = document.createElement("div");
  condition.className = "conditionED";
  iconAndCondition.appendChild(condition);

  const pCondition = document.createElement("p");
  pCondition.textContent = conditionS;
  pCondition.className = "p-condition";
  condition.appendChild(pCondition);

  const highAndLowDiv = document.createElement("div");
  highAndLowDiv.className = "high-and-low";
  newDiv.appendChild(highAndLowDiv);

  const high = document.createElement("p");
  high.textContent = `${highGet}\u00B0/`;
  high.className = "week-high";
  highAndLowDiv.appendChild(high);

  const low = document.createElement("p");
  low.textContent = `${lowGet}\u00B0`;
  low.className = "week-low";
  highAndLowDiv.appendChild(low);
}


/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-input.js */ "./src/user-input.js");
/* harmony import */ var _to_days_weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-days-weather.js */ "./src/to-days-weather.js");
/* harmony import */ var _search_bar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-bar.css */ "./src/search-bar.css");
/* harmony import */ var _ten_day_forecast_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ten-day-forecast.js */ "./src/ten-day-forecast.js");
/* harmony import */ var _media_queries_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-queries.css */ "./src/media-queries.css");
/* harmony import */ var _daily_display_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./daily-display.css */ "./src/daily-display.css");
/* harmony import */ var _small_functions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./small-functions.js */ "./src/small-functions.js");
/* harmony import */ var _hourly_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hourly-data.js */ "./src/hourly-data.js");
/* harmony import */ var _hourly_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hourly.css */ "./src/hourly.css");
/* harmony import */ var _weekly_and_conditions_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weekly-and-conditions.css */ "./src/weekly-and-conditions.css");
/* harmony import */ var _resources_cloud_24dp_9B5278_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources/cloud_24dp_9B5278_FILL0_wght400_GRAD0_opsz24.svg */ "./src/resources/cloud_24dp_9B5278_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _landing_page_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-page.css */ "./src/landing-page.css");















function addFavIcon() {
  const linkElem = document.createElement("link");
  document.head.appendChild(linkElem);
  linkElem.rel = "icon";
  linkElem.type = "image/x-icon";
  linkElem.href = _resources_cloud_24dp_9B5278_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_10__;
}

addFavIcon();

function enclose(need) {
  if (need === true) {
    (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.addLoadingIcon)();
    (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.waterIconFunc)();
    (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.windIconFunc)();
    (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.visibilityIconFunc)();
  }
}

async function execute(city, need) {
  let iconsDiv = (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.loadInject)();

  try {
    let tenday = await (0,_ten_day_forecast_js__WEBPACK_IMPORTED_MODULE_3__.tenDayForevast)(city);
    enclose(need);
    (0,_hourly_data_js__WEBPACK_IMPORTED_MODULE_7__.hourlyData)(city);
    let [
      cityTemp,
      cityConditions,
      cityUV,
      apiDescription,
      cityHigh,
      cityLow,
      cityAddress,
      feelsLike,
      humidityToday,
      windSpeed,
      visibilityToday,
      nowIcon,
    ] = await (0,_to_days_weather_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(city);

    (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.dailyH2Icon)(nowIcon);

    let loc = (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.objectToString)(cityAddress);
    loc = loc.slice(1, -1);
    loc = loc.toUpperCase();
    console.log(loc);

    let cityNameElm = document.querySelector(".city-name");
    cityNameElm.textContent = `${loc}`;

    let temp = (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.objectToString)(cityTemp);
    console.log(`The temp is: ${temp}`);
    const cityTempElm = document.querySelector(".city-temp");
    cityTempElm.textContent = `${cityTemp}\u00B0`;

    let feel = (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.objectToString)(feelsLike);
    console.log(`Feels like: ${feel}`);
    const feelsLikeElm = document.querySelector(".feels-like");
    feelsLikeElm.textContent = `Feels like ${feel}\u00B0`;

    let humid = (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.objectToString)(humidityToday);
    const humidityElm = document.querySelector(".humidityElm");
    humidityElm.textContent = `${humid}%`;

    let windspeed = (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.objectToString)(windSpeed);
    const windSpeedElm = document.querySelector(".wind-speed-elem");
    windSpeedElm.textContent = `${windspeed}km/h`;

    let visibility = (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.objectToString)(visibilityToday);
    const visibilityElm = document.querySelector(".visibility-today");
    visibilityElm.textContent = `${visibility}km`;

    let date = new Date();
    let newDate = date.toDateString();
    const dateDisplay = document.querySelector(".date-display");
    dateDisplay.textContent = `${newDate}`;

    console.log(`The conditions are: ${cityConditions}`);
    const conditionsElm = document.querySelector(".condition");
    conditionsElm.textContent = cityConditions;

    let uv = (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.objectToString)(cityUV);
    console.log(`The UV index is: ${uv}`);
    const getUvElem = document.querySelector(".dynamic-uv");
    getUvElem.textContent = uv;

    console.log(`The description is: ${apiDescription}`);

    let h = (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.objectToString)(cityHigh);
    console.log(`The high is: ${h}`);

    let l = (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.objectToString)(cityLow);
    console.log(`The low is: ${l}`);
  } catch {
    new Error(console.log("Something went wrong at 'index.js'..."));
  } finally {
    iconsDiv.style.display = "none";
  }
}

async function awaitingCity(func, bool) {
  let city = await func();

  execute(city, bool);
}

function displayManipulation() {
  const containerDivDiv = document.querySelector(".container");
  containerDivDiv.style.display = "grid";
  const inputInput = document.querySelector(".landing-container");
  inputInput.style.display = "none";
  const welcomeDisplay = document.querySelector(".landing-input");
  welcomeDisplay.style.display = "none";
}

const userCity = document.querySelector(".search-city-input");
userCity.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.deleteDOM)(".main-weather-icon");
    (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.deleteDOM)(".hour-divs-dynamic");
    (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.deleteDOM)(".temps-icon");
    (0,_small_functions_js__WEBPACK_IMPORTED_MODULE_6__.deleteDOM)(".week-day");
    let need = false;
    awaitingCity(_user_input_js__WEBPACK_IMPORTED_MODULE_0__.getCity, need);
  }
});

const userInputBtn = document.querySelector(".landing-page-submit-btn");
userInputBtn.addEventListener("click", () => {
  let need = true;
  awaitingCity(_user_input_js__WEBPACK_IMPORTED_MODULE_0__.getCityInitial, need);
  displayManipulation();
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map