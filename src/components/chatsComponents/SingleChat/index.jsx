import './styles.css';
import defaultUser from '/defaultUser.svg';

export function SingleChat({userInfo}) {
  return (
    <div className="chat__container__grid">
      <img src={userInfo.avatar ? userInfo.avatar : defaultUser} alt="" className="chat__avatar" />
      <div className="chat__username">{userInfo.username ? userInfo.username : 'null'}</div>
      <div className="chat__message">Вы: Слушай сюда меня, либо даешь бабки, либо отжимаю завод! Я еще раз повторяю!</div>
    </div>
  )
}