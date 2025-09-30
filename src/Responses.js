// src/Responses.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';

function Responses({ requests = [] }) {
  // Dummy requests if none provided
  const allRequests = requests.length > 0 ? requests : [
    { id: 1, user: 'You', skill: 'JavaScript', reason: 'Learn web dev', responders: ['Alice', 'Bob'] },
    { id: 2, user: 'You', skill: 'Guitar', reason: 'Play music', responders: ['Charlie'] },
    { id: 3, user: 'You', skill: 'React', reason: 'Frontend library', responders: ['David'] },
  ];

  const myRequestsWithResponses = allRequests.filter(
    req => req.user === 'You' && req.responders.length > 0
  );

  const [activeChat, setActiveChat] = useState(null); // responder clicked
  const [messages, setMessages] = useState([]);

  const openChat = (requestId, responder) => {
    setActiveChat({ requestId, responder });
    setMessages([
      { sender: responder, text: `Hi! I can help you with ${allRequests.find(r => r.id === requestId).skill}` }
    ]);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const input = e.target.message.value;
    if (!input) return;
    setMessages([...messages, { sender: 'You', text: input }]);
    e.target.message.value = '';
  };

  const sendFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setMessages([...messages, { sender: 'You', text: `Sent file: ${file.name}` }]);
    e.target.value = '';
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>Responses to Your Requests</h2>

        {myRequestsWithResponses.length === 0 ? (
          <p>No one has responded to your requests yet.</p>
        ) : (
          <div className="responses-container">
            {myRequestsWithResponses.map(req => (
              <div key={req.id} className="request-chat">
                <h4>{req.skill}</h4>
                {req.reason && <p style={{ fontStyle: 'italic', color: '#555' }}>Reason: {req.reason}</p>}
                <div className="messages">
                  {req.responders.map((responder, index) => (
                    <div
                      key={index}
                      className="message-bubble responder-bubble"
                      onClick={() => openChat(req.id, responder)}
                    >
                      {responder} wants to help
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Chat Modal */}
        {activeChat && (
          <div className="chat-modal">
            <div className="chat-window">
              <div className="chat-header">
                Chat with {activeChat.responder}
                <button className="close-btn" onClick={() => setActiveChat(null)}>X</button>
              </div>
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div key={index} className={`chat-message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
                    <strong>{msg.sender}: </strong>{msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={sendMessage} className="chat-input">
                <input type="text" name="message" placeholder="Type a message..." />
                <input type="file" onChange={sendFile} />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Responses;
