import './styles.css'
import React, { useEffect, useState } from 'react';
import { AsideOptions } from '../../components/AsideOptions';
import { RoundButton } from '../../components/RoundButton';
import { CategoryFolder } from '../../components/CategoryFolder';
import { AddPostFolder } from '../../components/AddPostFolder';
import { FindFolder } from '../../components/FindFolder';
import logo from '/twitter-logo.svg';
import gearLogo from '/gear-icon.svg';
import movieLogo from '/movie-icon.svg';
import profilePicture from '/avatar.jpg';
import checkBadge from '/check-badge.svg';
import calendar from '/calendar.svg';

export function ProfilePage() {
  // Monitor Width
  const [monitorWidth, setMonitorWidth] = useState(screen.width);
  useEffect(() => {
    setMonitorWidth(screen.width);
  }, []);

  // Browser Width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const changeWindowWidth = () => {setWindowWidth(window.innerWidth)}
  useEffect(()=> {
    window.addEventListener('resize', changeWindowWidth);
    return () => {window.removeEventListener('resize', changeWindowWidth);}
  }, []);

  return (
    <>
    <div className="profilePage" style={{ maxWidth: `${monitorWidth}px` }}>
      <aside className='lAside'>
        <div className="twitterLogo"> <img src={logo} alt="Twitter Logo" draggable='false' /> </div>
        <nav>
          <AsideOptions logo={gearLogo} txt={windowWidth > 980 ? 'Настройки' : null} />
          <AsideOptions logo={movieLogo} txt={windowWidth > 980 ? 'Кинотеатр' : null} />
        </nav>
      </aside>
      <main className='profileMain'>
        <FindFolder />
        <header>
          <video autoPlay loop muted playsInline src="edit2.mp4"></video>
        </header>
        <div className="profile_info">
          <div className="profile_info_IMG">
            <img src={profilePicture} alt="Profile Picture" />
          </div>
          <div className="profile_info_editButton">
            <RoundButton bgc={'white'} txt={'Редактировать'} txtc={'black'} isBold='true' wdth='140px' />
          </div>
          <div className="profile_info_name">
            <div className="profile_info_name_fullname"><span>Maxim "Snow"</span><img src={checkBadge} alt="Check Badge" /><img src={logo} alt="Twitter Logo" /></div>
            <div className="profile_info_name_findname">@Snow</div>
          </div>
          <div className="profile_info_registration">
            <img src={calendar} alt="Calendar" /><span>Регистрация: июнь 2009 г.</span>
          </div>
          <div className="profile_info_subs">
            <p><span>0</span> в читаемых</p>
            <p><span>0</span> читателей</p>
          </div>
        </div>
        <CategoryFolder />
        <AddPostFolder />
      </main>
      <aside className='rAside'></aside>
    </div>
    </>
  )
}