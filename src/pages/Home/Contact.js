import React from "react";

const Contact = () => {
  return (
    <div className="p-[20px] grid lg:grid-cols-2 grid-cols-1">
      <div className="lg:mb-0 mb-8">
        <iframe
          title="map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12310.903973891614!2d91.17547614403418!3d23.458529219843985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f249815015d%3A0x549a77e542115f77!2sCumilla!5e0!3m2!1sen!2sbd!4v1672738293609!5m2!1sen!2sbd"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="lg:px-[20px] px-0">
        <form>
          <div className="mb-5 flex lg:flex-row flex-col justify-between">
            <input
              className="py-1 px-2  border border-borderPrimary rounded bg-input focus:bg-white lg:mb-0 mb-5"
              type="text"
              placeholder="Enter Full Name"
            />
            <input
              className="p-1  border border-borderPrimary rounded bg-input focus:bg-white"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="mb-5">
            <input
              className="py-1 px-2 lg:w-auto w-full  border border-borderPrimary rounded bg-input focus:bg-white"
              type="text"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="mb-5">
            <textarea
              className="py-1 px-2 border border-borderPrimary rounded w-full bg-input focus:bg-white"
              name="Enter Your Message"
              id=""
              rows="10"
            ></textarea>
          </div>
          <div>
            <input
              style={{ backgroundColor: "#00ab9f" }}
              className="py-1 px-3 rounded text-white"
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
