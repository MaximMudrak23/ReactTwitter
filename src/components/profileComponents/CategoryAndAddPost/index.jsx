import React, { useState } from 'react';
import { CategoryFolder } from '../CategoryFolder'
import { AddPostFolder } from '../AddPostFolder'
import { PostsContainer } from '../PostsContainer'

export function CategoryAndAddPost() {
    const [allPosts, setAllPosts] = useState([]);
    const [activeFolder, setActiveFolder] = useState('Посты');
    const allFolders = ['Посты','Избранное','Нравится','Фильмы'];

    function AddNewPostFunc(newPostTxt) {
        if (newPostTxt.trim() === '') return;
        const newPost = {
            author: null,
            text: newPostTxt,
            category: 'Посты',
            likes: 0,
            saves: 0,
        }

        setAllPosts((pastPosts)=> [newPost, ...pastPosts]);
    }
    // console.log(allPosts);

  return (
    <>
      <CategoryFolder
        allFolders={allFolders}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
      />
      <AddPostFolder AddNewPostFunc={AddNewPostFunc} />
      <PostsContainer allPosts={allPosts} activeFolder={activeFolder} />
    </>
  )
}