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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data === null || data === void 0 ? void 0 : data.restaurants),
      filteredRestaurants = _useState2[0],
      setFilteredRestaurants = _useState2[1];

  useEffect(function () {
    var newFilteredRestaurants = data.restaurants.filter(function (restaurant) {
      var matchedDishes = restaurant.dishes.filter(function (dish) {
        return dish.name.toLowerCase().includes(props.search);
      });
      var matchedDrinks = restaurant.drinks.filter(function (drink) {
        return drink.name.toLowerCase().includes(props.search);
      });
      return matchedDishes.length > 0 || matchedDrinks.length > 0;
    });
    setFilteredRestaurants(newFilteredRestaurants);
  }, [data, props.search]);

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedRestaurant = _useState3[0],
      setSelectedRestaurant = _useState3[1];

  try {
    if (loading) return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }, "Loading...");
    if (error) throw new Error(error);
    if (!data) return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }
    }, "Not found");
    console.log("Query Data: ".concat(data.restaurants)); // Rest of the code
  } catch (error) {
    console.error(error);
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 12
      }
    }, "Something went wrong...");
  }

  var handleRestaurantClick = function handleRestaurantClick(restaurant) {
    setSelectedRestaurant(restaurant);
  };

  var renderDishes = function renderDishes() {
    if (!selectedRestaurant) return null;
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 12
      }
    });
  };

  var renderDrinks = function renderDrinks() {
    if (!selectedRestaurant) return null;
    return __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 12
      }
    });
  };

  var renderMenu = function renderMenu(menu) {
    if (!selectedRestaurant) return null;
    return menu === "dishes" ? __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 32
      }
    }) : __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 76
      }
    });
  };

  var searchQuery = filteredRestaurants.filter(function (restaurant) {
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search);
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search);
    });
    return matchedDishes.length > 0 || matchedDrinks.length > 0;
  });
  var restList = searchQuery.map(function (restaurant) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: "6",
      sm: "4",
      key: restaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
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
        lineNumber: 97,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }, restaurant.description)), __jsx("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
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
        lineNumber: 107,
        columnNumber: 11
      }
    }, selectedRestaurant && selectedRestaurant.id === restaurant.id ? "Close" : "View Menu"))));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, renderDishes()), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, renderDrinks()));
}

_s(RestaurantList, "fa/Mu2BkllPm8alDbpnRjA2hpLs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwiZGF0YSIsInJlc3RhdXJhbnRzIiwiZmlsdGVyZWRSZXN0YXVyYW50cyIsInNldEZpbHRlcmVkUmVzdGF1cmFudHMiLCJ1c2VFZmZlY3QiLCJuZXdGaWx0ZXJlZFJlc3RhdXJhbnRzIiwiZmlsdGVyIiwicmVzdGF1cmFudCIsIm1hdGNoZWREaXNoZXMiLCJkaXNoZXMiLCJkaXNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJtYXRjaGVkRHJpbmtzIiwiZHJpbmtzIiwiZHJpbmsiLCJsZW5ndGgiLCJ1c2VRdWVyeSIsImxvYWRpbmciLCJlcnJvciIsInNlbGVjdGVkUmVzdGF1cmFudCIsInNldFNlbGVjdGVkUmVzdGF1cmFudCIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVJlc3RhdXJhbnRDbGljayIsInJlbmRlckRpc2hlcyIsImlkIiwicmVuZGVyRHJpbmtzIiwicmVuZGVyTWVudSIsIm1lbnUiLCJzZWFyY2hRdWVyeSIsInJlc3RMaXN0IiwibWFwIiwibWFyZ2luIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1pDLHdEQUFVLENBQUNDLGdEQUFELENBREU7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCOztBQUFBLGtCQUVIQyxzREFB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LE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlHZSxrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUNPLEVBQW5CLEtBQTBCdEIsVUFBVSxDQUFDc0IsRUFBM0QsR0FBZ0UsT0FBaEUsR0FBMEUsV0FKN0UsQ0FERixDQVZGLENBREYsQ0FEZ0M7QUFBQSxHQUFoQixDQUFsQjtBQXdCQSxTQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFLLFFBQWIsQ0FERixFQUVFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFOLFlBQVksRUFBekIsQ0FGRixFQUdFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFFLFlBQVksRUFBekIsQ0FIRixDQURGO0FBT0Q7O0dBckhReEMsYztVQTBDMEI2Qix1RDs7O0tBMUMxQjdCLGM7QUF1SE1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGMxY2E2NTFjZjgzYjA4OGRlYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgZGlzaGVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICAgICAgZHJpbmtzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IFtmaWx0ZXJlZFJlc3RhdXJhbnRzLCBzZXRGaWx0ZXJlZFJlc3RhdXJhbnRzXSA9IHVzZVN0YXRlKGRhdGE/LnJlc3RhdXJhbnRzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0ZpbHRlcmVkUmVzdGF1cmFudHMgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzdGF1cmFudCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlZERpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cbiAgICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IG1hdGNoZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoKGRyaW5rKSA9PlxuICAgICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBtYXRjaGVkRGlzaGVzLmxlbmd0aCA+IDAgfHwgbWF0Y2hlZERyaW5rcy5sZW5ndGggPiAwO1xuICAgIH0pO1xuICAgIHNldEZpbHRlcmVkUmVzdGF1cmFudHMobmV3RmlsdGVyZWRSZXN0YXVyYW50cyk7XG4gIH0sIFtkYXRhLCBwcm9wcy5zZWFyY2hdKTtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKTtcbiAgY29uc3QgW3NlbGVjdGVkUmVzdGF1cmFudCwgc2V0U2VsZWN0ZWRSZXN0YXVyYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHRyeSB7XG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcbiAgICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApO1xuICBcbiAgICAvLyBSZXN0IG9mIHRoZSBjb2RlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIDxwPlNvbWV0aGluZyB3ZW50IHdyb25nLi4uPC9wPjtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc3RhdXJhbnRDbGljayA9IChyZXN0YXVyYW50KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KHJlc3RhdXJhbnQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckRpc2hlcyA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUmVzdGF1cmFudCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIDxEaXNoZXMgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckRyaW5rcyA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUmVzdGF1cmFudCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIDxEcmlua3MgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1lbnUgPSAobWVudSkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRSZXN0YXVyYW50KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbWVudSA9PT0gXCJkaXNoZXNcIiA/IDxEaXNoZXMgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+IDogPERyaW5rcyByZXN0SWQ9e3NlbGVjdGVkUmVzdGF1cmFudC5pZH0gLz47XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBmaWx0ZXJlZFJlc3RhdXJhbnRzLmZpbHRlcigocmVzdGF1cmFudCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZWREaXNoZXMgPSByZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+XG4gICAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpXG4gICAgKTtcbiAgICBjb25zdCBtYXRjaGVkRHJpbmtzID0gcmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT5cbiAgICAgIGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpXG4gICAgKTtcbiAgICByZXR1cm4gbWF0Y2hlZERpc2hlcy5sZW5ndGggPiAwIHx8IG1hdGNoZWREcmlua3MubGVuZ3RoID4gMDtcbiAgfSk7XG5cbiAgY29uc3QgcmVzdExpc3QgPSAgc2VhcmNoUXVlcnkubWFwKChyZXN0YXVyYW50KSA9PiAoXG4gICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlc3RhdXJhbnQuaWR9PlxuICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3YCArIHJlc3RhdXJhbnQuaW1hZ2UudXJsfVxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgPENhcmRUaXRsZT57cmVzdGF1cmFudC5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDxDYXJkVGV4dD57cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29sb3I9e3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQgPyBcInNlY29uZGFyeVwiIDogXCJpbmZvXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXN0YXVyYW50Q2xpY2socmVzdGF1cmFudCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQgPyBcIkNsb3NlXCIgOiBcIlZpZXcgTWVudVwifVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0NvbD5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdyB4cz1cIjNcIj57cmVzdExpc3R9PC9Sb3c+XG4gICAgICA8Um93IHhzPVwiM1wiPntyZW5kZXJEaXNoZXMoKX08L1Jvdz5cbiAgICAgIDxSb3cgeHM9XCIzXCI+e3JlbmRlckRyaW5rcygpfTwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=