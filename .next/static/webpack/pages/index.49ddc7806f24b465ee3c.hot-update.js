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

    var renderDishes = function renderDishes() {
      if (!selectedRestaurant) return null;
      var matchedDishes = selectedRestaurant.dishes.filter(function (dish) {
        return dish.name.toLowerCase().includes(props.search.toLowerCase());
      });
      if (matchedDishes.length === 0) return null; // Get all dishes with the same type as the matched dish

      var matchedType = matchedDishes[0].type;
      var matchedTypeDishes = selectedRestaurant.dishes.filter(function (dish) {
        return dish.type === matchedType && !dish.name.toLowerCase().includes(props.search.toLowerCase());
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
        dishes: matchedDishes,
        restId: selectedRestaurant.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }), matchedTypeDishes.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 15
        }
      }, "Related Dishes"), __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
        dishes: matchedTypeDishes,
        restId: selectedRestaurant.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }
      })));
    };

    var renderDrinks = function renderDrinks() {
      if (!selectedRestaurant) return null;
      var matchedDrinks = selectedRestaurant.drinks.filter(function (drink) {
        return drink.name.toLowerCase().includes(props.search.toLowerCase());
      });
      if (matchedDrinks.length === 0) return null; // Get all drinks with the same type as the matched drink

      var matchedType = matchedDrinks[0].type;
      var matchedTypeDrinks = selectedRestaurant.drinks.filter(function (drink) {
        return drink.type === matchedType && !drink.name.toLowerCase().includes(props.search.toLowerCase());
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
        drinks: matchedDrinks,
        restId: selectedRestaurant.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }), matchedTypeDrinks.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }
      }, "Related Drinks"), __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
        drinks: matchedTypeDrinks,
        restId: selectedRestaurant.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 15
        }
      })));
    };

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: matchedDrinks,
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }
    }), relatedDrinks.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 13
      }
    }, "Related Drinks"), __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: relatedDrinks,
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
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
        lineNumber: 159,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
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
        lineNumber: 161,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 11
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }, restaurant.description)), __jsx("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
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
        lineNumber: 171,
        columnNumber: 11
      }
    }, selectedRestaurant && selectedRestaurant.id === restaurant.id ? "Close" : "View Menu"))));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }, renderDishes()), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VsZWN0ZWRSZXN0YXVyYW50Iiwic2V0U2VsZWN0ZWRSZXN0YXVyYW50IiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwiaGFuZGxlUmVzdGF1cmFudENsaWNrIiwicmVzdGF1cmFudCIsImlkIiwicmVuZGVyRGlzaGVzIiwibWF0Y2hlZERpc2hlcyIsImRpc2hlcyIsImZpbHRlciIsImRpc2giLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsImxlbmd0aCIsInJlbGF0ZWREaXNoZXMiLCJ0eXBlIiwibWF0Y2hlZFR5cGUiLCJtYXRjaGVkVHlwZURpc2hlcyIsInJlbmRlckRyaW5rcyIsIm1hdGNoZWREcmlua3MiLCJkcmlua3MiLCJkcmluayIsIm1hdGNoZWRUeXBlRHJpbmtzIiwicmVsYXRlZERyaW5rcyIsInNlYXJjaFF1ZXJ5IiwibWF0Y2hlZFJlc3RhdXJhbnQiLCJyZXN0TGlzdCIsIm1hcCIsIm1hcmdpbiIsImhlaWdodCIsImltYWdlIiwidXJsIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUFBLG9CQUNaQyx3REFBVSxDQUFDQyxnREFBRCxDQURFO0FBQUEsTUFDckJDLElBRHFCLGVBQ3JCQSxJQURxQjs7QUFBQSxrQkFFSEMsc0RB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QWpCO0FBOEJBLFNBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYXVCLFFBQWIsQ0FERixFQUVFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWF0QixZQUFZLEVBQXpCLENBRkYsRUFHRSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhYyxZQUFZLEVBQXpCLENBSEYsQ0FERjtBQU9EOztHQTNMUXBDLGM7VUEyQjBCVSx1RDs7O0tBM0IxQlYsYztBQTZMTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDlkZGM3ODA2ZjI0YjQ2NWVlM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgZGlzaGVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICAgICAgZHJpbmtzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUyk7XG4gIGNvbnN0IFtzZWxlY3RlZFJlc3RhdXJhbnQsIHNldFNlbGVjdGVkUmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIDxwPkVSUk9SPC9wPjtcbiAgfVxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApO1xuICBjb25zdCBoYW5kbGVSZXN0YXVyYW50Q2xpY2sgPSAocmVzdGF1cmFudCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkKSB7XG4gICAgICBzZXRTZWxlY3RlZFJlc3RhdXJhbnQobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChyZXN0YXVyYW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRGlzaGVzID0gKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRSZXN0YXVyYW50KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gc2VsZWN0ZWRSZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+XG4gICAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIGlmIChtYXRjaGVkRGlzaGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgXG4gICAgY29uc3QgcmVsYXRlZERpc2hlcyA9IHNlbGVjdGVkUmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpID09PSBmYWxzZSAmJiBcbiAgICAgIGRpc2gudHlwZSA9PT0gbWF0Y2hlZERpc2hlc1swXS50eXBlXG4gICAgKTtcbiAgXG4gICAgY29uc3QgcmVuZGVyRGlzaGVzID0gKCkgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZFJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHNlbGVjdGVkUmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG4gICAgICBpZiAobWF0Y2hlZERpc2hlcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIFxuICAgICAgLy8gR2V0IGFsbCBkaXNoZXMgd2l0aCB0aGUgc2FtZSB0eXBlIGFzIHRoZSBtYXRjaGVkIGRpc2hcbiAgICAgIGNvbnN0IG1hdGNoZWRUeXBlID0gbWF0Y2hlZERpc2hlc1swXS50eXBlO1xuICAgICAgY29uc3QgbWF0Y2hlZFR5cGVEaXNoZXMgPSBzZWxlY3RlZFJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cbiAgICAgICAgZGlzaC50eXBlID09PSBtYXRjaGVkVHlwZSAmJiAhZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RGlzaGVzXG4gICAgICAgICAgICBkaXNoZXM9e21hdGNoZWREaXNoZXN9XG4gICAgICAgICAgICByZXN0SWQ9e3NlbGVjdGVkUmVzdGF1cmFudC5pZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHttYXRjaGVkVHlwZURpc2hlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxoMz5SZWxhdGVkIERpc2hlczwvaDM+XG4gICAgICAgICAgICAgIDxEaXNoZXNcbiAgICAgICAgICAgICAgICBkaXNoZXM9e21hdGNoZWRUeXBlRGlzaGVzfVxuICAgICAgICAgICAgICAgIHJlc3RJZD17c2VsZWN0ZWRSZXN0YXVyYW50LmlkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgcmVuZGVyRHJpbmtzID0gKCkgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZFJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHNlbGVjdGVkUmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT5cbiAgICAgICAgZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICAgKTtcbiAgICAgIGlmIChtYXRjaGVkRHJpbmtzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgXG4gICAgICAvLyBHZXQgYWxsIGRyaW5rcyB3aXRoIHRoZSBzYW1lIHR5cGUgYXMgdGhlIG1hdGNoZWQgZHJpbmtcbiAgICAgIGNvbnN0IG1hdGNoZWRUeXBlID0gbWF0Y2hlZERyaW5rc1swXS50eXBlO1xuICAgICAgY29uc3QgbWF0Y2hlZFR5cGVEcmlua3MgPSBzZWxlY3RlZFJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICAgIGRyaW5rLnR5cGUgPT09IG1hdGNoZWRUeXBlICYmICFkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RHJpbmtzXG4gICAgICAgICAgICBkcmlua3M9e21hdGNoZWREcmlua3N9XG4gICAgICAgICAgICByZXN0SWQ9e3NlbGVjdGVkUmVzdGF1cmFudC5pZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHttYXRjaGVkVHlwZURyaW5rcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxoMz5SZWxhdGVkIERyaW5rczwvaDM+XG4gICAgICAgICAgICAgIDxEcmlua3NcbiAgICAgICAgICAgICAgICBkcmlua3M9e21hdGNoZWRUeXBlRHJpbmtzfVxuICAgICAgICAgICAgICAgIHJlc3RJZD17c2VsZWN0ZWRSZXN0YXVyYW50LmlkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH07XG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxEcmlua3MgZHJpbmtzPXttYXRjaGVkRHJpbmtzfSByZXN0SWQ9e3NlbGVjdGVkUmVzdGF1cmFudC5pZH0gLz5cbiAgICAgICAge3JlbGF0ZWREcmlua3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMz5SZWxhdGVkIERyaW5rczwvaDM+XG4gICAgICAgICAgICA8RHJpbmtzIGRyaW5rcz17cmVsYXRlZERyaW5rc30gcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuICBcbiAgXG5cbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzdGF1cmFudCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZWREaXNoZXMgPSByZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+XG4gICAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIGNvbnN0IG1hdGNoZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoKGRyaW5rKSA9PlxuICAgICAgZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgY29uc3QgbWF0Y2hlZFJlc3RhdXJhbnQgPSByZXN0YXVyYW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIG1hdGNoZWREaXNoZXMubGVuZ3RoID4gMCB8fCBtYXRjaGVkRHJpbmtzLmxlbmd0aCA+IDAgfHwgbWF0Y2hlZFJlc3RhdXJhbnQ7XG4gIH0pO1xuXG5cblxuICBjb25zdCByZXN0TGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzdGF1cmFudCkgPT4gKFxuICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXN0YXVyYW50LmlkfT5cbiAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAuNXJlbSAyMHB4IDAuNXJlbVwiIH19PlxuICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDIwMCB9fVxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzN2AgKyByZXN0YXVyYW50LmltYWdlLnVybH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlc3RhdXJhbnQubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICA8Q2FyZFRleHQ+e3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSZXN0YXVyYW50ICYmIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZFxuICAgICAgICAgICAgICAgID8gXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIDogXCJpbmZvXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlc3RhdXJhbnRDbGljayhyZXN0YXVyYW50KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VsZWN0ZWRSZXN0YXVyYW50ICYmIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZFxuICAgICAgICAgICAgICA/IFwiQ2xvc2VcIlxuICAgICAgICAgICAgICA6IFwiVmlldyBNZW51XCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29sPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Um93IHhzPVwiM1wiPntyZXN0TGlzdH08L1Jvdz5cbiAgICAgIDxSb3cgeHM9XCIzXCI+e3JlbmRlckRpc2hlcygpfTwvUm93PlxuICAgICAgPFJvdyB4cz1cIjNcIj57cmVuZGVyRHJpbmtzKCl9PC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==