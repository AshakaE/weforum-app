import { useEffect } from 'react'
import * as d3 from 'd3'

const IndexPage = () => {
    useEffect(() => {
        // Sample data with matching criteria
        // const data = [
        //     { id: 'A', value: '1' },
        //     { id: 'B', value: '1' },
        //     { id: 'B', value: '3' },
        //     { id: 'C', value: '3' },
        //     { id: 'C', value: '5' },
        //     { id: 'C', value: '6' },
        //     { id: 'D', value: '3' },
        //     { id: 'D', value: '4' },
        //     { id: 'D', value: '6' },
        //     { id: 'A', value: '4' },
        //     { id: 'A', value: '5' },
        //     { id: 'A', value: '2' },
        // ]
        const data = [
            {
                id: 'Environmental Impact of Computing',
                value: 'Circular Economy',
            },
            {
                id: 'Environmental Impact of Computing',
                value: 'Sustainable development',
            },
            {
                id: 'Environmental Impact of Computing',
                value: 'Climate Change',
            },
            {
                id: 'Environmental Impact of Computing',
                value: 'Mining and Metals',
            },
            {
                id: 'Environmental Impact of Computing',
                value: 'Energy Transition',
            },
            { id: 'Environmental Impact of Computing', value: 'Electricity' },
            {
                id: 'Environmental Impact of Computing',
                value: 'Advanced Materials',
            },
            {
                id: 'Environmental Impact of Computing',
                value: 'Future of the Environment',
            },
            {
                id: 'Environmental Impact of Computing',
                value: 'Artificial Intelligence',
            },

            {
                id: 'Overcoming Technological Limitations',
                value: 'Quantum Computing',
            },
            {
                id: 'Overcoming Technological Limitations',
                value: 'Energy Transition',
            },
            { id: 'Overcoming Technological Limitations', value: 'Innovation' },
            {
                id: 'Overcoming Technological Limitations',
                value: 'Fourth Industrial Revolution',
            },
            {
                id: 'Overcoming Technological Limitations',
                value: 'Biotechnology',
            },
            {
                id: 'Overcoming Technological Limitations',
                value: 'Advanced Materials',
            },
            {
                id: 'Overcoming Technological Limitations',
                value: 'Trade and Inveestment',
            },
            {
                id: 'Overcoming Technological Limitations',
                value: 'Future of the Environment',
            },
            {
                id: 'New Computing Governance Models',
                value: 'Fourth Industrial Revolution',
            },
            {
                id: 'New Computing Governance Models',
                value: 'Digital Identity',
            },
            { id: 'New Computing Governance Models', value: 'European Union' },
            {
                id: 'New Computing Governance Models',
                value: 'Artificial Intelligence',
            },
            {
                id: 'New Computing Governance Models',
                value: 'Corporate Governance',
            },
            {
                id: 'New Computing Governance Models',
                value: 'The Digital Economy',
            },
            {
                id: 'New Computing Governance Models',
                value: 'Agile Governance',
            },
            { id: 'New Computing Governance Models', value: 'Justice and Law' },
            {
                id: 'New Computing Governance Models',
                value: 'Internet Governance',
            },

            { id: 'Widespread Applications', value: 'Biotechnology' },
            { id: 'Widespread Applications', value: 'Artificial Intelligence' },
            { id: 'Widespread Applications', value: 'Precision Medicine' },
            {
                id: 'Widespread Applications',
                value: 'Information and Communications Technology',
            },
            {
                id: 'Widespread Applications',
                value: 'Retail, Consumer Goods and Lifestyle',
            },
            { id: 'Widespread Applications', value: 'Mobility' },
            { id: 'Widespread Applications', value: '3D Printing' },
            { id: 'Widespread Applications', value: 'Internet of Things' },
            { id: 'Widespread Applications', value: 'Health and Healthcare' },
            { id: 'Widespread Applications', value: 'Future of Consumption' },
            { id: 'Widespread Applications', value: 'Education' },

            { id: 'A Broader Computing Reach', value: 'Biotechnology' },
            {
                id: 'A Broader Computing Reach',
                value: 'Advanced Manufacturing',
            },
            {
                id: 'A Broader Computing Reach',
                value: 'Artificial Intelligence',
            },
            { id: 'A Broader Computing Reach', value: 'Precision Medicine' },
            { id: 'A Broader Computing Reach', value: 'Mobility' },
            { id: 'A Broader Computing Reach', value: 'Health and Healthcare' },
            { id: 'A Broader Computing Reach', value: '3D Printing' },
            {
                id: 'A Broader Computing Reach',
                value: 'Virtual and Augumennted Reality',
            },
            { id: 'A Broader Computing Reach', value: 'Supply Chains' },
            { id: 'A Broader Computing Reach', value: 'Automotive Industry' },
            { id: 'Unlocking Big Data', value: 'Quantum Computing' },
            { id: 'Unlocking Big Data', value: 'Digital Identity' },
            { id: 'Unlocking Big Data', value: 'Artificial Intelligence' },
            { id: 'Unlocking Big Data', value: 'The Digital Economy' },
            { id: 'Unlocking Big Data', value: 'Internet Governance' },
            {
                id: 'Unlocking Big Data',
                value: 'Retail, Consumer Goods and Lifestyle',
            },
            { id: 'Unlocking Big Data', value: 'Internet of Things' },
            {
                id: 'Unlocking Big Data',
                value: 'Virtual and Augumennted Reality',
            },
            {
                id: 'Unlocking Big Data',
                value: 'Media, Entertainment and Sport',
            },
            { id: 'Unlocking Big Data', value: 'Data Science' },
            { id: 'Unlocking Big Data', value: 'Human Rights' },
            { id: 'Unlocking Big Data', value: 'Behavioural Sciences' },
            { id: 'Unlocking Big Data', value: 'Values' },
            { id: 'Unlocking Big Data', value: 'Insurance' },

            { id: 'Cybersecurity Evolution', value: 'Innovation' },
            {
                id: 'Cybersecurity Evolution',
                value: 'Fourth Industrial Revolution',
            },
            { id: 'Cybersecurity Evolution', value: 'Digital Identity' },
            { id: 'Cybersecurity Evolution', value: 'The Digital Economy' },
            {
                id: 'Cybersecurity Evolution',
                value: 'Information and Communications Technology',
            },
            { id: 'Cybersecurity Evolution', value: 'International Security' },
            { id: 'Cybersecurity Evolution', value: 'Cybersecurity' },
            { id: 'Cybersecurity Evolution', value: 'Illicit Economy' },
            { id: 'Cybersecurity Evolution', value: 'Global Risks' },
            { id: 'Cybersecurity Evolution', value: 'Global Governance' },
        ]

        // Create unique sets of IDs and values
        const uniqueIds = Array.from(new Set(data.map((d) => d.id)))
        const uniqueValues = Array.from(new Set(data.map((d) => d.value)))

        // Matching logic based on the 'value' attribute
        function findMatches(data, value) {
            return data.filter((d) => d.value === value)
        }

        const connections = new Map()

        data.forEach(({ id, value }) => {
            if (!connections.has(id)) {
                connections.set(id, [])
            }

            if (!connections.get(id).includes(value)) {
                connections.get(id).push(value)
            }
        })

        // Use D3 to create visual representation
        const svg = d3.select('#svg-container')

        const svgContainer = d3.select('#svg-container')
        const containerWidth = parseInt(svgContainer.style('width'))
        const containerHeight = parseInt(svgContainer.style('height'))

        // Set up the viewBox dimensions
        const viewBoxWidth = containerWidth
        const viewBoxHeight = containerHeight

        svgContainer
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', `0 0 ${viewBoxWidth} ${viewBoxHeight}`)
            .attr('preserveAspectRatio', 'xMidYMid meet')

        // Set the center and radii for the circles
        const centerX = containerWidth / 2
        const centerY = containerHeight / 2
        const outerRadius = Math.min(containerWidth, containerHeight) / 4 
        const innerRadius = outerRadius / 2

        // Create an outer circle for values
        svg.append('circle')
            .attr('cx', centerX)
            .attr('cy', centerY)
            .attr('r', outerRadius)
            .style('fill', 'lightgray')

        // Create an inner circle for IDs
        svg.append('circle')
            .attr('cx', centerX)
            .attr('cy', centerY)
            .attr('r', innerRadius)
            .attr('fill', 'none')
            .style('stroke', 'blue')
            .attr('stroke-opacity', 0.4)
            .attr('stroke-width', 1.5)

        svg.append('circle')
            .attr('cx', centerX)
            .attr('cy', centerY)
            .attr('r', innerRadius - 50)
            .attr('fill', 'gray')

        const linkGenerator = d3
            .linkRadial()
            .angle((d) => {
                // console.log(d.angle)
                // console.log(d)
                return d.angle
            })
            .radius((d) => d.radius)

        connections.forEach((values, id) => {
            values.forEach((value, i) => {
                // console.log(value, i)
                // console.log(id)

                const sourceIndex = uniqueValues.indexOf(value)
                const targetIndex = uniqueIds.indexOf(id)

                // const sourceAngle =
                //     (sourceIndex / uniqueValues.length) * 2 * Math.PI
                // const sourceRadius = outerRadius

                // const targetAngle =
                //     (targetIndex / uniqueIds.length) * 2 * Math.PI
                // const targetRadius = innerRadius

                const rotationDegrees = 90 // Adjust the rotation angle as needed
                const sourceAngle =
                    (sourceIndex / uniqueValues.length) * 2 * Math.PI +
                    (rotationDegrees * Math.PI) / 180
                const sourceRadius = outerRadius

                const targetAngle =
                    (targetIndex / uniqueIds.length) * 2 * Math.PI +
                    (rotationDegrees * Math.PI) / 180
                const targetRadius = innerRadius

                // const sourceX = centerX + sourceRadius * Math.cos(sourceAngle)
                // const sourceY = centerY + sourceRadius * Math.sin(sourceAngle)

                // const targetX = centerX + targetRadius * Math.cos(targetAngle)
                // const targetY = centerY + targetRadius * Math.sin(targetAngle)

                const sourceData = {
                    angle: sourceAngle,
                    radius: sourceRadius,
                    data: id,
                }
                const targetData = {
                    angle: targetAngle,
                    radius: targetRadius,
                    data: i,
                }

                const pathString = linkGenerator({
                    source: sourceData,
                    target: targetData,
                } as any)

                svg.append('path')
                    .attr('d', pathString)
                    .attr('stroke', 'black')
                    .attr('transform', `translate(${centerX},${centerY})`) // Translate the link to the center
                    .attr('fill', 'none')
            })
        })

        ///////////// E X T E R N A L  N O D E  C I R C L E S

        svg.selectAll('text.outer')
            .data(uniqueValues)
            .enter()
            .append('g') // Create a group for each text element and circle
            .attr('class', 'outer-group')
            .append('circle') // Add a small circle for each text
            .attr('class', 'outer-circle')
            .attr('cx', (d, i) => {
                const angle = (i / uniqueValues.length) * 2 * Math.PI
                const radius = outerRadius // Adjust the distance from the center
                return centerX + radius * Math.cos(angle)
            })
            .attr('cy', (d, i) => {
                const angle = (i / uniqueValues.length) * 2 * Math.PI
                const radius = outerRadius // Adjust the distance from the center
                return centerY + radius * Math.sin(angle)
            })
            .attr('r', 10) // Adjust the radius of the small circle
            .style('fill', 'red') // Adjust the color of the small circle

        //////////// O U T E R  T E X T
        // Bind data to text elements for unique values on outer circle
        svg.selectAll('text.outer')
            .data(uniqueValues)
            .enter()
            .append('text')
            .attr('class', 'outer')
            .attr(
                'x',
                (d, i) =>
                    centerX +
                    (outerRadius + 70) *
                        Math.cos((i / uniqueValues.length) * 2 * Math.PI),
            )
            .attr(
                'y',
                (d, i) =>
                    centerY +
                    (outerRadius + 70) *
                        Math.sin((i / uniqueValues.length) * 2 * Math.PI),
            )
            .attr('dy', 5)
            .attr('text-anchor', (d, i) => {
                const angle = (i / uniqueValues.length) * 2 * Math.PI
                return centerX < Math.PI
                    ? angle > Math.PI / 2 && angle < (3 * Math.PI) / 2
                        ? 'end'
                        : 'start'
                    : angle < Math.PI / 2 || angle > (3 * Math.PI) / 2
                    ? 'start'
                    : 'end'
            })
            // .attr('text-anchor', (d, i) => {
            //     const angle = (i / uniqueValues.length) * 360 // Convert to degrees
            //     return angle > 90 && angle < 270 ? 'end' : 'start'
            // })
            .text((d) => d)

        ///////////// I N T E R N A L  N O D E  C I R C L E S

        svg.selectAll('text.inner')
            .data(uniqueIds)
            .enter()
            .append('g') // Create a group for each text element and circle
            .attr('class', 'inner-group')
            .append('circle') // Add a small circle for each text
            .attr('class', 'inner-circle')
            .attr('cx', (d, i) => {
                const angle = (i / uniqueIds.length) * 2 * Math.PI
                const radius = innerRadius // Adjust the distance from the center
                return centerX + radius * Math.cos(angle)
            })
            .attr('cy', (d, i) => {
                const angle = (i / uniqueIds.length) * 2 * Math.PI
                const radius = innerRadius // Adjust the distance from the center
                return centerY + radius * Math.sin(angle)
            })
            .attr('r', 14) // Adjust the radius of the small circle
            .style('fill', 'green') // Adjust the color of the small circle

        //////////////  I N N E R  T E X T

        // Bind data to text elements for unique IDs on inner circle
        svg.selectAll('text.inner')
            .data(uniqueIds)
            .enter()
            .append('text')
            .attr('class', 'inner')
            .attr(
                'x',
                (d, i) =>
                    centerX +
                    (innerRadius + 16) *
                        Math.cos((i / uniqueIds.length) * 2 * Math.PI),
            )
            .attr(
                'y',
                (d, i) =>
                    centerY +
                    (innerRadius + 16) *
                        Math.sin((i / uniqueIds.length) * 2 * Math.PI),
            )
            .attr('dy', 5)
            .attr('text-anchor', (d, i) => {
                const angle = (i / uniqueIds.length) * 2 * Math.PI
                return centerX < Math.PI
                    ? angle > Math.PI / 2 && angle < (3 * Math.PI) / 2
                        ? 'end'
                        : 'start'
                    : angle < Math.PI / 2 || angle > (3 * Math.PI) / 2
                    ? 'start'
                    : 'end'
            })
            .text((d) => d)

    }, []) // Run only once on component mount

    return (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <svg id='svg-container' width='1500' height='1500'></svg>
        </div>
    )
}

export default IndexPage

