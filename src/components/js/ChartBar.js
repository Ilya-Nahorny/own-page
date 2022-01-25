import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

const ChartBar = ({visibility}) => {


  return (
    <div className={visibility ? "chartBar-active" : "chartBar"} >
      <Bar
        data={{
          labels: ["html", "sass", "js", "React js", "git"],
          datalabels :{
            color: "white",
          },
          datasets: [
            {
              label: "skills / umiejętności",
              color:"orange",
              data: [10, 8, 7, 6, 6],
              backgroundColor: [
                'rgba(255, 166, 0, 0.3)'
            ],
            
            borderColor: [
              'rgba(255, 166, 0, 1)'
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
          scales: {
            y: {
                beginAtZero: true
            },
        },

      }}
      />
    </div>
  );
};

export default ChartBar;
