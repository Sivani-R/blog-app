import React, { useState, useEffect } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post._id} className="post-item">
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;