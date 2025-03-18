import socket from '../websocket';

export async function sendMessage(text, chatID, setChatMessages) {
    if (!text.trim()) return;

    try {
        const response = await fetch('http://localhost:3000/api/chat/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chatID,
                author: localStorage.getItem('username'),
                text,
                date: new Date().toLocaleString(),
                isRead: false,
            })
        });
        if (!response.ok) throw new Error('Ошибка отправки сообщения');
        const newMessage = await response.json();

        socket.emit('sendMessage', { ...newMessage, chatID });
    } catch (error) {
        alert('Ошибка отправки сообщения');
        console.error('Ошибка отправки сообщения:', error);
    }
}