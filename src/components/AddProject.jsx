import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import placeHolderImg from "../assets/placeholderIMG.png";
import { addProject } from "../../services/allAPI";
import { addProjectContext } from "../contexts/ContextApi";


const AddProject = () => {
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("");

  const{PaddProjectResponse,setAddProjectResponse} = useContext(addProjectContext)

  const [imgTypeStatus, setImgTypeStatus] = useState(false);

  const handleClose = () => {
    clearContent();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [projectData, setProjectData] = useState({
    projectImg: "",
    projectTitle: "",
    projectLanguge: "",
    projectOverview: "",
    projectGitLink: "",
    projectWebsiteLink: "",
  });

  const onbtnClick = async () => {
    if (
      projectData.projectGitLink &&
      projectData.projectImg &&
      projectData.projectLanguge &&
      projectData.projectOverview &&
      projectData.projectTitle &&
      projectData.projectWebsiteLink
    ) {
      const payload = new FormData();

      payload.append("projectImg", projectData.projectImg);
      payload.append("projectTitle", projectData.projectTitle);
      payload.append("projectLanguge", projectData.projectLanguge);
      payload.append("projectOverview", projectData.projectOverview);
      payload.append("projectGitLink", projectData.projectGitLink);
      payload.append("projectWebsiteLink", projectData.projectWebsiteLink);

      if (sessionStorage.getItem("token")) {
        let requestHeader = {
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        };
        try {
          console.log(requestHeader)
          let apiResponse = await addProject(payload, requestHeader);
          if(apiResponse.status==201){
            setAddProjectResponse(apiResponse.data)
            alert("Successfully created")
            handleClose()
          }else{
            alert(apiResponse.data)
          }
        } catch (err) {
          alert(err);
        }
      } else {
        alert("Token Missing");
      } 
    } else {
      alert("Please fill the form correctly");
    }
  };

  useEffect(() => {
    if (projectData.projectImg) {
      if (
        projectData.projectImg.type == "image/png" ||
        projectData.projectImg.type == "image/jpeg" ||
        projectData.projectImg.type == "image/jpg"
      ) {
        setImgTypeStatus(true);
        console.log(projectData.projectImg.type);
        setPreview(URL.createObjectURL(projectData.projectImg));
      } else {
        setImgTypeStatus(false);
        alert("please upload only specified type");
      }
      // setPrevie
    }
  }, [projectData.projectImg]);

  const clearContent = () => {
    setProjectData({
      projectImg: "",
      projectGitLink: "",
      projectLanguge: "",
      projectOverview: "",
      projectTitle: "",
      projectWebsiteLink: "",
    });
    setPreview("");
    setImgTypeStatus(false);
  };

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
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setProjectData({
                      ...projectData,
                      projectImg: e.target.files[0],
                    })
                  }
                />
                <img
                  className="img-fluid"
                  src={preview ? preview : placeHolderImg}
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
                  setProjectData({
                    ...projectData,
                    projectTitle: e.target.value,
                  })
                }
                type="text"
                placeholder="Project Title"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectLanguge: e.target.value,
                  })
                }
                type="text"
                placeholder="Project Language"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectOverview: e.target.value,
                  })
                }
                type="text"
                placeholder="Project Overview"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectGitLink: e.target.value,
                  })
                }
                type="text"
                placeholder="Project Github Link"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectWebsiteLink: e.target.value,
                  })
                }
                type="text"
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
          <Button onClick={onbtnClick} variant="primary">
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProject;
