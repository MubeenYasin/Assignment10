import React from 'react'
import Image from 'next/image'
import Arrow from '/public/img/arrow-down.svg'
import User from '/public/img/User.svg'
import Search from '/public/img/Search.svg'
import Link from 'next/link'

const Nave = () => {
    return (
        <nav className='w-full h-78  bg-header-bg'>
            <div className='flex justify-between w-10/12 h-78 mx-auto'>
                <Link href={'/'}> <Image src='/img/logo.png' width='78' height='78' alt='logo' /> </Link>

                <ul className='flex'>
                    <li className='flex mr-6 justify-between items-center'>
                        <Link href={'/'} className='text-sm leading-none font-medium uppercase mr-2.5 hover:text-teal-400'>Hypeindustry</Link>
                        <Link href={'/'}> <Arrow className='stroke-black hover:stroke-teal-400' /> </Link>
                    </li>
                    <li className='flex  mr-6 justify-between items-center'>
                        <Link href={'/'} className='text-sm leading-none font-medium uppercase mr-2.5 hover:text-teal-400'>Hype Offers</Link>
                        <Link href={'/'}> <Arrow className='stroke-black hover:stroke-teal-400' /> </Link>
                    </li>
                    <li className='flex  mr-6 justify-between items-center'>
                        <Link href={'/'} className='text-sm leading-none font-medium uppercase mr-2.5 hover:text-teal-400'>Shipping</Link>
                        <Link href={'/'}> <Arrow className='stroke-black hover:stroke-teal-400' /> </Link>
                    </li>
                    <li className='flex mr-6 justify-between items-center'>
                        <Link href={'/'} className='text-sm leading-none font-medium uppercase mr-2.5 hover:text-teal-400'>Seller Request Form</Link>
                        <Link href={'/'} > <Arrow className='stroke-black hover:stroke-teal-400' /> </Link>
                    </li>
                </ul>

                <ul className='flex items-center justify-between  w-72'>
                    <li className='flex justify-between items-center w-16'>
                        <Link href={'/'}><User className='stroke-black hover:stroke-teal-400' /></Link>
                        <Link href={'/'} className='hover:text-teal-400'>login</Link>
                    </li>
                    <li className='flex items-center justify-center w-50 h-10 rounded-md bg-white'>
                        <Search className='ml-2' />
                        <input type="text" placeholder=' Brand, models...' />

                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Nave