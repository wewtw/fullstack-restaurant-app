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

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query GetDrinks($id: ID!) {\n      restaurant(id: $id) {\n        drinks {\n          id\n          name\n          price\n          description\n        }\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query GetDishes($id: ID!) {\n      restaurant(id: $id) {\n        dishes {\n          id\n          name\n          price\n          description\n          image {\n            url\n          }\n        }\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n      restaurants {\n        id\n        name\n        description\n        image {\n          url\n        }\n      }\n    }\n  "]);

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
      lineNumber: 36,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "ERROR");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Not found");
  var searchQuery = data.restaurants.filter(function (res) {
    return res.name.toLowerCase().includes(props.search);
  });
  var restId = searchQuery.length > 0 && searchQuery[0].id > 0 ? searchQuery[0].id : null;
  var GET_DISHES = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject2());

  var _useQuery2 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_DISHES, {
    variables: {
      id: restaurantID
    }
  }),
      loadingDishes = _useQuery2.loading,
      errorDishes = _useQuery2.error,
      dataDishes = _useQuery2.data;

  var GET_DRINKS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject3());

  var _useQuery3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_DRINKS, {
    variables: {
      id: restaurantID
    }
  }),
      loadingDrinks = _useQuery3.loading,
      errorDrinks = _useQuery3.error,
      dataDrinks = _useQuery3.data; // Define renderer for Dishes


  var renderDishes = function renderDishes() {
    if (loadingDishes) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 31
      }
    }, "Loading...");
    if (errorDishes) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 29
      }
    }, "Error");
    if (!dataDishes) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      }
    }, "Not found");
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dishes: dataDishes.restaurant.dishes,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    });
  }; // Define renderer for Drinks


  var renderDrinks = function renderDrinks() {
    if (loadingDrinks) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 31
      }
    }, "Loading...");
    if (errorDrinks) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }
    }, "Error");
    if (!dataDrinks) return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 29
      }
    }, "Not found");
    return __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drinks: dataDrinks.restaurant.drinks,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
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
          lineNumber: 98,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          margin: "0 0.5rem 20px 0.5rem"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
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
          lineNumber: 100,
          columnNumber: 11
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "info",
        onClick: function onClick() {
          return setRestaurantID(res.id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, res.name))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    }, renderDishes(restaurantID)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }
    }, renderDrinks(restaurantID)));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 12
      }
    }, " No Restaurants Found");
  }
}

_s(RestaurantList, "iVOAs+t0Lb7bZDQaNdf5b9R6m1g=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VhcmNoUXVlcnkiLCJyZXN0YXVyYW50cyIsImZpbHRlciIsInJlcyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoIiwicmVzdElkIiwibGVuZ3RoIiwiaWQiLCJHRVRfRElTSEVTIiwidmFyaWFibGVzIiwibG9hZGluZ0Rpc2hlcyIsImVycm9yRGlzaGVzIiwiZGF0YURpc2hlcyIsIkdFVF9EUklOS1MiLCJsb2FkaW5nRHJpbmtzIiwiZXJyb3JEcmlua3MiLCJkYXRhRHJpbmtzIiwicmVuZGVyRGlzaGVzIiwicmVzdGF1cmFudCIsImRpc2hlcyIsInJlbmRlckRyaW5rcyIsImRyaW5rcyIsInJlc3RMaXN0IiwibWFwIiwibWFyZ2luIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVlBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsQ0FBRCxDQURwQjtBQUFBLE1BQ3JCQyxZQURxQjtBQUFBLE1BQ1BDLGVBRE87O0FBQUEsb0JBRVhDLHdEQUFVLENBQUNDLGdEQUFELENBRkM7QUFBQSxNQUVwQkMsSUFGb0IsZUFFcEJBLElBRm9C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O0FBQUE7QUFBQSxTQUVBLE1BQUMsaURBQUQ7QUFBUSxhQUFLLEVBQUMsTUFBZDtBQUFxQixlQUFPLEVBQUU7QUFBQSxpQkFBSzNDLGVBQWUsQ0FBQ2UsR0FBRyxDQUFDTyxFQUFMLENBQXBCO0FBQUEsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE2RFAsR0FBRyxDQUFDQyxJQUFqRSxDQUZBLENBWEYsQ0FERixDQUQrQjtBQUFBLEtBQWhCLENBQWpCO0FBc0JBLFdBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR3FCLFFBREgsQ0FERixFQUlFLE1BQUMsOENBQUQ7QUFBSyxRQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dMLFlBQVksQ0FBQ2pDLFlBQUQsQ0FEZixDQUpGLEVBT0UsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR29DLFlBQVksQ0FBQ3BDLFlBQUQsQ0FEZixDQVBGLENBREY7QUFhRCxHQXBDRCxNQW9DTztBQUNMLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBUDtBQUNEO0FBQ0Y7O0dBcEhRSCxjO1VBZ0IwQlksdUQsRUEwQndDQSx1RCxFQWdCQUEsdUQ7OztLQTFEbEVaLGM7QUFxSE1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjhhYWFkMTNhYWU0ZTA2NzYyYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgRGlzaGVzIGZyb20gXCIuL2Rpc2hlc1wiXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5cbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIlxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBSZXN0YXVyYW50TGlzdChwcm9wcyl7XG4gIGNvbnN0IFtyZXN0YXVyYW50SUQsIHNldFJlc3RhdXJhbnRJRF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydClcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUylcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1I8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuXG4gIGxldCBzZWFyY2hRdWVyeSA9IGRhdGEucmVzdGF1cmFudHMuZmlsdGVyKChyZXMpID0+e1xuICAgIHJldHVybiByZXMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaClcbiAgfSlcblxuICBsZXQgcmVzdElkID0gc2VhcmNoUXVlcnkubGVuZ3RoID4gMCAmJiBzZWFyY2hRdWVyeVswXS5pZCA+IDAgPyBzZWFyY2hRdWVyeVswXS5pZCA6IG51bGw7XG5cbiAgY29uc3QgR0VUX0RJU0hFUyA9IGdxbGBcbiAgICBxdWVyeSBHZXREaXNoZXMoJGlkOiBJRCEpIHtcbiAgICAgIHJlc3RhdXJhbnQoaWQ6ICRpZCkge1xuICAgICAgICBkaXNoZXMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZzogbG9hZGluZ0Rpc2hlcywgZXJyb3I6IGVycm9yRGlzaGVzLCBkYXRhOiBkYXRhRGlzaGVzIH0gPSB1c2VRdWVyeShHRVRfRElTSEVTLCB7XG4gICAgdmFyaWFibGVzOiB7IGlkOiByZXN0YXVyYW50SUQgfVxuICB9KTtcblxuICBjb25zdCBHRVRfRFJJTktTID0gZ3FsYFxuICAgIHF1ZXJ5IEdldERyaW5rcygkaWQ6IElEISkge1xuICAgICAgcmVzdGF1cmFudChpZDogJGlkKSB7XG4gICAgICAgIGRyaW5rcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmc6IGxvYWRpbmdEcmlua3MsIGVycm9yOiBlcnJvckRyaW5rcywgZGF0YTogZGF0YURyaW5rcyB9ID0gdXNlUXVlcnkoR0VUX0RSSU5LUywge1xuICAgIHZhcmlhYmxlczogeyBpZDogcmVzdGF1cmFudElEIH1cbiAgfSk7XG5cbiAgLy8gRGVmaW5lIHJlbmRlcmVyIGZvciBEaXNoZXNcbiAgY29uc3QgcmVuZGVyRGlzaGVzID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nRGlzaGVzKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgaWYgKGVycm9yRGlzaGVzKSByZXR1cm4gPHA+RXJyb3I8L3A+O1xuICAgIGlmICghZGF0YURpc2hlcykgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG4gICAgcmV0dXJuICg8RGlzaGVzIGRpc2hlcz17ZGF0YURpc2hlcy5yZXN0YXVyYW50LmRpc2hlc30+PC9EaXNoZXM+KVxuICB9O1xuICBcbiAgLy8gRGVmaW5lIHJlbmRlcmVyIGZvciBEcmlua3NcbiAgY29uc3QgcmVuZGVyRHJpbmtzID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nRHJpbmtzKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgaWYgKGVycm9yRHJpbmtzKSByZXR1cm4gPHA+RXJyb3I8L3A+O1xuICAgIGlmICghZGF0YURyaW5rcykgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG4gICAgcmV0dXJuICg8RHJpbmtzIGRyaW5rcz17ZGF0YURyaW5rcy5yZXN0YXVyYW50LmRyaW5rc30+PC9Ecmlua3M+KVxuICB9O1xuICBpZihzZWFyY2hRdWVyeS5sZW5ndGggPiAwKXtcbiAgICBjb25zdCByZXN0TGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzKSA9PiAoXG4gICAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiIGtleT17cmVzLmlkfT5cbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XG4gICAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzN2ArIHJlcy5pbWFnZS51cmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKT0+IHNldFJlc3RhdXJhbnRJRChyZXMuaWQpfT57cmVzLm5hbWV9PC9CdXR0b24+XG4gICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NvbD5cbiAgICApKVxuICBcbiAgICByZXR1cm4oXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93IHhzPSczJz5cbiAgICAgICAgICB7cmVzdExpc3R9XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93IHhzPSczJz5cbiAgICAgICAgICB7cmVuZGVyRGlzaGVzKHJlc3RhdXJhbnRJRCl9XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93IHhzPSczJz5cbiAgICAgICAgICB7cmVuZGVyRHJpbmtzKHJlc3RhdXJhbnRJRCl9XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiA8aDE+IE5vIFJlc3RhdXJhbnRzIEZvdW5kPC9oMT5cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9