'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavbarDropdown from './NavbarDropdown'

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false)

    const handleButtonHover = () => {
        setIsHovered(true)
    }

    const handleButtonLeave = () => {
        setIsHovered(false)
    }
    return (
        <nav className='bg-white dark:bg-bgDark py-4 shadow-wfShadow h-20 sticky top-0 z-[100]'>
            <div className='mx-6 flex justify-between items-center'>
                <div className=' flex justify-center items-center'>
                    <Link
                        href='/'
                        className='text-black dark:text-white opacity-60 hover:opacity-100 text-base font-bold transition-opacity duration-wf-300 ease-wf delay-wf-none flex justify-center items-center px-5'
                    >
                        <div>Discover</div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 48 48'
                            className='rotate-90 ml-2.5 w-2.5 h-2.5'
                        >
                            <path
                                d='M11.014 1.013a3.427 3.427 0 014.864 0l20.557 20.556a3.43 3.43 0 010 4.865L15.878 46.992a3.44 3.44 0 01-4.864-4.864l18.09-18.159L10.947 5.81a3.427 3.427 0 01.068-4.797z'
                                fill='currentColor'
                            ></path>
                        </svg>
                    </Link>
                    <Link
                        href='/'
                        className='text-black dark:text-white opacity-60 hover:opacity-100 text-base font-bold transition-opacity duration-wf-300 ease-wf delay-wf-none  flex justify-center items-center px-5'
                    >
                        <div>Monitor</div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 16 16'
                            className='h-4 ml-2.5'
                        >
                            <path
                                d='M99.8 44.181a.836.836 0 0 1-.39-.1l-4.038-2.123-4.038 2.123a.836.836 0 0 1-1.213-.881l.771-4.5-3.267-3.184a.836.836 0 0 1 .463-1.426l4.512-.65 2.019-4.091a.836.836 0 0 1 1.5 0l2.019 4.091 4.515.656a.836.836 0 0 1 .463 1.426l-3.267 3.185.771 4.5a.838.838 0 0 1-.823.978zm-4.428-3.313a.837.837 0 0 1 .389.1l3.736 1.964-.714-4.16a.837.837 0 0 1 .241-.74l3.022-2.946-4.176-.607a.836.836 0 0 1-.629-.457l-1.871-3.789-1.87 3.785a.836.836 0 0 1-.63.457l-4.176.607 3.022 2.946a.836.836 0 0 1 .24.74l-.713 4.16 3.735-1.964a.836.836 0 0 1 .389-.1zm7.131-5.719z'
                                transform='translate(-87.369 -28.883)'
                                fill='currentColor'
                            ></path>
                        </svg>
                    </Link>
                    <Link
                        href='/'
                        className='text-black dark:text-white opacity-60 hover:opacity-100 text-base font-bold transition-opacity duration-wf-300 ease-wf delay-wf-none flex justify-center items-center px-5'
                    >
                        <div>Create</div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 16 16'
                            className='h-4 ml-2.5'
                        >
                            <path
                                d='M99.8 44.181a.836.836 0 0 1-.39-.1l-4.038-2.123-4.038 2.123a.836.836 0 0 1-1.213-.881l.771-4.5-3.267-3.184a.836.836 0 0 1 .463-1.426l4.512-.65 2.019-4.091a.836.836 0 0 1 1.5 0l2.019 4.091 4.515.656a.836.836 0 0 1 .463 1.426l-3.267 3.185.771 4.5a.838.838 0 0 1-.823.978zm-4.428-3.313a.837.837 0 0 1 .389.1l3.736 1.964-.714-4.16a.837.837 0 0 1 .241-.74l3.022-2.946-4.176-.607a.836.836 0 0 1-.629-.457l-1.871-3.789-1.87 3.785a.836.836 0 0 1-.63.457l-4.176.607 3.022 2.946a.836.836 0 0 1 .24.74l-.713 4.16 3.735-1.964a.836.836 0 0 1 .389-.1zm7.131-5.719z'
                                transform='translate(-87.369 -28.883)'
                                fill='currentColor'
                            ></path>
                        </svg>
                    </Link>
                </div>
                <div className='flex justify-between items-center'>
                    <Link href='/services'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 60 37'
                            className='text-black w-[84px] dark:text-white'
                        >
                            <path
                                d='M20.735 6.128a4.036 4.036 0 01-.138-.9 2.42 2.42 0 012.549-2.549c.326.007.65.054.964.138.276-.207.62-.482.9-.689a3.412 3.412 0 00-1.86-.482 3.6 3.6 0 00-3.169 5.511.687.687 0 01.276-.344c.207-.276.344-.482.482-.689M25.628 2.546l-.827.62a2.527 2.527 0 01.9 2.067 2.5 2.5 0 01-2.549 2.55 2.274 2.274 0 01-2-.965c-.069.138-.207.207-.276.344a2.416 2.416 0 00-.344.551 3.686 3.686 0 002.687 1.1 3.59 3.59 0 003.72-3.582 3.87 3.87 0 00-1.31-2.685zM19.15 14.532a2.564 2.564 0 01-1.584 2.411v1.1A3.541 3.541 0 0020.32 14.6a3.68 3.68 0 00-1.722-3.03c-.138.343-.207.688-.344.963a2.392 2.392 0 01.9 2M16.81 17.081h-.208a2.5 2.5 0 01-2.549-2.549 2.419 2.419 0 012.55-2.549c.354-.005.706.066 1.032.207.084-.332.2-.654.344-.964a4.448 4.448 0 00-1.309-.276 3.677 3.677 0 00-3.72 3.582 3.59 3.59 0 003.72 3.582h.207v-.62a.875.875 0 01-.069-.413M19.22 21.352a2.458 2.458 0 012.549 2.549 2.523 2.523 0 01-1.86 2.48c.207.276.345.62.55.9a3.556 3.556 0 002.48-3.375 3.757 3.757 0 00-5.166-3.307l.207 1.033a2.7 2.7 0 011.24-.276M16.671 23.9a2.94 2.94 0 01.69-1.86c-.07-.344-.208-.758-.277-1.1a3.5 3.5 0 00-1.584 2.962 3.588 3.588 0 003.72 3.582h.482c-.207-.344-.413-.62-.62-.964a2.574 2.574 0 01-2.41-2.618M37.13 20.456v4.133c0 .964-.344 1.86-1.515 1.86-1.24 0-1.516-.9-1.516-1.86v-4.133h-1.1v4.34a2.687 2.687 0 005.373 0v-4.34h-1.24M38.023 7.643h3.1v.964h-4.2V1.719h1.1v5.924zM0 11.088h4v1.033H1.1v1.584h2.824v1.033H1.1v2.2H4v1.033H0v-6.883zM22.595 10.743l4.753 4.822v-4.478h1.1v7.164l-4.684-4.822v4.546h-1.169v-7.232zM50.838 11.088h1.102v6.89h-1.102v-6.89zM11.09 21.42v1.653h2.412v1.033H11.09v3.238H9.92v-6.888h3.65v.964h-2.48zM15.637 6.06l1.1-4.34h1.1l-1.929 7.163-2.41-5.166-2.412 5.166L9.157 1.72h1.1l1.1 4.34 2.135-4.478 2.135 4.478M41.88 13.636l-1.1 4.34h-1.1l1.928-7.164 2.411 5.166 2.411-5.166 1.93 7.164h-1.1l-1.1-4.34-2.14 4.476-2.136-4.478M42.499 23.005l-1.1 4.34h-1.1l1.929-7.164 2.41 5.166 2.412-5.166 1.929 7.164h-1.1l-1.1-4.34-2.14 4.476-2.135-4.478M27.21 20.456a3.712 3.712 0 011.929.344 1.8 1.8 0 01.9 1.653 1.934 1.934 0 01-1.722 1.929l2.2 2.962h-1.31l-2.066-2.888h-.76v2.893h-1.1v-6.893h1.929zm-.758 3.1h.55c.9 0 1.93 0 1.93-1.1s-1.171-1.033-2-1.033h-.482l.002 2.133zM31.068 1.72a3.71 3.71 0 011.929.343 1.8 1.8 0 01.9 1.653 1.934 1.934 0 01-1.722 1.93l2.2 2.961h-1.171L31.137 5.72h-.76v2.893h-1.1V1.72h1.79zm-.758 3.1h.55c.9 0 1.93 0 1.93-1.1s-1.171-1.034-2-1.034h-.482l.002 2.133zM44.294 7.643h.69c1.514 0 2.961-.551 2.961-2.48 0-2-1.447-2.48-2.962-2.48h-.689v4.96zm.69-5.924c2.134 0 3.926 1.033 3.926 3.375 0 2.411-1.722 3.444-4 3.444h-1.856V1.719h1.93zM59.449 16.805c-.38.204-.81.3-1.24.276a2.5 2.5 0 01-2.55-2.549 2.42 2.42 0 012.55-2.549c.427.01.848.104 1.24.275l.55-.827a4.138 4.138 0 00-1.86-.482 3.677 3.677 0 00-3.72 3.582 3.592 3.592 0 003.72 3.582 3.412 3.412 0 001.86-.482l-.55-.827M11.091 16.805c-.38.204-.81.3-1.24.276a2.5 2.5 0 01-2.549-2.549 2.42 2.42 0 012.549-2.549c.427.01.848.104 1.24.275l.551-.827a4.138 4.138 0 00-1.86-.482 3.677 3.677 0 00-3.72 3.582 3.59 3.59 0 003.72 3.582 3.412 3.412 0 001.86-.482l-.551-.827M37.062 14.532a2.419 2.419 0 00-2.55-2.549 2.458 2.458 0 00-2.548 2.549 2.55 2.55 0 005.1 0h-.002zm1.173 0a3.723 3.723 0 01-7.44 0 3.633 3.633 0 013.72-3.582 3.677 3.677 0 013.718 3.582h.002z'
                                fill='currentColor'
                            ></path>
                            <path
                                d='M48.29 31.823a19.432 19.432 0 01-24.73-.207l-.551.62a20.459 20.459 0 0013.02 4.753c4.67.02 9.2-1.588 12.813-4.547l-.551-.62'
                                fill='#004B86'
                            ></path>
                            <path
                                d='M48.083 31.685a19.232 19.232 0 01-25.419-1.1A18.138 18.138 0 0120.53 7.026 19.189 19.189 0 0129.28.344L29.14 0a19.38 19.38 0 00-8.886 6.82 18.477 18.477 0 002.2 24.041 19.235 19.235 0 0013.571 5.511 19.505 19.505 0 0012.331-4.34l-.276-.344'
                                fill='#004B86'
                            ></path>
                        </svg>
                    </Link>
                </div>
                <div className='flex justify-between items-center'>
                    <Link
                        href='/about'
                        className='text-black dark:text-white opacity-60 hover:opacity-100 text-base font-bold transition-opacity duration-wf-300 ease-wf delay-wf-none flex justify-center items-center px-5'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            viewBox='0 0 24 24'
                            className='w-6'
                        >
                            <path
                                d='M23 24L16 17'
                                stroke-linecap='round'
                            ></path>
                            <circle cx='10' cy='10' r='9'></circle>
                        </svg>
                    </Link>
                    <div
                        className='text-black dark:text-white opacity-60 hover:opacity-100 text-base font-bold transition-opacity duration-wf-300 ease-wf delay-wf-none flex justify-center items-center px-5 relative'
                        onMouseEnter={handleButtonHover}
                        onMouseLeave={handleButtonLeave}
                    >
                        <div className='flex justify-center items-center'>
                            <div className='mr-2 w-2 h-2 opacity-100 bg-red-500 rounded-full'></div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                className='w-6 h-6'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-width='2'
                                    d='M18.433 18.43h-.001c-.638.638-1.087 1.372-1.3 2.213a4.836 4.836 0 0 0-.095 1.812c-.282.13-.57.25-.865.359-1.014-1.28-2.548-2.124-4.172-2.124-1.625 0-3.16.843-4.173 2.124a11.606 11.606 0 0 1-.865-.358 4.833 4.833 0 0 0-.095-1.814c-.214-.84-.663-1.573-1.3-2.211-.637-.638-1.37-1.087-2.211-1.3a4.843 4.843 0 0 0-1.814-.094c-.13-.282-.249-.571-.357-.865 1.277-1.015 2.122-2.548 2.122-4.173 0-1.676-.887-2.98-2.117-3.9.108-.295.228-.584.359-.867 1.639.145 2.975-.62 4.017-1.665.64-.637 1.089-1.37 1.302-2.21a4.838 4.838 0 0 0 .094-1.816c.282-.13.57-.25.864-.357 1.014 1.278 2.546 2.123 4.173 2.123 1.624 0 3.158-.845 4.171-2.123.294.108.583.227.865.357a4.841 4.841 0 0 0 .095 1.815c.213.841.662 1.574 1.299 2.21 1.043 1.045 2.38 1.81 4.018 1.666.13.283.25.572.36.868-1.232.919-2.12 2.223-2.12 3.9 0 1.674.89 2.979 2.123 3.898-.109.296-.229.585-.36.868-1.638-.143-2.974.622-4.017 1.664Z'
                                ></path>
                                <circle
                                    cx='12'
                                    cy='12'
                                    r='4'
                                    stroke='currentColor'
                                    stroke-width='2'
                                ></circle>
                            </svg>
                        </div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 48 48'
                            className='w-2.5 h-2.5 ml-2.5 rotate-90'
                        >
                            <path
                                d='M11.014 1.013a3.427 3.427 0 014.864 0l20.557 20.556a3.43 3.43 0 010 4.865L15.878 46.992a3.44 3.44 0 01-4.864-4.864l18.09-18.159L10.947 5.81a3.427 3.427 0 01.068-4.797z'
                                fill='currentColor'
                            ></path>
                        </svg>

                        { isHovered && <NavbarDropdown /> }
                    </div>
                    <div className='gap-4 flex'>
                        <Link
                            href='/join-us'
                            className='flex items-center justify-center h-10 px-7 text-base cursor-pointer rounded-full transition duration-300 ease-in-out border-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'
                        >
                            Join us
                        </Link>
                        <Link
                            href='/sign-in'
                            className='flex items-center justify-center h-10 px-7 text-base cursor-pointer rounded-full transition duration-300 ease-in-out border-2 border-blue-600 dark:border-white text-blue-600 dark:text-white hover:bg-buttonLightHover dark:hover:bg-buttonDarkHover dark:hover:text-white focus:outline-none'
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
