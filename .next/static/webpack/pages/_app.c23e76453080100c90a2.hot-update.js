webpackHotUpdate_N_E("pages/_app",{

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

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n      restaurants {\n        id\n        name\n        description\n        image {\n          url\n        }\n        dishes {\n          id\n          name\n          description\n          price\n        }\n        drinks {\n          id\n          price\n          name\n          description\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function RestaurantList(props) {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      cart = _useContext.cart;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(cart),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      selectedDishes = _useState2[0],
      setSelectedDishes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      selectedDrinks = _useState3[0],
      setSelectedDrinks = _useState3[1];

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedRestaurant = _useState4[0],
      setSelectedRestaurant = _useState4[1];

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 23
    }
  }, "Loading...");

  if (error) {
    console.log(error);
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 42
      }
    }, "ERROR");
  }

  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "Not found");
  console.log("Query Data: ".concat(data.restaurants));

  var handleRestaurantClick = function handleRestaurantClick(restaurant) {
    if (selectedRestaurant && selectedRestaurant.id === restaurant.id) {
      setSelectedRestaurant(null);
    } else {
      setSelectedRestaurant(restaurant);
      setSelectedDishes([]);
      setSelectedDrinks([]);
    }
  };

  var renderDishes = function renderDishes() {
    if (!selectedRestaurant) return null;
    var filteredDishes = selectedRestaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search);
    });
    if (props.search && !filteredDishes.length) return null;
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: selectedDishes.length ? selectedDishes : filteredDishes,
      restId: selectedRestaurant.id,
      setSelectedDishes: setSelectedDishes,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 12
      }
    });
  };

  var renderDrinks = function renderDrinks() {
    if (!selectedRestaurant) return null;
    var filteredDrinks = selectedRestaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search);
    });
    if (props.search && !filteredDrinks.length) return null;
    return __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: selectedDrinks.length ? selectedDrinks : filteredDrinks,
      restId: selectedRestaurant.id,
      setSelectedDrinks: setSelectedDrinks,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 12
      }
    });
  };

  var restList = data.restaurants.filter(function (restaurant) {
    var matchedRestaurant = restaurant.name.toLowerCase().includes(props.search);
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search);
    }).length > 0;
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search);
    }).length > 0;

    if (props.search) {
      return matchedRestaurant || matchedDishes || matchedDrinks;
    }

    return true;
  }).map(function (restaurant) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: "6",
      sm: "4",
      key: restaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
      top: true,
      style: {
        height: 200
      },
      src: "http://localhost:1337" + restaurant.image.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }, restaurant.description)), __jsx("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      color: selectedRestaurant && selectedRestaurant.id === restaurant.id ? "secondary" : "info",
      onClick: function onClick() {
        return handleRestaurantClick(restaurant);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }
    }, selectedRestaurant && selectedRestaurant.id === restaurant.id ? "Close" : "View Menu"))));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, renderDishes()), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, renderDrinks()));
}

_s(RestaurantList, "NarSX5oalvY7xAGXebVyzo0C9u0=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwic2VsZWN0ZWREaXNoZXMiLCJzZXRTZWxlY3RlZERpc2hlcyIsInNlbGVjdGVkRHJpbmtzIiwic2V0U2VsZWN0ZWREcmlua3MiLCJHRVRfUkVTVEFVUkFOVFMiLCJncWwiLCJ1c2VRdWVyeSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJzZWxlY3RlZFJlc3RhdXJhbnQiLCJzZXRTZWxlY3RlZFJlc3RhdXJhbnQiLCJjb25zb2xlIiwibG9nIiwicmVzdGF1cmFudHMiLCJoYW5kbGVSZXN0YXVyYW50Q2xpY2siLCJyZXN0YXVyYW50IiwiaWQiLCJyZW5kZXJEaXNoZXMiLCJmaWx0ZXJlZERpc2hlcyIsImRpc2hlcyIsImZpbHRlciIsImRpc2giLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsImxlbmd0aCIsInJlbmRlckRyaW5rcyIsImZpbHRlcmVkRHJpbmtzIiwiZHJpbmtzIiwiZHJpbmsiLCJyZXN0TGlzdCIsIm1hdGNoZWRSZXN0YXVyYW50IiwibWF0Y2hlZERpc2hlcyIsIm1hdGNoZWREcmlua3MiLCJtYXAiLCJtYXJnaW4iLCJoZWlnaHQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFDWkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FERTtBQUFBLE1BQ3JCQyxJQURxQixlQUNyQkEsSUFEcUI7O0FBQUEsa0JBRUhDLHNE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LE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlHTixrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUNPLEVBQW5CLEtBQTBCRCxVQUFVLENBQUNDLEVBQTNELEdBQWdFLE9BQWhFLEdBQTBFLFdBSjdFLENBREYsQ0FWRixDQURGLENBREs7QUFBQSxHQVRVLENBQWpCO0FBa0NBLFNBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYWUsUUFBYixDQURGLEVBRUUsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYWQsWUFBWSxFQUF6QixDQUZGLEVBR0UsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYVUsWUFBWSxFQUF6QixDQUhGLENBREY7QUFPRDs7R0E5R1FwQyxjO1VBK0IwQmMsdUQ7OztLQS9CMUJkLGM7QUFnSE1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzIzZTc2NDUzMDgwMTAwYzkwYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgW3NlbGVjdGVkRGlzaGVzLCBzZXRTZWxlY3RlZERpc2hlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZERyaW5rcywgc2V0U2VsZWN0ZWREcmlua3NdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgZGlzaGVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICAgICAgZHJpbmtzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUyk7XG4gIGNvbnN0IFtzZWxlY3RlZFJlc3RhdXJhbnQsIHNldFNlbGVjdGVkUmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHtjb25zb2xlLmxvZyhlcnJvcik7IHJldHVybiA8cD5FUlJPUjwvcD47fVxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApO1xuXG4gIGNvbnN0IGhhbmRsZVJlc3RhdXJhbnRDbGljayA9IChyZXN0YXVyYW50KSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQpIHtcbiAgICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KHJlc3RhdXJhbnQpO1xuICAgICAgc2V0U2VsZWN0ZWREaXNoZXMoW10pO1xuICAgICAgc2V0U2VsZWN0ZWREcmlua3MoW10pO1xuICAgIH1cbiAgfTtcbiAgXG4gIFxuICBjb25zdCByZW5kZXJEaXNoZXMgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGZpbHRlcmVkRGlzaGVzID0gc2VsZWN0ZWRSZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+XG4gICAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpXG4gICAgKTtcbiAgICBpZiAocHJvcHMuc2VhcmNoICYmICFmaWx0ZXJlZERpc2hlcy5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgIHJldHVybiA8RGlzaGVzIGRpc2hlcz17c2VsZWN0ZWREaXNoZXMubGVuZ3RoID8gc2VsZWN0ZWREaXNoZXMgOiBmaWx0ZXJlZERpc2hlc30gcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IHNldFNlbGVjdGVkRGlzaGVzPXtzZXRTZWxlY3RlZERpc2hlc30gLz47XG4gIH07XG4gICAgXG4gIGNvbnN0IHJlbmRlckRyaW5rcyA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUmVzdGF1cmFudCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZmlsdGVyZWREcmlua3MgPSBzZWxlY3RlZFJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICAgICk7XG4gICAgaWYgKHByb3BzLnNlYXJjaCAmJiAhZmlsdGVyZWREcmlua3MubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gPERyaW5rcyBkcmlua3M9e3NlbGVjdGVkRHJpbmtzLmxlbmd0aCA/IHNlbGVjdGVkRHJpbmtzIDogZmlsdGVyZWREcmlua3N9IHJlc3RJZD17c2VsZWN0ZWRSZXN0YXVyYW50LmlkfSBzZXRTZWxlY3RlZERyaW5rcz17c2V0U2VsZWN0ZWREcmlua3N9IC8+O1xuICB9O1xuICBcbiAgXG4gIGNvbnN0IHJlc3RMaXN0ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlc3RhdXJhbnQpID0+IHtcbiAgICBjb25zdCBtYXRjaGVkUmVzdGF1cmFudCA9IHJlc3RhdXJhbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaCk7XG4gICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT4gZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKSkubGVuZ3RoID4gMDtcbiAgICBjb25zdCBtYXRjaGVkRHJpbmtzID0gcmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT4gZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaCkpLmxlbmd0aCA+IDA7XG4gICAgXG4gICAgaWYgKHByb3BzLnNlYXJjaCkge1xuICAgICAgcmV0dXJuIG1hdGNoZWRSZXN0YXVyYW50IHx8IG1hdGNoZWREaXNoZXMgfHwgbWF0Y2hlZERyaW5rcztcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pLm1hcCgocmVzdGF1cmFudCkgPT4gKFxuICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXN0YXVyYW50LmlkfT5cbiAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAuNXJlbSAyMHB4IDAuNXJlbVwiIH19PlxuICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDIwMCB9fVxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzN2AgKyByZXN0YXVyYW50LmltYWdlLnVybH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlc3RhdXJhbnQubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICA8Q2FyZFRleHQ+e3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbG9yPXtzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkID8gXCJzZWNvbmRhcnlcIiA6IFwiaW5mb1wifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVzdGF1cmFudENsaWNrKHJlc3RhdXJhbnQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkID8gXCJDbG9zZVwiIDogXCJWaWV3IE1lbnVcIn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db2w+XG4gICkpO1xuICBcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Um93IHhzPVwiM1wiPntyZXN0TGlzdH08L1Jvdz5cbiAgICAgIDxSb3cgeHM9XCIzXCI+e3JlbmRlckRpc2hlcygpfTwvUm93PlxuICAgICAgPFJvdyB4cz1cIjNcIj57cmVuZGVyRHJpbmtzKCl9PC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==