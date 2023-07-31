import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar() {
  return (
    <>
      <Navbar
        className="bg-body-tertiary mb-3 NavBar "
        expand="lg"
        
      >
        <Container fluid className="align-content-md-center">
          <Navbar.Brand href="/">
            <img
              src="/Television-comic.svg"
              className=" “img-fluid d-inline-block align-top w-25 h-auto pt-2  m-2 mt-3"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Offcanvas
              placement="end"
              backdrop={false}
              scroll={false}
              className="navbar-offcanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="  pe-3 ">
                  <span className="display-1 text-light align-self-baseline">
                    CodoTV
                  </span>

                  <Nav.Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
