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

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["{firstMatchingRestaurant.name} image"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["{restaurant.name} image"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n      restaurants {\n        id\n        name\n        description\n        image {\n          url\n        }\n        dishes {\n          id\n          name\n          description\n          price\n        }\n        drinks {\n          id\n          price\n          name\n          description\n          \n        }\n      }\n    }\n  "]);

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

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedRestaurant = _useState2[0],
      setSelectedRestaurant = _useState2[1];

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
  console.log("Query Data: ".concat(data.restaurants));

  var handleRestaurantClick = function handleRestaurantClick(restaurant) {
    if (selectedRestaurant && selectedRestaurant.id === restaurant.id) {
      setSelectedRestaurant(null);
    } else {
      setSelectedRestaurant(restaurant);
    }
  };

  var searchQuery = data.restaurants.filter(function (restaurant) {
    return restaurant.dishes.some(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase());
    }) || restaurant.drinks.some(function (drink) {
      return drink.name.toLowerCase().includes(props.search.toLowerCase());
    });
  });
  var firstMatchingRestaurant = null;

  for (var i = 0; i < searchQuery.length; i++) {
    var restaurant = searchQuery[i];
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase());
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search.toLowerCase());
    });

    if (matchedDishes.length > 0 || matchedDrinks.length > 0) {
      firstMatchingRestaurant = restaurant;
      break;
    }
  }

  var restList = searchQuery.map(function (restaurant) {
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase());
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search.toLowerCase());
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: "6",
      sm: "4",
      key: restaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
      top: true,
      style: {
        width: "100%",
        height: "14rem",
        objectFit: "cover"
      },
      src: restaurant.image.url,
      alt: $(_templateObject2()),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 1
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
      tag: "h5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 1
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 1
      }
    }, restaurant.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      color: "info",
      onClick: function onClick() {
        return handleRestaurantClick(restaurant);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 1
      }
    }, selectedRestaurant && selectedRestaurant.id === restaurant.id ? "Hide Menu" : "View Menu"))), selectedRestaurant && selectedRestaurant.id === restaurant.id && __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 1
      }
    }, __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 1
      }
    }), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 1
      }
    }, "Dishes"), __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: matchedDishes,
      restaurant: restaurant,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 1
      }
    }), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 1
      }
    }, "Drinks"), __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: matchedDrinks,
      restaurant: restaurant,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 1
      }
    })));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    style: {
      marginTop: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 1
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 1
    }
  }, firstMatchingRestaurant ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 1
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 1
    }
  }, "Best Match"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: "12",
    sm: "6",
    style: {
      margin: "0.5rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 1
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 1
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
    top: true,
    style: {
      width: "100%",
      height: "14rem",
      objectFit: "cover"
    },
    src: firstMatchingRestaurant.image.url,
    alt: $(_templateObject3()),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 1
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 1
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
    tag: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 1
    }
  }, firstMatchingRestaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 1
    }
  }, firstMatchingRestaurant.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    color: "info",
    onClick: function onClick() {
      return handleRestaurantClick(firstMatchingRestaurant);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 1
    }
  }, selectedRestaurant && selectedRestaurant.id === firstMatchingRestaurant.id ? "Hide Menu" : "View Menu"))), selectedRestaurant && selectedRestaurant.id === firstMatchingRestaurant.id && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 1
    }
  }, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 1
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 1
    }
  }, "Dishes"), __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dishes: firstMatchingRestaurant.dishes,
    restaurant: firstMatchingRestaurant,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 1
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 1
    }
  }, "Drinks"), __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
    drinks: firstMatchingRestaurant.drinks,
    restaurant: firstMatchingRestaurant,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 1
    }
  })))) : null, restList));
}

_s(RestaurantList, "raNtfS0oO2lpYzhTWm2n3V5pkVE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VsZWN0ZWRSZXN0YXVyYW50Iiwic2V0U2VsZWN0ZWRSZXN0YXVyYW50IiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwiaGFuZGxlUmVzdGF1cmFudENsaWNrIiwicmVzdGF1cmFudCIsImlkIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJkaXNoZXMiLCJzb21lIiwiZGlzaCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoIiwiZHJpbmtzIiwiZHJpbmsiLCJmaXJzdE1hdGNoaW5nUmVzdGF1cmFudCIsImkiLCJsZW5ndGgiLCJtYXRjaGVkRGlzaGVzIiwibWF0Y2hlZERyaW5rcyIsInJlc3RMaXN0IiwibWFwIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJpbWFnZSIsInVybCIsIiQiLCJkZXNjcmlwdGlvbiIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFDWkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FERTtBQUFBLE1BQ3JCQyxJQURxQixlQUNyQkEsSUFEcUI7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUNELElBQUQsQ0FGTDtBQUFBLE1BRXRCRSxLQUZzQjtBQUFBLE1BRWZDLFFB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QUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuM2I5ZGUzYTljZjc2NTg5MjE4MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgZGlzaGVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICAgICAgZHJpbmtzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUyk7XG4gIGNvbnN0IFtzZWxlY3RlZFJlc3RhdXJhbnQsIHNldFNlbGVjdGVkUmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHtjb25zb2xlLmxvZyhlcnJvcik7IHJldHVybiA8cD5FUlJPUjwvcD47fVxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApO1xuXG4gIGNvbnN0IGhhbmRsZVJlc3RhdXJhbnRDbGljayA9IChyZXN0YXVyYW50KSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQpIHtcbiAgICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KHJlc3RhdXJhbnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hRdWVyeSA9IGRhdGEucmVzdGF1cmFudHMuZmlsdGVyKChyZXN0YXVyYW50KSA9PlxuICAgIHJlc3RhdXJhbnQuZGlzaGVzLnNvbWUoXG4gICAgICAoZGlzaCkgPT4gZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKSB8fFxuICAgIHJlc3RhdXJhbnQuZHJpbmtzLnNvbWUoXG4gICAgICAoZHJpbmspID0+IGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApXG4gICk7XG5cbiAgbGV0IGZpcnN0TWF0Y2hpbmdSZXN0YXVyYW50ID0gbnVsbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hRdWVyeS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBzZWFyY2hRdWVyeVtpXTtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBjb25zdCBtYXRjaGVkRHJpbmtzID0gcmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT5cbiAgICAgIGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIGlmIChtYXRjaGVkRGlzaGVzLmxlbmd0aCA+IDAgfHwgbWF0Y2hlZERyaW5rcy5sZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdE1hdGNoaW5nUmVzdGF1cmFudCA9IHJlc3RhdXJhbnQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXN0TGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzdGF1cmFudCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZWREaXNoZXMgPSByZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+XG4gICAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIGNvbnN0IG1hdGNoZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoKGRyaW5rKSA9PlxuICAgICAgZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXN0YXVyYW50LmlkfT5cbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTRyZW1cIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbnNyYz17cmVzdGF1cmFudC5pbWFnZS51cmx9XG5hbHQ9eyRge3Jlc3RhdXJhbnQubmFtZX0gaW1hZ2VgfVxuLz5cbjxDYXJkQm9keT5cbjxDYXJkVGl0bGUgdGFnPVwiaDVcIj57cmVzdGF1cmFudC5uYW1lfTwvQ2FyZFRpdGxlPlxuPENhcmRUZXh0PntyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG48QnV0dG9uXG5jb2xvcj1cImluZm9cIlxub25DbGljaz17KCkgPT4gaGFuZGxlUmVzdGF1cmFudENsaWNrKHJlc3RhdXJhbnQpfVxuPlxue3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWRcbj8gXCJIaWRlIE1lbnVcIlxuOiBcIlZpZXcgTWVudVwifVxuPC9CdXR0b24+XG48L0NhcmRCb2R5PlxuPC9DYXJkPlxue3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQgJiYgKFxuPGRpdj5cbjxociAvPlxuPGg0PkRpc2hlczwvaDQ+XG48RGlzaGVzIGRpc2hlcz17bWF0Y2hlZERpc2hlc30gcmVzdGF1cmFudD17cmVzdGF1cmFudH0gLz5cbjxoND5Ecmlua3M8L2g0PlxuPERyaW5rcyBkcmlua3M9e21hdGNoZWREcmlua3N9IHJlc3RhdXJhbnQ9e3Jlc3RhdXJhbnR9IC8+XG48L2Rpdj5cbil9XG48L0NvbD5cbik7XG59KTtcblxucmV0dXJuIChcbjxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjJyZW1cIiB9fT5cbjxSb3c+XG57Zmlyc3RNYXRjaGluZ1Jlc3RhdXJhbnQgPyAoXG48ZGl2PlxuPGgzPkJlc3QgTWF0Y2g8L2gzPlxuPENvbCB4cz1cIjEyXCIgc209XCI2XCIgc3R5bGU9e3sgbWFyZ2luOiBcIjAuNXJlbVwiIH19PlxuPENhcmQ+XG48Q2FyZEltZ1xudG9wPXt0cnVlfVxuc3R5bGU9e3tcbndpZHRoOiBcIjEwMCVcIixcbmhlaWdodDogXCIxNHJlbVwiLFxub2JqZWN0Rml0OiBcImNvdmVyXCIsXG59fVxuc3JjPXtmaXJzdE1hdGNoaW5nUmVzdGF1cmFudC5pbWFnZS51cmx9XG5hbHQ9eyRge2ZpcnN0TWF0Y2hpbmdSZXN0YXVyYW50Lm5hbWV9IGltYWdlYH1cbi8+XG48Q2FyZEJvZHk+XG48Q2FyZFRpdGxlIHRhZz1cImg1XCI+XG57Zmlyc3RNYXRjaGluZ1Jlc3RhdXJhbnQubmFtZX1cbjwvQ2FyZFRpdGxlPlxuPENhcmRUZXh0Plxue2ZpcnN0TWF0Y2hpbmdSZXN0YXVyYW50LmRlc2NyaXB0aW9ufVxuPC9DYXJkVGV4dD5cbjxCdXR0b25cbmNvbG9yPVwiaW5mb1wiXG5vbkNsaWNrPXsoKSA9PlxuaGFuZGxlUmVzdGF1cmFudENsaWNrKGZpcnN0TWF0Y2hpbmdSZXN0YXVyYW50KVxufVxuPlxue3NlbGVjdGVkUmVzdGF1cmFudCAmJlxuc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSBmaXJzdE1hdGNoaW5nUmVzdGF1cmFudC5pZFxuPyBcIkhpZGUgTWVudVwiXG46IFwiVmlldyBNZW51XCJ9XG48L0J1dHRvbj5cbjwvQ2FyZEJvZHk+XG48L0NhcmQ+XG57c2VsZWN0ZWRSZXN0YXVyYW50ICYmXG5zZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IGZpcnN0TWF0Y2hpbmdSZXN0YXVyYW50LmlkICYmIChcbjxkaXY+XG48aHIgLz5cbjxoND5EaXNoZXM8L2g0PlxuPERpc2hlc1xuICAgICAgICAgICAgICAgICAgIGRpc2hlcz17Zmlyc3RNYXRjaGluZ1Jlc3RhdXJhbnQuZGlzaGVzfVxuICAgICAgICAgICAgICAgICAgIHJlc3RhdXJhbnQ9e2ZpcnN0TWF0Y2hpbmdSZXN0YXVyYW50fVxuICAgICAgICAgICAgICAgICAvPlxuPGg0PkRyaW5rczwvaDQ+XG48RHJpbmtzXG4gICAgICAgICAgICAgICAgICAgZHJpbmtzPXtmaXJzdE1hdGNoaW5nUmVzdGF1cmFudC5kcmlua3N9XG4gICAgICAgICAgICAgICAgICAgcmVzdGF1cmFudD17Zmlyc3RNYXRjaGluZ1Jlc3RhdXJhbnR9XG4gICAgICAgICAgICAgICAgIC8+XG48L2Rpdj5cbil9XG48L0NvbD5cbjwvZGl2PlxuKSA6IG51bGx9XG57cmVzdExpc3R9XG48L1Jvdz5cbjwvQ29udGFpbmVyPlxuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==