import React from 'react';
import logo from './Web_Developer_Inicholas3.png';

const styles = {
  background: '#000000',
};
const header = {
  width: '100%',
  backgroundColor: '#000000',
}
export default function Home() {

  return (
    <div className="px-4 about-me" style={header}>
        <div className="row flex-lg-row-reverse align-items-center" style={styles}>
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div className="col-lg-6 ps-5">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Ian<br/>Nicholas</h1>
            <p className="lead text-white">Lets get something together. I can put what you're thinking into code and as a team we can build something really cool!</p>
          </div>
        </div>
      </div>
  );
}