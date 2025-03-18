import { ChatPageInterlocutor } from '../ChatPageInterlocutor';
import { ChatPageMessagesContainer } from '../ChatPageMessagesContainer';
import { ChatPageInput } from '../ChatPageInput';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadSingleChatInfo } from '../../../../API/GET/loadSingleChatInfo';
import socket from '../../../../API/websocket';

export function ChatPageMain() {
    const navigate = useNavigate();
    const { chatID } = useParams();
    const [chatData, setChatData] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);
    const user = localStorage.getItem('username');

    useEffect(() => {
        loadSingleChatInfo(chatID, setChatData);
    }, [chatID]);

    useEffect(() => {
        if (chatData) {
            if (user && !chatData.users.find(u => user === u.username)) navigate(`/profile/${user}`);
            if (!user) navigate('/register');
            socket.emit('joinChat', chatID);
            setChatMessages(chatData.messages);
        }
    }, [chatData]);

    useEffect(() => {
        socket.on('newMessage', (message) => {
            if (message.chatID === chatID) {
                setChatMessages(prev => [...prev, message]);
            }
        });
    
        return () => {
            socket.off('newMessage');
        };
    }, [chatID]);

    if (!chatData) return <div className="loading">Загрузка...</div>;

    const interlocutorData = chatData.users.find(u => u.username !== user);

    return (
        <main className='profileMain'>
            <ChatPageInterlocutor interlocutorData={interlocutorData} />
            <ChatPageMessagesContainer chatMessages={chatMessages} interlocutorData={interlocutorData} />
            <ChatPageInput setChatMessages={setChatMessages} chatID={chatID} />
        </main>
    )
}