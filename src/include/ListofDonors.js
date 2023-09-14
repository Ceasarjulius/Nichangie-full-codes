import React from 'react'
import DashboardLayout from '../Components/layout/dashboardLayout'
import './DonorList.css';
 

    const ListofDonors = ({ donors }) => {
        // Example donor data
        const exampleDonors = [
          { id: 1, name: 'John Doe', submissionDate: '2023-08-15', amountDonated: 56000, donatedTo: 'Cancer Research' },
          { id: 2, name: 'Jane Smith', submissionDate: '2023-08-16', amountDonated: 10000, donatedTo: 'Education Fund' },
          { id: 3, name: 'Alice Johnson', submissionDate: '2023-08-17', amountDonated: 200000, donatedTo: 'Animal Shelter' },
          { id: 4, name: 'Kevin Sowax', submissionDate: '2023-08-10', amountDonated: 100000, donatedTo: 'Sickle cell anaemia' },
          { id: 5, name: 'Caroline Joune', submissionDate: '2023-07-27', amountDonated: 350000, donatedTo: 'Kidney transplant' },
        ];
  return (
    <DashboardLayout>
         <div className="donor-list">
      <h1>List of Donors</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Submission Date</th>
            <th>Amount Donated</th>
            <th>Donated To</th>
          </tr>
        </thead>
        <tbody>
          {exampleDonors.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.id}</td>
              <td>{donor.name}</td>
              <td>{donor.submissionDate}</td>
              <td>Tsh{donor.amountDonated}</td>
              <td>{donor.donatedTo}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">1/10</td>
          </tr>
        </tfoot>
      </table>
    </div>

    </DashboardLayout>
  )


};

export default ListofDonors;