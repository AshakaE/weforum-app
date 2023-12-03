'use client'
import TransformationMap from '@/components/TransformationMap'
import Link from 'next/link'
import { dendrogram } from './assets/data'
import { ChangeEvent, SetStateAction, useEffect, useState } from 'react'
import PanelButton from '@/components/PanelButton'

export default function Home() {
    const [isFlex2, setIsFlex2] = useState(true)
    const [panelState, setPanelState] = useState({
        showPanel: true,
        panelText: 'Hide Panel',
        arrowHover: '',
    })
    const [selectedOption, setSelectedOption] = useState('Browse')
    const [readmore, setReadmore] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    const handleReadmore = () => {
        setReadmore(!readmore)
    }

    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(isChecked, selectedOption)
        setIsChecked(event.target.checked)
        setSelectedOption(event.target.value)
    }

    const handleArrow = () => {
        setPanelState({ ...panelState, arrowHover: 'max-w-[200px] pr-2' })
    }

    const handleArrowLeave = () => {
        setPanelState({ ...panelState, arrowHover: '' })
    }

    const handleButtonClick = () => {
        setIsFlex2(!isFlex2)
        setPanelState({
            ...panelState,
            showPanel: !panelState.showPanel,
            panelText: panelState.showPanel ? 'Show Panel' : 'Hide Panel',
        })
    }

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='flex justify-center items-center h-full overflow-hidden flex-3'>
                <div className='w-full relative h-full'>
                    <div className='w-full h-[calc(100%-2rem)] box-border p-8'>
                        <TransformationMap data={dendrogram} />
                    </div>
                    <div className='p-12'>
                        <button className='flex items-center justify-center px-5 py-2.5 text-base cursor-pointer rounded-full transition duration-300 ease-in-out border-none dark:text-opacity-60 text-black hover:text-opacity-100  dark:text-white bg-bgLight dark:bg-neutral-800 focus:outline-none h-10 hover:bg-white dark:hover:text-white'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-[14px] h-[14px] mr-2'
                                fill='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            >
                                <path
                                    d='M6 1c-.56 0-1-.44-1-1v-9.586L.707-5.293a.99.99 0 0 1-1.414 0 .99.99 0 0 1 0-1.414l6-6a1.002 1.002 0 0 1 1.414 0l6 6a.99.99 0 0 1 0 1.414.99.99 0 0 1-1.414 0L7-9.586V0c0 .56-.44 1-1 1z'
                                    transform='rotate(-90 13.002 .002)'
                                ></path>
                            </svg>
                            <div className='text-base'>Discover</div>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`relative transition-flexWidth duration-300 ease-in-out max-w-[800px] ${
                    isFlex2 ? 'flex-2' : 'flex-11 w-0'
                }`}
            >
                <button
                    onClick={handleButtonClick}
                    onMouseEnter={handleArrow}
                    onMouseLeave={handleArrowLeave}
                    className='flex items-center justify-center px-[13px] text-base cursor-pointer rounded-full transition duration-300 ease-in-out border-none dark:text-opacity-60 hover:text-opacity-100 text-black dark:text-white bg-bgLight hover:bg-white dark:bg-neutral-800 focus:outline-none h-10 absolute bottom-12 right-panelButton dark:hover:text-white'
                >
                    <div className='flex items-center whitespace-nowrap'>
                        <span
                            className={`text-base overflow-hidden transition-max-width transition-padding duration-300 ease-in-out px-0.5 py-0 ${
                                panelState.arrowHover
                            }  ${
                                !panelState.showPanel
                                    ? 'max-w-0 pr-0'
                                    : panelState.panelText === 'Show Panel'
                                    ? 'hover:max-w-[200px] hover:pl-0 hover:pr-2'
                                    : 'pr-[0.5rem]'
                            } `}
                        >
                            {panelState.panelText}
                        </span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className={`w-[14px] h-[14px] ${
                                panelState.showPanel ? 'rotate-180' : ''
                            }`}
                            fill='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        >
                            <path
                                d='M6 1c-.56 0-1-.44-1-1v-9.586L.707-5.293a.99.99 0 0 1-1.414 0 .99.99 0 0 1 0-1.414l6-6a1.002 1.002 0 0 1 1.414 0l6 6a.99.99 0 0 1 0 1.414.99.99 0 0 1-1.414 0L7-9.586V0c0 .56-.44 1-1 1z'
                                transform='rotate(-90 13.002 .002)'
                            ></path>
                        </svg>
                    </div>
                </button>
                <div className='w-full h-full overflow-hidden'>
                    <div className='overflow-y-auto h-full box-border pb-4 scroll-smooth'>
                        <div className='overflow-hidden transition-max-height duration-300 ease-in-out my-[3rem] mr-0 ml-[5px]'>
                            <div className='pb-4'>
                                <figure className=' bg-white rounded-md p-8 md:p-0 dark:bg-neutral-800 rounded-t-md mr-12'>
                                    <div className='relative bg-gray-700 rounded-full'>
                                        <div
                                            className='w-full bg-cover bg-center h-40 rounded-t-md'
                                            style={{
                                                backgroundImage: `url('https://imageproxy-prod.ent.sdy.ai/v1/image/1500x/https://fws.weforum.org/images/topics/a1Gb0000001jJm3EAE/original')`,
                                            }}
                                        ></div>
                                        <div className='absolute top-0 left-0 w-full h-full text-white text-base px-6 py-[1.8rem] box-border flex flex-col justify-end bg-overlayWhite rounded-t-md'>
                                            <h2 className='text-[1.4rem] font-bold my-2 mx-0'>
                                                Future of Computing: A Broader
                                                Computing Reach
                                            </h2>
                                            <div className='text-base font-bold'>
                                                Curation: University of
                                                Innsbruck
                                            </div>
                                        </div>
                                    </div>

                                    <div className='p-4  space-y-4'>
                                        <p className='text-base font-bold leading-[19px] mt-0 dark:text-white text-panelTextLightBlack'>
                                            For computing to continue
                                            progressing at a swift pace, it
                                            needs to become more essential in
                                            more fields
                                        </p>
                                        <blockquote
                                            className={`${
                                                readmore
                                                    ? 'max-h-[1000px]'
                                                    : 'max-h-[76px]'
                                            } overflow-hidden transition-[max-height] duration-300 ease-in-out`}
                                        >
                                            <div className='m-0 text-[0.9rem] leading-[19px] text-panelTextLight dark:text-panelText'>
                                                <p>
                                                    Computers have evolved from
                                                    calculating machines to
                                                    essential equipment for
                                                    work, entertainment, and
                                                    daily communication. Laptops
                                                    and tablets are already
                                                    being used as training aids
                                                    in primary schools, and the
                                                    borders between computers,
                                                    video game consoles, and TV
                                                    screens are nearly
                                                    non-existent as more movies,
                                                    shows and games are being
                                                    stored in the cloud and made
                                                    available on demand. The
                                                    next logical step is
                                                    entertainment that takes
                                                    place not on pre-determined
                                                    screens, but in augmented
                                                    reality wherever a viewer
                                                    might be. For computing to
                                                    continue at its current rate
                                                    of growth, its integration
                                                    will have to spread further.
                                                    One significant area that
                                                    may be increasingly
                                                    penetrated is the
                                                    biotechnology and health
                                                    sector. Biological and
                                                    medical research at the
                                                    molecular level - in
                                                    particular DNA research -
                                                    provides a means of
                                                    predicting allergies and
                                                    disease, including cancers.
                                                    This research can be
                                                    computationally intensive,
                                                    as it takes into account
                                                    factors like a person’s DNA
                                                    information and details
                                                    about their full family
                                                    tree. However, the
                                                    challenges this presents
                                                    must be viewed not just in
                                                    relation to the limits of
                                                    technology and the laws of
                                                    physics, but also relative
                                                    to social norms.
                                                </p>
                                                <p className='mt-[0.8rem]'>
                                                    The further spread of
                                                    computing’s impact on
                                                    biology and medicine will
                                                    rely on a tighter
                                                    integration of computer
                                                    science and biomedical
                                                    research. For example,
                                                    next-generation computers
                                                    could support drug design in
                                                    a way that helps suppress
                                                    side-effects, or strengthens
                                                    desired effects. This sort
                                                    of computational capacity
                                                    could also penetrate
                                                    autonomous logistics and
                                                    production in a way that
                                                    improves mobility. Better
                                                    self-driving cars, for
                                                    example, could lower the
                                                    risk of accidents. And the
                                                    same underlying math used to
                                                    develop self-driving cars
                                                    can also be applied to
                                                    optimizing production lines,
                                                    and to improving power
                                                    distribution (especially in
                                                    the face of an impending
                                                    increase in power demand
                                                    when electric vehicles
                                                    become more popular).
                                                    Similar optimization can be
                                                    applied to finance, in the
                                                    form of portfolio management
                                                    or high-speed trading, for
                                                    example. It is important to
                                                    note that the growth of
                                                    computing is tied not just
                                                    to better and more powerful
                                                    hardware with greater
                                                    amounts of memory; progress
                                                    has also come in the form of
                                                    entirely new architectures
                                                    like quantum computing,
                                                    neural computing, and
                                                    quantum-inspired algorithms
                                                    that provide a new and
                                                    potentially speedier way to
                                                    perform calculations.
                                                </p>
                                            </div>
                                            <div>
                                                <p className='mt-[0.6rem] mx-0 mb-[0.4rem] text-base leading-[19px] font-bold dark:text-white text-panelTextLightBlack'>
                                                    Parent Topic
                                                </p>
                                                <Link
                                                    href='/join-us'
                                                    className='cursor-pointer text-white font-bold'
                                                >
                                                    <div className='transition-colors duration-300 ease-in-out bg-bgLight dark:bg-black text-black dark:text-white px-5 py-2.5 rounded-full inline-block  border border-gray-400 mt-4 mr-4 font-normal items-center cursor-pointer whitespace-nowrap overflow-hidden max-w-[250px] hover:bg-white dark:hover:bg-neutral-800 '>
                                                        Future of Computing
                                                    </div>
                                                </Link>
                                                <p className='text-base mt-[0.6rem] mx-0 mb-[0.4rem] font-bold dark:text-white text-panelTextLightBlack'>
                                                    Curation
                                                </p>
                                                <p className='text-[0.9rem]'>
                                                    This issue is defined and
                                                    incorporated into this
                                                    transformation map by
                                                    University of Innsbruck.
                                                </p>
                                                <p className='text-[0.9rem]'>
                                                    © 2023 World Economic Forum.
                                                </p>
                                            </div>
                                        </blockquote>
                                        <div className='flex justify-between'>
                                            <div
                                                onClick={handleReadmore}
                                                className='font-bold text-[0.9rem] cursor-pointer mt-4 text-black dark:text-white text-opacity-[0.7] hover:text-opacity-100 transition-[color] duration-300 ease-in-out'
                                            >
                                                Read more
                                            </div>
                                        </div>
                                        <figcaption className='font-medium'>
                                            <div className='my-6 grid grid-cols-panelGrid gap-4 justify-center'>
                                                <PanelButton buttonText='Share' />
                                                <PanelButton buttonText='Embed' />
                                            </div>
                                        </figcaption>
                                    </div>
                                </figure>
                            </div>
                            <div>
                                <div className='mt-0 mr-[3rem] mb-[2rem] ml-0'>
                                    <div className='flex justify-between border-b-[1px] border-solid border-opacity-[0.12] border-black dark:border-white pb-2.5 mb-4 w-full items-center'>
                                        <h2 className='text-capitalize m-0 text-2xl h-1.5rem text-black dark:text-white block table-fit-content'>
                                            Browse
                                        </h2>
                                    </div>
                                    <div className='bg-panelRadio dark:bg-neutral-800 text-opacity-75 font-bold text-white p-2 rounded-full flex justify-between gap-2'>
                                        <input
                                            type='radio'
                                            name='option'
                                            id='Browse'
                                            value='Browse'
                                            className='peer hidden'
                                            checked={
                                                selectedOption === 'Browse'
                                            }
                                            onChange={handleOptionChange}
                                        />
                                        <label
                                            htmlFor='Browse'
                                            className={`flex-1 flex-grow py-2.5 text-center rounded-full transition-colors duration-300 ease-in-out ${
                                                selectedOption === 'Browse'
                                                    ? 'bg-white text-black'
                                                    : 'text-black dark:text-white'
                                            }`}
                                        >
                                            Browse
                                        </label>
                                        <input
                                            type='radio'
                                            name='option'
                                            id='Latest'
                                            value='Latest'
                                            className='peer hidden'
                                            checked={
                                                selectedOption === 'Latest'
                                            }
                                            onChange={handleOptionChange}
                                        />
                                        <label
                                            htmlFor='Latest'
                                            className={`flex-1 flex-grow py-2.5 text-center rounded-full transition-colors duration-300 ease-in-out ${
                                                selectedOption === 'Latest'
                                                    ? 'bg-white text-black '
                                                    : 'text-black dark:text-white'
                                            }`}
                                        >
                                            Latest
                                        </label>
                                    </div>
                                </div>
                                <div className='mt-0 mr-[3rem] mb-[2rem] ml-0 p-6 bg-black dark:bg-gray-200 dark:text-black text-white flex flex-col relative min-h-50 max-h-600 transition-height ease-in-out duration-300 border rounded-md'>
                                    <div className='mb-5 mr-5'>
                                        <div className='uppercase font-bold mb-4 text-panelText dark:text-panelTextLight'>
                                            free access
                                        </div>
                                        <h3 className='font-bold text-[1.4rem] m-0'>
                                            Join us or Sign in
                                        </h3>
                                        <p className='mt-4 mb-0 mx-0 text-base leading-[1.4rem]'>
                                            Expert analysis on 250+ global
                                            issues
                                        </p>
                                        <p className='mt-4 mb-0 mx-0 text-base leading-[1.4rem]'>
                                            Latest research and analysis from
                                            the world’s leading research
                                            institutions
                                        </p>
                                    </div>
                                    <div className='flex space-x-4'>
                                        <Link
                                            href='/join-us'
                                            className='flex items-center justify-center h-10 px-7 text-base cursor-pointer rounded-full transition duration-300 ease-in-out border-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'
                                        >
                                            Join us
                                        </Link>
                                        <Link
                                            href='/sign-in'
                                            className='flex items-center justify-center h-10 px-7 text-base cursor-pointer rounded-full transition duration-300 ease-in-out border-2 border-white dark:border-blue-600 text-white bg-white bg-opacity-0 hover:bg-opacity-[0.19]  dark:hover:bg-buttonLightHover dark:text-blue-600 focus:outline-none'
                                        >
                                            Sign in
                                        </Link>
                                    </div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 48 48'
                                        className='absolute rounded-[20px] ml-[3rem] text-panelTextLight w-[25px] h-[25px] top-[17px] right-[17px] dark:hover:text-black dark:hover:bg-black hover:text-white hover:bg-white hover:bg-opacity-[0.06] dark:hover:bg-opacity-[0.06] transition-all ease-in-out duration-300'
                                    >
                                        <path
                                            d='M46.002 0l-22 22.015L1.999 0 0 1.998l22.015 22L0 46.001 1.998 48l22-22.015 22.004 22.01L48 45.997l-22.015-22L48 1.998 46.002 0z'
                                            fill='currentColor'
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            P A N E L ! ! !
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
