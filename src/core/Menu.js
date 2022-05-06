import React from "react";
import "./css/menu.css";

export default function Nav() {
  const linkStyle = {
    padding: '15px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
  };

  return (
    <nav className="main-header-menu bg-dark">
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          backgroundColor: "black",
        }}
      >
        <div style={linkStyle}>
          <a style={linkStyle} href="https://github.com/iannicholas" target="blank">
            About Me
          </a>
        </div>
        <div style={linkStyle}>
          <a style={linkStyle}
            href="https://www.linkedin.com/in/ian-nicholas-nicholas-83069964/"
            target="blank"
          >
            Portfolio
          </a>
        </div>
        <div style={linkStyle}>
          <a style={linkStyle}
            href="https://docs.google.com/document/d/1_doRDVq9zZmeb_vEt0z1FRzE0OCTECxpfiRpNM77CQI/edit?usp=sharing"
            target="blank"
          >
            Contact
          </a>
        </div>
        <div style={linkStyle}>
          <a style={linkStyle} href="mailto:ian.nicholas.webdeveloper@gmail.com" target="blank">
            Resume
          </a>
        </div>
      </section>
    </nav>
  );
}
