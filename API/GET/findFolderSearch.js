export async function findFolderSearch(query, setSearchResults) {
    if (!query) return [];

    try {
        const response = await fetch(`http://localhost:3000/api/user/search/${query}`);
        if (!response.ok) throw new Error('Ошибка при поиске пользователей');
        const data = await response.json();
        setSearchResults(data);
        return;
    } catch (error) {
        console.error('Ошибка при поиске:', error);
        return [];
    }
}