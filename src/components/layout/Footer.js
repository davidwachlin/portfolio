import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import SocialRow from "../SocialRow/SocialRow"

import "./footer.css"
import "../../fontawesome/css/all.min.css"

const Footer = () => (
  <Jumbotron fluid style={footer_styles}>
    <Container style={{ maxWidth: "960px" }}>
      <Row>
        <Col>
          <h3>David Wachlin</h3>
          <p style={{ color: "#154FFF", fontSize: "1.3rem" }}>
            <a href="mailto:davidwachlin@gmail.com">
              <span style={{ color: "#154FFF" }}>davidwachlin@gmail.com</span>
            </a>
          </p>
          <br />
        </Col>
      </Row>

      <Row>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/">
            <span className="link_styles">Home</span>
          </Link>
        </Col>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/about">
            <span className="link_styles">About</span>
          </Link>
        </Col>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/projects">
            <span className="link_styles">Projects</span>
          </Link>
        </Col>
      </Row>

      <Row className="text-center" style={{ marginTop: "3rem" }} />
    </Container>
  </Jumbotron>
)

const footer_styles = {
  marginTop: "3rem",
  marginBottom: "0",
  backgroundColor: "#000",
  color: "#fff",
  paddingBottom: "0",
  width: "100%",
}

export default Footer
