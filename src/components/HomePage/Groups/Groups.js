import React, { useState, useEffect } from "react";
import { DoorClosed, Trash } from "react-bootstrap-icons";
import Loading from "../../Loading";
import CreateButton from "../CreateButton";
import RecordFilter from "../RecordFilter";

function Groups({ triggerError }) {
  const [inProgess, setInProgess] = useState(false);
  const [groups, setGroups] = useState([]);
  const [isCreateWindowOpen, setCreateWindowOpen] = useState(false);
  const [creationInProgress, setCreationInProgress] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [filterState, toggleFilterState] = useState(true);

  useEffect(() => {
    async function getGroups() {
      setInProgess(true);
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      };
      try {
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
          triggerError("authError");
        } else {
          setInProgess(false);
          alert("Server Error");
          triggerError("apiError");
        }
      } catch {
        triggerError("apiError");
      }
    }
    getGroups();
  }, []);

  async function createGroup() {
    setCreationInProgress(true);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ group_name: groupName }),
    };
    try {
      const response = await fetch(
        "http://localhost:8000/finance/business_group/",
        requestOptions
      );
      if (response.ok) {
        setCreationInProgress(false);
        setGroupName("");
        setCreateWindowOpen(false);
      } else if (response.status === 401) {
        setCreationInProgress(false);
        triggerError("authError");
      } else {
        setCreationInProgress(false);
        alert("Server Error");
      }
    } catch (e) {
      setCreationInProgress(false);
      triggerError("apiError");
    }
  }

  function createWindowValidation() {
    return groupName.length > 0;
  }

  function renderCard(group, index) {
    const choice = (index % 8) + 1;

    let cssStyle = "";
    switch (choice) {
      case 2:
        cssStyle = "bg-secondary";
        break;
      case 3:
        cssStyle = "bg-success";
        break;
      case 4:
        cssStyle = "bg-danger";
        break;
      case 5:
        cssStyle = "bg-warning";
        break;
      case 6:
        cssStyle = "bg-info";
        break;
      case 7:
        cssStyle = "bg-primary";
        break;
      default:
        cssStyle = "bg-dark";
    }

    return (
      <div className="card border border-dark m-2" key={group.group_id}>
        <div className={"text-white " + cssStyle}>
          <div className="text-center">
            {group.group_name.toUpperCase()}
            <div className="float-right">
              <button className="btn p-0 m-1">
                <Trash color="white" />
              </button>
              <button className="btn p-0 m-1">
                <DoorClosed color="white" />
              </button>
            </div>
          </div>
        </div>
        <div className="card-body mx-auto">
          <button className={"btn text-white " + cssStyle}>Open</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <RecordFilter
        filterState={filterState}
        toggleFilterState={toggleFilterState}
      />
      <CreateButton
        isCreateWindowOpen={isCreateWindowOpen}
        setCreateWindowOpen={setCreateWindowOpen}
      />
      {isCreateWindowOpen && (
        <div
          style={{ zIndex: 1, position: "fixed", width: "100%", top: "20%" }}
        >
          <div className="m-3 bg-light p-3 border border-dark ">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="groupName"
                placeholder="Enter New Group Name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                required
                autoFocus
                autoComplete="off"
              />
            </div>
            <button
              className="btn btn-primary m-2"
              onClick={createGroup}
              disabled={!createWindowValidation() || creationInProgress}
            >
              {!creationInProgress && <div>Create</div>}
              {creationInProgress && <Loading />}
            </button>
          </div>
        </div>
      )}
      <div className="pt-5">
        {!inProgess && (
          <div className="container">
            {groups
              .filter((group) =>
                filterState ? group.is_active : !group.is_active
              )
              .map((group, index) => renderCard(group, index))}
          </div>
        )}
        {inProgess && (
          <div className="text-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default Groups;
