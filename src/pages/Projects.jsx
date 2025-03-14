// rafce
import React from "react";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <Header />
      <div style={{paddingTop:"80px"}} className="container-fluid">
        <div className="d-flex justify-content-between ">
          <h1>All Projects</h1>
          <input
            className="form-control w-25"
            placeholder="Search Projects by language"
            type="text"
          />
        </div>
        <div>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Projects;
