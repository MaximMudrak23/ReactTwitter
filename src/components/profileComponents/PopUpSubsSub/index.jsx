import './styles.css';
import defaultUser from '/defaultUser.svg';
import logo from '/twitter-logo.svg';
import checkBadge from '/check-badge.svg';

export function PopUpSubsSub({userInfo}) {
    return (
        <div className="popup_subs__sub__container" onClick={()=>{window.location.href = `/profile/${userInfo.username}`}}>
            <img src={userInfo.avatar ? userInfo.avatar : defaultUser} alt="Profile Picture" className="popup_subs__sub__avatar" />
            <div className="popup_subs__sub__fullname">
                {userInfo.fullname ? userInfo.fullname : 'null'}
                {userInfo.isUserConfirmed ? <img src={checkBadge} alt="Check Badge" /> : null}
                {userInfo.isUserTwitterCreator ? <img src={logo} alt="Twitter Logo" /> : null}
            </div>
            <div className="popup_subs__sub__username">{userInfo.username ? '@' + userInfo.username : 'null'}</div>
        </div>
    )
}