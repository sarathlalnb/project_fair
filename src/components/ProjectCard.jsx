// rafce
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import baseURL from "../../services/baseUrls";

const ProjectCard = ({project}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
    <>
      <Card onClick={handleShow} className="btn shadow">
        <Card.Img
          height={"200px"}
          variant="top"
          src={`${baseURL}/uploads/${project?.projectImg}`}
        />
        <Card.Body>
          <Card.Title>{project?.projectTitle}</Card.Title>
        </Card.Body>
      </Card>

      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-lg-6">
                    <img className="img-fluid" src={`${baseURL}/uploads/${project?.projectImg}`} alt="" />
                </div>
                <div className="col-lg-6">
                    <h3>{project?.projectTitle}</h3>
                    <h6>Languages Used : <span className="text-warning fw-bolder" >{project?.projectLanguge} </span></h6>
                    <p style={{textAlign:'justify'}}> <span className="fw-bolder">Project Overview :</span> {project?.projectOverview}</p>
                </div>
            </div>
            <div className="float-start mt-3">
                <a href={project?.projectGitLink} className="btn btn-secondary"><i className="fa-brands fa-github"></i></a>
                <a href={project?.projectWebsiteLink} className="btn btn-secondary ms-2"><i className="fa-solid fa-link"></i></a>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
