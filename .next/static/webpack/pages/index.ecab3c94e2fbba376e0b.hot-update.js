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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwicHJpY2VSYW5nZSIsImZpbHRlciIsInNldEZpbHRlciIsIkdFVF9SRVNUQVVSQU5UUyIsImdxbCIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInNlbGVjdGVkUmVzdGF1cmFudCIsInNldFNlbGVjdGVkUmVzdGF1cmFudCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVSZXN0YXVyYW50Q2xpY2siLCJyZXN0YXVyYW50IiwiaWQiLCJzZWFyY2hRdWVyeSIsInJlc3RhdXJhbnRzIiwibWF0Y2hlZERpc2hlcyIsImRpc2hlcyIsImRpc2giLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsIm1hdGNoZWREcmlua3MiLCJkcmlua3MiLCJkcmluayIsImxlbmd0aCIsInByaWNlIiwicmVzdExpc3QiLCJtYXAiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0JBQ0tFTkRfVVJMIiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1pDLHdEQUFVLENBQUNDLGdEQUFELENBREU7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCOztBQUFBLGtCQUVIQyxzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV0QkUsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUFBLG1CQUdERixzREFBUSxDQUFDO0FBQUVHLGNBQVUs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QUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFLE1BQUMsK0NBQUQ7QUFBUSxZQUFNLEVBQUVHLGFBQWhCO0FBQStCLGdCQUFVLEVBQUVKLFVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJRSxNQUFDLCtDQUFEO0FBQVEsWUFBTSxFQUFFVyxhQUFoQjtBQUErQixnQkFBVSxFQUFFWCxVQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsQ0FkSixDQURGO0FBd0JELEdBaENnQixDQUFqQjtBQWtDSSxTQUNBLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNZ0IsUUFBTixDQURBLENBREE7QUFLQzs7R0FySEV0QyxjO1VBNEIwQmEsdUQ7OztLQTVCMUJiLGM7QUF1SFlBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjYWIzYzk0ZTJmYmJhMzc2ZTBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCI7XG5pbXBvcnQgRHJpbmtzIGZyb20gXCIuL2RyaW5rc1wiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQm9keSwgQ2FyZEltZywgQ2FyZFRleHQsIENhcmRUaXRsZSwgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5mdW5jdGlvbiBSZXN0YXVyYW50TGlzdChwcm9wcykge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydCk7XG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSh7IHByaWNlUmFuZ2U6IFwiYWxsXCIgfSk7IC8vIGNyZWF0ZSBzdGF0ZSBmb3IgZmlsdGVyIHZhbHVlc1xuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBkaXNoZXMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgfVxuICAgICAgICBkcmlua3Mge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKTtcbiAgY29uc3QgW3NlbGVjdGVkUmVzdGF1cmFudCwgc2V0U2VsZWN0ZWRSZXN0YXVyYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikge2NvbnNvbGUubG9nKGVycm9yKTsgcmV0dXJuIDxwPkVSUk9SPC9wPjt9XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG5cbiAgY29uc3QgaGFuZGxlUmVzdGF1cmFudENsaWNrID0gKHJlc3RhdXJhbnQpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRSZXN0YXVyYW50ICYmIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZCkge1xuICAgICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZFJlc3RhdXJhbnQocmVzdGF1cmFudCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGFkZCBmaWx0ZXIgZnVuY3Rpb24gdG8gc2VhcmNoUXVlcnlcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzdGF1cmFudCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZWREaXNoZXMgPSByZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+XG4gICAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIGNvbnN0IG1hdGNoZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoKGRyaW5rKSA9PlxuICAgICAgZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgcmV0dXJuIG1hdGNoZWREaXNoZXMubGVuZ3RoID4gMCB8fCBtYXRjaGVkRHJpbmtzLmxlbmd0aCA+IDA7XG4gIH0pLmZpbHRlcigocmVzdGF1cmFudCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZWREaXNoZXMgPSByZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+IHtcbiAgICAgIGlmIChmaWx0ZXIucHJpY2VSYW5nZSA9PT0gXCJhbGxcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnByaWNlUmFuZ2UgPT09IFwidW5kZXIxMFwiKSB7XG4gICAgICAgIHJldHVybiBkaXNoLnByaWNlIDwgMTA7XG4gICAgICB9IGVsc2UgaWYgKGZpbHRlci5wcmljZVJhbmdlID09PSBcIjEwdG8yMFwiKSB7XG4gICAgICAgIHJldHVybiBkaXNoLnByaWNlID49IDEwICYmIGRpc2gucHJpY2UgPD0gMjA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGlzaC5wcmljZSA+IDIwO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG1hdGNoZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoKGRyaW5rKSA9PiB7XG4gICAgICBpZiAoZmlsdGVyLnByaWNlUmFuZ2UgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZpbHRlci5wcmljZVJhbmdlID09PSBcInVuZGVyMTBcIikge1xuICAgICAgICByZXR1cm4gZHJpbmsucHJpY2UgPCAxMDtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnByaWNlUmFuZ2UgPT09IFwiMTB0bzIwXCIpIHtcbiAgICAgICAgcmV0dXJuIGRyaW5rLnByaWNlID49IDEwICYmIGRyaW5rLnByaWNlIDw9IDIwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRyaW5rLnByaWNlID4gMjA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoZWREaXNoZXMubGVuZ3RoID4gMCB8fCBtYXRjaGVkRHJpbmtzLmxlbmd0aCA+IDA7XG4gIH0pO1xuXG4gIGNvbnN0IHJlc3RMaXN0ID0gc2VhcmNoUXVlcnkubWFwKChyZXN0YXVyYW50KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cbiAgICAgIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29sIGtleT17cmVzdGF1cmFudC5pZH0geHM9XCI2XCIgc209XCI0XCIgbWQ9XCIzXCIgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8Q2FyZCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXN0YXVyYW50Q2xpY2socmVzdGF1cmFudCl9PlxuICAgICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgICB0b3BcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQUNLRU5EX1VSTH0ke3Jlc3RhdXJhbnQuaW1hZ2UudXJsfWB9XG4gICAgICAgICAgICBhbHQ9e3Jlc3RhdXJhbnQubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlc3RhdXJhbnQubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAge3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+RGlzaGVzOjwvaDQ+XG4gICAgICAgICAgICA8RGlzaGVzIGRpc2hlcz17bWF0Y2hlZERpc2hlc30gcmVzdGF1cmFudD17cmVzdGF1cmFudH0gLz5cbiAgICAgICAgICAgIDxoND5Ecmlua3M6PC9oND5cbiAgICAgICAgICAgIDxEcmlua3MgZHJpbmtzPXttYXRjaGVkRHJpbmtzfSByZXN0YXVyYW50PXtyZXN0YXVyYW50fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Db2w+XG4gICAgKTtcbiAgfSk7XG4gICAgICBcbiAgICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz57cmVzdExpc3R9PC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==