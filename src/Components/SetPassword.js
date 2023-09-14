import React, { useState } from 'react';
import './SetPassword.css'; // Import your custom CSS file


const SetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [message, setMessage] = useState('');

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      setMessage('Password set successfully!');
    } else {
      setMessage('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="set-password-container">
      <div className="top-center">
        <div className="nichangie-logo">
          <img src="/handmade.png" alt="Handmade" width="100" height="100" />
          <h1>Nichangie</h1>
        </div>
      </div>
      <div className="centered-content">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit} className="password-form">
          <div className="input-container">
            <label htmlFor="newPassword">Enter New Password:</label>
            <input type="password" id="newPassword" value={newPassword} onChange={handlePasswordChange} />
          </div>
          <div className="input-container">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SetPassword;
