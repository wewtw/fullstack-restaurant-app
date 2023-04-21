webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function MyApp(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem,
      user = _useContext.user,
      setUser = _useContext.setUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    cart: cart,
    user: user
  }),
      state = _useState[0],
      setState = _useState[1];

  var Component = props.Component,
      pageProps = props.pageProps; //last good no errors

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var localUser = window.localStorage.getItem("user");

    if (localUser) {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        user: JSON.parse(localUser)
      }));
    }
  }, []);

  var handleSetUser = function handleSetUser(user) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      user: user,
      isAuthenticated: !!user
    }));
    window.localStorage.setItem("user", JSON.stringify(user));
  };

  var handleAddItem = function handleAddItem(item) {
    var items = state.cart.items; // Check if item is already in cart

    var foundItem = items.find(function (i) {
      return i.id === item.id;
    });

    if (foundItem) {
      // If item is already in cart, increase quantity
      var newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return _objectSpread(_objectSpread({}, item), {}, {
              quantity: item.quantity + 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price
      };
      setState({
        cart: newCart,
        user: state.user
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.set("cart", newCart);
    } else {
      // If item is not in cart, add it
      var _newCart = {
        items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.cart.items), [_objectSpread(_objectSpread({}, item), {}, {
          quantity: 1
        })]),
        total: state.cart.total + item.price
      };
      setState({
        cart: _newCart,
        user: state.user
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.set("cart", _newCart);
    }
  };

  var handleRemoveItem = function handleRemoveItem(item) {
    var items = state.cart.items; // Check if item is already in cart

    var foundItem = items.find(function (i) {
      return i.id === item.id;
    });

    if (foundItem.quantity > 1) {
      // If quantity is greater than 1, decrease quantity
      var newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return _objectSpread(_objectSpread({}, item), {}, {
              quantity: item.quantity - 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price
      };
      setState({
        cart: newCart,
        user: state.user
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.set("cart", newCart);
    } else {
      // If quantity is 1, remove item from cart
      var _newCart2 = {
        items: items.filter(function (item) {
          return item.id !== foundItem.id;
        }),
        total: state.cart.total - item.price
      };
      setState({
        cart: _newCart2,
        user: state.user
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.set("cart", _newCart2);
    }
  };

  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: {
      cart: state.cart,
      addItem: handleAddItem,
      removeItem: handleRemoveItem,
      isAuthenticated: !!user,
      user: state.user,
      setUser: handleSetUser
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }))));
}

_s(MyApp, "7NyBH2p/psDC3xH0gqBXSm+mWE0=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImxvY2FsVXNlciIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJoYW5kbGVTZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUFkZEl0ZW0iLCJpdGVtIiwiaXRlbXMiLCJmb3VuZEl0ZW0iLCJmaW5kIiwiaSIsImlkIiwibmV3Q2FydCIsIm1hcCIsInF1YW50aXR5IiwidG90YWwiLCJwcmljZSIsIkNvb2tpZSIsInNldCIsImhhbmRsZVJlbW92ZUl0ZW0iLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsb0JBQ2lDQyx3REFBVSxDQUFDQywyREFBRCxDQUQzQztBQUFBLE1BQ1pDLElBRFksZUFDWkEsSUFEWTtBQUFBLE1BQ05DLE9BRE0sZUFDTkEsT0FETTtBQUFBLE1BQ0dDLFVBREgsZUFDR0EsVUFESDtBQUFBLE1BQ2VDLElBRGYsZUFDZUEsSUFEZjtBQUFBLE1BQ3FCQyxPQURyQixlQUNxQkEsT0FEckI7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUM7QUFBRUwsUUFBSSxFQUFFQSxJQUFSO0FBQWNHLFFBQUksRUFBRUE7QUFBcEIsR0FBRCxDQUZkO0FBQUEsTUFFYkcsS0FGYTtBQUFBLE1BRU5DLFFBRk07O0FBQUEsTUFH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VyxNQUFYLEVBQW1CTixTQUFuQjtBQUNEO0FBQ0YsR0EvQkQ7O0FBaUNBLFNBQ0UsTUFBQywyREFBRCxDQUFZLFFBQVo7QUFDRSxTQUFLLEVBQUU7QUFDTDVCLFVBQUksRUFBRU0sS0FBSyxDQUFDTixJQURQO0FBRUxDLGFBQU8sRUFBRW9CLGFBRko7QUFHTG5CLGdCQUFVLEVBQUVpQyxnQkFIUDtBQUlMakIscUJBQWUsRUFBRSxDQUFDLENBQUNmLElBSmQ7QUFLTEEsVUFBSSxFQUFFRyxLQUFLLENBQUNILElBTFA7QUFNTEMsYUFBTyxFQUFFYTtBQU5KLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsdUVBRlA7QUFHRSxhQUFTLEVBQUMseUVBSFo7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FWRixFQWtCRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQseUZBQWVSLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBbEJGLENBREY7QUF3QkQ7O0dBM0dRYixLOztLQUFBQSxLO0FBNkdNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU2M2FhNzRlNjljNWVkZTc2NDFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5mdW5jdGlvbiBNeUFwcChwcm9wcykge1xuICBjb25zdCB7IGNhcnQsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIHVzZXIsIHNldFVzZXIgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBjYXJ0OiBjYXJ0LCB1c2VyOiB1c2VyIH0pO1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcbi8vbGFzdCBnb29kIG5vIGVycm9yc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsVXNlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gICAgaWYgKGxvY2FsVXNlcikge1xuICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgdXNlcjogSlNPTi5wYXJzZShsb2NhbFVzZXIpIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNldFVzZXIgPSAodXNlcikgPT4ge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIHVzZXI6IHVzZXIsIGlzQXV0aGVudGljYXRlZDogISF1c2VyIH0pO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XG5cbiAgICAvLyBDaGVjayBpZiBpdGVtIGlzIGFscmVhZHkgaW4gY2FydFxuICAgIGNvbnN0IGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuXG4gICAgaWYgKGZvdW5kSXRlbSkge1xuICAgICAgLy8gSWYgaXRlbSBpcyBhbHJlYWR5IGluIGNhcnQsIGluY3JlYXNlIHF1YW50aXR5XG4gICAgICBjb25zdCBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcbiAgICAgIH07XG5cbiAgICAgIHNldFN0YXRlKHsgY2FydDogbmV3Q2FydCwgdXNlcjogc3RhdGUudXNlciB9KTtcbiAgICAgIENvb2tpZS5zZXQoXCJjYXJ0XCIsIG5ld0NhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBpdGVtIGlzIG5vdCBpbiBjYXJ0LCBhZGQgaXRcbiAgICAgIGNvbnN0IG5ld0NhcnQgPSB7XG4gICAgICAgIGl0ZW1zOiBbLi4uc3RhdGUuY2FydC5pdGVtcywgeyAuLi5pdGVtLCBxdWFudGl0eTogMSB9XSxcbiAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgfTtcblxuICAgICAgc2V0U3RhdGUoeyBjYXJ0OiBuZXdDYXJ0LCB1c2VyOiBzdGF0ZS51c2VyIH0pO1xuICAgICAgQ29va2llLnNldChcImNhcnRcIiwgbmV3Q2FydCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XG5cbiAgICAvLyBDaGVjayBpZiBpdGVtIGlzIGFscmVhZHkgaW4gY2FydFxuICAgIGNvbnN0IGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuXG4gICAgaWYgKGZvdW5kSXRlbS5xdWFudGl0eSA+IDEpIHtcbiAgICAgIC8vIElmIHF1YW50aXR5IGlzIGdyZWF0ZXIgdGhhbiAxLCBkZWNyZWFzZSBxdWFudGl0eVxuICAgICAgY29uc3QgbmV3Q2FydCA9IHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBmb3VuZEl0ZW0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IC0gMSB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UsXG4gICAgICB9O1xuXG4gICAgICBzZXRTdGF0ZSh7IGNhcnQ6IG5ld0NhcnQsIHVzZXI6IHN0YXRlLnVzZXIgfSk7XG4gICAgICBDb29raWUuc2V0KFwiY2FydFwiLCBuZXdDYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgcXVhbnRpdHkgaXMgMSwgcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICBjb25zdCBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBmb3VuZEl0ZW0uaWQpLFxuICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UsXG4gICAgICB9O1xuXG4gICAgICBzZXRTdGF0ZSh7IGNhcnQ6IG5ld0NhcnQsIHVzZXI6IHN0YXRlLnVzZXIgfSk7XG4gICAgICBDb29raWUuc2V0KFwiY2FydFwiLCBuZXdDYXJ0KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY2FydDogc3RhdGUuY2FydCxcbiAgICAgICAgYWRkSXRlbTogaGFuZGxlQWRkSXRlbSxcbiAgICAgICAgcmVtb3ZlSXRlbTogaGFuZGxlUmVtb3ZlSXRlbSxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIXVzZXIsXG4gICAgICAgIHVzZXI6IHN0YXRlLnVzZXIsXG4gICAgICAgIHNldFVzZXI6IGhhbmRsZVNldFVzZXIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1HbjUzODR4cVExYW9XWEErMDU4UlhQeFBnNmZ5NElXdlROaDBFMjYzWG1GY0psU0F3aUdnRkFXL2RBaVM2SlhtXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==