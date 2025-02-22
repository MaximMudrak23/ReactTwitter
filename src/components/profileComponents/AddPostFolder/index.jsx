import './styles.css'
import React, {useState, useEffect, useRef} from 'react';
import sendLogo from '/send.svg';

export function AddPostFolder({AddNewPostFunc}) {
  const [text,setText] = useState('');
  const textAreaRef = useRef(null);
  useEffect(()=>{if (textAreaRef.current) { textAreaRef.current.style.height = 'auto'; textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';}}, [text]);
  
  return (
      <div className={`addPostFolder`}>
        <div className="text_folder">
          <textarea placeholder="Введите текст..." ref={textAreaRef} value={text} onChange={(e)=>{setText(e.target.value)}} spellCheck='false' />
        </div>
        <div className="actions_folder"> {/* Add Post Button */}
          <div className="actions_folder_action"><img src={sendLogo} alt="Send Icon" onClick={()=>{setText('')}}/></div>
        </div>
      </div>
  )
}