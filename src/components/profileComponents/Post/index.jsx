import './styles.css'
import { useState, useEffect, useRef } from 'react';
import { pinPost, editPost, deletePost } from '../../../../API/postActions';
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

export function Post({ postInfo, userInfo, isOwner, activeFolder, setCurrentPosts }) {
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

    const hasSave = false;
    const hasLike = false;

    return (
    <>
    <div className="postContainer">
        {postInfo.isPinned && activeFolder.value === 'created' && <div className="postContainer__pin"><img src={pinIcon} alt="Pin" /><span>Закреплено</span></div>}
        <div className="postContainer__mainInfo">
            <div className="postContainer__mainInfo__IMG">
                <img src={userInfo.avatar === undefined ? defaultUser : userInfo.avatar } alt="Profile Picture" />
            </div>
            <div className="postContainer__mainInfo__name">
                <div className="postContainer__name">
                    <span>{userInfo.fullname === undefined || userInfo.fullname === '' ? 'null' : userInfo.fullname}</span>
                    {userInfo.isUserConfirmed ? <img src={checkBadge} alt="Check Badge" /> : null}
                    {userInfo.isUserTwitterCreator ? <img src={logo} alt="Twitter Logo" /> : null}
                </div>
                {isOwner && activeFolder.value === 'created' &&<div className="postContainer__options" onClick={() => setIsOptionVisible(!isOptionVisible)}></div>}
                {isOptionVisible && <div className="postContainer__options__container" ref={optionsContainerRef}>
                    <div className="postContainer__options__container__option" onClick={()=>pinPost()}>
                        <img src={pinIcon2} alt="Pin IMG" />{postInfo.isPinned ? 'Открепить' : 'Закрепить'}
                    </div>
                    <div className="postContainer__options__container__option" onClick={()=>editPost()}>
                        <img src={editLogo} alt="Edit IMG" /><span>Редактировать</span>
                    </div>
                    <div className="postContainer__options__container__option" onClick={()=>deletePost()}>
                        <img src={deleteLogo} alt="Delete IMG" /><span>Удалить</span>
                    </div>
                </div>}
            </div>
            <div className="postContainer__mainInfo__text">{postInfo.text}</div>
        </div>
        <div className="postContainer__reactions">
            <div className="postContainer__reactions__save"><img src={hasSave ? saveLogoFilled : saveLogo} alt="Save" />{postInfo.saves.length}</div>
            <div className="postContainer__reactions__like"><img src={hasLike ? likeLogoFilled : likeLogo} alt="Like" />{postInfo.likes.length}</div>
        </div>
    </div>
    </>
    )
}