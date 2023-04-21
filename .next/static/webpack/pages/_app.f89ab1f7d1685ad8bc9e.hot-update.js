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

  var renderDishes = function renderDishes() {
    if (!selectedRestaurant) return null;
    var matchedDish = selectedRestaurant.dishes.find(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase());
    });
    if (!matchedDish) return null;
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: [matchedDish],
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }
    });
  };

  var renderDrinks = function renderDrinks() {
    if (!selectedRestaurant) return null;
    var matchedDrink = selectedRestaurant.drinks.find(function (drink) {
      return drink.name.toLowerCase().includes(props.search.toLowerCase());
    });
    if (!matchedDrink) return null;
    return __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: [matchedDrink],
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }
    });
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
        lineNumber: 96,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
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
        lineNumber: 98,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    }, restaurant.description)), __jsx("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
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
        lineNumber: 108,
        columnNumber: 11
      }
    }, selectedRestaurant && selectedRestaurant.id === restaurant.id ? "Close" : "View Menu"))));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, renderDishes()), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VsZWN0ZWRSZXN0YXVyYW50Iiwic2V0U2VsZWN0ZWRSZXN0YXVyYW50IiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwiaGFuZGxlUmVzdGF1cmFudENsaWNrIiwicmVzdGF1cmFudCIsImlkIiwicmVuZGVyRGlzaGVzIiwibWF0Y2hlZERpc2giLCJkaXNoZXMiLCJmaW5kIiwiZGlzaCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoIiwicmVuZGVyRHJpbmtzIiwibWF0Y2hlZERyaW5rIiwiZHJpbmtzIiwiZHJpbmsiLCJzZWFyY2hRdWVyeSIsImZpbHRlciIsIm1hdGNoZWREaXNoZXMiLCJtYXRjaGVkRHJpbmtzIiwibWF0Y2hlZFJlc3RhdXJhbnQiLCJsZW5ndGgiLCJyZXN0TGlzdCIsIm1hcCIsIm1hcmdpbiIsImhlaWdodCIsImltYWdlIiwidXJsIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUFBLG9CQUNaQyx3REFBVSxDQUFDQyxnREFBRCxDQURFO0FBQUEsTUFDckJDLElBRHFCLGVBQ3JCQSxJQURxQjs7QUFBQSxrQkFFSEMsc0RBQVEsQ0FBQ0QsSUFBRCxDQUZMO0FBQUEsTUFFdEJFLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7QUFH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QSxLQUFhbkIsWUFBWSxFQUF6QixDQUZGLEVBR0UsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYVMsWUFBWSxFQUF6QixDQUhGLENBREY7QUFPRDs7R0F0SFEvQixjO1VBNEIwQlUsdUQ7OztLQTVCMUJWLGM7QUF3SE1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjg5YWIxZjdkMTY4NWFkOGJjOWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgZGlzaGVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICAgICAgZHJpbmtzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUyk7XG4gIGNvbnN0IFtzZWxlY3RlZFJlc3RhdXJhbnQsIHNldFNlbGVjdGVkUmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHtjb25zb2xlLmxvZyhlcnJvcik7IHJldHVybiA8cD5FUlJPUjwvcD47fVxuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApO1xuXG4gIGNvbnN0IGhhbmRsZVJlc3RhdXJhbnRDbGljayA9IChyZXN0YXVyYW50KSA9PiB7XG4gIGlmIChzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkKSB7XG4gICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KG51bGwpO1xuICB9IGVsc2Uge1xuICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChyZXN0YXVyYW50KTtcbiAgfVxufTtcblxuXG5jb25zdCByZW5kZXJEaXNoZXMgPSAoKSA9PiB7XG4gIGlmICghc2VsZWN0ZWRSZXN0YXVyYW50KSByZXR1cm4gbnVsbDtcbiAgY29uc3QgbWF0Y2hlZERpc2ggPSBzZWxlY3RlZFJlc3RhdXJhbnQuZGlzaGVzLmZpbmQoKGRpc2gpID0+XG4gICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICk7XG4gIGlmICghbWF0Y2hlZERpc2gpIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxEaXNoZXNcbiAgICAgIGRpc2hlcz17W21hdGNoZWREaXNoXX1cbiAgICAgIHJlc3RJZD17c2VsZWN0ZWRSZXN0YXVyYW50LmlkfVxuICAgIC8+XG4gICk7XG59O1xuXG5cbmNvbnN0IHJlbmRlckRyaW5rcyA9ICgpID0+IHtcbiAgaWYgKCFzZWxlY3RlZFJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICBjb25zdCBtYXRjaGVkRHJpbmsgPSBzZWxlY3RlZFJlc3RhdXJhbnQuZHJpbmtzLmZpbmQoKGRyaW5rKSA9PlxuICAgIGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgKTtcbiAgaWYgKCFtYXRjaGVkRHJpbmspIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxEcmlua3NcbiAgICAgIGRyaW5rcz17W21hdGNoZWREcmlua119XG4gICAgICByZXN0SWQ9e3NlbGVjdGVkUmVzdGF1cmFudC5pZH1cbiAgICAvPlxuICApO1xufTtcblxuXG5jb25zdCBzZWFyY2hRdWVyeSA9IGRhdGEucmVzdGF1cmFudHMuZmlsdGVyKChyZXN0YXVyYW50KSA9PiB7XG4gIGNvbnN0IG1hdGNoZWREaXNoZXMgPSByZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+XG4gICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICk7XG4gIGNvbnN0IG1hdGNoZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoKGRyaW5rKSA9PlxuICAgIGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgKTtcbiAgY29uc3QgbWF0Y2hlZFJlc3RhdXJhbnQgPSByZXN0YXVyYW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gIHJldHVybiBtYXRjaGVkRGlzaGVzLmxlbmd0aCA+IDAgfHwgbWF0Y2hlZERyaW5rcy5sZW5ndGggPiAwIHx8IG1hdGNoZWRSZXN0YXVyYW50O1xufSk7XG5cblxuICBjb25zdCByZXN0TGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzdGF1cmFudCkgPT4gKFxuICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXN0YXVyYW50LmlkfT5cbiAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAuNXJlbSAyMHB4IDAuNXJlbVwiIH19PlxuICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDIwMCB9fVxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzN2AgKyByZXN0YXVyYW50LmltYWdlLnVybH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlc3RhdXJhbnQubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICA8Q2FyZFRleHQ+e3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbG9yPXtzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkID8gXCJzZWNvbmRhcnlcIiA6IFwiaW5mb1wifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVzdGF1cmFudENsaWNrKHJlc3RhdXJhbnQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkID8gXCJDbG9zZVwiIDogXCJWaWV3IE1lbnVcIn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db2w+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3cgeHM9XCIzXCI+e3Jlc3RMaXN0fTwvUm93PlxuICAgICAgPFJvdyB4cz1cIjNcIj57cmVuZGVyRGlzaGVzKCl9PC9Sb3c+XG4gICAgICA8Um93IHhzPVwiM1wiPntyZW5kZXJEcmlua3MoKX08L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9