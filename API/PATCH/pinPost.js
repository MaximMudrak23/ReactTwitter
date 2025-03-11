export async function pinPost(postId, isPinned, setCurrentPosts) {
    try {
        const response = await fetch(`http://localhost:3000/api/post/pin/${postId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isPinned: !isPinned })
        });

        if (!response.ok) {
            throw new Error(`Ошибка при изменении закрепа: ${response.status}`);
        }

        const updatedPost = await response.json();

        setCurrentPosts(prev => {
            const existingPost = prev.created.find(post => post.id === updatedPost.id);

            const fullUpdatedPost = {
                ...updatedPost,
                author: existingPost ? existingPost.author : updatedPost.author
            };

            return {
                ...prev,
                created: prev.created.map(post =>
                    post.id === updatedPost.id ? fullUpdatedPost : post
                )
            };
        });
    } catch (error) {
        console.error('Ошибка при изменении закрепа!', error);
    }
}