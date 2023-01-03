import React from "react";
import {
  faPaperPlane,
  faCloudDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import image from "../../assets/images/profile-big.jpg";
import TransparentBtn from "../Shared/TransparentBtn";
import SocialBtn from "../Shared/SocialBtn";
import { Link } from "react-router-dom";
const Default = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="p-[15px] border-r border-borderSecondary">
          <img src={image} alt="" />
        </div>
        <div className="p-[25px] col-span-2">
          <h2 className="text-3xl font-bold mb-2">
            Hellow I'm a Web Developer
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries,
          </p>
          <div className="my-10 flex lg:flex-row flex-col items-center justify-between">
            <div className="lg:mb-0 mb-8">
              <Link to="/contact">
                <TransparentBtn icon={faPaperPlane}>Hire Me</TransparentBtn>
              </Link>
              <a href="https://drive.google.com/file/d/1WhdREkXWTWSHGR8TXjvGr9IhhtWZIAQb/view?usp=share_link">
                <TransparentBtn icon={faCloudDownload}>
                  Download Resume
                </TransparentBtn>
              </a>
            </div>
            <div>
              <SocialBtn
                url="https://www.facebook.com/muh.arifulislam/"
                icon={faFacebookF}
              ></SocialBtn>
              <SocialBtn
                url="https://twitter.com/muh_arifulislam"
                icon={faTwitter}
              ></SocialBtn>
              <SocialBtn
                url="https://www.linkedin.com/in/muh-arifulislam/"
                icon={faLinkedinIn}
              ></SocialBtn>
              <SocialBtn
                url="https://www.youtube.com"
                icon={faYoutube}
              ></SocialBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
