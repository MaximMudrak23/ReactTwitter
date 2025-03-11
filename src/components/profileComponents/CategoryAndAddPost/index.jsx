import { useState, useEffect } from 'react';
import { CategoryFolder } from '../CategoryFolder'
import { AddPostFolder } from '../AddPostFolder'
import { PostsContainer } from '../PostsContainer'
import { loadPostData } from '../../../../API/GET/loadPostData';

export function CategoryAndAddPost({ userInfo, isOwner, setUser }) {
  const [currentPosts, setCurrentPosts] = useState({ created: [], liked: [], saved: [] });
  const [activeFolder, setActiveFolder] = useState({name: 'Посты', value: 'created'});
  const allFolders = [
    {name: 'Посты', value: 'created'},
    {name: 'Избранное', value: 'saved'},
    {name: 'Нравится', value: 'liked'}
  ];

  useEffect(() => {
    loadPostData(userInfo.username, setCurrentPosts);
  }, [userInfo.username]);

  return (
    <>
      <CategoryFolder
        allFolders={allFolders}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
      />
      {isOwner &&
      <AddPostFolder
        userInfo={userInfo}
        setUser={setUser}
        setCurrentPosts={setCurrentPosts}
      />}
      <PostsContainer
        isOwner={isOwner}
        currentPosts={currentPosts}
        setCurrentPosts= {setCurrentPosts}
        activeFolder={activeFolder}
      />
    </>
  )
}