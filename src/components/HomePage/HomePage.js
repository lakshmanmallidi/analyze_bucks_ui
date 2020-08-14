import React, { useState, useEffect } from "react";
import Sidebar from "react-sidebar";
import "./HomePage.css";
import {
  PersonCircle,
  HouseDoorFill,
  BoxArrowInLeft,
} from "react-bootstrap-icons";
import Groups from "./Groups";
import Customers from "./Customers";

function HomePage({ history }) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [viewType, setViewType] = useState(1);
  const [navBarContent, setNavBarContent] = useState(<div></div>);
  const [apiData, setApiData] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("is_login") == null ||
      localStorage.getItem("token") == null ||
      localStorage.getItem("is_login") === false
    ) {
      history.push("/");
    }
  }, []);

  function errorRouter(errorType) {
    localStorage.clear();
    if (errorType === "authError") history.push("/");
    else if (errorType === "apiError") history.push("/server_error");
  }

  function handleSideBarOpen() {
    setSideBarOpen(!isSideBarOpen);
  }

  function handleLogOut() {
    localStorage.clear();
    history.push("/");
  }

  function getView() {
    if (viewType === 1) {
      return (
        <Groups
          triggerError={errorRouter}
          setViewType={setViewType}
          setApiData={setApiData}
        />
      );
    } else if (viewType === 2) {
      return (
        <Customers
          triggerError={errorRouter}
          group_id={apiData}
          setViewType={setViewType}
          setApiData={setApiData}
        />
      );
    }
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
      {navBarContent}
      {/*<button className="btn side-bar-item" onClick={() => setViewType(1)}>
        <HouseDoorFill color="white" size={30} />
        <span className="p-2 side-bar-span">Home</span>
      </button>*/}
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
        <div style={{ zIndex: 1, position: "fixed", top: 0, left: 0 }}>
          <button
            className="btn btn-primary m-2"
            type="button"
            onClick={handleSideBarOpen}
          >
            <span style={{ color: "white" }}>&#9776;</span>
          </button>
        </div>
        {getView()}
      </Sidebar>
    </div>
  );
}

export default HomePage;
