
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Createaccount from './Components/Createaccount';
import HomePage from './Components/HomePage';
import CreateFundraiser from './Components/CreateFundraiser';
import DonationForm from './Components/DonationForm';
import ForgotPassword from './Components/ForgotPassword';
import Readmore from './Components/Readmore';
import UserDashboard from './Components/UserDashbord';
import './Julius.css';
import SigninForm from './Components/SigninForm';
import FileUpload from './Components/FileUpload';
import 'bootstrap/dist/css/bootstrap.min.css';

import sidebar from './include/sidebar';
import navbar from './include/navbar';
import Footer from './Components/Footer';
import Dashboard from './include/Dashboard';
import ListofDonors from './include/ListofDonors';
import Support from './Components/Support';
import Campaign from './Components/Campaign';
import Ongoing from './Components/Ongoing';
import SeeAll from './Components/SeeAll';

// import './App.css';
class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
		<Routes>
				<Route exact path='/' element={< HomePage />}></Route>
				<Route exact path='/login' element={<SigninForm/>}></Route>
				<Route exact path='/register' element={< Createaccount />}></Route>
		<Route exact path='/fileupload' element={<FileUpload />}></Route>
        <Route exact path='/donate' element={<DonationForm />}></Route>
        <Route exact path='/createfundraising' element={<CreateFundraiser />}></Route>
        <Route exact path='/forgot' element={<ForgotPassword />}></Route>
		<Route exact path='/readmore' element={< Readmore/>}></Route>
		<Route exact path='/userdashbord' element={<UserDashboard />}></Route>
		<Route exact path='/seeall' element={<SeeAll />}></Route>



		<Route exact path='/Dashboard' element={<Dashboard />}></Route>

        <Route exact path='/ListofDonors' element={<ListofDonors />}></Route>

        <Route exact path='/Support' element={<Support />}></Route>

        <Route exact path='/Campaign' element={<Campaign />}></Route>

		<Route exact path='/Ongoing' element={<Ongoing />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}
export default App;
