(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(s){if(s.ep)return;s.ep=!0;const a=l(s);fetch(s.href,a)}})();const p=`<article class="slide layout-center z-up"
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
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Новость</p>
			<p class="txt">9 декабря • Москва, <br>отель «Холидей Инн Сокольники»</p>
		</div>

		<div class="body">
			<div class="group">
				<h2 class="ttl">«Гарда» <br>автоматизирует <br>анализ киберугроз</h2>
				<div class="sub">
					<p>Расширенные возможности <br>детектирования неизвестных угроз</p>
					<p>Lorem ipsum «Гарда»</p>
				</div>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Lorem ipsum «Гарда»</p>
			<div class="txt">
				<p>9 декабря • Москва, ул. Русаковская, 24, <br>отель «Холидей Инн Сокольники»</p>
				<p>Lorem ipsum «Гарда»</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,m=`<article class="slide layout-center z-up"
				 id="slide-2">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Новость</p>
		</div>

		<div class="body">
			<div class="group">
				<h2 class="ttl">Эксперты, <br>фиды, сервисы</h2>
				<div class="sub">
					<p>Все, о чем вы думали, <br>но боялись спросить</p>
					<p>Спецвыпуск</p>
				</div>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Видео</p>
			<div class="txt">
				<p>Вебинар группы компаний «Гарда» <br>3 декабря 2024</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit «Гарда»</p>
			</div>
		</div>

		<img class="o-fit-cover"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,v=`<article class="slide layout-center z-up"
				 id="slide-3">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations | 700x500px</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Прямой эфир</p>
		</div>

		<div class="body">
			<div class="group">
				<h2 class="ttl">Lorem ipsum</h2>
				<div class="sub">
					<p>Гость эфира — Рустэм Хайретдинов,</p>
					<p>заместитель генерального директора группы компаний «Гарда»</p>
				</div>
			</div>
		</div>

		<div class="footer">
			<p class="tag">5 — 29 августа</p>
			<div class="txt">
				<p>Мероприятия, новости и аналитика, видео</p>
				<p>Руководитель направления технического сопровождения продаж <br> группы компаний «Гарда»</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,b=`<article class="slide layout-center z-up"
				 id="slide-4">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Вебинар</p>
			<p class="txt ">10 декабря в 11:00</p>
		</div>

		<div class="body">
			<div class="group">
				<h2 class="ttl">Раннее <br>обнаружение атак <br>в корпоративной сети</h2>
				<div class="sub">
					<p>Cтатистика, уязвимости, <br>регуляторика</p>
					<p>Lorem ipsum dolor sit amet</p>
				</div>
			</div>
		</div>

		<div class="footer">
			<p class="tag">19 ноября</p>
			<div class="txt">
				<p class="fw-bd">19 ноября в 11:00</p>
				<p>Руководитель направления технического сопровождения продаж <br> группы компаний «Гарда»</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,u=`<article class="slide layout-center z-up"
				 id="slide-5">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Статья</p>
			<p class="txt">Артемий Новожилов, <br>архитектор систем информационной <br>безопасности группы компаний «Гарда»
			</p>
		</div>

		<div class="body">
			<div class="group">
				<h2 class="ttl">Проблемы и возможности <br>«облачной сигнализации» <br>в эшелонированной <br>защите от DDoS-атак
				</h2>
				<div class="sub">
					<p>Как эффективно <br>маскировать <br>данные</p>
					<p>Lorem ipsum «Гарда»</p>
				</div>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Статья</p>
			<div class="txt">
				<p>Артемий Новожилов</p>
				<p>Архитектор систем информационной <br>безопасности группы компаний «Гарда»</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,f=`<article class="slide layout-center z-up"
				 id="slide-6">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Новость</p>
		</div>

		<div class="body">
			<div class="group">
				<h2 class="ttl">Раннее <br>обнаружение атак <br>в корпоративной сети</h2>
				<div class="sub">
					<p>Все, о чем вы думали, <br>но боялись спросить</p>
					<p>Спецвыпуск</p>
				</div>
			</div>
		</div>

		<div class="footer fw-bd">
			<p class="tag">Вебинар</p>
			<div class="txt">
				<p>10 декабря 2024</p>
				<p>Руководитель направления технического сопровождения продаж <br> группы компаний «Гарда»</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,h=`<article class="slide layout-center z-up"
				 id="slide-7">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag fw-rg">Сохранить все</p>
			<p class="txt fw-bd">Партнеры</p>
		</div>

		<div class="body">
			<div class="group">
				<h2 class="ttl">Чем NDR <br>лучше NTA?</h2>
				<div class="sub">
					<p>Удобно или опасно?</p>
					<p>Lorem ipsum dolor sit amet</p>
				</div>
			</div>
		</div>

		<div class="footer">
			<p class="tag">18–19 сентября</p>
			<div class="txt">
				<p>Москва, <br> ул. Ленинская слобода, 26, стр.11. Loft Hall</p>
				<p>Руководитель направления технического сопровождения продаж <br> группы компаний «Гарда»</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,w=`<article class="slide layout-center z-up"
				 id="slide-8">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Вебинар</p>
			<p class="txt ">18 декабря в 11:00</p>
		</div>

		<div class="body">
			<div class="group">
				<h2 class="ttl">Кибербезопасность КИИ <br>на промышленных <br>предприятиях</h2>
				<div class="sub">
					<p>Cтатистика, уязвимости, <br>регуляторика</p>
					<p>Lorem ipsum «Гарда»</p>
				</div>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Вебинар</p>
			<div class="txt">
				<p class="fw-bd">18 декабря в 11:00</p>
				<p>Lorem ipsum «Гарда»</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,x=`<article class="slide layout-center z-up"
				 id="slide-9">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Lorem ipsum dolor sit Гарда»</p>
		</div>

		<div class="body">
			<div class="group">
				<img src="./images/logos/logo-x-w-ndr.svg"
						 class="logo">
				<h2 class="ttl">Файлы <br>(расширения)</h2>
				<div class="sub">
					<p>Виджет</p>
					<p>Lorem ipsum dolor sit Гарда»</p>
				</div>
			</div>
		</div>

		<div class="footer fw-bd">
			<p class="tag">Дашборд</p>
			<div class="txt">
				<p>Файлы</p>
				<p>Lorem ipsum dolor sit Гарда»</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,L=`<article class="slide layout-center z-up"
				 id="slide-10">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Новость</p>
		</div>

		<div class="body">
			<div class="group">
				<h2 class="ttl">Улучшения <br>в версии 4.0</h2>
				<div class="sub">
					<p></p>
					<p>Lorem ipsum dolor sit</p>
				</div>
			</div>
		</div>

		<div class="footer fw-bd">
			<p class="tag">Гарда NDR</p>
			<div class="txt fw-rg">
				<p>Lorem ipsum dolor sit</p>
				<p>Lorem ipsum dolor sit</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,y=`<article class="slide layout-center z-up"
				 id="slide-11">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Lorem ipsum dolor sit Гарда»</p>
		</div>

		<div class="body">
			<div class="group">
				<img src="./images/logos/logo-x-w-ndr.svg"
						 class="logo">
				<h2 class="ttl">События</h2>
				<div class="sub">
					<p>Улучшения</p>
					<p>Lorem ipsum dolor sit Гарда»</p>
				</div>
			</div>
		</div>

		<div class="footer fw-bd">
			<p class="tag">Версия 4.0</p>
			<div class="txt">
				<p>Сканирования</p>
				<p>Lorem ipsum dolor sit Гарда»</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,k=`<article class="slide layout-center z-up"
				 id="slide-12">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Новость</p>
		</div>

		<div class="body">
			<div class="group">
				<h2 class="ttl fw-rg">Эволюция <br>сетевых технологий</h2>
				<!-- <h2 class="ttl">Дашборд <br>«Сканирования»</h2> -->
				<div class="sub fw-eb">
					<p>Что такое NDR</p>
					<p>Lorem ipsum dolor sit</p>
				</div>
			</div>
		</div>

		<div class="footer fw-bd">
			<p class="tag">Гарда NDR</p>
			<div class="txt fw-rg">
				<p>Lorem ipsum dolor sit</p>
				<p>Lorem ipsum dolor sit</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,_=`<article class="slide layout-center z-up"
				 id="slide-13">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Новость</p>
		</div>

		<div class="body">
			<div class="group">
				<h2 class="ttl">Дайджест</h2>
				<div class="sub">
					<p>1 — 30 ноября</p>
					<p>Спецвыпуск</p>
				</div>
			</div>
		</div>

		<div class="footer">
			<p class="tag">Вебинар</p>
			<div class="txt">
				<p>Эксперты, фиды, сервисы: все, о чем вы думали, но боялись спросить «Гарда» • 3 декабря в 13:00</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit «Гарда»</p>
			</div>
		</div>

		<img class="o-fit-cover"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,T=`<article class="slide layout-center z-up"
				 id="slide-14">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<div class="header">
			<img src="./images/logos/logo-w.svg"
					 class="logo">
			<p class="tag">Lorem ipsum dolor sit</p>
		</div>

		<div class="body">
			<div class="group">
				<img src="./images/logos/logo-y-w-ti.svg"
						 class="logo">
				<h2 class="ttl">Вебинары</h2>
				<div class="sub">
					<p>Lorem ipsum dolor sit</p>
					<p>Lorem ipsum dolor sit</p>
				</div>
			</div>
		</div>

		<div class="footer fw-bd">
			<p class="tag">Lorem ipsum dolor sit</p>
			<div class="txt fw-rg">
				<p>Lorem ipsum dolor sit</p>
				<p>Lorem ipsum dolor sit</p>
			</div>
		</div>

		<img class="o-fit-cover bg-img"
				 src="./images/1.webp"
				 alt="background-image">
	</div>
</article>`,z=`<article class="slide layout-center z-up"
				 id="slide-15">
	<div class="slide-number"></div>

	<div class="slide__top-group">
		<div class="slide-ttl z-up">
			<h1 class="fs-2xl fw-eb">Social media image maker</h1>
			<p class="fs-lg txt-gradient">The tool for creating illustrations</p>
		</div>
		<a href="https://garda.ai/"
			 class="brand-logo sm-d-none"
			 aria-label="home">
			<img src="./images/logos/logo-b.svg"
					 alt="brand-logo">
		</a>
	</div>

	<div class="img-box img-maker">
		<!-- <iframe src="https://vkvideo.ru/video_ext.php?oid=-162763950&id=456239081&hash=af5e9b1ef8dc009d"
						width="640"
						height="360"
						frameborder="0"
						allowfullscreen="1"
						allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe> -->
	</div>
</article>`,i=document.querySelector(".main-content");i.insertAdjacentHTML("beforeend",p);i.insertAdjacentHTML("beforeend",m);i.insertAdjacentHTML("beforeend",v);i.insertAdjacentHTML("beforeend",b);i.insertAdjacentHTML("beforeend",u);i.insertAdjacentHTML("beforeend",f);i.insertAdjacentHTML("beforeend",h);i.insertAdjacentHTML("beforeend",w);i.insertAdjacentHTML("beforeend",x);i.insertAdjacentHTML("beforeend",L);i.insertAdjacentHTML("beforeend",y);i.insertAdjacentHTML("beforeend",k);i.insertAdjacentHTML("beforeend",_);i.insertAdjacentHTML("beforeend",T);i.insertAdjacentHTML("beforeend",z);const r=document.querySelectorAll(".slide"),A=document.querySelector(".slide-list");r.forEach((t,n)=>{A.insertAdjacentHTML("beforeend",`<li>
			<a href="#slide-${n+1}">
				<span class="sr-only">slide ${n+1}</span>
			</a>
		</li>`)});const d=document.querySelectorAll(".slide-list > *"),g=t=>{const n=t.currentTarget.querySelector(".slide-number");n&&(n.style.top=`${n.getBoundingClientRect().height/-4}px`);const l=document.querySelector(".slide-list > *.active");l&&l.classList.remove("active"),r.forEach((e,s)=>{e===t.currentTarget&&d[s].querySelector("a").click()&d[s].classList.add("active")})};r.forEach(t=>t.addEventListener("mouseenter",g));d.forEach(t=>t.addEventListener("click",g));const S=(t,n="white")=>{let l="";return n!=="black"?l=t.replace("-w.","-b."):l=t.replace("-b.","-w."),l},H=t=>{document.querySelectorAll(".brand-logo img").forEach(n=>n.setAttribute("src",S(n.src,t)))},M=()=>document.documentElement.getAttribute("data-theme"),c=t=>{document.documentElement.setAttribute("data-theme",t),H(t)},j=t=>c(t!=="black"?"black":"white");document.querySelectorAll(".toggle").forEach(t=>t.addEventListener("click",()=>j(M())));
