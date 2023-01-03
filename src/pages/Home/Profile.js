import {
  faCode,
  faChalkboardTeacher,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDelicious,
  faChrome,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Profile = () => {
  return (
    <div className="lg:p-[50px] p-[20px]">
      <h4 className="text-center">
        Hello, I’m UI/UX Developer / Wordpress Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa.
      </h4>
      <h2 className="text-center text-3xl font-bold my-[40px]">Services</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-[20px] gap-x-[10px]">
        <div className=" mt-[10px] mb-[20px] px-[15px]">
          <p className="mb-[20px] text-center">
            <FontAwesomeIcon
              size="3x"
              style={{ color: "#00ab9f" }}
              icon={faCode}
            ></FontAwesomeIcon>
          </p>
          <h4 className="text-xl font-bold mb-2 text-center">Web Design</h4>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className=" mt-[10px] mb-[20px] px-[15px]">
          <p className="mb-[20px] text-center">
            <FontAwesomeIcon
              size="3x"
              style={{ color: "#00ab9f" }}
              icon={faChrome}
            ></FontAwesomeIcon>
          </p>
          <h4 className="text-xl font-bold mb-2 text-center">
            Web Development
          </h4>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className=" mt-[10px] mb-[20px] px-[15px]">
          <p className="mb-[20px] text-center">
            <FontAwesomeIcon
              size="3x"
              style={{ color: "#00ab9f" }}
              icon={faChalkboardTeacher}
            ></FontAwesomeIcon>
          </p>
          <h4 className="text-xl font-bold mb-2 text-center">Web Instructor</h4>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className=" mt-[10px] mb-[20px] px-[15px]">
          <p className="mb-[20px] text-center">
            <FontAwesomeIcon
              size="3x"
              style={{ color: "#00ab9f" }}
              icon={faPaperPlane}
            ></FontAwesomeIcon>
          </p>
          <h4 className="text-xl font-bold mb-2 text-center">
            Freelance Project
          </h4>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className=" mt-[10px] mb-[20px] px-[15px]">
          <p className="mb-[20px] text-center">
            <FontAwesomeIcon
              size="3x"
              style={{ color: "#00ab9f" }}
              icon={faReact}
            ></FontAwesomeIcon>
          </p>
          <h4 className="text-xl font-bold mb-2 text-center">
            App Development
          </h4>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-[10px] mb-[20px] px-[15px]">
          <p className="mb-[20px] text-center">
            <FontAwesomeIcon
              size="3x"
              style={{ color: "#00ab9f" }}
              icon={faDelicious}
            ></FontAwesomeIcon>
          </p>
          <h4 className="text-xl font-bold mb-2 text-center">
            Graphics Design
          </h4>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
