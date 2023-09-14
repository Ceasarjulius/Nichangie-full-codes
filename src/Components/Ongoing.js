import React, { useState } from 'react';
import DashboardLayout from './layout/dashboardLayout';
import './Ongoing.css';

const Ongoing = () => {
  const [data, setData] = useState([
    {
      name: 'Ann Kimaro',
      description: 'In need of funds for chemotherapy',
      status: 'Ongoing',
      duration: '90 days',
      targetAmount: '43 million Tshs',
      controlNumber: '105537882',
    },
    {
      name: 'Ahmad Rashid',
      description: 'In need of funds for sickle cell anemia treatment',
      status: 'Paid',
      duration: '30 days',
      targetAmount: '3.7 million Tshs',
      controlNumber: '105537882',
    },
    {
      name: 'Young Sheldon',
      description: 'In need of funds for heart surgery',
      status: 'Open',
      duration: '14 days',
      targetAmount: '25 million Tshs',
      controlNumber: '105537882',
    },
    {
      name: 'Bakari Salum',
      description: 'In need of funds for kidney transplant',
      status: 'Due',
      duration: '0 days',
      targetAmount: '20 million Tshs',
      controlNumber: '105537882',
    },
    {
      name: 'Lulu Jacob',
      description: 'In need of funds for eye surgery',
      status: 'Rejected',
      duration: 'null',
      targetAmount: 'null',
      controlNumber: 'null',
    },
    // Add more rows here
  ]);

  const handleRemoveClick = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <DashboardLayout>
      <div className="ongoing-container">
        <table className="ongoing-table">
          <thead>
            <tr>
              <th>S/N</th> {/* Numbering column */}
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Target Amount</th>
              <th>Hospital's Deposit Account</th>
              <th>Remove</th> {/* New column for Remove option */}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td> {/* Numbering */}
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <p
                    className={`status-button status-${item.status.toLowerCase()}`}
                  >
                    {item.status}
                  </p>
                </td>
                <td>{item.duration}</td>
                <td>{item.targetAmount}</td>
                <td>{item.controlNumber}</td>
                <td>
                  <button onClick={() => handleRemoveClick(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="8">1/10</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Ongoing;
