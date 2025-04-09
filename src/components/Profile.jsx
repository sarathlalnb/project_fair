// rafce
import React, { useEffect, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import imgPlaceHolder from "../assets/male.png";
import { editProfile, getProfileDetails } from "../../services/allAPI";

const Profile = () => {
  const [open, setOpen] = useState(false);
  
  const [userDetails,setUserDetails] = useState({})

  useEffect(()=>{
    getUserDetails()
  },[])

  const [data, setData] = useState({
    gitlink: "",
    linkedinlink: "",
    proimage: "",
  }); //state initialisation


  useEffect(() => {
    if (userDetails) {
      setData({
        gitlink: userDetails.gitlink || '',
        linkedinlink: userDetails.linkedinlink || '',
        proimage: userDetails.proimage || '',
      });
    }
  }, [userDetails]);//state updation
  
  
  const getUserDetails = async()=>{
    if(sessionStorage.getItem("token")){
      let reqHeader = {
        "Authorization" : `Bearer ${sessionStorage.getItem('token')}`
      }
      try {
        let apiResponse = await getProfileDetails(reqHeader)
        
        setUserDetails(apiResponse.data)
        
      } catch (error) {
        alert(error)
      }
    }else{
      alert("Please Login")
    }
  }



  const [editResult,setEditResult] = useState([])





  const updateProfileChanges = async () => {
    if (sessionStorage.getItem("token")) {
      if (data.gitlink && data.linkedinlink && data.proimage) {
        let reqHeader = {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        };

        let payload = new FormData()
        payload.append("gitlink",data.gitlink)
        payload.append("linkedinlink",data.linkedinlink)
        payload.append("proimage",data.proimage)

        let apiResponse = await editProfile(payload,reqHeader)
        if(apiResponse.status==200){
          setEditResult(apiResponse.data)
          alert("Successfully Updated")
        }else{
          alert("Error occurred")
        }

      } else {
        alert("please fill the form");
      }
    } else {
      alert("please login");
    }
  };

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
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setData({ ...data, proimage: e.target.files[0] })
                  }
                />
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
                value={data?.gitlink}
                onChange={(e) => setData({ ...data, gitlink: e.target.value })}
              />
              <input
                type="text"
                placeholder="User LINKEDIN Link"
                className="form-control mt-2"
                value={data?.linkedinlink}
                onChange={(e) =>
                  setData({ ...data, linkedinlink: e.target.value })
                }
              />
              <button
                onClick={updateProfileChanges}
                className="btn btn-warning w-100 mt-2"
              >
                Update
              </button>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default Profile;
