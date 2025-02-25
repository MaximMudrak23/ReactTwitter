async function isValidVideo(file) {
    return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.preload = "metadata";
        video.src = URL.createObjectURL(file);

        video.onloadedmetadata = () => {
            URL.revokeObjectURL(video.src);
            if (video.duration > 120) {
                reject("Видео не может быть длиннее 120 секунд!");
            } else {
                resolve(true);
            }
        };

        video.onerror = () => {
            URL.revokeObjectURL(video.src);
            reject("Ошибка при обработке видео!");
        };
    });
}

export async function handleAvatarUpload(event, userInfo, setUserInfo) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('username', userInfo.username);
    
    try {
        const response = await fetch('http://localhost:3000/api/user/uploadAvatar', {
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

export async function handleBackgroundUpload(event, userInfo, setUserInfo) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('background', file);
    formData.append('username', userInfo.username);

    try {
        if (file.type.startsWith("video/")) {
            await isValidVideo(file);
        }

        const response = await fetch("http://localhost:3000/api/user/uploadBackground", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) throw new Error("Ошибка при загрузке фона!");

        const data = await response.json();
        const newBackgroundURL = `${data.background}?t=${Date.now()}`;

        setUserInfo(prev => ({ ...prev, background: newBackgroundURL }));
    } catch (error) {
        console.error("Ошибка при загрузке фона:", error);
        alert(error || "Ошибка при загрузке фона!");
    }
}
