import './styles.css'

export function EditProfilePageInput({userFullName, setUserFullName}) {
    return (
    <div className="profileMain__edit__input">
        <input type="text" maxLength={50} value={userFullName} onChange={(e)=>setUserFullName(e.target.value)} />
    </div>
    )
}