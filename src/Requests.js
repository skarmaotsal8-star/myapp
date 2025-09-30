import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';

function Requests() {
  // Initial dummy requests from other users
  const initialRequests = [
    { id: 1, user: 'Alice', skill: 'JavaScript', category: 'Technical', reason: 'Want to learn for web dev', status: 'Pending' },
    { id: 2, user: 'Bob', skill: 'Guitar', category: 'Non-Technical', reason: 'Play music', status: 'Pending' },
    { id: 3, user: 'Charlie', skill: 'Python', category: 'Technical', reason: 'Data analysis', status: 'Pending' },
    { id: 4, user: 'David', skill: 'Photography', category: 'Non-Technical', reason: 'Improve my photography skills', status: 'Pending' },
    { id: 5, user: 'Eve', skill: 'Machine Learning', category: 'Technical', reason: 'Build AI projects', status: 'Pending' },
  ];

  const [requests, setRequests] = useState(initialRequests);
  const [skillName, setSkillName] = useState('');
  const [category, setCategory] = useState('Technical');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skillName) return;

    const newRequest = {
      id: Date.now(),
      user: 'You', // current user
      skill: skillName,
      category,
      reason,
      status: 'Pending',
    };

    setRequests([...requests, newRequest]);

    // Reset form
    setSkillName('');
    setCategory('Technical');
    setReason('');
  };

  const handleRespond = (id) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'Responded by You' } : req
    ));
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2 className="section-title">Request a Skill</h2>

        {/* Request Form */}
        <form className="request-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Skill Name"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            required
          />

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Technical">Technical</option>
            <option value="Non-Technical">Non-Technical</option>
          </select>

          <textarea
            placeholder="Reason for requesting this skill"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />

          <button type="submit">Submit Request</button>
        </form>

        {/* Display all requests */}
        <h3 style={{ marginTop: '2rem' }}>All Skill Requests</h3>
        <div className="requests-container">
          {requests.length === 0 ? (
            <p>No requests submitted yet.</p>
          ) : (
            requests.map((req) => (
              <div key={req.id} className="request-card">
                <h4>{req.skill}</h4>
                <p>User: <strong>{req.user}</strong></p>
                <p>Category: {req.category}</p>
                <p>Status: <strong>{req.status}</strong></p>
                {req.reason && <p>Reason: {req.reason}</p>}

                {req.status === 'Pending' && (
                  <button
                    onClick={() => handleRespond(req.id)}
                    style={{ marginTop: '0.5rem', backgroundColor: '#10b981', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}
                  >
                    Respond
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Requests;
