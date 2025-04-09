// rafce
import React, { useContext, useState } from "react";
import { Row, Col } from "react-bootstrap";
import loginImg from "../assets/login.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../services/allAPI";
import { loginContext } from "../contexts/AuthContext";


const Auth = ({ fromRegisterPage }) => {

  const {isLoggedIn,setIsLoggedIn} = useContext(loginContext)

  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onBtnClick = async (e) => {
    e.preventDefault();
    if (fromRegisterPage) {
      try {
        const { username, password, email } = data;
        if (username && password && email) {
          let apiResponse = await registerUser(data);
          if (apiResponse.status == 201) {
            alert("User Successfully created");
          } else {
            if (apiResponse.status == 409) {
              alert("User already exist, please login");
              navigate('/login')
            }
          }
        } else {
          alert("Please Fill The Form");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      if (data.email && data.password) {
        const payload = {
          email: data.email,
          password: data.password,
        };
        let apiResponse = await loginUser(payload);
        if (apiResponse?.status == 200) {
          sessionStorage.setItem("user", apiResponse?.data?.user.username);
          sessionStorage.setItem("token", apiResponse?.data?.token);
          setIsLoggedIn(true)
          navigate("/dashboard");
        } else if (apiResponse?.status == 401) {
          alert(apiResponse?.message);
        } else {
          alert("Internal Server Error, please contact admin");
        }
      } else {
        alert("please fill the form completly");
      }
    }
  };

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
                {fromRegisterPage ? (
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control
                      onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                      type="text"
                      placeholder="User Name"
                    />
                  </FloatingLabel>
                ) : (
                  ""
                )}

                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    type="password"
                    placeholder="Password"
                  />
                </FloatingLabel>
              </>
              <button onClick={onBtnClick} className="mt-2 btn btn-primary">
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
