function myFuncion() {
  const contentMenu = document.querySelector('.content-menu');
  contentMenu.classList.toggle('active');
}

document.addEventListener('click', (event) => {
  const navbar = document.getElementById('navbar');
  if (!navbar.contains(event.target)) {
    const contentMenu = document.querySelector('.content-menu');
    contentMenu.classList.remove('active');
  }
});

//Audio
document.addEventListener('DOMContentLoaded', (event) => {
  const audio = document.getElementById('myAudio');
  const pausePlayBtn = document.getElementById('pause-play');
  const volumeSlider = document.getElementById('volumeSlider');

  // Carregar estado do áudio do Local Storage
  const savedVolume = localStorage.getItem('audioVolume');
  const savedCurrentTime = localStorage.getItem('audioCurrentTime');
  const isPlaying = localStorage.getItem('audioPlaying') === 'true';

  if (savedVolume !== null) {
      audio.volume = savedVolume; // Define o volume do áudio
      volumeSlider.value = savedVolume; // Atualiza o slider para mostrar o volume salvo
  } else {
      audio.volume = 0.2; // Volume padrão
  }

  if (savedCurrentTime !== null) {
      audio.currentTime = savedCurrentTime; // Define a posição atual do áudio
  }

  if (isPlaying) {
      audio.play();
      pausePlayBtn.classList.add('play'); // Adiciona a classe 'play' para mostrar o ícone de pause
  } else {
      audio.pause();
      pausePlayBtn.classList.remove('play'); // Remove a classe 'play' para mostrar o ícone de play
  }

  pausePlayBtn.addEventListener('click', () => {
      if (audio.paused) {
          audio.play();
          pausePlayBtn.classList.add('play'); // Mostra o ícone de pause
          localStorage.setItem('audioPlaying', 'true'); // Salva o estado como tocando
      } else {
          audio.pause();
          pausePlayBtn.classList.remove('play'); // Mostra o ícone de play
          localStorage.setItem('audioPlaying', 'false'); // Salva o estado como pausado
      }
  });

  volumeSlider.addEventListener('input', () => {
      audio.volume = volumeSlider.value; // Define o volume do áudio
      localStorage.setItem('audioVolume', volumeSlider.value); // Salva o volume no Local Storage
  });

  // Salva a posição atual do áudio no Local Storage sempre que mudar
  audio.addEventListener('timeupdate', () => {
      localStorage.setItem('audioCurrentTime', audio.currentTime); // Salva o tempo atual do áudio
  });
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
  var delay = 110;

  document.addEventListener('mousemove', function (e) {
    setTimeout(function () {
      var x = e.clientX;
      var y = e.clientY;
      follower.style.left = (x - 10) + 'px';
      follower.style.top = (y - 10) + 'px';
    }, delay);
  });
});

//Rotação do card e seguir mouse
const cards = document.querySelectorAll('.card');

function rotateToMouse(e, card, bounds) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.left;
  const topY = mouseY - bounds.top;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  card.style.transform = `
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100}, 0,
        ${Math.log(distance) * 3}deg
      )
    `;
}

function onMouseMove(e) {
  cards.forEach(card => {
    const bounds = card.getBoundingClientRect();
    rotateToMouse(e, card, bounds);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', onMouseMove);
});

//Jquery

$(document).ready(function () {
  $('#navbar').load('home.html header', function (_response, status, xhr) {
      if (status == "error") {
          console.error("Erro ao carregar menu:", xhr.status, xhr.statusText);
      } else {
          console.log("Navbar funcionando.");
      }
  });

  $('#footer').load('home.html footer', function (_response, status, xhr) {
      if (status == "error") {
          console.error("Erro ao carregar footer:", xhr.status, xhr.statusText);
      } else {
          console.log("Footer funcionando.");
      }
  });
});

//Esconder e mostrar mais
function showText() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("moreInfo");
  var btnText = document.getElementById("btn-show");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler mais...";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Recolher"
    more.style.display = "inline";
    drawCharts();
  }
}

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

//Zoom
function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);


  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");


  img.parentElement.insertBefore(glass, img);


  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;


  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
    if (x < w / zoom) { x = w / zoom; }
    if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
    if (y < h / zoom) { y = h / zoom; }
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

magnify("my-image", 3);

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