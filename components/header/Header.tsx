import React from 'react'
import Nave from '../nave/Nave'
import style from '../../styles/Header.module.css'


const Header = () => {
    return (
        <div className='flex justify-center w-full h-52 bg-header-bg'>
            <Nave />

        </div>
    )
}

export default Header