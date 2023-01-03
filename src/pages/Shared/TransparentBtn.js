import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const TransparentBtn = (props) => {
  return (
    <button
      style={{ border: "1px solid #888" }}
      className="px-3 py-2 border rounded-2xl text-primary hover:bg-secondary hover:text-white mr-3 lg:mb-0 mb-3 transition-all lg:w-auto w-full text-start"
    >
      <FontAwesomeIcon className="mr-1" icon={props.icon}></FontAwesomeIcon>
      <span style={{ fontWeight: "600" }} className="">
        {props.children}
      </span>
    </button>
  );
};

export default TransparentBtn;
