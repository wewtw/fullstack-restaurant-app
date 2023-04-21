webpackHotUpdate_N_E("pages/checkout",{

/***/ "./components/checkoutForm.js":
/*!************************************!*\
  !*** ./components/checkoutForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _cardSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cardSection */ "./components/cardSection.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\X\\Desktop\\MIT-Bootcamp-WebDev\\Week29\\setting-up-stripe_starter\\components\\checkoutForm.js",
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function CheckoutForm() {
  _s2();

  var _s = $RefreshSig$();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    address: "",
    city: "",
    state: "",
    stripe_id: ""
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      error = _useState2[0],
      setError = _useState2[1];

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useElements"])();
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_9__["default"]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      success = _useState3[0],
      setSuccess = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      email = _useState4[0],
      setEmail = _useState4[1];

  function onChange(e) {
    // set the key = to the name property equal to the value typed
    var updateItem = data[e.target.name] = e.target.value; // update the state data object

    setData(_objectSpread(_objectSpread({}, data), {}, {
      updateItem: updateItem
    }));
  }

  function submitOrder(_x) {
    return _submitOrder.apply(this, arguments);
  }

  function _submitOrder() {
    _submitOrder = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var cardElement, API_URL, token, userToken, addressRegex, cityRegex, stateRegex, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault(); // // Use elements.getElement to get a reference to the mounted Element.

              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["CardElement"]); // // Pass the Element directly to other Stripe.js methods:
              // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
              // get token back from stripe to process credit card

              API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; //////////////replaced.

              _context.next = 5;
              return stripe.createToken(cardElement);

            case 5:
              token = _context.sent;
              userToken = js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get("token"); // Validate input fields

              addressRegex = /^\d+\s[A-Za-z]+\s[A-Za-z]+/;

              if (!(!data.address.trim() || !addressRegex.test(data.address))) {
                _context.next = 11;
                break;
              }

              setError("Please enter a valid address.");
              return _context.abrupt("return");

            case 11:
              cityRegex = /^[a-zA-Z\s]*$/;

              if (!(!data.city.trim() || !cityRegex.test(data.city))) {
                _context.next = 15;
                break;
              }

              setError("Please enter a valid city name.");
              return _context.abrupt("return");

            case 15:
              stateRegex = /^[A-Z]{2}$/;

              if (!(!data.state.trim() || !stateRegex.test(data.state))) {
                _context.next = 19;
                break;
              }

              setError("Please enter a valid state name.");
              return _context.abrupt("return");

            case 19:
              _context.next = 21;
              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(API_URL, "/orders"), {
                method: "POST",
                headers: userToken && {
                  Authorization: "Bearer ".concat(userToken)
                },
                body: JSON.stringify({
                  amount: Number(Math.round(appContext.cart.total + "e2") + "e-2"),
                  dishes: appContext.cart.items,
                  drinks: appContext.cart.items,
                  address: data.address,
                  city: data.city,
                  state: data.state,
                  token: token.token.id
                })
              });

            case 21:
              response = _context.sent;

              if (!response.ok) {
                setError(response.statusText);
                console.log("SUCCESS");
              } else {
                setSuccess(true);
                setEmail(document.getElementById("email-input").value);
              }

              ; // OTHER stripe methods you can use depending on app
              // // or createPaymentMethod - https://stripe.com/docs/js/payment_intents/create_payment_method
              // stripe.createPaymentMethod({
              //   type: "card",
              //   card: cardElement,
              // });
              // // or confirmCardPayment - https://stripe.com/docs/js/payment_intents/confirm_card_payment
              // stripe.confirmCardPayment(paymentIntentClientSecret, {
              //   payment_method: {
              //     card: cardElement,
              //   },
              // });

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _submitOrder.apply(this, arguments);
  }

  return __jsx("div", {
    className: "jsx-1630660198" + " " + "paper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx("h5", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, "Your information:"), __jsx("hr", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      flex: "0.90",
      marginRight: 10
    },
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Address"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "address",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      flex: "0.65",
      marginRight: "6%"
    },
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "City"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "city",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      flex: "0.25",
      marginRight: 0
    },
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, "State"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "state",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }))), __jsx(_cardSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    stripeError: error,
    submitOrder: submitOrder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), success && __jsx("div", {
    style: {
      margin: "3em",
      marginTop: "3rem",
      marginBottom: "3rem",
      padding: "5px",
      height: "8rem",
      width: "9rem",
      border: "1px solid lightgreen",
      borderRadius: "6px",
      backgroundColor: "lightGreen"
    },
    className: "jsx-1630660198" + " " + "success-message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "Your order has been successfully processed!", __jsx("br", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }), __jsx("a", {
    href: "/",
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "Back to Home page"), __jsx("p", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "or fill in the field to get an email of your receipt"), __jsx(Receipt, {
    email: email,
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  })), !success && __jsx("p", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 20
    }
  }, "Order not filled."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1630660198",
    __self: this
  }, ".paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:550px;padding:30px;background:#fff;border-radius:6px;margin-top:90px;}.form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}*{box-sizing:border-box;}body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0;}.Checkout{margin:0 auto;max-width:800px;box-sizing:border-box;padding:0 5px;}label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid #e6ebf1;}button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08);}input,.StripeElement{display:block;background-color:#f8f9fa !important;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:\"Source Code Pro\",monospace;box-shadow:rgba(50,50,93,0.14902) 0px 1px 3px, rgba(0,0,0,0.0196078) 0px 1px 0px;border:0;outline:0;border-radius:4px;background:white;}input::-webkit-input-placeholder{color:#aab7c4;}input::-moz-placeholder{color:#aab7c4;}input:-ms-input-placeholder{color:#aab7c4;}input::placeholder{color:#aab7c4;}input:focus,.StripeElement--focus{box-shadow:rgba(50,50,93,0.109804) 0px 4px 6px, rgba(0,0,0,0.0784314) 0px 1px 3px;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;}.StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWFxcRGVza3RvcFxcTUlULUJvb3RjYW1wLVdlYkRldlxcV2VlazI5XFxzZXR0aW5nLXVwLXN0cmlwZV9zdGFydGVyXFxjb21wb25lbnRzXFxjaGVja291dEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOElTLEFBR3dDLEFBV2xCLEFBR2EsQUFJRyxBQUtYLEFBUUEsQUFNQSxBQUtLLEFBc0JBLEFBS1IsQUFTRyxBQWVBLEFBS3dCLEFBTTVCLFVBQ1osQ0FuQ2lCLEdBOUNDLEFBUUEsQUFNQSxBQXlDb0IsQUFldEMsS0FuRFcsQUFzQlcsR0FsRHRCLEdBSWlCLENBb0RVLENBcEVhLENBeUM1QixFQW5CTyxBQVFLLEFBTUMsUUFNRixDQWpDdkIsQUFzRGtDLENBOUN5QixPQU0xQyxHQXNETSxDQVJNLENBdENiLE9BWUYsR0FuQkUsSUFRaEIsS0FZbUIsQUFvQm5CLEFBY2tCLEtBckROLE1BdUV3QixJQXRFcEMsQ0FxRG9CLENBbENILE1BM0JqQixTQTZCaUMsRUFpQ2pCLFdBaUJZLEdBaEJlLG9CQWhGNUIsQUFvQ2YsS0FrQ2lDLFFBckVsQixPQWlGeUIsTUFoRnRCLE9BNkNMLElBa0RiLEtBOUZvQixFQTZDQSxnQkE1Q0YsRUE2Q0QsWUFzQmpCLEVBbEVBLENBNkNrQixnQkFDUyxRQWdDaEIsU0FDQyxRQWhDYSxFQWlDTCxrQkFDRCxpQkFDbkIsd0VBbEMyQix5QkFDSixrREFDYSxrQ0FDUiw0REFDVixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxYXFxEZXNrdG9wXFxNSVQtQm9vdGNhbXAtV2ViRGV2XFxXZWVrMjlcXHNldHRpbmctdXAtc3RyaXBlX3N0YXJ0ZXJcXGNvbXBvbmVudHNcXGNoZWNrb3V0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgYWRkcmVzczogXCJcIixcbiAgICBjaXR5OiBcIlwiLFxuICAgIHN0YXRlOiBcIlwiLFxuICAgIHN0cmlwZV9pZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgIC8vIHNldCB0aGUga2V5ID0gdG8gdGhlIG5hbWUgcHJvcGVydHkgZXF1YWwgdG8gdGhlIHZhbHVlIHR5cGVkXG4gICAgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWUpO1xuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgZGF0YSBvYmplY3RcbiAgICBzZXREYXRhKHsgLi4uZGF0YSwgdXBkYXRlSXRlbSB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKGV2ZW50KSB7XG4gICAgXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuICAgIC8vLy8vLy8vLy8vLy8vcmVwbGFjZWQuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG5cbiAgICAvLyBWYWxpZGF0ZSBpbnB1dCBmaWVsZHNcbiAgICBjb25zdCBhZGRyZXNzUmVnZXggPSAvXlxcZCtcXHNbQS1aYS16XStcXHNbQS1aYS16XSsvO1xuICAgIGlmICghZGF0YS5hZGRyZXNzLnRyaW0oKSB8fCAhYWRkcmVzc1JlZ2V4LnRlc3QoZGF0YS5hZGRyZXNzKSkge1xuICAgIHNldEVycm9yKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcy5cIik7XG4gICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgY29uc3QgY2l0eVJlZ2V4ID0gL15bYS16QS1aXFxzXSokLztcbiAgICBpZiAoIWRhdGEuY2l0eS50cmltKCkgfHwgIWNpdHlSZWdleC50ZXN0KGRhdGEuY2l0eSkpIHtcbiAgICAgIHNldEVycm9yKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgY2l0eSBuYW1lLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZVJlZ2V4ID0gL15bQS1aXXsyfSQvO1xuICAgIGlmICghZGF0YS5zdGF0ZS50cmltKCkgfHwgIXN0YXRlUmVnZXgudGVzdChkYXRhLnN0YXRlKSkge1xuICAgICAgc2V0RXJyb3IoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBzdGF0ZSBuYW1lLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vL1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vb3JkZXJzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHVzZXJUb2tlbiAmJiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyVG9rZW59YCB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhbW91bnQ6IE51bWJlcihNYXRoLnJvdW5kKGFwcENvbnRleHQuY2FydC50b3RhbCArIFwiZTJcIikgKyBcImUtMlwiKSxcbiAgICAgICAgZGlzaGVzOiBhcHBDb250ZXh0LmNhcnQuaXRlbXMsXG4gICAgICAgIGRyaW5rczogYXBwQ29udGV4dC5jYXJ0Lml0ZW1zLFxuICAgICAgICBhZGRyZXNzOiBkYXRhLmFkZHJlc3MsXG4gICAgICAgIGNpdHk6IGRhdGEuY2l0eSxcbiAgICAgICAgc3RhdGU6IGRhdGEuc3RhdGUsXG4gICAgICAgIHRva2VuOiB0b2tlbi50b2tlbi5pZCxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgc2V0RXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1NcIilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgc2V0RW1haWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbC1pbnB1dFwiKS52YWx1ZSk7XG5cbiAgICBcbiAgICB9O1xuXG4gICAgLy8gT1RIRVIgc3RyaXBlIG1ldGhvZHMgeW91IGNhbiB1c2UgZGVwZW5kaW5nIG9uIGFwcFxuICAgIC8vIC8vIG9yIGNyZWF0ZVBheW1lbnRNZXRob2QgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY3JlYXRlX3BheW1lbnRfbWV0aG9kXG4gICAgLy8gc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xuICAgIC8vICAgdHlwZTogXCJjYXJkXCIsXG4gICAgLy8gICBjYXJkOiBjYXJkRWxlbWVudCxcbiAgICAvLyB9KTtcblxuICAgIC8vIC8vIG9yIGNvbmZpcm1DYXJkUGF5bWVudCAtIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL2pzL3BheW1lbnRfaW50ZW50cy9jb25maXJtX2NhcmRfcGF5bWVudFxuICAgIC8vIHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQocGF5bWVudEludGVudENsaWVudFNlY3JldCwge1xuICAgIC8vICAgcGF5bWVudF9tZXRob2Q6IHtcbiAgICAvLyAgICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgLy8gICB9LFxuICAgIC8vIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICBcbiAgICAgIDxoNT5Zb3VyIGluZm9ybWF0aW9uOjwvaDU+XG4gICAgICA8aHIgLz5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjkwXCIsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICA8TGFiZWw+QWRkcmVzczwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJhZGRyZXNzXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNjVcIiwgbWFyZ2luUmlnaHQ6IFwiNiVcIiB9fT5cbiAgICAgICAgICA8TGFiZWw+Q2l0eTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuMjVcIiwgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICA8Q2FyZFNlY3Rpb24gZGF0YT17ZGF0YX0gc3RyaXBlRXJyb3I9e2Vycm9yfSBzdWJtaXRPcmRlcj17c3VibWl0T3JkZXJ9IC8+XG4gICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzcy1tZXNzYWdlXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjNlbVwiLCBtYXJnaW5Ub3A6IFwiM3JlbVwiLCBtYXJnaW5Cb3R0b206IFwiM3JlbVwiLCBwYWRkaW5nOiBcIjVweFwiLCBoZWlnaHQ6IFwiOHJlbVwiLCB3aWR0aDogXCI5cmVtXCIsICBib3JkZXI6IFwiMXB4IHNvbGlkIGxpZ2h0Z3JlZW5cIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRHcmVlblwifX0gPlxuICAgICAgICAgIFlvdXIgb3JkZXIgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHByb2Nlc3NlZCFcbiAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPkJhY2sgdG8gSG9tZSBwYWdlPC9hPlxuICAgICAgICAgIDxwPm9yIGZpbGwgaW4gdGhlIGZpZWxkIHRvIGdldCBhbiBlbWFpbCBvZiB5b3VyIHJlY2VpcHQ8L3A+XG4gICAgICAgICAgPFJlY2VpcHQgZW1haWw9e2VtYWlsfSAgLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgKX1cbiAgICAgIHshc3VjY2VzcyAmJiA8cD5PcmRlciBub3QgZmlsbGVkLjwvcD59XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtLWhhbGYge1xuICAgICAgICAgICAgZmxleDogMC41O1xuICAgICAgICAgIH1cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOWZjO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogIzMyMzI1ZDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLkNoZWNrb3V0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICM2YjdjOTM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgMC4xMSksXG4gICAgICAgICAgICAgIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY3NzJlNTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlNmViZjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzk1Zjg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDdweCAxNHB4IHJnYmEoNTAsIDUwLCA5MywgMC4xKSxcbiAgICAgICAgICAgICAgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU291cmNlIENvZGUgUHJvXCIsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4xNDkwMikgMHB4IDFweCAzcHgsXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4wMTk2MDc4KSAwcHggMXB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYWFiN2M0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dDpmb2N1cyxcbiAgICAgICAgICAuU3RyaXBlRWxlbWVudC0tZm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjEwOTgwNCkgMHB4IDRweCA2cHgsXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4wNzg0MzE0KSAwcHggMXB4IDNweDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQuSWRlYWxCYW5rRWxlbWVudCxcbiAgICAgICAgICAuU3RyaXBlRWxlbWVudC5QYXltZW50UmVxdWVzdEJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG4gIFxuICBmdW5jdGlvbiBSZWNlaXB0KHsgZW1haWwgfSkge1xuICAgIGNvbnN0IFtzZW5kUmVjZWlwdCwgc2V0U2VuZFJlY2VpcHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgICBmdW5jdGlvbiB0b2dnbGVTZW5kUmVjZWlwdCgpIHtcbiAgICAgIHNldFNlbmRSZWNlaXB0KCFzZW5kUmVjZWlwdCk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMmVtXCIsIG1hcmdpbkJvdHRvbTogXCIycmVtXCIsIHBhZGRpbmc6IFwiMzBweFwiLCB3aWR0aDogXCIxNXJlbVwiLCAgYm9yZGVyOiBcIjFweCBzb2xpZCBsaWdodGdyYXlcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiLCB9fT5cbiAgICAgICAgPGgzPk9yZGVyIFJlY2VpcHQ8L2gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWwtaW5wdXRcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsLWlucHV0XCIgdHlwZT1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXtlbWFpbH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInNlbmQtcmVjZWlwdC1jaGVja2JveFwiXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17c2VuZFJlY2VpcHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dG9nZ2xlU2VuZFJlY2VpcHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbmQtcmVjZWlwdC1jaGVja2JveFwiPlNlbmQgbWUgYSByZWNlaXB0IGJ5IGVtYWlsPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBcbiAgXG59XG5leHBvcnQgZGVmYXVsdCBDaGVja291dEZvcm07XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\X\\\\Desktop\\\\MIT-Bootcamp-WebDev\\\\Week29\\\\setting-up-stripe_starter\\\\components\\\\checkoutForm.js */"));

  function Receipt(_ref) {
    _s();

    var email = _ref.email;

    var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
        sendReceipt = _useState5[0],
        setSendReceipt = _useState5[1];

    function toggleSendReceipt() {
      setSendReceipt(!sendReceipt);
    }

    return __jsx("div", {
      style: {
        margin: "2em",
        marginBottom: "2rem",
        padding: "30px",
        width: "15rem",
        border: "1px solid lightgray",
        borderRadius: "6px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 7
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 9
      }
    }, "Order Receipt"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 9
      }
    }, __jsx("label", {
      htmlFor: "email-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 11
      }
    }, "Email:"), __jsx("input", {
      id: "email-input",
      type: "email",
      defaultValue: email,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 11
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 9
      }
    }, __jsx("input", {
      id: "send-receipt-checkbox",
      type: "checkbox",
      checked: sendReceipt,
      onChange: toggleSendReceipt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 11
      }
    }), __jsx("label", {
      htmlFor: "send-receipt-checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 11
      }
    }, "Send me a receipt by email")), __jsx("button", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 9
      }
    }, "Confirm"));
  }

  _s(Receipt, "NbDCyP/NdFaauwCm19C2jem+IK8=");

  ;
}

_s2(CheckoutForm, "3Jx0IBo1zrupB8f4DXWLUieBOts=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useElements"]];
});

_c = CheckoutForm;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutForm);

var _c;

$RefreshReg$(_c, "CheckoutForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJhZGRyZXNzIiwiY2l0eSIsInN0YXRlIiwic3RyaXBlX2lkIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiZW1haWwiLCJzZXRFbWFpbCIsIm9uQ2hhbmdlIiwiZSIsInVwZGF0ZUl0ZW0iLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRPcmRlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImNyZWF0ZVRva2VuIiwidG9rZW4iLCJ1c2VyVG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiYWRkcmVzc1JlZ2V4IiwidHJpbSIsInRlc3QiLCJjaXR5UmVnZXgiLCJzdGF0ZVJlZ2V4IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYW1vdW50IiwiTnVtYmVyIiwiTWF0aCIsInJvdW5kIiwiY2FydCIsInRvdGFsIiwiZGlzaGVzIiwiaXRlbXMiLCJkcmlua3MiLCJpZCIsInJlc3BvbnNlIiwib2siLCJzdGF0dXNUZXh0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwbGF5IiwiZmxleCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicGFkZGluZyIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiUmVjZWlwdCIsInNlbmRSZWNlaXB0Iiwic2V0U2VuZFJlY2VpcHQiLCJ0b2dnbGVTZW5kUmVjZWlwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDO0FBQy9CQyxXQUFPLEVBQUUsRUFEc0I7QUFFL0JDLFFBQUksRUFBRSxFQUZ5QjtBQUcvQkMsU0FBSyxFQUFFLEVBSHdCO0FBSS9CQyxhQUFTLEVBQUU7QUFKb0IsR0FBRCxDQURWO0FBQUEsTUFDZkMsSUFEZTtBQUFBLE1BQ1RDLE9BRFM7O0FBQUEsbUJBT0lOLHNEQUFRLENBQUMsRUFBRCxDQVBaO0FBQUEsTUFPZk8sS0FQZTtBQUFBLE1BT1JDLFFBUFE7O0FBUXRCLE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLDJFQUFXLEVBQTVCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUE3Qjs7QUFWc0IsbUJBV1FmLHNEQUFRLENBQUMsS0FBRCxDQVhoQjtBQUFBLE1BV2ZnQixPQVhlO0FBQUEsTUFXTkMsVUFYTTs7QUFBQSxtQkFZSWpCLHNEQUFRLENBQUMsRUFBRCxDQVpaO0FBQUEsTUFZZmtCLEtBWmU7QUFBQSxNQVlSQyxRQVpROztBQWN0QixXQUFTQyxRQUFULENBQWtCQyxDQUFsQixFQUFxQjtBQUNuQjtBQUNBLFFBQU1DLFVBQVUsR0FBSWpCLElBQUksQ0FBQ2dCLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxJQUFWLENBQUosR0FBc0JILENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUFuRCxDQUZtQixDQUduQjs7QUFDQW5CLFdBQU8saUNBQU1ELElBQU47QUFBWWlCLGdCQUFVLEVBQVZBO0FBQVosT0FBUDtBQUNEOztBQW5CcUIsV0FxQlBJLFdBckJPO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9NQXFCdEIsaUJBQTJCQyxLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRUEsbUJBQUssQ0FBQ0MsY0FBTixHQUZGLENBSUU7O0FBQ01DLHlCQUxSLEdBS3NCbEIsUUFBUSxDQUFDbUIsVUFBVCxDQUFvQkMsbUVBQXBCLENBTHRCLEVBT0U7QUFDQTtBQUNBOztBQUNNQyxxQkFWUixHQVVrQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLHVCQVZyRCxFQVdFOztBQVhGO0FBQUEscUJBWXNCMUIsTUFBTSxDQUFDMkIsV0FBUCxDQUFtQlAsV0FBbkIsQ0FadEI7O0FBQUE7QUFZUVEsbUJBWlI7QUFhUUMsdUJBYlIsR0Fhb0JDLGlEQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBYnBCLEVBZUU7O0FBQ01DLDBCQWhCUixHQWdCdUIsNEJBaEJ2Qjs7QUFBQSxvQkFpQk0sQ0FBQ3BDLElBQUksQ0FBQ0osT0FBTCxDQUFheUMsSUFBYixFQUFELElBQXdCLENBQUNELFlBQVksQ0FBQ0UsSUFBYixDQUFrQnRDLElBQUksQ0FBQ0osT0FBdkIsQ0FqQi9CO0FBQUE7QUFBQTtBQUFBOztBQWtCRU8sc0JBQVEsQ0FBQywrQkFBRCxDQUFSO0FBbEJGOztBQUFBO0FBdUJRb0MsdUJBdkJSLEdBdUJvQixlQXZCcEI7O0FBQUEsb0JBd0JNLENBQUN2QyxJQUFJLENBQUNILElBQUwsQ0FBVXdDLElBQVYsRUFBRCxJQUFxQixDQUFDRSxTQUFTLENBQUNELElBQVYsQ0FBZXRDLElBQUksQ0FBQ0gsSUFBcEIsQ0F4QjVCO0FBQUE7QUFBQTtBQUFBOztBQXlCSU0sc0JBQVEsQ0FBQyxpQ0FBRCxDQUFSO0FBekJKOztBQUFBO0FBNkJRcUMsd0JBN0JSLEdBNkJxQixZQTdCckI7O0FBQUEsb0JBOEJNLENBQUN4QyxJQUFJLENBQUNGLEtBQUwsQ0FBV3VDLElBQVgsRUFBRCxJQUFzQixDQUFDRyxVQUFVLENBQUNGLElBQVgsQ0FBZ0J0QyxJQUFJLENBQUNGLEtBQXJCLENBOUI3QjtBQUFBO0FBQUE7QUFBQTs7QUErQklLLHNCQUFRLENBQUMsa0NBQUQsQ0FBUjtBQS9CSjs7QUFBQTtBQUFBO0FBQUEscUJBbUN5QnNDLHVEQUFLLFdBQUlkLE9BQUosY0FBc0I7QUFDaERlLHNCQUFNLEVBQUUsTUFEd0M7QUFFaERDLHVCQUFPLEVBQUVWLFNBQVMsSUFBSTtBQUFFVywrQkFBYSxtQkFBWVgsU0FBWjtBQUFmLGlCQUYwQjtBQUdoRFksb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLHdCQUFNLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVczQyxVQUFVLENBQUM0QyxJQUFYLENBQWdCQyxLQUFoQixHQUF3QixJQUFuQyxJQUEyQyxLQUE1QyxDQURLO0FBRW5CQyx3QkFBTSxFQUFFOUMsVUFBVSxDQUFDNEMsSUFBWCxDQUFnQkcsS0FGTDtBQUduQkMsd0JBQU0sRUFBRWhELFVBQVUsQ0FBQzRDLElBQVgsQ0FBZ0JHLEtBSEw7QUFJbkIzRCx5QkFBTyxFQUFFSSxJQUFJLENBQUNKLE9BSks7QUFLbkJDLHNCQUFJLEVBQUVHLElBQUksQ0FBQ0gsSUFMUTtBQU1uQkMsdUJBQUssRUFBRUUsSUFBSSxDQUFDRixLQU5PO0FBT25Ca0MsdUJBQUssRUFBRUEsS0FBSyxDQUFDQSxLQUFOLENBQVl5QjtBQVBBLGlCQUFmO0FBSDBDLGVBQXRCLENBbkM5Qjs7QUFBQTtBQW1DUUMsc0JBbkNSOztBQWlERSxrQkFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQWQsRUFBa0I7QUFDaEJ4RCx3QkFBUSxDQUFDdUQsUUFBUSxDQUFDRSxVQUFWLENBQVI7QUFDQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDRCxlQUhELE1BSUs7QUFDSGxELDBCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLHdCQUFRLENBQUNpRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUM1QyxLQUF4QyxDQUFSO0FBR0Q7O0FBQUEsZUExREgsQ0E0REU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXhFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXJCc0I7QUFBQTtBQUFBOztBQWdHdEIsU0FFRTtBQUFBLHdDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxvREFBRDtBQUFXLFNBQUssRUFBRTtBQUFFNkMsYUFBTyxFQUFFO0FBQVgsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLFVBQUksRUFBRSxNQUFSO0FBQWdCQyxpQkFBVyxFQUFFO0FBQTdCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLFNBQVo7QUFBc0IsWUFBUSxFQUFFcEQsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FKRixFQVVFLE1BQUMsb0RBQUQ7QUFBVyxTQUFLLEVBQUU7QUFBRWtELGFBQU8sRUFBRTtBQUFYLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxVQUFJLEVBQUUsTUFBUjtBQUFnQkMsaUJBQVcsRUFBRTtBQUE3QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUUsTUFBQyxnREFBRDtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVEsRUFBRXBELFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBSyxTQUFLLEVBQUU7QUFBRW1ELFVBQUksRUFBRSxNQUFSO0FBQWdCQyxpQkFBVyxFQUFFO0FBQTdCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBUSxFQUFFcEQsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsQ0FWRixFQXFCRSxNQUFDLG9EQUFEO0FBQWEsUUFBSSxFQUFFZixJQUFuQjtBQUF5QixlQUFXLEVBQUVFLEtBQXRDO0FBQTZDLGVBQVcsRUFBRW1CLFdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsRUFzQkdWLE9BQU8sSUFDTjtBQUFpQyxTQUFLLEVBQUU7QUFBRXlELFlBQU0sRUFBRSxLQUFWO0FBQWlCQyxlQUFTLEVBQUUsTUFBNUI7QUFBb0NDLGtCQUFZLEVBQUUsTUFBbEQ7QUFBMERDLGFBQU8sRUFBRSxLQUFuRTtBQUEwRUMsWUFBTSxFQUFFLE1BQWxGO0FBQTBGQyxXQUFLLEVBQUUsTUFBakc7QUFBMEdDLFlBQU0sRUFBRSxzQkFBbEg7QUFBMElDLGtCQUFZLEVBQUUsS0FBeEo7QUFBK0pDLHFCQUFlLEVBQUU7QUFBaEwsS0FBeEM7QUFBQSx3Q0FBZSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBSkYsRUFLRSxNQUFDLE9BQUQ7QUFBUyxTQUFLLEVBQUUvRCxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQXZCSixFQWlDRyxDQUFDRixPQUFELElBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWpDZjtBQUFBO0FBQUE7QUFBQSxteWZBRkY7O0FBc0pBLFdBQVNrRSxPQUFULE9BQTRCO0FBQUE7O0FBQUEsUUFBVGhFLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxxQkFDWWxCLHNEQUFRLENBQUMsS0FBRCxDQURwQjtBQUFBLFFBQ25CbUYsV0FEbUI7QUFBQSxRQUNOQyxjQURNOztBQUcxQixhQUFTQyxpQkFBVCxHQUE2QjtBQUMzQkQsb0JBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQWQ7QUFDRDs7QUFFRCxXQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVWLGNBQU0sRUFBRSxLQUFWO0FBQWlCRSxvQkFBWSxFQUFFLE1BQS9CO0FBQXVDQyxlQUFPLEVBQUUsTUFBaEQ7QUFBd0RFLGFBQUssRUFBRSxPQUEvRDtBQUF5RUMsY0FBTSxFQUFFLHFCQUFqRjtBQUF3R0Msb0JBQVksRUFBRTtBQUF0SCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU8sYUFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQU8sUUFBRSxFQUFDLGFBQVY7QUFBd0IsVUFBSSxFQUFDLE9BQTdCO0FBQXFDLGtCQUFZLEVBQUU5RCxLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FGRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFFBQUUsRUFBQyx1QkFETDtBQUVFLFVBQUksRUFBQyxVQUZQO0FBR0UsYUFBTyxFQUFFaUUsV0FIWDtBQUlFLGNBQVEsRUFBRUUsaUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBT0U7QUFBTyxhQUFPLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FQRixDQU5GLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRixDQURGO0FBbUJEOztBQWhScUIsS0FzUGJILE9BdFBhOztBQWdSckI7QUFJRjs7SUFwUlFuRixZO1VBUVFXLGlFLEVBQ0VFLG1FOzs7S0FUVmIsWTtBQXFSTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuZjVjMzQwZTExMjdkZTlmYTRjYTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgYWRkcmVzczogXCJcIixcbiAgICBjaXR5OiBcIlwiLFxuICAgIHN0YXRlOiBcIlwiLFxuICAgIHN0cmlwZV9pZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgIC8vIHNldCB0aGUga2V5ID0gdG8gdGhlIG5hbWUgcHJvcGVydHkgZXF1YWwgdG8gdGhlIHZhbHVlIHR5cGVkXG4gICAgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWUpO1xuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgZGF0YSBvYmplY3RcbiAgICBzZXREYXRhKHsgLi4uZGF0YSwgdXBkYXRlSXRlbSB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKGV2ZW50KSB7XG4gICAgXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuICAgIC8vLy8vLy8vLy8vLy8vcmVwbGFjZWQuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG5cbiAgICAvLyBWYWxpZGF0ZSBpbnB1dCBmaWVsZHNcbiAgICBjb25zdCBhZGRyZXNzUmVnZXggPSAvXlxcZCtcXHNbQS1aYS16XStcXHNbQS1aYS16XSsvO1xuICAgIGlmICghZGF0YS5hZGRyZXNzLnRyaW0oKSB8fCAhYWRkcmVzc1JlZ2V4LnRlc3QoZGF0YS5hZGRyZXNzKSkge1xuICAgIHNldEVycm9yKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcy5cIik7XG4gICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgY29uc3QgY2l0eVJlZ2V4ID0gL15bYS16QS1aXFxzXSokLztcbiAgICBpZiAoIWRhdGEuY2l0eS50cmltKCkgfHwgIWNpdHlSZWdleC50ZXN0KGRhdGEuY2l0eSkpIHtcbiAgICAgIHNldEVycm9yKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgY2l0eSBuYW1lLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZVJlZ2V4ID0gL15bQS1aXXsyfSQvO1xuICAgIGlmICghZGF0YS5zdGF0ZS50cmltKCkgfHwgIXN0YXRlUmVnZXgudGVzdChkYXRhLnN0YXRlKSkge1xuICAgICAgc2V0RXJyb3IoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBzdGF0ZSBuYW1lLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vL1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vb3JkZXJzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHVzZXJUb2tlbiAmJiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyVG9rZW59YCB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhbW91bnQ6IE51bWJlcihNYXRoLnJvdW5kKGFwcENvbnRleHQuY2FydC50b3RhbCArIFwiZTJcIikgKyBcImUtMlwiKSxcbiAgICAgICAgZGlzaGVzOiBhcHBDb250ZXh0LmNhcnQuaXRlbXMsXG4gICAgICAgIGRyaW5rczogYXBwQ29udGV4dC5jYXJ0Lml0ZW1zLFxuICAgICAgICBhZGRyZXNzOiBkYXRhLmFkZHJlc3MsXG4gICAgICAgIGNpdHk6IGRhdGEuY2l0eSxcbiAgICAgICAgc3RhdGU6IGRhdGEuc3RhdGUsXG4gICAgICAgIHRva2VuOiB0b2tlbi50b2tlbi5pZCxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgc2V0RXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1NcIilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgc2V0RW1haWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbC1pbnB1dFwiKS52YWx1ZSk7XG5cbiAgICBcbiAgICB9O1xuXG4gICAgLy8gT1RIRVIgc3RyaXBlIG1ldGhvZHMgeW91IGNhbiB1c2UgZGVwZW5kaW5nIG9uIGFwcFxuICAgIC8vIC8vIG9yIGNyZWF0ZVBheW1lbnRNZXRob2QgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY3JlYXRlX3BheW1lbnRfbWV0aG9kXG4gICAgLy8gc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xuICAgIC8vICAgdHlwZTogXCJjYXJkXCIsXG4gICAgLy8gICBjYXJkOiBjYXJkRWxlbWVudCxcbiAgICAvLyB9KTtcblxuICAgIC8vIC8vIG9yIGNvbmZpcm1DYXJkUGF5bWVudCAtIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL2pzL3BheW1lbnRfaW50ZW50cy9jb25maXJtX2NhcmRfcGF5bWVudFxuICAgIC8vIHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQocGF5bWVudEludGVudENsaWVudFNlY3JldCwge1xuICAgIC8vICAgcGF5bWVudF9tZXRob2Q6IHtcbiAgICAvLyAgICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgLy8gICB9LFxuICAgIC8vIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICBcbiAgICAgIDxoNT5Zb3VyIGluZm9ybWF0aW9uOjwvaDU+XG4gICAgICA8aHIgLz5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjkwXCIsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICA8TGFiZWw+QWRkcmVzczwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJhZGRyZXNzXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNjVcIiwgbWFyZ2luUmlnaHQ6IFwiNiVcIiB9fT5cbiAgICAgICAgICA8TGFiZWw+Q2l0eTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuMjVcIiwgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICA8Q2FyZFNlY3Rpb24gZGF0YT17ZGF0YX0gc3RyaXBlRXJyb3I9e2Vycm9yfSBzdWJtaXRPcmRlcj17c3VibWl0T3JkZXJ9IC8+XG4gICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzcy1tZXNzYWdlXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjNlbVwiLCBtYXJnaW5Ub3A6IFwiM3JlbVwiLCBtYXJnaW5Cb3R0b206IFwiM3JlbVwiLCBwYWRkaW5nOiBcIjVweFwiLCBoZWlnaHQ6IFwiOHJlbVwiLCB3aWR0aDogXCI5cmVtXCIsICBib3JkZXI6IFwiMXB4IHNvbGlkIGxpZ2h0Z3JlZW5cIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRHcmVlblwifX0gPlxuICAgICAgICAgIFlvdXIgb3JkZXIgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHByb2Nlc3NlZCFcbiAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPkJhY2sgdG8gSG9tZSBwYWdlPC9hPlxuICAgICAgICAgIDxwPm9yIGZpbGwgaW4gdGhlIGZpZWxkIHRvIGdldCBhbiBlbWFpbCBvZiB5b3VyIHJlY2VpcHQ8L3A+XG4gICAgICAgICAgPFJlY2VpcHQgZW1haWw9e2VtYWlsfSAgLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgKX1cbiAgICAgIHshc3VjY2VzcyAmJiA8cD5PcmRlciBub3QgZmlsbGVkLjwvcD59XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtLWhhbGYge1xuICAgICAgICAgICAgZmxleDogMC41O1xuICAgICAgICAgIH1cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOWZjO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogIzMyMzI1ZDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLkNoZWNrb3V0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICM2YjdjOTM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgMC4xMSksXG4gICAgICAgICAgICAgIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY3NzJlNTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlNmViZjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzk1Zjg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDdweCAxNHB4IHJnYmEoNTAsIDUwLCA5MywgMC4xKSxcbiAgICAgICAgICAgICAgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU291cmNlIENvZGUgUHJvXCIsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4xNDkwMikgMHB4IDFweCAzcHgsXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4wMTk2MDc4KSAwcHggMXB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYWFiN2M0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dDpmb2N1cyxcbiAgICAgICAgICAuU3RyaXBlRWxlbWVudC0tZm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjEwOTgwNCkgMHB4IDRweCA2cHgsXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4wNzg0MzE0KSAwcHggMXB4IDNweDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQuSWRlYWxCYW5rRWxlbWVudCxcbiAgICAgICAgICAuU3RyaXBlRWxlbWVudC5QYXltZW50UmVxdWVzdEJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG4gIFxuICBmdW5jdGlvbiBSZWNlaXB0KHsgZW1haWwgfSkge1xuICAgIGNvbnN0IFtzZW5kUmVjZWlwdCwgc2V0U2VuZFJlY2VpcHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgICBmdW5jdGlvbiB0b2dnbGVTZW5kUmVjZWlwdCgpIHtcbiAgICAgIHNldFNlbmRSZWNlaXB0KCFzZW5kUmVjZWlwdCk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMmVtXCIsIG1hcmdpbkJvdHRvbTogXCIycmVtXCIsIHBhZGRpbmc6IFwiMzBweFwiLCB3aWR0aDogXCIxNXJlbVwiLCAgYm9yZGVyOiBcIjFweCBzb2xpZCBsaWdodGdyYXlcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiLCB9fT5cbiAgICAgICAgPGgzPk9yZGVyIFJlY2VpcHQ8L2gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWwtaW5wdXRcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsLWlucHV0XCIgdHlwZT1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXtlbWFpbH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInNlbmQtcmVjZWlwdC1jaGVja2JveFwiXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17c2VuZFJlY2VpcHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dG9nZ2xlU2VuZFJlY2VpcHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlbmQtcmVjZWlwdC1jaGVja2JveFwiPlNlbmQgbWUgYSByZWNlaXB0IGJ5IGVtYWlsPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBcbiAgXG59XG5leHBvcnQgZGVmYXVsdCBDaGVja291dEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9