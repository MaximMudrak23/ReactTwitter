export async function loadPostData(username, setCurrentPosts) {
    if (!username) return;

    try {
        const response = await fetch(`http://localhost:3000/api/post/getPost/${username}`);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки постов: ${response.status}`);
        }
        const userPosts = await response.json();
        setCurrentPosts(userPosts);
    } catch (error) {
        console.error("Ошибка загрузки постов:", error);
        setCurrentPosts({ created: [], liked: [], saved: [] });
    }
}