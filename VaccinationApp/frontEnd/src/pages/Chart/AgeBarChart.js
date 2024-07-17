import * as d3 from 'd3';

import React, { useEffect, useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { caculateReportValues } from "../../store/Report/Report-actions";
import "./Chart.css";

function AgeBarChart() {
    const dispatch = useDispatch();
    //const [data] = useState([200,250,60,150,100,175]);
    const svgRef = useRef();
    const reportVals = useSelector((state) => state.report.reportValues);
    const ageRangeLabels = ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', 'others'];

    const { age10, age20, age30, age40, age50, age60, age70, age80, age90, age100, ageOther,maleNum,femaleNum } = reportVals;
    const data = [age10, age20, age30, age40, age50, age60, age70, age80, age90, age100, ageOther];
    // const data = [2,4,0,1,5,6,7,2,1,0,0]
    // Calculate the maximum value in the data array
    const maxDataValue = Math.max(...data);


    useEffect(()=> {
        dispatch(caculateReportValues());

        const w = 800;
        const h = 500;

        const svg = d3.select(svgRef.current)
            .attr('width',w)
            .attr('height',h)
            .style('overflow','visible')
            .style('margin-top','75px')
            .style('color', 'bisque')
            .attr('fill', 'bisque'); // Set the color of the bars here; 

     

        //Setting the scalling
        const xScale = d3.scaleBand()
        .domain(data.map((val,i)=> i))
        .range([0,w])
        .padding(0.5);

        //setting the axis
        // const xAxis = d3.axisBottom(xScale)
        // .ticks(data.length);
        // Adjust the xAxis to display the age range labels
        const xAxis = d3.axisBottom(xScale)
            .tickFormat((d, i) => ageRangeLabels[i]); // Map numeric values to age range labels



            //Setting the scalling
        const yScale = d3.scaleLinear()
            .domain([0,maxDataValue])
            .range([h,0]);

       
        //setting the axis
        const yAxis = d3.axisLeft(yScale)
        .ticks(5);


        svg.append('g')
        .call(xAxis)
        .attr('transform',`translate(0,${h})`);

        svg.append('g')
        .call(yAxis)
       
        // Add label for yAxis
        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('x', -h / 2)
            .attr('y', -50)
            .style('text-anchor', 'middle')
            .text('Number of users');

        // Add label for xAxis
        svg.append('text')
            .attr('x', w / 2)
            .attr('y', h + 50)
            .style('text-anchor', 'middle')
            .text('Age range');

        // Add title for the chart
        svg.append('text')
            .attr('x', w / 2)
            .attr('y', -20)
            .style('text-anchor', 'middle')
            .style('font-size', '20px')
            .text('Age range Chart');


        //Setting up svg data
        svg.selectAll('.bar')
            .data(data)
            .join('rect')
            .attr('x', (d, i) => xScale(i))
            .attr('y', d => yScale(d))
            .attr('width',xScale.bandwidth())
            .attr('height',val=>h - yScale(val)
        );

            // Add labels on top of each data bar
        // Add labels showing the percentage on top of each data bar

    },[dispatch]);

    return(
        <div style={{width: '100%', minHeight: '100px'}} className="ageBarChart">
            <h2>User Information base on age range</h2>
            <svg ref = {svgRef}>

            </svg>
        </div>
    )
   
}

export default AgeBarChart;


// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { caculateReportValues } from "../../store/Report/Report-actions";
// import { Bar } from "react-chartjs-2";
// import "./Chart.css";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     BarElement // Add BarElement here
// } from 'chart.js'
// import { Chart } from 'react-chartjs-2'

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     BarElement // Register BarElement here
// )

// const AgeBarChart = () => {
//     const dispatch = useDispatch();
//     debugger;
//     const reportVals = useSelector((state) => state.report.reportValues);
//     const { age10, age20, age30, age40, age50, age60, age70, age80, age90, age100, ageOther,maleNum,femaleNum } = reportVals;

//     useEffect(() => {
//         dispatch(caculateReportValues());
//     }, [])

//     return (
//         <div className="chart">
//             <Bar
//                 data={{
//                     labels: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', 'others'],
//                     datasets: [
//                         {
//                             label: 'Age average',
//                             data: [age10, age20, age30, age40, age50, age60, age70, age80, age90, age100, ageOther],
//                             // data: [2, 4, 6, 1, 4, 6, 7, 0, 0, 8, 1],
//                             backgroundColor: [
//                                 'rgba(255, 99, 132, 0.2)',
//                                 'rgba(255, 159, 64, 0.2)',
//                                 'rgba(255, 205, 86, 0.2)',
//                                 'rgba(75, 192, 192, 0.2)',
//                                 'rgba(54, 162, 235, 0.2)',
//                                 'rgba(153, 102, 255, 0.2)',
//                                 'rgba(201, 203, 207, 0.2)',
//                                 'rgba(201, 168, 207, 0.2)',
//                                 'rgba(201, 132, 207, 0.2)',
//                                 'rgba(201, 176, 207, 0.2)',
//                                 'rgba(201, 89, 207, 0.2)'
//                             ],
//                             borderColor: [
//                                 'rgb(255, 99, 132)',
//                                 'rgb(255, 159, 64)',
//                                 'rgb(255, 205, 86)',
//                                 'rgb(75, 192, 192)',
//                                 'rgb(54, 162, 235)',
//                                 'rgb(153, 102, 255)',
//                                 'rgb(201, 203, 207)',
//                                 'rgb(201, 168, 207)',
//                                 'rgb(201, 132, 207)',
//                                 'rgb(201, 176, 207)',
//                                 'rgb(201, 89, 207)'
//                             ],
//                             borderWidth: 1
//                         },

//                     ],
//                 }}
//                 height={400}
//                 width={400}

                
//                 options={{
//                     maintainAspectRatio: false,
//                     scales: {
//                         y: {
//                             display: true,
//                             scaleLabel: {
//                                 display: true,
//                                 labelString: "Value"
//                             }
//                         },
//                         x: {
                            
//                             ticks: {
//                               autoSkip: true,
//                               maxTicksLimit: 20,
//                               },
//                               display: true,
//                               scaleLabel: {
//                                   display: true,
//                                   labelString: "Point"
//                               }
//                           },
//                     },
//                     plugins: {
//                         legend: {
//                             labels: {
//                                 fontSize: 35,
//                             },
//                         },
//                     },
//                 }}
//             />
//         </div>
//     )
// }

// export default AgeBarChart;







