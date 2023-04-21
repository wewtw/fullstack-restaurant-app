webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/restaurantList.js":
/*!**************************************!*\
  !*** ./components/restaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _dishes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dishes */ "./components/dishes.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\components\\restaurantList.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query {\n      restaurants {\n        id\n        name\n        description\n        image {\n          url\n        }\n        dishes {\n          id\n          name\n          price\n          image {\n            url\n          }\n        }\n        drinks {\n          id\n          name\n          price\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function RestaurantList(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      restaurantID = _useState[0],
      setRestaurantID = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
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
      lineNumber: 48,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "ERROR");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Not found");
  console.log("Query Data: ".concat(data.restaurants));
  var searchQuery = data.restaurants.filter(function (res) {
    return res.name.toLowerCase().includes(props.search);
  });
  var restId;

  if (searchQuery.length > 0) {
    restId = searchQuery[0].id;
  } // define renderer for Dishes and Drinks


  var renderDishes = function renderDishes(restaurantID) {
    var restaurant = data.restaurants.find(function (res) {
      return res.id === restaurantID;
    });
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, restaurant.dishes && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: "6",
      sm: "6",
      md: "4",
      key: "".concat(restaurantID, "-dishes"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, "Dishes"), restaurant.dishes.map(function (dish) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        key: dish.id,
        style: {
          marginBottom: "1rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: {
          height: 200
        },
        src: "http://localhost:1337".concat(dish.image.url),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 19
        }
      }, dish.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 19
        }
      }, "$", dish.price.toFixed(2)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "success",
        onClick: function onClick() {
          return setState([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state), [{
            name: dish.name,
            price: dish.price
          }]));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 19
        }
      }, "Add to Cart")));
    })), restaurant.drinks && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: "6",
      sm: "6",
      md: "4",
      key: "".concat(restaurantID, "-drinks"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, "Drinks"), restaurant.drinks.map(function (drink) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        key: drink.id,
        style: {
          marginBottom: "1rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 19
        }
      }, drink.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }
      }, "$", drink.price.toFixed(2)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "success",
        onClick: function onClick() {
          return setState([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state), [{
            name: drink.name,
            price: drink.price
          }]));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 19
        }
      }, "Add to Cart")));
    })));
  };

  if (searchQuery.length > 0) {
    var _restId = searchQuery[0].id;
    var restList = searchQuery.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "6",
        sm: "4",
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: {
          height: 200
        },
        src: "http://localhost:1337".concat(res.image.url),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 7
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 7
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "info",
        onClick: function onClick() {
          return setRestaurantID(res.id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 7
        }
      }, res.name))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }
    }, restList), restaurantID !== 0 && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 34
      }
    }, renderDishes(restaurantID)));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 14
      }
    }, "No Restaurants Found");
  }
}

_s(RestaurantList, "AG1Od7CGruCtgOneqAeKWk/inGw=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = RestaurantList;
;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJyZXMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsInJlc3RJZCIsImxlbmd0aCIsImlkIiwicmVuZGVyRGlzaGVzIiwicmVzdGF1cmFudCIsImZpbmQiLCJkaXNoZXMiLCJtYXAiLCJkaXNoIiwibWFyZ2luQm90dG9tIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJwcmljZSIsInRvRml4ZWQiLCJkcmlua3MiLCJkcmluayIsInJlc3RMaXN0IiwibWFyZ2luIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFZQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLENBQUQsQ0FEbkI7QUFBQSxNQUN0QkMsWUFEc0I7QUFBQSxNQUNSQyxlQURROztBQUFBLG9CQUVaQyx3REFBVSxDQUFDQyxnREFBRCxDQUZFO0FBQUEsTUFFckJDLElBRnFCLGVBRXJCQSxJQUZxQjs7QUFBQSxtQkFHSEwsc0RBQVEsQ0FBQ0ssSUFBRCxDQUhMO0FBQUEsTUFHdEJDLEtBSHNCO0FBQUEsTUFHZkMsUUFIZTs7QUFJN0IsTUFBTUMsZUFBZSxHQUFH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O0FBQUE7QUFBQSxTQUNBLE1BQUMsaURBQUQ7QUFDQSxhQUFLLEVBQUMsTUFETjtBQUVBLGVBQU8sRUFBRTtBQUFBLGlCQUFNekMsZUFBZSxDQUFDaUIsR0FBRyxDQUFDTyxFQUFMLENBQXJCO0FBQUEsU0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUNQLEdBQUcsQ0FBQ0MsSUFKTCxDQURBLENBVEEsQ0FEQSxDQUYrQjtBQUFBLEtBQWhCLENBQWpCO0FBdUJFLFdBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBYXFCLFFBQWIsQ0FERixFQUVHeEMsWUFBWSxLQUFLLENBQWpCLElBQXNCLE1BQUMsOENBQUQ7QUFBSyxRQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWEwQixZQUFZLENBQUMxQixZQUFELENBQXpCLENBRnpCLENBREY7QUFPQyxHQWhDTCxNQWdDVztBQUNQLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBUDtBQUNDO0FBQ0E7O0dBeklFSCxjO1VBNkIwQlksdUQ7OztLQTdCMUJaLGM7QUF5SUY7QUFDUUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNmY2MWNlNWY5NmMwNWUyMzAxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IFtyZXN0YXVyYW50SUQsIHNldFJlc3RhdXJhbnRJRF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGNhcnQpO1xuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBkaXNoZXMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRyaW5rcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1I8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApO1xuXG4gIGxldCBzZWFyY2hRdWVyeSA9IGRhdGEucmVzdGF1cmFudHMuZmlsdGVyKChyZXMpID0+e1xuICAgIHJldHVybiByZXMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaClcbn0pXG5cbmxldCByZXN0SWQ7XG5pZiAoc2VhcmNoUXVlcnkubGVuZ3RoID4gMCkge1xuICByZXN0SWQgPSBzZWFyY2hRdWVyeVswXS5pZDtcbn1cbiBcblxuXG4gIC8vIGRlZmluZSByZW5kZXJlciBmb3IgRGlzaGVzIGFuZCBEcmlua3NcbiAgY29uc3QgcmVuZGVyRGlzaGVzID0gKHJlc3RhdXJhbnRJRCkgPT4ge1xuICAgIGxldCByZXN0YXVyYW50ID0gZGF0YS5yZXN0YXVyYW50cy5maW5kKChyZXMpID0+IHJlcy5pZCA9PT0gcmVzdGF1cmFudElEKTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3Jlc3RhdXJhbnQuZGlzaGVzICYmIChcbiAgICAgICAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNlwiIG1kPVwiNFwiIGtleT17YCR7cmVzdGF1cmFudElEfS1kaXNoZXNgfT5cbiAgICAgICAgICAgIDxoMz5EaXNoZXM8L2gzPlxuICAgICAgICAgICAge3Jlc3RhdXJhbnQuZGlzaGVzLm1hcCgoZGlzaCkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2Rpc2guaWR9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke2Rpc2guaW1hZ2UudXJsfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPntkaXNoLm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+JHtkaXNoLnByaWNlLnRvRml4ZWQoMil9PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZShbLi4uc3RhdGUsIHsgbmFtZTogZGlzaC5uYW1lLCBwcmljZTogZGlzaC5wcmljZSB9XSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICl9XG4gICAgICAgIHtyZXN0YXVyYW50LmRyaW5rcyAmJiAoXG4gICAgICAgICAgPENvbCB4cz1cIjZcIiBzbT1cIjZcIiBtZD1cIjRcIiBrZXk9e2Ake3Jlc3RhdXJhbnRJRH0tZHJpbmtzYH0+XG4gICAgICAgICAgICA8aDM+RHJpbmtzPC9oMz5cbiAgICAgICAgICAgIHtyZXN0YXVyYW50LmRyaW5rcy5tYXAoKGRyaW5rKSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkIGtleT17ZHJpbmsuaWR9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT57ZHJpbmsubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD4ke2RyaW5rLnByaWNlLnRvRml4ZWQoMil9PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZShbLi4uc3RhdGUsIHsgbmFtZTogZHJpbmsubmFtZSwgcHJpY2U6IGRyaW5rLnByaWNlIH1dKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCByZXN0SWQgPSBzZWFyY2hRdWVyeVswXS5pZDtcbiAgICBjb25zdCByZXN0TGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzKSA9PiAoXG4gICAgICBcbiAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXMuaWR9PlxuICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICA8Q2FyZEltZ1xuICAgICAgdG9wPXt0cnVlfVxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX1cbiAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cmVzLmltYWdlLnVybH1gfVxuICAgICAgLz5cbiAgICAgIDxDYXJkQm9keT5cbiAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICA8L0NhcmRCb2R5PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgPEJ1dHRvblxuICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJlc3RhdXJhbnRJRChyZXMuaWQpfVxuICAgICAgPlxuICAgICAge3Jlcy5uYW1lfVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDwvQ29sPlxuICAgICAgKSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxSb3cgeHM9XCIzXCI+e3Jlc3RMaXN0fTwvUm93PlxuICAgICAgICAgIHtyZXN0YXVyYW50SUQgIT09IDAgJiYgPFJvdyB4cz1cIjNcIj57cmVuZGVyRGlzaGVzKHJlc3RhdXJhbnRJRCl9PC9Sb3c+fVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGgxPk5vIFJlc3RhdXJhbnRzIEZvdW5kPC9oMT47XG4gICAgICB9XG4gICAgICB9O1xuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9