// rafce
import React, { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginContext } from "../contexts/AuthContext";



const Header = ({ insideDashboard }) => {
  const {isLoggedIn,setIsLoggedIn} = useContext(loginContext)

 const onLogoutClick = ()=>{
  sessionStorage.clear();
  setIsLoggedIn(false)
 }

  return (
    <Navbar className="border shadow " sticky="top">
      <Container>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Navbar.Brand className="text-light fw-bolder">
            <i className="fa-brands fa-docker"></i> Project Fair{" "}
          </Navbar.Brand>
        </Link>
        {insideDashboard && (
          <button onClick={onLogoutClick} className="btn btn-link fw-bold">
            Logout <i class="fa-solid fa-right-from-bracket"></i>
          </button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
