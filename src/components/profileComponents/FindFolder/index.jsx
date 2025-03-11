import './styles.css'
import findIcon from '/find.svg'
import { useState } from 'react';
import { findFolder } from '../../../../API/GET/findFolder';

export function FindFolder() {
    const [searchQuery, setSearchQuery] = useState('');
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            findFolder(searchQuery);
        }
    };
    return (
        <div className="findFolderContainer">
            <img src={findIcon} alt="Find Icon" onClick={()=>findFolder(searchQuery)} />
            <input
                type="text"
                placeholder='Поиск...'
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}