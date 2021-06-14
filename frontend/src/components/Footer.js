import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-5">
        <Container>
          <Row>
            <Col sm={6}>
              <h4>Mechkeyz</h4>
              <h1> Mechanical Keyboard</h1>
              <h3>Made to provide the ultimate typing experience</h3>
            </Col>
            <Col sm={6} style={{ textAlign: "right" }}>
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
              <br />
              <Link to="/login" style={{ color: "white" }}>
                Login
              </Link>
              <br />
              <Link to="/register" style={{ color: "white" }}>
                Register
              </Link>
              <br />
              <Link to="/cart" style={{ color: "white" }}>
                Cart
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>
      <section id="footer_base">
        <div class="base_text">
          Follow this Project on :{" "}
          <a href="https://github.com/ujjwalkrishna7/Mech_keyz">
            <i class="fab fa-github fa-2x github_icon"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
