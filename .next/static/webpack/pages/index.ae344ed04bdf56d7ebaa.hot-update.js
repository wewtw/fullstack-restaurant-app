webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwicHJpY2VSYW5nZSIsImZpbHRlciIsInNldEZpbHRlciIsIkdFVF9SRVNUQVVSQU5UUyIsImdxbCIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInNlbGVjdGVkUmVzdGF1cmFudCIsInNldFNlbGVjdGVkUmVzdGF1cmFudCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVSZXN0YXVyYW50Q2xpY2siLCJyZXN0YXVyYW50IiwiaWQiLCJzZWFyY2hRdWVyeSIsInJlc3RhdXJhbnRzIiwibWF0Y2hlZERpc2hlcyIsImRpc2hlcyIsImRpc2giLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsIm1hdGNoZWREcmlua3MiLCJkcmlua3MiLCJkcmluayIsImxlbmd0aCIsInByaWNlIiwicmVzdExpc3QiLCJtYXAiLCJpbmRleCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFDS0VORF9VUkwiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFDWkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FERTtBQUFBLE1BQ3JCQyxJQURxQixlQUNyQkEsSUFEcUI7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUNELElBQUQsQ0FGTDtBQUFBLE1BRXRCRSxLQUZzQjtBQUFBLE1BRWZDLFFBRmU7O0FBQUEsbUJBR0RGLHNEQUFRLENBQUM7QUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUUsTUFBQywrQ0FBRDtBQUFRLFlBQU0sRUFBRUcsYUFBaEI7QUFBK0IsZ0JBQVUsRUFBRUosVUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixFQUlFLE1BQUMsK0NBQUQ7QUFBUSxZQUFNLEVBQUVXLGFBQWhCO0FBQStCLGdCQUFVLEVBQUVYLFVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixDQWRKLENBREY7QUF3QkQsR0EvQmdCLENBQWpCO0FBaUNJLFNBQ0EsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1nQixRQUFOLENBREEsQ0FEQTtBQUtDOztHQXBIRXRDLGM7VUE0QjBCYSx1RDs7O0tBNUIxQmIsYztBQXNIWUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWUzNDRlZDA0YmRmNTZkN2ViYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHsgcHJpY2VSYW5nZTogXCJhbGxcIiB9KTsgLy8gY3JlYXRlIHN0YXRlIGZvciBmaWx0ZXIgdmFsdWVzXG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGRpc2hlcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBwcmljZVxuICAgICAgICB9XG4gICAgICAgIGRyaW5rcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpO1xuICBjb25zdCBbc2VsZWN0ZWRSZXN0YXVyYW50LCBzZXRTZWxlY3RlZFJlc3RhdXJhbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSB7Y29uc29sZS5sb2coZXJyb3IpOyByZXR1cm4gPHA+RVJST1I8L3A+O31cbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBjb25zdCBoYW5kbGVSZXN0YXVyYW50Q2xpY2sgPSAocmVzdGF1cmFudCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkKSB7XG4gICAgICBzZXRTZWxlY3RlZFJlc3RhdXJhbnQobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChyZXN0YXVyYW50KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gYWRkIGZpbHRlciBmdW5jdGlvbiB0byBzZWFyY2hRdWVyeVxuICBjb25zdCBzZWFyY2hRdWVyeSA9IGRhdGEucmVzdGF1cmFudHMuZmlsdGVyKChyZXN0YXVyYW50KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cbiAgICAgIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICByZXR1cm4gbWF0Y2hlZERpc2hlcy5sZW5ndGggPiAwIHx8IG1hdGNoZWREcmlua3MubGVuZ3RoID4gMDtcbiAgfSkuZmlsdGVyKChyZXN0YXVyYW50KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT4ge1xuICAgICAgaWYgKGZpbHRlci5wcmljZVJhbmdlID09PSBcImFsbFwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIucHJpY2VSYW5nZSA9PT0gXCJ1bmRlcjEwXCIpIHtcbiAgICAgICAgcmV0dXJuIGRpc2gucHJpY2UgPCAxMDtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnByaWNlUmFuZ2UgPT09IFwiMTB0bzIwXCIpIHtcbiAgICAgICAgcmV0dXJuIGRpc2gucHJpY2UgPj0gMTAgJiYgZGlzaC5wcmljZSA8PSAyMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkaXNoLnByaWNlID4gMjA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+IHtcbiAgICAgIGlmIChmaWx0ZXIucHJpY2VSYW5nZSA9PT0gXCJhbGxcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnByaWNlUmFuZ2UgPT09IFwidW5kZXIxMFwiKSB7XG4gICAgICAgIHJldHVybiBkcmluay5wcmljZSA8IDEwO1xuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIucHJpY2VSYW5nZSA9PT0gXCIxMHRvMjBcIikge1xuICAgICAgICByZXR1cm4gZHJpbmsucHJpY2UgPj0gMTAgJiYgZHJpbmsucHJpY2UgPD0gMjA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZHJpbmsucHJpY2UgPiAyMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hlZERpc2hlcy5sZW5ndGggPiAwIHx8IG1hdGNoZWREcmlua3MubGVuZ3RoID4gMDtcbiAgfSk7XG5cbiAgY29uc3QgcmVzdExpc3QgPSBzZWFyY2hRdWVyeS5tYXAoKHJlc3RhdXJhbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cbiAgICAgIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbCBrZXk9e3Jlc3RhdXJhbnQuaWR9IHhzPVwiNlwiIHNtPVwiNFwiIG1kPVwiM1wiIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPENhcmQgb25DbGljaz17KCkgPT4gaGFuZGxlUmVzdGF1cmFudENsaWNrKHJlc3RhdXJhbnQpfT5cbiAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgdG9wXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFDS0VORF9VUkx9JHtyZXN0YXVyYW50LmltYWdlLnVybH1gfVxuICAgICAgICAgICAgYWx0PXtyZXN0YXVyYW50Lm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlPntyZXN0YXVyYW50Lm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIHtzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkRpc2hlczo8L2g0PlxuICAgICAgICAgICAgPERpc2hlcyBkaXNoZXM9e21hdGNoZWREaXNoZXN9IHJlc3RhdXJhbnQ9e3Jlc3RhdXJhbnR9IC8+XG4gICAgICAgICAgICA8aDQ+RHJpbmtzOjwvaDQ+XG4gICAgICAgICAgICA8RHJpbmtzIGRyaW5rcz17bWF0Y2hlZERyaW5rc30gcmVzdGF1cmFudD17cmVzdGF1cmFudH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29sPlxuICAgICk7XG4gIH0pO1xuICAgICAgXG4gICAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+e3Jlc3RMaXN0fTwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICApO1xuICAgICAgfVxuICAgICAgXG4gICAgICBleHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=