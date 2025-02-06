import './styles.css'
import React, { useState, useEffect, useRef } from 'react';
import pinIcon from '/pin.svg'
import pinIcon2 from '/pin2.svg'
import Avatar from '/avatar.jpg'
import logo from '/twitter-logo.svg';
import checkBadge from '/check-badge.svg';
import likeLogo from '/like.svg'
import likeLogoFilled from '/likeFilled.svg'
import saveLogo from '/save.svg'
import saveLogoFilled from '/saveFilled.svg'
import editLogo from '/edit.svg'
import deleteLogo from '/delete.svg'

export function Post({postInfo}) {
    const [isOptionVisible,setIsOptionVisible] = useState(false);
    const optionsContainerRef = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (optionsContainerRef.current && !optionsContainerRef.current.contains(e.target)) {
                setIsOptionVisible(false);
            }
        };
        if (isOptionVisible) {
            document.addEventListener('mousedown', handleOutsideClick);
        };
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isOptionVisible]);

    const isPinned = false;
    const hasSave = false;
    const hasLike = false;

    return (
    <>
    <div className="postContainer">
        {isPinned && <div className="postContainer__pin"><img src={pinIcon} alt="Pin" /><span>Закреплено</span></div>}
        <div className="postContainer__mainInfo">
            <div className="postContainer__mainInfo__IMG"><img src={Avatar} alt="Profile Picture" /></div>
            <div className="postContainer__mainInfo__name">
                <div className="postContainer__name"><span>Maxim "Snow"</span><img src={checkBadge} alt="Check Badge" /><img src={logo} alt="Twitter Logo" /></div>
                <div className="postContainer__options" onClick={() => setIsOptionVisible(!isOptionVisible)}></div>
                {isOptionVisible && <div className="postContainer__options__container" ref={optionsContainerRef}>
                    <div className="postContainer__options__container__option" ><img src={pinIcon2} alt="Pin IMG" />{isPinned ? 'Открепить' : 'Закрепить'}</div>
                    <div className="postContainer__options__container__option" ><img src={editLogo} alt="Edit IMG" /><span>Редактировать</span></div>
                    <div className="postContainer__options__container__option" ><img src={deleteLogo} alt="Delete IMG" /><span>Удалить</span></div>
                </div>}
            </div>
            <div className="postContainer__mainInfo__text">{postInfo.text}</div>
        </div>
        <div className="postContainer__reactions">
            <div className="postContainer__reactions__save"><img src={hasSave ? saveLogoFilled : saveLogo} alt="Save" />{postInfo.saves}</div>
            <div className="postContainer__reactions__like"><img src={hasLike ? likeLogoFilled : likeLogo} alt="Like" />{postInfo.likes}</div>
        </div>
    </div>
    </>
    )
}