import React, { useState } from 'react';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [readTime, setReadTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content, readTime };
    await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
    setTitle('');
    setContent('');
    setReadTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <input
        type="text"
        placeholder="Read Time"
        value={readTime}
        onChange={(e) => setReadTime(e.target.value)}
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
