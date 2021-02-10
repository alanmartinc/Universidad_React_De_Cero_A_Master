import React, { Component } from 'react'
import Chart from 'chart.js'

// Integrar librerías de terceros usando las Refs de React
class Graficas extends Component {
  // Creo la Refs
  grafica = React.createRef()

  // Se ejecuta cuando se crea el marcado inicial
  componentDidMount() {
    const ctx = this.grafica.current.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  })
  }

  render() {
    return(
      <div>
        <canvas ref={this.grafica} width="400" height="400"></canvas>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <Graficas/>
      </div>
    )
  }
}

export default App