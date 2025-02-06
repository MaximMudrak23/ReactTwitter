import './styles.css'
import React, {useState, useEffect, useRef} from 'react';
import { Post } from '../Post';
import { addNewPost } from './addNewPost';
import sendLogo from '/send.svg';

export function AddPostFolder() {
  const [text,setText] = useState('');
  const textAreaRef = useRef(null);
  useEffect(()=>{if (textAreaRef.current) { textAreaRef.current.style.height = 'auto'; textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';}}, [text]);

  const [posts,setPosts] = useState([]);
  return (
    <>
    <div className={`addPostFolder`}>
        <div className="text_folder">
            <textarea placeholder="Введите текст..." ref={textAreaRef} value={text} onChange={(e)=>{setText(e.target.value)}} spellCheck='false' />
        </div>
        <div className="actions_folder">
            <div className="actions_folder_action"><img src={sendLogo} alt="Send Icon" onClick={()=>addNewPost(text,setText,setPosts)}/></div>
        </div>
    </div>
    {posts.map((post) => (
      <Post
        key={post.id}
        postInfo={post}
      />
    ))}
    </>
  )
}