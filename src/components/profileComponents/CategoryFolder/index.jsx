import './styles.css'

export function CategoryFolder({allFolders, activeFolder, setActiveFolder}) {
  return (
    <div className="profile__folders">
      {allFolders.map((folder,index) => (
        <div
        key={index}
        className={`container ${activeFolder === folder ? 'active' : ''}`}
        onClick={()=>setActiveFolder(folder)}
        >{folder}</div>
      ))}
    </div>
  )
}