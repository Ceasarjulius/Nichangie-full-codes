import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function DashboardLayout({children}) {
  const location = useLocation();
  return (
    <div>
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
          <a href="Dashboard" className="navbar-brand mx-4 mb-3">
            <h3 className=" " style={{ color: "black" }}>
              <img
                className="rounded-circle me-lg-2"
                src="/Handmade.png"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              Nichangie
            </h3>
          </a>

          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img
                className="rounded-circle me-lg-2"
                src="https://th.bing.com/th/id/OIP.AdadxqYUnW4587aYdUpfxwHaHY?w=191&h=190&c=7&r=0&o=5&dpr=1.6&pid=1.7"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Lauryn Kimario</h6>
              <span>Admin</span>
            </div>
          </div>

          <div className="navbar-nav w-100">
          <Link to="/Dashboard" className={`nav-item nav-link ${location.pathname === '/Dashboard' ? 'active' : ''}`}>
  <i className="fa fa-tachometer-alt me-2"></i>Dashboard
</Link>

<Link to="/Ongoing" className={`nav-item nav-link ${location.pathname === '/Ongoing' ? 'active' : ''}`}>
  <i className="fa fa-laptop me-2"></i>Fundraisers
</Link>

<Link to="/ListofDonors" className={`nav-item nav-link ${location.pathname === '/ListofDonors' ? 'active' : ''}`}>
  <i className="fa fa-th me-2"></i>Donations
</Link>

<Link to="/Support" className={`nav-item nav-link ${location.pathname === '/Support' ? 'active' : ''}`}>
  <i className="fa fa-keyboard me-2"></i>Support
</Link>

<Link to="/Campaign" className={`nav-item nav-link ${location.pathname === '/Campaign' ? 'active' : ''}`}>
  <i className="fa fa-table me-2"></i>Campaigns
</Link>

          </div>
        </nav>
      </div>

      <div className="content">
        <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
          <a href="/Dashboard" className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0"></h2>
          </a>
          <a
            href="#"
            className="sidebar-toggle flex-shrink-0"
            style={{ color: "#379537" }}
          >
            <i className="fa fa-bars" style={{ color: "#379537" }}></i>
          </a>
          <form className="d-none d-md-flex ms-4">
            <input
              className="form-control border-0"
              type="search"
              placeholder="Search"
            />
          </form>
          <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-bell me-lg-2"></i>
                <span className="d-none d-lg-inline-flex">Notification</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">Profile updated</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">New user added</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">Password changed</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item text-center">
                  See all notifications
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  className="rounded-circle me-lg-2"
                  src="https://th.bing.com/th/id/OIP.AdadxqYUnW4587aYdUpfxwHaHY?w=191&h=190&c=7&r=0&o=5&dpr=1.6&pid=1.7"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="d-none d-lg-inline-flex">Lauryn kimario</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                {/* <a href="#" className="dropdown-item">My Profile</a> */}
                <a href="#" className="dropdown-item">
                  Settings
                </a>
                <a href="#" className="dropdown-item">
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="container-fluid pt-4 px-4">
         {children}
        </div>
      </div>
    </div>
  );
}
