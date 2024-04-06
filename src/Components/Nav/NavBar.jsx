import React from "react";
import { Nav, Row, Container, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "../../App.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoutButton from "../Nav/ButtonLogout";
import LoginButton from "../Nav/ButtonLogin";
import { useAuth } from "../context/AuthContext";
import burgerMenu from "../Nav/burgerMenu.svg";
import ButtonFavoriteList from "../Nav/ButtonFavoritesList";

function NavBar() {
  const { user } = useAuth(); // Retrieve the user from the AuthContext
  // get path from url
  const urlPath = window.location.pathname;
  const showPath = urlPath.substring(urlPath.lastIndexOf("/") + 1);

  return (
    <>
      <Navbar className="bg-body-tertiary mb-3 NavBar shadow " expand="false">
        <Container fluid className="`align-content-md-center`">
          <Row>
            <Col>
              <Navbar.Brand href="/">
                <img
                  src="/Television-comic.svg"
                  className="img-fluid d-inline-block align-top  pt-0 m-1 mt-0"
                  alt="logo"
                  style={{ height: "15vh" }}
                />

                <span className="display-1 text-light align-self-baseline navbar-text neon higlight-shadow">
                  mytvShows
                </span>
              </Navbar.Brand>
            </Col>
            <Col md={2}>
              <Navbar.Toggle
                aria-controls="navbarScroll "
                className="p-0 border-0 "
              >
                <div className="neon">
                  <img
                    src={burgerMenu}
                    alt="BurguerMenu Icon"
                    style={{ width: "20%" }}
                  />
                </div>
              </Navbar.Toggle>
            </Col>
            <Navbar.Collapse id="navbarScroll ">
              <Navbar.Offcanvas
                placement="end"
                backdrop={false}
                scroll={false}
                className="navbar-offcanvas border-0 shadow p-3 offcanvas-background  "
              >
                {/* collapsed menu */}
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <span className=" glowSubHeaders fw-bold"> Menu</span>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="pe-3">
                    <Row className="align-items-center">
                      {/* If there's a user logged in, show the email */}
                      {user && (
                        <mark className="mt-0 mx-2 px-3  fw-bold rounded-3 button glowButton">
                          {"Usuario: " + user.email}
                        </mark>
                      )}
                    </Row>{" "}
                    <Row>
                      {/* Show favorites button if user is logged in */}
                      {user && ( <ButtonFavoriteList/>)
                    };
                    </Row>
                    <Row>
                      {/* Show login/logout button */}
                      {user ? (
                        <LogoutButton className="order-0 order-md-1 " />
                      ) : (
                        showPath !== "login" && (
                          <LoginButton className="order-0 order-md-1 " />
                        )
                      )}
                    </Row>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
