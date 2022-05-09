import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  const linkStyle = {
    padding: "15px",
    textDecoration: "none",
    fontSize: "20px",
    backgroundColor: "#000000",
  };
  const link = {
    color: 'white',
  }
  return (
    <ul className="nav nav-tabs-end justify-content-end" style={linkStyle}>
      {/* <li className="nav-item" style={linkStyle}>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li> */}
      <li className="nav-item" style={linkStyle}>
        <a
        style={link}
          href="#about"
          onClick={() => handlePageChange("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item" style={linkStyle}>
        <a
          style={link}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item" style={linkStyle}>
        <a
        style={link}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item" style={linkStyle}>
        <a
        style={link}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}
// function Menu ({currentPage, handlePageChange}) {
//   return (
//     <nav className="main-header-menu bg-dark">
//       <section
//         style={{
//           display: "flex",
//           fontFamily: "helvetica",
//           flexDirection: "row",
//           alignItems: "flex-end",
//           justifyContent: "flex-end",
//           backgroundColor: "black",
//         }}
//       >
//         {/* <div style={linkStyle}>
//           <a style={linkStyle} href="./Aboutme.js" target="blank">
//             About Me
//           </a>
//         </div> */}
//         {/* <Link
//           className="btn btn-block btn-squared btn-light text-dark"
//           to={`/aboutme`}
//         >
//           About Me
//         </Link> */}
//       <ul>
//         <div style={linkStyle}>
//           <a
//             style={linkStyle}
//             href="https://www.linkedin.com/in/ian-nicholas-nicholas-83069964/"
//             target="blank"
//           >
//             Portfolio
//           </a>

//         </ul>
//         <div style={linkStyle}>
//           <a
//             style={linkStyle}
//             href="https://docs.google.com/document/d/1_doRDVq9zZmeb_vEt0z1FRzE0OCTECxpfiRpNM77CQI/edit?usp=sharing"
//             target="blank"
//           >
//             Contact
//           </a>
//         </div>
//         <div style={linkStyle}>
//           <a
//             style={linkStyle}
//             href="mailto:ian.nicholas.webdeveloper@gmail.com"
//             target="blank"
//           >
//             Resume
//           </a>
//         </div>
//       </section>
//     </nav>
//   );
// }
