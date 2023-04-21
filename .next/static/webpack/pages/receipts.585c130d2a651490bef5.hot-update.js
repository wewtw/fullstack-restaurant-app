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
  //last good no errors.

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
    }, "Amount: $", order.amount / 100), __jsx("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjZWlwdHMuanMiXSwibmFtZXMiOlsiUmVjZWlwdHMiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInVzZXIiLCJnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImlkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqd3QiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJtYXAiLCJvcmRlciIsImluZGV4IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJsZW5ndGgiLCJhbW91bnQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0EsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNYQyxNQURXO0FBQUEsTUFDSEMsU0FERyxpQkFDdUI7OztBQUN6QyxNQUFNQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQsQ0FGa0IsQ0FFMEQ7QUFDOUU7O0FBQ0VDLHlEQUFTLENBQUMsWUFBTTtBQUFDO0FBQ2YsUUFBTUMsU0FBUztBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVJDLG9CQUZRLEdBRURDLGdGQUF1QixFQUZ0Qjs7QUFBQSxvQkFHVEQsSUFIUztBQUFBO0FBQUE7QUFBQTs7QUFJWkUsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBSlk7O0FBQUE7QUFBQTtBQUFBLHVCQVFTQyxLQUFLLFdBQUlWLE9BQUosMEJBQTJCTSxJQUFJLENBQUNLLEVBQWhDLEdBQXNDO0FBQ2hFQyx5QkFBTyxFQUFFO0FBQ1BDLGlDQUFhLG1CQUFZUCxJQUFJLENBQUNRLEdBQWpCO0FBRE47QUFEdUQsaUJBQXRDLENBUmQ7O0FBQUE7QUFRUkMsd0JBUlE7QUFBQTtBQUFBLHVCQWNLQSxRQUFRLENBQUNDLElBQVQsRUFkTDs7QUFBQTtBQWNSQyxvQkFkUTtBQWVkbEIseUJBQVMsQ0FBQ2tCLElBQUQsQ0FBVDtBQWZjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUJkVCx1QkFBTyxDQUFDQyxHQUFSOztBQWpCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUSixTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBcUJBQSxhQUFTO0FBQ1YsR0F2QlEsRUF1Qk4sRUF2Qk0sQ0FBVCxDQUprQixDQTRCbEI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FDRTtBQUFLLFNBQUssRUFBRTtBQUFDYSxrQkFBWSxFQUFFO0FBQWYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFLE1BQVo7QUFBb0JELGtCQUFZLEVBQUUsTUFBbEM7QUFBMENFLGVBQVMsRUFBRTtBQUFyRCxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR3RCLE1BQU0sQ0FBQ3VCLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxXQUNWO0FBQUssU0FBRyxFQUFFRCxLQUFLLENBQUNYLEVBQWhCO0FBQW9CLFdBQUssRUFBRTtBQUN2QlEsZ0JBQVEsRUFBRSxRQURhO0FBRXZCSyxjQUFNLEVBQUUsZ0JBRmU7QUFHdkJDLGtCQUFVLEVBQUUsT0FIVztBQUl2QkMsZUFBTyxFQUFFLE1BSmM7QUFJTlIsb0JBQVksRUFBRUssS0FBSyxLQUFLekIsTUFBTSxDQUFDNkIsTUFBUCxHQUFnQixDQUExQixHQUE4QixDQUE5QixHQUFrQztBQUoxQyxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBY0wsS0FBSyxDQUFDWCxFQUFwQixDQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBYVcsS0FBSyxDQUFDTSxNQUFOLEdBQWUsR0FBNUIsQ0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVlOLEtBQUssQ0FBQ08sTUFBbEIsQ0FQRixDQURVO0FBQUEsR0FBWCxDQUZILENBREY7QUFnQkQ7O0dBaERRakMsUTs7S0FBQUEsUTtBQWtETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjZWlwdHMuNTg1YzEzMGQyYTY1MTQ5MGJlZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aFwiO1xyXG4vL2ltcG9ydGluZyB0aGUgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgZnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXIuIHN0ZXAtMS5cclxuZnVuY3Rpb24gUmVjZWlwdHMoKSB7XHJcbiAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKFtdKTsvL2hvb2sgd2lsbCBzdG9yZSBsaXN0IG9mIG9yZGVycy4gc3RlcC0yXHJcbiAgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjsgLy9zZXQgdXAgdGhlIGFwaSB1cmwuIHN0ZXAtMy5cclxuLy9sYXN0IGdvb2Qgbm8gZXJyb3JzLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly9ob29rIHRvIGZldGNoIHRoZSBvcmRlcnMgZGF0YSBmcm9tIHRoZSBTdHJhcGkgQVBJLCB1c2luZyB0aGUgbG9nZ2VkIGluIHVzZXIncyBJRCBhcyBhIHF1ZXJ5IHBhcmFtZXRlci5zdGVwLTQuXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgbm90IGZvdW5kIGluIGxvY2FsIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L29yZGVycz91c2VyPSR7dXNlci5pZH1gLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyLmp3dH1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRPcmRlcnMoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuICAvL21hcCBvcmRlcnMuIHN0ZXAtNS5cclxuICAvL2RpdmRlZCB0aGUgYW1vdW50IGJ5IDEwMCB0byBmaXggdG8gYSBkb2xsYXIuXHJcbiAgLy9hZGRlZCBhIG5ldyBzdGF0dXMgZmllbGQuIGFkbWluIGNhbiBzZXQgc3RhdHVzIGluIHRoZSBwYW5lbC4gXHJcbiAgLy9uZXh0IHN0ZXAgbWFrZSBhIG5ldyBwYWdlIGp1c3QgZm9yIHdvcmtlcnMgd2hvIGNhbiBzZXQgc3RhdHVzIHRvIHNoaXBlZCBvciBkZWxpdmVyZWQuICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMnJlbVwiIH19ID5cclxuICAgICAgPGgxIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiwgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5PcmRlciBIaXN0b3J5PC9oMT5cclxuICAgICAge29yZGVycy5tYXAoKG9yZGVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtvcmRlci5pZH0gc3R5bGU9e3sgXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIiwgbWFyZ2luQm90dG9tOiBpbmRleCA9PT0gb3JkZXJzLmxlbmd0aCAtIDEgPyAwIDogXCIxcmVtXCJ9fT5cclxuICAgICAgICAgIDxwPk9yZGVyIElEOiB7b3JkZXIuaWR9PC9wPlxyXG4gICAgICAgICAgPHA+QW1vdW50OiAke29yZGVyLmFtb3VudCAvIDEwMH08L3A+XHJcbiAgICAgICAgICA8cD5TdGF0dXM6IHtvcmRlci5zdGF0dXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2VpcHRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9