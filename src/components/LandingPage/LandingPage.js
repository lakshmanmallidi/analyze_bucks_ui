import React from 'react';
import logo from './logo.png';
import './card.css';
import Login from './Login/Login';
import Register from './Register/Register';

function LandingPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h4 className="text-center">Analyze Bucks</h4>
              <img src={logo} alt="Logo" className="w-25 h-25 img-rounded mx-auto d-block p-2" />
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LandingPage;
