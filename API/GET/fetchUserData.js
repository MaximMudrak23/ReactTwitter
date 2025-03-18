export async function fetchUserData(username) {
    try {
        const response = await fetch(`http://localhost:3000/api/user/${username}`);
        if (!response.ok) throw new Error('Ошибка загрузки');
        return await response.json();
    } catch (error) {
        console.error("Ошибка загрузки:", error);
        return null;
    }
}