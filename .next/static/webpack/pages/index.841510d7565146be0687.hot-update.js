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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\components\\restaurantList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Restaurants {\n    restaurants {\n      id\n      name\n      description\n      image {\n        url\n      }\n      dishes {\n        id\n        name\n        description\n        price\n        image {\n          url\n        }\n      }\n      drinks {\n        id\n        name\n        description\n        price\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var RestaurantList = function RestaurantList() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedRestaurant = _useState[0],
      setSelectedRestaurant = _useState[1];

  var RESTAURANTS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      searchTerm = _useState2[0],
      setSearchTerm = _useState2[1];

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(RESTAURANTS_QUERY),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Error: ", error.message);

  var handleSearch = function handleSearch(event) {
    setSearchTerm(event.target.value.toLowerCase());
  };

  var searchQuery = data.restaurants.filter(function (restaurant) {
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(searchTerm);
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(searchTerm);
    });
    var matchedRestaurant = restaurant.name.toLowerCase().includes(searchTerm);
    return matchedDishes.length > 0 || matchedDrinks.length > 0 || matchedRestaurant;
  });
  var restList = searchQuery.map(function (restaurant) {
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(searchTerm);
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(searchTerm);
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: "6",
      sm: "4",
      key: restaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
      top: true,
      style: {
        height: 200
      },
      src: "http://localhost:1337".concat(restaurant.image.url),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, restaurant.description), matchedDishes.length > 0 && __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }, "Dishes:"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, matchedDishes.map(function (dish) {
      return __jsx("li", {
        key: dish.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }, dish.name, " - $", dish.price);
    }))), matchedDrinks.length > 0 && __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, "Drinks:"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, matchedDrinks.map(function (drink) {
      return __jsx("li", {
        key: drink.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }
      }, drink.name, " - $", drink.price);
    })))), __jsx("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: selectedRestaurant && selectedRestaurant.id === restaurant.id ? "secondary" : "info",
      onClick: function onClick() {
        return setSelectedRestaurant(restaurant);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, "View Details"))));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      marginBottom: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    placeholder: "Search",
    onChange: handleSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, restList));
};

_s(RestaurantList, "vA/2Cx8BBRErVWCsbLqmJ9TOTwk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInVzZVN0YXRlIiwic2VsZWN0ZWRSZXN0YXVyYW50Iiwic2V0U2VsZWN0ZWRSZXN0YXVyYW50IiwiUkVTVEFVUkFOVFNfUVVFUlkiLCJncWwiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJzZWFyY2hRdWVyeSIsInJlc3RhdXJhbnRzIiwiZmlsdGVyIiwicmVzdGF1cmFudCIsIm1hdGNoZWREaXNoZXMiLCJkaXNoZXMiLCJkaXNoIiwibmFtZSIsImluY2x1ZGVzIiwibWF0Y2hlZERyaW5rcyIsImRyaW5rcyIsImRyaW5rIiwibWF0Y2hlZFJlc3RhdXJhbnQiLCJsZW5ndGgiLCJyZXN0TGlzdCIsIm1hcCIsImlkIiwibWFyZ2luIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ3lCQyxzREFBUSxDQUFDLElBQUQsQ0FEakM7QUFBQSxNQUNwQkMsa0JBRG9CO0FBQUEsTUFDQUMscUJBREE7O0FBRTNCLE1BQU1DLGlCQUFpQixHQUFHQywwREFBSCxtQkFBdkI7O0FBRjJCLG1CQTZCU0osc0RBQVEsQ0FBQyxFQUFELENBN0JqQjtBQUFBLE1BNkJwQkssVUE3Qm9CO0FBQUEsTUE2QlJDLGFBN0JROztBQUFBLGtCQThCTUMsK0RBQVEsQ0FBQ0osaUJBQUQsQ0E5QmQ7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaURBQUQ7QUFDRSxXQUFLLEVBQUV0QyxrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUNnQyxFQUFuQixLQUEwQmIsVUFBVSxDQUFDYSxFQUEzRCxHQUFnRSxXQUFoRSxHQUE4RSxNQUR2RjtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU0vQixxQkFBcUIsQ0FBQ2tCLFVBQUQsQ0FBM0I7QUFBQSxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0E5QkYsQ0FERixDQURGO0FBMkNELEdBbkRnQixDQUFqQjtBQXFEQSxTQUNFLG1FQUNFLE1BQUMsOENBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBRW9CLGtCQUFZLEVBQUU7QUFBaEIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBQyxRQUEvQjtBQUF3QyxZQUFRLEVBQUU1QixZQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1tQixRQUFOLENBTkYsQ0FERjtBQVVELENBbEhEOztHQUFNaEMsYztVQThCNkJRLHVEOzs7S0E5QjdCUixjO0FBb0hTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NDE1MTBkNzU2NTE0NmJlMDY4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQnV0dG9uLCBDb2wsIFJvdywgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBSZXN0YXVyYW50TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkUmVzdGF1cmFudCwgc2V0U2VsZWN0ZWRSZXN0YXVyYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBSRVNUQVVSQU5UU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgUmVzdGF1cmFudHMge1xuICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgaW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICAgIGRpc2hlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgcHJpY2VcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkcmlua3Mge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIHByaWNlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoUkVTVEFVUkFOVFNfUVVFUlkpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlc3RhdXJhbnQpID0+IHtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybSlcbiAgICApO1xuICAgIGNvbnN0IG1hdGNoZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoKGRyaW5rKSA9PlxuICAgICAgZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0pXG4gICAgKTtcbiAgICBjb25zdCBtYXRjaGVkUmVzdGF1cmFudCA9IHJlc3RhdXJhbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZWREaXNoZXMubGVuZ3RoID4gMCB8fCBtYXRjaGVkRHJpbmtzLmxlbmd0aCA+IDAgfHwgbWF0Y2hlZFJlc3RhdXJhbnQ7XG4gIH0pO1xuXG4gIGNvbnN0IHJlc3RMaXN0ID0gc2VhcmNoUXVlcnkubWFwKChyZXN0YXVyYW50KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cbiAgICAgIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0pXG4gICAgKTtcbiAgICBjb25zdCBtYXRjaGVkRHJpbmtzID0gcmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT5cbiAgICAgIGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtKVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlc3RhdXJhbnQuaWR9PlxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cbiAgICAgICAgICA8Q2FyZEltZyB0b3A9e3RydWV9IHN0eWxlPXt7IGhlaWdodDogMjAwIH19IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cmVzdGF1cmFudC5pbWFnZS51cmx9YH0gLz5cbiAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlPntyZXN0YXVyYW50Lm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICAgIHttYXRjaGVkRGlzaGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoNT5EaXNoZXM6PC9oNT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7bWF0Y2hlZERpc2hlcy5tYXAoKGRpc2gpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZGlzaC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAge2Rpc2gubmFtZX0gLSAke2Rpc2gucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bWF0Y2hlZERyaW5rcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDU+RHJpbmtzOjwvaDU+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge21hdGNoZWREcmlua3MubWFwKChkcmluaykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtkcmluay5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAge2RyaW5rLm5hbWV9IC0gJHtkcmluay5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29sb3I9e3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQgPyBcInNlY29uZGFyeVwiIDogXCJpbmZvXCJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUmVzdGF1cmFudChyZXN0YXVyYW50KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9Db2w+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxuICAgICAgICA8Q29sPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH0gLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+e3Jlc3RMaXN0fTwvUm93PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9