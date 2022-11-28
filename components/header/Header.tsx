import React from 'react'
import style from '../../styles/Header.module.css'
import Nave from '../nave/Nave'


const Header = () => {
    return (
        <div className='flex justify-center w-full h-52 bg-header-bg'>
            <Nave />
        </div>
    )
}

export default Header