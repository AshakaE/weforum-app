import Link from 'next/link'
import React, { SVGProps, useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'

interface PanelButtonProps {
    buttonText: string
}

export default function NavbarDropdown() {
    // const [isHovered, setIsHovered] = useState(false)

    // const handleButtonHover = () => {
    //     setIsHovered(true)
    // }

    // const handleButtonLeave = () => {
    //     setIsHovered(false)
    // }

    return (
        <div className='absolute min-w-[265px] top-full pt-0 border rounded-xl overflow-visible right-0 z-50'>
            <div className='w-full shadow-md overflow-auto max-h-navDrop bg-white rounded-xl'>
                <div>
                    <div
                        // href='#'
                        className='transition duration-300 ease-in-out flex  cursor-pointer text-basefont-bold px-12 py-26 text-opacity-60 hover:text-opacity-100 text-black no-underline'
                    >
                        Full screen
                    </div>
                </div>
                <div>
                    <div
                        // href='#'
                        className='transition duration-300 ease-in-out flex  cursor-pointer text-basefont-bold px-12 py-26 text-opacity-60 hover:text-opacity-100 text-black no-underline'
                    >
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
            {/* <div className='w-full shadow-md rounded-10 overflow-auto max-h-navDrop bg-white'>
            </div> */}
        </div>
    )
}
