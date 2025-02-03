import './styles.css'
import React, {useState, useEffect, useRef} from 'react';
import sendLogo from '/send.svg';
import { PostContainer } from '../PostContainer';

export function AddPostFolder() {
    // For Text
    const [text,setText] = useState('');
    const textAreaRef = useRef(null);
    useEffect(()=>{if (textAreaRef.current) { textAreaRef.current.style.height = 'auto'; textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';}}, [text]);

  return (
    <>
    <div className={`addPostFolder`}>
        <div className="text_folder">
            <textarea placeholder="Введите текст..." ref={textAreaRef} value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
        <div className="actions_folder">
            <div className="actions_folder_action"><img src={sendLogo} alt="Send Icon" /></div>
        </div>
    </div>
    <PostContainer />
    </>
  )
}