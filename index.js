$(function (){



    //mobile nav

const openBtn = document.querySelector("#nav-opn-btn");
const closeBtn = document.querySelector("#nav-cls-btn");
const offcanvasContainer = document.querySelector("#side-bar");

function openNav() {
  document.body.style.overflowY = "hidden";
  offcanvasContainer.classList.add("open");
}

function closeNav() {
  document.body.style.overflowY = "";
  offcanvasContainer.classList.remove("open");
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
})