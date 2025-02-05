export const handlePinOption = () => {
    
}
export const handleEditOption = () => {
    
}
export const handleDeleteOption = (delPostID, posts, setPosts) => {
    setPosts(posts.filter(post => post.id !== delPostID));
}