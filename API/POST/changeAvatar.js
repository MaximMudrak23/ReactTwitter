export async function changeAvatar(event, userInfo, setUserInfo) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('username', userInfo.username);
    
    try {
        const response = await fetch('http://localhost:3000/api/edit/uploadAvatar', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) throw new Error('Ошибка при загрузке аватара!');

        const data = await response.json();
        const newAvatarURL = `${data.avatar}?t=${Date.now()}`;

        setUserInfo(prev => ({ ...prev, avatar: newAvatarURL }));
    } catch (error) {
        console.error('Ошибка при загрузке фото:', error);
    }
}