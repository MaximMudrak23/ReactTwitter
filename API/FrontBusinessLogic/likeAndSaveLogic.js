export async function toggleLike(postID, setCurrentPosts, isOwner) {
    try {
        const username = localStorage.getItem('username');
        if (!username) {
            alert('Сперва войдите в аккаунт!');
            return;
        }

        const response = await fetch(`http://localhost:3000/api/post/toggleLike/${postID}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        });

        if (!response.ok) {
            throw new Error(`Ошибка при изменении лайка: ${response.status}`);
        }

        const updatedPost = await response.json();

        const authorResponse = await fetch(`http://localhost:3000/api/user/${updatedPost.author}`);
        const authorData = authorResponse.ok ? await authorResponse.json() : { username: updatedPost.author };

        setCurrentPosts(prev => {
            const isLikedByUs = updatedPost.likes.includes(username);

            const fullUpdatedPost = {
                ...updatedPost,
                author: authorData
            };

            return {
                ...prev,
                created: prev.created.map(post =>
                    post.id === updatedPost.id ? fullUpdatedPost : post
                ),
                liked: isLikedByUs && isOwner
                    ? [fullUpdatedPost, ...prev.liked]
                    : prev.liked.filter(post => post.id !== updatedPost.id),
                saved: prev.saved.map(post =>
                    post.id === updatedPost.id ? fullUpdatedPost : post)
            };
        });

    } catch (error) {
        console.error('Ошибка при изменении лайка!', error);
    }
}

export async function toggleSave(postId, setCurrentPosts, isOwner) {
    try {
        const username = localStorage.getItem("username");
        if (!username) {
            alert('Сперва войдите в аккаунт!');
            return;
        }

        const response = await fetch(`http://localhost:3000/api/post/toggleSave/${postId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username }),
            }
        );

        if (!response.ok) {
            throw new Error(`Ошибка при изменении сохранения: ${response.status}`);
        }

        const updatedPost = await response.json();

        const authorResponse = await fetch(`http://localhost:3000/api/user/${updatedPost.author}`);
        const authorData = authorResponse.ok ? await authorResponse.json() : { username: updatedPost.author };

        setCurrentPosts(prev => {
            const isSavedByUs = updatedPost.saves.includes(username);
            
            const fullUpdatedPost = {
                ...updatedPost,
                author: authorData
            };

            return {
                ...prev,
                created: prev.created.map(post =>
                    post.id === updatedPost.id ? fullUpdatedPost : post
                ),
                liked: prev.liked.map(post =>
                    post.id === updatedPost.id ? fullUpdatedPost : post
                ),
                saved: isSavedByUs && isOwner
                    ? [fullUpdatedPost, ...prev.saved]
                    : prev.saved.filter(post => post.id !== updatedPost.id)
            };
        });
    } catch (error) {
        console.error("Ошибка при изменении сохранения!", error);
    }
}
