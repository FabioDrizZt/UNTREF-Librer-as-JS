// Seleccionamos el contexto del canvas
const ctx = document.getElementById('myChart').getContext('2d')

// Generador aleatorio de datos
const generateRandomData = () => Math.floor(Math.random() * 100)

// Configuración inicial del gráfico
const data = {
  labels: [], // Las etiquetas del eje X (números incrementales o tiempo)
  datasets: [
    {
      label: 'Temperatura (°C)',
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: 'rgb(75, 192, 192)',
      pointBorderColor: '#fff',
      data: [], // Los datos se irán actualizando en tiempo real
    },
  ],
}

// Configuración de opciones del gráfico
const options = {
  responsive: true,
  plugins: {
    tooltip: {
      mode: 'nearest',
      intersect: false,
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}°C`
        },
      },
    },
    legend: {
      display: true,
      labels: {
        color: '#333',
        font: {
          size: 14,
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Tiempo (s)',
        color: '#333',
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Temperatura (°C)',
        color: '#333',
      },
    },
  },
}

// Crear el gráfico
const myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options,
})

// Contador de tiempo
let time = 0

// Máximo número de puntos visibles en el gráfico
const maxDataPoints = 20

// Función para actualizar el gráfico en tiempo real
const updateChart = () => {
  // Añadir nueva etiqueta (el tiempo actual en segundos)
  data.labels.push(time)

  // Añadir nuevo dato aleatorio
  data.datasets[0].data.push(generateRandomData())

  // Limitar el número de puntos en el gráfico
  if (data.labels.length > maxDataPoints) {
    data.labels = data.labels.slice(1) // Cortar la primera etiqueta
    data.datasets[0].data = data.datasets[0].data.slice(1) // Cortar el primer dato
  }

  // Incrementar el contador de tiempo
  time++

  // Actualizar el gráfico
  myChart.update()
}

// Actualizar cada segundo
setInterval(updateChart, 1000)
