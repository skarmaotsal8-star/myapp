import React from 'react';
import Navbar from './Navbar';
import './App.css';

function Premium() {
  const plans = [
    {
      name: 'Basic',
      price: '₹500/month',
      features: [
        'Access to basic skills',
        'Community support',
        'Limited requests'
      ]
    },
    {
      name: 'Pro',
      price: '₹1500/month',
      features: [
        'Access to all technical skills',
        'Priority support',
        'Unlimited requests',
        'Access to premium content',
        'Video call with mentors'
      ]
    },
    {
      name: 'Ultra Pro',
      price: '₹2500/month',
      features: [
        'All Basic and Pro features',
        '1-on-1 mentorship',
        'Exclusive webinars',
        'Early access to new skills',
        'Your requests shown at top',
        'Faster responses from other users'
      ]
    }
  ];

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Premium Plans</h2>
        <div className="premium-container">
          {plans.map((plan, index) => (
            <div key={index} className="premium-card">
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
              <button>Subscribe</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Premium;
