export async function loadChatData(username) {
    if (!username) return [];

    try {
        const response = await fetch(`http://localhost:3000/api/chat/${username}`);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки чатов: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка загрузки чатов:", error);
        return [];
    }
}
