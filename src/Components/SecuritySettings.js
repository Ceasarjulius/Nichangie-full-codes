import React, { useState } from 'react';

const securitySettingsStyle = {
  backgroundColor: '#d5f4d5',
  padding: '80px',
  borderRadius: '20px',
  marginBottom: '40px', // Increase the margin at the bottom
};

const SecuritySettingsStyle = {
  padding: '20px',
};

const inputStyle = {
  marginBottom: '10px',
};


const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
  };

  return (

    null
    
    // <div style={securitySettingsStyle}>
    //   <h3>Security Settings</h3>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group" style={inputStyle}>
    //       <label>Current Password</label>
    //       <input
    //         type="password"
    //         value={currentPassword}
    //         onChange={handleCurrentPasswordChange}
    //       />
    //     </div>
    //     <div className="form-group" style={inputStyle}>
    //       <label>New Password</label>
    //       <input
    //         type="password"
    //         value={newPassword}
    //         onChange={handleNewPasswordChange}
    //       />
    //     </div>
    //     <button type="submit">Change Password</button>
    //   </form>
    // </div>
  );
};

export default SecuritySettings;
