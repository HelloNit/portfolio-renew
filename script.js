$(document).ready(function () {
  $('#navbar').load('index.html header', function (_response, status, xhr){
      if (status == "error") {
          console.error("Erro ao carregar menu:", xhr.status, xhr.statusText);
      } else {
          console.log("Navbar funcionando.");
      }
  });

  $('#footer').load('index.html footer', function (_response, status, xhr){
      if (status == "error") {
          console.error("Erro ao carregar footer:", xhr.status, xhr.statusText);
      } else {
          console.log("Footer funcionando.");
      }
  });
});

function myFuncion() {
  const contentMenu = document.querySelector('.content-menu');
  const button = document.getElementById('button-open-menu');
  contentMenu.classList.toggle('active');
  if (contentMenu.classList.contains('active')) {
    button.textContent = 'Fechar';
  } else {
    button.textContent = 'Menu';
  }
}

document.addEventListener('click', (event) => {
  const navbar = document.getElementById('navbar');
  const button = document.getElementById('button-open-menu');
  if (!navbar.contains(event.target)) {
    const contentMenu = document.querySelector('.content-menu');
    contentMenu.classList.remove('active');
    button.textContent = 'Menu';
  }
});


//Tema Branco e Escuro
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.body.className = currentTheme;

  const themeToggleButton = document.getElementById('theme-toggle');
  themeToggleButton.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  });
});

const changeTheme = (theme) => {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

//Cursor mouse estilizado
document.addEventListener("DOMContentLoaded", function () {
  var follower = document.querySelector('#cursor-pointer');
  var delay = 100;

  document.addEventListener('mousemove', function (e) {
    setTimeout(function () {
      var x = e.clientX;
      var y = e.clientY;
      follower.style.left = (x - 20) + 'px';
      follower.style.top = (y - 20) + 'px';
    }, delay);
  });
});

//Rotação do card e seguir mouse
const cards = document.querySelectorAll('.card');

function rotateToMouse(e, card) {
  const bounds = card.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.left;
  const topY = mouseY - bounds.top;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  };

  const rotateX = (center.y / bounds.height) * 30; // Adjust the multiplier for desired effect
  const rotateY = -(center.x / bounds.width) * 30; // Adjust the multiplier for desired effect

  card.style.transition = 'transform 0.1s ease-out'; // Smooth transition
  card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;
}

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => rotateToMouse(e, card));
  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease-out'; // Smooth transition back to original state
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});
//Barra lateral
var $window = (window)

window.scroll(0, localStorage.getItem('scrollPosition') | 0)

window.scroll(function () {
  localStorage.setItem('scrollPosition', $window.scrollTo())
})

window.onscroll = function () { theFuncion() };

function theFuncion() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%"
}
/* Barra lateral */

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btns-section button');
  const sections = document.querySelectorAll('main .section');
  const sideBar = document.querySelector('.side-bar-section');
  const nextProjectSection = document.querySelector('.next-project');
  let scrolling = false;

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        scrolling = true;
        targetElement.scrollIntoView({ behavior: 'smooth' });
        updateActiveButton(targetId);
        setTimeout(() => scrolling = false, 1000); // Desativa a rolagem suave
      }
    });
  });

  // Função para atualizar a classe ativa
  function updateActiveButton(activeId) {
    buttons.forEach(button => {
      if (button.getAttribute('data-target') === activeId) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  // Função para verificar a seção visível e atualizar a classe ativa
  function checkVisibleSection() {
    if (!scrolling) {
      let activeId = '';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          activeId = section.id;
        }
      });
      if (activeId) {
        updateActiveButton(activeId);
      }

      // Verifica a visibilidade da seção next-project e ajusta a visibilidade da barra lateral
      const nextProjectRect = nextProjectSection.getBoundingClientRect();
      if (nextProjectRect.top < window.innerHeight / 2 && nextProjectRect.bottom > 0) {
        sideBar.classList.add('side-bar-hidden');
      } else {
        sideBar.classList.remove('side-bar-hidden');
      }
    }
  }

  // Adiciona um listener de evento de rolagem para verificar a seção visível
  window.addEventListener('scroll', checkVisibleSection);

  // Verifica a seção visível ao carregar a página
  checkVisibleSection();
});

const timelines = document.querySelectorAll(".timeline__right");

const trackers = document.querySelectorAll(".timeline__tracker");

window.addEventListener(
  "scroll",
  (e) => {
    timelines.forEach((timeline, i) => {
      //  Animate on scroll
      if (trackers[i].offsetTop > 0) {
        timeline
          .querySelector(".timeline__content")
          .classList.add("animate-on-scroll");
      } else {
        timeline
          .querySelector(".timeline__content")
          .classList.remove("animate-on-scroll");
      }

      // Timeline progress
      timeline.style.background = `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${
        trackers[i].offsetTop + 5
      }px, var(--color-grey) ${
        trackers[i].offsetTop + 5
      }px, var(--color-grey) 10%)`;
    });
  },
  { passive: true }
);

function ajustarTimeline() {
  const larguraMobile = window.matchMedia("(max-width: 490px)");
  const secoesTimeline = document.querySelectorAll(".timeline__section");

  secoesTimeline.forEach((secao) => {
    const content = secao.querySelector(".timeline__content");
    const date = secao.querySelector(".timeline__date");
    const parent = content?.parentElement;

    if (larguraMobile.matches) {
      if (content && date && parent.firstChild !== date) {
        parent.insertBefore(date, content);
      }
    } else {
      const timelineLeft = secao.querySelector(".timeline__left");
      if (timelineLeft && date && timelineLeft.firstChild !== date) {
        timelineLeft.appendChild(date);
      }
    }
  });
}

ajustarTimeline();

window.addEventListener("resize", ajustarTimeline);
