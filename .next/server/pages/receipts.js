module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/receipts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/auth.js":
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/*! exports provided: registerUser, login, logout, withAuthSync, getUserFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFromLocalStorage", function() { return getUserFromLocalStorage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\X\\Desktop\\fullstack-restaurant-app\\components\\auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* /lib/auth.js */




const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; //register a new user

const registerUser = (username, email, password) => {
  //prevent function from being ran on the server
  if (true) {
    return;
  }

  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${API_URL}/auth/local/register`, {
      username,
      email,
      password
    }).then(res => {
      /// Store the user information in local storage
      window.localStorage.setItem("user", JSON.stringify(res.data.user)); ///set token response from Strapi for server validation

      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("token", res.data.jwt); ///resolve the promise to set loading to false in SignUp form

      resolve(res); ///redirect back to home page for restaurance selection

      setTimeout(() => {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
        alert("Seccess!! Back to home page."); //easy mess
      }, 1000);
    }).catch(error => {
      ///reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
const login = (identifier, password) => {
  ////prevent function from being ran on the server
  if (true) {
    return;
  }

  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${API_URL}/auth/local/`, {
      identifier,
      password
    }).then(res => {
      window.localStorage.setItem("user", JSON.stringify(res.data.user)); ////set token response from Strapi for server validation

      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("token", res.data.jwt); //resolve the promise to set loading to false in SignUp form

      resolve(res);
      setTimeout(() => {
        ///redirect back to home page for restaurance selection
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
        alert("Log In Seccess!"); //easy mess
      }, 1000);
    }).catch(error => {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
const logout = () => {
  //remove token and user cookie
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("token"); //delete window.__user;

  window.localStorage.removeItem("user"); //experimental 
  /// sync logout between multiple windows

  window.localStorage.setItem("logout", Date.now()); ////redirect to the home page

  setTimeout(() => {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
    alert("Seccess!! Back to home page."); //easy mess
  });
}; //Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement

const withAuthSync = Component => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === "logout") {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener("storage", syncLogout);
      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);
    return __jsx(Component, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 12
      }
    }));
  };

  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
}; //// Retrieve the user information from local storage

const getUserFromLocalStorage = () => {
  if (true) {
    return null;
  }

  const user = window.localStorage.getItem("user");
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("token");

  if (user) {
    const parsedUser = JSON.parse(user);
    return _objectSpread(_objectSpread({}, parsedUser), {}, {
      jwt: token
    });
  }

  return null;
};

/***/ }),

/***/ "./pages/receipts.js":
/*!***************************!*\
  !*** ./pages/receipts.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/auth */ "./components/auth.js");
var _jsxFileName = "C:\\Users\\X\\Desktop\\fullstack-restaurant-app\\pages\\receipts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //importing the getUserFromLocalStorage function to get the currently logged in user. step-1.

function Receipts() {
  const {
    0: orders,
    1: setOrders
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // will store list of orders. step-2

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; //set up the api url. step-3.
  //last good no errors.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //hook to fetch the orders data from the Strapi API, using the logged in user's ID as a query parameter.step-4.
    const fetchData = async () => {
      try {
        const user = Object(_components_auth__WEBPACK_IMPORTED_MODULE_1__["getUserFromLocalStorage"])();

        if (!user) {
          console.log("User not found");
          return;
        }

        const response = await fetch(`${API_URL}/orders?user=${user.id}`, {
          headers: {
            Authorization: `Bearer ${user.jwt}`
          }
        });
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); ///map orders. step-5.
  //divded the amount by 100 to fix to a dollar.
  ///added a new status field. admin can set status in the panel. 
  //next step make a new page just for workers who can set status to shiped or delivered.   

  return __jsx("div", {
    style: {
      marginBottom: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: {
      fontSize: "2rem",
      marginBottom: "1rem",
      marginTop: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Order History"), orders.map((order, index) => __jsx("div", {
    key: order.id,
    style: {
      fontSize: "1.5rem",
      border: "1px solid #ccc",
      background: "white",
      padding: "1rem",
      marginBottom: index === orders.length - 1 ? 0 : "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Order ID: ", order.id), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Amount: $", order.amount / 100), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Status: ", order.status))));
}

/* harmony default export */ __webpack_exports__["default"] = (Receipts);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3JlY2VpcHRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInJlZ2lzdGVyVXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInVzZXIiLCJDb29raWUiLCJzZXQiLCJqd3QiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsImFsZXJ0IiwiY2F0Y2giLCJlcnJvciIsImxvZ2luIiwiaWRlbnRpZmllciIsImxvZ291dCIsInJlbW92ZSIsInJlbW92ZUl0ZW0iLCJEYXRlIiwibm93Iiwid2l0aEF1dGhTeW5jIiwiQ29tcG9uZW50IiwiV3JhcHBlciIsInByb3BzIiwic3luY0xvZ291dCIsImV2ZW50Iiwia2V5IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsImdldCIsInBhcnNlZFVzZXIiLCJwYXJzZSIsIlJlY2VpcHRzIiwib3JkZXJzIiwic2V0T3JkZXJzIiwidXNlU3RhdGUiLCJmZXRjaERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsImlkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqc29uIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJtYXAiLCJvcmRlciIsImluZGV4IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJsZW5ndGgiLCJhbW91bnQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBQW5ELEMsQ0FFQTs7QUFDTyxNQUFNQyxZQUFZLEdBQUcsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQWtCQyxRQUFsQixLQUErQjtBQUN6RDtBQUNBLFlBQW1DO0FBQ2pDO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3RDQyxnREFBSyxDQUNGQyxJQURILENBQ1MsR0FBRVosT0FBUSxzQkFEbkIsRUFDMEM7QUFBRUssY0FBRjtBQUFZQyxXQUFaO0FBQW1CQztBQUFuQixLQUQxQyxFQUVHTSxJQUZILENBRVNDLEdBQUQsSUFBUztBQUNaO0FBQ0FDLFlBQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsRUFBb0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxHQUFHLENBQUNNLElBQUosQ0FBU0MsSUFBeEIsQ0FBcEMsRUFGWSxDQUdiOztBQUNBQyxzREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxFQUFvQlQsR0FBRyxDQUFDTSxJQUFKLENBQVNJLEdBQTdCLEVBSmEsQ0FNYjs7QUFDQWYsYUFBTyxDQUFDSyxHQUFELENBQVAsQ0FQYSxDQVFiOztBQUNBVyxnQkFBVSxDQUFDLE1BQU07QUFDZkMsMERBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDQUMsYUFBSyxDQUFDLDhCQUFELENBQUwsQ0FGZSxDQUV1QjtBQUN2QyxPQUhTLEVBR1AsSUFITyxDQUFWO0FBSUQsS0FmSCxFQWdCR0MsS0FoQkgsQ0FnQlVDLEtBQUQsSUFBVztBQUNoQjtBQUNBcEIsWUFBTSxDQUFDb0IsS0FBRCxDQUFOO0FBQ0QsS0FuQkg7QUFvQkQsR0FyQk0sQ0FBUDtBQXNCRCxDQTNCTTtBQTZCQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0MsVUFBRCxFQUFhekIsUUFBYixLQUEwQjtBQUM3QztBQUNBLFlBQW1DO0FBQ2pDO0FBQ0Q7O0FBRUQsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3RDQyxnREFBSyxDQUNGQyxJQURILENBQ1MsR0FBRVosT0FBUSxjQURuQixFQUNrQztBQUFFZ0MsZ0JBQUY7QUFBY3pCO0FBQWQsS0FEbEMsRUFFR00sSUFGSCxDQUVTQyxHQUFELElBQVM7QUFDYkMsWUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixNQUE1QixFQUFvQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVMLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxJQUF4QixDQUFwQyxFQURhLENBRWI7O0FBQ0FDLHNEQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLEVBQW9CVCxHQUFHLENBQUNNLElBQUosQ0FBU0ksR0FBN0IsRUFIYSxDQUtiOztBQUNBZixhQUFPLENBQUNLLEdBQUQsQ0FBUDtBQUNBVyxnQkFBVSxDQUFDLE1BQU07QUFDZjtBQUNBQywwREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNBQyxhQUFLLENBQUMsaUJBQUQsQ0FBTCxDQUhlLENBR1U7QUFDMUIsT0FKUyxFQUlQLElBSk8sQ0FBVjtBQU1ELEtBZkgsRUFnQkdDLEtBaEJILENBZ0JVQyxLQUFELElBQVc7QUFDaEI7QUFDQXBCLFlBQU0sQ0FBQ29CLEtBQUQsQ0FBTjtBQUNELEtBbkJIO0FBb0JELEdBckJNLENBQVA7QUFzQkQsQ0E1Qk07QUE4QkEsTUFBTUcsTUFBTSxHQUFHLE1BQU07QUFDMUI7QUFDQVgsa0RBQU0sQ0FBQ1ksTUFBUCxDQUFjLE9BQWQsRUFGMEIsQ0FHMUI7O0FBQ0FuQixRQUFNLENBQUNDLFlBQVAsQ0FBb0JtQixVQUFwQixDQUErQixNQUEvQixFQUowQixDQUlhO0FBQ3ZDOztBQUNBcEIsUUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixRQUE1QixFQUFzQ21CLElBQUksQ0FBQ0MsR0FBTCxFQUF0QyxFQU4wQixDQU8xQjs7QUFDQVosWUFBVSxDQUFDLE1BQU07QUFDZkMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDQUMsU0FBSyxDQUFDLDhCQUFELENBQUwsQ0FGZSxDQUV1QjtBQUN2QyxHQUhTLENBQVY7QUFLRCxDQWJNLEMsQ0FlUDtBQUNBOztBQUNPLE1BQU1VLFlBQVksR0FBSUMsU0FBRCxJQUFlO0FBQ3pDLFFBQU1DLE9BQU8sR0FBSUMsS0FBRCxJQUFXO0FBQ3pCLFVBQU1DLFVBQVUsR0FBSUMsS0FBRCxJQUFXO0FBQzVCLFVBQUlBLEtBQUssQ0FBQ0MsR0FBTixLQUFjLFFBQWxCLEVBQTRCO0FBQzFCbEIsMERBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRDtBQUNGLEtBSkQ7O0FBTUFrQiwyREFBUyxDQUFDLE1BQU07QUFDZDlCLFlBQU0sQ0FBQytCLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DSixVQUFuQztBQUVBLGFBQU8sTUFBTTtBQUNYM0IsY0FBTSxDQUFDZ0MsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NMLFVBQXRDO0FBQ0EzQixjQUFNLENBQUNDLFlBQVAsQ0FBb0JtQixVQUFwQixDQUErQixRQUEvQjtBQUNELE9BSEQ7QUFJRCxLQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsV0FBTyxNQUFDLFNBQUQsZUFBZU0sS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVA7QUFDRCxHQWpCRDs7QUFtQkEsTUFBSUYsU0FBUyxDQUFDUyxlQUFkLEVBQStCO0FBQzdCUixXQUFPLENBQUNRLGVBQVIsR0FBMEJULFNBQVMsQ0FBQ1MsZUFBcEM7QUFDRDs7QUFFRCxTQUFPUixPQUFQO0FBQ0QsQ0F6Qk0sQyxDQTJCUDs7QUFDTyxNQUFNUyx1QkFBdUIsR0FBRyxNQUFNO0FBQzNDLFlBQW1DO0FBQ2pDLFdBQU8sSUFBUDtBQUNEOztBQUVELFFBQU01QixJQUFJLEdBQUdOLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQmtDLE9BQXBCLENBQTRCLE1BQTVCLENBQWI7QUFDQSxRQUFNQyxLQUFLLEdBQUc3QixnREFBTSxDQUFDOEIsR0FBUCxDQUFXLE9BQVgsQ0FBZDs7QUFDQSxNQUFJL0IsSUFBSixFQUFVO0FBQ1IsVUFBTWdDLFVBQVUsR0FBR25DLElBQUksQ0FBQ29DLEtBQUwsQ0FBV2pDLElBQVgsQ0FBbkI7QUFDQSwyQ0FDS2dDLFVBREw7QUFFRTdCLFNBQUcsRUFBRTJCO0FBRlA7QUFJRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDQWZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIUDtDQUVBOztBQUNBLFNBQVNJLFFBQVQsR0FBb0I7QUFDbEIsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDLEVBQUQsQ0FBcEMsQ0FEa0IsQ0FDdUI7O0FBQ3pDLFFBQU0xRCxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQsQ0FGa0IsQ0FFMEQ7QUFDOUU7O0FBQ0UwQyx5REFBUyxDQUFDLE1BQU07QUFBQztBQUNmLFVBQU1jLFNBQVMsR0FBRyxZQUFZO0FBQzVCLFVBQUk7QUFDRixjQUFNdEMsSUFBSSxHQUFHNEIsZ0ZBQXVCLEVBQXBDOztBQUNBLFlBQUksQ0FBQzVCLElBQUwsRUFBVztBQUNUdUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0E7QUFDRDs7QUFFRCxjQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUUvRCxPQUFRLGdCQUFlcUIsSUFBSSxDQUFDMkMsRUFBRyxFQUFuQyxFQUFzQztBQUNoRUMsaUJBQU8sRUFBRTtBQUNQQyx5QkFBYSxFQUFHLFVBQVM3QyxJQUFJLENBQUNHLEdBQUk7QUFEM0I7QUFEdUQsU0FBdEMsQ0FBNUI7QUFNQSxjQUFNSixJQUFJLEdBQUcsTUFBTTBDLFFBQVEsQ0FBQ0ssSUFBVCxFQUFuQjtBQUNBVixpQkFBUyxDQUFDckMsSUFBRCxDQUFUO0FBQ0QsT0FmRCxDQWVFLE9BQU9VLEtBQVAsRUFBYztBQUNkOEIsZUFBTyxDQUFDQyxHQUFSLENBQVkvQixLQUFaO0FBQ0Q7QUFDRixLQW5CRDs7QUFxQkE2QixhQUFTO0FBQ1YsR0F2QlEsRUF1Qk4sRUF2Qk0sQ0FBVCxDQUprQixDQTRCbEI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FDRTtBQUFLLFNBQUssRUFBRTtBQUFDUyxrQkFBWSxFQUFFO0FBQWYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFLE1BQVo7QUFBb0JELGtCQUFZLEVBQUUsTUFBbEM7QUFBMENFLGVBQVMsRUFBRTtBQUFyRCxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR2QsTUFBTSxDQUFDZSxHQUFQLENBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQ1Y7QUFBSyxPQUFHLEVBQUVELEtBQUssQ0FBQ1IsRUFBaEI7QUFBb0IsU0FBSyxFQUFFO0FBQ3ZCSyxjQUFRLEVBQUUsUUFEYTtBQUV2QkssWUFBTSxFQUFFLGdCQUZlO0FBR3ZCQyxnQkFBVSxFQUFFLE9BSFc7QUFJdkJDLGFBQU8sRUFBRSxNQUpjO0FBSU5SLGtCQUFZLEVBQUVLLEtBQUssS0FBS2pCLE1BQU0sQ0FBQ3FCLE1BQVAsR0FBZ0IsQ0FBMUIsR0FBOEIsQ0FBOUIsR0FBa0M7QUFKMUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWNMLEtBQUssQ0FBQ1IsRUFBcEIsQ0FMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWFRLEtBQUssQ0FBQ00sTUFBTixHQUFlLEdBQTVCLENBTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFZTixLQUFLLENBQUNPLE1BQWxCLENBUEYsQ0FERCxDQUZILENBREY7QUFnQkQ7O0FBRWN4Qix1RUFBZixFOzs7Ozs7Ozs7OztBQ3JEQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9yZWNlaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmVjZWlwdHMuanNcIik7XG4iLCIvKiAvbGliL2F1dGguanMgKi9cblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG5cbi8vcmVnaXN0ZXIgYSBuZXcgdXNlclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9ICh1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gIC8vcHJldmVudCBmdW5jdGlvbiBmcm9tIGJlaW5nIHJhbiBvbiB0aGUgc2VydmVyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke0FQSV9VUkx9L2F1dGgvbG9jYWwvcmVnaXN0ZXJgLCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgIC8vLyBTdG9yZSB0aGUgdXNlciBpbmZvcm1hdGlvbiBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLnVzZXIpKTtcbiAgICAgICAgLy8vc2V0IHRva2VuIHJlc3BvbnNlIGZyb20gU3RyYXBpIGZvciBzZXJ2ZXIgdmFsaWRhdGlvblxuICAgICAgICBDb29raWUuc2V0KFwidG9rZW5cIiwgcmVzLmRhdGEuand0KTtcblxuICAgICAgICAvLy9yZXNvbHZlIHRoZSBwcm9taXNlIHRvIHNldCBsb2FkaW5nIHRvIGZhbHNlIGluIFNpZ25VcCBmb3JtXG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgLy8vcmVkaXJlY3QgYmFjayB0byBob21lIHBhZ2UgZm9yIHJlc3RhdXJhbmNlIHNlbGVjdGlvblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgYWxlcnQoXCJTZWNjZXNzISEgQmFjayB0byBob21lIHBhZ2UuXCIpOy8vZWFzeSBtZXNzXG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8vcmVqZWN0IHRoZSBwcm9taXNlIGFuZCBwYXNzIHRoZSBlcnJvciBvYmplY3QgYmFjayB0byB0aGUgZm9ybVxuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGlkZW50aWZpZXIsIHBhc3N3b3JkKSA9PiB7XG4gIC8vLy9wcmV2ZW50IGZ1bmN0aW9uIGZyb20gYmVpbmcgcmFuIG9uIHRoZSBzZXJ2ZXJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtBUElfVVJMfS9hdXRoL2xvY2FsL2AsIHsgaWRlbnRpZmllciwgcGFzc3dvcmQgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS51c2VyKSk7XG4gICAgICAgIC8vLy9zZXQgdG9rZW4gcmVzcG9uc2UgZnJvbSBTdHJhcGkgZm9yIHNlcnZlciB2YWxpZGF0aW9uXG4gICAgICAgIENvb2tpZS5zZXQoXCJ0b2tlblwiLCByZXMuZGF0YS5qd3QpO1xuXG4gICAgICAgIC8vcmVzb2x2ZSB0aGUgcHJvbWlzZSB0byBzZXQgbG9hZGluZyB0byBmYWxzZSBpbiBTaWduVXAgZm9ybVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIC8vL3JlZGlyZWN0IGJhY2sgdG8gaG9tZSBwYWdlIGZvciByZXN0YXVyYW5jZSBzZWxlY3Rpb25cbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgYWxlcnQoXCJMb2cgSW4gU2VjY2VzcyFcIik7Ly9lYXN5IG1lc3NcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy9yZWplY3QgdGhlIHByb21pc2UgYW5kIHBhc3MgdGhlIGVycm9yIG9iamVjdCBiYWNrIHRvIHRoZSBmb3JtXG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAvL3JlbW92ZSB0b2tlbiBhbmQgdXNlciBjb29raWVcbiAgQ29va2llLnJlbW92ZShcInRva2VuXCIpO1xuICAvL2RlbGV0ZSB3aW5kb3cuX191c2VyO1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpOy8vZXhwZXJpbWVudGFsIFxuICAvLy8gc3luYyBsb2dvdXQgYmV0d2VlbiBtdWx0aXBsZSB3aW5kb3dzXG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ291dFwiLCBEYXRlLm5vdygpKTtcbiAgLy8vL3JlZGlyZWN0IHRvIHRoZSBob21lIHBhZ2VcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIGFsZXJ0KFwiU2VjY2VzcyEhIEJhY2sgdG8gaG9tZSBwYWdlLlwiKTsvL2Vhc3kgbWVzc1xuICB9KTtcbiAgXG59O1xuXG4vL0hpZ2hlciBPcmRlciBDb21wb25lbnQgdG8gd3JhcCBvdXIgcGFnZXMgYW5kIGxvZ291dCBzaW11bHRhbmVvdXNseSBsb2dnZWQgaW4gdGFic1xuLy8gVEhJUyBJUyBOT1QgVVNFRCBpbiB0aGUgdHV0b3JpYWwsIG9ubHkgcHJvdmlkZWQgaWYgeW91IHdhbnRlZCB0byBpbXBsZW1lbnRcbmV4cG9ydCBjb25zdCB3aXRoQXV0aFN5bmMgPSAoQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IFdyYXBwZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBzeW5jTG9nb3V0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcImxvZ291dFwiKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHN5bmNMb2dvdXQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgc3luY0xvZ291dCk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvZ291dFwiKTtcbiAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbiAgfTtcblxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIFdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgfVxuXG4gIHJldHVybiBXcmFwcGVyO1xufTtcblxuLy8vLyBSZXRyaWV2ZSB0aGUgdXNlciBpbmZvcm1hdGlvbiBmcm9tIGxvY2FsIHN0b3JhZ2VcbmV4cG9ydCBjb25zdCBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xuICBjb25zdCB0b2tlbiA9IENvb2tpZS5nZXQoXCJ0b2tlblwiKTtcbiAgaWYgKHVzZXIpIHtcbiAgICBjb25zdCBwYXJzZWRVc2VyID0gSlNPTi5wYXJzZSh1c2VyKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucGFyc2VkVXNlcixcbiAgICAgIGp3dDogdG9rZW4sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGhcIjtcclxuLy9pbXBvcnRpbmcgdGhlIGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIGZ1bmN0aW9uIHRvIGdldCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyLiBzdGVwLTEuXHJcbmZ1bmN0aW9uIFJlY2VpcHRzKCkge1xyXG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7Ly8gd2lsbCBzdG9yZSBsaXN0IG9mIG9yZGVycy4gc3RlcC0yXHJcbiAgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjsgLy9zZXQgdXAgdGhlIGFwaSB1cmwuIHN0ZXAtMy5cclxuLy9sYXN0IGdvb2Qgbm8gZXJyb3JzLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Ly9ob29rIHRvIGZldGNoIHRoZSBvcmRlcnMgZGF0YSBmcm9tIHRoZSBTdHJhcGkgQVBJLCB1c2luZyB0aGUgbG9nZ2VkIGluIHVzZXIncyBJRCBhcyBhIHF1ZXJ5IHBhcmFtZXRlci5zdGVwLTQuXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnM/dXNlcj0ke3VzZXIuaWR9YCwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci5qd3R9YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0T3JkZXJzKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgLy8vbWFwIG9yZGVycy4gc3RlcC01LlxyXG4gIC8vZGl2ZGVkIHRoZSBhbW91bnQgYnkgMTAwIHRvIGZpeCB0byBhIGRvbGxhci5cclxuICAvLy9hZGRlZCBhIG5ldyBzdGF0dXMgZmllbGQuIGFkbWluIGNhbiBzZXQgc3RhdHVzIGluIHRoZSBwYW5lbC4gXHJcbiAgLy9uZXh0IHN0ZXAgbWFrZSBhIG5ldyBwYWdlIGp1c3QgZm9yIHdvcmtlcnMgd2hvIGNhbiBzZXQgc3RhdHVzIHRvIHNoaXBlZCBvciBkZWxpdmVyZWQuICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMnJlbVwiIH19ID5cclxuICAgICAgPGgxIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiwgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5PcmRlciBIaXN0b3J5PC9oMT5cclxuICAgICAge29yZGVycy5tYXAoKG9yZGVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtvcmRlci5pZH0gc3R5bGU9e3sgXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIiwgbWFyZ2luQm90dG9tOiBpbmRleCA9PT0gb3JkZXJzLmxlbmd0aCAtIDEgPyAwIDogXCIxcmVtXCJ9fT5cclxuICAgICAgICAgIDxwPk9yZGVyIElEOiB7b3JkZXIuaWR9PC9wPlxyXG4gICAgICAgICAgPHA+QW1vdW50OiAke29yZGVyLmFtb3VudCAvIDEwMH08L3A+XHJcbiAgICAgICAgICA8cD5TdGF0dXM6IHtvcmRlci5zdGF0dXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2VpcHRzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==