// rafce
import React from "react";
import AddProject from "./AddProject";
import EditProject from "./EditProject";

const ViewProject = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="text-warning">All Projects</h2>
        <AddProject />
      </div>
      <div className="mt-2">
        <div className="p-2 border rounded d-flex justify-content-between">
          <h2>Title</h2>
          <div>
            <div className="btn">
              <EditProject />
            </div>
            <div className="btn">
              <a href="https://github.com/sarathlalnb/portfolio">
                {" "}
                <i class="fa-brands fa-github"></i>{" "}
              </a>
            </div>
            <button className="btn text-danger">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProject;
