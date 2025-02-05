import './styles.css'
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
import React, { useState, useEffect, useRef } from 'react';

export function PostContainer({text,post,onDelete,onEdit,onPin}) {
    // Options Menu For Posts
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
        }
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isOptionVisible]);

    const [isPinned, setPinned] = useState(false);
    const handleOption = (option) => {
        switch (option) {
            case 'pin':
                setPinned(!isPinned);
                onPin(post.id, !isPinned);
                break;
            case 'edit':
                const newText = prompt('Введите новый текст:', post.text);
                if (newText) {
                    onEdit(post.id, newText);
                }
                break;
            case 'delete':
                onDelete(post.id);
                break;
        };
    };

    // Likes and Saves Mechanic
    const [likes,setLikes] = useState(0);
    const [saves,setSaves] = useState(0);
    const [hasLike,setHasLike] = useState(false);
    const [hasSave,setHasSave] = useState(false);
    const handleLikes = () => {
        if (hasLike) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setHasLike(!hasLike);
    };
    const handleSaves = () => {
        if (hasSave) {
            setSaves(saves - 1);
        } else {
            setSaves(saves + 1);
        }
        setHasSave(!hasSave);
    };

    // Save in JSON
    

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
                    <div className="postContainer__options__container__option" onClick={()=>{handleOption('pin')}}><img src={pinIcon2} alt="Pin IMG" />{isPinned ? 'Открепить' : 'Закрепить'}</div>
                    <div className="postContainer__options__container__option" onClick={()=>{handleOption('edit')}}><img src={editLogo} alt="Edit IMG" /><span>Редактировать</span></div>
                    <div className="postContainer__options__container__option" onClick={()=>{handleOption('delete')}}><img src={deleteLogo} alt="Delete IMG" /><span>Удалить</span></div>
                </div>}
            </div>
            <div className="postContainer__mainInfo__text">{post.text}</div>
        </div>
        <div className="postContainer__reactions">
            <div className="postContainer__reactions__save" onClick={handleSaves}><img src={hasSave ? saveLogoFilled : saveLogo} alt="Save" />{saves}</div>
            <div className="postContainer__reactions__like" onClick={handleLikes}><img src={hasLike ? likeLogoFilled : likeLogo} alt="Like" />{likes}</div>
        </div>
    </div>
    </>
    )
}