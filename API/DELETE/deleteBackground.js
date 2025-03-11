export async function deleteBackground(userInfo, setUserInfo) {
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