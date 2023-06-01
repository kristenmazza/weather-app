"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 class=%27bi bi-search%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z%27%3E%3C/path%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 class=%27bi bi-search%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z%27%3E%3C/path%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
html {
  margin: 0;
  padding: 0;
  font-family: Roboto, 'Arial Narrow Bold', sans-serif;
  color: #eaf4f3;
}

.container {
  height: 100vh;
  padding: 40px;
  height: 100vh;
  background: linear-gradient(180deg, #1a534e, #153e4a);
  background-size: 400% 200%;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.title {
  font-weight: 800;
  letter-spacing: 0.5px;
  flex: 1;
}

form {
  color: #252525;
  background-color: #eaf4f3;
  display: flex;
  padding: 2px;
  border: 1px solid transparent;
  border-radius: 0px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19);
}

input[type="search"] {
  flex: 1;
  border: none;
  background: transparent;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: #252525;
  border-radius: inherit;
  font-family: inherit;
}

input[type="search"]::placeholder,
input[type="search"]:-ms-input-placeholder,
input[type="search"]::-ms-input-placeholder {
  color: #252525;
  opacity: 1;
  font-family: inherit;
}

button[type="submit"] {
  text-indent: -999px;
  overflow: hidden;
  width: 40px;
  padding: 0;
  margin: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;
  cursor: pointer;
  opacity: 0.7;
}

button[type="submit"]:hover {
  opacity: 1;
}

/* C/F toggle */
.toggle-container {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}

input[type="radio"].toggle {
  display: none;
}

input[type="radio"].toggle:checked+label {
  background-image: linear-gradient(to top, #eaf4f3, #dce6e5);
  box-shadow: inset 0 1px 6px rgba(41, 41, 41, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: default;
  color: #111111;
  border-color: transparent;
  padding: 8px;
}

input[type="radio"].toggle+label {
  width: 3em;
  padding: 5px;
  background-image: linear-gradient(to top, #212121, #111111);
  text-shadow: 0 1px 1px rgba(40, 40, 40, 0.75);
  text-align: center;
  font-style: inherit;
  font-size: 1rem;
}

input[type="radio"].toggle+label:hover {
  cursor: pointer;
}

.location-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  gap: 1em;
}

.location-name {
  font-size: 3rem;
  font-weight: 500;
}

.time-info {
  font-size: 1.1rem;
  padding: 1em;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  gap: 1em;
}

.basic-conditions-container {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  align-items: start;
  justify-content: center;
}

.current-temp-display {
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 4rem;
  align-items: center;
  justify-content: center;
}

.current-condition {
  font-size: 1.6rem;
}

.current-feels-like,
.details-header {
  color: rgba(234, 244, 243, 0.6);
  font-size: 1.1rem;
  font-weight: 400;
}

.weather-container {
  display: flex;
  gap: 5rem;
}

.p-info {
  font-size: 1.6rem;
}

.detailed-conditions-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,UAAU;EACV,oDAAoD;EACpD,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,qDAAqD;EACrD,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,OAAO;AACT;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,kBAAkB;EAClB,2EAA2E;AAC7E;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;;;EAGE,cAAc;EACd,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,SAAS;EACT,6BAA6B;EAC7B,sBAAsB;EACtB,gFAA4Y;EAC5Y,eAAe;EACf,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA,eAAe;AACf;EACE,OAAO;EACP,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,2DAA2D;EAC3D;iCAC+B;EAC/B,eAAe;EACf,cAAc;EACd,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,2DAA2D;EAC3D,6CAA6C;EAC7C,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,+BAA+B;EAC/B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX","sourcesContent":["*,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: Roboto, 'Arial Narrow Bold', sans-serif;\n  color: #eaf4f3;\n}\n\n.container {\n  height: 100vh;\n  padding: 40px;\n  height: 100vh;\n  background: linear-gradient(180deg, #1a534e, #153e4a);\n  background-size: 400% 200%;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n.title {\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  flex: 1;\n}\n\nform {\n  color: #252525;\n  background-color: #eaf4f3;\n  display: flex;\n  padding: 2px;\n  border: 1px solid transparent;\n  border-radius: 0px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19);\n}\n\ninput[type=\"search\"] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  color: #252525;\n  border-radius: inherit;\n  font-family: inherit;\n}\n\ninput[type=\"search\"]::placeholder,\ninput[type=\"search\"]:-ms-input-placeholder,\ninput[type=\"search\"]::-ms-input-placeholder {\n  color: #252525;\n  opacity: 1;\n  font-family: inherit;\n}\n\nbutton[type=\"submit\"] {\n  text-indent: -999px;\n  overflow: hidden;\n  width: 40px;\n  padding: 0;\n  margin: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  background: transparent url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center;\n  cursor: pointer;\n  opacity: 0.7;\n}\n\nbutton[type=\"submit\"]:hover {\n  opacity: 1;\n}\n\n/* C/F toggle */\n.toggle-container {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n\ninput[type=\"radio\"].toggle {\n  display: none;\n}\n\ninput[type=\"radio\"].toggle:checked+label {\n  background-image: linear-gradient(to top, #eaf4f3, #dce6e5);\n  box-shadow: inset 0 1px 6px rgba(41, 41, 41, 0.2),\n    0 1px 2px rgba(0, 0, 0, 0.05);\n  cursor: default;\n  color: #111111;\n  border-color: transparent;\n  padding: 8px;\n}\n\ninput[type=\"radio\"].toggle+label {\n  width: 3em;\n  padding: 5px;\n  background-image: linear-gradient(to top, #212121, #111111);\n  text-shadow: 0 1px 1px rgba(40, 40, 40, 0.75);\n  text-align: center;\n  font-style: inherit;\n  font-size: 1rem;\n}\n\ninput[type=\"radio\"].toggle+label:hover {\n  cursor: pointer;\n}\n\n.location-information {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5em;\n  gap: 1em;\n}\n\n.location-name {\n  font-size: 3rem;\n  font-weight: 500;\n}\n\n.time-info {\n  font-size: 1.1rem;\n  padding: 1em;\n  letter-spacing: 2px;\n  display: flex;\n  justify-content: center;\n  gap: 1em;\n}\n\n.basic-conditions-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3em;\n  align-items: start;\n  justify-content: center;\n}\n\n.current-temp-display {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  font-size: 4rem;\n  align-items: center;\n  justify-content: center;\n}\n\n.current-condition {\n  font-size: 1.6rem;\n}\n\n.current-feels-like,\n.details-header {\n  color: rgba(234, 244, 243, 0.6);\n  font-size: 1.1rem;\n  font-weight: 400;\n}\n\n.weather-container {\n  display: flex;\n  gap: 5rem;\n}\n\n.p-info {\n  font-size: 1.6rem;\n}\n\n.detailed-conditions-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
function componentContainer() {
  const container = document.createElement("div");
  container.classList.add("container");
  return container;
}

function componentHeader() {
  const header = document.createElement("header");
  return header;
}

function componentTitle() {
  const title = document.createElement("h1");
  title.textContent = "WeatherApp";
  title.classList.add("title");
  return title;
}

function componentSearchForm() {
  const searchForm = document.createElement("form");
  const searchInput = document.createElement("input");
  const searchButton = document.createElement("button");
  searchForm.classList.add("search-form");
  searchInput.setAttribute("type", "search");
  searchInput.classList.add("search-input");
  searchInput.setAttribute("placeholder", "Search location...");
  searchButton.setAttribute("type", "submit");
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);
  return searchForm;
}

function componentConversionToggle() {
  const toggleContainer = document.createElement("div");
  const toggleOnInput = document.createElement("input");
  const toggleOnLabel = document.createElement("label");
  const toggleOffInput = document.createElement("input");
  const toggleOffLabel = document.createElement("label");
  toggleContainer.classList.add("toggle-container");
  toggleOnInput.classList.add("toggle", "toggle-left");
  toggleOnInput.setAttribute("id", "toggle-on");
  toggleOnInput.setAttribute("name", "toggle");
  toggleOnInput.setAttribute("value", "false");
  toggleOnInput.setAttribute("type", "radio");
  toggleOnInput.checked = true;
  toggleOnLabel.setAttribute("for", "toggle-on");
  toggleOnLabel.classList.add("btn");
  toggleOnLabel.textContent = "F";

  toggleOffInput.setAttribute("id", "toggle-off");
  toggleOffInput.classList.add("toggle", "toggle-right");
  toggleOffInput.setAttribute("name", "toggle");
  toggleOffInput.setAttribute("value", "true");
  toggleOffInput.setAttribute("type", "radio");
  toggleOffLabel.setAttribute("for", "toggle-off");
  toggleOffLabel.textContent = "C";

  toggleContainer.appendChild(toggleOnInput);
  toggleContainer.appendChild(toggleOnLabel);
  toggleContainer.appendChild(toggleOffInput);
  toggleContainer.appendChild(toggleOffLabel);

  return toggleContainer;
}

function componentLocationInformation() {
  const locationInformation = document.createElement("div");
  locationInformation.classList.add("location-information");
  return locationInformation;
}

function componentLocationHeader(name, date, time) {
  const locationContainer = document.createElement("div");
  const locationName = document.createElement("h2");
  const timeInfo = document.createElement("div");
  const locationDate = document.createElement("span");
  const divider = document.createElement("span");
  const locationTime = document.createElement("span");

  locationName.classList.add("location-name");
  timeInfo.classList.add("time-info");

  locationName.textContent = name;
  divider.textContent = " | ";
  locationDate.textContent = date;
  locationTime.textContent = time;

  locationContainer.appendChild(locationName);
  locationContainer.appendChild(timeInfo);
  timeInfo.appendChild(locationDate);
  timeInfo.appendChild(divider);
  timeInfo.appendChild(locationTime);

  return locationContainer;
}

function componentWeatherContainer() {
  const weatherContainer = document.createElement("div");
  weatherContainer.classList.add("weather-container");

  return weatherContainer;
}

function componentBasicTempDisplay(conditionIcon, temp, condition, feelsLike) {
  const basicConditionsContainer = document.createElement("div");
  const currentTempDisplay = document.createElement("div");
  const currentTemp = document.createElement("div");
  const currentCondition = document.createElement("p");
  const currentFeelsLike = document.createElement("p");
  const currentTempIcon = new Image();
  basicConditionsContainer.classList.add("basic-conditions-container");
  currentCondition.classList.add("current-condition");
  currentFeelsLike.classList.add("current-feels-like");
  currentTempDisplay.classList.add("current-temp-display");
  currentTemp.textContent = temp;
  currentTempIcon.src = conditionIcon;
  currentCondition.textContent = condition;
  currentFeelsLike.textContent = `Feels like ${feelsLike}`;

  basicConditionsContainer.appendChild(currentTempDisplay);
  currentTempDisplay.appendChild(currentTempIcon);
  currentTempDisplay.appendChild(currentTemp);
  basicConditionsContainer.appendChild(currentCondition);
  basicConditionsContainer.appendChild(currentFeelsLike);

  return basicConditionsContainer;
}

function componentDetailedDisplay(wind, humidity, rain) {
  const detailedConditionsContainer = document.createElement("div");
  const currentWind = document.createElement("div");
  const windHeader = document.createElement("h3");
  const windInfo = document.createElement("p");

  const currentHumidity = document.createElement("p");
  const humidityHeader = document.createElement("h3");
  const humidityInfo = document.createElement("p");

  const chanceOfRain = document.createElement("p");
  const chanceOfRainHeader = document.createElement("h3");
  const chanceOfRainInfo = document.createElement("p");

  detailedConditionsContainer.classList.add("detailed-conditions-container");
  windHeader.classList.add("details-header");
  chanceOfRainHeader.classList.add("details-header");
  humidityHeader.classList.add("details-header");

  windInfo.classList.add("p-info");
  humidityInfo.classList.add("p-info");
  chanceOfRainInfo.classList.add("p-info");

  windHeader.textContent = "Wind";
  windInfo.textContent = wind;

  humidityHeader.textContent = "Humidity";
  humidityInfo.textContent = humidity;

  chanceOfRainHeader.textContent = "Chance of Rain";
  chanceOfRainInfo.textContent = rain;

  detailedConditionsContainer.appendChild(currentWind);
  currentWind.appendChild(windHeader);
  currentWind.appendChild(windInfo);
  detailedConditionsContainer.appendChild(currentHumidity);
  currentHumidity.appendChild(humidityHeader);
  currentHumidity.appendChild(humidityInfo);
  detailedConditionsContainer.appendChild(chanceOfRain);
  chanceOfRain.appendChild(chanceOfRainHeader);
  chanceOfRain.appendChild(chanceOfRainInfo);

  return detailedConditionsContainer;
}

function init() {
  const container = componentContainer();
  const header = componentHeader();
  const title = componentTitle();
  const searchForm = componentSearchForm();
  const conversionToggle = componentConversionToggle();
  const locationInformation = componentLocationInformation();
  const weatherContainer = componentWeatherContainer();

  document.body.appendChild(container);
  container.appendChild(header);
  header.appendChild(title);
  header.appendChild(searchForm);
  header.appendChild(conversionToggle);
  container.appendChild(locationInformation);
  locationInformation.appendChild(
    componentLocationHeader("City, Country", "date", "time")
  );
  locationInformation.appendChild(weatherContainer);
  weatherContainer.appendChild(
    componentBasicTempDisplay(
      "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "34F",
      "Partly Cloudy",
      "33F"
    )
  );
  weatherContainer.appendChild(componentDetailedDisplay("24mph", "5%", "0%"));
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "./src/location.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




async function getWeatherData(name) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=623e5f2a87014dff886202016231405&q=${name}&aqi=no`,
    { mode: "cors" }
  );

  const weatherData = await response.json();
  const locationName = weatherData.location.name;
  const locationCountry = weatherData.location.country;
  const tempF = weatherData.current.temp_f;
  const feelsLikeF = weatherData.current.feelslike_f;
  const condition = weatherData.current.condition.text;
  const conditionIcon = weatherData.current.condition.icon;
  const windMph = weatherData.current.wind_mph;
  const { humidity } = weatherData.current;
  const rain = weatherData.forecast.forecastday[0].hour[0].chance_of_rain;

  const location = new _location__WEBPACK_IMPORTED_MODULE_1__["default"](
    locationName,
    locationCountry,
    tempF,
    feelsLikeF,
    condition,
    conditionIcon,
    windMph,
    humidity,
    rain
  );

  console.log(location);
}

getWeatherData("seoul");

(0,_dom__WEBPACK_IMPORTED_MODULE_2__["default"])();


/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Location)
/* harmony export */ });
class Location {
  constructor(
    locationName,
    locationCountry,
    tempF,
    feelsLikeF,
    condition,
    conditionIcon,
    windMph,
    humidity,
    rain
  ) {
    this.locationName = locationName;
    this.locationCountry = locationCountry;
    this.temp = tempF;
    this.feelsLike = feelsLikeF;
    this.condition = condition;
    this.conditionIcon = conditionIcon;
    this.windMph = windMph;
    this.humidity = humidity;
    this.rain = rain;
  }
}


/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 class=%27bi bi-search%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z%27%3E%3C/path%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 class=%27bi bi-search%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z%27%3E%3C/path%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 class=%27bi bi-search%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z%27%3E%3C/path%3E%3C/svg%3E";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzE2JTI3IGhlaWdodD0lMjcxNiUyNyBjbGFzcz0lMjdiaSBiaS1zZWFyY2glMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM0UlM0NwYXRoIGQ9JTI3TTExLjc0MiAxMC4zNDRhNi41IDYuNSAwIDEgMC0xLjM5NyAxLjM5OGgtLjAwMWMuMDMuMDQuMDYyLjA3OC4wOTguMTE1bDMuODUgMy44NWExIDEgMCAwIDAgMS40MTUtMS40MTRsLTMuODUtMy44NWExLjAwNyAxLjAwNyAwIDAgMC0uMTE1LS4xek0xMiA2LjVhNS41IDUuNSAwIDEgMS0xMSAwIDUuNSA1LjUgMCAwIDEgMTEgMHolMjclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG5odG1sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2VhZjRmMztcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxYTUzNGUsICMxNTNlNGEpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgMjAwJTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBmbGV4OiAxO1xufVxuXG5mb3JtIHtcbiAgY29sb3I6ICMyNTI1MjU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWY0ZjM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDNweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA3cHggOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjUyNTI1O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6cGxhY2Vob2xkZXIsXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMjUyNTI1O1xuICBvcGFjaXR5OiAxO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNDBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC43O1xufVxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEMvRiB0b2dnbGUgKi9cbi50b2dnbGUtY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLnRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXS50b2dnbGU6Y2hlY2tlZCtsYWJlbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlYWY0ZjMsICNkY2U2ZTUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCA2cHggcmdiYSg0MSwgNDEsIDQxLCAwLjIpLFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGNvbG9yOiAjMTExMTExO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXS50b2dnbGUrbGFiZWwge1xuICB3aWR0aDogM2VtO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMyMTIxMjEsICMxMTExMTEpO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoNDAsIDQwLCA0MCwgMC43NSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0udG9nZ2xlK2xhYmVsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9jYXRpb24taW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1ZW07XG4gIGdhcDogMWVtO1xufVxuXG4ubG9jYXRpb24tbmFtZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWUtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFlbTtcbn1cblxuLmJhc2ljLWNvbmRpdGlvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjNlbTtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmN1cnJlbnQtdGVtcC1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAyMHB4O1xuICBmb250LXNpemU6IDRyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3VycmVudC1jb25kaXRpb24ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmN1cnJlbnQtZmVlbHMtbGlrZSxcbi5kZXRhaWxzLWhlYWRlciB7XG4gIGNvbG9yOiByZ2JhKDIzNCwgMjQ0LCAyNDMsIDAuNik7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ud2VhdGhlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVyZW07XG59XG5cbi5wLWluZm8ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmRldGFpbGVkLWNvbmRpdGlvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG9EQUFvRDtFQUNwRCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2IscURBQXFEO0VBQ3JELDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQiwyRUFBMkU7QUFDN0U7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztFQUNULDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsZ0ZBQTRZO0VBQzVZLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJEQUEyRDtFQUMzRDtpQ0FDK0I7RUFDL0IsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWiwyREFBMkQ7RUFDM0QsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZWFmNGYzO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxYTUzNGUsICMxNTNlNGEpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDIwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGNvbG9yOiAjMjUyNTI1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZjRmMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAzcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogN3B4IDhweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMjUyNTI1O1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6cGxhY2Vob2xkZXIsXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNTI1MjU7XFxuICBvcGFjaXR5OiAxO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICB0ZXh0LWluZGVudDogLTk5OXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgY2xhc3M9J2JpIGJpLXNlYXJjaCcgdmlld0JveD0nMCAwIDE2IDE2JyUzRSUzQ3BhdGggZD0nTTExLjc0MiAxMC4zNDRhNi41IDYuNSAwIDEgMC0xLjM5NyAxLjM5OGgtLjAwMWMuMDMuMDQuMDYyLjA3OC4wOTguMTE1bDMuODUgMy44NWExIDEgMCAwIDAgMS40MTUtMS40MTRsLTMuODUtMy44NWExLjAwNyAxLjAwNyAwIDAgMC0uMTE1LS4xek0xMiA2LjVhNS41IDUuNSAwIDEgMS0xMSAwIDUuNSA1LjUgMCAwIDEgMTEgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXFxcIikgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIEMvRiB0b2dnbGUgKi9cXG4udG9nZ2xlLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXS50b2dnbGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXS50b2dnbGU6Y2hlY2tlZCtsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZWFmNGYzLCAjZGNlNmU1KTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDZweCByZ2JhKDQxLCA0MSwgNDEsIDAuMiksXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgY29sb3I6ICMxMTExMTE7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdLnRvZ2dsZStsYWJlbCB7XFxuICB3aWR0aDogM2VtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzIxMjEyMSwgIzExMTExMSk7XFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoNDAsIDQwLCA0MCwgMC43NSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdLnRvZ2dsZStsYWJlbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbi1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1ZW07XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmxvY2F0aW9uLW5hbWUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRpbWUtaW5mbyB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmJhc2ljLWNvbmRpdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNlbTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC10ZW1wLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LWNvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmN1cnJlbnQtZmVlbHMtbGlrZSxcXG4uZGV0YWlscy1oZWFkZXIge1xcbiAgY29sb3I6IHJnYmEoMjM0LCAyNDQsIDI0MywgMC42KTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVyZW07XFxufVxcblxcbi5wLWluZm8ge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5kZXRhaWxlZC1jb25kaXRpb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjb21wb25lbnRDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlYXRoZXJBcHBcIjtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFNlYXJjaEZvcm0oKSB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1mb3JtXCIpO1xuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic2VhcmNoXCIpO1xuICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWlucHV0XCIpO1xuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlNlYXJjaCBsb2NhdGlvbi4uLlwiKTtcbiAgc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICBzZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG4gIHJldHVybiBzZWFyY2hGb3JtO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDb252ZXJzaW9uVG9nZ2xlKCkge1xuICBjb25zdCB0b2dnbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2dnbGVPbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCB0b2dnbGVPbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0b2dnbGVPZmZJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgdG9nZ2xlT2ZmTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRvZ2dsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlLWNvbnRhaW5lclwiKTtcbiAgdG9nZ2xlT25JbnB1dC5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlXCIsIFwidG9nZ2xlLWxlZnRcIik7XG4gIHRvZ2dsZU9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2dnbGUtb25cIik7XG4gIHRvZ2dsZU9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZ2dsZVwiKTtcbiAgdG9nZ2xlT25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImZhbHNlXCIpO1xuICB0b2dnbGVPbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgdG9nZ2xlT25JbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgdG9nZ2xlT25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2dnbGUtb25cIik7XG4gIHRvZ2dsZU9uTGFiZWwuY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgdG9nZ2xlT25MYWJlbC50ZXh0Q29udGVudCA9IFwiRlwiO1xuXG4gIHRvZ2dsZU9mZklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9nZ2xlLW9mZlwiKTtcbiAgdG9nZ2xlT2ZmSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvZ2dsZVwiLCBcInRvZ2dsZS1yaWdodFwiKTtcbiAgdG9nZ2xlT2ZmSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZ2dsZVwiKTtcbiAgdG9nZ2xlT2ZmSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJ0cnVlXCIpO1xuICB0b2dnbGVPZmZJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gIHRvZ2dsZU9mZkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZ2dsZS1vZmZcIik7XG4gIHRvZ2dsZU9mZkxhYmVsLnRleHRDb250ZW50ID0gXCJDXCI7XG5cbiAgdG9nZ2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZU9uSW5wdXQpO1xuICB0b2dnbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodG9nZ2xlT25MYWJlbCk7XG4gIHRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVPZmZJbnB1dCk7XG4gIHRvZ2dsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVPZmZMYWJlbCk7XG5cbiAgcmV0dXJuIHRvZ2dsZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50TG9jYXRpb25JbmZvcm1hdGlvbigpIHtcbiAgY29uc3QgbG9jYXRpb25JbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2F0aW9uSW5mb3JtYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLWluZm9ybWF0aW9uXCIpO1xuICByZXR1cm4gbG9jYXRpb25JbmZvcm1hdGlvbjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50TG9jYXRpb25IZWFkZXIobmFtZSwgZGF0ZSwgdGltZSkge1xuICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgdGltZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2NhdGlvbkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBsb2NhdGlvblRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBsb2NhdGlvbk5hbWUuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLW5hbWVcIik7XG4gIHRpbWVJbmZvLmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWluZm9cIik7XG5cbiAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgZGl2aWRlci50ZXh0Q29udGVudCA9IFwiIHwgXCI7XG4gIGxvY2F0aW9uRGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XG4gIGxvY2F0aW9uVGltZS50ZXh0Q29udGVudCA9IHRpbWU7XG5cbiAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25OYW1lKTtcbiAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGltZUluZm8pO1xuICB0aW1lSW5mby5hcHBlbmRDaGlsZChsb2NhdGlvbkRhdGUpO1xuICB0aW1lSW5mby5hcHBlbmRDaGlsZChkaXZpZGVyKTtcbiAgdGltZUluZm8uYXBwZW5kQ2hpbGQobG9jYXRpb25UaW1lKTtcblxuICByZXR1cm4gbG9jYXRpb25Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdlYXRoZXJDb250YWluZXIoKSB7XG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWF0aGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWNvbnRhaW5lclwiKTtcblxuICByZXR1cm4gd2VhdGhlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50QmFzaWNUZW1wRGlzcGxheShjb25kaXRpb25JY29uLCB0ZW1wLCBjb25kaXRpb24sIGZlZWxzTGlrZSkge1xuICBjb25zdCBiYXNpY0NvbmRpdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50VGVtcERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY3VycmVudEZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjdXJyZW50VGVtcEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYmFzaWNDb25kaXRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJiYXNpYy1jb25kaXRpb25zLWNvbnRhaW5lclwiKTtcbiAgY3VycmVudENvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1jb25kaXRpb25cIik7XG4gIGN1cnJlbnRGZWVsc0xpa2UuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtZmVlbHMtbGlrZVwiKTtcbiAgY3VycmVudFRlbXBEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXRlbXAtZGlzcGxheVwiKTtcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSB0ZW1wO1xuICBjdXJyZW50VGVtcEljb24uc3JjID0gY29uZGl0aW9uSWNvbjtcbiAgY3VycmVudENvbmRpdGlvbi50ZXh0Q29udGVudCA9IGNvbmRpdGlvbjtcbiAgY3VycmVudEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7ZmVlbHNMaWtlfWA7XG5cbiAgYmFzaWNDb25kaXRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wRGlzcGxheSk7XG4gIGN1cnJlbnRUZW1wRGlzcGxheS5hcHBlbmRDaGlsZChjdXJyZW50VGVtcEljb24pO1xuICBjdXJyZW50VGVtcERpc3BsYXkuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xuICBiYXNpY0NvbmRpdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudENvbmRpdGlvbik7XG4gIGJhc2ljQ29uZGl0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50RmVlbHNMaWtlKTtcblxuICByZXR1cm4gYmFzaWNDb25kaXRpb25zQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnREZXRhaWxlZERpc3BsYXkod2luZCwgaHVtaWRpdHksIHJhaW4pIHtcbiAgY29uc3QgZGV0YWlsZWRDb25kaXRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3VycmVudFdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB3aW5kSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB3aW5kSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBodW1pZGl0eUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgaHVtaWRpdHlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgY29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNoYW5jZU9mUmFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgY2hhbmNlT2ZSYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGRldGFpbGVkQ29uZGl0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsZWQtY29uZGl0aW9ucy1jb250YWluZXJcIik7XG4gIHdpbmRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtaGVhZGVyXCIpO1xuICBjaGFuY2VPZlJhaW5IZWFkZXIuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtaGVhZGVyXCIpO1xuICBodW1pZGl0eUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1oZWFkZXJcIik7XG5cbiAgd2luZEluZm8uY2xhc3NMaXN0LmFkZChcInAtaW5mb1wiKTtcbiAgaHVtaWRpdHlJbmZvLmNsYXNzTGlzdC5hZGQoXCJwLWluZm9cIik7XG4gIGNoYW5jZU9mUmFpbkluZm8uY2xhc3NMaXN0LmFkZChcInAtaW5mb1wiKTtcblxuICB3aW5kSGVhZGVyLnRleHRDb250ZW50ID0gXCJXaW5kXCI7XG4gIHdpbmRJbmZvLnRleHRDb250ZW50ID0gd2luZDtcblxuICBodW1pZGl0eUhlYWRlci50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHlcIjtcbiAgaHVtaWRpdHlJbmZvLnRleHRDb250ZW50ID0gaHVtaWRpdHk7XG5cbiAgY2hhbmNlT2ZSYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJDaGFuY2Ugb2YgUmFpblwiO1xuICBjaGFuY2VPZlJhaW5JbmZvLnRleHRDb250ZW50ID0gcmFpbjtcblxuICBkZXRhaWxlZENvbmRpdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFdpbmQpO1xuICBjdXJyZW50V2luZC5hcHBlbmRDaGlsZCh3aW5kSGVhZGVyKTtcbiAgY3VycmVudFdpbmQuYXBwZW5kQ2hpbGQod2luZEluZm8pO1xuICBkZXRhaWxlZENvbmRpdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEh1bWlkaXR5KTtcbiAgY3VycmVudEh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5SGVhZGVyKTtcbiAgY3VycmVudEh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5SW5mbyk7XG4gIGRldGFpbGVkQ29uZGl0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuY2VPZlJhaW4pO1xuICBjaGFuY2VPZlJhaW4uYXBwZW5kQ2hpbGQoY2hhbmNlT2ZSYWluSGVhZGVyKTtcbiAgY2hhbmNlT2ZSYWluLmFwcGVuZENoaWxkKGNoYW5jZU9mUmFpbkluZm8pO1xuXG4gIHJldHVybiBkZXRhaWxlZENvbmRpdGlvbnNDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNvbXBvbmVudENvbnRhaW5lcigpO1xuICBjb25zdCBoZWFkZXIgPSBjb21wb25lbnRIZWFkZXIoKTtcbiAgY29uc3QgdGl0bGUgPSBjb21wb25lbnRUaXRsZSgpO1xuICBjb25zdCBzZWFyY2hGb3JtID0gY29tcG9uZW50U2VhcmNoRm9ybSgpO1xuICBjb25zdCBjb252ZXJzaW9uVG9nZ2xlID0gY29tcG9uZW50Q29udmVyc2lvblRvZ2dsZSgpO1xuICBjb25zdCBsb2NhdGlvbkluZm9ybWF0aW9uID0gY29tcG9uZW50TG9jYXRpb25JbmZvcm1hdGlvbigpO1xuICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gY29tcG9uZW50V2VhdGhlckNvbnRhaW5lcigpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnZlcnNpb25Ub2dnbGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25JbmZvcm1hdGlvbik7XG4gIGxvY2F0aW9uSW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQoXG4gICAgY29tcG9uZW50TG9jYXRpb25IZWFkZXIoXCJDaXR5LCBDb3VudHJ5XCIsIFwiZGF0ZVwiLCBcInRpbWVcIilcbiAgKTtcbiAgbG9jYXRpb25JbmZvcm1hdGlvbi5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKTtcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjb21wb25lbnRCYXNpY1RlbXBEaXNwbGF5KFxuICAgICAgXCIvL2Nkbi53ZWF0aGVyYXBpLmNvbS93ZWF0aGVyLzY0eDY0L2RheS8xMTYucG5nXCIsXG4gICAgICBcIjM0RlwiLFxuICAgICAgXCJQYXJ0bHkgQ2xvdWR5XCIsXG4gICAgICBcIjMzRlwiXG4gICAgKVxuICApO1xuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBvbmVudERldGFpbGVkRGlzcGxheShcIjI0bXBoXCIsIFwiNSVcIiwgXCIwJVwiKSk7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuL2xvY2F0aW9uXCI7XG5pbXBvcnQgaW5pdCBmcm9tIFwiLi9kb21cIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobmFtZSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTYyM2U1ZjJhODcwMTRkZmY4ODYyMDIwMTYyMzE0MDUmcT0ke25hbWV9JmFxaT1ub2AsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG5cbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGxvY2F0aW9uTmFtZSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG4gIGNvbnN0IGxvY2F0aW9uQ291bnRyeSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gIGNvbnN0IHRlbXBGID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Y7XG4gIGNvbnN0IGZlZWxzTGlrZUYgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mO1xuICBjb25zdCBjb25kaXRpb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBjb25kaXRpb25JY29uID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgY29uc3Qgd2luZE1waCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9tcGg7XG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIGNvbnN0IHJhaW4gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyWzBdLmNoYW5jZV9vZl9yYWluO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKFxuICAgIGxvY2F0aW9uTmFtZSxcbiAgICBsb2NhdGlvbkNvdW50cnksXG4gICAgdGVtcEYsXG4gICAgZmVlbHNMaWtlRixcbiAgICBjb25kaXRpb24sXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICB3aW5kTXBoLFxuICAgIGh1bWlkaXR5LFxuICAgIHJhaW5cbiAgKTtcblxuICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG59XG5cbmdldFdlYXRoZXJEYXRhKFwic2VvdWxcIik7XG5cbmluaXQoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uIHtcbiAgY29uc3RydWN0b3IoXG4gICAgbG9jYXRpb25OYW1lLFxuICAgIGxvY2F0aW9uQ291bnRyeSxcbiAgICB0ZW1wRixcbiAgICBmZWVsc0xpa2VGLFxuICAgIGNvbmRpdGlvbixcbiAgICBjb25kaXRpb25JY29uLFxuICAgIHdpbmRNcGgsXG4gICAgaHVtaWRpdHksXG4gICAgcmFpblxuICApIHtcbiAgICB0aGlzLmxvY2F0aW9uTmFtZSA9IGxvY2F0aW9uTmFtZTtcbiAgICB0aGlzLmxvY2F0aW9uQ291bnRyeSA9IGxvY2F0aW9uQ291bnRyeTtcbiAgICB0aGlzLnRlbXAgPSB0ZW1wRjtcbiAgICB0aGlzLmZlZWxzTGlrZSA9IGZlZWxzTGlrZUY7XG4gICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgdGhpcy5jb25kaXRpb25JY29uID0gY29uZGl0aW9uSWNvbjtcbiAgICB0aGlzLndpbmRNcGggPSB3aW5kTXBoO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLnJhaW4gPSByYWluO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=