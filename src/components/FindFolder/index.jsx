import './styles.css'
import findIcon from '/find.svg'

export function FindFolder() {
    return (
        <>
        <div className="findFolderContainer">
            <img src={findIcon} alt="Find Icon" />
            <input type="text" placeholder='Поиск...'/>
        </div>
        </>
    )
}