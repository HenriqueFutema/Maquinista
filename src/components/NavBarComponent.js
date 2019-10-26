import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

const NavBar = () => (
  <Navbar bg="light" expand="lg" fixed="top">
    <Navbar.Brand href="#banner">Maquinista</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#ganhe">Ganhe Tempo</Nav.Link>
        <Nav.Link href="#perso">Personalize</Nav.Link>
        <Nav.Link href="#reduza">Reduza Custos</Nav.Link>
        <Nav.Link href="#vantagens">Vantagens</Nav.Link>
        <Nav.Link href="#contato">Contato</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
