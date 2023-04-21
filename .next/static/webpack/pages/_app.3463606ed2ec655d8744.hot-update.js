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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedRestaurant = _useState3[0],
      setSelectedRestaurant = _useState3[1];

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var handleSearchChange = function handleSearchChange(e) {
    setSearch(e.target.value);
  };

  var handleRestaurantSelect = function handleRestaurantSelect(restaurant) {
    setSelectedRestaurant(restaurant);
  };

  var renderMenu = function renderMenu() {
    if (selectedRestaurant) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: function onClick() {
          return setSelectedRestaurant(null);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }, "Back to restaurants"), __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }, selectedRestaurant.name, " menu:"), __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
        dishes: selectedRestaurant.dishes,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }), __jsx(_drinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
        drinks: selectedRestaurant.drinks,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }
      }, "Restaurants:"), __jsx("input", {
        type: "text",
        placeholder: "Search",
        value: search,
        onChange: handleSearchChange,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }
      }, data.restaurants.filter(function (restaurant) {
        return restaurant.name.toLowerCase().includes(search.toLowerCase());
      }).map(function (restaurant) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          xs: 12,
          md: 4,
          key: restaurant.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 19
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
          top: true,
          width: "100%",
          src: restaurant.image.url,
          alt: restaurant.name,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 23
          }
        }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 23
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }
        }, restaurant.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }
        }, restaurant.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          onClick: function onClick() {
            return handleRestaurantSelect(restaurant);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }
        }, "View menu"))));
      }))));
    }
  };

  return renderMenu();
}

_s(RestaurantList, "pc3araL/eTorYmfBvKKY1kMYz1U=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2VsZWN0ZWRSZXN0YXVyYW50Iiwic2V0U2VsZWN0ZWRSZXN0YXVyYW50IiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUmVzdGF1cmFudFNlbGVjdCIsInJlc3RhdXJhbnQiLCJyZW5kZXJNZW51IiwibmFtZSIsImRpc2hlcyIsImRyaW5rcyIsInJlc3RhdXJhbnRzIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCIsImlkIiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVlBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1pDLHdEQUFVLENBQUNDLGdEQUFELENBREU7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCOztBQUFBLGtCQUVIQyxzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV0QkUsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUFBLG1CQUdERixzREFBUSxDQUFDLEVBQUQsQ0FIUDtBQUFBLE1BR3RCRyxNQUhzQjtBQUFBLE1BR2RDLFNBSGM7O0FBQUEsbUJBSXVCSixzREFBUSxDQUFDLElBQUQsQ0FKL0I7QUFBQSxNQUl0Qkssa0JBSnNCO0FBQUEsTUFJRkMscUJB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RUFFRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBV0YsVUFBVSxDQUFDYSxXQUF0QixDQUZGLEVBR0UsTUFBQyxpREFBRDtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWQsc0JBQXNCLENBQUNDLFVBQUQsQ0FBNUI7QUFBQSxXQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsQ0FQRixDQURGLENBREc7QUFBQSxPQUpOLENBREgsQ0FERixDQVJGLENBREY7QUF3Q0Q7QUFDRixHQXRERDs7QUF3REEsU0FBT0MsVUFBVSxFQUFqQjtBQUNEOztHQWxHUXhCLGM7VUErQjBCYyx1RDs7O0tBL0IxQmQsYztBQW1HTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNDYzNjA2ZWQyZWM2NTVkODc0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgRGlzaGVzIGZyb20gXCIuL2Rpc2hlc1wiO1xuaW1wb3J0IERyaW5rcyBmcm9tIFwiLi9kcmlua3NcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbCxcbiAgQ29udGFpbmVyLFxuICBSb3csXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRSZXN0YXVyYW50LCBzZXRTZWxlY3RlZFJlc3RhdXJhbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgZGlzaGVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICAgICAgZHJpbmtzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzdGF1cmFudFNlbGVjdCA9IChyZXN0YXVyYW50KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRSZXN0YXVyYW50KHJlc3RhdXJhbnQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1lbnUgPSAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUmVzdGF1cmFudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUmVzdGF1cmFudChudWxsKX0+XG4gICAgICAgICAgICBCYWNrIHRvIHJlc3RhdXJhbnRzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPGgyPntzZWxlY3RlZFJlc3RhdXJhbnQubmFtZX0gbWVudTo8L2gyPlxuICAgICAgICAgIDxEaXNoZXMgZGlzaGVzPXtzZWxlY3RlZFJlc3RhdXJhbnQuZGlzaGVzfSAvPlxuICAgICAgICAgIDxEcmlua3MgZHJpbmtzPXtzZWxlY3RlZFJlc3RhdXJhbnQuZHJpbmtzfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgyPlJlc3RhdXJhbnRzOjwvaDI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICB7ZGF0YS5yZXN0YXVyYW50c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHJlc3RhdXJhbnQpID0+XG4gICAgICAgICAgICAgICAgICByZXN0YXVyYW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLm1hcCgocmVzdGF1cmFudCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs0fSBrZXk9e3Jlc3RhdXJhbnQuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXN0YXVyYW50LmltYWdlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cmVzdGF1cmFudC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT57cmVzdGF1cmFudC5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PntyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlc3RhdXJhbnRTZWxlY3QocmVzdGF1cmFudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgbWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcmVuZGVyTWVudSgpO1xufVxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9