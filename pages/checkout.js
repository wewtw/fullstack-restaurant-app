/* pages/checkout.js */

import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import Cart from "../components/cart";
//last good no errors
function Checkout() {
  // get app context
  const {isAuthenticated} = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  //const isAuthenticated  = true;
  
  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    "pk_test_51MtgENFQaXaUscqzx2wNfXg81GsJlle4Tn676ZQWoiTnW5fy7c6rpMLFMhGngyRQnSxHcmY2nuktH4nbgL9ZXZgP006s8n5Kaa" //important NOTE this comes from STRIPE public kay it needs to work with the secret key.
  );

  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20 }}>Checkout</h1>
        <p>Do not use your real credentials here this app is for grading purposes only.</p>
        <p>:::To check out please use our dummy card number: 4242 4242 4242 4242 04 / 24 242 42424</p>
        <Cart isAuthenticated={isAuthenticated} />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
  // }
}
export default Checkout;
