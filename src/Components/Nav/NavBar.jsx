import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../App.css";

import Offcanvas from "react-bootstrap/Offcanvas";
import LogoutButton from "../Nav/ButtonLogout";

import LoginButton from "../Nav/ButtonLogin";
import { useAuth } from "../context/AuthContext";

import { Link } from "react-router-dom";

import AtomButton from "../Atoms/Button";
import { FaHeartCircleCheck } from "react-icons/fa6";

function NavBar() {
  const { user } = useAuth(); // Retrieve the user from the AuthContext
  // get path from url
  const urlPath = window.location.pathname;
  const showPath = urlPath.substring(urlPath.lastIndexOf("/") + 1);
  return (
    <>
      <Navbar className="bg-body-tertiary mb-3 NavBar " expand="lg">
        <Container fluid className="align-content-md-center">
          <Navbar.Brand href="/">
            <img
              src="/Television-comic.svg"
              className=" “img-fluid d-inline-block align-top w-25 h-auto pt-2  m-2 mt-3"
              alt="logo"
            />

            <span className="display-1 text-light align-self-baseline navbar-text">
              myTVshows
            </span>
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
                  <div className="d-flex flex-column flex-md-row align-items-md-center ">
                    <div className="mb-3 mb-md-0">
                      {/* show favorites button if user is logged in */}
                      {user ? (
                        <AtomButton
                          className="text-light bold p-0 m-0"
                          linkTo="/favorites"
                          buttonText={
                            <>
                              Favoritos
                              <FaHeartCircleCheck />
                            </>
                          }
                        />
                      ) : (
                        ""
                      )}
                    </div>

                    {/* If there's a user logged in, show the email and logout button */}
                    <div className="d-flex align-items-md-center mb-3 mb-md-0 ">
                      {user && (
                        <mark className="mt-0 mx-2 px-3 text-info fw-bold rounded-4">
                          {"Usuario: " + user.email}
                        </mark>
                      )}
                      {/* if there's a user, show logout, if there's no user logged in and the current path is login, dont show login button */}
                      {user ? (
                        <LogoutButton />
                      ) : showPath === "login" ? (
                        ""
                      ) : (
                        <LoginButton />
                      )}
                    </div>
                  </div>
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
