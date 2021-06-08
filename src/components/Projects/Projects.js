import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few blogs i am posted recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title=" [ Ignite ] - TRYHACKME (Detailed) "
              description="A new start-up has a few issues with their web server."
              link="https://tryhacktome.blogspot.com/2020/11/ignite-tryhackme-detailed.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="[ Mr. Robot ] -TRYHACKME"
              description="Based on the Mr. Robot show, can you root this box?"
              link="https://tryhacktome.blogspot.com/2020/07/mr-robot-try-hack-me.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="[ Blue ] - TRYHACKME"
              description="Deploy & hack into a Windows machine, leveraging common misconfigurations issues."
              link="https://tryhacktome.blogspot.com/2020/07/blue-tryhackme.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Delivery - [HackTheBox]"
              description="This is Delivery HackTheBox machine walkthrough. In this writeup, I have demonstrated step-by-step how I rooted to Delivery HTB machine. Before starting let us know something about this machine."
              link="https://github.com/DarkTangent01/Delivery/blob/main/Writeup_delivery.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Academy is an Easy rated difficulty machine from Hack the Box. This machine is a lot of fun and starts out by giving us an opportunity to hack into a dummy version of their new Academy platform. We will find that the sites registration process is insecure. This leads to access to the admin page."
              link="https://github.com/DarkTangent01/Academy"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
