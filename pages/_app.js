import { useContext, useState, useEffect } from "react";
import Head from "next/head";
import AppContext from "../components/context";
import Home from "./index";
import Layout from "../components/layout";
import Cookie from "js-cookie";

function MyApp(props) {
  const { cart, addItem, removeItem, user, setUser } = useContext(AppContext);
  const [state, setState] = useState({ cart: cart, user: user });
  const { Component, pageProps } = props;
//last good no errors
  useEffect(() => {
    const localUser = window.localStorage.getItem("user");
    if (localUser) {
      setState({ ...state, user: JSON.parse(localUser) });
    }
  }, []);

  const handleSetUser = (user) => {
    setState({ ...state, user: user, isAuthenticated: !!user });
    window.localStorage.setItem("user", JSON.stringify(user));
  };

  const handleAddItem = (item) => {
    const { items } = state.cart;

    // Check if item is already in cart
    const foundItem = items.find((i) => i.id === item.id);

    if (foundItem) {
      // If item is already in cart, increase quantity
      const newCart = {
        items: items.map((item) => {
          if (item.id === foundItem.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price,
      };

      setState({ cart: newCart, user: state.user });
      Cookie.set("cart", newCart);
    } else {
      // If item is not in cart, add it
      const newCart = {
        items: [...state.cart.items, { ...item, quantity: 1 }],
        total: state.cart.total + item.price,
      };

      setState({ cart: newCart, user: state.user });
      Cookie.set("cart", newCart);
    }
  };

  const handleRemoveItem = (item) => {
    const { items } = state.cart;

    // Check if item is already in cart
    const foundItem = items.find((i) => i.id === item.id);

    if (foundItem.quantity > 1) {
      // If quantity is greater than 1, decrease quantity
      const newCart = {
        items: items.map((item) => {
          if (item.id === foundItem.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price,
      };

      setState({ cart: newCart, user: state.user });
      Cookie.set("cart", newCart);
    } else {
      // If quantity is 1, remove item from cart
      const newCart = {
        items: items.filter((item) => item.id !== foundItem.id),
        total: state.cart.total - item.price,
      };

      setState({ cart: newCart, user: state.user });
      Cookie.set("cart", newCart);
    }
  };

  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
        isAuthenticated: !!user,
        user: state.user,
        setUser: handleSetUser,
      }}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
