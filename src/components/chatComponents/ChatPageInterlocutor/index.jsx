import './styles.css'
import defaultUser from '/defaultUser.svg';

export function ChatPageInterlocutor({interlocutorData}) {
    return (
        <div className="interlocutorInfo">
            <img src={interlocutorData.avatar ? interlocutorData.avatar : defaultUser} alt="Interlocutor Avatar" className="interlocutorInfo__avatar" />
            <div className="interlocutorInfo__fullname">{interlocutorData.fullname ? interlocutorData.fullname : 'null'}</div>
            <div className="interlocutorInfo__username">{interlocutorData.username ? '@' + interlocutorData.username : 'null'}</div>
        </div>
    )
}