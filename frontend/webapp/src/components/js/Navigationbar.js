// Navigationbar.js (or whatever your component name is)
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/Logo.png';
import '../css/navbar.css'; 

function Navigationbar() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link  as={Link} to="/">Home</Nav.Link>
          <Nav.Link  as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link  as={Link} to="/services">Services</Nav.Link>
          <Nav.Link  as={Link} to="/career">Career</Nav.Link>
          <Nav.Link  as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;
