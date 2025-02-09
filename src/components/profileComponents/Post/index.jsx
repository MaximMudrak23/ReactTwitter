import './styles.css'
import React, { useState, useEffect, useRef } from 'react';
import pinIcon from '/pin.svg'
import pinIcon2 from '/pin2.svg'
import defaultUser from '/defaultUser.svg';
import logo from '/twitter-logo.svg';
import checkBadge from '/check-badge.svg';
import likeLogo from '/like.svg'
import likeLogoFilled from '/likeFilled.svg'
import saveLogo from '/save.svg'
import saveLogoFilled from '/saveFilled.svg'
import editLogo from '/edit.svg'
import deleteLogo from '/delete.svg'

export function Post({postObj}) {
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
            <div className="postContainer__mainInfo__IMG">
                <img src={postObj.userAvatarURL === undefined ? defaultUser : postObj.userAvatarURL } alt="Profile Picture" />
            </div>
            <div className="postContainer__mainInfo__name">
                <div className="postContainer__name">
                    <span>{postObj.authorFullName === undefined || postObj.authorFullName === '' ? 'null' : postObj.authorFullName}</span>
                    {postObj.isUserVerified ? <img src={checkBadge} alt="Check Badge" /> : null}
                    {postObj.isUserCreator ? <img src={logo} alt="Twitter Logo" /> : null}
                </div>
                <div className="postContainer__options" onClick={() => setIsOptionVisible(!isOptionVisible)}></div>
                {isOptionVisible && <div className="postContainer__options__container" ref={optionsContainerRef}>
                    <div className="postContainer__options__container__option" ><img src={pinIcon2} alt="Pin IMG" />{isPinned ? 'Открепить' : 'Закрепить'}</div>
                    <div className="postContainer__options__container__option" ><img src={editLogo} alt="Edit IMG" /><span>Редактировать</span></div>
                    <div className="postContainer__options__container__option" ><img src={deleteLogo} alt="Delete IMG" /><span>Удалить</span></div>
                </div>}
            </div>
            <div className="postContainer__mainInfo__text">{postObj.text}</div> {/* Текст поста */}
        </div>
        <div className="postContainer__reactions"> {/* Реакции на пост */}
            <div className="postContainer__reactions__save"><img src={hasSave ? saveLogoFilled : saveLogo} alt="Save" />{postObj.saves}</div>
            <div className="postContainer__reactions__like"><img src={hasLike ? likeLogoFilled : likeLogo} alt="Like" />{postObj.likes}</div>
        </div>
    </div>
    </>
    )
}