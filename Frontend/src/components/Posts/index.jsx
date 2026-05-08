import './styles.css'
import { PostCard } from "../PostCard";
export const Posts = ({ 
  posts, 
  handleRemove, 
  handleEdit,
  title,
  body,
  cover,
  handleChangeTitle,
  handleChangeBody,
  handleChangeCover

}) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          titlePost={post.title}
          bodyPost={post.body}
          id={post.id}
          coverPost={post.cover}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      ))}  
        
    
    </div>
  );
};