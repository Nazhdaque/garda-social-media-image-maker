(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();const p=`<article class="slide layout-center z-up"
				 id="slide-1">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<button class="brand-logo sm-d-none toggle"
						aria-label="toggle theme">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</button>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<!-- <img src="./images/logos/logo-w.svg"
					 class="logo"> -->
			<p class="tag">Новость</p>
			<!-- <p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h2 class="ttl fw-eb">Lorem ipsum dolor sit <br>amet consectetur, <br>adipisicing elit</h2>
				<!-- <p class="sub">Lorem ipsum «Гарда»</p> -->
			</div>
		</div>

		<!-- <div class="footer">
			<p class="tag">Видео</p>
			<p class="txt">Вебинар группы компаний «Гарда» <br>3 декабря 2024</p>
		</div> -->

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,m=`<article class="slide layout-center z-up"
				 id="slide-2">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header">
			<!-- <img src="./images/logos/logo-w.svg"
					 class="logo"> -->
			<p class="tag">Вебинар</p>
			<p class="txt">10 декабря в 11:00</p>
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb">Lorem ipsum dolor sit <br>amet consectetur</h1>
				<p class="sub">Lorem ipsum dolor sit <br>amet consectetur</p>
			</div>
		</div>

		<!-- <div class="footer">
			<p class="tag">Видео</p>
			<p class="txt">Вебинар группы компаний «Гарда» <br>3 декабря 2024</p>
		</div> -->

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,v=`<article class="slide layout-center z-up"
				 id="slide-3">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header">
			<!-- <img src="./images/logos/logo-w.svg"
					 class="logo"> -->
			<p class="tag">Прямой эфир</p>
			<!-- <p class="txt">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb">Lorem ipsum</h1>
				<p class="sub">Гость эфира — Рустэм Хайретдинов, <br><span>заместитель генерального директора <br>группы
						компаний
						«Гарда»</span>
				</p>
			</div>
		</div>

		<!-- <div class="footer">
			<p class="tag">Видео</p>
			<p class="txt">Вебинар группы компаний «Гарда» <br>3 декабря 2024</p>
		</div> -->

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,b=`<article class="slide layout-center z-up"
				 id="slide-4">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header">
			<!-- <img src="./images/logos/logo-w.svg"
					 class="logo"> -->
			<p class="tag">Статья</p>
			<!-- <p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb">Lorem ipsum dolor</h1>
				<p class="sub">Lorem ipsum dolor sit <br>amet consectetur</p>
			</div>
		</div>

		<div class="footer">
			<!-- <p class="tag">Видео</p> -->
			<p class="txt">Станислав Грибанов,<br> руководитель продукта «Гарда NDR»</p>
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,u=`<article class="slide layout-center z-up"
				 id="slide-5">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header">
			<!-- <img src="./images/logos/logo-w.svg"
					 class="logo"> -->
			<p class="tag">Конференция</p>
			<p class="txt">Москва, ул. Вильгельма Пика, д.16, конгресс-центр Solux</p>
			<p class="txt">24 октября 2025 года</p>
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb">Сохранить все</h1>
				<p class="txt fw-eb txt-gradient">2025</p>
				<p class="sub">Безопасность информации</p>
			</div>
		</div>

		<div class="footer">
			<!-- <p class="tag">Видео</p> -->
			<p class="txt">24 октября, Москва, <br>ул. Вильгельма Пика, д.16, <br>конгресс-центр Solux</p>
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,f=`<article class="slide layout-center z-up"
				 id="slide-6">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header ">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<!-- <p class="tag">Вебинар</p>
			<p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb">Lorem ipsum <br>dolor sit amet</h1>
				<p class="sub">Lorem ipsum dolor sit <br>amet consectetur</p>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Вебинар</p>
			<p class="txt">3 февраля в 11:00</p>
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,w=`<article class="slide layout-center z-up"
				 id="slide-7">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header ">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<!-- <p class="tag">Вебинар</p>
			<p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb">Lorem ipsum <br>dolor sit amet</h1>
				<p class="sub">Lorem ipsum dolor sit <br>amet consectetur</p>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Видео</p>
			<p class="txt">Вебинар группы компаний «Гарда» <br>3 февраля 2025</p>
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,h=`<article class="slide layout-center z-up"
				 id="slide-8">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header ">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<!-- <p class="tag">Вебинар</p>
			<p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb">Дайджест</h1>
				<p class="sub">1 — 28 февраля</p>
			</div>
		</div>

		<!-- <div class="footer">
			<p class="tag">Дайджест</p>
			<p class="txt">Группа компаний «Гарда» <br>1 — 30 ноября 2025</p>
		</div> -->

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,x=`<article class="slide layout-center z-up"
				 id="slide-9">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<!-- <p class="tag">Конференция</p> -->
			<!-- <p class="txt">Москва, ул. Вильгельма Пика, д.16, конгресс-центр Solux</p>
			<p class="txt">24 октября 2025 года</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb caps">Кибер</h1>
				<p class="sub">инциденты <br>угрозы</p>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Дайджест</p>
			<p class="txt">1 — 28 февраля</p>
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,y=`<article class="slide layout-center z-up"
				 id="slide-10">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header ">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<!-- <p class="tag">Вебинар</p>
			<p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb">Lorem ipsum <br>dolor sit amet</h1>
				<p class="sub">Lorem ipsum dolor sit <br>amet consectetur</p>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Видео</p>
			<p class="txt">Вебинар группы компаний «Гарда» <br>3 февраля 2025</p>
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,L=`<article class="slide layout-center z-up"
				 id="slide-11">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header ">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<!-- <p class="tag">Вебинар</p>
			<p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb">Lorem ipsum <br>dolor sit amet</h1>
				<p class="sub">Lorem ipsum dolor sit <br>amet consectetur</p>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Вебинар</p>
			<p class="txt">3 февраля в 11:00</p>
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,k=`<article class="slide layout-center z-up"
				 id="slide-12">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header ">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<!-- <p class="tag">Вебинар</p>
			<p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb">Lorem ipsum <br>dolor sit amet</h1>
				<p class="sub">Lorem ipsum dolor sit <br>amet consectetur</p>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Видео</p>
			<p class="txt">Вебинар группы компаний «Гарда» <br>3 февраля 2025</p>
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,A=`<article class="slide layout-center z-up"
				 id="slide-13">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header ">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<!-- <p class="tag fw-eb">Вебинар</p>
			<p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag fw-eb">Видео</p> -->
			<img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo">
			<div class="ttl-group">
				<p class="sub">Виджет</p>
				<h1 class="ttl fw-eb">Файлы <br>(расширения)</h1>
			</div>
		</div>

		<div class="footer">
			<p class="tag fw-eb">Дашборд</p>
			<p class="txt fw-eb">Файлы</p>
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,T=`<article class="slide layout-center z-up"
				 id="slide-14">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header ">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<!-- <p class="tag fw-eb">Вебинар</p>
			<p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag fw-eb">Видео</p> -->
			<img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo">
			<div class="ttl-group">
				<p class="sub">Улучшения</p>
				<h1 class="ttl fw-eb">События</h1>
			</div>
		</div>

		<div class="footer">
			<p class="tag fw-eb">Версия 4.0</p>
			<!-- <p class="txt fw-eb">Файлы</p> -->
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,_=`<article class="slide layout-center z-up"
				 id="slide-15">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header ">
			<!-- <img src="./images/logos/logo-w.svg"
					 class="logo"> -->
			<!-- <p class="tag fw-eb">Вебинар</p>
			<p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag fw-eb">Видео</p> -->
			<img src="./images/logos/logo-y-w-ti.svg"
					 class="logo">
			<div class="ttl-group">
				<!-- <p class="sub">Улучшения</p> -->
				<h1 class="ttl fw-eb">Вебинары</h1>
			</div>
		</div>

		<div class="footer">
			<!-- <p class="tag fw-eb">Версия 4.0</p> -->
			<!-- <p class="txt fw-eb">Файлы</p> -->
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,M=`<article class="slide layout-center z-up"
				 id="slide-16">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header ">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<!-- <p class="tag fw-eb">Вебинар</p>
			<p class="txt ">10 декабря в 11:00</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag fw-eb">Видео</p> -->
			<!-- <img src="./images/logos/logo-y-w-ti.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<p class="sub">Эволюция <br>сетевых технологий</p>
				<h1 class="ttl fw-eb">Что такое NDR</h1>
			</div>
		</div>

		<div class="footer">
			<!-- <p class="tag fw-eb">Версия 4.0</p> -->
			<!-- <p class="txt fw-eb">Файлы</p> -->
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,j=`<article class="slide layout-center z-up"
				 id="slide-17">
	<div class="slide-number"></div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<!-- <p class="tag">Конференция</p> -->
			<!-- <p class="txt">Москва, ул. Вильгельма Пика, д.16, конгресс-центр Solux</p>
			<p class="txt">24 октября 2025 года</p> -->
		</div>

		<div class="body">
			<!-- <p class="tag">Видео</p> -->
			<!-- <img src="./images/logos/logo-x-w-ndr.svg"
					 class="logo"> -->
			<div class="ttl-group">
				<h1 class="ttl fw-eb caps">Кибер</h1>
				<p class="sub">инциденты <br>угрозы</p>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Дайджест</p>
			<p class="txt">1 — 30 февраля</p>
		</div>

		<!-- <img class="o-fit-cover"
				 src="./images/.webp"
				 alt="background-image"> -->
	</div>
</article>`,z=`<article class="slide layout-center z-up"
				 id="slide-18">
	<div class="slide-number"></div>

	<div class="img-box img-maker video">
		<!-- <iframe src="https://vkvideo.ru/video_ext.php?oid=-162763950&id=456239081&hash=af5e9b1ef8dc009d"
						width="640"
						height="360"
						frameborder="0"
						allowfullscreen="1"
						allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe> -->
	</div>
</article>`,n=document.querySelector(".main-content");n.insertAdjacentHTML("beforeend",p);n.insertAdjacentHTML("beforeend",m);n.insertAdjacentHTML("beforeend",v);n.insertAdjacentHTML("beforeend",b);n.insertAdjacentHTML("beforeend",u);n.insertAdjacentHTML("beforeend",f);n.insertAdjacentHTML("beforeend",w);n.insertAdjacentHTML("beforeend",h);n.insertAdjacentHTML("beforeend",x);n.insertAdjacentHTML("beforeend",y);n.insertAdjacentHTML("beforeend",L);n.insertAdjacentHTML("beforeend",k);n.insertAdjacentHTML("beforeend",A);n.insertAdjacentHTML("beforeend",T);n.insertAdjacentHTML("beforeend",_);n.insertAdjacentHTML("beforeend",M);n.insertAdjacentHTML("beforeend",j);n.insertAdjacentHTML("beforeend",z);const d=document.querySelectorAll(".slide"),H=document.querySelector(".slide-list");d.forEach((t,e)=>{H.insertAdjacentHTML("beforeend",`<li>
			<a href="#slide-${e+1}">
				<span class="sr-only">slide ${e+1}</span>
			</a>
		</li>`)});const o=document.querySelectorAll(".slide-list > *"),g=t=>{const e=t.currentTarget.querySelector(".slide-number");e&&(e.style.top=`${e.getBoundingClientRect().height/-4}px`);const i=document.querySelector(".slide-list > *.active");i&&i.classList.remove("active"),d.forEach((a,s)=>{a===t.currentTarget&&o[s].querySelector("a").click()&o[s].classList.add("active")})};d.forEach(t=>t.addEventListener("mouseenter",g));o.forEach(t=>t.addEventListener("click",g));const S=(t,e="white")=>{let i="";return e!=="black"?i=t.replace("-w.","-b."):i=t.replace("-b.","-w."),i},E=t=>{document.querySelectorAll(".brand-logo img").forEach(e=>e.setAttribute("src",S(e.src,t)))},q=()=>document.documentElement.getAttribute("data-theme"),r=t=>{document.documentElement.setAttribute("data-theme",t),E(t)},N=t=>r(t!=="black"?"black":"white");document.querySelectorAll(".toggle").forEach(t=>t.addEventListener("click",()=>N(q())));
