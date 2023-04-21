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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n      restaurants {\n        id\n        name\n        description\n        image {\n          url\n        }\n        dishes {\n          id\n          name\n          price\n        }\n        drinks {\n          id\n          name\n          price\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function RestaurantList(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      restaurantID = _useState[0],
      setRestaurantID = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      cart = _useContext.cart;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(cart),
      state = _useState2[0],
      setState = _useState2[1];

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "ERROR");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Not found");
  console.log("Query Data: ".concat(data.restaurants));
  var searchQuery = data.restaurants.filter(function (res) {
    var resName = res.name.toLowerCase();
    var dishes = res.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search);
    });
    var drinks = res.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search);
    });
    return resName.includes(props.search) || dishes.length > 0 || drinks.length > 0;
  });
  var restId = searchQuery.length > 0 && searchQuery[0].id > 0 ? searchQuery[0].id : null; // definet renderer for Dishes

  var renderDishes = function renderDishes(restaurantID) {
    if (!restaurantID) return null;
    var restaurant = data.restaurants.find(function (res) {
      return res.id === restaurantID;
    });
    var dishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(state.search);
    });
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: dishes,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 10
      }
    });
  };

  var renderDrinks = function renderDrinks(restaurantID) {
    if (!restaurantID) return null;
    var restaurant = data.restaurants.find(function (res) {
      return res.id === restaurantID;
    });
    var drinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(state.search);
    });
    return __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: drinks,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 10
      }
    });
  };

  if (searchQuery.length > 0) {
    var restList = searchQuery.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "6",
        sm: "4",
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: {
          height: 200
        },
        src: "http://localhost:1337" + res.image.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "info",
        onClick: function onClick() {
          return setRestaurantID(res.id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }
      }, res.name))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 5
      }
    }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 5
      }
    }, renderDishes(restaurantID)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 5
      }
    }, renderDrinks(restaurantID)));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 10
      }
    }, " No Restaurants Found");
  }
}

_s(RestaurantList, "l1Ak/LzRian4lZrHyfOjQOP3flU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJyZXMiLCJyZXNOYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiZGlzaGVzIiwiZGlzaCIsImluY2x1ZGVzIiwic2VhcmNoIiwiZHJpbmtzIiwiZHJpbmsiLCJsZW5ndGgiLCJyZXN0SWQiLCJpZCIsInJlbmRlckRpc2hlcyIsInJlc3RhdXJhbnQiLCJmaW5kIiwicmVuZGVyRHJpbmtzIiwicmVzdExpc3QiLCJtYXAiLCJtYXJnaW4iLCJoZWlnaHQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVdBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsQ0FBRCxDQURuQjtBQUFBLE1BQ3RCQyxZQURzQjtBQUFBLE1BQ1JDLGVBRFE7O0FBQUEsb0JBRVpDLHdEQUFVLENBQUNDLGdEQUFELENBRkU7QUFBQSxNQUVyQkMsSUFGcUIsZUFFckJBLElBRnFCOztBQUFBLG1CQUdGTCxzREFBUSxDQUFDSyxJQUFELENBSE47QUFBQSxNQUdyQkMsS0FIcUI7QUFBQSxNQUdkQyxRQUhjOztBQUk1QixNQUFNQyxlQUFlLEdBQUdDLDBE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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVd0QixHQUFHLENBQUN1QixXQUFmLENBREYsQ0FSRixFQVdFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQSxNQUFDLGlEQUFEO0FBQVEsYUFBSyxFQUFDLE1BQWQ7QUFBcUIsZUFBTyxFQUFFO0FBQUEsaUJBQUt4QyxlQUFlLENBQUNpQixHQUFHLENBQUNZLEVBQUwsQ0FBcEI7QUFBQSxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTZEWixHQUFHLENBQUNFLElBQWpFLENBRkEsQ0FYRixDQURGLENBRCtCO0FBQUEsS0FBaEIsQ0FBakI7QUFzQkEsV0FFRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLDhDQUFEO0FBQUssUUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHZSxRQURILENBREEsRUFLQSxNQUFDLDhDQUFEO0FBQUssUUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDSixZQUFZLENBQUMvQixZQUFELENBRGIsQ0FMQSxFQVFBLE1BQUMsOENBQUQ7QUFBSyxRQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0NrQyxZQUFZLENBQUNsQyxZQUFELENBRGIsQ0FSQSxDQUZGO0FBaUJELEdBeENELE1Bd0NPO0FBQ0wsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUFQO0FBQ0Q7QUFDQTs7R0FuSFFILGM7VUEyQjBCWSx1RDs7O0tBM0IxQlosYztBQW9IU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMDg4N2M5YzgwZTZiMjYzZjBlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWwsdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5cbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIlxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpe1xuICBjb25zdFtyZXN0YXVyYW50SUQsIHNldFJlc3RhdXJhbnRJRF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCB7Y2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KVxuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICBkaXNoZXMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICAgICAgZHJpbmtzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBwcmljZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICAgICAgXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUylcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1I8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhLnJlc3RhdXJhbnRzfWApXG5cblxuICBsZXQgc2VhcmNoUXVlcnkgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzKSA9PiB7XG4gICAgY29uc3QgcmVzTmFtZSA9IHJlcy5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgZGlzaGVzID0gcmVzLmRpc2hlcy5maWx0ZXIoKGRpc2gpID0+XG4gICAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpXG4gICAgKTtcbiAgICBjb25zdCBkcmlua3MgPSByZXMuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlc05hbWUuaW5jbHVkZXMocHJvcHMuc2VhcmNoKSB8fFxuICAgICAgZGlzaGVzLmxlbmd0aCA+IDAgfHxcbiAgICAgIGRyaW5rcy5sZW5ndGggPiAwXG4gICAgKTtcbiAgfSk7XG4gIFxuXG4gIGxldCByZXN0SWQgPSBzZWFyY2hRdWVyeS5sZW5ndGggPiAwICYmIHNlYXJjaFF1ZXJ5WzBdLmlkID4gMCA/IHNlYXJjaFF1ZXJ5WzBdLmlkIDogbnVsbDtcblxuIFxuLy8gZGVmaW5ldCByZW5kZXJlciBmb3IgRGlzaGVzXG5jb25zdCByZW5kZXJEaXNoZXMgPSAocmVzdGF1cmFudElEKSA9PiB7XG4gIGlmICghcmVzdGF1cmFudElEKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgcmVzdGF1cmFudCA9IGRhdGEucmVzdGF1cmFudHMuZmluZCgocmVzKSA9PiByZXMuaWQgPT09IHJlc3RhdXJhbnRJRCk7XG4gIGNvbnN0IGRpc2hlcyA9IHJlc3RhdXJhbnQuZGlzaGVzLmZpbHRlcigoZGlzaCkgPT5cbiAgICBkaXNoLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzdGF0ZS5zZWFyY2gpXG4gICk7XG4gIHJldHVybiA8RGlzaGVzIGRpc2hlcz17ZGlzaGVzfSAvPjtcbn07XG5cbmNvbnN0IHJlbmRlckRyaW5rcyA9IChyZXN0YXVyYW50SUQpID0+IHtcbiAgaWYgKCFyZXN0YXVyYW50SUQpIHJldHVybiBudWxsO1xuICBjb25zdCByZXN0YXVyYW50ID0gZGF0YS5yZXN0YXVyYW50cy5maW5kKChyZXMpID0+IHJlcy5pZCA9PT0gcmVzdGF1cmFudElEKTtcbiAgY29uc3QgZHJpbmtzID0gcmVzdGF1cmFudC5kcmlua3MuZmlsdGVyKChkcmluaykgPT5cbiAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc3RhdGUuc2VhcmNoKVxuICApO1xuICByZXR1cm4gPERyaW5rcyBkcmlua3M9e2RyaW5rc30gLz47XG59O1xuXG5pZihzZWFyY2hRdWVyeS5sZW5ndGggPiAwKXtcbiAgY29uc3QgcmVzdExpc3QgPSBzZWFyY2hRdWVyeS5tYXAoKHJlcykgPT4gKFxuICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXMuaWR9PlxuICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgICAgc3JjPXtcbiAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMzM3YCsgcmVzLmltYWdlLnVybFxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCk9PiBzZXRSZXN0YXVyYW50SUQocmVzLmlkKX0+e3Jlcy5uYW1lfTwvQnV0dG9uPlxuICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29sPlxuICApKVxuXG4gIHJldHVybihcblxuICAgIDxDb250YWluZXI+XG4gICAgPFJvdyB4cz0nMyc+XG4gICAgICB7cmVzdExpc3R9XG4gICAgPC9Sb3c+XG4gIFxuICAgIDxSb3cgeHM9JzMnPlxuICAgIHtyZW5kZXJEaXNoZXMocmVzdGF1cmFudElEKX1cbiAgICA8L1Jvdz5cbiAgICA8Um93IHhzPSczJz5cbiAgICB7cmVuZGVyRHJpbmtzKHJlc3RhdXJhbnRJRCl9XG4gICAgPC9Sb3c+XG4gXG4gICAgPC9Db250YWluZXI+XG4gXG4gIClcbn0gZWxzZSB7XG4gIHJldHVybiA8aDE+IE5vIFJlc3RhdXJhbnRzIEZvdW5kPC9oMT5cbn1cbn1cbiAgIGV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0ICAgIl0sInNvdXJjZVJvb3QiOiIifQ==