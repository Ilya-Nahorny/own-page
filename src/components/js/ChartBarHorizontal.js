import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

const ChartBarHorizontal = ({visibility}) => {
console.log(visibility)

  return (
    <div  className={ visibility ? "chartBar_horizontal-active" : "chartBar_horizontal"}>
      <Bar
        data={{
          labels: ["english", "polish", "russian", "belorussian"],
          
          datasets: [
            {
              label: "Languages / Języki",
              data: [5, 8, 10, 9],
              backgroundColor: [
                'rgba(255, 166, 0, 0.3)'
            ],
            color:'#fff',
            borderColor: [
              'rgba(255, 166, 0, 1)',
            ],
            borderWidth: 1,
            borderRadius: 3,

            },
          ],
        }} 
        height={400}
        width={600}
        options = {{
          maintainAspectRatio:false,
          indexAxis: 'y',
          scales: {
            y: {
                beginAtZero: true,
                
            }
        }
        }}
      />
    </div>
  );
};

export default ChartBarHorizontal;
