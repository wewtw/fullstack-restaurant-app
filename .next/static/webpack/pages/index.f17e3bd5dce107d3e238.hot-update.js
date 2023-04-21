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
      alt: "".concat(restaurant.name, " image"),
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
    alt: "".concat(firstMatchingRestaurant.name, " image"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VsZWN0ZWRSZXN0YXVyYW50Iiwic2V0U2VsZWN0ZWRSZXN0YXVyYW50IiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwiaGFuZGxlUmVzdGF1cmFudENsaWNrIiwicmVzdGF1cmFudCIsImlkIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJkaXNoZXMiLCJzb21lIiwiZGlzaCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoIiwiZHJpbmtzIiwiZHJpbmsiLCJmaXJzdE1hdGNoaW5nUmVzdGF1cmFudCIsImkiLCJsZW5ndGgiLCJtYXRjaGVkRGlzaGVzIiwibWF0Y2hlZERyaW5rcyIsInJlc3RMaXN0IiwibWFwIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFDWkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FERTtBQUFBLE1BQ3JCQyxJQURxQixlQUNyQkEsSUFEcUI7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUNELElBQUQsQ0FGTDtBQUFBLE1BRXRCRSxLQUZzQjtBQUFBLE1BRWZDLFFBRmU7O0FBRzdCLE1BQU1DLGVBQWUsR0FB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QUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYxN2UzYmQ1ZGNlMTA3ZDNlMjM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCI7XG5pbXBvcnQgRHJpbmtzIGZyb20gXCIuL2RyaW5rc1wiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQm9keSwgQ2FyZEltZywgQ2FyZFRleHQsIENhcmRUaXRsZSwgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5mdW5jdGlvbiBSZXN0YXVyYW50TGlzdChwcm9wcykge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydCk7XG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGRpc2hlcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBwcmljZVxuICAgICAgICB9XG4gICAgICAgIGRyaW5rcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpO1xuICBjb25zdCBbc2VsZWN0ZWRSZXN0YXVyYW50LCBzZXRTZWxlY3RlZFJlc3RhdXJhbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSB7Y29uc29sZS5sb2coZXJyb3IpOyByZXR1cm4gPHA+RVJST1I8L3A+O31cbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcbiAgY29uc29sZS5sb2coYFF1ZXJ5IERhdGE6ICR7ZGF0YS5yZXN0YXVyYW50c31gKTtcblxuICBjb25zdCBoYW5kbGVSZXN0YXVyYW50Q2xpY2sgPSAocmVzdGF1cmFudCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkKSB7XG4gICAgICBzZXRTZWxlY3RlZFJlc3RhdXJhbnQobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChyZXN0YXVyYW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzdGF1cmFudCkgPT5cbiAgICByZXN0YXVyYW50LmRpc2hlcy5zb21lKFxuICAgICAgKGRpc2gpID0+IGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICkgfHxcbiAgICByZXN0YXVyYW50LmRyaW5rcy5zb21lKFxuICAgICAgKGRyaW5rKSA9PiBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKVxuICApO1xuXG4gIGxldCBmaXJzdE1hdGNoaW5nUmVzdGF1cmFudCA9IG51bGw7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VhcmNoUXVlcnkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByZXN0YXVyYW50ID0gc2VhcmNoUXVlcnlbaV07XG4gICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cbiAgICAgIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBpZiAobWF0Y2hlZERpc2hlcy5sZW5ndGggPiAwIHx8IG1hdGNoZWREcmlua3MubGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RNYXRjaGluZ1Jlc3RhdXJhbnQgPSByZXN0YXVyYW50O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzdExpc3QgPSBzZWFyY2hRdWVyeS5tYXAoKHJlc3RhdXJhbnQpID0+IHtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBjb25zdCBtYXRjaGVkRHJpbmtzID0gcmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT5cbiAgICAgIGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiIGtleT17cmVzdGF1cmFudC5pZH0+XG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAuNXJlbSAyMHB4IDAuNXJlbVwiIH19PlxuICAgICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjE0cmVtXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG5zcmM9e3Jlc3RhdXJhbnQuaW1hZ2UudXJsfVxuYWx0PXtgJHtyZXN0YXVyYW50Lm5hbWV9IGltYWdlYH1cbi8+XG48Q2FyZEJvZHk+XG48Q2FyZFRpdGxlIHRhZz1cImg1XCI+e3Jlc3RhdXJhbnQubmFtZX08L0NhcmRUaXRsZT5cbjxDYXJkVGV4dD57cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuPEJ1dHRvblxuY29sb3I9XCJpbmZvXCJcbm9uQ2xpY2s9eygpID0+IGhhbmRsZVJlc3RhdXJhbnRDbGljayhyZXN0YXVyYW50KX1cbj5cbntzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkXG4/IFwiSGlkZSBNZW51XCJcbjogXCJWaWV3IE1lbnVcIn1cbjwvQnV0dG9uPlxuPC9DYXJkQm9keT5cbjwvQ2FyZD5cbntzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkICYmIChcbjxkaXY+XG48aHIgLz5cbjxoND5EaXNoZXM8L2g0PlxuPERpc2hlcyBkaXNoZXM9e21hdGNoZWREaXNoZXN9IHJlc3RhdXJhbnQ9e3Jlc3RhdXJhbnR9IC8+XG48aDQ+RHJpbmtzPC9oND5cbjxEcmlua3MgZHJpbmtzPXttYXRjaGVkRHJpbmtzfSByZXN0YXVyYW50PXtyZXN0YXVyYW50fSAvPlxuPC9kaXY+XG4pfVxuPC9Db2w+XG4pO1xufSk7XG5cbnJldHVybiAoXG48Q29udGFpbmVyIHN0eWxlPXt7IG1hcmdpblRvcDogXCIycmVtXCIgfX0+XG48Um93Plxue2ZpcnN0TWF0Y2hpbmdSZXN0YXVyYW50ID8gKFxuPGRpdj5cbjxoMz5CZXN0IE1hdGNoPC9oMz5cbjxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIHN0eWxlPXt7IG1hcmdpbjogXCIwLjVyZW1cIiB9fT5cbjxDYXJkPlxuPENhcmRJbWdcbnRvcD17dHJ1ZX1cbnN0eWxlPXt7XG53aWR0aDogXCIxMDAlXCIsXG5oZWlnaHQ6IFwiMTRyZW1cIixcbm9iamVjdEZpdDogXCJjb3ZlclwiLFxufX1cbnNyYz17Zmlyc3RNYXRjaGluZ1Jlc3RhdXJhbnQuaW1hZ2UudXJsfVxuYWx0PXtgJHtmaXJzdE1hdGNoaW5nUmVzdGF1cmFudC5uYW1lfSBpbWFnZWB9XG4vPlxuPENhcmRCb2R5PlxuPENhcmRUaXRsZSB0YWc9XCJoNVwiPlxue2ZpcnN0TWF0Y2hpbmdSZXN0YXVyYW50Lm5hbWV9XG48L0NhcmRUaXRsZT5cbjxDYXJkVGV4dD5cbntmaXJzdE1hdGNoaW5nUmVzdGF1cmFudC5kZXNjcmlwdGlvbn1cbjwvQ2FyZFRleHQ+XG48QnV0dG9uXG5jb2xvcj1cImluZm9cIlxub25DbGljaz17KCkgPT5cbmhhbmRsZVJlc3RhdXJhbnRDbGljayhmaXJzdE1hdGNoaW5nUmVzdGF1cmFudClcbn1cbj5cbntzZWxlY3RlZFJlc3RhdXJhbnQgJiZcbnNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gZmlyc3RNYXRjaGluZ1Jlc3RhdXJhbnQuaWRcbj8gXCJIaWRlIE1lbnVcIlxuOiBcIlZpZXcgTWVudVwifVxuPC9CdXR0b24+XG48L0NhcmRCb2R5PlxuPC9DYXJkPlxue3NlbGVjdGVkUmVzdGF1cmFudCAmJlxuc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSBmaXJzdE1hdGNoaW5nUmVzdGF1cmFudC5pZCAmJiAoXG48ZGl2PlxuPGhyIC8+XG48aDQ+RGlzaGVzPC9oND5cbjxEaXNoZXNcbiAgICAgICAgICAgICAgICAgICBkaXNoZXM9e2ZpcnN0TWF0Y2hpbmdSZXN0YXVyYW50LmRpc2hlc31cbiAgICAgICAgICAgICAgICAgICByZXN0YXVyYW50PXtmaXJzdE1hdGNoaW5nUmVzdGF1cmFudH1cbiAgICAgICAgICAgICAgICAgLz5cbjxoND5Ecmlua3M8L2g0PlxuPERyaW5rc1xuICAgICAgICAgICAgICAgICAgIGRyaW5rcz17Zmlyc3RNYXRjaGluZ1Jlc3RhdXJhbnQuZHJpbmtzfVxuICAgICAgICAgICAgICAgICAgIHJlc3RhdXJhbnQ9e2ZpcnN0TWF0Y2hpbmdSZXN0YXVyYW50fVxuICAgICAgICAgICAgICAgICAvPlxuPC9kaXY+XG4pfVxuPC9Db2w+XG48L2Rpdj5cbikgOiBudWxsfVxue3Jlc3RMaXN0fVxuPC9Sb3c+XG48L0NvbnRhaW5lcj5cbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=