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
            liked: prev.liked.filter(post => post.id !== postId),
            saved: prev.saved.filter(post => post.id !== postId)
        }));

    } catch (error) {
        console.error("Ошибка при удалении поста!", error);
    }
}