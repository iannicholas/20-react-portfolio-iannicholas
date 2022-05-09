import React from "react";
import esbelta from "../assets/sbelta_img.png";
import ctr from "../assets/2 ctr.png";
import lv from "../assets/3-lv.png";
import restroomhunters from "../assets/4restroomh.png";
import tradeup from "../assets/6-tradeup.png";
import weatherdashboard from "../assets/5weather.png";

export default function Portfolio() {
  // const cardDeck = {
  //   display: "flex",
  //   flexDirection: "row",
  // };
  // const listGroup = {
  //   backgroundColor: "#000000",
  //   color: "white",
  // };
  const styles = {
    backgroundColor: "#000000",
    color: "white",
  };
  return (
    <>
      <div className="container-fluid col-xxl-8 px-4 py-5" style={styles}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6 ps-5">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Esbelta</h1>
            <p className="lead text-white">
              Beauty starts within, that is why Esbelta sepecializes in creating
              medical and beauty treatments focused on rejuvination.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href={"http://www.esbelta.com.mx"}
                target="blank"
                className="text-decoration-none"
              >
                Esbelta{" "}
              </a>
              <a
                href="https://github.com/iannicholas/Esbelta.git"
                target="blank"
                className="text-decoration-none"
              >
                #github
              </a>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={esbelta}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid col-xxl-8 px-4 py-5" style={styles}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={ctr}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 ps-5">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
              Call Tax Relief
            </h1>
            <p className="lead text-white">
              Find yourself in Tax trouble, look no further Call Tax Relief.
            </p>

            <a
              href="https://www.calltaxrelief.com/"
              target="blank"
              className="text-decoration-none"
            >
              Call Tax Relief
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid col-xxl-8 px-4 py-5" style={styles}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6 ps-5">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
              Laboratorio Visual
            </h1>
            <p className="lead text-white">
              Laboratorio Visual is a Digital Agency that specializes in
              tailored merketing services.
            </p>
            <a
              href="http://laboratoriovisual.com/"
              target="blank"
              className="text-decoration-none"
            >
              Laboratorio Visual
            </a>
            <a
              href="https://github.com/iannicholas/LaboratorioVisual.git"
              target="blank"
              className="text-decoration-none"
            >
              #github
            </a>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={lv}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid col-xxl-8 px-4 py-5" style={styles}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={restroomhunters}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 ps-5">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
              Restroom Hunters
            </h1>
            <p className="lead text-white">
              Gotta go, we got you. Sort by unisex, ADA, or baby changing and we
              will find you a place.
            </p>
            <a
              href="https://therestroomhunters.github.io/public-restroom-search/"
              target="blank"
              className="text-decoration-none"
            >
              Restroom Locator
            </a>
            <a
              href="https://github.com/therestroomhunters/public-restroom-search"
              target="blank"
              className="text-decoration-none"
            >
              #github
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid col-xxl-8 px-4 py-5" style={styles}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6 ps-5">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">TradeUp</h1>
            <p className="lead text-white">
              Propose trades, accept offers or barter with other users to find
              what you are looking for.
            </p>
            <a
              href="https://rocky-island-25113.herokuapp.com/"
              target="blank"
              className="text-decoration-none"
            >
              TradeUp
            </a>
            <a
              href="https://github.com/Will-Pikus/Project-2.git"
              target="blank"
              className="text-decoration-none"
            >
              #github
            </a>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={tradeup}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid col-xxl-8 px-4 py-5" style={styles}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={weatherdashboard}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 ps-5">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
              Weather Dashboord
            </h1>
            <p className="lead text-white">
            Planning on traveling, curious about the weather in your area,
              or a family members area, click me.
            </p>
            <a
              href="https://iannicholas.github.io/06-Server-Side-APIs-IanNicholas-Homework/"
              target="blank"
              className="text-decoration-none"
            >
              Weather Dashboard
            </a>
            <a
              href="https://github.com/iannicholas/06-Server-Side-APIs-IanNicholas-Homework"
              target="blank"
              className="text-decoration-none"
            >
              #github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
