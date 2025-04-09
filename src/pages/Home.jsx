// rafce
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import landingImage from "../assets/landingIMG.png";
import ProjectCard from "../components/ProjectCard";
import Card from "react-bootstrap/Card";
import { getHomeProjectData } from "../../services/allAPI";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projectData, setProjectData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    getHomeProjects();
  }, []);

  const onProjectClick = () => {
    isLoggedIn ? navigate("/projects") : alert("Please Login to see projects");
  };

  const getHomeProjects = async () => {
    try {
      let apiResponse = await getHomeProjectData();
      if (apiResponse.status == 200) {
        setProjectData(apiResponse.data);
      } else {
        alert(apiResponse.data);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center rounded shadow w-100"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "80px" }}>
                <i className="fa-brands fa-docker"></i> Project Fair{" "}
              </h1>
              <p style={{ textAlign: "justify" }}>
                One Stop Destination for all Software Development Projects.
                Where User can add and manage their projects. As well as access
                all projects available in our website... What are you waiting
                for!!!
              </p>
              {isLoggedIn ? (
                <Link className="btn btn-warning" to={"/dashboard"}>
                  Start to Explore
                </Link>
              ) : (
                <Link className="btn btn-danger" to={"/login"}>
                  Login/Register
                </Link>
              )}
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={landingImage}
                alt="Landing Image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            {projectData?.map((project,index) => (
              <div key={index} className="me-5">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </marquee>

        <button onClick={onProjectClick} className="btn btn-link mt-5">
          CLICK HERE TO VIEW MORE PROJECTS...
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center flex-column">
                {" "}
                <img
                  height={"60px"}
                  width={"60px"}
                  className="img-fluid rounded-circle"
                  src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png"
                  alt="User"
                />{" "}
                <span>Max Miller</span>{" "}
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                </div>
              </Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur aanditiis mollitia non
                ab.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
