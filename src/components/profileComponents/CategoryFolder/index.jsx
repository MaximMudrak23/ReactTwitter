import './styles.css'

export function CategoryFolder({allFolders, activeFolder, setActiveFolder}) {
  return (
    <div className="profile__folders">
      {allFolders.map((folder,index) => (
        <div
        key={index}
        className={`container ${activeFolder.name === folder.name ? 'active' : ''}`}
        onClick={()=>setActiveFolder(folder)}
        >{folder.name}</div>
      ))}
    </div>
  )
}