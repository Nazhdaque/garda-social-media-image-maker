import slide_1 from "../html/slide-1.html?raw";
import slide_2 from "../html/slide-2.html?raw";
import slide_3 from "../html/slide-3.html?raw";

const slides = document.querySelector(".main-content");
slides.insertAdjacentHTML("beforeend", slide_1);
slides.insertAdjacentHTML("beforeend", slide_2);
slides.insertAdjacentHTML("beforeend", slide_3);
