import React from 'react';
import logo from './logo.png'
import './Login.css'
function Login() {
  return (
    /*<div>
      <img src={logo} alt="Logo" className="w-25 h-25 img-rounded mx-auto d-block pt-3"/>
      <h4 className="text-center">Analyze Bucks</h4>
    </div>*/
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h4 className="text-center">Analyze Bucks</h4>
              <img src={logo} alt="Logo" className="w-25 h-25 img-rounded mx-auto d-block p-2"/>
              <form className="form-signin">
                <div className="form-label-group">
                  <input type="text" id="inputUsername" className="form-control" placeholder="Username" required autoFocus />
                  <label htmlFor="inputUsername">Username</label>
                </div>
                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
