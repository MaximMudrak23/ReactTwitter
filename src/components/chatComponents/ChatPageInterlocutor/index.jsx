import './styles.css'
import defaultUser from '/defaultUser.svg';
import logo from '/twitter-logo.svg';
import checkBadge from '/check-badge.svg';

export function ChatPageInterlocutor({interlocutorData}) {
    console.log(interlocutorData)
    return (
        <div className="interlocutorInfo">
            <img src={interlocutorData.avatar ? interlocutorData.avatar : defaultUser} alt="Interlocutor Avatar" className="interlocutorInfo__avatar" />
            <div className="interlocutorInfo__fullname">
                {interlocutorData.fullname ? interlocutorData.fullname : 'null'}
                {interlocutorData.isUserConfirmed ? <img src={checkBadge} alt="Check Badge" /> : null}
                {interlocutorData.isUserTwitterCreator ? <img src={logo} alt="Twitter Logo" /> : null}
            </div>
            <div className="interlocutorInfo__username">{interlocutorData.username ? '@' + interlocutorData.username : 'null'}</div>
        </div>
    )
}