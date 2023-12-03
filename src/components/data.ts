// const matchedPairs = [
//     { source: 'Environmental Impact of Computing', target: 'Circular Economy' },
//     {
//         source: 'Environmental Impact of Computing',
//         target: 'Sustainable development',
//     },
//     { source: 'Environmental Impact of Computing', target: 'Climate Change' },
//     {
//         source: 'Environmental Impact of Computing',
//         target: 'Mining and Metals',
//     },
//     {
//         source: 'Environmental Impact of Computing',
//         target: 'Energy Transition',
//     },
//     {
//         source: 'Environmental Impact of Computing',
//         target: 'Electricity',
//     },
//     {
//         source: 'Environmental Impact of Computing',
//         target: 'Advanced Materials',
//     },
//     {
//         source: 'Environmental Impact of Computing',
//         target: 'Future of the Environment',
//     },
//     {
//         source: 'Environmental Impact of Computing',
//         target: 'Artificial Intelligence',
//     },
//     { source: 'A2', target: 'B2' },
//     // Add more pairs as needed
// ]

export const dendrogramData = {
    name: 'Future of Computing',
    children: [
        {
            topic: 'Environmental Impact of Computing',
            children: [
                { subject: 'Circular Economy' },
                { subject: 'Sustainable development' },
                { subject: 'Climate Change' },
                { subject: 'Mining and Metals' },
                { subject: 'Energy Transition' },
                { subject: 'Electricity' },
                { subject: 'Advanced Materials' },
                { subject: 'Future of the Environment' },
                { subject: 'Artificial Intelligence' },
            ],
        },
        {
            topic: 'Overcoming Technological Limitations',
            children: [
                { subject: 'Quantum Computing' },
                { subject: 'Energy Transition' },
                { subject: 'Innovation' },
                { subject: 'Fourth Industrial Revolution' },
                { subject: 'Biotechnology' },
                { subject: 'Advanced Materials' },
                { subject: 'Trade and Inveestment' },
                { subject: 'Future of the Environment' },
            ],
        },
        {
            topic: 'New Computing Governance Models',
            children: [
                { subject: 'Fourth Industrial Revolution' },
                { subject: 'Digital Identity' },
                { subject: 'European Union' },
                { subject: 'Artificial Intelligence' },
                { subject: 'Corporate Governance' },
                { subject: 'The Digital Economy' },
                { subject: 'Agile Governance' },
                { subject: 'Justice and Law' },
                { subject: 'Internet Governance' },
            ],
        },
        {
            topic: 'Widespread Applications',
            children: [
                { subject: 'Biotechnology' },
                { subject: 'Artificial Intelligence' },
                { subject: 'Precision Medicine' },
                { subject: 'Information and Communications Technology' },
                { subject: 'Retail, Consumer Goods and Lifestyle' },
                { subject: 'Mobility' },
                { subject: '3D Printing' },
                { subject: 'Internet of Things' },
                { subject: 'Health and Healthcare' },
                { subject: 'Future of Consumption' },
                { subject: 'Education' },
            ],
        },
        {
            topic: 'A Broader Computing Reach',
            children: [
                { subject: 'Biotechnology' },
                { subject: 'Advanced Manufacturing' },
                { subject: 'Artificial Intelligence' },
                { subject: 'Precision Medicine' },
                { subject: 'Mobility' },
                { subject: 'Health and Healthcare' },
                { subject: '3D Printing' },
                { subject: 'Virtual and Augumennted Reality' },
                { subject: 'Supply Chains' },
                { subject: 'Automotive Industry' },
            ],
        },
        {
            topic: 'Unlocking Big Data',
            children: [
                { subject: 'Quantum Computing' },
                { subject: 'Digital Identity' },
                { subject: 'Artificial Intelligence' },
                { subject: 'The Digital Economy' },
                { subject: 'Internet Governance' },
                { subject: 'Retail, Consumer Goods and Lifestyle' },
                { subject: 'Internet of Things' },
                { subject: 'Virtual and Augumennted Reality' },
                { subject: 'Media, Entertainment and Sport' },
                { subject: 'Data Science' },
                { subject: 'Human Rights' },
                { subject: 'Behavioural Sciences' },
                { subject: 'Values' },
                { subject: 'Insurance' },
            ],
        },
        {
            topic: 'Cybersecurity Evolution',
            children: [
                { subject: 'Innovation' },
                { subject: 'Fourth Industrial Revolution' },
                { subject: 'Digital Identity' },
                { subject: 'The Digital Economy' },
                { subject: 'Information and Communications Technology' },
                { subject: 'International Security' },
                { subject: 'Cybersecurity' },
                { subject: 'Illicit Economy' },
                { subject: 'Global Risks' },
                { subject: 'Global Governance' },
            ],
        },
    ],
}

const topicSubjectsMap = new Map()
const uniqueSubjectsSet = new Set()

// Function to recursively populate the Map
const populateMap = (
    node: { name?: string; children: any; topic?: any; subject?: any },
    parentTopic: null,
) => {
    if ('topic' in node) {
        parentTopic = node.topic
    }
    if ('subject' in node) {
        if (!topicSubjectsMap.has(parentTopic)) {
            topicSubjectsMap.set(parentTopic, [])
        }
        topicSubjectsMap.get(parentTopic).push(node.subject)

        uniqueSubjectsSet.add(node.subject)
    }
    if ('children' in node && Array.isArray(node.children)) {
        node.children.forEach((child: any) => populateMap(child, parentTopic))
    }
}

// Populate the Map using the dendrogram data
populateMap(dendrogramData, null)
const getUniqueSubjects = () => {
    return Array.from(uniqueSubjectsSet)
}

const uniqueSubjectsArray = Array.from(uniqueSubjectsSet)

// Create an array of leaf nodes
const leafNodes = uniqueSubjectsArray.map((subject) => ({ subject }))

// console.log(uniqueSubjectsArray)
// console.log(leafNodes)

const clusteredData = {
    name: 'Computing Cluster',
    children: [
        ...dendrogramData.children, // Root nodes from dendrogramData.children
        ...leafNodes, // Leaf nodes from uniqueSubjectsArray
    ],
}

// console.log(clusteredData)

// Access subjects related to a specific topic
// const subjectsForTopic = topicSubjectsMap.get(
//     'Environmental Impact of Computing',
// )
// console.log(
//     'Subjects related to "Environmental Impact of Computing":',
//     subjectsForTopic,
// )

// const uniqueSubjectsArray = getUniqueSubjects()
// console.log('Unique Subjects:', uniqueSubjectsArray.length)


function createMatchedPairs(data) {
    const matchedPairs = []

    function traverse(node) {
        if (node.children) {
            node.children.forEach((child) => {
                // Create a matched pair between the current node and its child
                matchedPairs.push({
                    source: node.topic || node.subject,
                    target: child.topic || child.subject,
                })

                // Recursively traverse the child node
                traverse(child)
            })
        }
    }

    // Start the traversal from the root node
    traverse(data)

    return matchedPairs
}

// Create matched pairs from the dendrogram data
const matchedPairs = createMatchedPairs(dendrogramData)
console.log(matchedPairs)

export const v = [
 { source: "Environmental Impact of Computing", target: "Circular Economy" },
 { source: "Environmental Impact of Computing", target: "Sustainable development" },
 { source: "Environmental Impact of Computing", target: "Climate Change" },
 { source: "Environmental Impact of Computing", target: "Mining and Metals" },
 { source: "Environmental Impact of Computing", target: "Energy Transition" },
 { source: "Environmental Impact of Computing", target: "Electricity" },
 { source: "Environmental Impact of Computing", target: "Advanced Materials" },
 { source: "Environmental Impact of Computing", target: "Future of the Environment" },
 { source: "Environmental Impact of Computing", target: "Artificial Intelligence" },

 { source: "Overcoming Technological Limitations", target: "Quantum Computing" },
 { source: "Overcoming Technological Limitations", target: "Energy Transition" },
 { source: "Overcoming Technological Limitations", target: "Innovation" },
 { source: "Overcoming Technological Limitations", target: "Fourth Industrial Revolution" },
 { source: "Overcoming Technological Limitations", target: "Biotechnology" },
 { source: "Overcoming Technological Limitations", target: "Advanced Materials" },
 { source: "Overcoming Technological Limitations", target: "Trade and Inveestment" },
 { source: "Overcoming Technological Limitations", target: "Future of the Environment" },
 { source: "New Computing Governance Models", target: "Fourth Industrial Revolution" },
 { source: "New Computing Governance Models", target: "Digital Identity" },
 { source: "New Computing Governance Models", target: "European Union" },
 { source: "New Computing Governance Models", target: "Artificial Intelligence" },
 { source: "New Computing Governance Models", target: "Corporate Governance" },
 { source: "New Computing Governance Models", target: "The Digital Economy" },
 { source: "New Computing Governance Models", target: "Agile Governance" },
 { source: "New Computing Governance Models", target: "Justice and Law" },
 { source: "New Computing Governance Models", target: "Internet Governance" },

 { source: "Widespread Applications", target: "Biotechnology" },
 { source: "Widespread Applications", target: "Artificial Intelligence" },
 { source: "Widespread Applications", target: "Precision Medicine" },
 { source: "Widespread Applications", target: "Information and Communications Technology" },
 { source: "Widespread Applications", target: "Retail, Consumer Goods and Lifestyle" },
 { source: "Widespread Applications", target: "Mobility" },
 { source: "Widespread Applications", target: "3D Printing" },
 { source: "Widespread Applications", target: "Internet of Things" },
 { source: "Widespread Applications", target: "Health and Healthcare" },
 { source: "Widespread Applications", target: "Future of Consumption" },
 { source: "Widespread Applications", target: "Education" },

 { source: "A Broader Computing Reach", target: "Biotechnology" },
 { source: "A Broader Computing Reach", target: "Advanced Manufacturing" },
 { source: "A Broader Computing Reach", target: "Artificial Intelligence" },
 { source: "A Broader Computing Reach", target: "Precision Medicine" },
 { source: "A Broader Computing Reach", target: "Mobility" },
 { source: "A Broader Computing Reach", target: "Health and Healthcare" },
 { source: "A Broader Computing Reach", target: "3D Printing" },
 { source: "A Broader Computing Reach", target: "Virtual and Augumennted Reality" },
 { source: "A Broader Computing Reach", target: "Supply Chains" },
 { source: "A Broader Computing Reach", target: "Automotive Industry" },
 { source: "Unlocking Big Data", target: "Quantum Computing" },
 { source: "Unlocking Big Data", target: "Digital Identity" },
 { source: "Unlocking Big Data", target: "Artificial Intelligence" },
 { source: "Unlocking Big Data", target: "The Digital Economy" },
 { source: "Unlocking Big Data", target: "Internet Governance" },
 { source: "Unlocking Big Data", target: "Retail, Consumer Goods and Lifestyle" },
 { source: "Unlocking Big Data", target: "Internet of Things" },
 { source: "Unlocking Big Data", target: "Virtual and Augumennted Reality" },
 { source: "Unlocking Big Data", target: "Media, Entertainment and Sport" },
 { source: "Unlocking Big Data", target: "Data Science" },
 { source: "Unlocking Big Data", target: "Human Rights" },
 { source: "Unlocking Big Data", target: "Behavioural Sciences" },
 { source: "Unlocking Big Data", target: "Values" },
 { source: "Unlocking Big Data", target: "Insurance" },

 { source: "Cybersecurity Evolution", target: "Innovation" },
 { source: "Cybersecurity Evolution", target: "Fourth Industrial Revolution" },
 { source: "Cybersecurity Evolution", target: "Digital Identity" },
 { source: "Cybersecurity Evolution", target: "The Digital Economy" },
 { source: "Cybersecurity Evolution", target: "Information and Communications Technology" },
 { source: "Cybersecurity Evolution", target: "International Security" },
 { source: "Cybersecurity Evolution", target: "Cybersecurity" },
 { source: "Cybersecurity Evolution", target: "Illicit Economy" },
 { source: "Cybersecurity Evolution", target: "Global Risks" },
 { source: "Cybersecurity Evolution", target: "Global Governance" },
]
export const strata = [
 { id: "Environmental Impact of Computing", value: "Circular Economy" },
 { id: "Environmental Impact of Computing", value: "Sustainable development" },
 { id: "Environmental Impact of Computing", value: "Climate Change" },
 { id: "Environmental Impact of Computing", value: "Mining and Metals" },
 { id: "Environmental Impact of Computing", value: "Energy Transition" },
 { id: "Environmental Impact of Computing", value: "Electricity" },
 { id: "Environmental Impact of Computing", value: "Advanced Materials" },
 { id: "Environmental Impact of Computing", value: "Future of the Environment" },
 { id: "Environmental Impact of Computing", value: "Artificial Intelligence" },

 { id: "Overcoming Technological Limitations", value: "Quantum Computing" },
 { id: "Overcoming Technological Limitations", value: "Energy Transition" },
 { id: "Overcoming Technological Limitations", value: "Innovation" },
 { id: "Overcoming Technological Limitations", value: "Fourth Industrial Revolution" },
 { id: "Overcoming Technological Limitations", value: "Biotechnology" },
 { id: "Overcoming Technological Limitations", value: "Advanced Materials" },
 { id: "Overcoming Technological Limitations", value: "Trade and Inveestment" },
 { id: "Overcoming Technological Limitations", value: "Future of the Environment" },
 { id: "New Computing Governance Models", value: "Fourth Industrial Revolution" },
 { id: "New Computing Governance Models", value: "Digital Identity" },
 { id: "New Computing Governance Models", value: "European Union" },
 { id: "New Computing Governance Models", value: "Artificial Intelligence" },
 { id: "New Computing Governance Models", value: "Corporate Governance" },
 { id: "New Computing Governance Models", value: "The Digital Economy" },
 { id: "New Computing Governance Models", value: "Agile Governance" },
 { id: "New Computing Governance Models", value: "Justice and Law" },
 { id: "New Computing Governance Models", value: "Internet Governance" },

 { id: "Widespread Applications", value: "Biotechnology" },
 { id: "Widespread Applications", value: "Artificial Intelligence" },
 { id: "Widespread Applications", value: "Precision Medicine" },
 { id: "Widespread Applications", value: "Information and Communications Technology" },
 { id: "Widespread Applications", value: "Retail, Consumer Goods and Lifestyle" },
 { id: "Widespread Applications", value: "Mobility" },
 { id: "Widespread Applications", value: "3D Printing" },
 { id: "Widespread Applications", value: "Internet of Things" },
 { id: "Widespread Applications", value: "Health and Healthcare" },
 { id: "Widespread Applications", value: "Future of Consumption" },
 { id: "Widespread Applications", value: "Education" },

 { id: "A Broader Computing Reach", value: "Biotechnology" },
 { id: "A Broader Computing Reach", value: "Advanced Manufacturing" },
 { id: "A Broader Computing Reach", value: "Artificial Intelligence" },
 { id: "A Broader Computing Reach", value: "Precision Medicine" },
 { id: "A Broader Computing Reach", value: "Mobility" },
 { id: "A Broader Computing Reach", value: "Health and Healthcare" },
 { id: "A Broader Computing Reach", value: "3D Printing" },
 { id: "A Broader Computing Reach", value: "Virtual and Augumennted Reality" },
 { id: "A Broader Computing Reach", value: "Supply Chains" },
 { id: "A Broader Computing Reach", value: "Automotive Industry" },
 { id: "Unlocking Big Data", value: "Quantum Computing" },
 { id: "Unlocking Big Data", value: "Digital Identity" },
 { id: "Unlocking Big Data", value: "Artificial Intelligence" },
 { id: "Unlocking Big Data", value: "The Digital Economy" },
 { id: "Unlocking Big Data", value: "Internet Governance" },
 { id: "Unlocking Big Data", value: "Retail, Consumer Goods and Lifestyle" },
 { id: "Unlocking Big Data", value: "Internet of Things" },
 { id: "Unlocking Big Data", value: "Virtual and Augumennted Reality" },
 { id: "Unlocking Big Data", value: "Media, Entertainment and Sport" },
 { id: "Unlocking Big Data", value: "Data Science" },
 { id: "Unlocking Big Data", value: "Human Rights" },
 { id: "Unlocking Big Data", value: "Behavioural Sciences" },
 { id: "Unlocking Big Data", value: "Values" },
 { id: "Unlocking Big Data", value: "Insurance" },

 { id: "Cybersecurity Evolution", value: "Innovation" },
 { id: "Cybersecurity Evolution", value: "Fourth Industrial Revolution" },
 { id: "Cybersecurity Evolution", value: "Digital Identity" },
 { id: "Cybersecurity Evolution", value: "The Digital Economy" },
 { id: "Cybersecurity Evolution", value: "Information and Communications Technology" },
 { id: "Cybersecurity Evolution", value: "International Security" },
 { id: "Cybersecurity Evolution", value: "Cybersecurity" },
 { id: "Cybersecurity Evolution", value: "Illicit Economy" },
 { id: "Cybersecurity Evolution", value: "Global Risks" },
 { id: "Cybersecurity Evolution", value: "Global Governance" },
]
// export const strat = [
//   Environmental Impact of Computing, Circular Economy 
//   Environmental Impact of Computing, Sustainable development 
//   Environmental Impact of Computing, Climate Change 
//   Environmental Impact of Computing, Mining and Metals 
//   Environmental Impact of Computing, Energy Transition 
//   Environmental Impact of Computing, Electricity 
//   Environmental Impact of Computing, Advanced Materials 
//   Environmental Impact of Computing, Future of the Environment 
//   Environmental Impact of Computing, Artificial Intelligence 
//   Overcoming Technological Limitations, Quantum Computing 
//   Overcoming Technological Limitations, Energy Transition 
//   Overcoming Technological Limitations, Innovation 
//   Overcoming Technological Limitations, Fourth Industrial Revolution 
//   Overcoming Technological Limitations, Biotechnology 
//   Overcoming Technological Limitations, Advanced Materials 
//   Overcoming Technological Limitations, Trade and Inveestment 
//   Overcoming Technological Limitations, Future of the Environment 
//   New Computing Governance Models, Fourth Industrial Revolution 
//   New Computing Governance Models, Digital Identity 
//   New Computing Governance Models, European Union 
//   New Computing Governance Models, Artificial Intelligence 
//   New Computing Governance Models, Corporate Governance 
//   New Computing Governance Models, The Digital Economy 
//   New Computing Governance Models, Agile Governance 
//   New Computing Governance Models, Justice and Law 
//   New Computing Governance Models, Internet Governance 
//   Widespread Applications, Biotechnology 
//   Widespread Applications, Artificial Intelligence 
//   Widespread Applications, Precision Medicine 
//   Widespread Applications, Information and Communications Technology 
//   Widespread Applications, Retail, Consumer Goods and Lifestyle 
//   Widespread Applications, Mobility 
//   Widespread Applications, 3D Printing 
//   Widespread Applications, Internet of Things 
//   Widespread Applications, Health and Healthcare 
//   Widespread Applications, Future of Consumption 
//   Widespread Applications, Education 
//   A Broader Computing Reach, Biotechnology 
//   A Broader Computing Reach, Advanced Manufacturing 
//   A Broader Computing Reach, Artificial Intelligence 
//   A Broader Computing Reach, Precision Medicine 
//   A Broader Computing Reach, Mobility 
//   A Broader Computing Reach, Health and Healthcare 
//   A Broader Computing Reach, 3D Printing 
//   A Broader Computing Reach, Virtual and Augumennted Reality 
//   A Broader Computing Reach, Supply Chains 
//   A Broader Computing Reach, Automotive Industry 
//   Unlocking Big Data, Quantum Computing 
//   Unlocking Big Data, Digital Identity 
//   Unlocking Big Data, Artificial Intelligence 
//   Unlocking Big Data, The Digital Economy 
//   Unlocking Big Data, Internet Governance 
//   Unlocking Big Data, Retail, Consumer Goods and Lifestyle 
//   Unlocking Big Data, Internet of Things 
//   Unlocking Big Data, Virtual and Augumennted Reality 
//   Unlocking Big Data, Media, Entertainment and Sport 
//   Unlocking Big Data, Data Science 
//   Unlocking Big Data, Human Rights 
//   Unlocking Big Data, Behavioural Sciences 
//   Unlocking Big Data, Values 
//   Unlocking Big Data, Insurance 
//   Cybersecurity Evolution, Innovation 
//   Cybersecurity Evolution, Fourth Industrial Revolution 
//   Cybersecurity Evolution, Digital Identity 
//   Cybersecurity Evolution, The Digital Economy 
//   Cybersecurity Evolution, Information and Communications Technology 
//   Cybersecurity Evolution, International Security 
//   Cybersecurity Evolution, Cybersecurity 
//   Cybersecurity Evolution, Illicit Economy 
//   Cybersecurity Evolution, Global Risks 
//   Cybersecurity Evolution, Global Governance 
// ]

