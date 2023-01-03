import React from "react";
import bg from "../../assets/images/bg_2.jpg";
import profile from "../../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, Outlet } from "react-router-dom";
const Home = () => {
  let activeStyle = {
    borderBottom: "3px solid #00ab9f",
    backgroundColor: "#cccccc47",
  };

  let activeClassName = "underline";
  return (
    <div className="">
      <div
        className="relative flex justify-center"
        style={{ backgroundImage: `url(${bg})`, height: "250px" }}
      >
        <div className="bg-white shadow-lg lg:w-[80%] w-[92%]  absolute top-0 translate-y-[125px]">
          <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 text-primary">
              <div className="flex items-center p-5 mr-10">
                <img className="rounded-full w-[30%]" src={profile} alt="" />
                <div className="ml-3">
                  <h2 className="text-2xl font-bold">Md. Ariful Islam</h2>
                  <p>Web Developer</p>
                </div>
              </div>
              <div className="flex items-center p-5 lg:border-x lg:border-y-0 border-borderPrimary">
                <div>
                  <p className="mb-2">
                    <FontAwesomeIcon
                      size="lg"
                      className="mr-3"
                      icon={faEnvelope}
                    ></FontAwesomeIcon>
                    <span className="text-lg">ariful.islam20234@gmail.com</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      size="lg"
                      className="mr-3"
                      icon={faPhone}
                    ></FontAwesomeIcon>
                    <span className="text-lg">+88 01306 560 747</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center p-5">
                <FontAwesomeIcon
                  size="3x"
                  icon={faLocationDot}
                ></FontAwesomeIcon>
                <div className="ml-4">
                  <p className="text-lg">Sadar South,</p>
                  <p className="text-lg">Cumilla, Bangladesh</p>
                </div>
              </div>
            </div>
            <div
              className=""
              style={{
                backgroundColor: "#cccccc47",
                borderBottom: "1px solid #dee2e6",
              }}
            >
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="custom-nav-link"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="custom-nav-link"
                to="/profile"
              >
                Profile
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="custom-nav-link"
                to="/resume"
              >
                Resume
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="custom-nav-link"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="custom-nav-link"
                to="/contact"
              >
                Contact Me
              </NavLink>
            </div>
            <div>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
