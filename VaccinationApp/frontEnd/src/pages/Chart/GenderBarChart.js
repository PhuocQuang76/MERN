import * as d3 from 'd3';

import React, { useEffect, useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { caculateReportValues } from "../../store/Report/Report-actions";
import "./Chart.css";

function GenderBarChart() {
    const dispatch = useDispatch();
    //const [data] = useState([200,250,60,150,100,175]);
    const svgRef = useRef();
    const reportVals = useSelector((state) => state.report.reportValues);
    const genderRangeLabels = ['male', 'female'];

    const { age10, age20, age30, age40, age50, age60, age70, age80, age90, age100, ageOther,maleNum,femaleNum } = reportVals;
    
    const totalUser = maleNum + femaleNum;
    const malePercent = ((maleNum /totalUser) * 100).toFixed(2);
    const femalePercent = ((femaleNum /totalUser) * 100).toFixed(2);
    const data = [malePercent,femalePercent];
    // const data = [2,4,0,1,5,6,7,2,1,0,0]
    // Calculate the maximum value in the data array
    const maxDataValue = 100;
    useEffect(()=> {
        dispatch(caculateReportValues());

        const w = 400;
        const h = 300;

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
            .tickFormat((d, i) => genderRangeLabels[i]); // Map numeric values to age range labels


        //Setting the scalling
        const yScale = d3.scaleLinear()
            .domain([0,maxDataValue])
            .range([h,0]);

       
        //setting the axis
        const yAxis = d3.axisLeft(yScale)
            .tickFormat(d => `${d}%`);


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
            .text('Gender percentage');

        // Add label for xAxis
        svg.append('text')
            .attr('x', w / 2)
            .attr('y', h + 50)
            .style('text-anchor', 'middle')
            .text('genders');

        // Add title for the chart
        svg.append('text')
            .attr('x', w / 2)
            .attr('y', -20)
            .style('text-anchor', 'middle')
            .style('font-size', '20px')
            .text('Gender Percent Chart');


        //Setting up svg data
        svg.selectAll('.bar')
        .data(data)
        .join('rect')
            .attr('x',(v,i) => xScale(i))
            .attr('y',yScale)
            .attr('width',xScale.bandwidth())
            .attr('height',val=>h - yScale(val)
        );


        // Append rectangles for the bars
svg.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("x", (d, i) => xScale(labels[i]))
.attr("y", d => yScale(d))
.attr("width", 110)
.attr("height", d => h - yScale(d))
.attr("fill", "bisque")
// Add a class for styling if needed

// Add labels for each rectangle
svg.selectAll(".bar-label")
    .data(data)
    .enter()
    .append("text")
    .text((d, i) => `${data[i]}%`) // Add "%" after the label
    .attr("x", (d, i) => i === 0 ? 110 : i === 1 ? 280 : xScale(data[i]) + xScale.bandwidth()) // Set x position based on index
    .attr("y", d => yScale(d) - 5) // Adjust the y position for better visibility
    .attr("text-anchor", "middle")
    .style("fill", "bisque")
    .attr("class", "bar-label");
    

    },[dispatch]);

    return(
        <div className="genderBarchart">
            <h2>User Information base on gender</h2>
            <svg ref = {svgRef}>

            </svg>
        </div>
    )
   
}

export default GenderBarChart;

