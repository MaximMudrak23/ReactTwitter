export async function loadSingleChatInfo(chatID, setChatData) {
    try {
        const response = await fetch(`http://localhost:3000/api/chat/getFullChat/${chatID}`);
        if (!response.ok) throw new Error("Ошибка загрузки чата");
        const chatData = await response.json();
        setChatData(chatData);
    } catch (error) {
        console.error("Ошибка загрузки чата:", error);
    }
}
