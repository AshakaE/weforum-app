import React, { SVGProps, useState } from 'react'

interface PanelButtonProps {
    buttonText: string
}

export default function PnaelButton({ buttonText }: PanelButtonProps) {
    const [isHovered, setIsHovered] = useState(false)

    const handleButtonHover = () => {
        setIsHovered(true)
    }

    const handleButtonLeave = () => {
        setIsHovered(false)
    }

    return (
        <button
            className='p-0 bg-transparent cursor-pointer text-center w-16 text-panelTextLight dark:text-panelText hover:text-black dark:hover:text-white relative transition duration-300 ease-in-out flex flex-col items-center'
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
        >
            <div
                className={`w-16 h-16 flex justify-center items-center rounded-md transition duration-300 ease-in-out ${
                    isHovered ? 'dark:bg-panelSvg bg-neutral-200' : ''
                }`}
            >
                {buttonText === 'Embed' ? (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 28 15'
                        className='w-7 h-7'
                    >
                        <path
                            transform='translate(1 1.342)'
                            fill='none'
                            d='M0 0h26v12H0z'
                        ></path>
                        <g>
                            <path
                                transform='translate(1 1.342)'
                                fill='none'
                                d='M0 0h26v12H0z'
                            ></path>
                            <g stroke='none' fill='none'>
                                <g>
                                    <path
                                        d='M.3 6.293a.99.99 0 0 0 0 1.414.99.99 0 0 0 1.414 0L7 2.414l5.3 5.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6z'
                                        transform='rotate(90 13.831 14.169)'
                                    ></path>
                                    <path
                                        d='M13.004 8.004a.997.997 0 0 1-.707-.297L7.004 2.414 1.711 7.707a.99.99 0 0 1-1.414 0 .99.99 0 0 1 0-1.414l6-6A.99.99 0 0 1 7.004 0a.99.99 0 0 1 .707.293l6 6a.99.99 0 0 1 0 1.414.997.997 0 0 1-.707.297z'
                                        fill='currentColor'
                                        transform='rotate(90 13.831 14.169)'
                                    ></path>
                                </g>
                                <g>
                                    <path
                                        d='M1 0a.99.99 0 0 0-1 1 .99.99 0 0 0 1 1h13.416a.99.99 0 0 0 1-1 .99.99 0 0 0-1-1z'
                                        transform='rotate(116.565 8.895 6.115)'
                                    ></path>
                                    <path
                                        d='M1 0h13.416c.56 0 1 .44 1 1s-.44 1-1 1H1c-.56 0-1-.44-1-1s.44-1 1-1z'
                                        fill='currentColor'
                                        transform='rotate(116.565 8.895 6.115)'
                                    ></path>
                                </g>
                                <g>
                                    <path
                                        d='M.3 1.711A.99.99 0 0 1 .3.3a.99.99 0 0 1 1.411 0L7 5.59 12.3.3a.99.99 0 0 1 1.414 0 .99.99 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6z'
                                        transform='rotate(90 3.833 4.171)'
                                    ></path>
                                    <path
                                        d='M1.004 0c.255 0 .51.099.707.297L7.004 5.59 12.297.297a.99.99 0 0 1 1.414 0 .99.99 0 0 1 0 1.414l-6 6a.99.99 0 0 1-.707.293.99.99 0 0 1-.707-.293l-6-6a.99.99 0 0 1 0-1.414A.997.997 0 0 1 1.004 0z'
                                        fill='currentColor'
                                        transform='rotate(90 3.833 4.171)'
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                ) : (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        className='w-5 h-5'
                        fill='currentColor'
                        stroke='none'
                    >
                        <path
                            d='M18 1c-.56 0-1-.44-1-1v-6a.988.988 0 0 0-.293-.707A.993.993 0 0 0 16-7H2a.988.988 0 0 0-.707.293A.993.993 0 0 0 1-6v6C1 .56.56 1 0 1s-1-.44-1-1v-6c0-.406.079-.796.236-1.168.152-.36.366-.677.643-.953.276-.277.594-.491.953-.643A2.968 2.968 0 0 1 2-9h14c.406 0 .796.079 1.168.236.36.152.677.366.953.643.277.276.49.594.643.953.157.372.236.762.236 1.168v6c0 .56-.44 1-1 1z'
                            transform='rotate(180 9.5 5.5)'
                        ></path>
                        <path
                            d='M6 1c-.56 0-1-.44-1-1v-9.586L.707-5.293a.99.99 0 0 1-1.414 0 .99.99 0 0 1 0-1.414l6-6a1.002 1.002 0 0 1 1.414 0l6 6a.99.99 0 0 1 0 1.414.99.99 0 0 1-1.414 0L7-9.586V0c0 .56-.44 1-1 1z'
                            transform='translate(4 13)'
                        ></path>
                    </svg>
                )}
            </div>
            <div className='pt-[5px] text-[0.8rem]'>{buttonText}</div>
        </button>
    )
}

// function YourComponent() {
//     return (
//         <div>
//             {/* First set of elements */}
//             <HoverEffectButton
//                 buttonText='Share'
//                 divContent={<span>First Content</span>}
//             />

//             {/* Second set of elements */}
//             <HoverEffectButton
//                 buttonText='Embed'
//                 divContent={<span>Second Content</span>}
//             />
//         </div>
//     )
// }

// export default YourComponent
