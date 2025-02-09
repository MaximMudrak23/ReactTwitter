import './styles.css'
import { Post } from '../Post';

export function PostsContainer({allPosts, activeFolder}) {
  const filteredPosts = allPosts.filter(post => post.category === activeFolder);
  return (
    <div className="postsContainer">
      {
        filteredPosts.length === 0 ? <p>В этой категории нет постов</p> : filteredPosts.map((post, index) => (<Post key={index} postObj={post} />))
      }
    </div>
  );
}
