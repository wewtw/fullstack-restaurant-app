import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";
import { FaUser } from "react-icons/fa";
import AppContext from "./context";
import { logout } from "./auth";

const Layout = (props) => {
  const title = "Welcome to my restaurant app";
  const { user, setUser } = useContext(AppContext);
  ///logout
  const handleLogout = () => {
    logout();
    setUser(null);
  }
  ///added conditional rendering if user? 

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <style jsx>
          {`
            .navbar-brand {
              margin-right: auto;
            }

            .nav-link {
              cursor: pointer;
            }
            .username{
              color: white;
              margin: 0.5em;
            }
          `}
        </style>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Home</a>
            </Link>
          </NavItem>
          <NavItem className="ml-auto">
            {user ? (
              <div className="d-flex align-items-center">
                <FaUser size={30} color="green"/>
                <h5 className="username">{user.username}</h5>
              </div>
            ) : (
              <Link href="/register">
                <a className="nav-link"> Sign up</a>
              </Link>
            )}
          </NavItem>
          <NavItem>
            {user ? (
              <Link href="/receipts">
                <a className="nav-link">Receipts</a>
              </Link>
            ) : null}
          </NavItem>
          <NavItem>
            {user ? (
              <Link href="/">
                <a
                  className="nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a className="nav-link">Log in</a>
              </Link>
            )}
          </NavItem>
          
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
