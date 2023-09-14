import React from 'react'
import DashboardLayout from './layout/dashboardLayout'
import GeneralSettings from './Campaign';
import SecuritySettings from './SecuritySettings';

const settingsPageStyle = {
    padding: '20px',
  };
  


export default function Settings() {
  return (
    <DashboardLayout>
            <div className="container" style={settingsPageStyle}>
        <h2></h2>
        <div className="row">
          <div className="col-md-6">
            <GeneralSettings />
          </div>
          <div className="col-md-6">
            <SecuritySettings />
          </div>
          {/* Add more settings Components or sections here */}
        </div>
      </div>
        
    </DashboardLayout>

  )
}
