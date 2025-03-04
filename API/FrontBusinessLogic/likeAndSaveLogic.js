export async function toggleLike(postId, setCurrentPosts) {
    try {
        const username = localStorage.getItem('username');
        if (!username) {
            alert('Сперва войдите в аккаунт!');
            return;
        }

        const response = await fetch(`http://localhost:3000/api/post/toggleLike/${postId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        });

        if (!response.ok) {
            throw new Error(`Ошибка при изменении лайка: ${response.status}`);
        }

        const updatedPost = await response.json();

        setCurrentPosts(prev => {
            const isLikedByCurrentUser = updatedPost.likes.includes(username);

            const existingPost = prev.created.find(post => post.id === updatedPost.id) 
            || prev.pinned.find(post => post.id === updatedPost.id)
            || prev.liked.find(post => post.id === updatedPost.id);

            const fullUpdatedPost = {
                ...updatedPost,
                author: existingPost ? existingPost.author : updatedPost.author
            };

            return {
                ...prev,
                created: prev.created.map(post =>
                    post.id === updatedPost.id ? fullUpdatedPost : post
                ),
                pinned: prev.pinned.map(post =>
                    post.id === updatedPost.id ? fullUpdatedPost : post
                ),
                liked: isLikedByCurrentUser
                    ? [...prev.liked, fullUpdatedPost]
                    : prev.liked.filter(post => post.id !== updatedPost.id)
            };
        });

    } catch (error) {
        console.error('Ошибка при изменении лайка!', error);
    }
}

export async function toggleSave(postId, setCurrentPosts) {
    console.log("Нажата кнопка сохранения поста:", postId);

    try {
        const currentUsername = localStorage.getItem("username");
        if (!currentUsername) {
            console.error("Ошибка: имя пользователя не найдено в localStorage");
            return;
        }

        const response = await fetch(
            `http://localhost:3000/api/post/toggleSave/${postId}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: currentUsername }),
            }
        );

        if (!response.ok) {
            throw new Error(`Ошибка при изменении сохранения: ${response.status}`);
        }

        const updatedPost = await response.json();

        setCurrentPosts((prev) => {
            const existingPost =
                prev.created.find((post) => post.id === updatedPost.id) ||
                prev.pinned.find((post) => post.id === updatedPost.id);

            const fullUpdatedPost = {
                ...updatedPost,
                author: existingPost ? existingPost.author : updatedPost.author,
            };

            return {
                ...prev,
                created: prev.created.map((post) =>
                    post.id === updatedPost.id ? fullUpdatedPost : post
                ),
                pinned: prev.pinned.map((post) =>
                    post.id === updatedPost.id ? fullUpdatedPost : post
                ),
                saved: updatedPost.saves.includes(currentUsername)
                    ? [fullUpdatedPost, ...prev.saved]
                    : prev.saved.filter((post) => post.id !== updatedPost.id),
            };
        });
    } catch (error) {
        console.error("Ошибка при изменении сохранения!", error);
    }
}