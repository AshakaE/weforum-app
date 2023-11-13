import '../globals.css'
import React from 'react'
import RadialDendrogram from '../app/components/RadialDendrogram'
import { dendrogramData, v } from '@/app/data'
import Dendrogram from '../app/components/build'
import IndexPage from '../app/components/build'

const data = {
    name: 'Eve',
    children: [
        { name: 'Cain' },
        { name: 'Seth', children: [{ name: 'Enos' }, { name: 'Noam' }] },
        { name: 'Abel', children: [{ name: 'Enos' }, { name: 'Noam' }] },
        { name: 'Awan', children: [{ name: 'Enoch' }] },
        { name: 'Azura' },
    ],
}

const Home = () => {
    // Replace this data with your actual data structure

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-red-500 text-6xl'>Radial Dendrogram Example</h1>
            {/* <RadialDendrogram data={dendrogramData} /> */}
            <IndexPage/>
            {/* <Dendrogram data={v} /> */}
        </div>
    )
}

export default Home
