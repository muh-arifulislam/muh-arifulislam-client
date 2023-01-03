import React, { useState } from "react";
import image from "../../assets/images/gallery_01.jpg";
import {
  faCode,
  faChalkboardTeacher,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialBtn from "../Shared/SocialBtn";
const PortfolioItem = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="m-[15px] relative cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <img src={image} alt="" />
      <div
        style={{ backgroundColor: "rgba(172,191,208, 0.8)" }}
        className={`${
          hover
            ? "absolute top-0 bottom-0 w-full p-5 flex flex-col justify-center"
            : "absolute top-0 bottom-0 w-full p-5 hidden"
        }`}
      >
        <div className="">
          <h2 className="text-center text-xl font-bold my-2">
            portfolio project
          </h2>
          <div className="flex flex-col gap-2 h-full">
            <div className="flex justify-center my-2">
              <SocialBtn icon={faGithub}></SocialBtn>
              <SocialBtn icon={faGithub}></SocialBtn>
            </div>
            <button className="bg-primary text-white px-4 py-2">
              Live Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
