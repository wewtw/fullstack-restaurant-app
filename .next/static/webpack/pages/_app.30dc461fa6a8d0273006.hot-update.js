webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/auth.js":
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/*! exports provided: registerUser, login, logout, withAuthSync, getUserFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFromLocalStorage", function() { return getUserFromLocalStorage; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\components\\auth.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* /lib/auth.js */




var API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; //register a new user

var registerUser = function registerUser(username, email, password) {
  //prevent function from being ran on the server
  if (false) {}

  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(API_URL, "/auth/local/register"), {
      username: username,
      email: email,
      password: password
    }).then(function (res) {
      // Store the user information in local storage
      window.localStorage.setItem("user", JSON.stringify(res.data.user)); //set token response from Strapi for server validation

      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("token", res.data.jwt); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      setTimeout(function () {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
        alert("Seccess!! Back to home page."); //easy mess
      }, 1000);
    })["catch"](function (error) {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
var login = function login(identifier, password) {
  //prevent function from being ran on the server
  if (false) {}

  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(API_URL, "/auth/local/"), {
      identifier: identifier,
      password: password
    }).then(function (res) {
      window.localStorage.setItem("user", JSON.stringify(res.data.user)); //set token response from Strapi for server validation

      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("token", res.data.jwt); //resolve the promise to set loading to false in SignUp form

      resolve(res);
      setTimeout(function () {
        //redirect back to home page for restaurance selection
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
        alert("Log In Seccess!"); //easy mess
      }, 1000);
    })["catch"](function (error) {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
var logout = function logout() {
  //remove token and user cookie
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("token"); //delete window.__user;

  window.localStorage.removeItem("user"); //experimental 
  // sync logout between multiple windows

  window.localStorage.setItem("logout", Date.now()); //redirect to the home page

  setTimeout(function () {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
    alert("Seccess!! Back to home page."); //easy mess
  });
}; //Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement

var withAuthSync = function withAuthSync(Component) {
  var _s = $RefreshSig$();

  var Wrapper = function Wrapper(props) {
    _s();

    var syncLogout = function syncLogout(event) {
      if (event.key === "logout") {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/login");
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
      window.addEventListener("storage", syncLogout);
      return function () {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);
    return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 12
      }
    }));
  };

  _s(Wrapper, "OD7bBpZva5O2jO+Puf00hKivP7c=");

  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
}; // Retrieve the user information from local storage

var getUserFromLocalStorage = function getUserFromLocalStorage() {
  if (false) {}

  var user = window.localStorage.getItem("user");
  var token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token");

  if (user) {
    var parsedUser = JSON.parse(user);
    return _objectSpread(_objectSpread({}, parsedUser), {}, {
      jwt: token
    });
  }

  return null;
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoLmpzIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInJlZ2lzdGVyVXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInVzZXIiLCJDb29raWUiLCJzZXQiLCJqd3QiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsImFsZXJ0IiwiZXJyb3IiLCJsb2dpbiIsImlkZW50aWZpZXIiLCJsb2dvdXQiLCJyZW1vdmUiLCJyZW1vdmVJdGVtIiwiRGF0ZSIsIm5vdyIsIndpdGhBdXRoU3luYyIsIkNvbXBvbmVudCIsIldyYXBwZXIiLCJwcm9wcyIsInN5bmNMb2dvdXQiLCJldmVudCIsImtleSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJnZXQiLCJwYXJzZWRVc2VyIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQsQyxDQUVBOztBQUNPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFrQkMsUUFBbEIsRUFBK0I7QUFDekQ7QUFDQSxhQUFtQyxFQUVsQzs7QUFDRCxTQUFPLElBQUlDLE9BQUos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bUMsS0FBTCxDQUFXaEMsSUFBWCxDQUFuQjtBQUNBLDJDQUNLK0IsVUFETDtBQUVFNUIsU0FBRyxFQUFFMEI7QUFGUDtBQUlEOztBQUNELFNBQU8sSUFBUDtBQUNELENBZk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMGRjNDYxZmE2YThkMDI3MzAwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL2xpYi9hdXRoLmpzICovXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuXG4vL3JlZ2lzdGVyIGEgbmV3IHVzZXJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSAodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAvL3ByZXZlbnQgZnVuY3Rpb24gZnJvbSBiZWluZyByYW4gb24gdGhlIHNlcnZlclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtBUElfVVJMfS9hdXRoL2xvY2FsL3JlZ2lzdGVyYCwgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAvLyBTdG9yZSB0aGUgdXNlciBpbmZvcm1hdGlvbiBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLnVzZXIpKTtcbiAgICAgICAgLy9zZXQgdG9rZW4gcmVzcG9uc2UgZnJvbSBTdHJhcGkgZm9yIHNlcnZlciB2YWxpZGF0aW9uXG4gICAgICAgIENvb2tpZS5zZXQoXCJ0b2tlblwiLCByZXMuZGF0YS5qd3QpO1xuXG4gICAgICAgIC8vcmVzb2x2ZSB0aGUgcHJvbWlzZSB0byBzZXQgbG9hZGluZyB0byBmYWxzZSBpbiBTaWduVXAgZm9ybVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIC8vcmVkaXJlY3QgYmFjayB0byBob21lIHBhZ2UgZm9yIHJlc3RhdXJhbmNlIHNlbGVjdGlvblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgYWxlcnQoXCJTZWNjZXNzISEgQmFjayB0byBob21lIHBhZ2UuXCIpOy8vZWFzeSBtZXNzXG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy9yZWplY3QgdGhlIHByb21pc2UgYW5kIHBhc3MgdGhlIGVycm9yIG9iamVjdCBiYWNrIHRvIHRoZSBmb3JtXG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSAoaWRlbnRpZmllciwgcGFzc3dvcmQpID0+IHtcbiAgLy9wcmV2ZW50IGZ1bmN0aW9uIGZyb20gYmVpbmcgcmFuIG9uIHRoZSBzZXJ2ZXJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtBUElfVVJMfS9hdXRoL2xvY2FsL2AsIHsgaWRlbnRpZmllciwgcGFzc3dvcmQgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS51c2VyKSk7XG4gICAgICAgIC8vc2V0IHRva2VuIHJlc3BvbnNlIGZyb20gU3RyYXBpIGZvciBzZXJ2ZXIgdmFsaWRhdGlvblxuICAgICAgICBDb29raWUuc2V0KFwidG9rZW5cIiwgcmVzLmRhdGEuand0KTtcblxuICAgICAgICAvL3Jlc29sdmUgdGhlIHByb21pc2UgdG8gc2V0IGxvYWRpbmcgdG8gZmFsc2UgaW4gU2lnblVwIGZvcm1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvL3JlZGlyZWN0IGJhY2sgdG8gaG9tZSBwYWdlIGZvciByZXN0YXVyYW5jZSBzZWxlY3Rpb25cbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgYWxlcnQoXCJMb2cgSW4gU2VjY2VzcyFcIik7Ly9lYXN5IG1lc3NcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy9yZWplY3QgdGhlIHByb21pc2UgYW5kIHBhc3MgdGhlIGVycm9yIG9iamVjdCBiYWNrIHRvIHRoZSBmb3JtXG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAvL3JlbW92ZSB0b2tlbiBhbmQgdXNlciBjb29raWVcbiAgQ29va2llLnJlbW92ZShcInRva2VuXCIpO1xuICAvL2RlbGV0ZSB3aW5kb3cuX191c2VyO1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpOy8vZXhwZXJpbWVudGFsIFxuICAvLyBzeW5jIGxvZ291dCBiZXR3ZWVuIG11bHRpcGxlIHdpbmRvd3NcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9nb3V0XCIsIERhdGUubm93KCkpO1xuICAvL3JlZGlyZWN0IHRvIHRoZSBob21lIHBhZ2VcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIGFsZXJ0KFwiU2VjY2VzcyEhIEJhY2sgdG8gaG9tZSBwYWdlLlwiKTsvL2Vhc3kgbWVzc1xuICB9KTtcbiAgXG59O1xuXG4vL0hpZ2hlciBPcmRlciBDb21wb25lbnQgdG8gd3JhcCBvdXIgcGFnZXMgYW5kIGxvZ291dCBzaW11bHRhbmVvdXNseSBsb2dnZWQgaW4gdGFic1xuLy8gVEhJUyBJUyBOT1QgVVNFRCBpbiB0aGUgdHV0b3JpYWwsIG9ubHkgcHJvdmlkZWQgaWYgeW91IHdhbnRlZCB0byBpbXBsZW1lbnRcbmV4cG9ydCBjb25zdCB3aXRoQXV0aFN5bmMgPSAoQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IFdyYXBwZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBzeW5jTG9nb3V0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcImxvZ291dFwiKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHN5bmNMb2dvdXQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgc3luY0xvZ291dCk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvZ291dFwiKTtcbiAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbiAgfTtcblxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIFdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgfVxuXG4gIHJldHVybiBXcmFwcGVyO1xufTtcblxuLy8gUmV0cmlldmUgdGhlIHVzZXIgaW5mb3JtYXRpb24gZnJvbSBsb2NhbCBzdG9yYWdlXG5leHBvcnQgY29uc3QgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB1c2VyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcbiAgY29uc3QgdG9rZW4gPSBDb29raWUuZ2V0KFwidG9rZW5cIik7XG4gIGlmICh1c2VyKSB7XG4gICAgY29uc3QgcGFyc2VkVXNlciA9IEpTT04ucGFyc2UodXNlcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnBhcnNlZFVzZXIsXG4gICAgICBqd3Q6IHRva2VuLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==