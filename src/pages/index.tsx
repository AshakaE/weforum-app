import '../globals.css'
import React from 'react'
import RadialDendrogram from '../app/components/RadialDendrogram'
import { dendrogramData } from '@/app/data'

const Home = () => {
    // Replace this data with your actual data structure

    return (
        <div>
            <h1 className='text-red-500 text-6xl'>Radial Dendrogram Example</h1>
            <RadialDendrogram data={dendrogramData} />
        </div>
    )
}

export default Home
