import './styles.css';
import defaultUser from '/defaultUser.svg';

function ResultsContainer({ userInfo }) {
    return (
        <div 
            className="resultsContainer" 
            onClick={() => window.location.href = `/profile/${userInfo.username}`}
        >
            <img src={userInfo.avatar || defaultUser} alt="Profile Picture" />
            <div className="resultsContainer__fullname">{userInfo.fullname || 'Неизвестно'}</div>
            <div className="resultsContainer__username">@{userInfo.username}</div>
        </div>
    );
}

function EmptyResults() {
    return (
        <div className="emptyResults">
            <p>Нет результатов</p>
        </div>
    );
}

export function SearchContainer({ searchResults }) {
    return (
        <div className="searchContainer">
            {searchResults.length === 0
                ? <EmptyResults />
                : searchResults.map((user, index) => (
                    <ResultsContainer key={index} userInfo={user} />
                ))
            }
        </div>
    );
}