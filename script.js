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
  document.addEventListener("DOMContentLoaded", function() {
      var follower = document.querySelector('#cursor-pointer');
      var delay = 60;
    
      document.addEventListener('mousemove', function(e) {
        setTimeout(function() {
          var x = e.clientX;
          var y = e.clientY;
          follower.style.left = (x - 20) + 'px';
          follower.style.top = (y - 20) + 'px';
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
  
  $(document).ready(function() {
    $('#navbar').load('home.html header', function(_response, status, xhr) {
      if (status == "error") {
        console.error("Erro ao carregar menu:", xhr.status, xhr.statusText);
      } else {
      }
    });
  });

  function showText (){
    var dots = document.getElementById("dots");
    var more = document.getElementById("moreInfo");
    var btnText = document.getElementById("btn-show");

    if (dots.style.display === "none"){
      dots.style.display ="inline";
      btnText.innerHTML = "Ler mais...";
      more.style.display ="none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Recolher"
      more.style.display = "inline";
    }
  }

  var $window = (window)

  window.scroll(0, localStorage.getItem ('scrollPosition') | 0)

  window.scroll(function(){
    localStorage.setItem('scrollPosition', $window.scrollTo())
  })