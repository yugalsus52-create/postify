function PostCard({ post, onLike }) {
  return (
    <article className="post-card">
      <div className="post-header">
        <div className="avatar">
          {post.username.charAt(0)}
        </div>
        
        <div>
          <h3>{post.username}</h3>
          <span>{post.category}</span>
        </div>
      </div>

      <p className="post-content">{post.content}</p>

      <div className="post-footer">
        <button onClick={() => onLike(post.id)}>
          ❤️ {post.likes}
        </button>

        <span>💬 {post.comments}</span>
      </div>
    </article>
  );
}

export default PostCard;