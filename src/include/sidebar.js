import React from "react";

function sidebar(){
    return (
        <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
            <a href="Dashboard" className="navbar-brand mx-4 mb-3">
                <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
            </a>
            <div className="d-flex align-items-center ms-4 mb-4">
                <div className="position-relative">
                    <img className="rounded-circle" src="img/user.jpg" alt="" />
                    <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                </div>
                <div className="ms-3">
                    <h6 className="mb-0">Lauryn Kimario</h6>
                    <span>Admin</span>
                </div>
            </div>
            <div className="navbar-nav w-100">
                <a href="/Dashboard" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                <div className="nav-item dropdown">
                    <a href="/Ongoing" className="nav-link dropdown-toggle" ><i className="fa fa-laptop me-2"></i>Ongoing fundraisers</a>
                    {/* <div className="dropdown-menu bg-transparent border-0">
                        <a href="button.html" className="dropdown-item">Buttons</a>
                        <a href="typography.html" className="dropdown-item">Typography</a>
                        <a href="element.html" className="dropdown-item">Other Elements</a>
                    </div> */}
                </div>
                <a href="/ListofDonors" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Donations</a>
                <a href="/Support" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Support</a>
                <a href="/Settings" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Settings</a>
                {/* <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a> */}
                {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
                    <div className="dropdown-menu bg-transparent border-0">
                        <a href="signin.html" className="dropdown-item">Sign In</a>
                        <a href="signup.html" className="dropdown-item">Sign Up</a>
                        <a href="404.html" className="dropdown-item">404 Error</a>
                        <a href="blank.html" className="dropdown-item">Blank Page</a>
                    </div>
                </div> */}
            </div>
        </nav>
    </div>

    );

};
export default sidebar;