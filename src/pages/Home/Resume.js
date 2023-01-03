import React from "react";

const Resume = () => {
  return (
    <div className="lg:p-[80px] pt-[40px]  text-primary">
      <h2 className="text-3xl font-bold text-center mb-10">
        Education Details
      </h2>
      <div className="grid lg:grid-cols-5 grid-cols-1 mb-8">
        <div className="text-center">
          <h4 className="mb-2 font-bold">2018-2022</h4>
          <h5>Diploma Degree</h5>
        </div>
        <div className="col-span-4 px-[30px] lg:text-start text-center">
          <h4 className="text-xl font-bold mb-2">
            Cumilla Polytechnic Institute
          </h4>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
        </div>
      </div>
      <div className="mt-5 grid lg:grid-cols-5 grid-cols-1 mb-8">
        <div className="text-center">
          <h4 className="mb-2 font-bold">2018-2022</h4>
          <h5>High School</h5>
        </div>
        <div className="col-span-4 px-[30px] lg:text-start text-center">
          <h4 className="text-xl font-bold mb-2">
            Hazi Akram Udding High School
          </h4>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
        </div>
      </div>
      <div className="mt-5 grid lg:grid-cols-5 grid-cols-1 mb-8">
        <div className="text-center">
          <h4 className="mb-2 font-bold">2018-2022</h4>
          <h5>School</h5>
        </div>
        <div className="col-span-4 px-[30px] lg:text-start text-center">
          <h4 className="text-xl font-bold mb-2">
            Paduar Bazar Model Govt. Primary School
          </h4>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Resume;
