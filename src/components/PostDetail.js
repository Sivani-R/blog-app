import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div className="post-detail">
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
};

export default PostDetail;
