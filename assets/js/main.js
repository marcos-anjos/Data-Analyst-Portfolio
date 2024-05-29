/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

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
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

/* ----- FILTER BUTTON ----- */
document.addEventListener("DOMContentLoaded", function () {
  const projectImages = document.querySelectorAll(".project-image");

  // Carregamento assíncrono de imagens
  projectImages.forEach(image => {
      const src = image.getAttribute("data-src");
      const img = new Image();
      img.src = src;
      img.onload = function () {
          image.style.backgroundImage = `url('${src}')`;
      };
  });

  // Lógica de filtragem dinâmica
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(btn => {
      btn.addEventListener("click", function () {
          const filter = this.getAttribute("data-filter");
          filterBtns.forEach(btn => {
              btn.classList.remove("active-filter");
          });
          this.classList.add("active-filter");

          projectImages.forEach(image => {
              const projectBox = image.parentElement.parentElement;
              if (filter === "all") {
                  projectBox.style.display = "block";
              } else {
                  if (projectBox.classList.contains(filter)) {
                      projectBox.style.display = "block";
                  } else {
                      projectBox.style.display = "none";
                  }
              }
          });
      });
  });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const projectBoxes = document.querySelectorAll('.project-box');

filterBtns.forEach(btn => {
btn.addEventListener('click', () => {
  const filter = btn.dataset.filter;

  projectBoxes.forEach(box => {
      box.style.display = 'none';
      if (box.classList.contains(filter)) {
          box.style.display = 'block';
      }
  });
});
});

document.addEventListener("DOMContentLoaded", function () {
  const projectImages = document.querySelectorAll(".project-image");
  const projectBoxes = document.querySelectorAll('.project-box');

  // Carregamento assíncrono de imagens
  projectImages.forEach(image => {
      const src = image.getAttribute("data-src");
      const img = new Image();
      img.src = src;
      img.onload = function () {
          image.style.backgroundImage = `url('${src}')`;
      };
  });

  // Lógica de filtragem dinâmica
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(btn => {
      btn.addEventListener("click", function () {
          const filter = this.getAttribute("data-filter");
          filterBtns.forEach(btn => {
              btn.classList.remove("active-filter");
          });
          this.classList.add("active-filter");

          projectBoxes.forEach(box => {
              const projectThemes = box.classList;
              if (filter === "all" || projectThemes.contains(filter)) {
                  box.style.display = 'block';
              } else {
                  box.style.display = 'none';
              }
          });
      });
  });
});
// TOGGLE SWITCH
document.addEventListener('DOMContentLoaded', function() {
  const langToggle = document.getElementById('lang-toggle');
  const currentLang = localStorage.getItem('language') || 'en';
  
  // Set the initial language based on local storage
  setLanguage(currentLang);

  // Set the toggle position based on current language
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
// Função para alternar entre os idiomas
function toggleLanguage() {
  var langToggle = document.getElementById('lang-toggle');
  var typedText = document.querySelector('.typedText');
  
  // Verifica o estado do toggle
  var language = langToggle.checked ? 'pt' : 'en';

  // Atualiza o idioma do texto digitado
  typedText.setAttribute('data-lang', language);

  // Reinicializa o efeito de digitação com o novo idioma
  initializeTypedEffect(language);
}

// Função para reinicializar o efeito de digitação
function initializeTypedEffect(language) {
  // Define as strings com base no idioma selecionado
  var strings = [];
  if (language === 'pt') {
    strings = ["Analista de Dados", "Analista Estatístico em R", "Desenvolvedor back end"];
  } else {
    strings = ["Data Analyst", "R Statistical Analyst", "Backend Developer"];
  }

  // Destroi a instância atual do Typed.js e inicia uma nova
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

// Inicializa o efeito de digitação pela primeira vez
var typingEffect = null;
initializeTypedEffect('en'); // Inicia com o idioma padrão (Inglês)


// Troca de Idioma com Switch em JavaScript

document.addEventListener("DOMContentLoaded", function() {
  const switchToggle = document.querySelector('.switch');
  const switchInput = switchToggle.querySelector('input[type="checkbox"]');
  const switchLabel = switchToggle.querySelector('.slider');

  function updateLegend() {
      if (switchInput.checked) {
          switchToggle.classList.add('en'); // Adiciona a classe 'en' ao switch
          switchToggle.classList.remove('pt'); // Remove a classe 'pt' do switch
      } else {
          switchToggle.classList.add('pt'); // Adiciona a classe 'pt' ao switch
          switchToggle.classList.remove('en'); // Remove a classe 'en' do switch
      }
  }

  switchToggle.addEventListener('mouseenter', updateLegend);
  switchInput.addEventListener('change', function() {
      updateLegend();
      // Coloque aqui qualquer outra ação que você queira realizar quando o switch é alterado
  });
  switchToggle.addEventListener('mouseleave', updateLegend);

  // Chama a função updateLegend ao carregar a página para inicializar a legenda corretamente
  updateLegend();
});



