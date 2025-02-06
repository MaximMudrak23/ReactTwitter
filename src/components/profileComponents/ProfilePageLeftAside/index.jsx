import './styles.css'
import React, { useState, useEffect } from 'react';
import { AsideOptions } from '../AsideOptions';
import logo from '/twitter-logo.svg';
import gearLogo from '/gear-icon.svg';
import movieLogo from '/movie-icon.svg';

export function ProfilePageLeftAside() {
    // Browser Width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const changeWindowWidth = () => {setWindowWidth(window.innerWidth)}
    useEffect(()=> {
    window.addEventListener('resize', changeWindowWidth);
    return () => {window.removeEventListener('resize', changeWindowWidth);}
    }, []);
    return (
        <aside className='lAside'>
            <div className="twitterLogo"> <img src={logo} alt="Twitter Logo" draggable='false' /> </div>
            <nav>
                <AsideOptions logo={gearLogo} txt={windowWidth > 980 ? 'Настройки' : null} />
                <AsideOptions logo={movieLogo} txt={windowWidth > 980 ? 'Кинотеатр' : null} />
            </nav>
        </aside>
    )
}