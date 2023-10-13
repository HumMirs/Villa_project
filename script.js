// JavaScript to show and hide content when buttons are clicked
const show_all_btn = document.getElementById("show_all_btn");
const apartment_btn = document.getElementById("apartment_btn");
const villa_btn = document.getElementById("villa_btn");
const penthouse_btn = document.getElementById("penthouse_btn");
const content = document.getElementById("content");
const btn2 = document.getElementById("btn2");

window.addEventListener("load", function () {
  show_all_btn.click();
  show_all_btn.style.backgroundColor = "#f35525";
  btn2.style.backgroundColor = "#f35525";
});

show_all_btn.addEventListener("click", function () {
  // Show the "All" content and hide others
  document.getElementById("all_content").style.display = "flex";
  show_all_btn.style.backgroundColor = "#f35525";
  document.getElementById("apartment_content").style.display = "none";
  document.getElementById("villa_content").style.display = "none";
  document.getElementById("penthouse_content").style.display = "none";
});

apartment_btn.addEventListener("click", function () {
  // Show the "Apartment" content and hide others
  document.getElementById("all_content").style.display = "none";
  show_all_btn.style.backgroundColor = "black";
  document.getElementById("apartment_content").style.display = "flex";
  document.getElementById("villa_content").style.display = "none";
  document.getElementById("penthouse_content").style.display = "none";
});

villa_btn.addEventListener("click", function () {
  // Show the "Villa" content and hide others
  document.getElementById("all_content").style.display = "none";
  show_all_btn.style.backgroundColor = "black";
  document.getElementById("apartment_content").style.display = "none";
  document.getElementById("villa_content").style.display = "flex";
  document.getElementById("penthouse_content").style.display = "none";
});

penthouse_btn.addEventListener("click", function () {
  // Show the "Penthouse" content and hide others
  document.getElementById("all_content").style.display = "none";
  show_all_btn.style.backgroundColor = "black";
  document.getElementById("apartment_content").style.display = "none";
  document.getElementById("villa_content").style.display = "none";
  document.getElementById("penthouse_content").style.display = "flex";
});
