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

        const authorResponse = await fetch(`http://localhost:3000/api/user/${username}`);
        const authorData = authorResponse.ok ? await authorResponse.json() : { username };

        const fullNewPost = {
            ...newPost,
            author: authorData
        };

        setUser(prev => ({
            ...prev,
            posts: { ...prev.posts, created: [fullNewPost.id, ...prev.posts.created] }
        }));

        setCurrentPosts(prev => ({
            ...prev,
            created: [fullNewPost, ...prev.created]
        }));

    } catch (error) {
        console.error('Ошибка при добавлении поста!', error);
    }
}