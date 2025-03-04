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
            const existingPost = prev.created.find(post => post.id === updatedPost.id) 
            || prev.pinned.find(post => post.id === updatedPost.id);
        
            const fullUpdatedPost = {
                ...updatedPost,
                author: existingPost ? existingPost.author : updatedPost.author
            };
        
            const updatedCreated = prev.created.map(post =>
                post.id === updatedPost.id ? fullUpdatedPost : post
            );

            let updatedPinned = prev.pinned.filter(post => post.id !== updatedPost.id);
            if (updatedPost.isPinned) {
                updatedPinned = [fullUpdatedPost, ...updatedPinned]; 
            }
            
            return {
                ...prev,
                created: [...updatedCreated], 
                pinned: [...updatedPinned] 
            };
        });
    } catch (error) {
        console.error('Ошибка при изменении закрепа!', error);
    }
}

export async function editPost(postId, currentText, setCurrentPosts) {
    const newText = prompt("Введите новый текст поста:", currentText);
    
    if (!newText || newText.trim() === "") {
        deletePost(postId, setCurrentPosts);
    }

    try {
        const response = await fetch(`http://localhost:3000/api/post/edit/${postId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newText })
        });

        if (!response.ok) {
            throw new Error(`Ошибка при редактировании поста: ${response.status}`);
        }

        const updatedPost = await response.json();

        setCurrentPosts(prev => {
            const existingPost = prev.created.find(post => post.id === updatedPost.id) 
            || prev.pinned.find(post => post.id === updatedPost.id);

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
                )
            };
        });
    } catch (error) {
        console.error("Ошибка при редактировании поста!", error);
    }
}

export async function deletePost(postId, setCurrentPosts) {
    const confirmDelete = confirm("Вы уверены, что хотите удалить этот пост?");
    if (!confirmDelete) return;

    try {
        const response = await fetch(`http://localhost:3000/api/post/delete/${postId}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`Ошибка при удалении поста: ${response.status}`);
        }

        setCurrentPosts(prev => ({
            ...prev,
            created: prev.created.filter(post => post.id !== postId),
            pinned: prev.pinned.filter(post => post.id !== postId),
            liked: prev.liked.filter(post => post.id !== postId),
            saved: prev.saved.filter(post => post.id !== postId)
        }));

    } catch (error) {
        console.error("Ошибка при удалении поста!", error);
    }
}

