webpackHotUpdate_N_E("pages/index",{

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
  var searchQuery = data.restaurants.filter(function (restaurant) {
    var nameMatch = restaurant.name.toLowerCase().includes(props.search.toLowerCase());
    var dishMatch = restaurant.dishes.some(function (dish) {
      return dish.name.toLowerCase().includes(props.search.toLowerCase());
    });
    var drinkMatch = restaurant.drinks.some(function (drink) {
      return drink.name.toLowerCase().includes(props.search.toLowerCase());
    });
    return nameMatch || dishMatch || drinkMatch;
  });
  var restId;

  if (searchQuery.length > 0) {
    restId = searchQuery[0].id;
  }

  var renderItems = function renderItems(items) {
    return items.map(function (item) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "6",
        sm: "4",
        key: item.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, item.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, item.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      }, item.price), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "info",
        onClick: function onClick() {
          setState([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state), [item]));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }, "Add to Cart"))));
    });
  };

  var renderDishes = function renderDishes(restaurant) {
    return restaurant.dishes ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, "Dishes"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }
    }, renderItems(restaurant.dishes))) : null;
  };

  var renderDrinks = function renderDrinks(restaurant) {
    return restaurant.drinks ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }, "Drinks"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, renderItems(restaurant.drinks))) : null;
  };

  if (searchQuery.length > 0) {
    var restList = searchQuery.map(function (restaurant) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "6",
        sm: "4",
        key: restaurant.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: {
          height: 200
        },
        src: "http://localhost:1337 + restaurant.image.url\n            ",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }
      }, restaurant.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "info",
        onClick: function onClick() {
          return setRestaurantID(restaurant.id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }
      }, restaurant.name)), restaurantID === restaurant.id && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, renderDishes(restaurant), renderDrinks(restaurant))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }
    }, restList));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 12
      }
    }, "No Restaurants Found");
  }
}

_s(RestaurantList, "AG1Od7CGruCtgOneqAeKWk/inGw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJyZXN0YXVyYW50IiwibmFtZU1hdGNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJkaXNoTWF0Y2giLCJkaXNoZXMiLCJzb21lIiwiZGlzaCIsImRyaW5rTWF0Y2giLCJkcmlua3MiLCJkcmluayIsInJlc3RJZCIsImxlbmd0aCIsImlkIiwicmVuZGVySXRlbXMiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJtYXJnaW4iLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicmVuZGVyRGlzaGVzIiwicmVuZGVyRHJpbmtzIiwicmVzdExpc3QiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFZQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLENBQUQsQ0FEbkI7QUFBQSxNQUN0QkMsWUFEc0I7QUFBQSxNQUNSQyxlQURROztBQUFBLG9CQUVaQyx3REFBVSxDQUFDQyxnREFBRCxDQUZFO0FBQUEsTUFFckJDLElBRnFCLGVBRXJCQSxJQUZxQjs7QUFBQSxtQkFHSEwsc0RBQVEsQ0FBQ0ssSUFBRCxDQUhMO0FBQUEsTUFHdEJDLEtBSHNCO0FB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QTtBQUFBO0FBQUEsT0FBYXlCLFFBQWIsQ0FERixDQURGO0FBS0QsR0FqQ0QsTUFpQ087QUFDTCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQVA7QUFDRDtBQUNGOztHQWhJUTlDLGM7VUE2QjBCWSx1RDs7O0tBN0IxQlosYztBQWtJTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmI5NGM3MWI3MTc0YmZkOGE2NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRCb2R5LFxuICBDYXJkSW1nLFxuICBDYXJkVGV4dCxcbiAgQ2FyZFRpdGxlLFxuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBSZXN0YXVyYW50TGlzdChwcm9wcykge1xuICBjb25zdCBbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgZGlzaGVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkcmlua3Mge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUyk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SPC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcbiAgY29uc29sZS5sb2coYFF1ZXJ5IERhdGE6ICR7ZGF0YS5yZXN0YXVyYW50c31gKTtcblxuICBsZXQgc2VhcmNoUXVlcnkgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzdGF1cmFudCkgPT4ge1xuICAgIGNvbnN0IG5hbWVNYXRjaCA9IHJlc3RhdXJhbnQubmFtZVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5pbmNsdWRlcyhwcm9wcy5zZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc3QgZGlzaE1hdGNoID0gcmVzdGF1cmFudC5kaXNoZXMuc29tZSgoZGlzaCkgPT5cbiAgICAgIGRpc2gubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgY29uc3QgZHJpbmtNYXRjaCA9IHJlc3RhdXJhbnQuZHJpbmtzLnNvbWUoKGRyaW5rKSA9PlxuICAgICAgZHJpbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgcmV0dXJuIG5hbWVNYXRjaCB8fCBkaXNoTWF0Y2ggfHwgZHJpbmtNYXRjaDtcbiAgfSk7XG5cbiAgbGV0IHJlc3RJZDtcbiAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICByZXN0SWQgPSBzZWFyY2hRdWVyeVswXS5pZDtcbiAgfVxuICBjb25zdCByZW5kZXJJdGVtcyA9IChpdGVtcykgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgPENhcmRUaXRsZT57aXRlbS5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgPENhcmRUZXh0PntpdGVtLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICA8Q2FyZFRleHQ+e2l0ZW0ucHJpY2V9PC9DYXJkVGV4dD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKFsuLi5zdGF0ZSwgaXRlbV0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9Db2w+XG4gICAgKSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRGlzaGVzID0gKHJlc3RhdXJhbnQpID0+IHtcbiAgICByZXR1cm4gcmVzdGF1cmFudC5kaXNoZXMgPyAoXG4gICAgICA8PlxuICAgICAgICA8aDI+RGlzaGVzPC9oMj5cbiAgICAgICAgPFJvdyB4cz1cIjNcIj57cmVuZGVySXRlbXMocmVzdGF1cmFudC5kaXNoZXMpfTwvUm93PlxuICAgICAgPC8+XG4gICAgKSA6IG51bGw7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRHJpbmtzID0gKHJlc3RhdXJhbnQpID0+IHtcbiAgICByZXR1cm4gcmVzdGF1cmFudC5kcmlua3MgPyAoXG4gICAgICA8PlxuICAgICAgICA8aDI+RHJpbmtzPC9oMj5cbiAgICAgICAgPFJvdyB4cz1cIjNcIj57cmVuZGVySXRlbXMocmVzdGF1cmFudC5kcmlua3MpfTwvUm93PlxuICAgICAgPC8+XG4gICAgKSA6IG51bGw7XG4gIH07XG5cbiAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCByZXN0TGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzdGF1cmFudCkgPT4gKFxuICAgICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlc3RhdXJhbnQuaWR9PlxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cbiAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX1cbiAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyArIHJlc3RhdXJhbnQuaW1hZ2UudXJsXG4gICAgICAgICAgICBgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgPENhcmRUZXh0PntyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpID0+IHNldFJlc3RhdXJhbnRJRChyZXN0YXVyYW50LmlkKX0+XG4gICAgICAgICAgICAgIHtyZXN0YXVyYW50Lm5hbWV9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cmVzdGF1cmFudElEID09PSByZXN0YXVyYW50LmlkICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHtyZW5kZXJEaXNoZXMocmVzdGF1cmFudCl9XG4gICAgICAgICAgICAgIHtyZW5kZXJEcmlua3MocmVzdGF1cmFudCl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NvbD5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93IHhzPVwiM1wiPntyZXN0TGlzdH08L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxoMT5ObyBSZXN0YXVyYW50cyBGb3VuZDwvaDE+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==