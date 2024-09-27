(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const g=`<article class="slide layout-center z-up"\r
				 id="slide-1">\r
	<div class="slide-number"></div>\r
\r
	<div class="slide__top-group">\r
		<div class="slide-ttl z-up">\r
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>\r
			<p class="fs-lg txt-gradient">The tool for creating illustrations | 700x500px</p>\r
		</div>\r
		<a href="https://garda.ai/"\r
			 class="brand-logo sm-d-none"\r
			 aria-label="home">\r
			<img src="./images/logos/logo-b.svg"\r
					 alt="brand-logo">\r
		</a>\r
	</div>\r
\r
	<div class="img-box img-maker">\r
		<div class="header">\r
			<img src="./images/logos/logo-w.svg"\r
					 class="logo">\r
			<p class="tag">Мнение</p>\r
			<p class="txt">Руслан Юсуфов, футуролог, <br>управляющий партнер MINDSMITH\r
			</p>\r
		</div>\r
\r
		<div class="body">\r
			<div class="group">\r
				<h2 class="ttl">Регулирование, <br>технологии <br> и ответственность</h2>\r
				<div class="sub">\r
					<p>Три стороны защиты данных</p>\r
					<p>Lorem ipsum dolor sit amet</p>\r
				</div>\r
			</div>\r
		</div>\r
\r
		<div class="footer">\r
			<p class="tag">18–19 сентября</p>\r
			<div class="txt">\r
				<p>Москва, <br> ул. Ленинская слобода, 26, стр.11. Loft Hall</p>\r
				<p>Руководитель направления технического сопровождения продаж <br> группы компаний «Гарда»</p>\r
			</div>\r
		</div>\r
\r
		<img class="o-fit-cover bg-img"\r
				 src="./images/cover.webp"\r
				 alt="background-image">\r
	</div>\r
</article>`,p=`<article class="slide layout-center z-up"\r
				 id="slide-2">\r
	<div class="slide-number"></div>\r
\r
	<div class="slide__top-group">\r
		<div class="slide-ttl z-up">\r
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>\r
			<p class="fs-lg txt-gradient">The tool for creating illustrations | 900x600px</p>\r
		</div>\r
		<a href="https://garda.ai/"\r
			 class="brand-logo sm-d-none"\r
			 aria-label="home">\r
			<img src="./images/logos/logo-b.svg"\r
					 alt="brand-logo">\r
		</a>\r
	</div>\r
\r
	<div class="img-box img-maker">\r
		<div class="header">\r
			<img src="./images/logos/logo-w.svg"\r
					 class="logo">\r
			<p class="tag">Новость</p>\r
		</div>\r
\r
		<div class="body">\r
			<div class="group">\r
				<h2 class="ttl">Дайджест</h2>\r
				<div class="sub">\r
					<p>23 августа — 27 сентября</p>\r
					<p>Спецвыпуск</p>\r
				</div>\r
			</div>\r
		</div>\r
\r
		<div class="footer">\r
			<p class="tag">Хакатон</p>\r
			<div class="txt">\r
				<p>«Следы хакера» • 24 октября в 14:00<br> на конференции «Сохранить все»</p>\r
				<!-- <p>Руководитель направления технического сопровождения продаж <br> группы компаний «Гарда»</p> -->\r
			</div>\r
		</div>\r
\r
		<img class="o-fit-cover bg-img"\r
				 src="./images/hackaton.webp"\r
				 alt="background-image">\r
	</div>\r
</article>`,v=`<article class="slide layout-center z-up"\r
				 id="slide-3">\r
	<div class="slide-number"></div>\r
\r
	<div class="slide__top-group">\r
		<div class="slide-ttl z-up">\r
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>\r
			<p class="fs-lg txt-gradient">The tool for creating illustrations | 700x500px</p>\r
		</div>\r
		<a href="https://garda.ai/"\r
			 class="brand-logo sm-d-none"\r
			 aria-label="home">\r
			<img src="./images/logos/logo-b.svg"\r
					 alt="brand-logo">\r
		</a>\r
	</div>\r
\r
	<div class="img-box img-maker">\r
		<div class="header">\r
			<img src="./images/logos/logo-w.svg"\r
					 class="logo">\r
			<p class="tag">Видео</p>\r
		</div>\r
\r
		<div class="body">\r
			<div class="group">\r
				<h2 class="ttl">Бенефициары | выпуск 10</h2>\r
				<div class="sub">\r
					<p>Гость эфира — Сергей Азоркин</p>\r
					<p>Коммерческий директор KAMAZ Digital</p>\r
				</div>\r
			</div>\r
		</div>\r
\r
		<div class="footer">\r
			<p class="tag">5 — 29 августа</p>\r
			<div class="txt">\r
				<p>Мероприятия, новости и аналитика, видео</p>\r
				<p>Руководитель направления технического сопровождения продаж <br> группы компаний «Гарда»</p>\r
			</div>\r
		</div>\r
\r
		<img class="o-fit-cover bg-img"\r
				 src="./images/bene-10.webp"\r
				 alt="background-image">\r
	</div>\r
</article>`,o=document.querySelector(".main-content");o.insertAdjacentHTML("beforeend",g);o.insertAdjacentHTML("beforeend",p);o.insertAdjacentHTML("beforeend",v);const c=document.querySelectorAll(".slide"),m=document.querySelector(".slide-list");c.forEach((e,s)=>{m.insertAdjacentHTML("beforeend",`<li>
			<a href="#slide-${s+1}">
				<span class="sr-only">slide ${s+1}</span>
			</a>
		</li>`)});const a=document.querySelectorAll(".slide-list > *"),d=e=>{const s=e.currentTarget.querySelector(".slide-number");s&&(s.style.top=`${s.getBoundingClientRect().height/-4}px`);const n=document.querySelector(".slide-list > *.active");n&&n.classList.remove("active"),c.forEach((i,t)=>{i===e.currentTarget&&a[t].querySelector("a").click()&a[t].classList.add("active")})};c.forEach(e=>e.addEventListener("mouseenter",d));a.forEach(e=>e.addEventListener("click",d));
