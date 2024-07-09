const ctx = document.getElementById('ageChart');

new Chart(ctx, {
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
    hoverOffset: 4
  }]
  },
  
});