import "../styles/styles.css"
import "../styles/project.css"
// import Swiper bundle with all modules installed

import { novoSwiper } from "./projects";

// import styles bundle
import 'swiper/css/bundle';

// loading all imgs on the asset folders
const requireIconsOne = require.context(
    "../assets/",
    false,
    /\.(png|jpe?g|svg)$/
)


const dollarSign = document.querySelector("#dollarSign");
const experienceDetails = document.querySelector("#experienceDetails");

function showExpDetails() {
  if (window.innerWidth > 1100) {
    experienceDetails.classList.add("active");
  }
}

function hideExpDetails() {
  experienceDetails.classList.remove("active");
}

if (dollarSign) {
    dollarSign.addEventListener("mouseover", showExpDetails);
    dollarSign.addEventListener("mouseout", hideExpDetails);
}

// this sets the --project-index that will be used in css to calculate the 
// animations
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.cards');
    projects.forEach((project, index) => {
        project.style.setProperty('--project-index', index + 1);
    });
});