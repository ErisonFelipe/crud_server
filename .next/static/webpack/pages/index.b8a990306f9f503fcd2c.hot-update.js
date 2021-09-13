self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    return t.parentNode.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  var updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: function updateHead(head) {
      var promise = updatePromise = Promise.resolve().then(function () {
        if (promise !== updatePromise) return;
        updatePromise = null;
        var tags = {};
        head.forEach(function (h) {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector("style[data-href=\"".concat(h.props['data-href'], "\"]"))) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          var components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        var titleComponent = tags.title ? tags.title[0] : null;
        var title = '';

        if (titleComponent) {
          var children = titleComponent.props.children;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _headManagerContext = __webpack_require__(/*! ../shared/lib/head-manager-context */ "./node_modules/next/dist/shared/lib/head-manager-context.js");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var ScriptCache = new Map();
var LoadCache = new Set();
var ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

var loadScript = function loadScript(props) {
  var src = props.src,
      id = props.id,
      _props$onLoad = props.onLoad,
      onLoad = _props$onLoad === void 0 ? function () {} : _props$onLoad,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$children = props.children,
      children = _props$children === void 0 ? '' : _props$children,
      _props$strategy = props.strategy,
      strategy = _props$strategy === void 0 ? 'afterInteractive' : _props$strategy,
      onError = props.onError;
  var cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  var el = document.createElement('script');
  var loadPromise = new Promise(function (resolve, reject) {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  })["catch"](function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    var attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  var _props$strategy2 = props.strategy,
      strategy = _props$strategy2 === void 0 ? 'afterInteractive' : _props$strategy2;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(function () {
      return loadScript(props);
    });
  } else {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  _s();

  var _props$src = props.src,
      src = _props$src === void 0 ? '' : _props$src,
      _props$onLoad2 = props.onLoad,
      onLoad = _props$onLoad2 === void 0 ? function () {} : _props$onLoad2,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$strategy3 = props.strategy,
      strategy = _props$strategy3 === void 0 ? 'afterInteractive' : _props$strategy3,
      onError = props.onError,
      restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  var _useContext = (0, _react).useContext(_headManagerContext.HeadManagerContext),
      updateScripts = _useContext.updateScripts,
      scripts = _useContext.scripts,
      getIsSsr = _useContext.getIsSsr;

  (0, _react).useEffect(function () {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src: src,
        onLoad: onLoad,
        onError: onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(restProps.id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

_s(Script, "e8WGedLHPLUuZjHFS2+Zt0avCrA=");

_c = Script;
var _default = Script;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Script");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ "./node_modules/next/script.js");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\eriso\\OneDrive\\Documentos\\portifolio\\pages\\index.js";





function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "Portifolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("nav", {
      className: "navbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "max-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "logo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            href: "home.thm",
            children: "Trendy Man"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
          className: "menu",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "home.html",
              className: "menu-btn",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "#",
              className: "menu-btn",
              children: "Cadastre-se"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "#",
              className: "menu-btn",
              children: "Contatos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "menu-btn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
            className: "fas fa-bars"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/script.js":
/*!*************************************!*\
  !*** ./node_modules/next/script.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/script */ "./node_modules/next/dist/client/script.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjhhOTkwMzA2ZjlmNTAzZmNkMmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBQ2JBLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELGVBQUEsR0FBa0JFLGVBQWxCO0FBQ0FGLHlCQUFBLEdBQTRCLEtBQUssQ0FBakM7QUFDQSxJQUFNRyxpQkFBaUIsR0FBRztBQUN0QkMsRUFBQUEsYUFBYSxFQUFFLGdCQURPO0FBRXRCQyxFQUFBQSxTQUFTLEVBQUUsT0FGVztBQUd0QkMsRUFBQUEsT0FBTyxFQUFFLEtBSGE7QUFJdEJDLEVBQUFBLFNBQVMsRUFBRSxZQUpXO0FBS3RCQyxFQUFBQSxRQUFRLEVBQUU7QUFMWSxDQUExQjtBQU9BUix5QkFBQSxHQUE0QkcsaUJBQTVCOztBQUNBLFNBQVNNLGlCQUFULE9BQThDO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVZDLEtBQVUsUUFBVkEsS0FBVTtBQUMxQyxNQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkosSUFBdkIsQ0FBWDs7QUFDQSxPQUFJLElBQU1LLENBQVYsSUFBZUosS0FBZixFQUFxQjtBQUNqQixRQUFJLENBQUNBLEtBQUssQ0FBQ0ssY0FBTixDQUFxQkQsQ0FBckIsQ0FBTCxFQUE4QjtBQUM5QixRQUFJQSxDQUFDLEtBQUssVUFBTixJQUFvQkEsQ0FBQyxLQUFLLHlCQUE5QixFQUF5RCxTQUZ4QyxDQUdqQjs7QUFDQSxRQUFJSixLQUFLLENBQUNJLENBQUQsQ0FBTCxLQUFhRSxTQUFqQixFQUE0QjtBQUM1QixRQUFNQyxJQUFJLEdBQUdmLGlCQUFpQixDQUFDWSxDQUFELENBQWpCLElBQXdCQSxDQUFDLENBQUNJLFdBQUYsRUFBckM7O0FBQ0EsUUFBSVQsSUFBSSxLQUFLLFFBQVQsS0FBc0JRLElBQUksS0FBSyxPQUFULElBQW9CQSxJQUFJ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QUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBU0k7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUF5QkQ7O0tBMUJNQTtBQTRCUCwrREFBZUEsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDRiw2R0FBZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaGVhZC1tYW5hZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpbml0SGVhZE1hbmFnZXI7XG5leHBvcnRzLkRPTUF0dHJpYnV0ZU5hbWVzID0gdm9pZCAwO1xuY29uc3QgRE9NQXR0cmlidXRlTmFtZXMgPSB7XG4gICAgYWNjZXB0Q2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0JyxcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgaHRtbEZvcjogJ2ZvcicsXG4gICAgaHR0cEVxdWl2OiAnaHR0cC1lcXVpdicsXG4gICAgbm9Nb2R1bGU6ICdub01vZHVsZSdcbn07XG5leHBvcnRzLkRPTUF0dHJpYnV0ZU5hbWVzID0gRE9NQXR0cmlidXRlTmFtZXM7XG5mdW5jdGlvbiByZWFjdEVsZW1lbnRUb0RPTSh7IHR5cGUgLCBwcm9wcyAgfSkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IoY29uc3QgcCBpbiBwcm9wcyl7XG4gICAgICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkocCkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAocCA9PT0gJ2NoaWxkcmVuJyB8fCBwID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSBjb250aW51ZTtcbiAgICAgICAgLy8gd2UgZG9uJ3QgcmVuZGVyIHVuZGVmaW5lZCBwcm9wcyB0byB0aGUgRE9NXG4gICAgICAgIGlmIChwcm9wc1twXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgYXR0ciA9IERPTUF0dHJpYnV0ZU5hbWVzW3BdIHx8IHAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzY3JpcHQnICYmIChhdHRyID09PSAnYXN5bmMnIHx8IGF0dHIgPT09ICdkZWZlcicgfHwgYXR0ciA9PT0gJ25vTW9kdWxlJykpIHtcbiAgICAgICAgICAgIGVsW2F0dHJdID0gISFwcm9wc1twXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBwcm9wc1twXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgeyBjaGlsZHJlbiAsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICB9ID0gcHJvcHM7XG4gICAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCB8fCAnJztcbiAgICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IGNoaWxkcmVuIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5qb2luKCcnKSA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50cyh0eXBlLCBjb21wb25lbnRzKSB7XG4gICAgY29uc3QgaGVhZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICBjb25zdCBoZWFkQ291bnRFbCA9IGhlYWRFbC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9bmV4dC1oZWFkLWNvdW50XScpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghaGVhZENvdW50RWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6IG5leHQtaGVhZC1jb3VudCBpcyBtaXNzaW5nLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWhlYWQtY291bnQtbWlzc2luZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGhlYWRDb3VudCA9IE51bWJlcihoZWFkQ291bnRFbC5jb250ZW50KTtcbiAgICBjb25zdCBvbGRUYWdzID0gW107XG4gICAgZm9yKGxldCBpID0gMCwgaiA9IGhlYWRDb3VudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IGkgPCBoZWFkQ291bnQ7IGkrKywgaiA9IGoucHJldmlvdXNFbGVtZW50U2libGluZyl7XG4gICAgICAgIGlmIChqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgb2xkVGFncy5wdXNoKGopO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5ld1RhZ3MgPSBjb21wb25lbnRzLm1hcChyZWFjdEVsZW1lbnRUb0RPTSkuZmlsdGVyKChuZXdUYWcpPT57XG4gICAgICAgIGZvcihsZXQgayA9IDAsIGxlbiA9IG9sZFRhZ3MubGVuZ3RoOyBrIDwgbGVuOyBrKyspe1xuICAgICAgICAgICAgY29uc3Qgb2xkVGFnID0gb2xkVGFnc1trXTtcbiAgICAgICAgICAgIGlmIChvbGRUYWcuaXNFcXVhbE5vZGUobmV3VGFnKSkge1xuICAgICAgICAgICAgICAgIG9sZFRhZ3Muc3BsaWNlKGssIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBvbGRUYWdzLmZvckVhY2goKHQpPT50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodClcbiAgICApO1xuICAgIG5ld1RhZ3MuZm9yRWFjaCgodCk9PmhlYWRFbC5pbnNlcnRCZWZvcmUodCwgaGVhZENvdW50RWwpXG4gICAgKTtcbiAgICBoZWFkQ291bnRFbC5jb250ZW50ID0gKGhlYWRDb3VudCAtIG9sZFRhZ3MubGVuZ3RoICsgbmV3VGFncy5sZW5ndGgpLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBpbml0SGVhZE1hbmFnZXIoKSB7XG4gICAgbGV0IHVwZGF0ZVByb21pc2UgPSBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXM6IG5ldyBTZXQoKSxcbiAgICAgICAgdXBkYXRlSGVhZDogKGhlYWQpPT57XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdXBkYXRlUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSAhPT0gdXBkYXRlUHJvbWlzZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSB7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBoZWFkLmZvckVhY2goKGgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICgvLyBJZiB0aGUgZm9udCB0YWcgaXMgbG9hZGVkIG9ubHkgb24gY2xpZW50IG5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgd29uJ3QgYmUgaW5saW5lZC4gSW4gdGhpcyBjYXNlIHJldmVydCB0byB0aGUgb3JpZ2luYWwgYmVoYXZpb3JcbiAgICAgICAgICAgICAgICAgICAgaC50eXBlID09PSAnbGluaycgJiYgaC5wcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc3R5bGVbZGF0YS1ocmVmPVwiJHtoLnByb3BzWydkYXRhLWhyZWYnXX1cIl1gKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaC5wcm9wcy5ocmVmID0gaC5wcm9wc1snZGF0YS1ocmVmJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBoLnByb3BzWydkYXRhLWhyZWYnXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gdGFnc1toLnR5cGVdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLnB1c2goaCk7XG4gICAgICAgICAgICAgICAgICAgIHRhZ3NbaC50eXBlXSA9IGNvbXBvbmVudHM7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVDb21wb25lbnQgPSB0YWdzLnRpdGxlID8gdGFncy50aXRsZVswXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gIH0gPSB0aXRsZUNvbXBvbmVudC5wcm9wcztcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gY2hpbGRyZW4gOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuLmpvaW4oJycpIDogJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aXRsZSAhPT0gZG9jdW1lbnQudGl0bGUpIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAnbWV0YScsXG4gICAgICAgICAgICAgICAgICAgICdiYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnLFxuICAgICAgICAgICAgICAgICAgICAnc2NyaXB0J1xuICAgICAgICAgICAgICAgIF0uZm9yRWFjaCgodHlwZSk9PntcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRWxlbWVudHModHlwZSwgdGFnc1t0eXBlXSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQtbWFuYWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaW5pdFNjcmlwdExvYWRlciA9IGluaXRTY3JpcHRMb2FkZXI7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9oZWFkTWFuYWdlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTtcbnZhciBfaGVhZE1hbmFnZXIgPSByZXF1aXJlKFwiLi9oZWFkLW1hbmFnZXJcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgU2NyaXB0Q2FjaGUgPSBuZXcgTWFwKCk7XG5jb25zdCBMb2FkQ2FjaGUgPSBuZXcgU2V0KCk7XG5jb25zdCBpZ25vcmVQcm9wcyA9IFtcbiAgICAnb25Mb2FkJyxcbiAgICAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLFxuICAgICdjaGlsZHJlbicsXG4gICAgJ29uRXJyb3InLFxuICAgICdzdHJhdGVneScsIFxuXTtcbmNvbnN0IGxvYWRTY3JpcHQgPSAocHJvcHMpPT57XG4gICAgY29uc3QgeyBzcmMgLCBpZCAsIG9uTG9hZCA9KCk9PntcbiAgICB9ICwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgLCBjaGlsZHJlbiA9JycgLCBzdHJhdGVneSA9J2FmdGVySW50ZXJhY3RpdmUnICwgb25FcnJvciAsICB9ID0gcHJvcHM7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBpZCB8fCBzcmM7XG4gICAgLy8gU2NyaXB0IGhhcyBhbHJlYWR5IGxvYWRlZFxuICAgIGlmIChjYWNoZUtleSAmJiBMb2FkQ2FjaGUuaGFzKGNhY2hlS2V5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENvbnRlbnRzIG9mIHRoaXMgc2NyaXB0IGFyZSBhbHJlYWR5IGxvYWRpbmcvbG9hZGVkXG4gICAgaWYgKFNjcmlwdENhY2hlLmhhcyhzcmMpKSB7XG4gICAgICAgIExvYWRDYWNoZS5hZGQoY2FjaGVLZXkpO1xuICAgICAgICAvLyBFeGVjdXRlIG9uTG9hZCBzaW5jZSB0aGUgc2NyaXB0IGxvYWRpbmcgaGFzIGJlZ3VuXG4gICAgICAgIFNjcmlwdENhY2hlLmdldChzcmMpLnRoZW4ob25Mb2FkLCBvbkVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGNvbnN0IGxvYWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIGlmIChvbkxvYWQpIHtcbiAgICAgICAgICAgICAgICBvbkxvYWQuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICBvbkVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHNyYykge1xuICAgICAgICBTY3JpcHRDYWNoZS5zZXQoc3JjLCBsb2FkUHJvbWlzZSk7XG4gICAgfVxuICAgIExvYWRDYWNoZS5hZGQoY2FjaGVLZXkpO1xuICAgIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCkge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwgfHwgJyc7XG4gICAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyBjaGlsZHJlbiA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4uam9pbignJykgOiAnJztcbiAgICB9IGVsc2UgaWYgKHNyYykge1xuICAgICAgICBlbC5zcmMgPSBzcmM7XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2ssIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpe1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpZ25vcmVQcm9wcy5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXR0ciA9IF9oZWFkTWFuYWdlci5ET01BdHRyaWJ1dGVOYW1lc1trXSB8fCBrLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1uc2NyaXB0Jywgc3RyYXRlZ3kpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xufTtcbmZ1bmN0aW9uIGhhbmRsZUNsaWVudFNjcmlwdExvYWQocHJvcHMpIHtcbiAgICBjb25zdCB7IHN0cmF0ZWd5ID0nYWZ0ZXJJbnRlcmFjdGl2ZScgIH0gPSBwcm9wcztcbiAgICBpZiAoc3RyYXRlZ3kgPT09ICdhZnRlckludGVyYWN0aXZlJykge1xuICAgICAgICBsb2FkU2NyaXB0KHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eU9ubG9hZCcpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5sb2FkU2NyaXB0KHByb3BzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbG9hZExhenlTY3JpcHQocHJvcHMpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PmxvYWRTY3JpcHQocHJvcHMpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5sb2FkU2NyaXB0KHByb3BzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5pdFNjcmlwdExvYWRlcihzY3JpcHRMb2FkZXJJdGVtcykge1xuICAgIHNjcmlwdExvYWRlckl0ZW1zLmZvckVhY2goaGFuZGxlQ2xpZW50U2NyaXB0TG9hZCk7XG59XG5mdW5jdGlvbiBTY3JpcHQocHJvcHMpIHtcbiAgICBjb25zdCB7IHNyYyA9JycgLCBvbkxvYWQgPSgpPT57XG4gICAgfSAsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICwgc3RyYXRlZ3kgPSdhZnRlckludGVyYWN0aXZlJyAsIG9uRXJyb3IgIH0gPSBwcm9wcywgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJzcmNcIiwgXCJvbkxvYWRcIiwgXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiLCBcInN0cmF0ZWd5XCIsIFwib25FcnJvclwiXSk7XG4gICAgLy8gQ29udGV4dCBpcyBhdmFpbGFibGUgb25seSBkdXJpbmcgU1NSXG4gICAgY29uc3QgeyB1cGRhdGVTY3JpcHRzICwgc2NyaXB0cyAsIGdldElzU3NyICB9ID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfaGVhZE1hbmFnZXJDb250ZXh0LkhlYWRNYW5hZ2VyQ29udGV4dCk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XG4gICAgICAgICAgICBsb2FkU2NyaXB0KHByb3BzKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2xhenlPbmxvYWQnKSB7XG4gICAgICAgICAgICBsb2FkTGF6eVNjcmlwdChwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHByb3BzLFxuICAgICAgICBzdHJhdGVneVxuICAgIF0pO1xuICAgIGlmIChzdHJhdGVneSA9PT0gJ2JlZm9yZUludGVyYWN0aXZlJykge1xuICAgICAgICBpZiAodXBkYXRlU2NyaXB0cykge1xuICAgICAgICAgICAgc2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZSA9IChzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5jb25jYXQoW1xuICAgICAgICAgICAgICAgIF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZCxcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvclxuICAgICAgICAgICAgICAgIH0sIHJlc3RQcm9wcyksIFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB1cGRhdGVTY3JpcHRzKHNjcmlwdHMpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldElzU3NyICYmIGdldElzU3NyKCkpIHtcbiAgICAgICAgICAgIC8vIFNjcmlwdCBoYXMgYWxyZWFkeSBsb2FkZWQgZHVyaW5nIFNTUlxuICAgICAgICAgICAgTG9hZENhY2hlLmFkZChyZXN0UHJvcHMuaWQgfHwgc3JjKTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRJc1NzciAmJiAhZ2V0SXNTc3IoKSkge1xuICAgICAgICAgICAgbG9hZFNjcmlwdChwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG52YXIgX2RlZmF1bHQgPSBTY3JpcHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NyaXB0LmpzLm1hcCIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDx0aXRsZT5Qb3J0aWZvbGlvPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXdpZHRoXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImhvbWUudGhtXCI+VHJlbmR5IE1hbjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImhvbWUuaHRtbFwiIGNsYXNzTmFtZT1cIm1lbnUtYnRuXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWVudS1idG5cIj5DYWRhc3RyZS1zZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWVudS1idG5cIj5Db250YXRvczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L3NjcmlwdCcpXG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJpbml0SGVhZE1hbmFnZXIiLCJET01BdHRyaWJ1dGVOYW1lcyIsImFjY2VwdENoYXJzZXQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwiaHR0cEVxdWl2Iiwibm9Nb2R1bGUiLCJyZWFjdEVsZW1lbnRUb0RPTSIsInR5cGUiLCJwcm9wcyIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicCIsImhhc093blByb3BlcnR5IiwidW5kZWZpbmVkIiwiYXR0ciIsInRvTG93ZXJDYXNlIiwic2V0QXR0cmlidXRlIiwiY2hpbGRyZW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImlubmVySFRNTCIsIl9faHRtbCIsInRleHRDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsInVwZGF0ZUVsZW1lbnRzIiwiY29tcG9uZW50cyIsImhlYWRFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVhZENvdW50RWwiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImVycm9yIiwiaGVhZENvdW50IiwiTnVtYmVyIiwiY29udGVudCIsIm9sZFRhZ3MiLCJpIiwiaiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ0YWdOYW1lIiwicHVzaCIsIm5ld1RhZ3MiLCJtYXAiLCJmaWx0ZXIiLCJuZXdUYWciLCJrIiwibGVuIiwibGVuZ3RoIiwib2xkVGFnIiwiaXNFcXVhbE5vZGUiLCJzcGxpY2UiLCJmb3JFYWNoIiwidCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImluc2VydEJlZm9yZSIsInRvU3RyaW5nIiwidXBkYXRlUHJvbWlzZSIsIm1vdW50ZWRJbnN0YW5jZXMiLCJTZXQiLCJ1cGRhdGVIZWFkIiwiaGVhZCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJ0YWdzIiwiaCIsImhyZWYiLCJ0aXRsZUNvbXBvbmVudCIsInRpdGxlIiwiaW5pdFNjcmlwdExvYWRlciIsIl9yZWFjdCIsInJlcXVpcmUiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2hlYWRNYW5hZ2VyIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwiU2NyaXB0Q2FjaGUiLCJNYXAiLCJMb2FkQ2FjaGUiLCJpZ25vcmVQcm9wcyIsImxvYWRTY3JpcHQiLCJzcmMiLCJpZCIsIm9uTG9hZCIsInN0cmF0ZWd5Iiwib25FcnJvciIsImNhY2hlS2V5IiwiaGFzIiwiYWRkIiwiZ2V0IiwibG9hZFByb21pc2UiLCJyZWplY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNldCIsImVudHJpZXMiLCJpbmNsdWRlcyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhbmRsZUNsaWVudFNjcmlwdExvYWQiLCJ3aW5kb3ciLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwibG9hZExhenlTY3JpcHQiLCJyZWFkeVN0YXRlIiwic2NyaXB0TG9hZGVySXRlbXMiLCJTY3JpcHQiLCJyZXN0UHJvcHMiLCJ1c2VDb250ZXh0IiwiSGVhZE1hbmFnZXJDb250ZXh0IiwidXBkYXRlU2NyaXB0cyIsInNjcmlwdHMiLCJnZXRJc1NzciIsInVzZUVmZmVjdCIsImJlZm9yZUludGVyYWN0aXZlIiwiX2RlZmF1bHQiLCJIZWFkIiwiSW1hZ2UiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==