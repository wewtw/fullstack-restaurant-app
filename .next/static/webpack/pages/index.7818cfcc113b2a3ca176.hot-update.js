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
        lineNumber: 39,
        columnNumber: 42
      }
    }, "ERROR");
  }

  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
    if (props.search && !filteredDishes.length) return null;
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: filteredDishes,
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 12
      }
    });
  };

  var renderDrinks = function renderDrinks() {
    if (!selectedRestaurant) return null;
    var filteredDrinks = selectedRestaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search);
    });
    if (props.search && !filteredDrinks.length) return null;
    return __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: filteredDrinks,
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 12
      }
    });
  };

  var restList = data.restaurants.filter(function (restaurant) {
    var matchedRestaurant = restaurant.name.toLowerCase().includes(props.search);
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search);
    }).length > 0;
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search);
    }).length > 0;

    if (props.search) {
      return matchedRestaurant || matchedDishes || matchedDrinks;
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
        lineNumber: 79,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
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
        lineNumber: 81,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }, restaurant.description)), __jsx("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
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
        lineNumber: 91,
        columnNumber: 11
      }
    }, selectedRestaurant && selectedRestaurant.id === restaurant.id ? "Close" : "View Menu"))));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, renderDishes()), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VsZWN0ZWRSZXN0YXVyYW50Iiwic2V0U2VsZWN0ZWRSZXN0YXVyYW50IiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwiaGFuZGxlUmVzdGF1cmFudENsaWNrIiwicmVzdGF1cmFudCIsImlkIiwicmVuZGVyRGlzaGVzIiwiZmlsdGVyZWREaXNoZXMiLCJkaXNoZXMiLCJmaWx0ZXIiLCJkaXNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJsZW5ndGgiLCJyZW5kZXJEcmlua3MiLCJmaWx0ZXJlZERyaW5rcyIsImRyaW5rcyIsImRyaW5rIiwicmVzdExpc3QiLCJtYXRjaGVkUmVzdGF1cmFudCIsIm1hdGNoZWREaXNoZXMiLCJtYXRjaGVkRHJpbmtzIiwibWFwIiwibWFyZ2luIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1pDLHdEQUFVLENBQUNDLGdEQUFELENBREU7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCOztBQUFBLGtCQUVIQyxzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV0QkUsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUc3QixNQUFNQyxlQUFlLEdB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QUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFVLFlBQVksRUFBekIsQ0FIRixDQURGO0FBT0Q7O0dBdEdRaEMsYztVQTJCMEJVLHVEOzs7S0EzQjFCVixjO0FBd0dNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ODE4Y2ZjYzExM2IyYTNjYTE3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgRGlzaGVzIGZyb20gXCIuL2Rpc2hlc1wiO1xuaW1wb3J0IERyaW5rcyBmcm9tIFwiLi9kcmlua3NcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRJbWcsIENhcmRUZXh0LCBDYXJkVGl0bGUsIENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcblxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpIHtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGNhcnQpO1xuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBkaXNoZXMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgfVxuICAgICAgICBkcmlua3Mge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKTtcbiAgY29uc3QgW3NlbGVjdGVkUmVzdGF1cmFudCwgc2V0U2VsZWN0ZWRSZXN0YXVyYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikge2NvbnNvbGUubG9nKGVycm9yKTsgcmV0dXJuIDxwPkVSUk9SPC9wPjt9XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG4gIGNvbnNvbGUubG9nKGBRdWVyeSBEYXRhOiAke2RhdGEucmVzdGF1cmFudHN9YCk7XG5cbiAgY29uc3QgaGFuZGxlUmVzdGF1cmFudENsaWNrID0gKHJlc3RhdXJhbnQpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRSZXN0YXVyYW50ICYmIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZCkge1xuICAgICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZFJlc3RhdXJhbnQocmVzdGF1cmFudCk7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgcmVuZGVyRGlzaGVzID0gKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRSZXN0YXVyYW50KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBmaWx0ZXJlZERpc2hlcyA9IHNlbGVjdGVkUmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICAgICk7XG4gICAgaWYgKHByb3BzLnNlYXJjaCAmJiAhZmlsdGVyZWREaXNoZXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gPERpc2hlcyBkaXNoZXM9e2ZpbHRlcmVkRGlzaGVzfSByZXN0SWQ9e3NlbGVjdGVkUmVzdGF1cmFudC5pZH0gLz47XG4gIH07XG4gIFxuICBjb25zdCByZW5kZXJEcmlua3MgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGZpbHRlcmVkRHJpbmtzID0gc2VsZWN0ZWRSZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoKGRyaW5rKSA9PlxuICAgICAgZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaClcbiAgICApO1xuICAgIGlmIChwcm9wcy5zZWFyY2ggJiYgIWZpbHRlcmVkRHJpbmtzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIDxEcmlua3MgZHJpbmtzPXtmaWx0ZXJlZERyaW5rc30gcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+O1xuICB9O1xuICBcbiAgY29uc3QgcmVzdExpc3QgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzdGF1cmFudCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZWRSZXN0YXVyYW50ID0gcmVzdGF1cmFudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKTtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PiBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpKS5sZW5ndGggPiAwO1xuICAgIGNvbnN0IG1hdGNoZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoKGRyaW5rKSA9PiBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKSkubGVuZ3RoID4gMDtcbiAgICBcbiAgICBpZiAocHJvcHMuc2VhcmNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlZFJlc3RhdXJhbnQgfHwgbWF0Y2hlZERpc2hlcyB8fCBtYXRjaGVkRHJpbmtzO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSkubWFwKChyZXN0YXVyYW50KSA9PiAoXG4gICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlc3RhdXJhbnQuaWR9PlxuICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3YCArIHJlc3RhdXJhbnQuaW1hZ2UudXJsfVxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgPENhcmRUaXRsZT57cmVzdGF1cmFudC5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDxDYXJkVGV4dD57cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29sb3I9e3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQgPyBcInNlY29uZGFyeVwiIDogXCJpbmZvXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXN0YXVyYW50Q2xpY2socmVzdGF1cmFudCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQgPyBcIkNsb3NlXCIgOiBcIlZpZXcgTWVudVwifVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbD5cbiAgKSk7XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3cgeHM9XCIzXCI+e3Jlc3RMaXN0fTwvUm93PlxuICAgICAgPFJvdyB4cz1cIjNcIj57cmVuZGVyRGlzaGVzKCl9PC9Sb3c+XG4gICAgICA8Um93IHhzPVwiM1wiPntyZW5kZXJEcmlua3MoKX08L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9