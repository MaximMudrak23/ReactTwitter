import './styles.css'
import { RoundButton } from '../../RoundButton';
import logo from '/twitter-logo.svg';
import defaultUser from '/defaultUser.svg';
import checkBadge from '/check-badge.svg';
import calendar from '/calendar.svg';

// ЕЩЕ ДОНАСТРОИТЬ ЕСЛИ Я УЖЕ ЧИТАЮ ТО ДОБАВИТЬ МЕТОД ФАЙНД
// И РАЗДЕЛИТЬ НА 2 КНОПКИ ОНДНА С ЛОГИКОЙ ЧИТАТЬ НЕ ЧИТАТЬ ДРУГАЯ С РЕДАКТИРОВАТЬ

export function ProfilePageInfo({userInfo, isOwner}) {
    return (
      <div className="profile_info">
        <div className="profile_info_IMG">
          <img
            src={userInfo.avatar || defaultUser}
            alt="Profile Picture"
            style={userInfo.avatar === defaultUser ? {transform: 'scale(0.8)'} : {}}
          />
        </div>
        <div className="profile_info_editButton">
          <RoundButton bgc={'white'} txt={isOwner ? 'Редактировать' : 'Читать'} txtc={'black'} isBold='true' wdth='140px' />
        </div>
        <div className="profile_info_name">
          <div className="profile_info_name_fullname">
            <span>{userInfo.fullname}</span>
            {userInfo.isUserConfirmed ? <img src={checkBadge} alt="Check Badge" /> : null}
            {userInfo.isUserTwitterCreator ? <img src={logo} alt="Twitter Logo" /> : null}
          </div>
          <div className="profile_info_name_findname">{'@' + userInfo.username}</div>
        </div>
        <div className="profile_info_registration">
          <img src={calendar} alt="Calendar" /><span>Регистрация: {userInfo.birthDate} г.</span>
        </div>
        <div className="profile_info_subs">
          <p><span>{userInfo.userSubscribtions.length}</span> в читаемых</p>
          <p><span>{userInfo.userSubscribers.length}</span> читателей</p>
        </div>
      </div>
    )
}