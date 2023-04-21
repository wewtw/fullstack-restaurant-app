webpackHotUpdate_N_E("pages/index",{

/***/ "./components/restaurantList.js":
/*!**************************************!*\
  !*** ./components/restaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _dishes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dishes */ "./components/dishes.js");
/* harmony import */ var _drinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drinks */ "./components/drinks.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\components\\restaurantList.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query GetDrinks($id: ID!) {\n      restaurant(id: $id) {\n        drinks {\n          id\n          name\n          price\n          description\n        }\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query GetDishes($id: ID!) {\n      restaurant(id: $id) {\n        dishes {\n          id\n          name\n          price\n          description\n          image {\n            url\n          }\n        }\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n      restaurants {\n        id\n        name\n        description\n        image {\n          url\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function RestaurantList(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      restaurantID = _useState[0],
      setRestaurantID = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      cart = _useContext.cart;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(cart),
      state = _useState2[0],
      setState = _useState2[1];

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "ERROR");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Not found");
  var searchQuery = data.restaurants.filter(function (res) {
    return res.name.toLowerCase().includes(props.search);
  });
  var restId = searchQuery.length > 0 && searchQuery[0].id > 0 ? searchQuery[0].id : null;
  var GET_DISHES = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject2());

  var _useQuery2 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_DISHES, {
    variables: {
      id: restaurantID
    }
  }),
      loadingDishes = _useQuery2.loading,
      errorDishes = _useQuery2.error,
      dataDishes = _useQuery2.data;

  var GET_DRINKS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject3());

  var _useQuery3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_DRINKS, {
    variables: {
      id: restaurantID
    }
  }),
      loadingDrinks = _useQuery3.loading,
      errorDrinks = _useQuery3.error,
      dataDrinks = _useQuery3.data; // Define renderer for Dishes


  var renderDishes = function renderDishes() {
    if (loadingDishes) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 31
      }
    }, "Loading...");
    if (errorDishes) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 29
      }
    }, "Error");
    if (!dataDishes) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      }
    }, "Not found");
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: dataDishes.restaurant.dishes,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    });
  }; // Define renderer for Drinks


  var renderDrinks = function renderDrinks() {
    if (loadingDrinks) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 31
      }
    }, "Loading...");
    if (errorDrinks) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }
    }, "Error");
    if (!dataDrinks) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 29
      }
    }, "Not found");
    return __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: dataDrinks.restaurant.drinks,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    });
  };

  if (searchQuery.length > 0) {
    var restList = searchQuery.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "6",
        sm: "4",
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: {
          height: 200
        },
        src: "http://localhost:1337" + res.image.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "info",
        onClick: function onClick() {
          return setRestaurantID(res.id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, res.name))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    }, renderDishes(restaurantID)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }
    }, renderDrinks(restaurantID)));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 12
      }
    }, " No Restaurants Found");
  }
}

_s(RestaurantList, "iVOAs+t0Lb7bZDQaNdf5b9R6m1g=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = RestaurantList;
/* harmony default export */ __webpack_exports__["default"] = (RestaurantList);

var _c;

$RefreshReg$(_c, "RestaurantList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VhcmNoUXVlcnkiLCJyZXN0YXVyYW50cyIsImZpbHRlciIsInJlcyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoIiwicmVzdElkIiwibGVuZ3RoIiwiaWQiLCJHRVRfRElTSEVTIiwidmFyaWFibGVzIiwibG9hZGluZ0Rpc2hlcyIsImVycm9yRGlzaGVzIiwiZGF0YURpc2hlcyIsIkdFVF9EUklOS1MiLCJsb2FkaW5nRHJpbmtzIiwiZXJyb3JEcmlua3MiLCJkYXRhRHJpbmtzIiwicmVuZGVyRGlzaGVzIiwicmVzdGF1cmFudCIsImRpc2hlcyIsInJlbmRlckRyaW5rcyIsImRyaW5rcyIsInJlc3RMaXN0IiwibWFwIiwibWFyZ2luIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVlBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsQ0FBRCxDQURwQjtBQUFBLE1BQ3JCQyxZQURxQjtBQUFBLE1BQ1BDLGVBRE87O0FBQUEsb0JBRVhDLHdEQUFVLENBQUNDLGdEQUFELENBRkM7QUFBQSxNQUVwQkMsSUFGb0IsZUFFcEJBLElBRm9C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O0FBQUE7QUFBQSxTQUVBLE1BQUMsaURBQUQ7QUFBUSxhQUFLLEVBQUMsTUFBZDtBQUFxQixlQUFPLEVBQUU7QUFBQSxpQkFBSzNDLGVBQWUsQ0FBQ2UsR0FBRyxDQUFDTyxFQUFMLENBQXBCO0FBQUEsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE2RFAsR0FBRyxDQUFDQyxJQUFqRSxDQUZBLENBWEYsQ0FERixDQUQrQjtBQUFBLEtBQWhCLENBQWpCO0FBc0JBLFdBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR3FCLFFBREgsQ0FERixFQUlFLE1BQUMsOENBQUQ7QUFBSyxRQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dMLFlBQVksQ0FBQ2pDLFlBQUQsQ0FEZixDQUpGLEVBT0UsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR29DLFlBQVksQ0FBQ3BDLFlBQUQsQ0FEZixDQVBGLENBREY7QUFhRCxHQXBDRCxNQW9DTztBQUNMLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBUDtBQUNEO0FBQ0Y7O0dBcEhRSCxjO1VBZ0IwQlksdUQsRUEwQndDQSx1RCxFQWdCQUEsdUQ7OztLQTFEbEVaLGM7QUFxSE1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI4YWFhZDEzYWFlNGUwNjc2MmMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIlxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJpbmtzIGZyb20gXCIuL2RyaW5rc1wiO1xuXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2xcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpe1xuICBjb25zdCBbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGNhcnQpXG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SPC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBsZXQgc2VhcmNoUXVlcnkgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzKSA9PntcbiAgICByZXR1cm4gcmVzLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpXG4gIH0pXG5cbiAgbGV0IHJlc3RJZCA9IHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDAgJiYgc2VhcmNoUXVlcnlbMF0uaWQgPiAwID8gc2VhcmNoUXVlcnlbMF0uaWQgOiBudWxsO1xuXG4gIGNvbnN0IEdFVF9ESVNIRVMgPSBncWxgXG4gICAgcXVlcnkgR2V0RGlzaGVzKCRpZDogSUQhKSB7XG4gICAgICByZXN0YXVyYW50KGlkOiAkaWQpIHtcbiAgICAgICAgZGlzaGVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmc6IGxvYWRpbmdEaXNoZXMsIGVycm9yOiBlcnJvckRpc2hlcywgZGF0YTogZGF0YURpc2hlcyB9ID0gdXNlUXVlcnkoR0VUX0RJU0hFUywge1xuICAgIHZhcmlhYmxlczogeyBpZDogcmVzdGF1cmFudElEIH1cbiAgfSk7XG5cbiAgY29uc3QgR0VUX0RSSU5LUyA9IGdxbGBcbiAgICBxdWVyeSBHZXREcmlua3MoJGlkOiBJRCEpIHtcbiAgICAgIHJlc3RhdXJhbnQoaWQ6ICRpZCkge1xuICAgICAgICBkcmlua3Mge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgeyBsb2FkaW5nOiBsb2FkaW5nRHJpbmtzLCBlcnJvcjogZXJyb3JEcmlua3MsIGRhdGE6IGRhdGFEcmlua3MgfSA9IHVzZVF1ZXJ5KEdFVF9EUklOS1MsIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IHJlc3RhdXJhbnRJRCB9XG4gIH0pO1xuXG4gIC8vIERlZmluZSByZW5kZXJlciBmb3IgRGlzaGVzXG4gIGNvbnN0IHJlbmRlckRpc2hlcyA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZ0Rpc2hlcykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgIGlmIChlcnJvckRpc2hlcykgcmV0dXJuIDxwPkVycm9yPC9wPjtcbiAgICBpZiAoIWRhdGFEaXNoZXMpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuICAgIHJldHVybiAoPERpc2hlcyBkaXNoZXM9e2RhdGFEaXNoZXMucmVzdGF1cmFudC5kaXNoZXN9PjwvRGlzaGVzPilcbiAgfTtcbiAgXG4gIC8vIERlZmluZSByZW5kZXJlciBmb3IgRHJpbmtzXG4gIGNvbnN0IHJlbmRlckRyaW5rcyA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZ0RyaW5rcykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgIGlmIChlcnJvckRyaW5rcykgcmV0dXJuIDxwPkVycm9yPC9wPjtcbiAgICBpZiAoIWRhdGFEcmlua3MpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuICAgIHJldHVybiAoPERyaW5rcyBkcmlua3M9e2RhdGFEcmlua3MucmVzdGF1cmFudC5kcmlua3N9PjwvRHJpbmtzPilcbiAgfTtcbiAgaWYoc2VhcmNoUXVlcnkubGVuZ3RoID4gMCl7XG4gICAgY29uc3QgcmVzdExpc3QgPSBzZWFyY2hRdWVyeS5tYXAoKHJlcykgPT4gKFxuICAgICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlcy5pZH0+XG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAuNXJlbSAyMHB4IDAuNXJlbVwiIH19PlxuICAgICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDIwMCB9fVxuICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjEzMzdgKyByZXMuaW1hZ2UudXJsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlcy5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCk9PiBzZXRSZXN0YXVyYW50SUQocmVzLmlkKX0+e3Jlcy5uYW1lfTwvQnV0dG9uPlxuICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9Db2w+XG4gICAgKSlcbiAgXG4gICAgcmV0dXJuKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdyB4cz0nMyc+XG4gICAgICAgICAge3Jlc3RMaXN0fVxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdyB4cz0nMyc+XG4gICAgICAgICAge3JlbmRlckRpc2hlcyhyZXN0YXVyYW50SUQpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdyB4cz0nMyc+XG4gICAgICAgICAge3JlbmRlckRyaW5rcyhyZXN0YXVyYW50SUQpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGgxPiBObyBSZXN0YXVyYW50cyBGb3VuZDwvaDE+XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==