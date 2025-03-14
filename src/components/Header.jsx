// rafce
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ insideDashboard }) => {
  return (
    <Navbar className="border shadow " sticky="top">
      <Container>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Navbar.Brand className="text-light fw-bolder">
            <i className="fa-brands fa-docker"></i> Project Fair{" "}
          </Navbar.Brand>
        </Link>
        {insideDashboard && (
          <button className="btn btn-link fw-bold">
            Logout <i class="fa-solid fa-right-from-bracket"></i>
          </button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
