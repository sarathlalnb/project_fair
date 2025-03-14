// rafce
import React from "react";
import { Row, Col } from "react-bootstrap";
import loginImg from "../assets/login.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Auth = ({ fromRegisterPage }) => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container w-75 border shadow card rounded p-2">
        <Row>
          <Col>
            <img className="img-fluid" src={loginImg} alt="" />
          </Col>
          <Col>
            <h1 className="mt-3">
              <i className="fa-brands fa-docker"></i> Project Fair
            </h1>
            <h5>Sign {fromRegisterPage ? "Up" : "In"} to your Account</h5>
            <Form className="mt-3">
              <>
              
              {
                fromRegisterPage?  <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="User Name" />
              </FloatingLabel>:""
              }

                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
              </>
              <button className="mt-2 btn btn-primary">
                {fromRegisterPage ? "Register" : "Login"}
              </button>
              <p className="mt-2">
                New User? Please Click here to{" "}
                {fromRegisterPage ? (
                  <Link to={"/login"}>Login</Link>
                ) : (
                  <Link to={"/register"}>Register</Link>
                )}
              </p>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Auth;
