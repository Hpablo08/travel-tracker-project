/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": () => (/* binding */ fetchData),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });

function fetchData(repo) {
  return fetch(`http://localhost:3001/api/v1/${repo}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Not a 200 status');
        }        
        return response.json();
      })
      .catch(error => {
        alert('Oops, something went wrong in the fetch. Try refreshing your page.');
      })
}

function postData(repo, userData) {
  const requestData = {
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    };

  return fetch(`http://localhost:3001/api/v1/${repo}`, requestData)
    .then(response => {
      if (!response.ok) {
        throw new Error('Not a 200 status');
      }
      alert('Information submitted');
      return response.json();
    })
    .catch(error => {
      alert('Oops, something went wrong in the post. Try again later');
    });
  }




/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  width: 100%;\n  text-align: center;\n  background-color: #284b63;\n}\n\nbody {\n  background-color: #d9d9d9;\n  position: relative;\n}\n\nheader, body {\n  font-family: 'Roboto', sans-serif;\n  color: #ffffff;\n}\n\n.logo-main {\n  width: 200px;\n  margin: 20px;\n  position:\n}\n\n.display-name {\n  color: #ef8354;\n}\n\n.client-header {\n  font-size: 25px;\n  color: #202c39;\n}\n\n.trip-request-section {\n  text-align: center;\n}\n\n/* Cards **************************/\n.cards-container {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(4, 1fr) 5fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  grid-area: 3 / 1 / 6 / 6;\n  position: relative;\n}\n\nh4, h5 {\n  margin: 10px;\n}\n\n.card {\n  contain: content;\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  margin: 10px;\n  width: 150px;\n  height: 230px;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  background: linear-gradient(-45deg, #284b63, #ef8354, #284b63, #284b63);\n  background-size: 400% 400%;\n  animation: gradient 12s ease infinite;\n  position: relative;\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n\n  50% {\n    background-position: 100% 50%;\n  }\n\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n.card-img {\n  padding: 5px;\n  height: 90px;\n}\n\n.submit-login, .log-in-btn, .display-estimate, .book-trip-btn, .trip-request-btn {\n  font-size: 14px;\n  cursor: pointer;\n  background-color: #ffffff;\n  color: #455A64;\n  margin: 10px;\n  padding: 8px;\n  border-radius: 2px;\n  border: none;\n}\n\n.submit-login:hover, .log-in-btn:hover, .display-estimate:hover, .book-trip-btn:hover, .trip-request-btn:hover {\n  background-color: #ef8354;\n  color: #ffffff;\n}\n\n#main {\n  transition: margin-left .5s;\n  padding: 20px;\n}\n\n/* GENERAL ********************************************* */\n.hidden {\n  display: none;\n}\n\n/* Login ********************************************* */\n.logo {\n  width: 150px;\n}\n\n.log-in-container {\n  background-color: #284b63;\n  width: 300px;\n  padding: 25px 100px;\n  position: absolute;\n  z-index: 1;\n  transform: translate(-50%, 50%);\n  left: 50%;\n  top: 10%;\n  border-radius: 8px;\n  font-family: 'Roboto', sans-serif;\n  align-items: center;\n  justify-content: center;\n}\n\n\n/* FORM ************************************************ */\ninput:invalid {\n  border: 1px solid red;\n}\n\ninput:valid {\n  border: 1px solid lightgreen;\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ;AACF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,mCAAmC;AACnC;EACE,aAAa;EACb,qCAAqC;EACrC,sCAAsC;EACtC,oBAAoB;EACpB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,2BAA2B;EAC3B,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,uEAAuE;EACvE,0BAA0B;EAC1B,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE;IACE,2BAA2B;EAC7B;;EAEA;IACE,6BAA6B;EAC/B;;EAEA;IACE,2BAA2B;EAC7B;AACF;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,eAAe;EACf,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;AACf;;AAEA,0DAA0D;AAC1D;EACE,aAAa;AACf;;AAEA,wDAAwD;AACxD;EACE,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,+BAA+B;EAC/B,SAAS;EACT,QAAQ;EACR,kBAAkB;EAClB,iCAAiC;EACjC,mBAAmB;EACnB,uBAAuB;AACzB;;;AAGA,0DAA0D;AAC1D;EACE,qBAAqB;AACvB;;AAEA;EACE,4BAA4B;AAC9B","sourcesContent":["header {\n  width: 100%;\n  text-align: center;\n  background-color: #284b63;\n}\n\nbody {\n  background-color: #d9d9d9;\n  position: relative;\n}\n\nheader, body {\n  font-family: 'Roboto', sans-serif;\n  color: #ffffff;\n}\n\n.logo-main {\n  width: 200px;\n  margin: 20px;\n  position:\n}\n\n.display-name {\n  color: #ef8354;\n}\n\n.client-header {\n  font-size: 25px;\n  color: #202c39;\n}\n\n.trip-request-section {\n  text-align: center;\n}\n\n/* Cards **************************/\n.cards-container {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(4, 1fr) 5fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  grid-area: 3 / 1 / 6 / 6;\n  position: relative;\n}\n\nh4, h5 {\n  margin: 10px;\n}\n\n.card {\n  contain: content;\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  margin: 10px;\n  width: 150px;\n  height: 230px;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  background: linear-gradient(-45deg, #284b63, #ef8354, #284b63, #284b63);\n  background-size: 400% 400%;\n  animation: gradient 12s ease infinite;\n  position: relative;\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n\n  50% {\n    background-position: 100% 50%;\n  }\n\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n.card-img {\n  padding: 5px;\n  height: 90px;\n}\n\n.submit-login, .log-in-btn, .display-estimate, .book-trip-btn, .trip-request-btn {\n  font-size: 14px;\n  cursor: pointer;\n  background-color: #ffffff;\n  color: #455A64;\n  margin: 10px;\n  padding: 8px;\n  border-radius: 2px;\n  border: none;\n}\n\n.submit-login:hover, .log-in-btn:hover, .display-estimate:hover, .book-trip-btn:hover, .trip-request-btn:hover {\n  background-color: #ef8354;\n  color: #ffffff;\n}\n\n#main {\n  transition: margin-left .5s;\n  padding: 20px;\n}\n\n/* GENERAL ********************************************* */\n.hidden {\n  display: none;\n}\n\n/* Login ********************************************* */\n.logo {\n  width: 150px;\n}\n\n.log-in-container {\n  background-color: #284b63;\n  width: 300px;\n  padding: 25px 100px;\n  position: absolute;\n  z-index: 1;\n  transform: translate(-50%, 50%);\n  left: 50%;\n  top: 10%;\n  border-radius: 8px;\n  font-family: 'Roboto', sans-serif;\n  align-items: center;\n  justify-content: center;\n}\n\n\n/* FORM ************************************************ */\ninput:invalid {\n  border: 1px solid red;\n}\n\ninput:valid {\n  border: 1px solid lightgreen;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 5 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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
/* 6 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class Repository {
  constructor(data) {
    this.data = data
  }

  findTraveler(id, property) {
    return this.data.filter(trip => trip[property] === id)
  }

  findDestinations(destinationRepository) {
    const tripDestinationIDs = destinationRepository
      .map(trip => trip.destinationID)

    return this.data.reduce((acc, destination) => {
      if (tripDestinationIDs.includes(destination.id)) {
        acc.push(destination)
      }
      return acc
    }, [])
  }

  getAllDestinations(data){
      return data.data
      .map(destinations => destinations.destination).sort()
    }
  }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Repository);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Traveler {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.travelerType = data.travelerType
  }

  findFirstName() {
    return this.name.split(' ', 1)[0]
  }

  setTravelerData(repo, dataArray, property) {
    this[dataArray] = repo.findTraveler(this.id, property)
  }

  setTravelerDestinations(dataset) {
    this.destinations = dataset.findDestinations(this.trips);
  }

  calcMoneySpent() {
    const pastTrips = this.trips.filter((trip) => trip.date > '2022/01/01').map((trip) => trip.destinationID)
    const total = this.destinations.reduce((acc, destination) => {
      if (pastTrips.includes(destination.id)) {
        const currentPastTrip = this.trips.find((trip) => trip.destinationID === destination.id)
        const pastTripFlightCost = currentPastTrip.travelers * destination.estimatedFlightCostPerPerson
        const pastTripLodgingCost = currentPastTrip.duration * destination.estimatedLodgingCostPerDay
        acc += pastTripFlightCost + pastTripLodgingCost
      }
      return acc
    }, 0)
    const fee = total * .10
    const totalPlusFee = total + fee
    return totalPlusFee.toFixed(2)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Traveler);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/logo.png");

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _travelers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
// DEPENDENCIES **************************************************






// DOM ELEMENTS ***************************************************
const travelerName = document.querySelector('.display-name')
const destinations = document.querySelector('.destination-name')
const upcomingTrips = document.querySelector('.upcoming-destination')
const pastTrips = document.querySelector('.past-destination')
const tripStatus = document.querySelector('.trip-status')
const cardsContainer = document.querySelector('.cards-container')
const totalMoneySpent = document.querySelector('.total-money-spent')
const displayInputForm = document.querySelector('.trip-request-section')
const requestTripBtn = document.querySelector('.trip-request-btn')
const bookBtn = document.querySelector('.book-trip-btn')
const destinationChoices = document.querySelector('#mySelect')
const tripForm = document.querySelector('.trip-form')
const tripEstimate = document.querySelector('.trip-estimate')
const displayEstimateBtn = document.querySelector('.display-estimate')
const userName = document.querySelector('#userName')
const password = document.querySelector('#password')
const logInBtn = document.querySelector('.log-in-btn')
const displayLogInForm = document.querySelector('.log-in-section')
const submitLoginBtn = document.querySelector('.submit-login')
const loginContainer = document.querySelector('.log-in-container')
const errorUsername = document.querySelector('.error-message-username')
const tripCardsSection = document.querySelector('.client-header')
const headerSection = document.querySelector('.top-nav')

// EVENT LISTENERS ************************************************
submitLoginBtn.addEventListener('click', checkLoginData)
requestTripBtn.addEventListener('click', displayDataForm)
bookBtn.addEventListener('click', checkInputForm)
displayEstimateBtn.addEventListener('click', collectInputFormData)


// GLOBAL DATA ***************************************************
let currentTraveler
let tripRepository
let destinationRepository
let randomTraveler
let newId
let bookButton

// FUNCTIONS *****************************************************
function checkLoginData() {
  let userNameNumber = userName.value.slice(8)
  if (userName.value === "" || password.value === "") {
    errorUsername.innerText = `PLEASE SUBMIT BOTH USERNAME AND PASSWORD!`
  } else if (password.value !== "travel") {
    errorUsername.innerText = `INCORRECT PASSWORD!`
  } else if (!userName.value.includes("traveler")) {
    errorUsername.innerText = `USERNAME DOES NOT EXIST! PLEASE TRY AGAIN.`
  } else if (parseInt(userNameNumber) > 50 ) {
    errorUsername.innerText = `THE USERNAME DOES NOT EXIST`
  } else {
    errorUsername.innerText = ''
    loginTraveler(userNameNumber)
  }
}

function loginTraveler(userNameNumber) {
  tripCardsSection.classList.remove('hidden')
  headerSection.classList.remove('hidden')
  loginContainer.classList.add('hidden')
  Promise.all([(0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.fetchData)(`travelers/${userNameNumber}`), (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.fetchData)("trips"), (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.fetchData)("destinations")])
  .then(data => {
    setData(data)
  })
}

function setData(data) {
  randomTraveler = new _travelers__WEBPACK_IMPORTED_MODULE_3__.default(data[0])
  tripRepository = new _repository__WEBPACK_IMPORTED_MODULE_2__.default(data[1].trips)
  destinationRepository = new _repository__WEBPACK_IMPORTED_MODULE_2__.default(data[2].destinations)
  randomTraveler.setTravelerData(tripRepository, 'trips', 'userID')
  randomTraveler.setTravelerDestinations(destinationRepository)
  displayData()
}

function displayData() {
  displayTravelerData()
  displayDestinations()
  randomTraveler.calcMoneySpent()
  displayDestinationOptions()
}

function displayTravelerData() {
  travelerName.innerText = randomTraveler.findFirstName()
  totalMoneySpent.innerText = randomTraveler.calcMoneySpent()
}

function displayDestinations() {
  const todaysDate = new Date().toISOString().slice(0, 10).split('-').join('/')
  randomTraveler.trips.forEach(trip => {
    const travelerDestinations = randomTraveler.destinations.find(destination => trip.destinationID === destination.id)
    if (trip.status === 'pending') {
      createTripCards('Pending Trip', travelerDestinations, trip)
    } else if (trip.date < todaysDate) {
      createTripCards('Past Trip', travelerDestinations, trip)
    } else {
      createTripCards('Upcoming Trip', travelerDestinations, trip)
    }
  })
}

function createTripCards(status, travelerDestinations, trip) {
  cardsContainer.innerHTML += ` <article class='card'>
        <img class="card-img" src="${travelerDestinations.image}" alt="${travelerDestinations.alt}">
        <section class='card-description'>
          <h4 class='destination-name'>${travelerDestinations.destination}</h4>
          <h5>${trip.date}</h5>
          <h5 class='trip-status'>${status}</h5>
        </article>
      `
}

function displayDataForm() {
  displayInputForm.classList.toggle('hidden')
  const todaysInputDate = new Date().toISOString().slice(0, 10)
  const tripDate = document.getElementById("tripDate").min = `${todaysInputDate}`
  tripForm.reset()

}

function displayDestinationOptions() {
  const sortedDestinations = destinationRepository.getAllDestinations(destinationRepository)
  const showDestinations =
  sortedDestinations.forEach((destination) => {
    var options = document.createElement("OPTION")
    options.setAttribute("value", `${destination}`)
    var destinations = document.createTextNode(`${destination}`)
    options.appendChild(destinations)
    document.getElementById("mySelect").appendChild(options)
  })
  return showDestinations
}

function checkInputForm() {
  if (destinationChoices.options[destinationChoices.selectedIndex].text &&
    tripDuration.value &&
    tripDate.value &&
    numOfTravelers.value) {
    let bookButton = true
    collectInputFormData(bookButton)
  } else {
    tripEstimate.innerHTML = 'Please fill out all sections'
    tripForm.reset()
  }
}

function collectInputFormData(bookButton) {
  const selectedDestination = destinationChoices.options[destinationChoices.selectedIndex].value
  const matchDestinationId = destinationRepository.data.find(destination => destination.destination === selectedDestination)
  let idNumberArray = tripRepository.data.map((trip) => trip.id)
  let newId = idNumberArray.length + 1

  let travelerInputData = {
    id: newId,
    userID: randomTraveler.id,
    destinationID: matchDestinationId.id,
    travelers: parseInt(numOfTravelers.value),
    date: tripDate.value.split('-').join('/'),
    duration: parseInt(tripDuration.value),
    status: 'pending',
    suggestedActivities: []
  }
  if (bookButton === true) {
    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.postData)('trips', travelerInputData)
    createTripCards('Pending Trip', matchDestinationId, travelerInputData)
    tripRepository.data.push(travelerInputData)
    tripForm.reset()
    displayInputForm.classList.toggle('hidden')
    tripEstimate.innerHTML = ''
  } else {
    calcSingleTrip(travelerInputData)
  }
}

function calcSingleTrip(inputData) {
  const currentDestinationID = inputData.destinationID
  const total = destinationRepository.data.reduce((acc, destination) => {
    if (currentDestinationID === destination.id) {
      const currentFlightCost = inputData.travelers * destination.estimatedFlightCostPerPerson
      const currentLodgingCost = inputData.duration * destination.estimatedLodgingCostPerDay
      acc += currentFlightCost + currentLodgingCost
    }
    return acc
  }, 0)
  const fee = total * .10
  const totalPlusFee = total + fee
  const estimate = totalPlusFee.toFixed(2)
  let bookButton = false
  return tripEstimate.innerHTML = `<h2>Your estimate is: ${estimate} </h2>`
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map