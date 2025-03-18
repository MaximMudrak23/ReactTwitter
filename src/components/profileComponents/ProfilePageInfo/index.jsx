import './styles.css'
import { RoundButton } from '../../RoundButton';
import { PopUpSubs } from '../PopUpSubs';
import { handleSubscribe } from '../../../../API/POST/handleSubscribe';
import { openChat } from '../../../../API/POST/openChat';
import { toEditProfilePage } from '../../../../FRONT/toEditProfilePage';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import logo from '/twitter-logo.svg';
import defaultUser from '/defaultUser.svg';
import checkBadge from '/check-badge.svg';
import calendar from '/calendar.svg';

export function ProfilePageInfo({userInfo, isOwner, setUser}) {
  const [isSubscribersOpen,setIsSubscribersOpen] = useState(false);
  const [isSubscribtionsOpen,setIsSubscribtionsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {(isSubscribersOpen || isSubscribtionsOpen) &&
      <PopUpSubs
        isSubscribersOpen={isSubscribersOpen}
        isSubscribtionsOpen={isSubscribtionsOpen}
        setIsSubscribersOpen={setIsSubscribersOpen}
        setIsSubscribtionsOpen={setIsSubscribtionsOpen}
      />}
      <div className="profile_info">
        <div className="profile_info_IMG">
          <img
            src={userInfo.avatar || defaultUser}
            alt="Profile Picture"
          />
        </div>
        
        {isOwner && <div className="profile_info_editButton">
          <RoundButton
            bgc={'white'}
            txt={'Редактировать'}
            txtc={'black'}
            isBold='true'
            wdth='140px'
            onClick={()=>toEditProfilePage(userInfo.username, navigate)}
          />
        </div>}
        {!isOwner && <div className="profile_info_editButton">
          <RoundButton
            bgc={'white'}
            txt={"Написать"}
            txtc={'black'}
            isBold='true'
            wdth='140px'
            onClick={()=>{openChat(localStorage.getItem('username'), userInfo.username, navigate)}}
          />
          <RoundButton
            bgc={'white'}
            txt={userInfo.userSubscribers.includes(localStorage.getItem('username')) ? "Отписаться" : "Читать"}
            txtc={'black'}
            isBold='true'
            wdth='140px'
            onClick={()=>handleSubscribe(userInfo, setUser)}
          />
        </div>}

        <div className="profile_info_name">
          <div className="profile_info_name_fullname">
            <span>{userInfo.fullname}</span>
            {userInfo.isUserConfirmed ? <img src={checkBadge} alt="Check Badge" /> : null}
            {userInfo.isUserTwitterCreator ? <img src={logo} alt="Twitter Logo" /> : null}
          </div>
          <div className="profile_info_name_findname">{'@' + userInfo.username}</div>
        </div>
        <div className="profile_info_registration">
          <img src={calendar} alt="Calendar" /><span>Регистрация: {userInfo.regDate} г.</span>
        </div>
        <div className="profile_info_subs">
          <p onClick={()=>{setIsSubscribtionsOpen(true)}}><span>{userInfo.userSubscribtions.length}</span> в читаемых</p>
          <p onClick={()=>{setIsSubscribersOpen(true)}}><span>{userInfo.userSubscribers.length}</span> читателей</p>
        </div>
      </div>
    </>
  )
}