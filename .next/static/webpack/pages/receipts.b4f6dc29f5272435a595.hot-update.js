webpackHotUpdate_N_E("pages/receipts",{

/***/ "./pages/receipts.js":
/*!***************************!*\
  !*** ./pages/receipts.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/auth */ "./components/auth.js");



var _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\pages\\receipts.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 //importing the getUserFromLocalStorage function to get the currently logged in user. step-1.

function Receipts() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      orders = _useState[0],
      setOrders = _useState[1]; //hook will store list of orders. step-2


  var API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; //set up the api url. step-3.

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //hook to fetch the orders data from the Strapi API, using the logged in user's ID as a query parameter.step-4.
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var user, response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                user = Object(_components_auth__WEBPACK_IMPORTED_MODULE_3__["getUserFromLocalStorage"])();

                if (user) {
                  _context.next = 5;
                  break;
                }

                console.log("User not found in local storage");
                return _context.abrupt("return");

              case 5:
                _context.next = 7;
                return fetch("".concat(API_URL, "/orders?user=").concat(user.id), {
                  headers: {
                    Authorization: "Bearer ".concat(user.jwt)
                  }
                });

              case 7:
                response = _context.sent;
                _context.next = 10;
                return response.json();

              case 10:
                data = _context.sent;
                setOrders(data);
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []); //map orders. step-5.
  //divded the amount by 100 to fix to a dollar.
  //added a new status field. admin can set status in the panel. 
  //next step make a new page just for workers who can set status to shiped or delivered.   

  return __jsx("div", {
    style: {
      marginBottom: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: {
      fontSize: "2rem",
      marginBottom: "1rem",
      marginTop: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Order History"), orders.map(function (order, index) {
    return __jsx("div", {
      key: order.id,
      style: {
        fontSize: "1.5rem",
        border: "1px solid #ccc",
        background: "white",
        padding: "1rem",
        marginBottom: index === orders.length - 1 ? 0 : "1rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, "Order ID: ", order.id), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, "Amount: $", order.amount), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, "Status: ", order.status));
  }));
}

_s(Receipts, "FvMuVccH6DXI6fqfhJiN/VsjZaw=");

_c = Receipts;
/* harmony default export */ __webpack_exports__["default"] = (Receipts);

var _c;

$RefreshReg$(_c, "Receipts");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjZWlwdHMuanMiXSwibmFtZXMiOlsiUmVjZWlwdHMiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInVzZXIiLCJnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImlkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqd3QiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJtYXAiLCJvcmRlciIsImluZGV4IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJsZW5ndGgiLCJhbW91bnQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0EsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNYQyxNQURXO0FBQUEsTUFDSEMsU0FERyxpQkFDdUI7OztBQUN6QyxNQUFNQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQsQ0FGa0IsQ0FFMEQ7O0FBRTVFQyx5REFBUyxDQUFDLFlBQU07QUFBQztBQUNmLFFBQU1DLFNBQVM7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVSQyxvQkFGUSxHQUVEQyxnRkFBdUIsRUFGdEI7O0FBQUEsb0JBR1RELElBSFM7QUFBQTtBQUFBO0FBQUE7O0FBSVpFLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWjtBQUpZOztBQUFBO0FBQUE7QUFBQSx1QkFRU0MsS0FBSyxXQUFJVixPQUFKLDBCQUEyQk0sSUFBSSxDQUFDSyxFQUFoQyxHQUFzQztBQUNoRUMseUJBQU8sRUFBRTtBQUNQQyxpQ0FBYSxtQkFBWVAsSUFBSSxDQUFDUSxHQUFqQjtBQUROO0FBRHVELGlCQUF0QyxDQVJkOztBQUFBO0FBUVJDLHdCQVJRO0FBQUE7QUFBQSx1QkFjS0EsUUFBUSxDQUFDQyxJQUFULEVBZEw7O0FBQUE7QUFjUkMsb0JBZFE7QUFlZGxCLHlCQUFTLENBQUNrQixJQUFELENBQVQ7QUFmYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWlCZFQsdUJBQU8sQ0FBQ0MsR0FBUjs7QUFqQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEosU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQXFCQUEsYUFBUztBQUNWLEdBdkJRLEVBdUJOLEVBdkJNLENBQVQsQ0FKa0IsQ0E0QmxCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ2Esa0JBQVksRUFBRTtBQUFmLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxNQUFaO0FBQW9CRCxrQkFBWSxFQUFFLE1BQWxDO0FBQTBDRSxlQUFTLEVBQUU7QUFBckQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUd0QixNQUFNLENBQUN1QixHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsV0FDVjtBQUFLLFNBQUcsRUFBRUQsS0FBSyxDQUFDWCxFQUFoQjtBQUFvQixXQUFLLEVBQUU7QUFDdkJRLGdCQUFRLEVBQUUsUUFEYTtBQUV2QkssY0FBTSxFQUFFLGdCQUZlO0FBR3ZCQyxrQkFBVSxFQUFFLE9BSFc7QUFJdkJDLGVBQU8sRUFBRSxNQUpjO0FBSU5SLG9CQUFZLEVBQUVLLEtBQUssS0FBS3pCLE1BQU0sQ0FBQzZCLE1BQVAsR0FBZ0IsQ0FBMUIsR0FBOEIsQ0FBOUIsR0FBa0M7QUFKMUMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWNMLEtBQUssQ0FBQ1gsRUFBcEIsQ0FMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWFXLEtBQUssQ0FBQ00sTUFBbkIsQ0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVlOLEtBQUssQ0FBQ08sTUFBbEIsQ0FQRixDQURVO0FBQUEsR0FBWCxDQUZILENBREY7QUFnQkQ7O0dBaERRakMsUTs7S0FBQUEsUTtBQWtETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjZWlwdHMuYjRmNmRjMjlmNTI3MjQzNWE1OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aFwiO1xyXG4vL2ltcG9ydGluZyB0aGUgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgZnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXIuIHN0ZXAtMS5cclxuZnVuY3Rpb24gUmVjZWlwdHMoKSB7XHJcbiAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKFtdKTsvL2hvb2sgd2lsbCBzdG9yZSBsaXN0IG9mIG9yZGVycy4gc3RlcC0yXHJcbiAgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjsgLy9zZXQgdXAgdGhlIGFwaSB1cmwuIHN0ZXAtMy5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvL2hvb2sgdG8gZmV0Y2ggdGhlIG9yZGVycyBkYXRhIGZyb20gdGhlIFN0cmFwaSBBUEksIHVzaW5nIHRoZSBsb2dnZWQgaW4gdXNlcidzIElEIGFzIGEgcXVlcnkgcGFyYW1ldGVyLnN0ZXAtNC5cclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBub3QgZm91bmQgaW4gbG9jYWwgc3RvcmFnZVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vb3JkZXJzP3VzZXI9JHt1c2VyLmlkfWAsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXIuand0fWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldE9yZGVycyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIC8vbWFwIG9yZGVycy4gc3RlcC01LlxyXG4gIC8vZGl2ZGVkIHRoZSBhbW91bnQgYnkgMTAwIHRvIGZpeCB0byBhIGRvbGxhci5cclxuICAvL2FkZGVkIGEgbmV3IHN0YXR1cyBmaWVsZC4gYWRtaW4gY2FuIHNldCBzdGF0dXMgaW4gdGhlIHBhbmVsLiBcclxuICAvL25leHQgc3RlcCBtYWtlIGEgbmV3IHBhZ2UganVzdCBmb3Igd29ya2VycyB3aG8gY2FuIHNldCBzdGF0dXMgdG8gc2hpcGVkIG9yIGRlbGl2ZXJlZC4gICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIycmVtXCIgfX0gPlxyXG4gICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiLCBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLCBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19Pk9yZGVyIEhpc3Rvcnk8L2gxPlxyXG4gICAgICB7b3JkZXJzLm1hcCgob3JkZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e29yZGVyLmlkfSBzdHlsZT17eyBcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLCBtYXJnaW5Cb3R0b206IGluZGV4ID09PSBvcmRlcnMubGVuZ3RoIC0gMSA/IDAgOiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgPHA+T3JkZXIgSUQ6IHtvcmRlci5pZH08L3A+XHJcbiAgICAgICAgICA8cD5BbW91bnQ6ICR7b3JkZXIuYW1vdW50fTwvcD5cclxuICAgICAgICAgIDxwPlN0YXR1czoge29yZGVyLnN0YXR1c308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjZWlwdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=