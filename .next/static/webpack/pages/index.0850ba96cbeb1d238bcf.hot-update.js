webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJzZWxlY3RlZFJlc3RhdXJhbnQiLCJzZXRTZWxlY3RlZFJlc3RhdXJhbnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkUmVzdGF1cmFudHMiLCJyZXN0YXVyYW50cyIsImZpbHRlciIsInJlc3RhdXJhbnQiLCJoYXNGaWx0ZXJlZERpc2hlcyIsImRpc2hlcyIsInNvbWUiLCJkaXNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJoYXNGaWx0ZXJlZERyaW5rcyIsImRyaW5rcyIsImRyaW5rIiwiaGFuZGxlUmVzdGF1cmFudENsaWNrIiwicmVuZGVyRGlzaGVzIiwiaWQiLCJyZW5kZXJEcmlua3MiLCJyZW5kZXJSZXN0YXVyYW50cyIsImxlbmd0aCIsIm1hcCIsImhhc0ZpbHRlcmVkSXRlbXMiLCJtYXJnaW4iLCJoZWlnaHQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIiwic2hvd0Rpc2hlcyIsInNob3dEcmlua3MiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsInJlbmRlckludmVudG9yeSIsInVwZGF0ZVN0YXRlIiwibmV3U3RhdGUiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQyxJQUFELENBRC9CO0FBQUEsTUFDdEJDLGtCQURzQjtBQUFBLE1BQ0ZDLHFCQURFOztBQUFBLG9CQUVaQyx3REFBVSxDQUFDQyxnREFBRCxDQUZFO0FBQUEsTUFFckJDLElBRnFCLGVBRXJCQSxJQUZxQjs7QUFBQSxtQkFHSEwsc0RBQVEsQ0FBQ0ssSUFBRCxDQUhMO0FBQUEsTUFHdEJDLEtBSHNCO0FBQUEsTUFHZkMsUUFIZTs7QUFJN0IsTUFBTUMsZUFBZSxHQUFHQywwREFBSCxtQkFBckI7O0FBSjZCLGtCQTRCSUMsK0RBQVEsQ0FBQ0YsZUFBRCxDQTVCWjtBQUFBLE1BNEJyQkcsT0E1QnFCLGFBNEJyQkEsT0E1QnFCO0FBQUEsTUE0QlpDLEtBNUJZLGFBNEJaQSxLQTVCWTtBQUFBLE1BNEJMQyxJQTVCSyxhQTRCTEEsSUE1Qks7O0FBNkI3QixNQUFJRixPQUFKLEVBQWEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQOztBQUNiLE1BQUlDLEtBQUosRUFBVztBQUNURSxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0Q7O0FBQ0QsTUFBSSxDQUFDQyxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBRVgsTUFBTUcsbUJBQW1CLEdBQUdILElBQUksQ0FBQ0ksV0FBTCxDQUFpQkMsTUFBakIsQ0FBd0IsVUFBQ0MsVUFBRCxFQUFnQjtBQUNsRSxRQUFNQyxpQkFBaUIsR0FBR0QsVUFBVSxDQUFDRSxNQUFYLENBQWtCQyxJQUFsQixDQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDekQsYUFBT0EsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFdBQVYsR0FBd0JDLFFBQXhCLENBQWlDM0IsS0FBSyxDQUFDNEIsTUFBTixDQUFhRixXQUFiLEVBQWpDLENBQVA7QUFDRCxLQUZ5QixDQUExQjtBQUdBLFFBQU1HLGlCQUFpQixHQUFHVCxVQUFVLENBQUNVLE1BQVgsQ0FBa0JQLElBQWxCLENBQXVCLFVBQUNRLEtBQUQsRUFBVztBQUMxRCxhQUFPQSxLQUFLLENBQUNOLElBQU4sQ0FBV0MsV0FBWCxHQUF5QkMsUUFBekIsQ0FBa0MzQixLQUFLLENBQUM0QixNQUFOLENBQWFGLFdBQWIsRUFBbEMsQ0FBUDtBQUNELEtBRnlCLENBQTFCO0FBSUEsV0FDRUwsaUJBQWlCLElBQ2pCUSxpQkFEQSxJQUVBVCxVQUFVLENBQUNLLElBQVgsQ0FBZ0JDLFdBQWhCLEdBQThCQyxRQUE5QixDQUF1QzNCLEtBQUssQ0FBQzRCLE1BQU4sQ0FBYUYsV0FBYixFQUF2QyxDQUhGO0FBS0QsR0FiMkIsQ0FBNUI7O0FBZUEsTUFBTU0scUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDWixVQUFELEVBQWdCO0FBQzVDakIseUJBQXFCLENBQUNpQixVQUFELENBQXJCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNYSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUksQ0FBQy9CLGtCQUFMLEVBQXlCLE9BQU8sSUFBUDtBQUN6QixXQUFPLE1BQUMsK0NBQUQ7QUFBUSxZQUFNLEVBQUVBLGtCQUFrQixDQUFDZ0MsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUksQ0FBQ2pDLGtCQUFMLEVBQXlCLE9BQU8sSUFBUDtBQUN6QixXQUFPLE1BQUMsK0NBQUQ7QUFBUSxZQUFNLEVBQUVBLGtCQUFrQixDQUFDZ0MsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsUUFBSW5CLG1CQUFtQixDQUFDb0IsTUFBcEIsS0FBK0IsQ0FBbkMsRUFBc0M7QUFDcEMsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFQO0FBQ0Q7O0FBRUQsV0FBT3BCLG1CQUFtQixDQUFDcUIsR0FBcEIsQ0FBd0IsVUFBQ2xCLFVBQUQsRUFBZ0I7QUFDN0MsVUFBTUMsaUJBQWlCLEdBQUdELFVBQVUsQ0FBQ0UsTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pELGVBQU9BLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxXQUFWLEdBQXdCQyxRQUF4QixDQUFpQzNCLEtBQUssQ0FBQzRCLE1BQU4sQ0FBYUYsV0FBYixFQUFqQyxDQUFQO0FBQ0QsT0FGeUIsQ0FBMUI7QUFHQSxVQUFNRyxpQkFBaUIsR0FBR1QsVUFBVSxDQUFDVSxNQUFYLENBQWtCUCxJQUFsQixDQUF1QixVQUFDUSxLQUFELEVBQVc7QUFDMUQsZUFBT0EsS0FBSyxDQUFDTixJQUFOLENBQVdDLFdBQVgsR0FBeUJDLFFBQXpCLENBQWtDM0IsS0FBSyxDQUFDNEIsTUFBTixDQUFhRixXQUFiLEVBQWxDLENBQVA7QUFDRCxPQUZ5QixDQUExQjtBQUdBLFVBQU1hLGdCQUFnQixHQUFHbEIsaUJBQWlCLElBQUlRLGlCQUE5QztBQUVBLGFBQ0UsTUFBQyw4Q0FBRDtBQUFLLFVBQUUsRUFBQyxHQUFSO0FBQVksVUFBRSxFQUFDLEdBQWY7QUFBbUIsV0FBRyxFQUFFVCxVQUFVLENBQUNjLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLCtDQUFEO0FBQU0sYUFBSyxFQUFFO0FBQUVNLGdCQUFNLEVBQUU7QUFBVixTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsV0FBRyxFQUFFLElBRFA7QUFFRSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWLFNBRlQ7QUFHRSxXQUFHLGlDQUEwQnJCLFVBQVUsQ0FBQ3NCLEtBQVgsQ0FBaUJDLEdBQTNDLENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBTUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVl2QixVQUFVLENBQUNLLElBQXZCLENBREYsRUFFRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBV0wsVUFBVSxDQUFDd0IsV0FBdEIsQ0FGRixDQU5GLEVBVUU7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsaURBQUQ7QUFDRSxhQUFLLEVBQ0gxQyxrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUNnQyxFQUFuQixLQUEwQmQsVUFBVSxDQUFDYyxFQUEzRCxHQUNJLFdBREosR0FFSSxNQUpSO0FBTUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1GLHFCQUFxQixDQUFDWixVQUFELENBQTNCO0FBQUEsU0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUdBLFVBQVUsQ0FBQ0ssSUFSZCxDQURGLENBVkYsRUFzQkdjLGdCQUFnQixJQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlEQUFEO0FBQ0UsYUFBSyxFQUNIckMsa0JBQWtCLElBQ2xCQSxrQkFBa0IsQ0FBQ2dDLEVBQW5CLEtBQTBCZCxVQUFVLENBQUNjLEVBRHJDLElBRUFoQyxrQkFBa0IsQ0FBQzJDLFVBRm5CLElBR0EsQ0FBQzNDLGtCQUFrQixDQUFDNEMsVUFIcEIsR0FJSSxXQUpKLEdBS0ksTUFQUjtBQVNFLGVBQU8sRUFBRTtBQUFBLGlCQUNQM0MscUJBQXFCLGlDQUNoQkQsa0JBRGdCO0FBRW5CMkMsc0JBQVUsRUFBRSxJQUZPO0FBR25CQyxzQkFBVSxFQUFFO0FBSE8sYUFEZDtBQUFBLFNBVFg7QUFnQkUsYUFBSyxFQUFFO0FBQUVDLHFCQUFXLEVBQUUsUUFBZjtBQUF5QkMsbUJBQVMsRUFBRTtBQUFwQyxTQWhCVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBcUJFLE1BQUMsaURBQUQ7QUFDRSxhQUFLLEVBQ0g5QyxrQkFBa0IsSUFDbEJBLGtCQUFrQixDQUFDZ0MsRUFBbkIsS0FBMEJkLFVBQVUsQ0FBQ2MsRUFEckMsSUFFQWhDLGtCQUFrQixDQUFDNEMsVUFGbkIsR0FHSSxXQUhKLEdBSUksTUFOUjtBQVFFLGVBQU8sRUFBRTtBQUFBLGlCQUNQM0MscUJBQXFCLGlDQUNoQkQsa0JBRGdCO0FBRW5CMkMsc0JBQVUsRUFBRSxLQUZPO0FBR25CQyxzQkFBVSxFQUFFO0FBSE8sYUFEZDtBQUFBLFNBUlg7QUFlRSxhQUFLLEVBQUU7QUFBRUUsbUJBQVMsRUFBRTtBQUFiLFNBZlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkYsQ0F2QkosQ0FERixDQURGO0FBc0VELEtBL0VNLENBQVA7QUFnRkQsR0FyRkQ7O0FBdUZBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFJLENBQUMvQyxrQkFBTCxFQUF5QixPQUFPLElBQVA7QUFDekIsUUFBSUEsa0JBQWtCLENBQUMyQyxVQUF2QixFQUFtQyxPQUFPWixZQUFZLEVBQW5CO0FBQ25DLFFBQUkvQixrQkFBa0IsQ0FBQzRDLFVBQXZCLEVBQW1DLE9BQU9YLFlBQVksRUFBbkI7QUFDbkMsV0FBTyxJQUFQO0FBQ0QsR0FMRDs7QUFPQSxNQUFNZSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQWM7QUFDaEMzQyxZQUFRLENBQUMyQyxRQUFELENBQVI7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyxvREFBRDtBQUFXLFNBQUssRUFBRTtBQUFFSCxlQUFTLEVBQUU7QUFBYixLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxJQUFSO0FBQWEsTUFBRSxFQUFDLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLFNBQUssRUFBRTtBQUFFSSxrQkFBWSxFQUFFO0FBQWhCLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNaEIsaUJBQWlCLEVBQXZCLENBRkYsRUFHRyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTWEsZUFBZSxFQUFyQixDQUhILENBRkYsQ0FERixDQURGO0FBWUQ7O0dBL0tRbEQsYztVQTRCMEJZLHVEOzs7S0E1QjFCWixjO0FBaUxNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wODUwYmE5NmNiZWIxZDIzOGJjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgRGlzaGVzIGZyb20gXCIuL2Rpc2hlc1wiO1xuaW1wb3J0IERyaW5rcyBmcm9tIFwiLi9kcmlua3NcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbCxcbiAgQ29udGFpbmVyLFxuICBSb3csXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFJlc3RhdXJhbnQsIHNldFNlbGVjdGVkUmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGNhcnQpO1xuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBkaXNoZXMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgfVxuICAgICAgICBkcmlua3Mge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJldHVybiA8cD5FUlJPUjwvcD47XG4gIH1cbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBjb25zdCBmaWx0ZXJlZFJlc3RhdXJhbnRzID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlc3RhdXJhbnQpID0+IHtcbiAgICBjb25zdCBoYXNGaWx0ZXJlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLnNvbWUoKGRpc2gpID0+IHtcbiAgICAgIHJldHVybiBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gICAgfSk7XG4gICAgY29uc3QgaGFzRmlsdGVyZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5zb21lKChkcmluaykgPT4ge1xuICAgICAgcmV0dXJuIGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgaGFzRmlsdGVyZWREaXNoZXMgfHxcbiAgICAgIGhhc0ZpbHRlcmVkRHJpbmtzIHx8XG4gICAgICByZXN0YXVyYW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVSZXN0YXVyYW50Q2xpY2sgPSAocmVzdGF1cmFudCkgPT4ge1xuICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChyZXN0YXVyYW50KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJEaXNoZXMgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiA8RGlzaGVzIHJlc3RJZD17c2VsZWN0ZWRSZXN0YXVyYW50LmlkfSAvPjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJEcmlua3MgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiA8RHJpbmtzIHJlc3RJZD17c2VsZWN0ZWRSZXN0YXVyYW50LmlkfSAvPjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJSZXN0YXVyYW50cyA9ICgpID0+IHtcbiAgICBpZiAoZmlsdGVyZWRSZXN0YXVyYW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiA8cD5ObyByZXN1bHRzIGZvdW5kLjwvcD47XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkUmVzdGF1cmFudHMubWFwKChyZXN0YXVyYW50KSA9PiB7XG4gICAgICBjb25zdCBoYXNGaWx0ZXJlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLnNvbWUoKGRpc2gpID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgaGFzRmlsdGVyZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5zb21lKChkcmluaykgPT4ge1xuICAgICAgICByZXR1cm4gZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgaGFzRmlsdGVyZWRJdGVtcyA9IGhhc0ZpbHRlcmVkRGlzaGVzIHx8IGhhc0ZpbHRlcmVkRHJpbmtzO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiIGtleT17cmVzdGF1cmFudC5pZH0+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cmVzdGF1cmFudC5pbWFnZS51cmx9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlc3RhdXJhbnQubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPENhcmRUZXh0PntyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSZXN0YXVyYW50ICYmIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZFxuICAgICAgICAgICAgICAgICAgICA/IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImluZm9cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXN0YXVyYW50Q2xpY2socmVzdGF1cmFudCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cmVzdGF1cmFudC5uYW1lfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2hhc0ZpbHRlcmVkSXRlbXMgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSZXN0YXVyYW50ICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJlc3RhdXJhbnQuc2hvd0Rpc2hlcyAmJlxuICAgICAgICAgICAgICAgICAgICAhc2VsZWN0ZWRSZXN0YXVyYW50LnNob3dEcmlua3NcbiAgICAgICAgICAgICAgICAgICAgICA/IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFJlc3RhdXJhbnQoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkUmVzdGF1cmFudCxcbiAgICAgICAgICAgICAgICAgICAgICBzaG93RGlzaGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHNob3dEcmlua3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsIG1hcmdpblRvcDogXCIwLjVyZW1cIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIERpc2hlc1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSZXN0YXVyYW50ICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJlc3RhdXJhbnQuc2hvd0RyaW5rc1xuICAgICAgICAgICAgICAgICAgICAgID8gXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudCh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRSZXN0YXVyYW50LFxuICAgICAgICAgICAgICAgICAgICAgIHNob3dEaXNoZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIHNob3dEcmlua3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMC41cmVtXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEcmlua3NcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckludmVudG9yeSA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUmVzdGF1cmFudCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHNlbGVjdGVkUmVzdGF1cmFudC5zaG93RGlzaGVzKSByZXR1cm4gcmVuZGVyRGlzaGVzKCk7XG4gICAgaWYgKHNlbGVjdGVkUmVzdGF1cmFudC5zaG93RHJpbmtzKSByZXR1cm4gcmVuZGVyRHJpbmtzKCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlU3RhdGUgPSAobmV3U3RhdGUpID0+IHtcbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG4gICAgICA8Um93PlxuICAgICAgIFxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjlcIj5cbiAgICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5SZXN0YXVyYW50czwvaDE+XG4gICAgICAgICAgPFJvdz57cmVuZGVyUmVzdGF1cmFudHMoKX08L1Jvdz5cbiAgICAgICAgICAgPFJvdz57cmVuZGVySW52ZW50b3J5KCl9PC9Sb3c+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==