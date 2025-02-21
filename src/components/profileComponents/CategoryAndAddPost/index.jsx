import React, { useState } from 'react';
import { CategoryFolder } from '../CategoryFolder'
import { AddPostFolder } from '../AddPostFolder'
import { PostsContainer } from '../PostsContainer'

// function AddNewPostFunc(newPostTxt) {
//   if (newPostTxt.trim() === '') return;
//   const newPost = {
//       author: null,
//       text: newPostTxt,
//       category: 'Посты',
//       likes: 0,
//       saves: 0,
//   }

//   setAllPosts((pastPosts)=> [newPost, ...pastPosts]);
// }

export function CategoryAndAddPost({ isOwner }) {
    const [allPosts, setAllPosts] = useState([]);
    const [activeFolder, setActiveFolder] = useState('Посты');
    const allFolders = ['Посты','Избранное','Нравится'];

  return (
    <>
      <CategoryFolder
        allFolders={allFolders}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
      />
      {isOwner && <AddPostFolder AddNewPostFunc={AddNewPostFunc} />}
      <PostsContainer allPosts={allPosts} activeFolder={activeFolder} />
    </>
  )
}