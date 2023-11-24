import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Menu.css";

export default function Menu() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="Navbar">
      <Container>
        <Navbar.Brand href="#home">Patricia Yogi</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/patriciayogi/">
              Linkedin
            </Nav.Link>
            <Nav.Link href="https://github.com/patriciayogi">Github</Nav.Link>
            <Nav.Link href="https://koalendar.com/e/meet-with-patricia-yogi/">
              Let's meet
            </Nav.Link>
            {/*  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
