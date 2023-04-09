import Chart from "chart.js/auto";
import Script from "next/script";

export default function PieChart() {
  return (
    <>
      <div className="absolute w-full top-0 bottom-0 left-0 right-0">
        <canvas id="chartPie" style={{width: "100% !important"}}></canvas>
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/chart.js"

        onReady={() => {
          const labels = [
            'Super Hoodies',
            'Custom Short Pants',
            'Basic Tees',
          ]

          const data = {
            labels: labels,
            datasets: [{
              // label: 'My First Dataset',
              data: [14, 31, 55],
              backgroundColor: [
                '#EE8484',
                '#F6DC7D',
                '#98D89E'
              ],
              hoverOffset: 4
            }]
          };

          const options = {
            maintainAspectRatio: false,
            borderWidth: 0,
            plugins: {
              legend: {
                display: false,
              },
            },
            // layout: {
            //   padding: {
            //     bottom: 75,
            //     left: 30,
            //     right: 30
            //   }
            // }
          };

          const configPieChart = {
            type: 'pie',
            data: data,
            options
          };

          let pieChart = new Chart(
            document.getElementById("chartPie"),
            configPieChart
          );

          pieChart.canvas.parentNode.style.height = '90%';
          // pieChart.canvas.parentNode.style.width = '50%';
          // pieChart.canvas.parentNode.style.paddingLeft = '3rem';
          // pieChart.canvas.parentNode.style.paddingTop = '0.5rem';
          // pieChart.canvas.parentNode.style.marginBottom = '2rem';
        }}
      />
    </>
  )
}
