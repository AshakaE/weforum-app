function generateRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function generateHierarchy(data) {
    const uniqueIds = Array.from(new Set(data.map((item) => item.id)))
    const uniqueValues = Array.from(new Set(data.map((item) => item.value)))

    const hierarchy = {
        name: '',
        children: [],
        linkList: [],
    }

    for (const id of uniqueIds) {
        const childrenData = data.filter((item) => item.id === id)
        const idIndex = uniqueIds.indexOf(id)

        const parentNode = {
            name: id,
            children: [],
            color: generateRandomColor(), // Generate a random color for each parent node
        }

        const uniqueChildIds = new Set()

        for (const child of childrenData) {
            const valueIndex = uniqueValues.indexOf(child.value)

            const childId = 1000 + idIndex
            if (!uniqueChildIds.has(childId)) {
                parentNode.children.push({
                    id: childId,
                })
                uniqueChildIds.add(childId)
            }

            hierarchy.linkList.push({
                source: 10000 + valueIndex,
                target: childId,
                thickness: 1,
            })
        }

        hierarchy.children.push(parentNode)
    }

    const usersNode = {
        name: 'users',
        children: [
            {
                name: 'users',
                children: uniqueValues.map((value, index) => ({
                    id: 10000 + index,
                    name: value,
                })),
            },
        ],
    }

    hierarchy.children.push(usersNode)

    return hierarchy
}

// Example usage:
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

const result = generateHierarchy(data)
// console.log(JSON.stringify(result, null, 2))


{
  "person": [
    {
      "id": 1000000,
      "name": "Circular Economy",
      "profile": "000000000000000000",
      "url": "https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "values": [
        "Environmental Impact of Computing"
      ]
    },
    {
      "id": 1000001,
      "name": "Sustainable development",
      "profile": "000000000000000000",
      "url": "https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "values": [
        "Environmental Impact of Computing"
      ]
    },
    {
      "id": 1000002,
      "name": "Climate Change",
      "profile": "000000000000000000",
      "url": "https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "values": [
        "Environmental Impact of Computing"
      ]
    },
    {
      "id": 1000003,
      "name": "Mining and Metals",
      "profile": "000000000000000000",
      "url": "https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "values": [
        "Environmental Impact of Computing"
      ]
    },
    {
      "id": 1000004,
      "name": "Energy Transition",
      "profile": "000000000000000000",
      "url": "https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "values": [
        "Environmental Impact of Computing"
      ]
    },
    {
      "id": 1000005,
      "name": "Electricity",
      "profile": "000000000000000000",
      "url": "https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "values": [
        "Environmental Impact of Computing"
      ]
    },
    {
      "id": 1000006,
      "name": "Advanced Materials",
      "profile": "000000000000000000",
      "url": "https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "values": [
        "Environmental Impact of Computing"
      ]
    },
    {
      "id": 1000007,
      "name": "Future of the Environment",
      "profile": "000000000000000000",
      "url": "https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "values": [
        "Environmental Impact of Computing"
      ]
    },
    {
      "id": 1000008,
      "name": "Artificial Intelligence",
      "profile": "000000000000000000",
      "url": "https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      "values": [
        "Environmental Impact of Computing"
      ]
    }
  ],
  "object": [
    {
      "id": 100000,
      "name": "Environmental Impact of Computing",
      "values": []
    },
  ]
}
