import React from "react";

import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-sm-4">
          <h1 className="title-font font-medium">Hi, I'm Patricia Yogi</h1>
          <p className="leading-relaxed">
            An avid adventurous traveler and photography enthusiast
            <br />I also go by Back-End Developer or Full Stack Developer
          </p>
        </div>
        <div className="col-sm-4">
          <img
            className="object-cover object-center "
            alt="Me"
            src="./foto.png"
          />
        </div>
      </div>
    </section>
  );
}
