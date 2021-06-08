import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Mayank-Srivastava.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience & Events</h3>
            <Resumecontent
              title="Advent of Cyber 2 [ tryhackme ]"
              date="1 Dec 2020 - 25 Dec 2020"
              content={[
                "Advent of Cyber 2 is the online cyber security challenge that contains certain machines for penetration testing where we have to find flags in the machine by attacking or defening the the targets."
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Participated in the cyber apocalypse [ HackTheBox ]"
              content={[
                "Cyber Apocalypse is the online cyber security challenge for the team where we have to find the vulnerability in the machines and patching the machines."
              ]}
            />
            <Resumecontent
              title="Networking [ CCNA ]"
              content={[
                "Learing Networking for sharping my skills more in cyber security Like Routing Switching and Protocols level knowledge OSI model and TCP/IP model VLAN VTP WLAN Wireless Controllers Access Points etc.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Veer Bhadur Singh Purvanchal University"
              date="2017 - 2020"
              content={[`Percetage: 76%`]}
            />
            <Resumecontent
              title="12TH BOARD [ Jay Bajrang Int College ]"
              date="2014-2016"
              content={["Precentage: 66%"]}
            />
            <Resumecontent
              title="10TH BOARD [ Universal Public School ] "
              date="2012 - 2014"
              content={["CGPA: 7.0"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Hackthebox `,
                `Current rank in Tryhackme `,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
