import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import "./index.css"

import project1Picture from "../images/portfolio/spotiviz.png"
import project2Picture from "../images/portfolio/little-librarian.png"
import project3Picture from "../images/portfolio/connect-four.png"

/*######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/

const emoji = ['🖼, 💻']
const project1 = {
  title: "SpotiViz 🎶📊",
  date: "2019-03-28",
  decription:
    "Create bar graphs to visualize the audio feature data from your favorite songs on Spotify. This MERN-stack app utilizes the Spotify Web API and a D3 library for data visualization.",
  sourceURL: "https://github.com/davidwachlin/project-4/",
  hostedURL: "https://lit-crag-54993.herokuapp.com/",
  tags: 'MERN stack, API, React, D3'
}

//Project 2

const project2 = {
  title: "Little Free Librarian 📖",
  date: "2019-03-03",
  decription:
    "A full-stack app using Node/Express, MongoDB, and React to save the locations and books available at Little Free Libraries.",
  sourceURL: "https://github.com/davidwachlin/project-3/",
  hostedURL: "https://pacific-temple-35112.herokuapp.com/",
  tags: 'Node, Express, MongoDB, React, CRUD, Google Maps'
}

//Project 3

const project3 = {
  title: "c0nn3c7 f0ur 🕹",
  date: "2019-02-12",
  decription:
    "My first web dev project ever - I used Javascript, jQuery, HTML and CSS to create a connect-4 game with a retro feel.",
  sourceURL: "https://github.com/davidwachlin/c0nn3c7-f0ur",
  hostedURL: "https://goofy-bassi-70c65a.netlify.com/",
  tags: 'Javascript, HTML, CSS, jQuery'
}

export default () => (
  <div className="App">
    <Layout>

      <MyJumbo
        title={"Projects Portfolio 🎨"}
        body={"I think the best way of learning is by building Stuff."}
      />
      <hr />

      {/* TODO: Move the project objects into an array and map through them below. DRY is better. */}

      <Container style={{ marginTop: "2.5rem" }}>
        {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project1Picture}
              title={project1.title}
              date={project1.date}
              description={project1.decription}
              sourceURL={project1.sourceURL}
              hostedURL={project1.hostedURL}
              tags={project1.tags}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project2Picture}
              title={project2.title}
              date={project2.date}
              description={project2.decription}
              sourceURL={project2.sourceURL}
              hostedURL={project2.hostedURL}
              tags={project2.tags}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project3Picture}
              title={project3.title}
              date={project3.date}
              description={project3.decription}
              sourceURL={project3.sourceURL}
              hostedURL={project3.hostedURL}
              tags={project3.tags}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
