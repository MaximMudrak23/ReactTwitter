export async function editPost(postId, currentText, setCurrentPosts) {
    const newText = prompt("Введите новый текст поста:", currentText);
    
    if (!newText || newText.trim() === "") {
        deletePost(postId, setCurrentPosts);
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/post/edit/${postId}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newText })
        });

        if (!response.ok) {
            throw new Error(`Ошибка при редактировании поста: ${response.status}`);
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
        console.error("Ошибка при редактировании поста!", error);
    }
}