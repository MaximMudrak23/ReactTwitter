import './styles.css'
import { RoundButton } from '../../RoundButton';
import logo from '/twitter-logo.svg';
import defaultUser from '/defaultUser.svg';
import checkBadge from '/check-badge.svg';
import calendar from '/calendar.svg';

export function ProfilePageInfo({userAvatar=defaultUser, userFullName='userFullName', userFindName='userFindName', userRegDate='userRegDate', userRead=0, userReaders=0, isUserVerified=false, isUserCreator=false}) {
    return (
      <div className="profile_info">
        <div className="profile_info_IMG">
          <img
            src={userAvatar}
            alt="Profile Picture"
            style={userAvatar === defaultUser ? {transform: 'scale(0.8)'} : {}}
          />
        </div>
        <div className="profile_info_editButton">
          <RoundButton bgc={'white'} txt={'Редактировать'} txtc={'black'} isBold='true' wdth='140px' />
        </div>
        <div className="profile_info_name">
          <div className="profile_info_name_fullname">
            <span>{userFullName}</span>
            {isUserVerified ? <img src={checkBadge} alt="Check Badge" /> : null}
            {isUserCreator ? <img src={logo} alt="Twitter Logo" /> : null}
          </div>
          <div className="profile_info_name_findname">{'@' + userFindName}</div>
        </div>
        <div className="profile_info_registration">
          <img src={calendar} alt="Calendar" /><span>Регистрация: {userRegDate} г.</span>
        </div>
        <div className="profile_info_subs">
          <p><span>{userRead}</span> в читаемых</p>
          <p><span>{userReaders}</span> читателей</p>
        </div>
      </div>
    )
}