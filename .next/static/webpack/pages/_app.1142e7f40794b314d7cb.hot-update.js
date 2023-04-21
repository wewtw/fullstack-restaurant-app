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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      filteredRestaurants = _useState2[0],
      setFilteredRestaurants = _useState2[1];

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
        lineNumber: 42,
        columnNumber: 25
      }
    }, "Loading...");
    if (error) throw new Error(error);
    if (!data) return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 23
      }
    }, "Not found");
    console.log("Query Data: ".concat(data.restaurants));
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
        margin: "0.5rem 20px 0.5rem"
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
      src: "http://localhost:1337 + restaurant.image.url",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 1
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 1
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 1
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 1
      }
    }, restaurant.description)), __jsx("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 1
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      color: selectedRestaurant && selectedRestaurant.id === restaurant.id ? "secondary" : "info",
      onClick: function onClick() {
        return handleRestaurantClick(restaurant);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 1
      }
    }, selectedRestaurant && selectedRestaurant.id === restaurant.id ? "Close" : "View Menu"))));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 1
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 1
    }
  }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 1
    }
  }, renderDishes()), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 1
    }
  }, renderDrinks()));
}

_s(RestaurantList, "dHFcPkirlY90obZ4Juj4ngO9jzg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwiZmlsdGVyZWRSZXN0YXVyYW50cyIsInNldEZpbHRlcmVkUmVzdGF1cmFudHMiLCJ1c2VRdWVyeSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJzZWxlY3RlZFJlc3RhdXJhbnQiLCJzZXRTZWxlY3RlZFJlc3RhdXJhbnQiLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXN0YXVyYW50cyIsInVzZUVmZmVjdCIsIm5ld0ZpbHRlcmVkUmVzdGF1cmFudHMiLCJmaWx0ZXIiLCJyZXN0YXVyYW50IiwibWF0Y2hlZERpc2hlcyIsImRpc2hlcyIsImRpc2giLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsIm1hdGNoZWREcmlua3MiLCJkcmlua3MiLCJkcmluayIsImxlbmd0aCIsImhhbmRsZVJlc3RhdXJhbnRDbGljayIsInJlbmRlckRpc2hlcyIsImlkIiwicmVuZGVyRHJpbmtzIiwicmVuZGVyTWVudSIsIm1lbnUiLCJzZWFyY2hRdWVyeSIsInJlc3RMaXN0IiwibWFwIiwibWFyZ2luIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUFBLG9CQUNaQyx3REFBVSxDQUFDQyxnREFBRCxDQURFO0FBQUEsTUFDckJDLElBRHFCLGVBQ3JCQSxJQURxQjs7QUFBQSxrQkFFSEMsc0RBQVEsQ0FBQ0QsSUFBRCxD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QTNELEdBQWdFLE9BQWhFLEdBQTBFLFdBSjNFLENBREEsQ0FUTSxDQURGLENBRGdDO0FBQUEsR0FBaEIsQ0FBbEI7QUF1QkYsU0FDQSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhSyxRQUFiLENBREEsRUFFQSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhTixZQUFZLEVBQXpCLENBRkEsRUFHQSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhRSxZQUFZLEVBQXpCLENBSEEsQ0FEQTtBQU9DOztHQXBIUXhDLGM7VUE4QjBCWSx1RDs7O0tBOUIxQlosYztBQXNITUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMTQyZTdmNDA3OTRiMzE0ZDdjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCI7XG5pbXBvcnQgRHJpbmtzIGZyb20gXCIuL2RyaW5rc1wiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQm9keSwgQ2FyZEltZywgQ2FyZFRleHQsIENhcmRUaXRsZSwgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5mdW5jdGlvbiBSZXN0YXVyYW50TGlzdChwcm9wcykge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydCk7XG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGRpc2hlcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBwcmljZVxuICAgICAgICB9XG4gICAgICAgIGRyaW5rcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCBbZmlsdGVyZWRSZXN0YXVyYW50cywgc2V0RmlsdGVyZWRSZXN0YXVyYW50c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKTtcbiAgY29uc3QgW3NlbGVjdGVkUmVzdGF1cmFudCwgc2V0U2VsZWN0ZWRSZXN0YXVyYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHRyeSB7XG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgICBpZiAoZXJyb3IpIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcbiAgICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0ZpbHRlcmVkUmVzdGF1cmFudHMgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzdGF1cmFudCkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgICAgIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICAgICAgZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZWREaXNoZXMubGVuZ3RoID4gMCB8fCBtYXRjaGVkRHJpbmtzLmxlbmd0aCA+IDA7XG4gICAgICB9KTtcbiAgICAgIHNldEZpbHRlcmVkUmVzdGF1cmFudHMobmV3RmlsdGVyZWRSZXN0YXVyYW50cyk7XG4gICAgfSwgW2RhdGEsIHByb3BzLnNlYXJjaF0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIDxwPlNvbWV0aGluZyB3ZW50IHdyb25nLi4uPC9wPjtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc3RhdXJhbnRDbGljayA9IChyZXN0YXVyYW50KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KHJlc3RhdXJhbnQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckRpc2hlcyA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUmVzdGF1cmFudCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIDxEaXNoZXMgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckRyaW5rcyA9ICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUmVzdGF1cmFudCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIDxEcmlua3MgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1lbnUgPSAobWVudSkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRSZXN0YXVyYW50KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbWVudSA9PT0gXCJkaXNoZXNcIiA/IDxEaXNoZXMgcmVzdElkPXtzZWxlY3RlZFJlc3RhdXJhbnQuaWR9IC8+IDogPERyaW5rcyByZXN0SWQ9e3NlbGVjdGVkUmVzdGF1cmFudC5pZH0gLz47XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBmaWx0ZXJlZFJlc3RhdXJhbnRzLmZpbHRlcigocmVzdGF1cmFudCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZWREaXNoZXMgPSByZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+XG4gICAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpXG4gICAgKTtcbiAgICBjb25zdCBtYXRjaGVkRHJpbmtzID0gcmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT5cbiAgICAgIGRyaW5rLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpXG4gICAgKTtcbiAgICByZXR1cm4gbWF0Y2hlZERpc2hlcy5sZW5ndGggPiAwIHx8IG1hdGNoZWREcmlua3MubGVuZ3RoID4gMDtcbiAgfSk7XG5cbiAgY29uc3QgcmVzdExpc3QgPSAgc2VhcmNoUXVlcnkubWFwKChyZXN0YXVyYW50KSA9PiAoXG4gICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlc3RhdXJhbnQuaWR9PlxuICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAuNXJlbSAyMHB4IDAuNXJlbVwiIH19PlxuPENhcmRJbWdcbnRvcD17dHJ1ZX1cbnN0eWxlPXt7IGhlaWdodDogMjAwIH19XG5zcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcgKyByZXN0YXVyYW50LmltYWdlLnVybGB9Lz5cbjxDYXJkQm9keT5cbjxDYXJkVGl0bGU+e3Jlc3RhdXJhbnQubmFtZX08L0NhcmRUaXRsZT5cbjxDYXJkVGV4dD57cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuPC9DYXJkQm9keT5cbjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbjxCdXR0b25cbmNvbG9yPXtzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkID8gXCJzZWNvbmRhcnlcIiA6IFwiaW5mb1wifVxub25DbGljaz17KCkgPT4gaGFuZGxlUmVzdGF1cmFudENsaWNrKHJlc3RhdXJhbnQpfVxuPlxue3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQgPyBcIkNsb3NlXCIgOiBcIlZpZXcgTWVudVwifVxuPC9CdXR0b24+XG48L2Rpdj5cbjwvQ2FyZD5cbjwvQ29sPlxuKSk7XG5cbnJldHVybiAoXG48Q29udGFpbmVyPlxuPFJvdyB4cz1cIjNcIj57cmVzdExpc3R9PC9Sb3c+XG48Um93IHhzPVwiM1wiPntyZW5kZXJEaXNoZXMoKX08L1Jvdz5cbjxSb3cgeHM9XCIzXCI+e3JlbmRlckRyaW5rcygpfTwvUm93PlxuPC9Db250YWluZXI+XG4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=