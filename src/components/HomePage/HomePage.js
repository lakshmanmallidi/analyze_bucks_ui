import React, { useState, useEffect } from "react";
import Sidebar from "react-sidebar";
import "./HomePage.css";
import {
  PersonCircle,
  HouseDoorFill,
  BoxArrowInLeft,
} from "react-bootstrap-icons";
import Groups from "./Groups";

function HomePage({ history }) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("is_login") == null ||
      localStorage.getItem("token") == null ||
      localStorage.getItem("is_login") === false
    ) {
      console.log("pushed to homePage");
      history.push("/");
    }
  }, []);

  function authError() {
    localStorage.clear();
    history.push("/");
  }

  function handleSideBarOpen() {
    setSideBarOpen(!isSideBarOpen);
  }

  function handleLogOut() {
    localStorage.clear();
    history.push("/");
  }

  const sideBarStyleParams = {
    sidebar: { background: "#25282d", width: "50%", maxWidth: "300px" },
  };

  const sideBarContext = (
    <div className="list-group">
      <button className="btn" style={{ background: "#2272aa", margin: "2px" }}>
        <PersonCircle color="white" size={96} />
        <h5 style={{ color: "white" }}>Profile</h5>
      </button>
      <button className="btn side-bar-item">
        <HouseDoorFill color="white" size={30} />
        <span className="p-2 side-bar-span">Home</span>
      </button>
      <button className="btn side-bar-item fixed-bottom" onClick={handleLogOut}>
        <BoxArrowInLeft color="white" size={30} />
        <span className="p-2 side-bar-span">Log Out</span>
      </button>
    </div>
  );

  return (
    <div>
      <Sidebar
        sidebar={sideBarContext}
        open={isSideBarOpen}
        onSetOpen={handleSideBarOpen}
        styles={sideBarStyleParams}
      >
        <nav className="navbar navbar-light bg-primary">
          <form className="form-inline">
            <button
              className="btn btn-outline-light"
              type="button"
              onClick={handleSideBarOpen}
            >
              <span style={{ color: "white" }}>&#9776;</span>
            </button>
          </form>
        </nav>
        <Groups triggerAuthError={authError} />
      </Sidebar>
    </div>
  );
}

export default HomePage;
