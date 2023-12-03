import Link from 'next/link'


export const Navbar = () => {
    return (
        <nav>
            <div className='mx-6 flex justify-between'>
                <div>
                    <Link href='/' className='text-white text-lg font-bold'>
                        Home
                    </Link>
                </div>
                <div className='flex justify-between items-center space-x-6'>
                    <Link href='/about' className='text-white'>
                        About
                    </Link>
                    <Link href='/services' className='text-yellow-300'>
                        Services
                    </Link>
                    <Link href='/contact' className='text-green-300'>
                        Contact
                    </Link>
                </div>
                <div className='flex justify-between items-center space-x-6'>
                    <Link href='/about' className='text-white'>
                        About
                    </Link>
                    <Link href='/services' className='text-yellow-300'>
                        Services
                    </Link>
                    <Link href='/contact' className='text-green-300'>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}
