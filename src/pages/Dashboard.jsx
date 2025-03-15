// rafce
import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import ViewProject from "../components/ViewProject";

const Dashboard = () => {
  return (
    <>
      <Header insideDashboard={true} />
      <div style={{ paddingTop: "20px" }} className="container-fluid">

        <div className="row">
          <div className="col-lg-8">
          <h1>
            Welcome <span className="text-warning">User,</span>{" "}
          </h1>
          <ViewProject />
          </div>
          <div className="col-lg-4">
          <Profile />
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Dashboard;
