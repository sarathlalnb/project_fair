// rafce
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import imgPlaceHolder from "../assets/male.png";

const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="d-flex flex-column ">
        <div className="d-flex justify-content-evenly">
          <h3 className="mt-2 text-warning">Profile</h3>
          <button onClick={() => setOpen(!open)} className="btn me-4">
            <i className="fa-solid fa-angle-down text-warning"></i>
          </button>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <div className="d-flex flex-column align-items-center shadow p-2">
              <label>
                <input type="file" style={{ display: "none" }} />
                <img
                  className="img-fluid rounded-circle"
                  height={"200px"}
                  width={"200px"}
                  src={imgPlaceHolder}
                  alt=""
                />
              </label>
              <input
                type="text"
                placeholder="User GITHUB Link"
                className="form-control mt-2"
              />
              <input
                type="text"
                placeholder="User LINKEDIN Link"
                className="form-control mt-2"
              />
              <button className="btn btn-warning w-100 mt-2">Update</button>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default Profile;
