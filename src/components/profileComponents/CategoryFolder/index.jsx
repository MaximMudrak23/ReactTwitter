import './styles.css'
import React, {useState} from 'react'

export function CategoryFolder() {
  const [activeFolder,setActiveFolder] = useState('Посты');
  const foldersName = ['Посты','Избранное','Нравится','Фильмы'];

  return (
    <div className="profile__folders">
      {foldersName.map((el,index) => (
        <div
        key={index}
        className={`container ${activeFolder === el ? 'active' : ''}`}
        onClick={()=>setActiveFolder(el)}
        >{el}</div>
      ))}
    </div>
  )
}