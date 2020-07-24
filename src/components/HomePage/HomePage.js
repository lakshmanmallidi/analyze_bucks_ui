import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage({ history }) {
  useEffect(() => {
    if (
      localStorage.getItem("is_login") == null ||
      localStorage.getItem("token") == null ||
      localStorage.getItem("is_login") === false
    )
      history.push("/");
  }, [history]);

  return (
    <div>
      <h4>token: {localStorage.getItem("token")}</h4>
      <h4>is_login: {localStorage.getItem("is_login")}</h4>
    </div>
  );
}

export default HomePage;
