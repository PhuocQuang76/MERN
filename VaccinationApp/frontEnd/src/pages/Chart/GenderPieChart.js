import * as d3 from 'd3';

import React, { useEffect,useRef,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { caculateReportValues } from "../../store/Report/Report-actions";
import "./Chart.css";



const GenderPieChart = () => {
    const dispatch = useDispatch();
    const reportVals = useSelector((state) => state.report.reportValues);
    const { age10, age20, age30, age40, age50, age60, age70, age80, age90, age100, ageOther,maleNum,femaleNum } = reportVals;
    const totalUser = maleNum + femaleNum;
    const malePercent = (maleNum /totalUser) * 100;
    const femalePercent = (femaleNum /totalUser) * 100;
    
    const data = [
        { value: malePercent,property:'male'},
        { value: femalePercent,property:'female'}
        
    ];
    const svgRef = useRef();


    useEffect(() => {
        dispatch(caculateReportValues());

        //Setting up svg container
        const w = 400;
        const h = 400;
        const radius = w / 2;
        const svg = d3.select(svgRef.current)
        .attr('width',w)
        .attr('height',h)
        .style('overflow','visible')
        .style('margin-top','300px')

        //setting up chart
        const formatedData = d3.pie().value(d => d.value)(data);
        const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
        const color = d3.scaleOrdinal().range(d3.schemeSet2);

       // Define a color scale using a predefined color scheme
        const colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.property))
        .range(d3.schemeCategory10); // Use a predefined color scheme for variety

        // Setting up chart
        svg.selectAll()
        .data(formatedData)
        .join('path')
        .attr('d', arcGenerator)
        .attr('fill', (d, i) => colorScale(data[i].property)) // Assign different color based on data property
        .style('opacity', 0.7);

        // Define the label array
        const label = ['male', 'female'];

        //Setting up annotaition
        // Update the text fill color based on index
        svg.selectAll()
            .data(formatedData)
            .join('text')
            .text((d, i) => {
                return d.value !== 0 ? `${label[i]}: (${d.value})` : null;
            })
            .filter(d => d.value !== 0)
            .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
            .style('text-anchor', 'middle');

        // Add title for the chart at the bottom
        // Set color of the text element to blue
        svg.append('text')
        .attr('x', w / 25)
        .attr('y', h - 150)
        .style('text-anchor', 'middle')
        .style('font-size', '20px')
        .style('fill', 'hsl(60, 50%, 39%)') // Set the fill color to blue
        .text('Age range Chart');
    }, [dispatch]);

    return(
        <div className="agePieChart">
            <h3>User Information base on age range</h3>
            <svg ref = {svgRef}>

            </svg>
        </div>
    )
   
}

export default GenderPieChart;