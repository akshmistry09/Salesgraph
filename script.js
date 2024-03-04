// Sample data for the chart
const data = {
  labels: ['January 24', 'February 24', 'March 24', 'April 24', 'May 24', 'June 24', 'July 24', 'Aug 24'],
  datasets: [{
    label: 'Sales',
    backgroundColor: 'blue',
    borderColor: 'blue',
    data: [65, 59, 80, 81, 56, 55, 40, 35],
    fill: false,
  }]
};

// Chart options
const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
const myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
