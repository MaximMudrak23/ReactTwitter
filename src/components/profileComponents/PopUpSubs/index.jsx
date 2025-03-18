import './styles.css';
import { PopUpSubsSub } from '../PopUpSubsSub';
import { getUserRelations } from '../../../../API/GET/getUserRelations';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function PopUpSubs({isSubscribersOpen, isSubscribtionsOpen, setIsSubscribersOpen, setIsSubscribtionsOpen}) {
    const { username } = useParams();
    const [subscribers, setSubscribers] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        if (username) {
            getUserRelations(username)
                .then(data => {
                    setSubscribers(data.userSubscribers);
                    setSubscriptions(data.userSubscribtions);
                })
                .catch(err => console.error(err));
        }
    }, [username]);

    return (
        <div className="popup__subs__background">
            <div className="popup__subs__container">
                <div className="popup__subs__header">
                    <p className='popup__subs__foldername'>{isSubscribersOpen ? 'Читатели' : 'В читаемых' }</p>
                    <div className="popup__subs__closebutton" onClick={()=>{setIsSubscribersOpen(false); setIsSubscribtionsOpen(false)}} />
                </div>
                <div className="popup__subs__users">
                {isSubscribersOpen && subscribers.map(u => (
                    <PopUpSubsSub key={u.username} userInfo={u} />
                ))}

                {isSubscribtionsOpen && subscriptions.map(u => (
                    <PopUpSubsSub key={u.username} userInfo={u} />
                ))}
                </div>
            </div>
        </div>
    )
}