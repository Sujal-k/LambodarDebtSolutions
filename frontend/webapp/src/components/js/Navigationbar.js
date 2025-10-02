import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/navbar.css";

function Navigationbar() {
  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      {/* Logo */}
      <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center ms-3">
        <div className="logo-mark">LD</div>
        <div className="logo-text ms-2">
          <div className="brand-name">Lambodar Debt Solutions</div>
          <div className="brand-tag">Debt Relief & Financial Guidance</div>
        </div>
      </Navbar.Brand>

      {/* Toggle button for mobile */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Navbar Links */}
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
