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
    sm: "9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, __jsx("h1", {
    style: {
      marginBottom: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, "Restaurants"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, renderRestaurants()), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 12
    }
  }, renderInventory()))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJzZWxlY3RlZFJlc3RhdXJhbnQiLCJzZXRTZWxlY3RlZFJlc3RhdXJhbnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkUmVzdGF1cmFudHMiLCJyZXN0YXVyYW50cyIsImZpbHRlciIsInJlc3RhdXJhbnQiLCJoYXNGaWx0ZXJlZERpc2hlcyIsImRpc2hlcyIsInNvbWUiLCJkaXNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJoYXNGaWx0ZXJlZERyaW5rcyIsImRyaW5rcyIsImRyaW5rIiwiaGFuZGxlUmVzdGF1cmFudENsaWNrIiwicmVuZGVyRGlzaGVzIiwiaWQiLCJyZW5kZXJEcmlua3MiLCJyZW5kZXJSZXN0YXVyYW50cyIsImxlbmd0aCIsIm1hcCIsImhhc0ZpbHRlcmVkSXRlbXMiLCJtYXJnaW4iLCJoZWlnaHQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIiwic2hvd0Rpc2hlcyIsInNob3dEcmlua3MiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsInJlbmRlckludmVudG9yeSIsInVwZGF0ZVN0YXRlIiwibmV3U3RhdGUiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQyxJQUFE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QUFBLEtBRUUsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxJQUFSO0FBQWEsTUFBRSxFQUFDLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLFNBQUssRUFBRTtBQUFFSSxrQkFBWSxFQUFFO0FBQWhCLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNaEIsaUJBQWlCLEVBQXZCLENBRkYsRUFHRyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTWEsZUFBZSxFQUFyQixDQUhILENBRkYsQ0FERixDQURGO0FBWUQ7O0dBL0tRbEQsYztVQTRCMEJZLHVEOzs7S0E1QjFCWixjO0FBaUxNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA4NTBiYTk2Y2JlYjFkMjM4YmNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCI7XG5pbXBvcnQgRHJpbmtzIGZyb20gXCIuL2RyaW5rc1wiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgQ29sLFxuICBDb250YWluZXIsXG4gIFJvdyxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpIHtcbiAgY29uc3QgW3NlbGVjdGVkUmVzdGF1cmFudCwgc2V0U2VsZWN0ZWRSZXN0YXVyYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydCk7XG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGRpc2hlcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBwcmljZVxuICAgICAgICB9XG4gICAgICAgIGRyaW5rcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIDxwPkVSUk9SPC9wPjtcbiAgfVxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuXG4gIGNvbnN0IGZpbHRlcmVkUmVzdGF1cmFudHMgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzdGF1cmFudCkgPT4ge1xuICAgIGNvbnN0IGhhc0ZpbHRlcmVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuc29tZSgoZGlzaCkgPT4ge1xuICAgICAgcmV0dXJuIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcbiAgICBjb25zdCBoYXNGaWx0ZXJlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLnNvbWUoKGRyaW5rKSA9PiB7XG4gICAgICByZXR1cm4gZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICBoYXNGaWx0ZXJlZERpc2hlcyB8fFxuICAgICAgaGFzRmlsdGVyZWREcmlua3MgfHxcbiAgICAgIHJlc3RhdXJhbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVJlc3RhdXJhbnRDbGljayA9IChyZXN0YXVyYW50KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KHJlc3RhdXJhbnQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckRpc2hlcyA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUmVzdGF1cmFudCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIDxEaXNoZXMgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckRyaW5rcyA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUmVzdGF1cmFudCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIDxEcmlua3MgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclJlc3RhdXJhbnRzID0gKCkgPT4ge1xuICAgIGlmIChmaWx0ZXJlZFJlc3RhdXJhbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDxwPk5vIHJlc3VsdHMgZm91bmQuPC9wPjtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyZWRSZXN0YXVyYW50cy5tYXAoKHJlc3RhdXJhbnQpID0+IHtcbiAgICAgIGNvbnN0IGhhc0ZpbHRlcmVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuc29tZSgoZGlzaCkgPT4ge1xuICAgICAgICByZXR1cm4gZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBoYXNGaWx0ZXJlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLnNvbWUoKGRyaW5rKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBoYXNGaWx0ZXJlZEl0ZW1zID0gaGFzRmlsdGVyZWREaXNoZXMgfHwgaGFzRmlsdGVyZWREcmlua3M7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXN0YXVyYW50LmlkfT5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cbiAgICAgICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX1cbiAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtyZXN0YXVyYW50LmltYWdlLnVybH1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgPENhcmRUaXRsZT57cmVzdGF1cmFudC5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkXG4gICAgICAgICAgICAgICAgICAgID8gXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiaW5mb1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlc3RhdXJhbnRDbGljayhyZXN0YXVyYW50KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50Lm5hbWV9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aGFzRmlsdGVyZWRJdGVtcyAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJlc3RhdXJhbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUmVzdGF1cmFudC5zaG93RGlzaGVzICYmXG4gICAgICAgICAgICAgICAgICAgICFzZWxlY3RlZFJlc3RhdXJhbnQuc2hvd0RyaW5rc1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudCh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRSZXN0YXVyYW50LFxuICAgICAgICAgICAgICAgICAgICAgIHNob3dEaXNoZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0RyaW5rczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgbWFyZ2luVG9wOiBcIjAuNXJlbVwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRGlzaGVzXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJlc3RhdXJhbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUmVzdGF1cmFudC5zaG93RHJpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImluZm9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZFJlc3RhdXJhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0Rpc2hlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0RyaW5rczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIwLjVyZW1cIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIERyaW5rc1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbD5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySW52ZW50b3J5ID0gKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRSZXN0YXVyYW50KSByZXR1cm4gbnVsbDtcbiAgICBpZiAoc2VsZWN0ZWRSZXN0YXVyYW50LnNob3dEaXNoZXMpIHJldHVybiByZW5kZXJEaXNoZXMoKTtcbiAgICBpZiAoc2VsZWN0ZWRSZXN0YXVyYW50LnNob3dEcmlua3MpIHJldHVybiByZW5kZXJEcmlua3MoKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTdGF0ZSA9IChuZXdTdGF0ZSkgPT4ge1xuICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cbiAgICAgIDxSb3c+XG4gICAgICAgXG4gICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiOVwiPlxuICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlJlc3RhdXJhbnRzPC9oMT5cbiAgICAgICAgICA8Um93PntyZW5kZXJSZXN0YXVyYW50cygpfTwvUm93PlxuICAgICAgICAgICA8Um93PntyZW5kZXJJbnZlbnRvcnkoKX08L1Jvdz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9