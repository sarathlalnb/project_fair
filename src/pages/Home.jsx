// rafce
import React from "react";
import { Link } from "react-router-dom";
import landingImage from "../assets/landingIMG.png";
import ProjectCard from "../components/ProjectCard";
import Card from 'react-bootstrap/Card';

const Home = () => {
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
              <Link className="btn btn-warning" to={"/dashboard"}>
                Start to Explore
              </Link>
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
                <div className="me-5">
                    <ProjectCard />
                </div>
            </div>
        </marquee>
        <button className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS...</button>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-center align-items-center flex-column"> <img height={'60px'} width={'60px'} className="img-fluid rounded-circle" src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png" alt="User" /> <span>Max Miller</span> </Card.Title>
        <Card.Text>
         <div className="d-flex justify-content-center">
         <i class="fa-solid fa-star text-warning"></i>
         <i class="fa-solid fa-star text-warning"></i>
         <i class="fa-solid fa-star text-warning"></i>
         <i class="fa-solid fa-star text-warning"></i>
         </div>
        </Card.Text>
        <Card.Text>
            Lorem ipsum dolor sit amet, consectetur aanditiis mollitia non ab.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
