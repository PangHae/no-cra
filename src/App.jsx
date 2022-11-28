import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import TeamPage from './pages/TeamPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/team" element={<TeamPage />} />
    </Routes>
  );
};

export default App;
