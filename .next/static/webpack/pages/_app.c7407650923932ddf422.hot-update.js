webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/restaurantList.js":
/*!**************************************!*\
  !*** ./components/restaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _dishes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dishes */ "./components/dishes.js");
/* harmony import */ var _drinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drinks */ "./components/drinks.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\components\\restaurantList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query {\n      restaurants {\n        id\n        name\n        description\n        image {\n          url\n        }\n        dishes {\n          id\n          name\n          description\n          price\n        }\n        drinks {\n          id\n          price\n          name\n          description\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function RestaurantList(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedRestaurant = _useState[0],
      setSelectedRestaurant = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      cart = _useContext.cart;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(cart),
      state = _useState2[0],
      setState = _useState2[1];

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 23
    }
  }, "Loading...");

  if (error) {
    console.log(error);
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 42
      }
    }, "ERROR");
  }

  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Not found");
  var searchQuery = data.restaurants.map(function (restaurant) {
    var filteredDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase());
    });
    var filteredDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search.toLowerCase());
    });
    return _objectSpread(_objectSpread({}, restaurant), {}, {
      dishes: filteredDishes,
      drinks: filteredDrinks
    });
  });

  var handleRestaurantClick = function handleRestaurantClick(restaurant) {
    setSelectedRestaurant(restaurant);
  };

  var renderDishes = function renderDishes() {
    if (!selectedRestaurant) return null;
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_4__["default"], {
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 12
      }
    });
  };

  var renderDrinks = function renderDrinks() {
    if (!selectedRestaurant) return null;
    return __jsx(_drinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
      restId: selectedRestaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 12
      }
    });
  };

  var renderRestaurants = function renderRestaurants() {
    return searchQuery.map(function (restaurant) {
      var hasFilteredItems = restaurant.dishes.length > 0 || restaurant.drinks.length > 0;
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: "6",
        sm: "4",
        key: restaurant.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardImg"], {
        top: true,
        style: {
          height: 200
        },
        src: "http://localhost:1337".concat(restaurant.image.url),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }
      }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }
      }, restaurant.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        color: selectedRestaurant && selectedRestaurant.id === restaurant.id ? "secondary" : "info",
        onClick: function onClick() {
          return handleRestaurantClick(restaurant);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }
      }, restaurant.name)), hasFilteredItems && __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        color: selectedRestaurant && selectedRestaurant.id === restaurant.id && selectedRestaurant.showDishes ? "secondary" : "info",
        onClick: function onClick() {
          return setSelectedRestaurant(_objectSpread(_objectSpread({}, selectedRestaurant), {}, {
            showDishes: !selectedRestaurant.showDishes
          }));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      }, "Show Drinks"))));
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, renderRestaurants()), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, renderDishes(), renderDrinks()))));
}

_s(RestaurantList, "CrPmvuCRIAaBHl5hX6yma1tMxv8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJzZWxlY3RlZFJlc3RhdXJhbnQiLCJzZXRTZWxlY3RlZFJlc3RhdXJhbnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNlYXJjaFF1ZXJ5IiwicmVzdGF1cmFudHMiLCJtYXAiLCJyZXN0YXVyYW50IiwiZmlsdGVyZWREaXNoZXMiLCJkaXNoZXMiLCJmaWx0ZXIiLCJkaXNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJmaWx0ZXJlZERyaW5rcyIsImRyaW5rcyIsImRyaW5rIiwiaGFuZGxlUmVzdGF1cmFudENsaWNrIiwicmVuZGVyRGlzaGVzIiwiaWQiLCJyZW5kZXJEcmlua3MiLCJyZW5kZXJSZXN0YXVyYW50cyIsImhhc0ZpbHRlcmVkSXRlbXMiLCJsZW5ndGgiLCJtYXJnaW4iLCJoZWlnaHQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIiwic2hvd0Rpc2hlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3VCQyxzREFBUSxDQUFDLElBQUQsQ0FEL0I7QUFBQSxNQUN0QkMsa0JBRHNCO0FBQUEsTUFDRkMscUJBREU7O0FBQUEsb0JBRVpDLHdEQUFVLENBQUNDLGdEQUFELENBRkU7QUFBQSxNQUVyQkMsSUFGcUIsZUFFckJBLElBRnFCOztBQUFBLG1C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QUVuQyxrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUNnQyxFQUFuQixLQUEwQmQsVUFBVSxDQUFDYyxFQUEzRCxJQUFpRWhDLGtCQUFrQixDQUFDMEMsVUFBcEYsR0FBaUcsV0FBakcsR0FBK0csTUFEeEg7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTXpDLHFCQUFxQixpQ0FBS0Qsa0JBQUw7QUFBeUIwQyxzQkFBVSxFQUFFLENBQUMxQyxrQkFBa0IsQ0FBQzBDO0FBQXpELGFBQTNCO0FBQUEsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBbkJKLENBREYsQ0FERjtBQWlDRCxLQXBDTSxDQUFQO0FBcUNELEdBdENEOztBQXdDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1IsaUJBQWlCLEVBRHBCLENBREYsRUFJRSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxZQUFZLEVBRGYsRUFFR0UsWUFBWSxFQUZmLENBSkYsQ0FERixDQURGLENBREY7QUFlRDs7R0FySFFwQyxjO1VBNEIwQlksdUQ7OztLQTVCMUJaLGM7QUF1SE1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzc0MDc2NTA5MjM5MzJkZGY0MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFJlc3RhdXJhbnQsIHNldFNlbGVjdGVkUmVzdGF1cmFudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGNhcnQpO1xuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBkaXNoZXMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgfVxuICAgICAgICBkcmlua3Mge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSB7Y29uc29sZS5sb2coZXJyb3IpOyByZXR1cm4gPHA+RVJST1I8L3A+O31cbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBjb25zdCBzZWFyY2hRdWVyeSA9IGRhdGEucmVzdGF1cmFudHMubWFwKChyZXN0YXVyYW50KSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWREaXNoZXMgPSByZXN0YXVyYW50LmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+IHtcbiAgICAgIHJldHVybiBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gICAgfSk7XG4gICAgY29uc3QgZmlsdGVyZWREcmlua3MgPSByZXN0YXVyYW50LmRyaW5rcy5maWx0ZXIoKGRyaW5rKSA9PiB7XG4gICAgICByZXR1cm4gZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN0YXVyYW50LFxuICAgICAgZGlzaGVzOiBmaWx0ZXJlZERpc2hlcyxcbiAgICAgIGRyaW5rczogZmlsdGVyZWREcmlua3MsXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVSZXN0YXVyYW50Q2xpY2sgPSAocmVzdGF1cmFudCkgPT4ge1xuICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChyZXN0YXVyYW50KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJEaXNoZXMgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiA8RGlzaGVzIHJlc3RJZD17c2VsZWN0ZWRSZXN0YXVyYW50LmlkfSAvPjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJEcmlua3MgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFJlc3RhdXJhbnQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiA8RHJpbmtzIHJlc3RJZD17c2VsZWN0ZWRSZXN0YXVyYW50LmlkfSAvPjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJSZXN0YXVyYW50cyA9ICgpID0+IHtcbiAgICByZXR1cm4gc2VhcmNoUXVlcnkubWFwKChyZXN0YXVyYW50KSA9PiB7XG4gICAgICBjb25zdCBoYXNGaWx0ZXJlZEl0ZW1zID0gcmVzdGF1cmFudC5kaXNoZXMubGVuZ3RoID4gMCB8fCByZXN0YXVyYW50LmRyaW5rcy5sZW5ndGggPiAwO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiIGtleT17cmVzdGF1cmFudC5pZH0+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cmVzdGF1cmFudC5pbWFnZS51cmx9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlc3RhdXJhbnQubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPENhcmRUZXh0PntyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9e3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQgPyBcInNlY29uZGFyeVwiIDogXCJpbmZvXCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVzdGF1cmFudENsaWNrKHJlc3RhdXJhbnQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Jlc3RhdXJhbnQubmFtZX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtoYXNGaWx0ZXJlZEl0ZW1zICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjb2xvcj17c2VsZWN0ZWRSZXN0YXVyYW50ICYmIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuc2hvd0Rpc2hlcyA/IFwic2Vjb25kYXJ5XCIgOiBcImluZm9cIn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUmVzdGF1cmFudCh7Li4uc2VsZWN0ZWRSZXN0YXVyYW50LCBzaG93RGlzaGVzOiAhc2VsZWN0ZWRSZXN0YXVyYW50LnNob3dEaXNoZXN9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaG93IERyaW5rc1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbD5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPVwiM1wiPlxuICAgICAgICAgICAge3JlbmRlclJlc3RhdXJhbnRzKCl9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz1cIjNcIj5cbiAgICAgICAgICAgIHtyZW5kZXJEaXNoZXMoKX1cbiAgICAgICAgICAgIHtyZW5kZXJEcmlua3MoKX1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9