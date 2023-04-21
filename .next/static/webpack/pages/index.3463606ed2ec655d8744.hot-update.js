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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2VsZWN0ZWRSZXN0YXVyYW50Iiwic2V0U2VsZWN0ZWRSZXN0YXVyYW50IiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUmVzdGF1cmFudFNlbGVjdCIsInJlc3RhdXJhbnQiLCJyZW5kZXJNZW51IiwibmFtZSIsImRpc2hlcyIsImRyaW5rcyIsInJlc3RhdXJhbnRzIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCIsImlkIiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVlBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1pDLHdEQUFVLENBQUNDLGdEQUFELENBREU7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCOztBQUFBLGtCQUVIQyxzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV0QkUsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUFBLG1CQUdERixzREFBUSxDQUFDLEVBQUQsQ0FIUDtBQUFBLE1BR3RCRyxNQUhzQjtBQUFBLE1BR2RDLFNBSGM7O0FBQUEsbUJBSXVCSixzREFBUSxDQUFDLElBQUQsQ0FKL0I7QUFBQSxNQUl0Qkssa0JBSnNCO0FBQUEsTUFJRkMscUJB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RUFFRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBV0YsVUFBVSxDQUFDYSxXQUF0QixDQUZGLEVBR0UsTUFBQyxpREFBRDtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWQsc0JBQXNCLENBQUNDLFVBQUQsQ0FBNUI7QUFBQSxXQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsQ0FQRixDQURGLENBREc7QUFBQSxPQUpOLENBREgsQ0FERixDQVJGLENBREY7QUF3Q0Q7QUFDRixHQXRERDs7QUF3REEsU0FBT0MsVUFBVSxFQUFqQjtBQUNEOztHQWxHUXhCLGM7VUErQjBCYyx1RDs7O0tBL0IxQmQsYztBQW1HTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzQ2MzYwNmVkMmVjNjU1ZDg3NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCBEcmlua3MgZnJvbSBcIi4vZHJpbmtzXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRCb2R5LFxuICBDYXJkSW1nLFxuICBDYXJkVGV4dCxcbiAgQ2FyZFRpdGxlLFxuICBDb2wsXG4gIENvbnRhaW5lcixcbiAgUm93LFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBSZXN0YXVyYW50TGlzdChwcm9wcykge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydCk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlbGVjdGVkUmVzdGF1cmFudCwgc2V0U2VsZWN0ZWRSZXN0YXVyYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGRpc2hlcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBwcmljZVxuICAgICAgICB9XG4gICAgICAgIGRyaW5rcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUyk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlc3RhdXJhbnRTZWxlY3QgPSAocmVzdGF1cmFudCkgPT4ge1xuICAgIHNldFNlbGVjdGVkUmVzdGF1cmFudChyZXN0YXVyYW50KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJNZW51ID0gKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZFJlc3RhdXJhbnQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFJlc3RhdXJhbnQobnVsbCl9PlxuICAgICAgICAgICAgQmFjayB0byByZXN0YXVyYW50c1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxoMj57c2VsZWN0ZWRSZXN0YXVyYW50Lm5hbWV9IG1lbnU6PC9oMj5cbiAgICAgICAgICA8RGlzaGVzIGRpc2hlcz17c2VsZWN0ZWRSZXN0YXVyYW50LmRpc2hlc30gLz5cbiAgICAgICAgICA8RHJpbmtzIGRyaW5rcz17c2VsZWN0ZWRSZXN0YXVyYW50LmRyaW5rc30gLz5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMj5SZXN0YXVyYW50czo8L2gyPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAge2RhdGEucmVzdGF1cmFudHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChyZXN0YXVyYW50KSA9PlxuICAgICAgICAgICAgICAgICAgcmVzdGF1cmFudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5tYXAoKHJlc3RhdXJhbnQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17NH0ga2V5PXtyZXN0YXVyYW50LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVzdGF1cmFudC5pbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Jlc3RhdXJhbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3Jlc3RhdXJhbnQubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXN0YXVyYW50U2VsZWN0KHJlc3RhdXJhbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHJlbmRlck1lbnUoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==