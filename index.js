const ctx = document.getElementById('barChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Income',
        data: [400, 300, 500, 450, 480, 520, 430, 470, 410, 490, 510, 530],
      },
      {
        label: 'Expenses',
        data: [300, 250, 400, 350, 420, 450, 380, 410, 360, 430, 440, 460],
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // ✅ FIX
    plugins: {
      legend: {
        labels: {
          color: "#fff"
        }
      }
    },
    scales: {
      x: {
        ticks: { color: "#fff" }
      },
      y: {
        ticks: { color: "#fff" }
      }
    }
  }
});

function updateCircle(percent) {
  const circle = document.querySelector('.circle');
  circle.style.background =
    `conic-gradient(#00d4ff ${percent}%, #ffffff20 0)`;
  document.getElementById('profit').innerText = percent + "%";
}

updateCircle(25);