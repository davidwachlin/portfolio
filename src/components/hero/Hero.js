import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1> Hi, I'm David 👋 </h1>
      <br />
      <h3>I'm a software developer with a background in education. I'm passionate about learning, creating, communicating, and helping others. And I'm kind of hooked on that moment when my code finally solves the problem.</h3>
      {/* <h2>I'm a software developer and educator in Atlanta.</h2> */}
      <h3>
        I like using{" "}
        <b style={{ color: "blue" }}>Javascript, Node.js, React.js, Gatsby, </b>{" "}
        and <b style={{ color: "blue" }}>Python + Django</b> to make cool stuff
        on the internet.
      </h3>
      <p>
        Let's chat:{" "}
        <a href="mailto:davidwachlin@gmail.com">
          <span style={{ color: "#154FFF" }}>davidwachlin@gmail.com</span>
        </a>
      </p>
    </div>
    <div />
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
