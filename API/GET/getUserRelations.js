export async function getUserRelations(username) {
    try {
        const response = await fetch(`http://localhost:3000/api/user/relations/${username}`);
        if (!response.ok) throw new Error('Ошибка при получении связей');
        return await response.json();
    } catch (error) {
        console.error(error);
        return { userSubscribers: [], userSubscribtions: [] };
    }
}