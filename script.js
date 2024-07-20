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

$(document).ready(function () {
  $('#navbar').load('home.html header', function (_response, status, xhr) {
    if (status == "error") {
      console.error("Erro ao carregar menu:", xhr.status, xhr.statusText);
    } else {
    }
  });
});

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

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
    if (x < w / zoom) { x = w / zoom; }
    if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
    if (y < h / zoom) { y = h / zoom; }
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

magnify("my-image", 3);

/* Side bar project */

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btns-section button');
  const sections = document.querySelectorAll('main .section');
  
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const targetId = this.getAttribute('data-target');
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
              updateActiveButton(targetId);
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
      sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight) {
              updateActiveButton(section.id);
          }
      });
  }

  // Adiciona um listener de evento de rolagem para verificar a seção visível
  window.addEventListener('scroll', checkVisibleSection);

  // Verifica a seção visível ao carregar a página
  checkVisibleSection();
});