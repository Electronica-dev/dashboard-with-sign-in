import Chart from "chart.js/auto";
import Script from "next/script";

import { Lato, Open_Sans } from "next/font/google";

const sans = Open_Sans({ weight: '400', subsets: ['latin'], preload: true })
const lato = Lato({ weight: '400', subsets: ['latin'], predload: true })

export default function LineChart() {
  return (
    <>
      <div className="absolute w-full top-0 bottom-0 left-0 right-0">
        <canvas id="chartLine" style={{width: "100% !important"}}></canvas>
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js"

        onReady={() => {
          const labels = ["Week 1", "Week 2", "Week 3", "Week 4"]

          const data = {
            labels: labels,
            datasets: [
              {
                axis: 'x',
                label: "User",
                backgroundColor: "#9BDD7C",
                borderColor: "#9BDD7C",
                data: [100, 400, 150, 450, 180, 250],
                tension: 0.5,
                pointRadius: 0,
                hoverPointRadius: 0
              },
              {
                axis: 'x',
                label: "Guest",
                backgroundColor: "#E9A0A0",
                borderColor: "#E9A0A0",
                data: [200, 300, 250, 350, 280, 150],
                tension: 0.5,
                pointRadius: 0,
                hoverPointRadius: 0
              },
            ],
          };

          const options = {

            maintainAspectRatio: false,
            scales: {
              x: {
                offset: true,
                grid: {
                  display: false
                },
                border: {
                  display: false
                },
                ticks: {
                  font: {
                    family: lato.style.fontFamily.split(',')[0],
                    size: 14
                  }
                }
              },
              y: {
                beginAtZero: true,
                ticks: {
                  maxTicksLimit: 6,
                  font: {
                    family: sans.style.fontFamily.split(',')[0],
                    size: 14
                  }
                },
                border: {
                  display: false
                }
              }
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            layout: {
              padding: {
                left: 30,
                right: 30
              }
            }
          };

          const configLineChart = {
            type: "line",
            data,
            options,
          };

          let lineChart = new Chart(
            document.getElementById("chartLine"),
            configLineChart
          );
        }}
      />
    </>
  )
}
