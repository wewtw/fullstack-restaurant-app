import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { login } from "../components/auth";
import AppContext from "../components/context";
import { from } from "@apollo/client";

function Login(props) {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const appContext = useContext(AppContext);

   useEffect(() => {
    if (appContext.isAuthenticated) {
      console.log(AppContext.user);
      router.push("/"); // redirect if you're already logged in
      setSuccess(false);
    }
  }, [appContext.isAuthenticated]);

  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }
////last good no errors
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              <img src="https://seal-app-99zpf.ondigitalocean.app/uploads/1052406bc72941bb9deaed35a59da34b.png" width='64px' height='64px' padding="20px"/>
            </div>
            <section className="wrapper">
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                  Array.isArray(error.message) && // check if message is an array
                  error.message.map((error) => {
            return (
                <div
                    key={error.messages[0].id}
                className="alert alert-danger"
                >
                {error.message}
              </div>
                );
                })}

              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label>Please enter email or Username</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      name="identifier"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <span>
                      <a href="">
                        <small>Forgot Password?</small>
                      </a>
                    </span>
                    <Button
                      style={{ float: "right", width: 120 }}
                      color="primary"
                      onClick={() => {
                        setLoading(true);
                        login(data.identifier, data.password)
                          .then((res) => {
                            setLoading(false);
                            // set authed User in global context to update header/app state
                            appContext.setUser(res.data.user);
                            setSuccess(true)
                            console.log('Success state:', success);
                          })
                          .catch((error) => {
                            setError(error.response.data);
                            setLoading(false);
                            return <div className="alert alert-danger">{error.response.data.message}</div>;
                          });
                      }}
                    >
                      {loading ? "Loading... " : "Submit"}
                    </Button>
                  </FormGroup>
                </fieldset>
                {success && ( // added success message
                      <div style={{ marginBottom: 10 }}>
                      <p style={{ color: "green" }}>Login successfully!</p>
                      </div>)}
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 90px;
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 120px;
            background-color: #2196f3;
            margin-bottom: 30px;
            border-radius-top: 6px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
          img {
            margin: 15px 30px 10px 50px;
          }
        `}
      </style>
    </Container>
  );
}

export default Login;
