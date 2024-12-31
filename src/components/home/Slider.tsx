import React from "react";
import cd1 from "../../assets/img/card/cd1.svg";
import cd2 from "../../assets/img/card/cd2.svg";
import cd3 from "../../assets/img/card/cd3.svg";
import cd4 from "../../assets/img/card/cd4.svg";

const Slider = () => {

  return (
    <>
      <div className="content h-auto w-full bg-color10 text-color1 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-6xl font-semibold text-center pt-12 sm:pt-24">
          Explore a Wide Range of <br /> Accredited Courses!
        </h1>
        <p className="text-center text-lg sm:text-xl font-normal py-8 sm:py-16 px-6">
          Gain skills and certifications designed to accelerate your career in
          the  finance industry.
        </p>
      </div>
      <div className="cards  bg-color10 p-6">
        <div className="single sm:w-[1060px] sm:mx-auto text-color1 pb-12 sm:pb-24">

          <div className="flex flex-wrap sm:justify-between justify-center gap-4 mx-auto">
            {/* Add a gap here */}
            <div className="w-[249.22px] h-[441.17px] flex-col justify-start items-start gap-[13.52px] inline-flex">
              <div className="w-[249.22px] h-[366.66px] relative">
                <div className="w-[249.22px] h-[366.66px] left-0 top-0 absolute bg-[#c1b27d]/20 rounded-lg border border-[#c1b27d]" />
                <img
                  className="w-[228.95px] h-[337.93px] left-[10.14px] top-[14.36px] absolute rounded-lg"
                  src={cd1}
                />
              </div>
              <div className="self-stretch text-center text-white/90 text-xl font-medium font-['Aeonik Pro'] capitalize leading-[30.41px]">
                investment advisor certification (IAC)
              </div>
            </div>
            <div className="w-[249.22px] h-[441.17px] flex-col justify-start items-start gap-[13.52px] inline-flex">
              <div className="w-[249.22px] h-[366.66px] relative">
                <div className="w-[249.22px] h-[366.66px] left-0 top-0 absolute bg-[#c1b27d]/20 rounded-lg border border-[#c1b27d]" />
                <img
                  className="w-[228.95px] h-[337.93px] left-[10.14px] top-[14.36px] absolute rounded-lg"
                  src={cd2}
                />
              </div>
              <div className="self-stretch text-center text-white/90 text-xl font-medium font-['Aeonik Pro'] capitalize leading-[30.41px]">
                stockbroking advisor certification (SAF)
              </div>
            </div>
            <div className="w-[249.22px] h-[441.17px] flex-col justify-start items-start gap-[13.52px] inline-flex">
              <div className="w-[249.22px] h-[366.66px] relative">
                <div className="w-[249.22px] h-[366.66px] left-0 top-0 absolute bg-[#c1b27d]/20 rounded-lg border border-[#c1b27d]" />
                <img
                  className="w-[228.95px] h-[337.93px] left-[10.14px] top-[14.36px] absolute rounded-lg"
                  src={cd3}
                />
              </div>
              <div className="self-stretch text-center text-white/90 text-xl font-medium font-['Aeonik Pro'] capitalize leading-[30.41px]">
                introcuction to, risk and taxation (abc)
              </div>
            </div>
            <div className="w-[249.22px] h-[441.17px] flex-col justify-start items-start gap-[13.52px] inline-flex">
              <div className="w-[249.22px] h-[366.66px] relative">
                <div className="w-[249.22px] h-[366.66px] left-0 top-0 absolute bg-[#c1b27d]/20 rounded-lg border border-[#c1b27d]" />
                <img
                  className="w-[228.95px] h-[337.93px] left-[10.14px] top-[14.36px] absolute rounded-lg"
                  src={cd4}
                />
              </div>
              <div className="self-stretch text-center text-white/90 text-xl font-medium font-['Aeonik Pro'] capitalize leading-[30.41px]">
                anti money laundering (aML)
              </div>
            </div>

          </div>
        </div>
        <div className="btn flex justify-center sm:pb-20 pb-10">
        <button className="btn-primary text-color1">View all courses</button>
        </div>
      </div>
    </>
  );
};

export default Slider;
