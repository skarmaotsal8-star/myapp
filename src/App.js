import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import SkillDetail from './SkillDetail';
import Profile from './Profile';
import Requests from './Requests';
import Responses from './Responses';
import Premium from './Premium';

function App() {
  return (
    <Routes>
      {/* Login page */}
      <Route path="/" element={<Login />} />

      {/* Home page */}
      <Route path="/home" element={<HomePage />} />

      {/* Skill detail page */}
      <Route path="/skill/:id" element={<SkillDetail />} />

      {/* Profile page */}
      <Route path="/profile" element={<Profile />} />

      {/* Requests page */}
      <Route path="/requests" element={<Requests />} />

      {/* Responses page */}
      <Route path="/responses" element={<Responses />} />

      {/* Premium page */}
      <Route path="/premium" element={<Premium />} />

      {/* Catch-all 404 */}
      <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '2rem' }}>
        404 Page Not Found
      </div>} />
    </Routes>
  );
}

export default App;
