import './styles.css'
import defaultUser from '/defaultUser.svg';

export function ChatPageInterlocutor() {
    return (
        <div className="interlocutorInfo">
            <img src={defaultUser} alt="" className="interlocutorInfo__avatar" />
            <div className="interlocutorInfo__fullname">ZXCFullName</div>
            <div className="interlocutorInfo__username">@zxc</div>
        </div>
    )
}