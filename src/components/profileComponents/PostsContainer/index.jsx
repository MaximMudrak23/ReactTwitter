import './styles.css'
import { Post } from '../Post';

export function PostsContainer({ userInfo, isOwner, setCurrentPosts, currentPosts, activeFolder}) {
  const allTargetPosts = currentPosts[activeFolder.value] || [];

  const pinnedPosts = allTargetPosts
  .filter(post => post.isPinned)
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const regularPosts = allTargetPosts
  .filter(post => !post.isPinned)
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="postsContainer">
      {allTargetPosts.length === 0 ? <p>В этой категории нет постов</p> :
        [...pinnedPosts, ...regularPosts].map(post =>
        <Post
          key={post.id}
          postInfo={post}
          userInfo={userInfo}
          isOwner={isOwner}
          activeFolder={activeFolder}
          setCurrentPosts={setCurrentPosts}
        />)
      }
    </div>
  );
}
