webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/restaurantList.js":
/*!**************************************!*\
  !*** ./components/restaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _dishes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dishes */ "./components/dishes.js");
/* harmony import */ var _drinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drinks */ "./components/drinks.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\components\\restaurantList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query {\n      restaurants {\n        id\n        name\n        description\n        image {\n          url\n        }\n        dishes {\n          id\n          name\n          description\n          price\n        }\n        drinks {\n          id\n          price\n          name\n          description\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function RestaurantList(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedRestaurant = _useState[0],
      setSelectedRestaurant = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      cart = _useContext.cart;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(cart),
      state = _useState2[0],
      setState = _useState2[1];

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 23
    }
  }, "Loading...");

  if (error) {
    console.log(error);
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 12
      }
    }, "ERROR");
  }

  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "Not found");
  var filteredRestaurants = data.restaurants.filter(function (restaurant) {
    var hasFilteredDishes = restaurant.dishes.some(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase());
    });
    var hasFilteredDrinks = restaurant.drinks.some(function (drink) {
      return drink.name.toLowerCase().includes(props.search.toLowerCase());
    });
    return hasFilteredDishes || hasFilteredDrinks || restaurant.name.toLowerCase().includes(props.search.toLowerCase());
  });

  var handleRestaurantClick = function handleRestaurantClick(restaurant) {
    setSelectedRestaurant(restaurant);
  };

  var renderDishes = function renderDishes() {
    if (!selectedRestaurant) return null;
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_4__["default"], {
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 12
      }
    });
  };

  var renderDrinks = function renderDrinks() {
    if (!selectedRestaurant) return null;
    return __jsx(_drinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 12
      }
    });
  };

  var renderRestaurants = function renderRestaurants() {
    if (filteredRestaurants.length === 0) {
      return __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 14
        }
      }, "No results found.");
    }

    return filteredRestaurants.map(function (restaurant) {
      var hasFilteredDishes = restaurant.dishes.some(function (dish) {
        return dish.name.toLowerCase().includes(props.search.toLowerCase());
      });
      var hasFilteredDrinks = restaurant.drinks.some(function (drink) {
        return drink.name.toLowerCase().includes(props.search.toLowerCase());
      });
      var hasFilteredItems = hasFilteredDishes || hasFilteredDrinks;
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: "6",
        sm: "4",
        key: restaurant.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardImg"], {
        top: true,
        style: {
          height: 200
        },
        src: "http://localhost:1337".concat(restaurant.image.url),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 15
        }
      }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }
      }, restaurant.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        color: selectedRestaurant && selectedRestaurant.id === restaurant.id ? "secondary" : "info",
        onClick: function onClick() {
          return handleRestaurantClick(restaurant);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }
      }, restaurant.name)), hasFilteredItems && __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        color: selectedRestaurant && selectedRestaurant.id === restaurant.id && selectedRestaurant.showDishes && !selectedRestaurant.showDrinks ? "secondary" : "info",
        onClick: function onClick() {
          return setSelectedRestaurant(_objectSpread(_objectSpread({}, selectedRestaurant), {}, {
            showDishes: true,
            showDrinks: false
          }));
        },
        style: {
          marginRight: "0.5rem",
          marginTop: "0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }
      }, "Dishes"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        color: selectedRestaurant && selectedRestaurant.id === restaurant.id && selectedRestaurant.showDrinks ? "secondary" : "info",
        onClick: function onClick() {
          return setSelectedRestaurant(_objectSpread(_objectSpread({}, selectedRestaurant), {}, {
            showDishes: false,
            showDrinks: true
          }));
        },
        style: {
          marginTop: "0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 17
        }
      }, "Drinks"))));
    });
  };

  var renderInventory = function renderInventory() {
    if (!selectedRestaurant) return null;
    if (selectedRestaurant.showDishes) return renderDishes();
    if (selectedRestaurant.showDrinks) return renderDrinks();
    return null;
  };

  var updateState = function updateState(newState) {
    setState(newState);
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    style: {
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xs: "12",
    sm: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, "Cart"), __jsx("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, JSON.stringify(state, null, 2))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xs: "12",
    sm: "9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx("h1", {
    style: {
      marginBottom: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, "Restaurants"), __jsx("div", {
    style: {
      marginBottom: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search for a restaurant, dish, or drink...",
    value: props.search,
    onChange: function onChange(event) {
      return props.setSearch(event.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, renderRestaurants()), renderInventory())));
}

_s(RestaurantList, "CrPmvuCRIAaBHl5hX6yma1tMxv8=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJzZWxlY3RlZFJlc3RhdXJhbnQiLCJzZXRTZWxlY3RlZFJlc3RhdXJhbnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkUmVzdGF1cmFudHMiLCJyZXN0YXVyYW50cyIsImZpbHRlciIsInJlc3RhdXJhbnQiLCJoYXNGaWx0ZXJlZERpc2hlcyIsImRpc2hlcyIsInNvbWUiLCJkaXNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJoYXNGaWx0ZXJlZERyaW5rcyIsImRyaW5rcyIsImRyaW5rIiwiaGFuZGxlUmVzdGF1cmFudENsaWNrIiwicmVuZGVyRGlzaGVzIiwiaWQiLCJyZW5kZXJEcmlua3MiLCJyZW5kZXJSZXN0YXVyYW50cyIsImxlbmd0aCIsIm1hcCIsImhhc0ZpbHRlcmVkSXRlbXMiLCJtYXJnaW4iLCJoZWlnaHQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIiwic2hvd0Rpc2hlcyIsInNob3dEcmlua3MiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsInJlbmRlckludmVudG9yeSIsInVwZGF0ZVN0YXRlIiwibmV3U3RhdGUiLCJKU09OIiwic3RyaW5naWZ5IiwibWFyZ2luQm90dG9tIiwiZXZlbnQiLCJzZXRTZWFyY2giLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVlBLFNBQVNBLGNBQVQsQ0FB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Q0FMRixDQURGLENBREY7QUF1QkQ7O0dBMUxRbEQsYztVQTRCMEJZLHVEOzs7S0E1QjFCWixjO0FBNExNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc5YjBlMTBhNWM4NWY5NjUzNWVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCI7XG5pbXBvcnQgRHJpbmtzIGZyb20gXCIuL2RyaW5rc1wiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgQ29sLFxuICBDb250YWluZXIsXG4gIFJvdyxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpIHtcbiAgY29uc3QgW3NlbGVjdGVkUmVzdGF1cmFudCwgc2V0U2VsZWN0ZWRSZXN0YXVyYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydCk7XG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGRpc2hlcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBwcmljZVxuICAgICAgICB9XG4gICAgICAgIGRyaW5rcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIDxwPkVSUk9SPC9wPjtcbiAgfVxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuXG4gIGNvbnN0IGZpbHRlcmVkUmVzdGF1cmFudHMgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzdGF1cmFudCkgPT4ge1xuICAgIGNvbnN0IGhhc0ZpbHRlcmVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuc29tZSgoZGlzaCkgPT4ge1xuICAgICAgcmV0dXJuIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcbiAgICBjb25zdCBoYXNGaWx0ZXJlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLnNvbWUoKGRyaW5rKSA9PiB7XG4gICAgICByZXR1cm4gZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICBoYXNGaWx0ZXJlZERpc2hlcyB8fFxuICAgICAgaGFzRmlsdGVyZWREcmlua3MgfHxcbiAgICAgIHJlc3RhdXJhbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVJlc3RhdXJhbnRDbGljayA9IChyZXN0YXVyYW50KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KHJlc3RhdXJhbnQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckRpc2hlcyA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUmVzdGF1cmFudCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIDxEaXNoZXMgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckRyaW5rcyA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUmVzdGF1cmFudCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIDxEcmlua3MgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclJlc3RhdXJhbnRzID0gKCkgPT4ge1xuICAgIGlmIChmaWx0ZXJlZFJlc3RhdXJhbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDxwPk5vIHJlc3VsdHMgZm91bmQuPC9wPjtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyZWRSZXN0YXVyYW50cy5tYXAoKHJlc3RhdXJhbnQpID0+IHtcbiAgICAgIGNvbnN0IGhhc0ZpbHRlcmVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuc29tZSgoZGlzaCkgPT4ge1xuICAgICAgICByZXR1cm4gZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBoYXNGaWx0ZXJlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLnNvbWUoKGRyaW5rKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBoYXNGaWx0ZXJlZEl0ZW1zID0gaGFzRmlsdGVyZWREaXNoZXMgfHwgaGFzRmlsdGVyZWREcmlua3M7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXN0YXVyYW50LmlkfT5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cbiAgICAgICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX1cbiAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtyZXN0YXVyYW50LmltYWdlLnVybH1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgPENhcmRUaXRsZT57cmVzdGF1cmFudC5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkXG4gICAgICAgICAgICAgICAgICAgID8gXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiaW5mb1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlc3RhdXJhbnRDbGljayhyZXN0YXVyYW50KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50Lm5hbWV9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aGFzRmlsdGVyZWRJdGVtcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJlc3RhdXJhbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUmVzdGF1cmFudC5zaG93RGlzaGVzICYmXG4gICAgICAgICAgICAgICAgICAgICFzZWxlY3RlZFJlc3RhdXJhbnQuc2hvd0RyaW5rc1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudCh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRSZXN0YXVyYW50LFxuICAgICAgICAgICAgICAgICAgICAgIHNob3dEaXNoZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0RyaW5rczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgbWFyZ2luVG9wOiBcIjAuNXJlbVwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRGlzaGVzXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJlc3RhdXJhbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUmVzdGF1cmFudC5zaG93RHJpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImluZm9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZFJlc3RhdXJhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0Rpc2hlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0RyaW5rczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIwLjVyZW1cIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIERyaW5rc1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbD5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySW52ZW50b3J5ID0gKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRSZXN0YXVyYW50KSByZXR1cm4gbnVsbDtcbiAgICBpZiAoc2VsZWN0ZWRSZXN0YXVyYW50LnNob3dEaXNoZXMpIHJldHVybiByZW5kZXJEaXNoZXMoKTtcbiAgICBpZiAoc2VsZWN0ZWRSZXN0YXVyYW50LnNob3dEcmlua3MpIHJldHVybiByZW5kZXJEcmlua3MoKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTdGF0ZSA9IChuZXdTdGF0ZSkgPT4ge1xuICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiM1wiPlxuICAgICAgICAgIDxoMz5DYXJ0PC9oMz5cbiAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShzdGF0ZSwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjlcIj5cbiAgICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5SZXN0YXVyYW50czwvaDE+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgcmVzdGF1cmFudCwgZGlzaCwgb3IgZHJpbmsuLi5cIlxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc2VhcmNofVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBwcm9wcy5zZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFJvdz57cmVuZGVyUmVzdGF1cmFudHMoKX08L1Jvdz5cbiAgICAgICAgICB7cmVuZGVySW52ZW50b3J5KCl9XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==