import './styles.css';
import { useEffect, useRef } from "react";
import { Message } from '../Message';

export function ChatPageMessagesContainer({chatMessages, interlocutorData}) {
  const messagesContainerRef = useRef(null);
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="relativeMessagesContainer">
      <div className="messagesContainer" ref={messagesContainerRef}>
        {chatMessages && chatMessages.length > 0 ? chatMessages.map((m,i) => <Message messageAuthor={m.author} messageText={m.text} key={i} />)  : <p>Нет сообщений</p>}
      </div>
    </div>
  )
}