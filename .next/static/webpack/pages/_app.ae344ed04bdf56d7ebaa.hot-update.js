webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/restaurantList.js":
/*!**************************************!*\
  !*** ./components/restaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    priceRange: "all"
  }),
      filter = _useState2[0],
      setFilter = _useState2[1]; // create state for filter values


  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedRestaurant = _useState3[0],
      setSelectedRestaurant = _useState3[1];

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 23
    }
  }, "Loading...");

  if (error) {
    console.log(error);
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 42
      }
    }, "ERROR");
  }

  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "Not found");

  var handleRestaurantClick = function handleRestaurantClick(restaurant) {
    if (selectedRestaurant && selectedRestaurant.id === restaurant.id) {
      setSelectedRestaurant(null);
    } else {
      setSelectedRestaurant(restaurant);
    }
  }; // add filter function to searchQuery


  var searchQuery = data.restaurants.filter(function (restaurant) {
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase());
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search.toLowerCase());
    });
    return matchedDishes.length > 0 || matchedDrinks.length > 0;
  }).filter(function (restaurant) {
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      if (filter.priceRange === "all") {
        return true;
      } else if (filter.priceRange === "under10") {
        return dish.price < 10;
      } else if (filter.priceRange === "10to20") {
        return dish.price >= 10 && dish.price <= 20;
      } else {
        return dish.price > 20;
      }
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      if (filter.priceRange === "all") {
        return true;
      } else if (filter.priceRange === "under10") {
        return drink.price < 10;
      } else if (filter.priceRange === "10to20") {
        return drink.price >= 10 && drink.price <= 20;
      } else {
        return drink.price > 20;
      }
    });
    return matchedDishes.length > 0 || matchedDrinks.length > 0;
  });
  var restList = searchQuery.map(function (restaurant, index) {
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase());
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search.toLowerCase());
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      key: restaurant.id,
      xs: "6",
      sm: "4",
      md: "3",
      className: "mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      onClick: function onClick() {
        return handleRestaurantClick(restaurant);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
      top: true,
      width: "100%",
      src: "".concat(process.env.REACT_APP_BACKEND_URL).concat(restaurant.image.url),
      alt: restaurant.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, restaurant.description))), selectedRestaurant && selectedRestaurant.id === restaurant.id && __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }, __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, "Dishes:"), __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: matchedDishes,
      restaurant: restaurant,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, "Drinks:"), __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: matchedDrinks,
      restaurant: restaurant,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    })));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, restList));
}

_s(RestaurantList, "M4JKZkIXfneX5I2dSi4rh7uYFMs=", false, function () {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwicHJpY2VSYW5nZSIsImZpbHRlciIsInNldEZpbHRlciIsIkdFVF9SRVNUQVVSQU5UUyIsImdxbCIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInNlbGVjdGVkUmVzdGF1cmFudCIsInNldFNlbGVjdGVkUmVzdGF1cmFudCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVSZXN0YXVyYW50Q2xpY2siLCJyZXN0YXVyYW50IiwiaWQiLCJzZWFyY2hRdWVyeSIsInJlc3RhdXJhbnRzIiwibWF0Y2hlZERpc2hlcyIsImRpc2hlcyIsImRpc2giLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsIm1hdGNoZWREcmlua3MiLCJkcmlua3MiLCJkcmluayIsImxlbmd0aCIsInByaWNlIiwicmVzdExpc3QiLCJtYXAiLCJpbmRleCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFDS0VORF9VUkwiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFDWkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FERTtBQUFBLE1BQ3JCQyxJQURxQixlQUNyQkEsSUFEcUI7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUNELElBQUQsQ0FGTDtBQUFBLE1BRXRCRSxLQUZzQjtBQUFBLE1BRWZDLFFBRmU7O0FBQUEsbUJBR0RGLHNEQUFRLENBQUM7QUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUUsTUFBQywrQ0FBRDtBQUFRLFlBQU0sRUFBRUcsYUFBaEI7QUFBK0IsZ0JBQVUsRUFBRUosVUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixFQUlFLE1BQUMsK0NBQUQ7QUFBUSxZQUFNLEVBQUVXLGFBQWhCO0FBQStCLGdCQUFVLEVBQUVYLFVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixDQWRKLENBREY7QUF3QkQsR0EvQmdCLENBQWpCO0FBaUNJLFNBQ0EsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1nQixRQUFOLENBREEsQ0FEQTtBQUtDOztHQXBIRXRDLGM7VUE0QjBCYSx1RDs7O0tBNUIxQmIsYztBQXNIWUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hZTM0NGVkMDRiZGY1NmQ3ZWJhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgRGlzaGVzIGZyb20gXCIuL2Rpc2hlc1wiO1xuaW1wb3J0IERyaW5rcyBmcm9tIFwiLi9kcmlua3NcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRJbWcsIENhcmRUZXh0LCBDYXJkVGl0bGUsIENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcblxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpIHtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGNhcnQpO1xuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoeyBwcmljZVJhbmdlOiBcImFsbFwiIH0pOyAvLyBjcmVhdGUgc3RhdGUgZm9yIGZpbHRlciB2YWx1ZXNcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgZGlzaGVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICAgICAgZHJpbmtzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUyk7XG4gIGNvbnN0IFtzZWxlY3RlZFJlc3RhdXJhbnQsIHNldFNlbGVjdGVkUmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHtjb25zb2xlLmxvZyhlcnJvcik7IHJldHVybiA8cD5FUlJPUjwvcD47fVxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuXG4gIGNvbnN0IGhhbmRsZVJlc3RhdXJhbnRDbGljayA9IChyZXN0YXVyYW50KSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQpIHtcbiAgICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KHJlc3RhdXJhbnQpO1xuICAgIH1cbiAgfTtcblxuICAvLyBhZGQgZmlsdGVyIGZ1bmN0aW9uIHRvIHNlYXJjaFF1ZXJ5XG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlc3RhdXJhbnQpID0+IHtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBjb25zdCBtYXRjaGVkRHJpbmtzID0gcmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT5cbiAgICAgIGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIHJldHVybiBtYXRjaGVkRGlzaGVzLmxlbmd0aCA+IDAgfHwgbWF0Y2hlZERyaW5rcy5sZW5ndGggPiAwO1xuICB9KS5maWx0ZXIoKHJlc3RhdXJhbnQpID0+IHtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PiB7XG4gICAgICBpZiAoZmlsdGVyLnByaWNlUmFuZ2UgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZpbHRlci5wcmljZVJhbmdlID09PSBcInVuZGVyMTBcIikge1xuICAgICAgICByZXR1cm4gZGlzaC5wcmljZSA8IDEwO1xuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIucHJpY2VSYW5nZSA9PT0gXCIxMHRvMjBcIikge1xuICAgICAgICByZXR1cm4gZGlzaC5wcmljZSA+PSAxMCAmJiBkaXNoLnByaWNlIDw9IDIwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRpc2gucHJpY2UgPiAyMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBtYXRjaGVkRHJpbmtzID0gcmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT4ge1xuICAgICAgaWYgKGZpbHRlci5wcmljZVJhbmdlID09PSBcImFsbFwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIucHJpY2VSYW5nZSA9PT0gXCJ1bmRlcjEwXCIpIHtcbiAgICAgICAgcmV0dXJuIGRyaW5rLnByaWNlIDwgMTA7XG4gICAgICB9IGVsc2UgaWYgKGZpbHRlci5wcmljZVJhbmdlID09PSBcIjEwdG8yMFwiKSB7XG4gICAgICAgIHJldHVybiBkcmluay5wcmljZSA+PSAxMCAmJiBkcmluay5wcmljZSA8PSAyMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkcmluay5wcmljZSA+IDIwO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGVkRGlzaGVzLmxlbmd0aCA+IDAgfHwgbWF0Y2hlZERyaW5rcy5sZW5ndGggPiAwO1xuICB9KTtcblxuICBjb25zdCByZXN0TGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzdGF1cmFudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBjb25zdCBtYXRjaGVkRHJpbmtzID0gcmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT5cbiAgICAgIGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sIGtleT17cmVzdGF1cmFudC5pZH0geHM9XCI2XCIgc209XCI0XCIgbWQ9XCIzXCIgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8Q2FyZCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXN0YXVyYW50Q2xpY2socmVzdGF1cmFudCl9PlxuICAgICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgICB0b3BcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTH0ke3Jlc3RhdXJhbnQuaW1hZ2UudXJsfWB9XG4gICAgICAgICAgICBhbHQ9e3Jlc3RhdXJhbnQubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlc3RhdXJhbnQubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAge3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+RGlzaGVzOjwvaDQ+XG4gICAgICAgICAgICA8RGlzaGVzIGRpc2hlcz17bWF0Y2hlZERpc2hlc30gcmVzdGF1cmFudD17cmVzdGF1cmFudH0gLz5cbiAgICAgICAgICAgIDxoND5Ecmlua3M6PC9oND5cbiAgICAgICAgICAgIDxEcmlua3MgZHJpbmtzPXttYXRjaGVkRHJpbmtzfSByZXN0YXVyYW50PXtyZXN0YXVyYW50fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Db2w+XG4gICAgKTtcbiAgfSk7XG4gICAgICBcbiAgICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz57cmVzdExpc3R9PC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==