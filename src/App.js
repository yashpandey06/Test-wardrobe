import React from "react";
import "./App.css";
import { ReactComponent as BrandIcon } from "./components/common/SVG/brand-icon.svg";
import { Link, Outlet } from "react-router-dom";
import InstagramLogo from "./components/common/images/instagram.png";
import LinkedinLogo from "./components/common/images/linkedin.png";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <div className="container-white">
        <React.StrictMode>
          <header className="header">
            <>
              {["lg"].map((expand) => (
                <Navbar
                  key={expand}
                  expand={expand}
                  className="bg-body-tertiary mb-3"
                >
                  <Container fluid>
                    <Navbar.Brand
                      className="muti-color-text header-title bold"
                      href="/"
                    >
                      <BrandIcon
                        className="center company-logo"
                        width="75px"
                        height="60px"
                      />{" "}
                      WARdrobe
                    </Navbar.Brand>
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title
                          id={`offcanvasNavbarLabel-expand-${expand}`}
                        >
                          Menu
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                          <NavDropdown
                            className="muti-color-text bold cursor-pointer"
                            title="Our Services"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                          >
                            <NavDropdown.Item
                              className="dropdown-item-menu"
                              href="/our-services/personal-styling"
                            >
                              Personal Styling
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              className="dropdown-item-menu"
                              href="/our-services/wardrobe-styling"
                            >
                              Wardrobe Styling
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              className="dropdown-item-menu"
                              href="/our-services/clothing-rental"
                            >
                              Clothing Rental
                            </NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link
                            className="muti-color-text  bold cursor-pointer"
                            href="/About-us"
                          >
                            About us
                          </Nav.Link>
                          <Nav.Link
                            className=" muti-color-text  bold cursor-pointer"
                            href="/contact-us"
                          >
                            Contact Us
                          </Nav.Link>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              ))}
            </>
          </header>

          <div style={{ height: "10px" }}></div>
          <div className="outlet-container">
            <div></div>
            <Outlet />
          </div>
          <footer className="footer">
            <div className="address">
              <h3>Our Services</h3>
              <div>
                <Link to={"/our-services/personal-styling"} className="white">
                  Personal Styling
                </Link>
              </div>
              <div>
                <Link to={"/our-services/wardrobe-styling"} className="white">
                  Wardrobe Styling
                </Link>
              </div>
              <div>
                <Link to={"/our-services/clothing-rental"} className="white">
                  Clothing Rental
                </Link>
              </div>
            </div>
            <div className="address">
              <h3>Company</h3>
              <div>
                <Link to={"/"} className="white">
                  home
                </Link>
              </div>
              <div>
                <Link to={"/About-us"} className="white">
                  About us
                </Link>
              </div>
              <div>
                <Link to={"/contact-us"} className="white">
                  Contact us
                </Link>
              </div>
            </div>
            <div className="address">
              <h3>Social media</h3>
              <div className="flex copy-right">
                <img
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/97178882/admin/feed/posts/?feedType=following"
                    );
                  }}
                  className=""
                  src={LinkedinLogo}
                  alt="Linkedin Logo"
                  width="25"
                  height="25"
                />
                <div></div>
                <img
                  onClick={() => {
                    window.open("https://www.instagram.com/war_drobee/");
                  }}
                  src={InstagramLogo}
                  alt="Instagram Logo"
                  width="25"
                  height="25"
                />
                <div></div>
              </div>
            </div>
          </footer>
          <div className="flex flex-space-between flex-wrap">
            <div>
              {" "}
              &copy; 2023 wardrobe. All rights reserved. Images by{" "}
              <a
                href="https://www.freepik.com"
                target="_blank"
                rel="noreferrer"
              >
                Freepik
              </a>
            </div>
            <div className="social-media">
              <div>
                <div className="flex copy-right">
                  <img
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/company/97178882/admin/feed/posts/?feedType=following"
                      );
                    }}
                    className=""
                    src={LinkedinLogo}
                    alt="Linkedin Logo"
                    width="25"
                    height="25"
                  />
                  <div></div>
                  <img
                    onClick={() => {
                      window.open("https://www.instagram.com/war_drobee/");
                    }}
                    src={InstagramLogo}
                    alt="Instagram Logo"
                    width="25"
                    height="25"
                  />
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </React.StrictMode>
      </div>
    </div>
  );
}

export default App;
