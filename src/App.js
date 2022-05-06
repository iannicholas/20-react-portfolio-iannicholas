import React from 'react';
import Menu from './core/Menu';
import Aboutme from './core/Aboutme';
import Portfolio from './core/Portfolio';
import Contact from './core/Contact';
import Resume from './core/Resume';
import Footer from './core/Footer';

import projects from './core/projects';


export default function App() {
  return (
    <div>
      <Menu />
      <Aboutme />
      <Portfolio projects={projects} />
      <Contact />
      <Resume />
      <Footer />
      </div>
      
  );
}

// document.addEventListener('DOMContentLoaded', () => {

//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {

//     // Add a click event on each of them
//     $navbarBurgers.forEach( el => {
//       el.addEventListener('click', () => {

//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target;
//         const $target = document.getElementById(target);

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle('is-active');
//         $target.classList.toggle('is-active');

//       });
//     });
//   }

// });