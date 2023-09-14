import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Campaign.css';
import DashboardLayout from './layout/dashboardLayout';

    function Campaign() {
      const now = 40/80 * 100;
      const now1= 12/30 * 100;
      const now2= 5;

      return (
        <DashboardLayout>
        <main className="content">
        
        <div className="welcome-text">
          <p><h2>Welcome back Lauryn</h2></p>
        </div>

        {/* Active Fundraisers */}
        <div className="active">
          <h3 className="sub-title">Active Fundraisers</h3>
          <div className="sub-container1">
            <div className="sub-content">
              <div className="sub-sub-container">
                <span className="sub-sub-sub-container1">
                  <div>
                <a href="/seemore" className="seemorelink">
                <img
          className="donationlist-image2"
          src="/Group.png" // Replace with your image path
          alt="Sick Patient"
        /></a>
        </div>
        <div classname="words">
          <p><h4>Help Anne Beat
             Cancer</h4></p>
        </div>
        <div >
          <p>  <a href="/readme" className="readmelink">Description</a></p>
        </div>
        <div>
          <p><h5>
             29/9/2023</h5></p>
        </div>

                </span>
                <span className="sub-sub-sub-container2">
                  <div className="addition-icon">
                  <a href="/startcampaign" className="startcampaignlink">
                    ➕ 
                    </a>
                    </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
       
       
     <main className="content">


<h3 className="sub-title">Progress Bar</h3>

            <div className="sub-content">
            <div className='flex flex-column'> 
      <div className='progress-container' >
           <div className='mb-2'>
            <p>Goal</p>
           <ProgressBar now={now} label={`${now}%`} variant="success" />
           </div>

           <div className='mb-2'>
            <p>Amount raised</p>
           <ProgressBar now={now} label={`${now2}M`} variant="success" />
           </div>

            <div className='mb-2'>
            <p>Total days(30days)</p>
           <ProgressBar now={now1} label={`${12}days`} variant="success" />
           </div>
           </div>            
            </div>
            <br/>
            <div> 
            </div>

          </div>
          </main>

        <div className="sub-container3">
          <h3 className="sub-title">List of Donations</h3>
         
          <a href="/donorslist" className="seemorelink"> <img
          className="donationlist-image1"
          src="/Group.png" 
          alt="Sick Patient"
        /></a>

        <br/>
            <a href="/seemore" className="seemorelink">
          
         <h4>See More</h4> 
         </a>

        </div>
      </main>
      </DashboardLayout>
        );
    }
    export default Campaign;
