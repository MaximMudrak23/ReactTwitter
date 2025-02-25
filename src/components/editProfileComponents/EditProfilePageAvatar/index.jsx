import defaultUser from '/defaultUser.svg';

export function EditProfilePageAvatar({userInfo}) {
    return (
    <div className="profile_info_IMG">
        <img src={userInfo.avatar || defaultUser} alt="Profile Picture" />
    </div>
)
}