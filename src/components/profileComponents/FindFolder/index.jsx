import './styles.css'
import findIcon from '/find.svg'
import { useState } from 'react';
import { findFolderFind } from '../../../../API/GET/findFolderFind';
import { findFolderSearch } from '../../../../API/GET/findFolderSearch';
import { SearchContainer } from '../SearchContainer';

export function FindFolder() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            findFolderFind(searchQuery);
        }
    };

    return (
        <div className="findFolderContainer">
            <img src={findIcon} alt="Find Icon" onClick={()=>findFolderFind(searchQuery)} />
            <input
                type="text"
                placeholder='Поиск...'
                value={searchQuery}
                onChange={(e)=>{setSearchQuery(e.target.value); findFolderSearch(e.target.value, setSearchResults)}}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
            />
            {isFocused && searchQuery.trim() !== '' && <SearchContainer searchResults={searchResults} />}
        </div>
    )
}