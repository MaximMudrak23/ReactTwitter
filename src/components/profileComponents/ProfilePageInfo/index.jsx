import './styles.css'
import { RoundButton } from '../../RoundButton';
import logo from '/twitter-logo.svg';
import profilePicture from '/avatar.jpg';
import checkBadge from '/check-badge.svg';
import calendar from '/calendar.svg';

export function ProfilePageInfo() {
    return (
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
    )
}