import React from "react";
import "../card.css";
function Register() {
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
          type="text"
          id="inputUsername"
          className="form-control"
          placeholder="Username"
          required
        />
        <label htmlFor="inputUsername">Username</label>
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
      <div className="form-label-group">
        <input
          type="password"
          id="inputConfrimPassword"
          className="form-control"
          placeholder="Confrim Password"
          required
        />
        <label htmlFor="inputConfrimPassword">Confrim Password</label>
      </div>
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
      >
        Register
      </button>
      <div className="pt-3 row">
        <div className="col-sm-7 text-right p-0">Already have an account?</div>
        <div className="col-sm-5 pl-1">Login here</div>
      </div>
    </form>
  );
}

export default Register;
