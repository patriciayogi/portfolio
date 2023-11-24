import React from "react";

import { Container } from "react-bootstrap";
import { skills } from "./data";

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container justify-content-center align-items-center">
        <div className="text-center mt-5 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-cpu"
            viewBox="0 0 16 16"
          >
            <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
          </svg>
          <h1>Skills &amp; Technologies</h1>
          <p>
            I gratuaded in IT in 2004, and I've been in this field ever since. I
            love to learn new things and experiment with new
            technologies.\nThese are some of the major languages, technologies,
            tools and platforms I have worked with:
          </p>
        </div>

        <Container>
          {skills.skills.map((rows) => (
            <div>
              <br />
              <h3 className="d-flex justify-content-center">{rows.title}</h3>
              <div key={rows.title} className="d-flex justify-content-center">
                {rows.items.map((item) => (
                  <div key={item.title} style={{ display: "inline-block" }}>
                    <img
                      style={styles.iconStyle}
                      src={item.icon}
                      alt={item.title}
                    />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
