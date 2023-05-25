export const daliyHomeworks = [1, 3, 0, 1, 1, 0, 1, 1, 1];

const data = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9"],
  datasets: [
    {
      label: "Homeworks per Day",
      backgroundColor: "hsl(259, 61%, 87%)",
      borderColor: "hsl(259, 61%, 87%)",
      data: daliyHomeworks,
      fill: false
    },
  ],
};

const configLineChart = {
  type: "line",
  data: data,
  options: {
    responsive: true, // Allow chart to be responsive
    maintainAspectRatio: true, // Allow aspect ratio to adjust
    legend: {
      display: true,
      labels: {
        fontColor: 'white',
        fontSize: 14
      }
    },
    scales: {
      x: {
        grid: {
          display: true
        },
        ticks: {
          fontColor: 'black',
          fontSize: 12,
          maxTicksLimit: 8
        }
      },
      y: {
        grid: {
          display: true
        },
        ticks: {
          fontColor: 'black',
          fontSize: 12,
          beginAtZero: true
        }
      }
    },
    tooltips: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      }
    }
  },
};

var chartLine = new Chart(
  document.getElementById("hwchart"),
  configLineChart
);
