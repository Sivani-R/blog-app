import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PostDetail from './components/PostDetail';
import AddPost from './components/AddPost';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create" element={<AddPost />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;