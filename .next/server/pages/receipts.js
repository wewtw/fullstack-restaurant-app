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
var _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\components\\auth.js";

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
      // Store the user information in local storage
      window.localStorage.setItem("user", JSON.stringify(res.data.user)); //set token response from Strapi for server validation

      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("token", res.data.jwt); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      setTimeout(() => {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
        alert("Seccess!! Back to home page."); //easy mess
      }, 1000);
    }).catch(error => {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
const login = (identifier, password) => {
  //prevent function from being ran on the server
  if (true) {
    return;
  }

  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${API_URL}/auth/local/`, {
      identifier,
      password
    }).then(res => {
      window.localStorage.setItem("user", JSON.stringify(res.data.user)); //set token response from Strapi for server validation

      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("token", res.data.jwt); //resolve the promise to set loading to false in SignUp form

      resolve(res);
      setTimeout(() => {
        //redirect back to home page for restaurance selection
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
  // sync logout between multiple windows

  window.localStorage.setItem("logout", Date.now()); //redirect to the home page

  setTimeout(() => {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
    alert("Seccess!! Back to home page."); //easy mess
  }, 1000);
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
}; // Retrieve the user information from local storage

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
var _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\pages\\receipts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //importing the getUserFromLocalStorage function to get the currently logged in user. step-1.

function Receipts() {
  const {
    0: orders,
    1: setOrders
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); //hook will store list of orders. step-2

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; //set up the api url. step-3.
  //last good no errors.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //hook to fetch the orders data from the Strapi API, using the logged in user's ID as a query parameter.step-4.
    const fetchData = async () => {
      try {
        const user = Object(_components_auth__WEBPACK_IMPORTED_MODULE_1__["getUserFromLocalStorage"])();

        if (!user) {
          console.log("User not found in local storage");
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
  }, []); //map orders. step-5.
  //divded the amount by 100 to fix to a dollar.
  //added a new status field. admin can set status in the panel. 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3JlY2VpcHRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInJlZ2lzdGVyVXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInVzZXIiLCJDb29raWUiLCJzZXQiLCJqd3QiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsImFsZXJ0IiwiY2F0Y2giLCJlcnJvciIsImxvZ2luIiwiaWRlbnRpZmllciIsImxvZ291dCIsInJlbW92ZSIsInJlbW92ZUl0ZW0iLCJEYXRlIiwibm93Iiwid2l0aEF1dGhTeW5jIiwiQ29tcG9uZW50IiwiV3JhcHBlciIsInByb3BzIiwic3luY0xvZ291dCIsImV2ZW50Iiwia2V5IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsImdldCIsInBhcnNlZFVzZXIiLCJwYXJzZSIsIlJlY2VpcHRzIiwib3JkZXJzIiwic2V0T3JkZXJzIiwidXNlU3RhdGUiLCJmZXRjaERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsImlkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJqc29uIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJtYXAiLCJvcmRlciIsImluZGV4IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJsZW5ndGgiLCJhbW91bnQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBQW5ELEMsQ0FFQTs7QUFDTyxNQUFNQyxZQUFZLEdBQUcsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQWtCQyxR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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxNQUFaO0FBQW9CRCxrQkFBWSxFQUFFLE1BQWxDO0FBQTBDRSxlQUFTLEVBQUU7QUFBckQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUdkLE1BQU0sQ0FBQ2UsR0FBUCxDQUFXLENBQUNDLEtBQUQsRUFBUUMsS0FBUixLQUNWO0FBQUssT0FBRyxFQUFFRCxLQUFLLENBQUNSLEVBQWhCO0FBQW9CLFNBQUssRUFBRTtBQUN2QkssY0FBUSxFQUFFLFFBRGE7QUFFdkJLLFlBQU0sRUFBRSxnQkFGZTtBQUd2QkMsZ0JBQVUsRUFBRSxPQUhXO0FBSXZCQyxhQUFPLEVBQUUsTUFKYztBQUlOUixrQkFBWSxFQUFFSyxLQUFLLEtBQUtqQixNQUFNLENBQUNxQixNQUFQLEdBQWdCLENBQTFCLEdBQThCLENBQTlCLEdBQWtDO0FBSjFDLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFjTCxLQUFLLENBQUNSLEVBQXBCLENBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFhUSxLQUFLLENBQUNNLE1BQU4sR0FBZSxHQUE1QixDQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBWU4sS0FBSyxDQUFDTyxNQUFsQixDQVBGLENBREQsQ0FGSCxDQURGO0FBZ0JEOztBQUVjeEIsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNyREEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvcmVjZWlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3JlY2VpcHRzLmpzXCIpO1xuIiwiLyogL2xpYi9hdXRoLmpzICovXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuXG4vL3JlZ2lzdGVyIGEgbmV3IHVzZXJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSAodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAvL3ByZXZlbnQgZnVuY3Rpb24gZnJvbSBiZWluZyByYW4gb24gdGhlIHNlcnZlclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtBUElfVVJMfS9hdXRoL2xvY2FsL3JlZ2lzdGVyYCwgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAvLyBTdG9yZSB0aGUgdXNlciBpbmZvcm1hdGlvbiBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLnVzZXIpKTtcbiAgICAgICAgLy9zZXQgdG9rZW4gcmVzcG9uc2UgZnJvbSBTdHJhcGkgZm9yIHNlcnZlciB2YWxpZGF0aW9uXG4gICAgICAgIENvb2tpZS5zZXQoXCJ0b2tlblwiLCByZXMuZGF0YS5qd3QpO1xuXG4gICAgICAgIC8vcmVzb2x2ZSB0aGUgcHJvbWlzZSB0byBzZXQgbG9hZGluZyB0byBmYWxzZSBpbiBTaWduVXAgZm9ybVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIC8vcmVkaXJlY3QgYmFjayB0byBob21lIHBhZ2UgZm9yIHJlc3RhdXJhbmNlIHNlbGVjdGlvblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgYWxlcnQoXCJTZWNjZXNzISEgQmFjayB0byBob21lIHBhZ2UuXCIpOy8vZWFzeSBtZXNzXG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy9yZWplY3QgdGhlIHByb21pc2UgYW5kIHBhc3MgdGhlIGVycm9yIG9iamVjdCBiYWNrIHRvIHRoZSBmb3JtXG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSAoaWRlbnRpZmllciwgcGFzc3dvcmQpID0+IHtcbiAgLy9wcmV2ZW50IGZ1bmN0aW9uIGZyb20gYmVpbmcgcmFuIG9uIHRoZSBzZXJ2ZXJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtBUElfVVJMfS9hdXRoL2xvY2FsL2AsIHsgaWRlbnRpZmllciwgcGFzc3dvcmQgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS51c2VyKSk7XG4gICAgICAgIC8vc2V0IHRva2VuIHJlc3BvbnNlIGZyb20gU3RyYXBpIGZvciBzZXJ2ZXIgdmFsaWRhdGlvblxuICAgICAgICBDb29raWUuc2V0KFwidG9rZW5cIiwgcmVzLmRhdGEuand0KTtcblxuICAgICAgICAvL3Jlc29sdmUgdGhlIHByb21pc2UgdG8gc2V0IGxvYWRpbmcgdG8gZmFsc2UgaW4gU2lnblVwIGZvcm1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvL3JlZGlyZWN0IGJhY2sgdG8gaG9tZSBwYWdlIGZvciByZXN0YXVyYW5jZSBzZWxlY3Rpb25cbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgYWxlcnQoXCJMb2cgSW4gU2VjY2VzcyFcIik7Ly9lYXN5IG1lc3NcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy9yZWplY3QgdGhlIHByb21pc2UgYW5kIHBhc3MgdGhlIGVycm9yIG9iamVjdCBiYWNrIHRvIHRoZSBmb3JtXG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAvL3JlbW92ZSB0b2tlbiBhbmQgdXNlciBjb29raWVcbiAgQ29va2llLnJlbW92ZShcInRva2VuXCIpO1xuICAvL2RlbGV0ZSB3aW5kb3cuX191c2VyO1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpOy8vZXhwZXJpbWVudGFsIFxuICAvLyBzeW5jIGxvZ291dCBiZXR3ZWVuIG11bHRpcGxlIHdpbmRvd3NcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9nb3V0XCIsIERhdGUubm93KCkpO1xuICAvL3JlZGlyZWN0IHRvIHRoZSBob21lIHBhZ2VcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIGFsZXJ0KFwiU2VjY2VzcyEhIEJhY2sgdG8gaG9tZSBwYWdlLlwiKTsvL2Vhc3kgbWVzc1xuICB9LCAxMDAwKTtcbiAgXG59O1xuXG4vL0hpZ2hlciBPcmRlciBDb21wb25lbnQgdG8gd3JhcCBvdXIgcGFnZXMgYW5kIGxvZ291dCBzaW11bHRhbmVvdXNseSBsb2dnZWQgaW4gdGFic1xuLy8gVEhJUyBJUyBOT1QgVVNFRCBpbiB0aGUgdHV0b3JpYWwsIG9ubHkgcHJvdmlkZWQgaWYgeW91IHdhbnRlZCB0byBpbXBsZW1lbnRcbmV4cG9ydCBjb25zdCB3aXRoQXV0aFN5bmMgPSAoQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IFdyYXBwZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBzeW5jTG9nb3V0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcImxvZ291dFwiKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHN5bmNMb2dvdXQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgc3luY0xvZ291dCk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvZ291dFwiKTtcbiAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbiAgfTtcblxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIFdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgfVxuXG4gIHJldHVybiBXcmFwcGVyO1xufTtcblxuLy8gUmV0cmlldmUgdGhlIHVzZXIgaW5mb3JtYXRpb24gZnJvbSBsb2NhbCBzdG9yYWdlXG5leHBvcnQgY29uc3QgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB1c2VyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcbiAgY29uc3QgdG9rZW4gPSBDb29raWUuZ2V0KFwidG9rZW5cIik7XG4gIGlmICh1c2VyKSB7XG4gICAgY29uc3QgcGFyc2VkVXNlciA9IEpTT04ucGFyc2UodXNlcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnBhcnNlZFVzZXIsXG4gICAgICBqd3Q6IHRva2VuLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoXCI7XHJcbi8vaW1wb3J0aW5nIHRoZSBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSBmdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlci4gc3RlcC0xLlxyXG5mdW5jdGlvbiBSZWNlaXB0cygpIHtcclxuICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pOy8vaG9vayB3aWxsIHN0b3JlIGxpc3Qgb2Ygb3JkZXJzLiBzdGVwLTJcclxuICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiOyAvL3NldCB1cCB0aGUgYXBpIHVybC4gc3RlcC0zLlxyXG4vL2xhc3QgZ29vZCBubyBlcnJvcnMuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsvL2hvb2sgdG8gZmV0Y2ggdGhlIG9yZGVycyBkYXRhIGZyb20gdGhlIFN0cmFwaSBBUEksIHVzaW5nIHRoZSBsb2dnZWQgaW4gdXNlcidzIElEIGFzIGEgcXVlcnkgcGFyYW1ldGVyLnN0ZXAtNC5cclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBub3QgZm91bmQgaW4gbG9jYWwgc3RvcmFnZVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vb3JkZXJzP3VzZXI9JHt1c2VyLmlkfWAsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXIuand0fWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldE9yZGVycyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIC8vbWFwIG9yZGVycy4gc3RlcC01LlxyXG4gIC8vZGl2ZGVkIHRoZSBhbW91bnQgYnkgMTAwIHRvIGZpeCB0byBhIGRvbGxhci5cclxuICAvL2FkZGVkIGEgbmV3IHN0YXR1cyBmaWVsZC4gYWRtaW4gY2FuIHNldCBzdGF0dXMgaW4gdGhlIHBhbmVsLiBcclxuICAvL25leHQgc3RlcCBtYWtlIGEgbmV3IHBhZ2UganVzdCBmb3Igd29ya2VycyB3aG8gY2FuIHNldCBzdGF0dXMgdG8gc2hpcGVkIG9yIGRlbGl2ZXJlZC4gICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIycmVtXCIgfX0gPlxyXG4gICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiLCBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLCBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19Pk9yZGVyIEhpc3Rvcnk8L2gxPlxyXG4gICAgICB7b3JkZXJzLm1hcCgob3JkZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e29yZGVyLmlkfSBzdHlsZT17eyBcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLCBtYXJnaW5Cb3R0b206IGluZGV4ID09PSBvcmRlcnMubGVuZ3RoIC0gMSA/IDAgOiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgPHA+T3JkZXIgSUQ6IHtvcmRlci5pZH08L3A+XHJcbiAgICAgICAgICA8cD5BbW91bnQ6ICR7b3JkZXIuYW1vdW50IC8gMTAwfTwvcD5cclxuICAgICAgICAgIDxwPlN0YXR1czoge29yZGVyLnN0YXR1c308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjZWlwdHM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9