// rafce
import React, { useContext, useEffect, useState } from "react";
import AddProject from "./AddProject";
import EditProject from "./EditProject";
import { deleteProject, getUserSpecifProjects } from "../../services/allAPI";
import { addProjectContext, EditProjectContext } from "../contexts/ContextApi";

const ViewProject = () => {
  const [projectData, setProjectData] = useState([]);

  const[deleteProjectResp,setDeleteProjectResp] = useState([])

  const { addProjectResponse, setAddProjectResponse } =
    useContext(addProjectContext);

  const { editProjectResponse, setEditProjectResponse } =
    useContext(EditProjectContext);

  useEffect(() => {
    getUserProjects();
  }, [addProjectResponse, editProjectResponse,deleteProjectResp]);

  const getUserProjects = async () => {
    if (sessionStorage.getItem("token")) {
      let reqHeader = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      };
      try {
        let apiResponse = await getUserSpecifProjects(reqHeader);
   
        setProjectData(apiResponse.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please Login");
    }
  };

  const onDeleteClick = async (id) => {
    if (sessionStorage.getItem("token")) {
      const reqHeader = {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      };
      try {
        let apiResponse = await deleteProject(id, reqHeader);
        console.log(apiResponse);
        if(apiResponse.status==200){
          setDeleteProjectResp(apiResponse.data)
        }else{
          alert("Error Occured")
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("please login");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="text-warning">All Projects</h2>
        <AddProject />
      </div>
      {projectData?.length > 0 ? (
        projectData?.map((projectData, index) => (
          <div key={index} className="mt-2">
            <div className="p-2 border rounded d-flex justify-content-between">
              <h2>{projectData.projectTitle}</h2>
              <div className="d-flex">
                <div>
                  <EditProject project={projectData} />
                </div>
                <div className="btn">
                  <a target="blank" href={projectData.projectGitLink}>
                    {" "}
                    <i class="fa-brands fa-github"></i>{" "}
                  </a>
                </div>
                <button
                  onClick={() => onDeleteClick(projectData._id)}
                  className="btn text-danger"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No projects Found</h1>
      )}
    </>
  );
};

export default ViewProject;
