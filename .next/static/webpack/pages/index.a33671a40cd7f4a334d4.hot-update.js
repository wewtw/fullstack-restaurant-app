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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


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

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedRestaurant = _useState[0],
      setSelectedRestaurant = _useState[1];

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 23
    }
  }, "Loading...");

  if (error) {
    console.log(error);
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 42
      }
    }, "ERROR");
  }

  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "Not found");
  var filteredRestaurants = data.restaurants.filter(function (restaurant) {
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search);
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search);
    });
    var matchedRestaurant = restaurant.name.toLowerCase().includes(props.search);
    return matchedDishes.length > 0 || matchedDrinks.length > 0 || matchedRestaurant;
  });
  var restList = filteredRestaurants.map(function (restaurant) {
    var matchedDishes = restaurant.dishes.filter(function (dish) {
      return dish.name.toLowerCase().includes(props.search);
    });
    var matchedDrinks = restaurant.drinks.filter(function (drink) {
      return drink.name.toLowerCase().includes(props.search);
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: "6",
      sm: "4",
      key: restaurant.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      style: {
        margin: "0 0.5rem 20px 0.5rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
      top: true,
      style: {
        height: 200
      },
      src: "http://localhost:1337" + restaurant.image.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, restaurant.description)), __jsx("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      color: selectedRestaurant && selectedRestaurant.id === restaurant.id ? "secondary" : "info",
      onClick: function onClick() {
        return setSelectedRestaurant(selectedRestaurant && selectedRestaurant.id === restaurant.id ? null : restaurant);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, selectedRestaurant && selectedRestaurant.id === restaurant.id ? "Close" : "View Menu")), selectedRestaurant && selectedRestaurant.id === restaurant.id && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      restId: restaurant.id,
      filteredDishes: matchedDishes,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }), __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      restId: restaurant.id,
      filteredDrinks: matchedDrinks,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }))));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    xs: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, restList));
}

_s(RestaurantList, "RV7iFKauUBuBs56WUw53yLB5pDY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlU3RhdGUiLCJzZWxlY3RlZFJlc3RhdXJhbnQiLCJzZXRTZWxlY3RlZFJlc3RhdXJhbnQiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyZWRSZXN0YXVyYW50cyIsInJlc3RhdXJhbnRzIiwiZmlsdGVyIiwicmVzdGF1cmFudCIsIm1hdGNoZWREaXNoZXMiLCJkaXNoZXMiLCJkaXNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2giLCJtYXRjaGVkRHJpbmtzIiwiZHJpbmtzIiwiZHJpbmsiLCJtYXRjaGVkUmVzdGF1cmFudCIsImxlbmd0aCIsInJlc3RMaXN0IiwibWFwIiwiaWQiLCJtYXJnaW4iLCJoZWlnaHQiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsZUFBZSxHQUFHQywwREFBSCxtQkFBckI7O0FBRDZCLGtCQXlCSUMsK0RBQVEsQ0FBQ0YsZUFBRCxDQXpCWjtBQUFBLE1BeUJyQkcsT0F6QnFCLGFBeUJyQkEsT0F6QnFCO0FBQUEsTUF5QlpDLEtBekJZLGFBeUJaQSxLQXpCWTtBQUFBLE1BeUJMQyxJQXpCSyxhQXlCTEEsSUF6Qks7O0FBQUEsa0JBMEJ1QkMsc0RBQVEsQ0FBQyxJQUFELENBMUIvQjtBQUFBLE1BMEJ0QkMsa0JBMUJzQjtBQUFBLE1BMEJGQyxxQkExQkU7O0FBNEI3QixNQUFJTCxPQUFKLEVBQWEsT0FBTztB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LDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhSyxRQUFiLENBREYsQ0FERjtBQUtEOztHQXRGUTdCLGM7VUF5QjBCSSx1RDs7O0tBekIxQkosYztBQXdGTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTMzNjcxYTQwY2Q3ZjRhMzM0ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGRpc2hlcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBwcmljZVxuICAgICAgICB9XG4gICAgICAgIGRyaW5rcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpO1xuICBjb25zdCBbc2VsZWN0ZWRSZXN0YXVyYW50LCBzZXRTZWxlY3RlZFJlc3RhdXJhbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSB7Y29uc29sZS5sb2coZXJyb3IpOyByZXR1cm4gPHA+RVJST1I8L3A+O31cbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBjb25zdCBmaWx0ZXJlZFJlc3RhdXJhbnRzID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlc3RhdXJhbnQpID0+IHtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICAgICk7XG4gICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICAgICk7XG4gICAgY29uc3QgbWF0Y2hlZFJlc3RhdXJhbnQgPSByZXN0YXVyYW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpO1xuICAgIHJldHVybiBtYXRjaGVkRGlzaGVzLmxlbmd0aCA+IDAgfHwgbWF0Y2hlZERyaW5rcy5sZW5ndGggPiAwIHx8IG1hdGNoZWRSZXN0YXVyYW50O1xuICB9KTtcbiAgXG4gIGNvbnN0IHJlc3RMaXN0ID0gZmlsdGVyZWRSZXN0YXVyYW50cy5tYXAoKHJlc3RhdXJhbnQpID0+IHtcbiAgICBjb25zdCBtYXRjaGVkRGlzaGVzID0gcmVzdGF1cmFudC5kaXNoZXMuZmlsdGVyKChkaXNoKSA9PlxuICAgICAgZGlzaC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICAgICk7XG4gICAgY29uc3QgbWF0Y2hlZERyaW5rcyA9IHJlc3RhdXJhbnQuZHJpbmtzLmZpbHRlcigoZHJpbmspID0+XG4gICAgICBkcmluay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2wgeHM9XCI2XCIgc209XCI0XCIga2V5PXtyZXN0YXVyYW50LmlkfT5cbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzdgICsgcmVzdGF1cmFudC5pbWFnZS51cmx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlPntyZXN0YXVyYW50Lm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29sb3I9e3NlbGVjdGVkUmVzdGF1cmFudCAmJiBzZWxlY3RlZFJlc3RhdXJhbnQuaWQgPT09IHJlc3RhdXJhbnQuaWQgPyBcInNlY29uZGFyeVwiIDogXCJpbmZvXCJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUmVzdGF1cmFudChzZWxlY3RlZFJlc3RhdXJhbnQgJiYgc2VsZWN0ZWRSZXN0YXVyYW50LmlkID09PSByZXN0YXVyYW50LmlkID8gbnVsbCA6IHJlc3RhdXJhbnQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRSZXN0YXVyYW50ICYmIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZCA/IFwiQ2xvc2VcIiA6IFwiVmlldyBNZW51XCJ9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2VsZWN0ZWRSZXN0YXVyYW50ICYmIHNlbGVjdGVkUmVzdGF1cmFudC5pZCA9PT0gcmVzdGF1cmFudC5pZCAmJlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPERpc2hlcyByZXN0SWQ9e3Jlc3RhdXJhbnQuaWR9IGZpbHRlcmVkRGlzaGVzPXttYXRjaGVkRGlzaGVzfSAvPlxuICAgICAgICAgICAgICA8RHJpbmtzIHJlc3RJZD17cmVzdGF1cmFudC5pZH0gZmlsdGVyZWREcmlua3M9e21hdGNoZWREcmlua3N9IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvQ29sPlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3cgeHM9XCIzXCI+e3Jlc3RMaXN0fTwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=