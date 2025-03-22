export async function findFolderFind(targetUser) {
    if (!targetUser) return;

    try {
        const response = await fetch(`http://localhost:3000/api/user/${targetUser}`);
        if(response.ok) {
            window.location.href = `/profile/${targetUser}`
        } else {
            alert('Пользователь не найден!');
        }
    } catch (error) {
        alert('Ошибка при поиске!');
        console.error('Ошибка при поиске!', error);
    }
}