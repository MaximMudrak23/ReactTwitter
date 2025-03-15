import './styles.css'
import { RoundButton } from '../../RoundButton';
import { handleSubscribe } from '../../../../API/POST/handleSubscribe';
import { toEditProfilePage } from '../../../../FRONT/toEditProfilePage';
import { useNavigate } from "react-router-dom";
import logo from '/twitter-logo.svg';
import defaultUser from '/defaultUser.svg';
import checkBadge from '/check-badge.svg';
import calendar from '/calendar.svg';

export function ProfilePageInfo({userInfo, isOwner, setUser}) {
    const navigate = useNavigate();
    return (
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
          <p><span>{userInfo.userSubscribtions.length}</span> в читаемых</p>
          <p><span>{userInfo.userSubscribers.length}</span> читателей</p>
        </div>
      </div>
    )
}