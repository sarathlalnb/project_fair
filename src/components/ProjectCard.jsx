// rafce
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

const ProjectCard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
    <>
      <Card onClick={handleShow} className="btn shadow">
        <Card.Img
          height={"200px"}
          variant="top"
          src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
        />
        <Card.Body>
          <Card.Title>Project 1</Card.Title>
        </Card.Body>
      </Card>

      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-lg-6">
                    <img className="img-fluid" src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                    <h3>Project Heading</h3>
                    <h6>Languages Used : <span className="text-warning fw-bolder" >js, html </span></h6>
                    <p style={{textAlign:'justify'}}> <span className="fw-bolder">Project Overview :</span> Lorem ipsum dolor, sit amet conseuscipit ducimus culpa quaerat, quos maiores, laboriosam enim ipsam veniam nam aliquid. Quis, a!</p>
                </div>
            </div>
            <div className="float-start mt-3">
                <a href="https://github.com/sarathlalnb/PerformanceTracker" className="btn btn-secondary"><i className="fa-brands fa-github"></i></a>
                <a href="https://github.com/sarathlalnb/PerformanceTracker" className="btn btn-secondary ms-2"><i className="fa-solid fa-link"></i></a>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
