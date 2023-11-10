import '../globals.css'
import React, { useEffect, useRef, useState } from 'react'
import RadialDendrogram from '../app/components/RadialDendrogram'
import * as d3 from 'd3'

const generateDataset = () =>
    Array(10)
        .fill(0)
        .map(() => [Math.random() * 80 + 10, Math.random() * 35 + 10])

const Circle = () => {
    const [dataset, setDataset] = useState(generateDataset())
    const ref = useRef(null)
    useEffect(() => {
        const svgElement = d3.select(ref.current)
        svgElement
            .selectAll('circle')
            .data(dataset)
            .join('circle')
            .attr('fill', 'none')
            .attr('stroke', '#000')
            .attr('stroke-width', 1.5)
            .attr('cx', (d) => d[0])
            .attr('cy', (d) => d[1])
            .attr('r', 3)
            .on('mouseenter', function () {
                d3.select(this).attr('fill', 'red')
            })
            .on('mouseleave', function () {
                d3.select(this).attr('fill', 'none')
            })

    }, [dataset])
    // setInterval(() => {
    //     const newDataset = generateDataset()
    //     setDataset(newDataset)
    // }, 2000)
    return (
        <svg
            viewBox='0 0 100 50'
            // className='transform hover:scale-110 transition-transform duration-300 ease-in-out'
            ref={ref}
        />
    )
}

export default Circle
