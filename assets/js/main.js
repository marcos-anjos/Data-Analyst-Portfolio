/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
  } else {
      menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() { headerShadow(); };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  }
}

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
});

sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });
sr.reveal('.project-box', { interval: 200 });
sr.reveal('.top-header', {});

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
});

srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
});

srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
  });
}

window.addEventListener('scroll', scrollActive);

/* ----- FILTER BUTTON ----- */
document.addEventListener("DOMContentLoaded", function() {
  const projectImages = document.querySelectorAll(".project-image");

  projectImages.forEach(image => {
      const src = image.getAttribute("data-src");
      const img = new Image();
      img.src = src;
      img.onload = function() {
          image.style.backgroundImage = `url('${src}')`;
      };
  });

  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(btn => {
      btn.addEventListener("click", function() {
          const filter = this.getAttribute("data-filter");
          filterBtns.forEach(btn => btn.classList.remove("active-filter"));
          this.classList.add("active-filter");

          projectImages.forEach(image => {
              const projectBox = image.parentElement.parentElement;
              if (filter === "all" || projectBox.classList.contains(filter)) {
                  projectBox.style.display = "block";
              } else {
                  projectBox.style.display = "none";
              }
          });
      });
  });
});

/* ----- LANGUAGE TOGGLE SWITCH ----- */
document.addEventListener('DOMContentLoaded', function() {
  const langToggle = document.getElementById('lang-toggle');
  const currentLang = localStorage.getItem('language') || 'en';
  
  setLanguage(currentLang);
  langToggle.checked = currentLang === 'pt';

  langToggle.addEventListener('change', function() {
      const newLang = this.checked ? 'pt' : 'en';
      setLanguage(newLang);
      localStorage.setItem('language', newLang);
  });
});

function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(function(element) {
      element.innerText = element.getAttribute('data-' + lang);
  });
}

function toggleLanguage() {
  var langToggle = document.getElementById('lang-toggle');
  var typedText = document.querySelector('.typedText');
  var language = langToggle.checked ? 'pt' : 'en';

  typedText.setAttribute('data-lang', language);
  initializeTypedEffect(language);
}

function initializeTypedEffect(language) {
  var strings = (language === 'pt') ? ["Analista de Dados", "Analista Estatístico em R", "Desenvolvedor back end"] : ["Data Analyst", "R Statistical Analyst", "Backend Developer"];

  if (typingEffect) {
      typingEffect.destroy();
  }

  typingEffect = new Typed(".typedText", {
      strings: strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
  });
}

var typingEffect = null;
initializeTypedEffect('en'); // Initial language

document.addEventListener("DOMContentLoaded", function() {
  const switchToggle = document.querySelector('.switch');
  const switchInput = switchToggle.querySelector('input[type="checkbox"]');

  function updateLegend() {
      if (switchInput.checked) {
          switchToggle.classList.add('en');
          switchToggle.classList.remove('pt');
      } else {
          switchToggle.classList.add('pt');
          switchToggle.classList.remove('en');
      }
  }

  switchToggle.addEventListener('mouseenter', updateLegend);
  switchInput.addEventListener('change', function() {
      updateLegend();
  });
  switchToggle.addEventListener('mouseleave', updateLegend);

  updateLegend();
});
