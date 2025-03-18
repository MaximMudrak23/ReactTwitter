import './styles.css';
import { useNavigate } from 'react-router-dom';
import defaultUser from '/defaultUser.svg';
import logo from '/twitter-logo.svg';
import checkBadge from '/check-badge.svg';

export function SingleChat({chatInfo}) {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  console.log(chatInfo)
  return (
    <div className="chat__container__grid" onClick={()=>{navigate(`/chat/${chatInfo.id}`)}}>
      <img src={chatInfo.interlocutor.avatar ? chatInfo.interlocutor.avatar : defaultUser} alt="User Chat Avatar" className="chat__avatar" />
      <div className="chat__username">
        {chatInfo.interlocutor.username ? '@' + chatInfo.interlocutor.username : 'null'}
        {chatInfo.interlocutor.isUserConfirmed ? <img src={checkBadge} alt="Check Badge" /> : null}
        {chatInfo.interlocutor.isUserTwitterCreator ? <img src={logo} alt="Twitter Logo" /> : null}
      </div>
      <div className="chat__message">{chatInfo.lastMessage ? `${chatInfo.lastMessage.author === username ? 'Вы: ' : ''}${chatInfo.lastMessage.text}` : '*Чат создан!*'}</div>
    </div>
  )
}