export async function openChat(initiatorUsername, targetUsername, navigate) {
    try {
        const response = await fetch('http://localhost:3000/api/chat/openChat', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                initiatorUsername,
                targetUsername
            })
        });
        const data = await response.json();
        if (data) navigate(`/chat/${data}`);
        
    } catch (error) {
        alert('Ошибка при получении чата');
        console.error('Ошибка при получении чата:', error);
    }
}