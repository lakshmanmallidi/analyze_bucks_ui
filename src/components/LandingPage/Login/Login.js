import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../card.css";
function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return phoneNumber.length === 10 && password.length > 0 && phoneNumber.match(/^[0-9]+$/);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({ username: phoneNumber, password: password})
    };
    const response = await fetch('http://localhost:8000/api-token-auth/', requestOptions);
    if(response.ok) {
      const data = await response.json();
      console.log(data)
    }
    else{
      alert("invalid login")
    }

  }

  return (
    <form className="form-signin" onSubmit={handleSubmit}> 
      <div className="form-label-group">
        <input
          type="text"
          id="inputNumber"
          className="form-control"
          placeholder="Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="inputPassword">Password</label>
      </div>
      {/*<div className="custom-control custom-checkbox mb-3">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember password
        </label>
        </div>*/}
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
        disabled={!validateForm()}
      >
        Login
      </button>
      <div className="pt-3">
        <div className="text-center">
          Don't have an account?
          <Link className="pl-2" to="/Register">
            Register
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
