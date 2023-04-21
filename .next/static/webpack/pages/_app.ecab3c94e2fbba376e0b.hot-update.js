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
  var restList = searchQuery.map(function (restaurant) {
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
        lineNumber: 95,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      onClick: function onClick() {
        return handleRestaurantClick(restaurant);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
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
        lineNumber: 97,
        columnNumber: 11
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, restaurant.description))), selectedRestaurant && selectedRestaurant.id === restaurant.id && __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    }, __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }, "Dishes:"), __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: matchedDishes,
      restaurant: restaurant,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, "Drinks:"), __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: matchedDrinks,
      restaurant: restaurant,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    })));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwicHJpY2VSYW5nZSIsImZpbHRlciIsInNldEZpbHRlciIsIkdFVF9SRVNUQVVSQU5UUyIsImdxbCIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInNlbGVjdGVkUmVzdGF1cmFudCIsInNldFNlbGVjdGVkUmVzdGF1cmFudCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVSZXN0YXVyYW50Q2xpY2siLCJyZXN0YXVyYW50IiwiaWQiLCJzZWFyY2hRdWVyeSIsInJlc3RhdXJhbnRzIiwibWF0Y2hlZERpc2hlcyIsImRpc2hlcyIsImRpc2giLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsIm1hdGNoZWREcmlua3MiLCJkcmlua3MiLCJkcmluayIsImxlbmd0aCIsInByaWNlIiwicmVzdExpc3QiLCJtYXAiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMIiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1pDLHdEQUFVLENBQUNDLGdEQUFELENBREU7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCOztBQUFBLGtCQUVIQyxzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV0QkUsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUFBLG1CQUdERixzREFBUSxDQUFDO0FBQUVHLGNBQVUs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QUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFLE1BQUMsK0NBQUQ7QUFBUSxZQUFNLEVBQUVHLGFBQWhCO0FBQStCLGdCQUFVLEVBQUVKLFVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJRSxNQUFDLCtDQUFEO0FBQVEsWUFBTSxFQUFFVyxhQUFoQjtBQUErQixnQkFBVSxFQUFFWCxVQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsQ0FkSixDQURGO0FBd0JELEdBaENnQixDQUFqQjtBQWtDSSxTQUNBLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNZ0IsUUFBTixDQURBLENBREE7QUFLQzs7R0FySEV0QyxjO1VBNEIwQmEsdUQ7OztLQTVCMUJiLGM7QUF1SFlBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWNhYjNjOTRlMmZiYmEzNzZlMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHsgcHJpY2VSYW5nZTogXCJhbGxcIiB9KTsgLy8gY3JlYXRlIHN0YXRlIGZvciBmaWx0ZXIgdmFsdWVzXG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGRpc2hlcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBwcmljZVxuICAgICAgICB9XG4gICAgICAgIGRyaW5rcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpO1xuICBjb25zdCBbc2VsZWN0ZWRSZXN0YXVyYW50LCBzZXRTZWxlY3RlZFJlc3RhdXJhbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSB7Y29uc29sZS5sb2coZXJyb3IpOyByZXR1cm4gPHA+RVJST1I8L3A+O31cbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBjb25zdCBoYW5kbGVSZXN0YXVyYW50Q2xpY2sgPSAocmVzdGF1cmFudCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkKSB7XG4gICAgICBzZXRTZWxlY3RlZFJlc3RhdXJhbnQobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChyZXN0YXVyYW50KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gYWRkIGZpbHRlciBmdW5jdGlvbiB0byBzZWFyY2hRdWVyeVxuICBjb25zdCBzZWFyY2hRdWVyeSA9IGRhdGEucmVzdGF1cmFudHMuZmlsdGVyKChyZXN0YXVyYW50KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cbiAgICAgIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICByZXR1cm4gbWF0Y2hlZERpc2hlcy5sZW5ndGggPiAwIHx8IG1hdGNoZWREcmlua3MubGVuZ3RoID4gMDtcbiAgfSkuZmlsdGVyKChyZXN0YXVyYW50KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT4ge1xuICAgICAgaWYgKGZpbHRlci5wcmljZVJhbmdlID09PSBcImFsbFwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIucHJpY2VSYW5nZSA9PT0gXCJ1bmRlcjEwXCIpIHtcbiAgICAgICAgcmV0dXJuIGRpc2gucHJpY2UgPCAxMDtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnByaWNlUmFuZ2UgPT09IFwiMTB0bzIwXCIpIHtcbiAgICAgICAgcmV0dXJuIGRpc2gucHJpY2UgPj0gMTAgJiYgZGlzaC5wcmljZSA8PSAyMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkaXNoLnByaWNlID4gMjA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+IHtcbiAgICAgIGlmIChmaWx0ZXIucHJpY2VSYW5nZSA9PT0gXCJhbGxcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnByaWNlUmFuZ2UgPT09IFwidW5kZXIxMFwiKSB7XG4gICAgICAgIHJldHVybiBkcmluay5wcmljZSA8IDEwO1xuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIucHJpY2VSYW5nZSA9PT0gXCIxMHRvMjBcIikge1xuICAgICAgICByZXR1cm4gZHJpbmsucHJpY2UgPj0gMTAgJiYgZHJpbmsucHJpY2UgPD0gMjA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZHJpbmsucHJpY2UgPiAyMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hlZERpc2hlcy5sZW5ndGggPiAwIHx8IG1hdGNoZWREcmlua3MubGVuZ3RoID4gMDtcbiAgfSk7XG5cbiAgY29uc3QgcmVzdExpc3QgPSBzZWFyY2hRdWVyeS5tYXAoKHJlc3RhdXJhbnQpID0+IHtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBjb25zdCBtYXRjaGVkRHJpbmtzID0gcmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT5cbiAgICAgIGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2wga2V5PXtyZXN0YXVyYW50LmlkfSB4cz1cIjZcIiBzbT1cIjRcIiBtZD1cIjNcIiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxDYXJkIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlc3RhdXJhbnRDbGljayhyZXN0YXVyYW50KX0+XG4gICAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICAgIHRvcFxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMfSR7cmVzdGF1cmFudC5pbWFnZS51cmx9YH1cbiAgICAgICAgICAgIGFsdD17cmVzdGF1cmFudC5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgPENhcmRUaXRsZT57cmVzdGF1cmFudC5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgPENhcmRUZXh0PntyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICB7c2VsZWN0ZWRSZXN0YXVyYW50ICYmIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5EaXNoZXM6PC9oND5cbiAgICAgICAgICAgIDxEaXNoZXMgZGlzaGVzPXttYXRjaGVkRGlzaGVzfSByZXN0YXVyYW50PXtyZXN0YXVyYW50fSAvPlxuICAgICAgICAgICAgPGg0PkRyaW5rczo8L2g0PlxuICAgICAgICAgICAgPERyaW5rcyBkcmlua3M9e21hdGNoZWREcmlua3N9IHJlc3RhdXJhbnQ9e3Jlc3RhdXJhbnR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbD5cbiAgICApO1xuICB9KTtcbiAgICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICA8Um93PntyZXN0TGlzdH08L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9