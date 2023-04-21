import React, { useState, useEffect } from "react";
import { getUserFromLocalStorage } from "../components/auth";
//importing the getUserFromLocalStorage function to get the currently logged in user. step-1.
function Receipts() {
  const [orders, setOrders] = useState([]);// will store list of orders. step-2
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; //set up the api url. step-3.
//last good no errors.
  useEffect(() => {//hook to fetch the orders data from the Strapi API, using the logged in user's ID as a query parameter.step-4.
    const fetchData = async () => {
      try {
        const user = getUserFromLocalStorage();
        if (!user) {
          console.log("User not found");
          return;
        }

        const response = await fetch(`${API_URL}/orders?user=${user.id}`, {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        });

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  ///map orders. step-5.
  //divded the amount by 100 to fix to a dollar.
  ///added a new status field. admin can set status in the panel. 
  //next step make a new page just for workers who can set status to shiped or delivered.   
  return (
    <div style={{marginBottom: "2rem" }} >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", marginTop: "1rem" }}>Order History</h1>
      {orders.map((order, index) => (
        <div key={order.id} style={{ 
            fontSize: "1.5rem",
            border: "1px solid #ccc",
            background: "white",
            padding: "1rem", marginBottom: index === orders.length - 1 ? 0 : "1rem"}}>
          <p>Order ID: {order.id}</p>
          <p>Amount: ${order.amount / 100}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Receipts;
