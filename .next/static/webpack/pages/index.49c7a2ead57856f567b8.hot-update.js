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

  var renderDishes = function renderDishes() {
    if (!selectedRestaurant) return null;
    var filteredDishes = selectedRestaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search);
    });
    if (!filteredDishes.length) return null; // return null if no matching dishes found

    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: filteredDishes,
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 12
      }
    });
  };

  var renderDrinks = function renderDrinks() {
    if (!selectedRestaurant) return null;
    var filteredDrinks = selectedRestaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search);
    });
    if (!filteredDrinks.length) return null; // return null if no matching drinks found

    return __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: filteredDrinks,
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 12
      }
    });
  };

  var restList = data.restaurants.filter(function (restaurant) {
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search);
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search);
    });
    var matchedRestaurant = restaurant.name.toLowerCase().includes(props.search);

    if (props.search) {
      return matchedDishes.length > 0 || matchedDrinks.length > 0 || matchedRestaurant;
    }

    return true;
  }).map(function (restaurant) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: "6",
      sm: "4",
      key: restaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
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
        lineNumber: 88,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, restaurant.description)), __jsx("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
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
        lineNumber: 98,
        columnNumber: 11
      }
    }, selectedRestaurant && selectedRestaurant.id === restaurant.id ? "Close" : "View Menu"))));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, renderDishes()), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VsZWN0ZWRSZXN0YXVyYW50Iiwic2V0U2VsZWN0ZWRSZXN0YXVyYW50IiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwiaGFuZGxlUmVzdGF1cmFudENsaWNrIiwicmVzdGF1cmFudCIsImlkIiwicmVuZGVyRGlzaGVzIiwiZmlsdGVyZWREaXNoZXMiLCJkaXNoZXMiLCJmaWx0ZXIiLCJkaXNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJsZW5ndGgiLCJyZW5kZXJEcmlua3MiLCJmaWx0ZXJlZERyaW5rcyIsImRyaW5rcyIsImRyaW5rIiwicmVzdExpc3QiLCJtYXRjaGVkRGlzaGVzIiwibWF0Y2hlZERyaW5rcyIsIm1hdGNoZWRSZXN0YXVyYW50IiwibWFwIiwibWFyZ2luIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1pDLHdEQUFVLENBQUNDLGdEQUFELENBREU7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCOztBQUFBLGtCQUVIQyxzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV0QkUsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUc3QixNQUFNQyxlQUFlLEdB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QUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFVLFlBQVksRUFBekIsQ0FIRixDQURGO0FBT0Q7O0dBNUdRaEMsYztVQTRCMEJVLHVEOzs7S0E1QjFCVixjO0FBOEdNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40OWM3YTJlYWQ1Nzg1NmY1NjdiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgRGlzaGVzIGZyb20gXCIuL2Rpc2hlc1wiO1xuaW1wb3J0IERyaW5rcyBmcm9tIFwiLi9kcmlua3NcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRJbWcsIENhcmRUZXh0LCBDYXJkVGl0bGUsIENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcblxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpIHtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGNhcnQpO1xuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBkaXNoZXMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgfVxuICAgICAgICBkcmlua3Mge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKTtcbiAgY29uc3QgW3NlbGVjdGVkUmVzdGF1cmFudCwgc2V0U2VsZWN0ZWRSZXN0YXVyYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikge2NvbnNvbGUubG9nKGVycm9yKTsgcmV0dXJuIDxwPkVSUk9SPC9wPjt9XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG4gIGNvbnNvbGUubG9nKGBRdWVyeSBEYXRhOiAke2RhdGEucmVzdGF1cmFudHN9YCk7XG5cbiAgY29uc3QgaGFuZGxlUmVzdGF1cmFudENsaWNrID0gKHJlc3RhdXJhbnQpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRSZXN0YXVyYW50ICYmIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZCkge1xuICAgICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZFJlc3RhdXJhbnQocmVzdGF1cmFudCk7XG4gICAgfVxuICB9O1xuICBcblxuICBjb25zdCByZW5kZXJEaXNoZXMgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGZpbHRlcmVkRGlzaGVzID0gc2VsZWN0ZWRSZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+XG4gICAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpXG4gICAgKTtcbiAgICBpZiAoIWZpbHRlcmVkRGlzaGVzLmxlbmd0aCkgcmV0dXJuIG51bGw7IC8vIHJldHVybiBudWxsIGlmIG5vIG1hdGNoaW5nIGRpc2hlcyBmb3VuZFxuICAgIHJldHVybiA8RGlzaGVzIGRpc2hlcz17ZmlsdGVyZWREaXNoZXN9IHJlc3RJZD17c2VsZWN0ZWRSZXN0YXVyYW50LmlkfSAvPjtcbiAgfTtcbiAgXG4gIGNvbnN0IHJlbmRlckRyaW5rcyA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUmVzdGF1cmFudCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZmlsdGVyZWREcmlua3MgPSBzZWxlY3RlZFJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICAgICk7XG4gICAgaWYgKCFmaWx0ZXJlZERyaW5rcy5sZW5ndGgpIHJldHVybiBudWxsOyAvLyByZXR1cm4gbnVsbCBpZiBubyBtYXRjaGluZyBkcmlua3MgZm91bmRcbiAgICByZXR1cm4gPERyaW5rcyBkcmlua3M9e2ZpbHRlcmVkRHJpbmtzfSByZXN0SWQ9e3NlbGVjdGVkUmVzdGF1cmFudC5pZH0gLz47XG4gIH07XG4gIFxuICBcblxuICBjb25zdCByZXN0TGlzdCA9IGRhdGEucmVzdGF1cmFudHMuZmlsdGVyKChyZXN0YXVyYW50KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cbiAgICAgIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaClcbiAgICApO1xuICAgIGNvbnN0IG1hdGNoZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoKGRyaW5rKSA9PlxuICAgICAgZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaClcbiAgICApO1xuICAgIGNvbnN0IG1hdGNoZWRSZXN0YXVyYW50ID0gcmVzdGF1cmFudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKTtcbiAgICBpZiAocHJvcHMuc2VhcmNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlZERpc2hlcy5sZW5ndGggPiAwIHx8IG1hdGNoZWREcmlua3MubGVuZ3RoID4gMCB8fCBtYXRjaGVkUmVzdGF1cmFudDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pLm1hcCgocmVzdGF1cmFudCkgPT4gKFxuICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXN0YXVyYW50LmlkfT5cbiAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCIwIDAuNXJlbSAyMHB4IDAuNXJlbVwiIH19PlxuICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDIwMCB9fVxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzN2AgKyByZXN0YXVyYW50LmltYWdlLnVybH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlc3RhdXJhbnQubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICA8Q2FyZFRleHQ+e3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbG9yPXtzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkID8gXCJzZWNvbmRhcnlcIiA6IFwiaW5mb1wifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVzdGF1cmFudENsaWNrKHJlc3RhdXJhbnQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkID8gXCJDbG9zZVwiIDogXCJWaWV3IE1lbnVcIn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Db2w+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3cgeHM9XCIzXCI+e3Jlc3RMaXN0fTwvUm93PlxuICAgICAgPFJvdyB4cz1cIjNcIj57cmVuZGVyRGlzaGVzKCl9PC9Sb3c+XG4gICAgICA8Um93IHhzPVwiM1wiPntyZW5kZXJEcmlua3MoKX08L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9