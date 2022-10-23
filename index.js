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

dollarSign.addEventListener("mouseover", showExpDetails);
dollarSign.addEventListener("mouseout", hideExpDetails);
