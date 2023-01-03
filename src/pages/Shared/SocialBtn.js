import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const SocialBtn = ({ icon, url }) => {
  const navigate = useNavigate();
  return (
    <a href={url}>
      <button className="p-[5px] w-[35px] border border-primary rounded-full text-primary mr-2 hover:bg-secondary hover:text-white transition-all">
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      </button>
    </a>
  );
};

export default SocialBtn;
