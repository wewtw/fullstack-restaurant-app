webpackHotUpdate_N_E("pages/receipts",{

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
  }, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoLmpzIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInJlZ2lzdGVyVXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInVzZXIiLCJDb29raWUiLCJzZXQiLCJqd3QiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsImFsZXJ0IiwiZXJyb3IiLCJsb2dpbiIsImlkZW50aWZpZXIiLCJsb2dvdXQiLCJyZW1vdmUiLCJyZW1vdmVJdGVtIiwiRGF0ZSIsIm5vdyIsIndpdGhBdXRoU3luYyIsIkNvbXBvbmVudCIsIldyYXBwZXIiLCJwcm9wcyIsInN5bmNMb2dvdXQiLCJldmVudCIsImtleSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJnZXQiLCJwYXJzZWRVc2VyIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQsQyxDQUVBOztBQUNPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFrQkMsUUFBbEIsRUFBK0I7QUFDekQ7QUFDQSxhQUFtQyxFQUVsQzs7QUFDRCxTQUFPLElBQUlDLE9BQUos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LElBQUksQ0FBQ21DLEtBQUwsQ0FBV2hDLElBQVgsQ0FBbkI7QUFDQSwyQ0FDSytCLFVBREw7QUFFRTVCLFNBQUcsRUFBRTBCO0FBRlA7QUFJRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDQWZNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2VpcHRzLmJjYTk0ZGEyNDVlZWJkZWI0ZjI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvbGliL2F1dGguanMgKi9cblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG5cbi8vcmVnaXN0ZXIgYSBuZXcgdXNlclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9ICh1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gIC8vcHJldmVudCBmdW5jdGlvbiBmcm9tIGJlaW5nIHJhbiBvbiB0aGUgc2VydmVyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke0FQSV9VUkx9L2F1dGgvbG9jYWwvcmVnaXN0ZXJgLCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgIC8vIFN0b3JlIHRoZSB1c2VyIGluZm9ybWF0aW9uIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEudXNlcikpO1xuICAgICAgICAvL3NldCB0b2tlbiByZXNwb25zZSBmcm9tIFN0cmFwaSBmb3Igc2VydmVyIHZhbGlkYXRpb25cbiAgICAgICAgQ29va2llLnNldChcInRva2VuXCIsIHJlcy5kYXRhLmp3dCk7XG5cbiAgICAgICAgLy9yZXNvbHZlIHRoZSBwcm9taXNlIHRvIHNldCBsb2FkaW5nIHRvIGZhbHNlIGluIFNpZ25VcCBmb3JtXG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgLy9yZWRpcmVjdCBiYWNrIHRvIGhvbWUgcGFnZSBmb3IgcmVzdGF1cmFuY2Ugc2VsZWN0aW9uXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICBhbGVydChcIlNlY2Nlc3MhISBCYWNrIHRvIGhvbWUgcGFnZS5cIik7Ly9lYXN5IG1lc3NcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAvL3JlamVjdCB0aGUgcHJvbWlzZSBhbmQgcGFzcyB0aGUgZXJyb3Igb2JqZWN0IGJhY2sgdG8gdGhlIGZvcm1cbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IChpZGVudGlmaWVyLCBwYXNzd29yZCkgPT4ge1xuICAvL3ByZXZlbnQgZnVuY3Rpb24gZnJvbSBiZWluZyByYW4gb24gdGhlIHNlcnZlclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke0FQSV9VUkx9L2F1dGgvbG9jYWwvYCwgeyBpZGVudGlmaWVyLCBwYXNzd29yZCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLnVzZXIpKTtcbiAgICAgICAgLy9zZXQgdG9rZW4gcmVzcG9uc2UgZnJvbSBTdHJhcGkgZm9yIHNlcnZlciB2YWxpZGF0aW9uXG4gICAgICAgIENvb2tpZS5zZXQoXCJ0b2tlblwiLCByZXMuZGF0YS5qd3QpO1xuXG4gICAgICAgIC8vcmVzb2x2ZSB0aGUgcHJvbWlzZSB0byBzZXQgbG9hZGluZyB0byBmYWxzZSBpbiBTaWduVXAgZm9ybVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIC8vcmVkaXJlY3QgYmFjayB0byBob21lIHBhZ2UgZm9yIHJlc3RhdXJhbmNlIHNlbGVjdGlvblxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICBhbGVydChcIkxvZyBJbiBTZWNjZXNzIVwiKTsvL2Vhc3kgbWVzc1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAvL3JlamVjdCB0aGUgcHJvbWlzZSBhbmQgcGFzcyB0aGUgZXJyb3Igb2JqZWN0IGJhY2sgdG8gdGhlIGZvcm1cbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gIC8vcmVtb3ZlIHRva2VuIGFuZCB1c2VyIGNvb2tpZVxuICBDb29raWUucmVtb3ZlKFwidG9rZW5cIik7XG4gIC8vZGVsZXRlIHdpbmRvdy5fX3VzZXI7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7Ly9leHBlcmltZW50YWwgXG4gIC8vIHN5bmMgbG9nb3V0IGJldHdlZW4gbXVsdGlwbGUgd2luZG93c1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dvdXRcIiwgRGF0ZS5ub3coKSk7XG4gIC8vcmVkaXJlY3QgdG8gdGhlIGhvbWUgcGFnZVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgYWxlcnQoXCJTZWNjZXNzISEgQmFjayB0byBob21lIHBhZ2UuXCIpOy8vZWFzeSBtZXNzXG4gIH0sIDEwMDApO1xuICBcbn07XG5cbi8vSGlnaGVyIE9yZGVyIENvbXBvbmVudCB0byB3cmFwIG91ciBwYWdlcyBhbmQgbG9nb3V0IHNpbXVsdGFuZW91c2x5IGxvZ2dlZCBpbiB0YWJzXG4vLyBUSElTIElTIE5PVCBVU0VEIGluIHRoZSB0dXRvcmlhbCwgb25seSBwcm92aWRlZCBpZiB5b3Ugd2FudGVkIHRvIGltcGxlbWVudFxuZXhwb3J0IGNvbnN0IHdpdGhBdXRoU3luYyA9IChDb21wb25lbnQpID0+IHtcbiAgY29uc3QgV3JhcHBlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHN5bmNMb2dvdXQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwibG9nb3V0XCIpIHtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgc3luY0xvZ291dCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBzeW5jTG9nb3V0KTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9nb3V0XCIpO1xuICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xuICB9O1xuXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICB9XG5cbiAgcmV0dXJuIFdyYXBwZXI7XG59O1xuXG4vLyBSZXRyaWV2ZSB0aGUgdXNlciBpbmZvcm1hdGlvbiBmcm9tIGxvY2FsIHN0b3JhZ2VcbmV4cG9ydCBjb25zdCBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xuICBjb25zdCB0b2tlbiA9IENvb2tpZS5nZXQoXCJ0b2tlblwiKTtcbiAgaWYgKHVzZXIpIHtcbiAgICBjb25zdCBwYXJzZWRVc2VyID0gSlNPTi5wYXJzZSh1c2VyKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucGFyc2VkVXNlcixcbiAgICAgIGp3dDogdG9rZW4sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9