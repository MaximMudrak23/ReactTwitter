export async function handleAvatarDelete(userInfo, setUserInfo) {
    try {
        const response = await fetch("http://localhost:3000/api/user/deleteAvatar", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: userInfo.username }),
        });

        if (!response.ok) throw new Error("Ошибка при удалении фото!");

        setUserInfo(prev => ({ ...prev, avatar: null }));
    } catch (error) {
        console.error("Ошибка при удалении фото:", error);
    }
}

export async function handleBackgroundDelete(userInfo, setUserInfo) {
    try {
        const response = await fetch("http://localhost:3000/api/user/deleteBackground", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: userInfo.username }),
        });

        if (!response.ok) throw new Error("Ошибка при удалении фона!");

        setUserInfo(prev => ({ ...prev, background: null }));
    } catch (error) {
        console.error("Ошибка при удалении фона:", error);
    }
}