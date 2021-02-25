 const selectElement = (s) => document.querySelector(s);
 const navLinks = document.querySelectorAll(".nav-link");
 selectElement(".side-menu-icon").addEventListener("click", ()=>{
	selectElement(".nav-list").classList.toggle("active");
	selectElement(".side-menu-icon").classList.toggle("toggle");
 });