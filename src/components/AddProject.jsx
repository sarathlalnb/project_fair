import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import placeHolderImg from "../assets/placeholderIMG.png";

const AddProject = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="btn btn-primary">
        <i className="fa-solid fa-plus "></i> New Project
      </button>
      <Modal
        size="lg"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{ display: "none" }} />
                <img className="img-fluid" src={placeHolderImg} alt="" />
              </label>
              <p className="text-warning fw-bolder">
                *Upload Only the following file types (jpeg, jpg, png) here!!!
              </p>
            </div>
            <div className="col-lg-8">
                <input type="text" placeholder="Project Title" className="form-control mt-2" />
                <input type="text" placeholder="Project Language" className="form-control mt-2" />
                <input type="text" placeholder="Project Overview" className="form-control mt-2" />
                <input type="text" placeholder="Project Github Link" className="form-control mt-2" />
                <input type="text" placeholder="Project Website Link" className="form-control mt-2" />
                
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProject;
