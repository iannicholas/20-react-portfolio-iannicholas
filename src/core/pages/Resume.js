import React from "react";
const resume = 'IanNicholasResume.pdf';

export default function Resume() {
  const styles = {
    backgroundColor: "#000000",
    color: "white",
    textAlign: "center",
    padding: "20px",
  };
  const link = {
    textDecoration: "none",
  };
  const list = {
    listStyleType: "none",
    textAlign: "center",
    listStylePosition: "inside",
    paddingLeft: "0px",
  };
  return (
    <div style={styles}>
      <h1>
        <a
          style={link}
          href={resume}
          target="blank"
          download
        >
          Click here to download my resume
        </a>
      </h1>
      <p>My Skills</p>
      <ul style={list}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JSON</li>
        <li>GitHub</li>
        <li>Git</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>REST</li>
        <li>NoSQL</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Graphql</li>
        <li>React</li>
      </ul>
    </div>
  );
}
