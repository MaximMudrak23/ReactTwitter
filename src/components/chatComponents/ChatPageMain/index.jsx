import { ChatPageInterlocutor } from '../ChatPageInterlocutor';
import { ChatPageMessagesContainer } from '../ChatPageMessagesContainer';
import { ChatPageInput } from '../ChatPageInput';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadSingleChatInfo } from '../../../../API/GET/loadSingleChatInfo';

export function ChatPageMain() {
    const navigate = useNavigate();
    const { chatID } = useParams();
    const [chatData, setChatData] = useState(null);
    const [chatMessages, setChatMessages] = useState(null);
    const user = localStorage.getItem('username');
    console.log(chatData)

    useEffect(() => {
        loadSingleChatInfo(chatID, setChatData);
    }, [chatID]);

    useEffect(() => {
        if (chatData) {
            if (user && !chatData.users.find(u => user === u.username)) {
                navigate(`/profile/${user}`);
            } else if (!user && !chatData.users.find(c => user === u.username)) {
                navigate(`/register`);
            }
            setChatMessages(chatData.messages);
        }
    }, [chatData]);

    if (!chatData) return <div className="loading">Загрузка...</div>;

    const interlocutorData = chatData.users.find(u => u.username !== localStorage.getItem('username'));

    return (
        <main className='profileMain'>
            <ChatPageInterlocutor interlocutorData={interlocutorData} />
            <ChatPageMessagesContainer chatMessages={chatMessages} interlocutorData={interlocutorData} />
            <ChatPageInput setChatMessages={setChatMessages} chatID={chatID} />
        </main>
    )
}