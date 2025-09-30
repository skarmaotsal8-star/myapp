import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import './App.css';

const skills = [

  { id: 1, name: 'JavaScript', learners: 1200, category: 'Technical', detail: 'JavaScript is used for web development.' },
  { id: 2, name: 'Python', learners: 980, category: 'Technical', detail: 'Python is a versatile programming language.' },
  { id: 3, name: 'React', learners: 860, category: 'Technical', detail: 'React is a frontend library for building UI.' },
  { id: 4, name: 'Physics', learners: 700, category: 'Technical', detail: 'Physics studies matter and energy.' },
  { id: 5, name: 'Chemistry', learners: 650, category: 'Technical', detail: 'Chemistry studies substances and reactions.' },
  { id: 6, name: 'Machine Learning', learners: 670, category: 'Technical', detail: 'ML teaches computers to learn from data.' },

  { id: 7, name: 'UI/UX Design', learners: 300, category: 'Non-Technical', detail: 'UI/UX is about user-friendly design.' },
  { id: 8, name: 'Playing Guitar', learners: 400, category: 'Non-Technical', detail: 'Learn to play guitar and create music.' },
  { id: 9, name: 'Time Management', learners: 350, category: 'Non-Technical', detail: 'Manage your time efficiently.' },
  { id: 10, name: 'Gardening / Plant Care', learners: 280, category: 'Non-Technical', detail: 'Learn how to grow and care for plants.' },
  { id: 11, name: 'Public Speaking', learners: 400, category: 'Non-Technical', detail: 'Improve your communication skills.' },
  { id: 12, name: 'Photography', learners: 320, category: 'Non-Technical', detail: 'Capture stunning photos and visuals.' },
];

function HomePage() {
  const navigate = useNavigate();
  const technicalSkills = skills.filter(skill => skill.category === 'Technical');
  const nonTechnicalSkills = skills.filter(skill => skill.category === 'Non-Technical');

  return (
    <div>
      <Navbar />

     
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Technical Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
          {technicalSkills.map(skill => (
            <div
              key={skill.id}
              className="skill-card"
              onClick={() => navigate(`/skill/${skill.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <h4>{skill.name}</h4>
              <p>{skill.learners} learners</p>
            </div>
          ))}
        </div>
      </div>


      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Non-Technical Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
          {nonTechnicalSkills.map(skill => (
            <div
              key={skill.id}
              className="skill-card"
              onClick={() => navigate(`/skill/${skill.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <h4>{skill.name}</h4>
              <p>{skill.learners} learners</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
