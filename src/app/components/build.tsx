// import { useEffect, useMemo, useRef } from 'react'
// import * as d3 from 'd3'
// import { dendrogramData } from '@/app/data'

interface RadialDendrogramProps {
    data: typeof dendrogramData
}

// const Dendrogram = ({ data }: any) => {
//     const svgRef = useRef()

//     useEffect(() => {
//         if (!data || data.length === 0) return

//         const links = data.map((link) => {
//             return {
//                 source: link.source,
//                 target: link.target,
//             }
//         })

//         const uniqueNodes = Array.from(
//             new Set(links.flatMap((link) => [link.source, link.target])),
//         ).map((name) => ({ name }))

//         const sources = uniqueNodes.filter((node) =>
//             links.some((link) => link.source === node.name),
//         )

//         const radialLayout = d3.cluster().size([2 * Math.PI, 300])

//         // Position source nodes evenly around the circle
//         const angleStep = (2 * Math.PI) / sources.length
//         sources.forEach((source, index) => {
//             source.x = angleStep * index
//             source.y = 0
//         })

//         const root = d3.hierarchy({ children: uniqueNodes }).sum((d) => 1)

//         const treeData = radialLayout(root)

//         const svg = d3.select(svgRef.current)

//         // Draw links
//         svg.selectAll('path')
//             .data(treeData.links())
//             .enter()
//             .append('path')
//             .attr(
//                 'd',
//                 d3
//                     .linkRadial()
//                     .angle((d) => d.x)
//                     .radius((d) => d.y),
//             )
//             .attr('fill', 'none')
//             .attr('stroke', 'black')

//         // Draw nodes
//         svg.selectAll('circle')
//             .data(treeData.descendants())
//             .enter()
//             .append('circle')
//             .attr('r', 5)
//             .attr(
//                 'transform',
//                 (d) =>
//                     `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`,
//             )
//             .attr('fill', 'steelblue')
//     }, [data])

//     return <svg ref={svgRef} width={600} height={600}></svg>
// }

// export default Dendrogram

// pages/index.js
// pages/index.js
import { useEffect } from 'react';
import * as d3 from 'd3';

const IndexPage = () => {
  useEffect(() => {
      // Sample data with matching criteria
    //   const data = [
    //       { id: 'A', value: '1' },
    //       { id: 'B', value: '1' },
    //       { id: 'B', value: '3' },
    //       { id: 'C', value: '3' },
    //       { id: 'C', value: '5' },
    //       { id: 'C', value: '6' },
    //       { id: 'D', value: '3' },
    //       { id: 'D', value: '4' },
    //       { id: 'D', value: '6' },
    //       { id: 'A', value: '4' },
    //       { id: 'A', value: '5' },
    //       { id: 'A', value: '2' },
    //   ]
    const data = [
        { id: 'Environmental Impact of Computing', value: 'Circular Economy' },
        {
            id: 'Environmental Impact of Computing',
            value: 'Sustainable development',
        },
        { id: 'Environmental Impact of Computing', value: 'Climate Change' },
        { id: 'Environmental Impact of Computing', value: 'Mining and Metals' },
        { id: 'Environmental Impact of Computing', value: 'Energy Transition' },
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
        { id: 'Overcoming Technological Limitations', value: 'Biotechnology' },
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
        { id: 'New Computing Governance Models', value: 'Digital Identity' },
        { id: 'New Computing Governance Models', value: 'European Union' },
        {
            id: 'New Computing Governance Models',
            value: 'Artificial Intelligence',
        },
        {
            id: 'New Computing Governance Models',
            value: 'Corporate Governance',
        },
        { id: 'New Computing Governance Models', value: 'The Digital Economy' },
        { id: 'New Computing Governance Models', value: 'Agile Governance' },
        { id: 'New Computing Governance Models', value: 'Justice and Law' },
        { id: 'New Computing Governance Models', value: 'Internet Governance' },

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
        { id: 'A Broader Computing Reach', value: 'Advanced Manufacturing' },
        { id: 'A Broader Computing Reach', value: 'Artificial Intelligence' },
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
        { id: 'Unlocking Big Data', value: 'Virtual and Augumennted Reality' },
        { id: 'Unlocking Big Data', value: 'Media, Entertainment and Sport' },
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

      // Set the center and radii for the circles
      const centerX = 250
      const centerY = 250
      const outerRadius = 200
      const innerRadius = 100

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
          .style('fill', 'lightblue')

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
                  outerRadius *
                      Math.cos((i / uniqueValues.length) * 2 * Math.PI),
          )
          .attr(
              'y',
              (d, i) =>
                  centerY +
                  outerRadius *
                      Math.sin((i / uniqueValues.length) * 2 * Math.PI),
          )
          .attr('dy', 5)
          .attr('text-anchor', 'middle')
          .text((d) => d)

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
                  innerRadius * Math.cos((i / uniqueIds.length) * 2 * Math.PI),
          )
          .attr(
              'y',
              (d, i) =>
                  centerY +
                  innerRadius * Math.sin((i / uniqueIds.length) * 2 * Math.PI),
          )
          .attr('dy', 5)
          .attr('text-anchor', 'middle')
          .text((d) => d)

      // Draw links between matching nodes
       connections.forEach((values, id) => {
           values.forEach((value, i) => {
               svg.append('line')
                   .attr(
                       'x1',
                       centerX +
                           outerRadius *
                               Math.cos(
                                   (uniqueValues.indexOf(value) /
                                       uniqueValues.length) *
                                       2 *
                                       Math.PI,
                               ),
                   )
                   .attr(
                       'y1',
                       centerY +
                           outerRadius *
                               Math.sin(
                                   (uniqueValues.indexOf(value) /
                                       uniqueValues.length) *
                                       2 *
                                       Math.PI,
                               ),
                   )
                   .attr(
                       'x2',
                       centerX +
                           innerRadius *
                               Math.cos(
                                   (uniqueIds.indexOf(id) / uniqueIds.length) *
                                       2 *
                                       Math.PI,
                               ),
                   )
                   .attr(
                       'y2',
                       centerY +
                           innerRadius *
                               Math.sin(
                                   (uniqueIds.indexOf(id) / uniqueIds.length) *
                                       2 *
                                       Math.PI,
                               ),
                   )
                   .attr('stroke', 'black')
           })
       })
   const curveInterpolator = d3.curveCardinal.tension(0.9) // Adjust the tension as needed

   // Draw links between matching nodes with curved lines
//    connections.forEach((values, id) => {
//        const path = d3.path()
//        path.moveTo(
//            centerX +
//                outerRadius *
//                    Math.cos(
//                        (uniqueValues.indexOf(values[0]) / uniqueValues.length) *
//                            2 *
//                            Math.PI,
//                    ),
//            centerY +
//                outerRadius *
//                    Math.sin(
//                        (uniqueValues.indexOf(values[0]) / uniqueValues.length) *
//                            2 *
//                            Math.PI,
//                    ),
//        )

//        values.forEach((value) => {
//            path.bezierCurveTo(
//                centerX +
//                    innerRadius *
//                        Math.cos(
//                            (uniqueIds.indexOf(id) / uniqueIds.length) *
//                                2 *
//                                Math.PI,
//                        ),
//                centerY +
//                    innerRadius *
//                        Math.sin(
//                            (uniqueIds.indexOf(id) / uniqueIds.length) *
//                                2 *
//                                Math.PI,
//                        ),
//                centerX +
//                    innerRadius *
//                        Math.cos(
//                            (uniqueIds.indexOf(id) / uniqueIds.length) *
//                                2 *
//                                Math.PI,
//                        ),
//                centerY +
//                    innerRadius *
//                        Math.sin(
//                            (uniqueIds.indexOf(id) / uniqueIds.length) *
//                                2 *
//                                Math.PI,
//                        ),
//                centerX +
//                    outerRadius *
//                        Math.cos(
//                            (uniqueValues.indexOf(value) / uniqueValues.length) *
//                                2 *
//                                Math.PI,
//                        ),
//                centerY +
//                    outerRadius *
//                        Math.sin(
//                            (uniqueValues.indexOf(value) / uniqueValues.length) *
//                                2 *
//                                Math.PI,
//                        ),
//            )
//        })

//        svg.append('path')
//            .attr('d', path.toString())
//            .attr('stroke', 'black')
//            .attr('fill', 'none')
//    })
  }, []); // Run only once on component mount

  return (
    <div>
      <svg id="svg-container" width="1500" height="1500"></svg>
    </div>
  );
};

export default IndexPage;




// components/RadialChart.js
// import { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const RadialChart = ({ data }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     if (!data || data.length === 0) return;

//     const links = data.map(link => {
//       return {
//         source: link.source,
//         target: link.target,
//       };
//     });

//     const nodes = Array.from(new Set(links.flatMap(link => [link.source, link.target])))
//       .map(name => ({ name }));

//     const root = d3.hierarchy({ children: nodes }).sum(d => 1);

//     const radialLayout = d3.cluster().size([2 * Math.PI, 300]);
//     const treeData = radialLayout(root);

//     const svg = d3.select(svgRef.current);

//     // Draw links
//     svg.selectAll("path")
//       .data(treeData.links())
//       .enter().append("path")
//       .attr("d", d3.linkRadial()
//         .angle(d => d.x)
//         .radius(d => d.y))
//       .attr("fill", "none")
//       .attr("stroke", "black");

//     // Draw nodes
//     svg.selectAll("circle")
//       .data(treeData.descendants())
//       .enter().append("circle")
//       .attr("r", 5)
//       .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
//       .attr("fill", "steelblue");

//   }, [data]);

//   return (
//     <svg ref={svgRef} width={600} height={600}></svg>
//   );
// };

// export default RadialChart;
