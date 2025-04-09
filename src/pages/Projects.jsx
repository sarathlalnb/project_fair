// rafce
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { getAllProjects } from "../../services/allAPI";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [ searchKey,setSearchKey] = useState("")

  useEffect(() => {
    getProjects();
  }, [searchKey]);

  const getProjects = async () => {
    if (sessionStorage.getItem("token")) {
      try {
        let reqHeader = {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        };

        let apiResponse = await getAllProjects(reqHeader,searchKey);
        if (apiResponse.status == 200) {
          setProjectData(apiResponse.data);
        } else {
          alert(apiResponse.data);
        }
      } catch (err) {
        alert(err);
      }
    } else {
      alert("Please Login");
    }
  };

  return (
    <div>
      <Header />
      <div style={{ paddingTop: "80px" }} className="container-fluid">
        <div className="d-flex justify-content-between ">
          <h1>All Projects</h1>
          <input
          onChange={(e)=>setSearchKey(e.target.value)}
            className="form-control w-25"
            placeholder="Search Projects by language"
            type="text"
          />
        </div>
        <div className="mt-4">
          <Row>
            {projectData?.length > 0 ? ( 
              projectData?.map((eachProject, index) => (
                <Col key={index} sm={12} md={6} lg={4}>
                  <ProjectCard project={eachProject} />
                </Col>
              ))
            ) : (
              <div className="text-danger">No Projects found</div>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Projects;
