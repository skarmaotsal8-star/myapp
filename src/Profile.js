import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';

function Profile() {
  // Dummy user data
  const [user, setUser] = useState({
    name: 'admin',
    email: 'admine@example.com',
    profilePic: 'https://via.placeholder.com/150?text=Profile+Pic',
    bio: 'A passionate learner exploring technical and non-technical skills.'
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(formData);
    setEditMode(false);
  };

  const enrolledSkills = [
    { id: 1, name: 'JavaScript', category: 'Technical' },
    { id: 2, name: 'React', category: 'Technical' },
    { id: 8, name: 'Playing Guitar', category: 'Non-Technical' },
    { id: 12, name: 'Photography', category: 'Non-Technical' },
  ];

  const techSkills = enrolledSkills.filter(skill => skill.category === 'Technical');
  const nonTechSkills = enrolledSkills.filter(skill => skill.category === 'Non-Technical');

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <img src="/logo192.png" alt="Profile" className="profile-pic" />
          {editMode ? (
            <div className="edit-form">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
              <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio"></textarea>
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          ) : (
            <>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.bio}</p>
              <button onClick={() => setEditMode(true)}>Edit Profile</button>
            </>
          )}
        </div>

        <div className="enrolled-skills">
          <h3>Technical Skills</h3>
          <ul>
            {techSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>

          <h3>Non-Technical Skills</h3>
          <ul>
            {nonTechSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
