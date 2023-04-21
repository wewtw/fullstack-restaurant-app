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
      lineNumber: 38,
      columnNumber: 23
    }
  }, "Loading...");

  if (error) {
    console.log(error);
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 12
      }
    }, "ERROR");
  }

  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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

  var renderDishes = function renderDishes() {
    if (!selectedRestaurant) return null;
    var matchedDishes = selectedRestaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase());
    });
    if (matchedDishes.length === 0) return null;
    var relatedDishes = selectedRestaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase()) === false && dish.type === matchedDishes[0].type;
    });
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: matchedDishes,
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }), relatedDishes.length > 0 && __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, "Related Dishes:"), __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: relatedDishes,
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    })));
  };

  var renderDrinks = function renderDrinks() {
    if (!selectedRestaurant) return null;
    var matchedDrinks = selectedRestaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search.toLowerCase());
    });
    if (matchedDrinks.length === 0) return null;
    var relatedDrinks = selectedRestaurant.drinks.filter(function (drink) {
      return !drink.name.toLowerCase().includes(props.search.toLowerCase());
    });
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: matchedDrinks,
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }), relatedDrinks.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, "Related Drinks"), __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: relatedDrinks,
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    })));
  };

  var searchQuery = data.restaurants.filter(function (restaurant) {
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase());
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search.toLowerCase());
    });
    var matchedRestaurant = restaurant.name.toLowerCase().includes(props.search.toLowerCase());
    return matchedDishes.length > 0 || matchedDrinks.length > 0 || matchedRestaurant;
  });
  var restList = searchQuery.map(function (restaurant) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: "6",
      sm: "4",
      key: restaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
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
        lineNumber: 128,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }, restaurant.description)), __jsx("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
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
        lineNumber: 138,
        columnNumber: 11
      }
    }, selectedRestaurant && selectedRestaurant.id === restaurant.id ? "Close" : "View Menu"))));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, renderDishes()), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, renderDrinks()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VsZWN0ZWRSZXN0YXVyYW50Iiwic2V0U2VsZWN0ZWRSZXN0YXVyYW50IiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwiaGFuZGxlUmVzdGF1cmFudENsaWNrIiwicmVzdGF1cmFudCIsImlkIiwicmVuZGVyRGlzaGVzIiwibWF0Y2hlZERpc2hlcyIsImRpc2hlcyIsImZpbHRlciIsImRpc2giLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsImxlbmd0aCIsInJlbGF0ZWREaXNoZXMiLCJ0eXBlIiwicmVuZGVyRHJpbmtzIiwibWF0Y2hlZERyaW5rcyIsImRyaW5rcyIsImRyaW5rIiwicmVsYXRlZERyaW5rcyIsInNlYXJjaFF1ZXJ5IiwibWF0Y2hlZFJlc3RhdXJhbnQiLCJyZXN0TGlzdCIsIm1hcCIsIm1hcmdpbiIsImhlaWdodCIsImltYWdlIiwidXJsIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUFBLG9CQUNaQyx3REFBVSxDQUFDQyxnREFBRCxDQURFO0FBQUEsTUFDckJDLElBRHFCLGVBQ3JCQSxJQURxQjs7QUFBQSxrQkFFSEMsc0RBQVEsQ0FBQ0QsSUFBRCxDQUZMO0FBQUEsTUFFdEJFLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFuQixZQUFZLEVBQXpCLENBRkYsRUFHRSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhWSxZQUFZLEVBQXpCLENBSEYsQ0FERjtBQU9EOztHQTFKUWxDLGM7VUEyQjBCVSx1RDs7O0tBM0IxQlYsYztBQTRKTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNThmMGUxYzc3ZjE5YjU0YjBiNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgZGlzaGVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICAgICAgZHJpbmtzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUyk7XG4gIGNvbnN0IFtzZWxlY3RlZFJlc3RhdXJhbnQsIHNldFNlbGVjdGVkUmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIDxwPkVSUk9SPC9wPjtcbiAgfVxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApO1xuICBjb25zdCBoYW5kbGVSZXN0YXVyYW50Q2xpY2sgPSAocmVzdGF1cmFudCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkKSB7XG4gICAgICBzZXRTZWxlY3RlZFJlc3RhdXJhbnQobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChyZXN0YXVyYW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRGlzaGVzID0gKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRSZXN0YXVyYW50KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gc2VsZWN0ZWRSZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+XG4gICAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIGlmIChtYXRjaGVkRGlzaGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgXG4gICAgY29uc3QgcmVsYXRlZERpc2hlcyA9IHNlbGVjdGVkUmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpID09PSBmYWxzZSAmJiBcbiAgICAgIGRpc2gudHlwZSA9PT0gbWF0Y2hlZERpc2hlc1swXS50eXBlXG4gICAgKTtcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxEaXNoZXNcbiAgICAgICAgICBkaXNoZXM9e21hdGNoZWREaXNoZXN9XG4gICAgICAgICAgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9XG4gICAgICAgIC8+XG4gICAgICAgIHtyZWxhdGVkRGlzaGVzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PlJlbGF0ZWQgRGlzaGVzOjwvaDQ+XG4gICAgICAgICAgICA8RGlzaGVzXG4gICAgICAgICAgICAgIGRpc2hlcz17cmVsYXRlZERpc2hlc31cbiAgICAgICAgICAgICAgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuICBcbiAgXG4gIFxuICBjb25zdCByZW5kZXJEcmlua3MgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWREcmlua3MgPSBzZWxlY3RlZFJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcihcbiAgICAgIChkcmluaykgPT4gZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgaWYgKG1hdGNoZWREcmlua3MubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICBcbiAgICBjb25zdCByZWxhdGVkRHJpbmtzID0gc2VsZWN0ZWRSZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoXG4gICAgICAoZHJpbmspID0+ICFkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPERyaW5rcyBkcmlua3M9e21hdGNoZWREcmlua3N9IHJlc3RJZD17c2VsZWN0ZWRSZXN0YXVyYW50LmlkfSAvPlxuICAgICAgICB7cmVsYXRlZERyaW5rcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgzPlJlbGF0ZWQgRHJpbmtzPC9oMz5cbiAgICAgICAgICAgIDxEcmlua3MgZHJpbmtzPXtyZWxhdGVkRHJpbmtzfSByZXN0SWQ9e3NlbGVjdGVkUmVzdGF1cmFudC5pZH0gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG4gIFxuICBcblxuICBjb25zdCBzZWFyY2hRdWVyeSA9IGRhdGEucmVzdGF1cmFudHMuZmlsdGVyKChyZXN0YXVyYW50KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cbiAgICAgIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBjb25zdCBtYXRjaGVkUmVzdGF1cmFudCA9IHJlc3RhdXJhbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICByZXR1cm4gbWF0Y2hlZERpc2hlcy5sZW5ndGggPiAwIHx8IG1hdGNoZWREcmlua3MubGVuZ3RoID4gMCB8fCBtYXRjaGVkUmVzdGF1cmFudDtcbiAgfSk7XG5cblxuXG4gIGNvbnN0IHJlc3RMaXN0ID0gc2VhcmNoUXVlcnkubWFwKChyZXN0YXVyYW50KSA9PiAoXG4gICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlc3RhdXJhbnQuaWR9PlxuICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3YCArIHJlc3RhdXJhbnQuaW1hZ2UudXJsfVxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgPENhcmRUaXRsZT57cmVzdGF1cmFudC5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDxDYXJkVGV4dD57cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICBzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkXG4gICAgICAgICAgICAgICAgPyBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgOiBcImluZm9cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVzdGF1cmFudENsaWNrKHJlc3RhdXJhbnQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkXG4gICAgICAgICAgICAgID8gXCJDbG9zZVwiXG4gICAgICAgICAgICAgIDogXCJWaWV3IE1lbnVcIn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db2w+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3cgeHM9XCIzXCI+e3Jlc3RMaXN0fTwvUm93PlxuICAgICAgPFJvdyB4cz1cIjNcIj57cmVuZGVyRGlzaGVzKCl9PC9Sb3c+XG4gICAgICA8Um93IHhzPVwiM1wiPntyZW5kZXJEcmlua3MoKX08L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9