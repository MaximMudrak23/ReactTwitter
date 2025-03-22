import './styles.css'
import {useState, useEffect, useRef} from 'react';
import { addPost } from '../../../../API/POST/addPost';
import sendLogo from '/send.svg';
import refreshLogo from '/refresh.svg';

export function AddPostFolder({userInfo, setUser, setCurrentPosts}) {
  const [text,setText] = useState('');
  const textAreaRef = useRef(null);
  useEffect(()=> {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  }, [text]);

  return (
    <div className="addPostFolder">
      <div className="text_folder">
        <textarea placeholder="Введите текст..." ref={textAreaRef} value={text} onChange={(e)=>{setText(e.target.value)}} spellCheck='false' />
      </div>
      <div className="actions_folder">
        <div className="actions_folder_action">
          <img src={sendLogo} alt="Send Icon" onClick={()=>(addPost(text, userInfo.username, setUser, setCurrentPosts), setText(''))}/>
        </div>
        <div className="actions_folder_action">
          <img src={refreshLogo} alt="Send Icon" onClick={()=>{textAreaRef.current.style.height = 'auto'; textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';}}/>
        </div>
      </div>
    </div>
  )
}