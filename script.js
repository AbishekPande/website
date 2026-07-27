/*====================================================
    WANDERVERSE
    SCRIPT.JS
    PART 1
====================================================*/


/*====================================================
LOADER
====================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*====================================================
THEME TOGGLE
====================================================*/

const themeButton = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("wanderverse-theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeButton) {

        themeButton.innerHTML = "☀";

    }

}

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("wanderverse-theme", "light");

            themeButton.innerHTML = "☀";

        } else {

            localStorage.setItem("wanderverse-theme", "dark");

            themeButton.innerHTML = "☾";

        }

    });

}


/*====================================================
HEADER ON SCROLL
====================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/*====================================================
SMOOTH SCROLL
====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/*====================================================
SCROLL REVEAL
====================================================*/

const fadeElements = document.querySelectorAll(

    "section h2, section p, .quote-card, .explore-card, .gallery-item, .story-card"

);

fadeElements.forEach(el => {

    el.classList.add("fade-up");

});

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

fadeElements.forEach(el => {

    revealObserver.observe(el);

});


/*====================================================
ACTIVE NAVIGATION
====================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*====================================================
PARALLAX HERO
====================================================*/

const hero = document.getElementById("hero");

window.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x = (window.innerWidth / 2 - e.clientX) / 50;

    const y = (window.innerHeight / 2 - e.clientY) / 50;

    hero.style.backgroundPosition = `${x}px ${y}px`;

});


/*====================================================
BUTTON RIPPLE
====================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top = `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const existing = this.querySelector(".ripple");

        if (existing) {

            existing.remove();

        }

        this.appendChild(circle);

    });

});


/*====================================================
NEWSLETTER DEMO
====================================================*/

const newsletterForm = document.querySelector("#newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const input = newsletterForm.querySelector("input");

        if (!input.value.trim()) {

            alert("Please enter your email.");

            return;

        }

        alert("Thank you for joining WANDERVERSE!");

        input.value = "";

    });

}

/*====================================================
    WANDERVERSE
    SCRIPT.JS
    PART 2 (FINAL)
====================================================*/


/*====================================================
RANDOM DAILY QUOTES
====================================================*/

const quotes = [

    "The universe rewards those who remain curious.",

    "Slow down. Life isn't running away from you.",

    "Wonder begins where certainty ends.",

    "Every sunrise is another invitation to begin again.",

    "Look up. The sky has always been enough.",

    "Travel not to escape life, but to experience more of it.",

    "The smallest moments often become the greatest memories."

];

const featuredQuote = document.querySelector("#featured-quote blockquote");

if (featuredQuote) {

    const random = Math.floor(Math.random() * quotes.length);

    featuredQuote.textContent = quotes[random];

}


/*====================================================
FLOATING STARS
====================================================*/

const starsContainer = document.querySelector(".stars");

if (starsContainer) {

    for (let i = 0; i < 80; i++) {

        const star = document.createElement("span");

        star.style.position = "absolute";

        star.style.width = `${Math.random() * 3 + 1}px`;

        star.style.height = star.style.width;

        star.style.borderRadius = "50%";

        star.style.background = "white";

        star.style.left = `${Math.random() * 100}%`;

        star.style.top = `${Math.random() * 100}%`;

        star.style.opacity = Math.random();

        star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite`;

        starsContainer.appendChild(star);

    }

}


/*====================================================
TYPEWRITER EFFECT
====================================================*/

const heroTitle = document.querySelector("#hero h1");

if (heroTitle) {

    const originalText = heroTitle.innerHTML;

    heroTitle.innerHTML = "";

    let index = 0;

    function typeWriter() {

        if (index < originalText.length) {

            heroTitle.innerHTML += originalText.charAt(index);

            index++;

            setTimeout(typeWriter, 35);

        }

    }

    setTimeout(typeWriter, 700);

}


/*====================================================
SCROLL PROGRESS BAR
====================================================*/

const progress = document.createElement("div");

progress.id = "scrollProgress";

progress.style.position = "fixed";

progress.style.left = "0";

progress.style.top = "0";

progress.style.height = "3px";

progress.style.width = "0";

progress.style.zIndex = "99999";

progress.style.background =
"linear-gradient(90deg,#7dd3fc,#8b5cf6)";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const current =
        (window.scrollY / total) * 100;

    progress.style.width = current + "%";

});


/*====================================================
BACK TO TOP
====================================================*/

const backTop = document.createElement("button");

backTop.innerHTML = "↑";

backTop.style.position = "fixed";

backTop.style.right = "30px";

backTop.style.bottom = "30px";

backTop.style.width = "50px";

backTop.style.height = "50px";

backTop.style.borderRadius = "50%";

backTop.style.border = "none";

backTop.style.cursor = "pointer";

backTop.style.display = "none";

backTop.style.zIndex = "999";

backTop.style.background =
"linear-gradient(135deg,#7dd3fc,#8b5cf6)";

backTop.style.color = "white";

backTop.style.fontSize = "20px";

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.style.display = "block";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*====================================================
SUBTLE CARD TILT
====================================================*/

document.querySelectorAll(

    ".quote-card,.explore-card,.story-card"

).forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 10;

        const rotateX = (0.5 - y / rect.height) * 10;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/*====================================================
YEAR
====================================================*/

const yearElement = document.querySelector("footer small");

if (yearElement) {

    yearElement.innerHTML =
        `© ${new Date().getFullYear()} WANDERVERSE. Crafted with curiosity.`;

}


/*====================================================
CONSOLE MESSAGE
====================================================*/

console.log(

"%cWelcome to WANDERVERSE",

"color:#7dd3fc;font-size:22px;font-weight:bold;"

);

console.log(

"Explore. Wonder. Live."

);


/*====================================================
TWINKLE ANIMATION
====================================================*/

const style = document.createElement("style");

style.innerHTML = `

@keyframes twinkle{

0%{opacity:.2;}

50%{opacity:1;}

100%{opacity:.2;}

}

.ripple{

position:absolute;

border-radius:50%;

transform:scale(0);

animation:ripple .6s linear;

background:rgba(255,255,255,.45);

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

.btn{

position:relative;

overflow:hidden;

}

`;

document.head.appendChild(style);


/*====================================================
INITIALIZE
====================================================*/

document.documentElement.style.scrollBehavior = "smooth";
