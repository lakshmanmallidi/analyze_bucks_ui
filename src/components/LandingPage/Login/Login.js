import React from "react";
import "../card.css";
function Login() {
  return (
    <form className="form-signin">
      <div className="form-label-group">
        <input
          type="text"
          id="inputNumber"
          className="form-control"
          placeholder="Number"
          required
          autoFocus
        />
        <label htmlFor="inputNumber">Phone Number</label>
      </div>
      <div className="form-label-group">
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <label htmlFor="inputPassword">Password</label>
      </div>
      <div className="custom-control custom-checkbox mb-3">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember password
        </label>
      </div>
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
      >
        Login
      </button>
      <div className="pt-3 row">
        <div className="col-sm-7 text-right p-0">Don't have an account?</div>
        <div className="col-sm-5 pl-1">Register</div>
      </div>
    </form>
  );
}

export default Login;
