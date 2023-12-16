import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar1 = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
      className="py-3"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Nav className="me-auto">
            <NavLink className="nav-link active" to={"/"}>
              Alicia Peralta Linares
            </NavLink>
          </Nav>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink className="nav-link" to={"/projects"}>
              Projects
            </NavLink>
            <NavLink className="nav-link" to={"/about"}>
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar1;
