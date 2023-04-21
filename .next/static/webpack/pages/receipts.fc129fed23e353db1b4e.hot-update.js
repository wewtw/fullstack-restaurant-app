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
      marginBottom: "1rem"
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
        border: "5px solid #ccc",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjZWlwdHMuanMiXSwibmFtZXMiOlsiUmVjZWlwdHMiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInVzZXIiLCJnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImlkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqd3QiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJtYXAiLCJvcmRlciIsImluZGV4IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJsZW5ndGgiLCJhbW91bnQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0EsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNYQyxNQURXO0FBQUEsTUFDSEMsU0FERyxpQkFDdUI7OztBQUN6QyxNQUFNQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQsQ0FGa0IsQ0FFMEQ7O0FBRTVFQyx5REFBUyxDQUFDLFlBQU07QUFBQztBQUNmLFFBQU1DLFNBQVM7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVSQyxvQkFGUSxHQUVEQyxnRkFBdUIsRUFGdEI7O0FBQUEsb0JBR1RELElBSFM7QUFBQTtBQUFBO0FBQUE7O0FBSVpFLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWjtBQUpZOztBQUFBO0FBQUE7QUFBQSx1QkFRU0MsS0FBSyxXQUFJVixPQUFKLDBCQUEyQk0sSUFBSSxDQUFDSyxFQUFoQyxHQUFzQztBQUNoRUMseUJBQU8sRUFBRTtBQUNQQyxpQ0FBYSxtQkFBWVAsSUFBSSxDQUFDUSxHQUFqQjtBQUROO0FBRHVELGlCQUF0QyxDQVJkOztBQUFBO0FBUVJDLHdCQVJRO0FBQUE7QUFBQSx1QkFjS0EsUUFBUSxDQUFDQyxJQUFULEVBZEw7O0FBQUE7QUFjUkMsb0JBZFE7QUFlZGxCLHlCQUFTLENBQUNrQixJQUFELENBQVQ7QUFmYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWlCZFQsdUJBQU8sQ0FBQ0MsR0FBUjs7QUFqQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEosU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQXFCQUEsYUFBUztBQUNWLEdBdkJRLEVBdUJOLEVBdkJNLENBQVQsQ0FKa0IsQ0E0QmxCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ2Esa0JBQVksRUFBRTtBQUFmLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxNQUFaO0FBQW9CRCxrQkFBWSxFQUFFO0FBQWxDLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVHcEIsTUFBTSxDQUFDc0IsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQ1Y7QUFBSyxTQUFHLEVBQUVELEtBQUssQ0FBQ1YsRUFBaEI7QUFBb0IsV0FBSyxFQUFFO0FBQ3ZCUSxnQkFBUSxFQUFFLFFBRGE7QUFFdkJJLGNBQU0sRUFBRSxnQkFGZTtBQUd2QkMsa0JBQVUsRUFBRSxPQUhXO0FBSXZCQyxlQUFPLEVBQUUsTUFKYztBQUlOUCxvQkFBWSxFQUFFSSxLQUFLLEtBQUt4QixNQUFNLENBQUM0QixNQUFQLEdBQWdCLENBQTFCLEdBQThCLENBQTlCLEdBQWtDO0FBSjFDLE9BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFjTCxLQUFLLENBQUNWLEVBQXBCLENBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFhVSxLQUFLLENBQUNNLE1BQU4sR0FBZSxHQUE1QixDQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBWU4sS0FBSyxDQUFDTyxNQUFsQixDQVBGLENBRFU7QUFBQSxHQUFYLENBRkgsQ0FERjtBQWdCRDs7R0FoRFFoQyxROztLQUFBQSxRO0FBa0RNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNlaXB0cy5mYzEyOWZlZDIzZTM1M2RiMWI0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoXCI7XHJcbi8vaW1wb3J0aW5nIHRoZSBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSBmdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlci4gc3RlcC0xLlxyXG5mdW5jdGlvbiBSZWNlaXB0cygpIHtcclxuICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pOy8vaG9vayB3aWxsIHN0b3JlIGxpc3Qgb2Ygb3JkZXJzLiBzdGVwLTJcclxuICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiOyAvL3NldCB1cCB0aGUgYXBpIHVybC4gc3RlcC0zLlxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gey8vaG9vayB0byBmZXRjaCB0aGUgb3JkZXJzIGRhdGEgZnJvbSB0aGUgU3RyYXBpIEFQSSwgdXNpbmcgdGhlIGxvZ2dlZCBpbiB1c2VyJ3MgSUQgYXMgYSBxdWVyeSBwYXJhbWV0ZXIuc3RlcC00LlxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIG5vdCBmb3VuZCBpbiBsb2NhbCBzdG9yYWdlXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnM/dXNlcj0ke3VzZXIuaWR9YCwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci5qd3R9YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0T3JkZXJzKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgLy9tYXAgb3JkZXJzLiBzdGVwLTUuXHJcbiAgLy9kaXZkZWQgdGhlIGFtb3VudCBieSAxMDAgdG8gZml4IHRvIGEgZG9sbGFyLlxyXG4gIC8vYWRkZWQgYSBuZXcgc3RhdHVzIGZpZWxkLiBhZG1pbiBjYW4gc2V0IHN0YXR1cyBpbiB0aGUgcGFuZWwuIFxyXG4gIC8vbmV4dCBzdGVwIG1ha2UgYSBuZXcgcGFnZSBqdXN0IGZvciB3b3JrZXJzIHdobyBjYW4gc2V0IHN0YXR1cyB0byBzaGlwZWQgb3IgZGVsaXZlcmVkLiAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjJyZW1cIiB9fSA+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX0+T3JkZXIgSGlzdG9yeTwvaDE+XHJcbiAgICAgIHtvcmRlcnMubWFwKChvcmRlciwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17b3JkZXIuaWR9IHN0eWxlPXt7IFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjVweCBzb2xpZCAjY2NjXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsIG1hcmdpbkJvdHRvbTogaW5kZXggPT09IG9yZGVycy5sZW5ndGggLSAxID8gMCA6IFwiMXJlbVwifX0+XHJcbiAgICAgICAgICA8cD5PcmRlciBJRDoge29yZGVyLmlkfTwvcD5cclxuICAgICAgICAgIDxwPkFtb3VudDogJHtvcmRlci5hbW91bnQgLyAxMDB9PC9wPlxyXG4gICAgICAgICAgPHA+U3RhdHVzOiB7b3JkZXIuc3RhdHVzfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNlaXB0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==