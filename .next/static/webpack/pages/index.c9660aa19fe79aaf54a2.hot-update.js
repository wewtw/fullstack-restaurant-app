webpackHotUpdate_N_E("pages/index",{

/***/ "./components/drinks.js":
/*!******************************!*\
  !*** ./components/drinks.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./components/context.js");


var _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\components\\drinks.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query($id: ID!) {\n      restaurant(id: $id) {\n        id\n        name\n        drinks {\n          id\n          name\n          description\n          price\n          image {\n            url\n          }\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function Drinks(_ref) {
  _s();

  var _this = this;

  var restId = _ref.restId;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      addItem = _useContext.addItem;

  var GET_RESTAURANT_DRINKS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_RESTAURANT_DRINKS, {
    variables: {
      id: restId
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 23
    }
  }, "Loading drink...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, "Error: ", error.message);
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "No drinks found");
  var filteredDishes = data.dishes.filter(function (dish) {
    return dish.name.toLowerCase().includes(props.search);
  });
  var restaurant = data.restaurant;

  if (restId > 0) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, restaurant.drinks.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: "6",
        sm: "4",
        style: {
          padding: 1
        },
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        style: {
          margin: "10px 10px",
          color: 'blue',
          background: "lightgreen",
          marginBottom: "2rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
        top: true,
        style: {
          height: 190,
          padding: 5
        },
        src: "http://localhost:1337".concat(res.image.url),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 19
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 19
        }
      }, res.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 19
        }
      }, res.price)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        outline: true,
        color: "primary",
        onClick: function onClick() {
          return addItem(res);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 19
        }
      }, "+ Add To Cart"))));
    }));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 12
      }
    }, " No Drinks");
  }
}

_s(Drinks, "2IiZu96LzC4KzwsvR/Bt1ejWkMs=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = Drinks;
/* harmony default export */ __webpack_exports__["default"] = (Drinks);

var _c;

$RefreshReg$(_c, "Drinks");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kcmlua3MuanMiXSwibmFtZXMiOlsiRHJpbmtzIiwicmVzdElkIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJhZGRJdGVtIiwiR0VUX1JFU1RBVVJBTlRfRFJJTktTIiwiZ3FsIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiZmlsdGVyZWREaXNoZXMiLCJkaXNoZXMiLCJmaWx0ZXIiLCJkaXNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJwcm9wcyIsInNlYXJjaCIsInJlc3RhdXJhbnQiLCJkcmlua3MiLCJtYXAiLCJyZXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwibWFyZ2luQm90dG9tIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQSxvQkFDTkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FESjtBQUFBLE1BQ2xCQyxPQURrQixlQUNsQkEsT0FEa0I7O0FBRzFCLE1BQU1DLHFCQUFxQixHQUFHQywwREFBSCxtQkFBM0I7O0FBSDBCLGtCQXFCT0MsK0RBQVEsQ0FBQ0YscUJBQUQsRUFBd0I7QUFDL0RHLGFBQVMsRUFBRTtBQUFFQyxRQUFFLEVBQUVSO0FBQU47QUFEb0QsR0FBeEIsQ0FyQmY7QUFBQSxNQXFCbEJTLE9BckJrQixhQXFCbEJBLE9BckJrQjtBQUFBLE1BcUJUQyxLQXJCUyxhQXFCVEEsS0FyQlM7QUFBQSxNQXFCRkMsSUFyQkUsYUFxQkZBLElBckJFOztBQXlCMUIsTUFBSUYsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVdBLEtBQUssQ0FBQ0UsT0FBakIsQ0FBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUDtBQUNiLE1BQU1FLGNBQWMsR0FBR0YsSUFBSSxDQUFDRyxNQUFMLENBQVlDLE1BQVosQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLFdBQ3RDQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsV0FBVixHQUF3QkMsUUFBeEIsQ0FBaUNDLEtBQUssQ0FBQ0MsTUFBdkMsQ0FEc0M7QUFBQSxHQUFuQixDQUF2QjtBQUdFLE1BQUlDLFVBQVUsR0FBR1gsSUFBSSxDQUFDVyxVQUF0Qjs7QUFDQSxNQUFJdEIsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDZCxXQUNFLG1FQUNDc0IsVUFBVSxDQUFDQyxNQUFYLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxHQUFEO0FBQUEsYUFDakIsTUFBQyw4Q0FBRDtBQUFLLFVBQUUsRUFBQyxHQUFSO0FBQVksVUFBRSxFQUFDLEdBQWY7QUFBbUIsYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUExQjtBQUEwQyxXQUFHLEVBQUVELEdBQUcsQ0FBQ2pCLEVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLCtDQUFEO0FBQU0sYUFBSyxFQUFFO0FBQUVtQixnQkFBTSxFQUFFLFdBQVY7QUFBdUJDLGVBQUssRUFBQyxNQUE3QjtBQUFxQ0Msb0JBQVUsRUFBRSxZQUFqRDtBQUErREMsc0JBQVksRUFBRTtBQUE3RSxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsV0FBRyxFQUFFLElBRFA7QUFFRSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRSxHQUFWO0FBQWVMLGlCQUFPLEVBQUU7QUFBeEIsU0FGVDtBQUdFLFdBQUcsaUNBQTBCRCxHQUFHLENBQUNPLEtBQUosQ0FBVUMsR0FBcEMsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFNRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWVIsR0FBRyxDQUFDUixJQUFoQixDQURGLEVBRUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVdRLEdBQUcsQ0FBQ1MsV0FBZixDQUZGLEVBR0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVdULEdBQUcsQ0FBQ1UsS0FBZixDQUhGLENBTkYsRUFXRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxpREFBRDtBQUNFLGVBQU8sTUFEVDtBQUVFLGFBQUssRUFBQyxTQUZSO0FBR0UsZUFBTyxFQUFFO0FBQUEsaUJBQU1oQyxPQUFPLENBQUNzQixHQUFELENBQWI7QUFBQSxTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsQ0FYRixDQURGLENBRGlCO0FBQUEsS0FBdEIsQ0FERCxDQURGO0FBaUNELEdBbENELE1Ba0NPO0FBQ0wsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0Q7QUFDRjs7R0FyRVExQixNO1VBcUIwQk8sdUQ7OztLQXJCMUJQLE07QUFzRU1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5NjYwYWExOWZlNzlhYWY1NGEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRJbWcsIENhcmRUZXh0LCBDYXJkVGl0bGUsIENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gRHJpbmtzKHsgcmVzdElkIH0pIHtcclxuICBjb25zdCB7IGFkZEl0ZW0gfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UX0RSSU5LUyA9IGdxbGBcclxuICAgIHF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICAgIHJlc3RhdXJhbnQoaWQ6ICRpZCkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGRyaW5rcyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UX0RSSU5LUywge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkOiByZXN0SWQgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nIGRyaW5rLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5ObyBkcmlua3MgZm91bmQ8L3A+O1xyXG5jb25zdCBmaWx0ZXJlZERpc2hlcyA9IGRhdGEuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cclxuICAgIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaClcclxuICApO1xyXG4gIGxldCByZXN0YXVyYW50ID0gZGF0YS5yZXN0YXVyYW50O1xyXG4gIGlmIChyZXN0SWQgPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICB7cmVzdGF1cmFudC5kcmlua3MubWFwKChyZXMpID0+IChcclxuICAgICAgICAgICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBzdHlsZT17eyBwYWRkaW5nOiAxIH19IGtleT17cmVzLmlkfT5cclxuICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAxMHB4XCIsIGNvbG9yOidibHVlJywgYmFja2dyb3VuZDogXCJsaWdodGdyZWVuXCIsIG1hcmdpbkJvdHRvbTogXCIycmVtXCIgIH19PlxyXG4gICAgICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICAgICAgdG9wPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDE5MCwgcGFkZGluZzogNSx9fVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke3Jlcy5pbWFnZS51cmx9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlcy5uYW1lfTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlcy5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlcy5wcmljZX08L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHJlcyl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICArIEFkZCBUbyBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkpXHJcbiAgICAgIFxyXG4gIH1cclxuICAgICAgXHJcbiAgICAgIDwvPlxyXG4gICAgICAgICAgXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPGgxPiBObyBEcmlua3M8L2gxPjtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRHJpbmtzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9