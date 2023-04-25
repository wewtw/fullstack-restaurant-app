import { useEffect } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import axios from "axios";
const bcrypt = require("bcrypt");
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//register a new user
export const registerUser = (username, email, password) => {
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        axios
          .post(`${API_URL}/auth/local/register`, { username, email, password: hash })
          .then((res) => {
            // Store the user information in local storage
            window.localStorage.setItem("user", JSON.stringify(res.data.user));
            // Set token response from Strapi for server validation
            Cookie.set("token", res.data.jwt);
            // Resolve the promise to set loading to false in SignUp form
            resolve(res);
            // Redirect back to home page for restaurant selection
            setTimeout(() => {
              Router.push("/");
              alert("Success!! Back to home page."); // Easy message
            }, 4000);
          })
          .catch((error) => {
            // Reject the promise and pass the error object back to the form
            reject(error);
          });
      }
    });
  });
};

export const login = (identifier, password) => {
  if (typeof window === "undefined") {
    return;
  }

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/`, { identifier })
      .then(async (res) => {
        const match = await bcrypt.compare(password, res.data.user.password);
        if (match) {
          window.localStorage.setItem("user", JSON.stringify(res.data.user));
          Cookie.set("token", res.data.jwt);
          resolve(res);
          setTimeout(() => {
            Router.push("/");
            alert("Log In Success!"); // Easy message
          }, 4000);
        } else {
          reject(new Error("Invalid password"));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const logout = () => {
  //remove token and user cookie
  Cookie.remove("token");
  //delete window.__user;
  window.localStorage.removeItem("user");//experimental 
  /// sync logout between multiple windows
  window.localStorage.setItem("logout", Date.now());
  ////redirect to the home page
  setTimeout(() => {
    Router.push("/");
    alert("Seccess!! Back to home page.");//easy mess
  });

};

//Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement
export const withAuthSync = (Component) => {
  const Wrapper = (props) => {
    const syncLogout = (event) => {
      if (event.key === "logout") {
        Router.push("/login");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
};

//// Retrieve the user information from local storage
export const getUserFromLocalStorage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const user = window.localStorage.getItem("user");
  const token = Cookie.get("token");
  if (user) {
    const parsedUser = JSON.parse(user);
    return {
      ...parsedUser,
      jwt: token,
    };
  }
  return null;
};
