const ctx = document.getElementById('ageChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: ['17 - 20 Anos', '21 - 30 Anos','31 - 40 Anos', '41 Anos mais'],
    datasets: [{
    label: '',
    data: [9, 14, 5, 0],
    backgroundColor: [
      'rgb(255, 204, 0)',
      'rgb(255, 153, 0)',
      'rgb(255, 102, 0)',
      'rgb(204, 51, 153)'
    ],
    hoverOffset: 6
  }]
  },
});

const ctx1 = document.getElementById('workChart');

new Chart(ctx1, {
    type: 'doughnut',
    data: {
    labels: ['Sim', 'Não'],
    datasets: [{
    label: '',
    data: [20, 8],
    backgroundColor: [
      'rgb(7, 244, 158)',
      'rgb(255, 102, 102)'
    ],
    hoverOffset: 6
  }]
  },
});

const ctx2 = document.getElementById('feelingChart');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
    labels: ['Sim', 'Não'],
    datasets: [{
    label: '',
    data: [26, 2],
    backgroundColor: [
      'rgb(7, 244, 158)',
      'rgb(255, 102, 102)'
    ],
    hoverOffset: 6
  }]
  },
});


const ctx3 = document.getElementById('gamingChart');

new Chart(ctx3, {
    type: 'doughnut',
    data: {
    labels: ['League Of Legends', 'Dota 2', 'FreeFire', 'Valorant', 'Fornite', 'Clash Of Clans', 'Tibia ou derivados', 'Outros' ],
    datasets: [{
    label: '',
    data: [26, 11, 11, 15, 13, 6, 7, 6],
    backgroundColor: [
      'rgb(255, 204, 0)',
      'rgb(255, 153, 0)',
      'rgb(255, 102, 0)',
      'rgb(204, 51, 153)',
      'rgb(153, 0, 102)',
      'rgb(51, 153, 204)',
      'rgb(204, 238, 102)',
      'rgb(153, 204, 51)'
    ],
    hoverOffset: 6
  }]
  },
});


const ctx4 = document.getElementById('brandChart');

new Chart(ctx4, {
    type: 'doughnut',
    data: {
    labels: ['Df Games', 'GGMax', 'PlayerAuctions', 'Melhor dos Games', 'Desapego Games', 'G2G', 'Nenhuma'],
    datasets: [{
    label: '',
    data: [8, 13, 6, 4, 3, 7, 7, 3],
    backgroundColor: [
      'rgb(255, 204, 0)',
      'rgb(255, 153, 0)',
      'rgb(255, 102, 0)',
      'rgb(204, 51, 153)',
      'rgb(153, 0, 102)',
      'rgb(51, 153, 204)',
      'rgb(204, 238, 102)'
    ],
    hoverOffset: 6
    
  }]
  },
});

const ctx5 = document.getElementById('sellChart');

new Chart(ctx5, {
    type: 'doughnut',
    data: {
    labels: ['16 a 20', '21 a 30'],
    datasets: [{
    label: '',
    data: [300, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 6
    }]
  },
});

const ctx6 = document.getElementById('dntChart');

new Chart(ctx6, {
    type: 'doughnut',
    data: {
    labels: ['16 a 20', '21 a 30'],
    datasets: [{
    label: 'My First Dataset',
    data: [300, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 6
    }]
  },
});

const ctx7 = document.getElementById('ecommerceChart');

new Chart(ctx7, {
    type: 'doughnut',
    data: {
    labels: ['Amazon', 'Aliexpress', 'Olx', 'Shopee', 'Facebook Marketplace', 'Mercado Livre' ,'Outros'],
    datasets: [{
    label: '',
    data: [23, 18, 16, 13, 6, 12, 3],
    backgroundColor: [
      'rgb(255, 204, 0)',
      'rgb(255, 153, 0)',
      'rgb(255, 102, 0)',
      'rgb(204, 51, 153)',
      'rgb(153, 0, 102)',
      'rgb(51, 153, 204)',
      'rgb(204, 238, 102)',
      'rgb(153, 204, 51)'
    ],
    hoverOffset: 6
    }]
  },
});

const ctx8 = document.getElementById('importantChart');

new Chart(ctx8, {
    type: 'doughnut',
    data: {
    labels: ['Amazon', 'Aliexpress', 'Olx', 'Shopee', 'Facebook Marketplace', 'Mercado Livre' ,'Outros'],
    datasets: [{
    label: '',
    data: [4, 1, 12, 0, 6, 11, 2],
    backgroundColor: [
      'rgb(255, 204, 0)',
      'rgb(255, 153, 0)',
      'rgb(255, 102, 0)',
      'rgb(204, 51, 153)',
      'rgb(153, 0, 102)',
      'rgb(51, 153, 204)',
      'rgb(204, 238, 102)',
      'rgb(153, 204, 51)'
    ],
    hoverOffset: 6
    }]
  },
});
