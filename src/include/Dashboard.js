import React, { useState } from 'react';
import sidebar from "./sidebar";
import navbar from "./navbar";
// import footer from "./footer";
// import Ongoing from '../components/Ongoing.js'; 

import App from "../App";
import DashboardLayout from "../Components/layout/dashboardLayout";
// import "./dashboard.css"



function Dashboard() {


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
      duration: ' null',
      targetAmount: 'null',
      controlNumber: 'null',
    },

    // Add more rows here
  ]);

  const handleStatusClick = (status) => {
    // You can perform an action here based on the clicked status
    alert(`Clicked status: ${status}`);
  };

  const handleRemoveClick = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };


  return (
   <DashboardLayout>
     <div className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                <i
                  className="fa fa-chart-line fa-3x"
                  style={{ color: "#379537" }}
                ></i>
                <div className="ms-3">
                  <p className="mb-2">Total earnings</p>
                  <h6 className="mb-0">123456</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                <i
                  className="fa fa-chart-bar fa-3x"
                  style={{ color: "#379537" }}
                ></i>
                <div className="ms-3">
                  <p className="mb-2">Total campaigns</p>
                  <h6 className="mb-0">40</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                <i
                  className="fa fa-chart-area fa-3x"
                  style={{ color: "#379537" }}
                ></i>
                <div className="ms-3">
                  <p className="mb-2">Registered users</p>
                  <h6 className="mb-0">200</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                <i
                  className="fa fa-chart-pie fa-3x"
                  style={{ color: "#379537" }}
                ></i>

                <div className="ms-3">
                  <p className="mb-2">Pending campaigns</p>
                  <h6 className="mb-0">4</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="ongoing-section">
  <h4>Ongoing Fundraisers</h4>
  <a href="#" className="see-all-link">See All</a>
</div>


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
                  // onClick={() => handleStatusClick(item.status)}
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
          {/* <Ongoing/> */}
   </DashboardLayout>
  );
}
export default Dashboard;
