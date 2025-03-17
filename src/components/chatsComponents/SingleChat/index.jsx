import './styles.css';
import defaultUser from '/defaultUser.svg';
import { useNavigate } from 'react-router-dom';

export function SingleChat({chatInfo}) {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  return (
    <div className="chat__container__grid" onClick={()=>{navigate(`/chat/${chatInfo.id}`)}}>
      <img src={chatInfo.interlocutor.avatar ? chatInfo.interlocutor.avatar : defaultUser} alt="User Chat Avatar" className="chat__avatar" />
      <div className="chat__username">{chatInfo.interlocutor.username ? chatInfo.interlocutor.username : 'null'}</div>
      <div className="chat__message">{chatInfo.lastMessage ? `${chatInfo.lastMessage.author === username ? 'Вы: ' : ''}${chatInfo.lastMessage.text}` : '*Чат создан!*'}</div>
    </div>
  )
}