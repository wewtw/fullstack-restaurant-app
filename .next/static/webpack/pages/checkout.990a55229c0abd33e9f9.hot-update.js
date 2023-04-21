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
      margin: "4em",
      marginTop: "3rem",
      marginBottom: "1rem",
      padding: "5px",
      height: "12rem",
      width: "15rem",
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
  }, "Back to Home page"), __jsx("br", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }), __jsx("g5", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, "or see your purcuse ristory"), __jsx("a", {
    href: "/receipts",
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, "Back to Home page"), __jsx("p", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, "or fill in the field to get an email of your receipt"), __jsx(Receipt, {
    email: email,
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  })), !success && __jsx("p", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 20
    }
  }, "Status: Order not filled."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1630660198",
    __self: this
  }, ".paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:550px;padding:30px;background:#fff;border-radius:6px;margin-top:90px;}.form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}*{box-sizing:border-box;}body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0;}.Checkout{margin:0 auto;max-width:800px;box-sizing:border-box;padding:0 5px;}label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid #e6ebf1;}button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08);}input,.StripeElement{display:block;background-color:#f8f9fa !important;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:\"Source Code Pro\",monospace;box-shadow:rgba(50,50,93,0.14902) 0px 1px 3px, rgba(0,0,0,0.0196078) 0px 1px 0px;border:0;outline:0;border-radius:4px;background:white;}input::-webkit-input-placeholder{color:#aab7c4;}input::-moz-placeholder{color:#aab7c4;}input:-ms-input-placeholder{color:#aab7c4;}input::placeholder{color:#aab7c4;}input:focus,.StripeElement--focus{box-shadow:rgba(50,50,93,0.109804) 0px 4px 6px, rgba(0,0,0,0.0784314) 0px 1px 3px;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;}.StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWFxcRGVza3RvcFxcTUlULUJvb3RjYW1wLVdlYkRldlxcV2VlazI5XFxzZXR0aW5nLXVwLXN0cmlwZV9zdGFydGVyXFxjb21wb25lbnRzXFxjaGVja291dEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUpTLEFBR3dDLEFBV2xCLEFBR2EsQUFJRyxBQUtYLEFBUUEsQUFNQSxBQUtLLEFBc0JBLEFBS1IsQUFTRyxBQWVBLEFBS3dCLEFBTTVCLFVBQ1osQ0FuQ2lCLEdBOUNDLEFBUUEsQUFNQSxBQXlDb0IsQUFldEMsS0FuRFcsQUFzQlcsR0FsRHRCLEdBSWlCLENBb0RVLENBcEVhLENBeUM1QixFQW5CTyxBQVFLLEFBTUMsUUFNRixDQWpDdkIsQUFzRGtDLENBOUN5QixPQU0xQyxHQXNETSxDQVJNLENBdENiLE9BWUYsR0FuQkUsSUFRaEIsS0FZbUIsQUFvQm5CLEFBY2tCLEtBckROLE1BdUV3QixJQXRFcEMsQ0FxRG9CLENBbENILE1BM0JqQixTQTZCaUMsRUFpQ2pCLFdBaUJZLEdBaEJlLG9CQWhGNUIsQUFvQ2YsS0FrQ2lDLFFBckVsQixPQWlGeUIsTUFoRnRCLE9BNkNMLElBa0RiLEtBOUZvQixFQTZDQSxnQkE1Q0YsRUE2Q0QsWUFzQmpCLEVBbEVBLENBNkNrQixnQkFDUyxRQWdDaEIsU0FDQyxRQWhDYSxFQWlDTCxrQkFDRCxpQkFDbkIsd0VBbEMyQix5QkFDSixrREFDYSxrQ0FDUiw0REFDVixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxYXFxEZXNrdG9wXFxNSVQtQm9vdGNhbXAtV2ViRGV2XFxXZWVrMjlcXHNldHRpbmctdXAtc3RyaXBlX3N0YXJ0ZXJcXGNvbXBvbmVudHNcXGNoZWNrb3V0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgYWRkcmVzczogXCJcIixcbiAgICBjaXR5OiBcIlwiLFxuICAgIHN0YXRlOiBcIlwiLFxuICAgIHN0cmlwZV9pZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgIC8vIHNldCB0aGUga2V5ID0gdG8gdGhlIG5hbWUgcHJvcGVydHkgZXF1YWwgdG8gdGhlIHZhbHVlIHR5cGVkXG4gICAgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWUpO1xuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgZGF0YSBvYmplY3RcbiAgICBzZXREYXRhKHsgLi4uZGF0YSwgdXBkYXRlSXRlbSB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdE9yZGVyKGV2ZW50KSB7XG4gICAgXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuICAgIC8vLy8vLy8vLy8vLy8vcmVwbGFjZWQuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG5cbiAgICAvLyBWYWxpZGF0ZSBpbnB1dCBmaWVsZHNcbiAgICBjb25zdCBhZGRyZXNzUmVnZXggPSAvXlxcZCtcXHNbQS1aYS16XStcXHNbQS1aYS16XSsvO1xuICAgIGlmICghZGF0YS5hZGRyZXNzLnRyaW0oKSB8fCAhYWRkcmVzc1JlZ2V4LnRlc3QoZGF0YS5hZGRyZXNzKSkge1xuICAgIHNldEVycm9yKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcy5cIik7XG4gICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgY29uc3QgY2l0eVJlZ2V4ID0gL15bYS16QS1aXFxzXSokLztcbiAgICBpZiAoIWRhdGEuY2l0eS50cmltKCkgfHwgIWNpdHlSZWdleC50ZXN0KGRhdGEuY2l0eSkpIHtcbiAgICAgIHNldEVycm9yKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgY2l0eSBuYW1lLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZVJlZ2V4ID0gL15bQS1aXXsyfSQvO1xuICAgIGlmICghZGF0YS5zdGF0ZS50cmltKCkgfHwgIXN0YXRlUmVnZXgudGVzdChkYXRhLnN0YXRlKSkge1xuICAgICAgc2V0RXJyb3IoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBzdGF0ZSBuYW1lLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vL1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vb3JkZXJzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHVzZXJUb2tlbiAmJiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyVG9rZW59YCB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhbW91bnQ6IE51bWJlcihNYXRoLnJvdW5kKGFwcENvbnRleHQuY2FydC50b3RhbCArIFwiZTJcIikgKyBcImUtMlwiKSxcbiAgICAgICAgZGlzaGVzOiBhcHBDb250ZXh0LmNhcnQuaXRlbXMsXG4gICAgICAgIGRyaW5rczogYXBwQ29udGV4dC5jYXJ0Lml0ZW1zLFxuICAgICAgICBhZGRyZXNzOiBkYXRhLmFkZHJlc3MsXG4gICAgICAgIGNpdHk6IGRhdGEuY2l0eSxcbiAgICAgICAgc3RhdGU6IGRhdGEuc3RhdGUsXG4gICAgICAgIHRva2VuOiB0b2tlbi50b2tlbi5pZCxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgc2V0RXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1NcIilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgc2V0RW1haWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbC1pbnB1dFwiKS52YWx1ZSk7XG5cbiAgICBcbiAgICB9O1xuXG4gICAgLy8gT1RIRVIgc3RyaXBlIG1ldGhvZHMgeW91IGNhbiB1c2UgZGVwZW5kaW5nIG9uIGFwcFxuICAgIC8vIC8vIG9yIGNyZWF0ZVBheW1lbnRNZXRob2QgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY3JlYXRlX3BheW1lbnRfbWV0aG9kXG4gICAgLy8gc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xuICAgIC8vICAgdHlwZTogXCJjYXJkXCIsXG4gICAgLy8gICBjYXJkOiBjYXJkRWxlbWVudCxcbiAgICAvLyB9KTtcblxuICAgIC8vIC8vIG9yIGNvbmZpcm1DYXJkUGF5bWVudCAtIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL2pzL3BheW1lbnRfaW50ZW50cy9jb25maXJtX2NhcmRfcGF5bWVudFxuICAgIC8vIHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQocGF5bWVudEludGVudENsaWVudFNlY3JldCwge1xuICAgIC8vICAgcGF5bWVudF9tZXRob2Q6IHtcbiAgICAvLyAgICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgLy8gICB9LFxuICAgIC8vIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICBcbiAgICAgIDxoNT5Zb3VyIGluZm9ybWF0aW9uOjwvaDU+XG4gICAgICA8aHIgLz5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjkwXCIsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICA8TGFiZWw+QWRkcmVzczwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJhZGRyZXNzXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNjVcIiwgbWFyZ2luUmlnaHQ6IFwiNiVcIiB9fT5cbiAgICAgICAgICA8TGFiZWw+Q2l0eTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuMjVcIiwgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICA8Q2FyZFNlY3Rpb24gZGF0YT17ZGF0YX0gc3RyaXBlRXJyb3I9e2Vycm9yfSBzdWJtaXRPcmRlcj17c3VibWl0T3JkZXJ9IC8+XG4gICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzcy1tZXNzYWdlXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjRlbVwiLCBtYXJnaW5Ub3A6IFwiM3JlbVwiLCBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLCBwYWRkaW5nOiBcIjVweFwiLCBoZWlnaHQ6IFwiMTJyZW1cIiwgd2lkdGg6IFwiMTVyZW1cIiwgIGJvcmRlcjogXCIxcHggc29saWQgbGlnaHRncmVlblwiLCBib3JkZXJSYWRpdXM6IFwiNnB4XCIsIGJhY2tncm91bmRDb2xvcjogXCJsaWdodEdyZWVuXCJ9fSA+XG4gICAgICAgICAgWW91ciBvcmRlciBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcHJvY2Vzc2VkIVxuICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+QmFjayB0byBIb21lIHBhZ2U8L2E+XG4gICAgICAgICAgPGJyPjwvYnI+IFxuICAgICAgICAgIDxnNT5vciBzZWUgeW91ciBwdXJjdXNlIHJpc3Rvcnk8L2c1PlxuICAgICAgICAgIDxhIGhyZWY9XCIvcmVjZWlwdHNcIj5CYWNrIHRvIEhvbWUgcGFnZTwvYT4gXG4gICAgICAgICAgPHA+b3IgZmlsbCBpbiB0aGUgZmllbGQgdG8gZ2V0IGFuIGVtYWlsIG9mIHlvdXIgcmVjZWlwdDwvcD5cbiAgICAgICAgICA8UmVjZWlwdCBlbWFpbD17ZW1haWx9ICAvPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICApfVxuICAgICAgeyFzdWNjZXNzICYmIDxwPlN0YXR1czogT3JkZXIgbm90IGZpbGxlZC48L3A+fVxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnBhcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybS1oYWxmIHtcbiAgICAgICAgICAgIGZsZXg6IDAuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICMzMjMyNWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5DaGVja291dCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmI3YzkzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLFxuICAgICAgICAgICAgICAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcyZTU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTZlYmYxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc5NWY4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksXG4gICAgICAgICAgICAgIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAuU3RyaXBlRWxlbWVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTQ5MDIpIDBweCAxcHggM3B4LFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDE5NjA3OCkgMHB4IDFweCAwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2FhYjdjNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQ6Zm9jdXMsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4xMDk4MDQpIDBweCA0cHggNnB4LFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDc4NDMxNCkgMHB4IDFweCAzcHg7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LklkZWFsQmFua0VsZW1lbnQsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQuUGF5bWVudFJlcXVlc3RCdXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xuICBcbiAgZnVuY3Rpb24gUmVjZWlwdCh7IGVtYWlsIH0pIHtcbiAgICBjb25zdCBbc2VuZFJlY2VpcHQsIHNldFNlbmRSZWNlaXB0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2VuZFJlY2VpcHQoKSB7XG4gICAgICBzZXRTZW5kUmVjZWlwdCghc2VuZFJlY2VpcHQpO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjJlbVwiLCBtYXJnaW5Cb3R0b206IFwiMnJlbVwiLCBwYWRkaW5nOiBcIjMwcHhcIiwgd2lkdGg6IFwiMTVyZW1cIiwgIGJvcmRlcjogXCIxcHggc29saWQgbGlnaHRncmF5XCIsIGJvcmRlclJhZGl1czogXCI2cHhcIiwgfX0+XG4gICAgICAgIDxoMz5PcmRlciBSZWNlaXB0PC9oMz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsLWlucHV0XCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbC1pbnB1dFwiIHR5cGU9XCJlbWFpbFwiIGRlZmF1bHRWYWx1ZT17ZW1haWx9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJzZW5kLXJlY2VpcHQtY2hlY2tib3hcIlxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3NlbmRSZWNlaXB0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RvZ2dsZVNlbmRSZWNlaXB0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZW5kLXJlY2VpcHQtY2hlY2tib3hcIj5TZW5kIG1lIGEgcmVjZWlwdCBieSBlbWFpbDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgXG4gIFxufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRGb3JtO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\X\\\\Desktop\\\\MIT-Bootcamp-WebDev\\\\Week29\\\\setting-up-stripe_starter\\\\components\\\\checkoutForm.js */"));

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
        lineNumber: 267,
        columnNumber: 7
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 9
      }
    }, "Order Receipt"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }
    }, __jsx("label", {
      htmlFor: "email-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 11
      }
    }, "Email:"), __jsx("input", {
      id: "email-input",
      type: "email",
      defaultValue: email,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 11
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
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
        lineNumber: 274,
        columnNumber: 11
      }
    }), __jsx("label", {
      htmlFor: "send-receipt-checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 11
      }
    }, "Send me a receipt by email")), __jsx("button", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJhZGRyZXNzIiwiY2l0eSIsInN0YXRlIiwic3RyaXBlX2lkIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiZW1haWwiLCJzZXRFbWFpbCIsIm9uQ2hhbmdlIiwiZSIsInVwZGF0ZUl0ZW0iLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRPcmRlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImNyZWF0ZVRva2VuIiwidG9rZW4iLCJ1c2VyVG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiYWRkcmVzc1JlZ2V4IiwidHJpbSIsInRlc3QiLCJjaXR5UmVnZXgiLCJzdGF0ZVJlZ2V4IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYW1vdW50IiwiTnVtYmVyIiwiTWF0aCIsInJvdW5kIiwiY2FydCIsInRvdGFsIiwiZGlzaGVzIiwiaXRlbXMiLCJkcmlua3MiLCJpZCIsInJlc3BvbnNlIiwib2siLCJzdGF0dXNUZXh0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwbGF5IiwiZmxleCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicGFkZGluZyIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiUmVjZWlwdCIsInNlbmRSZWNlaXB0Iiwic2V0U2VuZFJlY2VpcHQiLCJ0b2dnbGVTZW5kUmVjZWlwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDO0FBQy9CQyxXQUFPLEVBQUUsRUFEc0I7QUFFL0JDLFFBQUksRUFBRSxFQUZ5QjtBQUcvQkMsU0FBSyxFQUFFLEVBSHdCO0FBSS9CQyxhQUFTLEVBQUU7QUFKb0IsR0FBRCxDQURWO0FBQUEsTUFDZkMsSUFEZTtBQUFBLE1BQ1RDLE9BRFM7O0FBQUEsbUJBT0lOLHNEQUFRLENBQUMsRUFBRCxDQVBaO0FBQUEsTUFPZk8sS0FQZTtBQUFBLE1BT1JDLFFBUFE7O0FBUXRCLE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLDJFQUFXLEVBQTVCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUE3Qjs7QUFWc0IsbUJBV1FmLHNEQUFRLENBQUMsS0FBRCxDQVhoQjtBQUFBLE1BV2ZnQixPQVhlO0FBQUEsTUFXTkMsVUFYTTs7QUFBQSxtQkFZSWpCLHNEQUFRLENBQUMsRUFBRCxDQVpaO0FBQUEsTUFZZmtCLEtBWmU7QUFBQSxNQVlSQyxRQVpROztBQWN0QixXQUFTQyxRQUFULENBQWtCQyxDQUFsQixFQUFxQjtBQUNuQjtBQUNBLFFBQU1DLFVBQVUsR0FBSWpCLElBQUksQ0FBQ2dCLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxJQUFWLENBQUosR0FBc0JILENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUFuRCxDQUZtQixDQUduQjs7QUFDQW5CLFdBQU8saUNBQU1ELElBQU47QUFBWWlCLGdC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QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFPLGFBQU8sRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFPLFFBQUUsRUFBQyxhQUFWO0FBQXdCLFVBQUksRUFBQyxPQUE3QjtBQUFxQyxrQkFBWSxFQUFFOUQsS0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBRkYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxRQUFFLEVBQUMsdUJBREw7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLGFBQU8sRUFBRWlFLFdBSFg7QUFJRSxjQUFRLEVBQUVFLGlCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU9FO0FBQU8sYUFBTyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBUEYsQ0FORixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsQ0FERjtBQW1CRDs7QUFuUnFCLEtBeVBiSCxPQXpQYTs7QUFtUnJCO0FBSUY7O0lBdlJRbkYsWTtVQVFRVyxpRSxFQUNFRSxtRTs7O0tBVFZiLFk7QUF3Uk1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0Ljk5MGE1NTIyOWMwYWJkMzNlOWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xuaW1wb3J0IENhcmRTZWN0aW9uIGZyb20gXCIuL2NhcmRTZWN0aW9uXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgY2l0eTogXCJcIixcbiAgICBzdGF0ZTogXCJcIixcbiAgICBzdHJpcGVfaWQ6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAvLyBzZXQgdGhlIGtleSA9IHRvIHRoZSBuYW1lIHByb3BlcnR5IGVxdWFsIHRvIHRoZSB2YWx1ZSB0eXBlZFxuICAgIGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyB1cGRhdGUgdGhlIHN0YXRlIGRhdGEgb2JqZWN0XG4gICAgc2V0RGF0YSh7IC4uLmRhdGEsIHVwZGF0ZUl0ZW0gfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRPcmRlcihldmVudCkge1xuICAgIFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyAvLyBVc2UgZWxlbWVudHMuZ2V0RWxlbWVudCB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIG1vdW50ZWQgRWxlbWVudC5cbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpO1xuXG4gICAgLy8gLy8gUGFzcyB0aGUgRWxlbWVudCBkaXJlY3RseSB0byBvdGhlciBTdHJpcGUuanMgbWV0aG9kczpcbiAgICAvLyAvLyBlLmcuIGNyZWF0ZVRva2VuIC0gaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvanMvdG9rZW5zX3NvdXJjZXMvY3JlYXRlX3Rva2VuP3R5cGU9Y2FyZEVsZW1lbnRcbiAgICAvLyBnZXQgdG9rZW4gYmFjayBmcm9tIHN0cmlwZSB0byBwcm9jZXNzIGNyZWRpdCBjYXJkXG4gICAgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcbiAgICAvLy8vLy8vLy8vLy8vL3JlcGxhY2VkLlxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVRva2VuKGNhcmRFbGVtZW50KTtcbiAgICBjb25zdCB1c2VyVG9rZW4gPSBDb29raWVzLmdldChcInRva2VuXCIpO1xuXG4gICAgLy8gVmFsaWRhdGUgaW5wdXQgZmllbGRzXG4gICAgY29uc3QgYWRkcmVzc1JlZ2V4ID0gL15cXGQrXFxzW0EtWmEtel0rXFxzW0EtWmEtel0rLztcbiAgICBpZiAoIWRhdGEuYWRkcmVzcy50cmltKCkgfHwgIWFkZHJlc3NSZWdleC50ZXN0KGRhdGEuYWRkcmVzcykpIHtcbiAgICBzZXRFcnJvcihcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MuXCIpO1xuICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNpdHlSZWdleCA9IC9eW2EtekEtWlxcc10qJC87XG4gICAgaWYgKCFkYXRhLmNpdHkudHJpbSgpIHx8ICFjaXR5UmVnZXgudGVzdChkYXRhLmNpdHkpKSB7XG4gICAgICBzZXRFcnJvcihcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGNpdHkgbmFtZS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVSZWdleCA9IC9eW0EtWl17Mn0kLztcbiAgICBpZiAoIWRhdGEuc3RhdGUudHJpbSgpIHx8ICFzdGF0ZVJlZ2V4LnRlc3QoZGF0YS5zdGF0ZSkpIHtcbiAgICAgIHNldEVycm9yKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgc3RhdGUgbmFtZS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy9cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L29yZGVyc2AsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB1c2VyVG9rZW4gJiYgeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlclRva2VufWAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYW1vdW50OiBOdW1iZXIoTWF0aC5yb3VuZChhcHBDb250ZXh0LmNhcnQudG90YWwgKyBcImUyXCIpICsgXCJlLTJcIiksXG4gICAgICAgIGRpc2hlczogYXBwQ29udGV4dC5jYXJ0Lml0ZW1zLFxuICAgICAgICBkcmlua3M6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcbiAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxuICAgICAgICBjaXR5OiBkYXRhLmNpdHksXG4gICAgICAgIHN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICB0b2tlbjogdG9rZW4udG9rZW4uaWQsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHNldEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTXCIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgIHNldEVtYWlsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWwtaW5wdXRcIikudmFsdWUpO1xuXG4gICAgXG4gICAgfTtcblxuICAgIC8vIE9USEVSIHN0cmlwZSBtZXRob2RzIHlvdSBjYW4gdXNlIGRlcGVuZGluZyBvbiBhcHBcbiAgICAvLyAvLyBvciBjcmVhdGVQYXltZW50TWV0aG9kIC0gaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvanMvcGF5bWVudF9pbnRlbnRzL2NyZWF0ZV9wYXltZW50X21ldGhvZFxuICAgIC8vIHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcbiAgICAvLyAgIHR5cGU6IFwiY2FyZFwiLFxuICAgIC8vICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgLy8gfSk7XG5cbiAgICAvLyAvLyBvciBjb25maXJtQ2FyZFBheW1lbnQgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY29uZmlybV9jYXJkX3BheW1lbnRcbiAgICAvLyBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KHBheW1lbnRJbnRlbnRDbGllbnRTZWNyZXQsIHtcbiAgICAvLyAgIHBheW1lbnRfbWV0aG9kOiB7XG4gICAgLy8gICAgIGNhcmQ6IGNhcmRFbGVtZW50LFxuICAgIC8vICAgfSxcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyXCI+XG4gICAgICAgXG4gICAgICA8aDU+WW91ciBpbmZvcm1hdGlvbjo8L2g1PlxuICAgICAgPGhyIC8+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC45MFwiLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgPExhYmVsPkFkZHJlc3M8L0xhYmVsPlxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwiYWRkcmVzc1wiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjY1XCIsIG1hcmdpblJpZ2h0OiBcIjYlXCIgfX0+XG4gICAgICAgICAgPExhYmVsPkNpdHk8L0xhYmVsPlxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjI1XCIsIG1hcmdpblJpZ2h0OiAwIH19PlxuICAgICAgICAgIDxMYWJlbD5TdGF0ZTwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgPENhcmRTZWN0aW9uIGRhdGE9e2RhdGF9IHN0cmlwZUVycm9yPXtlcnJvcn0gc3VibWl0T3JkZXI9e3N1Ym1pdE9yZGVyfSAvPlxuICAgICAge3N1Y2Nlc3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3MtbWVzc2FnZVwiIHN0eWxlPXt7IG1hcmdpbjogXCI0ZW1cIiwgbWFyZ2luVG9wOiBcIjNyZW1cIiwgbWFyZ2luQm90dG9tOiBcIjFyZW1cIiwgcGFkZGluZzogXCI1cHhcIiwgaGVpZ2h0OiBcIjEycmVtXCIsIHdpZHRoOiBcIjE1cmVtXCIsICBib3JkZXI6IFwiMXB4IHNvbGlkIGxpZ2h0Z3JlZW5cIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRHcmVlblwifX0gPlxuICAgICAgICAgIFlvdXIgb3JkZXIgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHByb2Nlc3NlZCFcbiAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPkJhY2sgdG8gSG9tZSBwYWdlPC9hPlxuICAgICAgICAgIDxicj48L2JyPiBcbiAgICAgICAgICA8ZzU+b3Igc2VlIHlvdXIgcHVyY3VzZSByaXN0b3J5PC9nNT5cbiAgICAgICAgICA8YSBocmVmPVwiL3JlY2VpcHRzXCI+QmFjayB0byBIb21lIHBhZ2U8L2E+IFxuICAgICAgICAgIDxwPm9yIGZpbGwgaW4gdGhlIGZpZWxkIHRvIGdldCBhbiBlbWFpbCBvZiB5b3VyIHJlY2VpcHQ8L3A+XG4gICAgICAgICAgPFJlY2VpcHQgZW1haWw9e2VtYWlsfSAgLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgKX1cbiAgICAgIHshc3VjY2VzcyAmJiA8cD5TdGF0dXM6IE9yZGVyIG5vdCBmaWxsZWQuPC9wPn1cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5wYXBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgaGVpZ2h0OiA1NTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0taGFsZiB7XG4gICAgICAgICAgICBmbGV4OiAwLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzIzMjVkO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuQ2hlY2tvdXQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzZiN2M5MztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSxcbiAgICAgICAgICAgICAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc3MmU1O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2U2ZWJmMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3OTVmODtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgN3B4IDE0cHggcmdiYSg1MCwgNTAsIDkzLCAwLjEpLFxuICAgICAgICAgICAgICAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIiwgbW9ub3NwYWNlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjE0OTAyKSAwcHggMXB4IDNweCxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjAxOTYwNzgpIDBweCAxcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNhYWI3YzQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OmZvY3VzLFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTA5ODA0KSAwcHggNHB4IDZweCxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjA3ODQzMTQpIDBweCAxcHggM3B4O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuU3RyaXBlRWxlbWVudC5JZGVhbEJhbmtFbGVtZW50LFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LlBheW1lbnRSZXF1ZXN0QnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgXG4gIGZ1bmN0aW9uIFJlY2VpcHQoeyBlbWFpbCB9KSB7XG4gICAgY29uc3QgW3NlbmRSZWNlaXB0LCBzZXRTZW5kUmVjZWlwdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNlbmRSZWNlaXB0KCkge1xuICAgICAgc2V0U2VuZFJlY2VpcHQoIXNlbmRSZWNlaXB0KTtcbiAgICB9XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyZW1cIiwgbWFyZ2luQm90dG9tOiBcIjJyZW1cIiwgcGFkZGluZzogXCIzMHB4XCIsIHdpZHRoOiBcIjE1cmVtXCIsICBib3JkZXI6IFwiMXB4IHNvbGlkIGxpZ2h0Z3JheVwiLCBib3JkZXJSYWRpdXM6IFwiNnB4XCIsIH19PlxuICAgICAgICA8aDM+T3JkZXIgUmVjZWlwdDwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbC1pbnB1dFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZW1haWwtaW5wdXRcIiB0eXBlPVwiZW1haWxcIiBkZWZhdWx0VmFsdWU9e2VtYWlsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwic2VuZC1yZWNlaXB0LWNoZWNrYm94XCJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja2VkPXtzZW5kUmVjZWlwdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVTZW5kUmVjZWlwdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VuZC1yZWNlaXB0LWNoZWNrYm94XCI+U2VuZCBtZSBhIHJlY2VpcHQgYnkgZW1haWw8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbj5Db25maXJtPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIFxuICBcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=