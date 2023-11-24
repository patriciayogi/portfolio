import React from "react";
import Card from "react-bootstrap/Card";
import CardLink from "react-bootstrap/CardLink";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { projects } from "./data";
import "./Project.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container text-center mt-5 mb-5">
        <div className="mt-5 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-code-slash"
            viewBox="0 0 20 20"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>
          <h1>My projects</h1>
          <p className="text-base">
            Where I keep some coding experiments and templates
          </p>
        </div>

        <Row xs={1} md={3} className="g-4">
          {projects.map((project, index) => (
            <Col key={index}>
              <Card>
                <Card.Img
                  variant="top"
                  src={project.image}
                  className="projects"
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <CardLink href={project.link}>{project.subtitle}</CardLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
