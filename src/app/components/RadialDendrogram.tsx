import { useEffect, useMemo } from 'react'
import * as d3 from 'd3'
import { dendrogramData } from '@/app/data'

interface RadialDendrogramProps {
    data: typeof dendrogramData
}

const RadialDendrogram: React.FC<RadialDendrogramProps> = ({ data }: any) => {
    useEffect(() => {
        const width = 900
        const height = width
        const cx = width * 0.5
        const cy = height * 0.54
        const radius = Math.min(width, height) / 2 - 80

        // Create a radial cluster layout.
        const tree = d3
            .cluster()
            .size([2 * Math.PI, radius])
            .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth)
        const root1 = tree(
            d3
                .hierarchy(data.children)
                .sort((a, b) => d3.ascending(a.data.topic, b.data.topic)),
        )

        // Sort the tree and apply the layout.
        const root = tree(
            d3
                .hierarchy(data)
                .sort((a, b) => d3.ascending(a.data.name, b.data.name)),
        )

        // Create the SVG container.
        const svg = d3
            .create('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('stroke', '#000')
            .attr('stroke-width', 1.5)
            .attr('stroke-opacity', 0.4)
            .attr('viewBox', [-cx, -cy, width, height])
            .attr('style', 'width: 100%; height: auto; font: 10px sans-serif;')

        // Append links.
        svg.append('g')
            .attr('fill', 'none')
            .attr('stroke', '#000')
            .attr('stroke-opacity', 0.4)
            .attr('stroke-width', 1.5)
            .selectAll()
            .data(root.links())
            .join('path')
            .attr(
                'd',
                d3
                    .linkRadial()
                    .angle((d) => d.x)
                    .radius((d) => d.y) as any,
            )

        const outerCircle = svg
            .append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', radius)
            .attr('fill', 'none')
            .attr('stroke', '#000')
            .attr('stroke-opacity', 0.4)
            .attr('stroke-width', 1.5)

        const innerCircle = svg
            .append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', radius / 2)
            .attr('fill', 'none')
            .attr('stroke', 'blue')
            .attr('stroke-opacity', 0.4)
            .attr('stroke-width', 1.5)

            // console.log(root.descendants())

        // Append nodes.
        svg.append('g')
            .selectAll()
            .data(root.descendants())
            .join('circle')
            .attr('stroke', '#000')
            .attr('fill', 'none')
            .attr(
                'transform',
                (d) =>
                    `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`,
            )
            .attr('fill', (d) => (d.children ? '#555' : '#999'))
            .attr('stroke-opacity', 0.4)
            .attr('stroke-width', 1.5)
            .attr('r', (d) => (!d.children ? 10 : 14))
            .on('mouseenter', function (event, d) {
                d3.select(this)
                    .transition()
                    .duration(375)
                    .ease(d3.easeBackOut.overshoot(3))
                    .attr('r', (d) => (!d.children ? 14 : 16))
            })
            .on('mouseleave', function () {
                
                d3.select(this)
                    .transition()
                    .duration(300)
                    .ease(d3.easeSinInOut)
                    .attr('r', (d) => (!d.children ? 10 : 14))
            })

        // Append labels.
        svg.append('g')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-width', 3)
            .selectAll()
            .data(root.descendants())
            .join('text')
            .attr('transform', (d) => {
                const rotateAngle = (d.x * 180) / Math.PI - 90
                const translateX = d.y + 16 // Adjust the distance from the center
                return `rotate(${rotateAngle}) translate(${translateX},0) rotate(${
                    d.x >= Math.PI ? 180 : 0
                })`
            })
            .attr('text-anchor', (d) =>
                d.x < Math.PI === !d.children ? 'start' : 'end',
            ) // Keep parent text horizontally centered, others based on angle
            .attr('dy', '0.31em')
            .attr('x', (d) => (d.x < Math.PI === !d.children ? 6 : -6))
            

            .attr('paint-order', 'stroke')
            .attr('stroke', 'white')
            .attr('fill', 'currentColor')
            .text((d: any) => d.data.subject as string)

        svg.append('g')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-width', 3)
            .selectAll()
            .data(root.descendants())
            .join('text')
            .attr('transform', (d) => {
                const radius = d.y
                const angle = d.x - Math.PI / 2
                const x = radius * Math.cos(angle)
                const y = radius * Math.sin(angle)
                return `translate(${x},${y})`
            })

            .attr('dy', '0.31em')
            .attr('x', (d) => (d.x < Math.PI === !d.children ? -20 : 20))
            .attr('text-anchor', (d) => {
                return d.x < Math.PI ? 'start' : 'end'
            })
            .attr('paint-order', 'stroke')
            .attr('stroke', 'white')
            .attr('fill', 'currentColor')
            .text((d: any) => d.data.topic as string)

        svg.append('g')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-width', 3)
            .selectAll()
            .data(root.descendants())
            .join('text')
            .attr('transform', (d) => {
                const radius = d.y
                const angle = d.x - Math.PI / 2
                const x = radius * Math.cos(angle)
                const y = radius * Math.sin(angle)
                return `translate(${x},${y})`
            })

            .attr('dy', '0.31em')
            // .attr('x', (d) => (d.x < Math.PI === !d.children ? -20 : 20))
            .attr('text-anchor', 'middle')
            .attr('paint-order', 'stroke')
            .attr('stroke', 'white')
            .attr('fill', 'currentColor')
            .text((d: any) => d.data.name as string)

        document
            .getElementById('radial-dendrogram')
            ?.appendChild(svg.node() as Node)
    }, [data])

    return <div id='radial-dendrogram' />
}

export default RadialDendrogram
