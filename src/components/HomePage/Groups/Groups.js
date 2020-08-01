import React, { useState, useEffect } from "react";
import { ThreeDotsVertical } from "react-bootstrap-icons";

function Groups({ triggerAuthError }) {
  const [inProgess, setInProgess] = useState(false);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function getGroups() {
      setInProgess(true);
      console.log(inProgess);
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      };
      const response = await fetch(
        "http://127.0.0.1:8000/finance/business_group/",
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        setGroups(data);
        setInProgess(false);
      } else if (response.status === 401) {
        setInProgess(false);
        triggerAuthError();
      } else {
        setInProgess(false);
        alert("Server Error");
      }
    }
    getGroups();
  }, []);

  function renderCard(group, index) {
    const choice = index % 8+1;

    let cssStyle = ""
    switch (choice) {
      case 2:
        cssStyle = "bg-secondary"
        break
      case 3:
        cssStyle = "bg-success"
        break
      case 4:
        cssStyle = "bg-danger"
        break
      case 5:
        cssStyle = "bg-warning"
        break
      case 6:
        cssStyle = "bg-info"
        break
      case 7:
        cssStyle = "bg-light"
        break
      case 8:
        cssStyle = "bg-primary"
        break
      default:
        cssStyle = "bg-dark"
    }

    return (
      <div className="card border border-dark m-2" key={group.group_id}>
        <div className={"text-white "+cssStyle}>
          <div className="text-center">
            {group.group_name.toUpperCase()}
            <div className="float-right">
              <button className="btn p-0">
                <ThreeDotsVertical />
              </button>
            </div>
          </div>
        </div>
        <div className="card-body mx-auto">
          <button className={"btn text-white "+cssStyle}>Open</button>
        </div>
      </div>)
  }

  return (
    <div className="container">
      {groups.map((group, index) => renderCard(group, index))}
    </div>
  );
}

export default Groups;