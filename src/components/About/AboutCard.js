import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mayank Srivastava </span>
            from <span className="purple"> Mughalsarai, Uttar Pradesh East, India.</span>
            <br />I am graducated in Bachelor's of Computer Application from Veer Bhadur Singh Purvanchal University Jaunpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing CTFs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "To Beat The Hacker Think Like A Hacker"{" "}
          </p>
          <footer className="blockquote-footer">EC-Council</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
