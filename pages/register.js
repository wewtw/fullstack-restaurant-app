import React, { useState, useContext } from "react";
import { registerUser } from "../components/auth";
import AppContext from "../components/context";
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

////last good no errors
const Register = () => {
  const [data, setData] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const appContext = useContext(AppContext);
  const validateInput = () => {
    let isValid = true;
    const errors = {};

    if (!data.username || data.username.length < 3) {
      errors.username = 'Username must be at least 3 characters long';
      isValid = false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

   
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    if (!passwordRegex.test(data.password)) {
      errors.password = 'Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter';
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              <img src="http://localhost:1337/uploads/fc3e58a3bf3f48838b17e5afdaa36a2c.png" width='64px' height='64px'/>
            </div>
            <section className="wrapper">
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                Object.values(error).map((errorMessage) => (
                  <div
                    key={errorMessage}
                    style={{ marginBottom: 10, color: "red" }}
                  >
                    {errorMessage}
                  </div>
                ))}
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label>Username:</Label>
                    <Input
                      disabled={loading}
                      onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                      value={data.username}
                      type="text"
                      name="username"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      value={data.email}
                      type="email"
                      name="email"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      value={data.password}
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
                      disabled={loading}
                      onClick={() => {
                        setLoading(true);
                        if (validateInput()) {
                          registerUser(data.username, data.email, data.password)
                            .then((res) => {
                              // set authed user in global context object
                              appContext.setUser(res.data.user);
                              setLoading(false);
                              console.log(`registered user: ${JSON.stringify(res.data)}`)
                              setSuccess(true);
                              console.log('Success state:', success);
                            })
                            .catch((error) => {
                              console.log(`error in register: ${error}`)
                              //setError(error.response.data);
                              setLoading(false);
                            });
                        } else {
                          setLoading(false);
                        }
                      }}
                    >
                      
                      {loading ? "Loading.." : "Submit"}
                    </Button>
                   
                  </FormGroup>
                </fieldset>
                {success && ( // added success message
                      <div style={{ marginBottom: 10 }}>
                      <p style={{ color: "green" }}>Account created successfully!</p></div>)}
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
};
export default Register;
