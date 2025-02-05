import './styles.css'
import React, {useState, useEffect, useRef} from 'react';
import sendLogo from '/send.svg';
import { PostContainer } from '../PostContainer';

export function AddPostFolder() {
    // For Text
    const [text,setText] = useState('');
    const textAreaRef = useRef(null);
    useEffect(()=>{if (textAreaRef.current) { textAreaRef.current.style.height = 'auto'; textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';}}, [text]);

    // For Posts
    const [posts,setPosts] = useState([]);
    const sendPost = () => {
      if (text.trim() === '') return;
      const newPost = {
          id: Date.now(),
          text: text,
          isPinned: false
      };
      setPosts((prevPosts) => {
          const pinnedPosts = prevPosts.filter(post => post.isPinned);
          const unpinnedPosts = prevPosts.filter(post => !post.isPinned);
          return [...pinnedPosts, newPost, ...unpinnedPosts];
      });
      setText('');
    };
  
    const handlePinPost = (postId, isPinned) => {
      setPosts((prevPosts) => {
          const updatedPosts = prevPosts.map(post =>
              post.id === postId ? { ...post, isPinned } : post
          );
          const pinnedPosts = updatedPosts.filter(post => post.isPinned);
          const unpinnedPosts = updatedPosts.filter(post => !post.isPinned);
          return [...pinnedPosts, ...unpinnedPosts];
      });
    };
    const handleEditPost = (postId, newText) => {
      setPosts(posts.map(post => post.id === postId ? { ...post, text: newText } : post));
    };
    const handleDeletePost = (postId) => {
      setPosts(posts.filter(post => post.id !== postId));
    };

  return (
    <>
    <div className={`addPostFolder`}>
        <div className="text_folder">
            <textarea placeholder="Введите текст..." ref={textAreaRef} value={text} onChange={(e)=>{setText(e.target.value)}} spellCheck='false' />
        </div>
        <div className="actions_folder">
            <div className="actions_folder_action"><img src={sendLogo} alt="Send Icon" onClick={sendPost} /></div>
        </div>
    </div>
    {posts.map((post) => (
      <PostContainer key={post.id} post={post} onDelete={handleDeletePost} onEdit={handleEditPost} onPin={handlePinPost} /> 
    ))}
    </>
  )
}