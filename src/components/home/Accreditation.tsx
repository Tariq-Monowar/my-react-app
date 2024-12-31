import React from "react";
import cpd from "../../assets/img/cpd.png";

const Accreditation = () => {
  return (
    <>
      <div className="bg-color9 h-auto w-full py-12 px-6 md:py-24"> 
        <div className="container px-6 md:pl-24 mx-auto bg-color5 rounded-xl h-auto">
          <div className="content md:flex md:flex-row md:justify-between">
          <div className="text-center md:left md:w-[40%]">
                <button className="btn-secondary mt-10 md:mt-20">
                Globally recognised accreditation!
                </button>
                <h1 className="text-6xl my-8 text-color1 font-semibold">
                Accreditation
                </h1>
                <p className="my-8 text-color1 text-xl">
                Unleash the power of CPD and kick start your career! CIFA’S
                Continuing Professional Development (CPD) certifications will help
                you gain a competitive edge over your competition! <br /> <br />{" "}
                To demonstrate our commitment to excellence and dedication to
                providing education at the highest levels, CIFA are proud members
                of the CPD Certification Service.
                </p>
                <button className="btn-primary text-color1 mb-2">
                Learn More
                </button>
            </div>
             <div className="p-12 md:right md:w-[40%] md:flex md:items-center md:justify-center">
                <img src={cpd} alt="" className="h-[80%] w-auto " />
             </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Accreditation;
