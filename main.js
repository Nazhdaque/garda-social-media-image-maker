import "./css/main.css";
import "./js/importHTML.js";

const slides = document.querySelectorAll(".slide");

const nav = document.querySelector(".slide-list");
slides.forEach((__, i) => {
	nav.insertAdjacentHTML(
		"beforeend",
		`<li>
			<a href="#slide-${i + 1}">
				<span class="sr-only">slide ${i + 1}</span>
			</a>
		</li>`
	);
});

/* |||||||||| |||||||||| |||||||||| |||||||||| */
const navLinks = document.querySelectorAll(".slide-list > *");
const navLinksAndSlideNumberAnimation = e => {
	const num = e.currentTarget.querySelector(".slide-number");
	if (num) num.style.top = `${num.getBoundingClientRect().height / -4}px`;
	const activeLink = document.querySelector(".slide-list > *.active");
	activeLink && activeLink.classList.remove("active");
	slides.forEach((slide, i) => {
		slide === e.currentTarget &&
			navLinks[i].querySelector("a").click() &
				navLinks[i].classList.add("active");
	});
};
slides.forEach(slide =>
	slide.addEventListener("mouseenter", navLinksAndSlideNumberAnimation)
);
navLinks.forEach(link =>
	link.addEventListener("click", navLinksAndSlideNumberAnimation)
);

/* |||||||||| |||||||||| |||||||||| |||||||||| */
const swapImages = (img, theme = "white") => {
	let alt = "";
	theme !== "black"
		? (alt = img.replace("-w.", "-b."))
		: (alt = img.replace("-b.", "-w."));
	return alt;
};

const toggleLogo = theme => {
	document
		.querySelectorAll(".brand-logo img")
		.forEach(item => item.setAttribute("src", swapImages(item.src, theme)));
};

const getTheme = () => document.documentElement.getAttribute("data-theme");

const setTheme = theme => {
	document.documentElement.setAttribute("data-theme", theme);
	toggleLogo(theme);
};

const toggleTheme = theme =>
	theme !== "black" ? setTheme("black") : setTheme("white");

document
	.querySelectorAll(".toggle")
	.forEach(toggle =>
		toggle.addEventListener("click", () => toggleTheme(getTheme()))
	);
