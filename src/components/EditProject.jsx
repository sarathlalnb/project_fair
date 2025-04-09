import React, { useContext, useEffect, useState } from "react";
import placeHolderImg from "../assets/placeholderIMG.png";
import { Modal, Button } from "react-bootstrap";
import baseURL from "../../services/baseUrls";
import { updateProjects } from "../../services/allAPI";
import { EditProjectContext } from "../contexts/ContextApi";

const EditProject = ({ project }) => {
  const { editProjectResponse, setEditProjectResponse } =
    useContext(EditProjectContext);
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("");
  const [imgTypeStatus, setImgTypeStatus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [projectDetail, setProjectDetail] = useState({
    projectID: project._id,
    projectImg: "",
    projectTitle: project.projectTitle,
    projectLanguge: project.projectLanguge,
    projectOverview: project.projectOverview,
    projectGitLink: project.projectGitLink,
    projectWebsiteLink: project.projectWebsiteLink,
  });

  useEffect(() => {
    if (projectDetail.projectImg) {
      if (
        projectDetail.projectImg.type == "image/png" ||
        projectDetail.projectImg.type == "image/jpeg" ||
        projectDetail.projectImg.type == "image/jpg"
      ) {
        setImgTypeStatus(true);
        console.log(projectDetail.projectImg.type);
        setPreview(URL.createObjectURL(projectDetail.projectImg));
      } else {
        setImgTypeStatus(false);
        alert("please upload only specified type");
      }
    }
  }, [projectDetail.projectImg]);

  const onEditBtnClick = async () => {
    if (
      projectDetail.projectTitle &&
      projectDetail.projectLanguge &&
      projectDetail.projectOverview &&
      projectDetail.projectGitLink &&
      projectDetail.projectWebsiteLink
    ) {
      const payload = new FormData();
      payload.append("projectTitle", projectDetail.projectTitle);
      payload.append("projectLanguge", projectDetail.projectLanguge);
      payload.append("projectOverview", projectDetail.projectOverview);
      payload.append("projectGitLink", projectDetail.projectGitLink);
      payload.append("projectWebsiteLink", projectDetail.projectWebsiteLink);
      preview
        ? payload.append("projectImg", projectDetail.projectImg)
        : payload.append("projectImg", project.projectImg);

      const token = sessionStorage.getItem("token");

      if (token) {
        let requestHeader = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        };

        let apiResponse = await updateProjects(
          projectDetail.projectID,
          payload,
          requestHeader
        );
        if (apiResponse.status == 200) {
          setEditProjectResponse(apiResponse.data)
          alert("successfully updated");
          handleClose()
        } else {
          alert("error while updating");
        }
      } else {
        alert("Please Login");
      }
    } else {
      alert("Please fill the form");
    }
  
  };

  return (
    <>
      <button onClick={handleShow} className="btn">
        <i className="fa-solid fa-edit "></i>
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
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setProjectDetail({
                      ...projectDetail,
                      projectImg: e.target.files[0],
                    })
                  }
                />
                <img
                  className="img-fluid"
                  src={
                    preview
                      ? preview
                      : `${baseURL}/uploads/${project.projectImg}`
                  }
                  alt=""
                />
              </label>
              {!imgTypeStatus ? (
                <p className="text-warning fw-bolder">
                  *Upload Only the following file types (jpeg, jpg, png) here!!!
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="col-lg-8">
              <input
                onChange={(e) =>
                  setProjectDetail({
                    ...projectDetail,
                    projectTitle: e.target.value,
                  })
                }
                type="text"
                placeholder="Project Title"
                value={projectDetail.projectTitle}
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectDetail({
                    ...setProjectDetail,
                    projectLanguge: e.target.value,
                  })
                }
                type="text"
                value={projectDetail.projectLanguge}
                placeholder="Project Language"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectDetail({
                    ...projectDetail,
                    projectOverview: e.target.value,
                  })
                }
                type="text"
                value={projectDetail.projectOverview}
                placeholder="Project Overview"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectDetail({
                    ...projectDetail,
                    projectGitLink: e.target.value,
                  })
                }
                type="text"
                value={projectDetail.projectGitLink}
                placeholder="Project Github Link"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectDetail({
                    ...projectDetail,
                    projectWebsiteLink: e.target.value,
                  })
                }
                type="text"
                value={projectDetail.projectWebsiteLink}
                placeholder="Project Website Link"
                className="form-control mt-2"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onEditBtnClick}>
            Edit Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProject;
