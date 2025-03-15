import './styles.css';
import { useState, useEffect, useRef } from 'react';
import sendLogo from '/send.svg';

export function ChatPageInput() {
    const [text,setText] = useState('');
    const textAreaRef = useRef(null);
    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight - 1}px`;
        }
    }, [text]);

    return (
        <div className="chatPageTextareaContainer">
            <textarea className="chatPageTextarea" type="text" placeholder="Напишите сообщение..." ref={textAreaRef} value={text} onChange={(e)=>{setText(e.target.value)}} />
            <div className="chatPageActions">
                <img src={sendLogo} alt="Send Icon" />
            </div>
        </div>
    )
}