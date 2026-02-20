import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/navbar.css";
import logomain from "../../assets/logomain.png";

function Navigationbar() {
  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      
      <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center ms-3">
        <img
          src={logomain}
          alt="Logomain"
          className="navbar-logo me-2"
        />

        <div className="logo-text">
          <div className="brand-name">SHREYA LOANS & FINANCE</div>
          <div className="brand-tag"></div>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/career">Career</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Navigationbar;