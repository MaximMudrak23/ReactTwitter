import './styles.css'
import findIcon from '/find.svg'
import { useState } from 'react';
import { handleFindFolder } from '../../../../API/FrontBusinessLogic/handleFindFolder';

export function FindFolder() {
    const [searchQuery, setSearchQuery] = useState('');
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleFindFolder(searchQuery);
        }
    };
    return (
        <div className="findFolderContainer">
            <img src={findIcon} alt="Find Icon" onClick={()=>handleFindFolder(searchQuery)} />
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