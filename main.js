let burgerBars = document.querySelector(".burger");
let menuLinks = document.querySelector("ul");

burgerBars.onclick = () => {
	menuLinks.classList.toggle("activate");
}