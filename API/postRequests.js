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

export async function addPost(text, username, setUser, setCurrentPosts) {
    if (!text.trim()) return;
    const postID = Date.now() + `_${username}`;

    try {
        const response = await fetch('http://localhost:3000/api/post/addPost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, username, id: postID }),
        });

        if (!response.ok) {
            throw new Error(`Ошибка при добавлении поста: ${response.status}`);
        }

        const newPost = await response.json();

        setUser(prev => ({
            ...prev,
            posts: { ...prev.posts, created: [newPost.id, ...prev.posts.created] }
        }));

        setCurrentPosts(prev => ({...prev,created: [newPost, ...prev.created]}));
    } catch (error) {
        console.error('Ошибка при добавлении поста!', error);
    }
}