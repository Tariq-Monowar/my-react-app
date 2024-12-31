import React from "react";
// import bg1 from "../../assets/img/bg1.png"
import "./style.css";
import menu from "../../assets/img/menu.svg";
import logo from "../../assets/img/logo.svg";
import play from "../../assets/img/play.svg";
import bn1 from "../../assets/img/Brand/bn1.svg";
import bn2 from "../../assets/img/Brand/bn2.svg";
import bn3 from "../../assets/img/Brand/bn3.svg";
import bn4 from "../../assets/img/Brand/bn4.svg";
import bn5 from "../../assets/img/Brand/bn5.svg";


// nav w-full h-auto py-1 bg-color5 bg-opacity-25

{/* <div className="nav w-full h-auto py-1 bg-color5 bg-opacity-25">
<div className="items container mx-auto flex justify-between items-center sm:items-center p-1">
  <div className="toggle text-color1 sm:text-right ">
    <img src={menu} alt="" />
  </div>
  <div className="logo">
    <img src={logo} alt="" />
  </div>
  <div className="button text-color1 flex items-center">
    <button className="px-6 py-2  border-2 border-color2 text-lg  font-medium rounded-lg mr-5 ">
      Login
    </button>
    <button className="px-6 py-2 border-2 border-color2 bg-color3 text-lg  font-medium rounded-lg">
      Register
    </button>
  </div>
</div>
</div> */}


const Hero = () => {
  return (
    <>
      <div className="content bg-bannerImg w-[100%] h-[100vh] bg-no-repeat bg-cover">
    {/* --------------nav---------------- */}
    <div className="nav w-full h-auto py-1 bg-color5 bg-opacity-25">
  <div className="items container mx-auto flex justify-between items-center p-1">
    {/* Logo */}
    <div className="logo flex-shrink-0 pl-6 sm:pl-0 sm:order-2 sm:mx-auto">
      <img src={logo} alt="" />
    </div>

    {/* Buttons */}
    <div className="button text-color1 flex items-center space-x-4 pr-6 sm:order-3 sm:pr-0">
      <button className="px-3 py-1 sm:px-6 sm:py-2 border-2 border-color2 bg-color3 text-lg font-medium rounded-lg">
        Login
      </button>
      <button className="px-3 py-1 sm:px-6 sm:py-2 border-2 border-color2 bg-color3 text-lg font-medium rounded-lg">
        Register
      </button>
    </div>

    {/* Toggle */}
    <div className="toggle text-color1 flex-shrink-0 pr-6 sm:order-1 sm:pr-0">
      <img src={menu} alt="" />
    </div>
  </div>
</div>

    {/* --------------nav---------------- */}

        <div 
        className=" pl-6 sm:pl-0 sm:left container mx-auto sm:flex sm:flex-col sm:justify-center sm:items-start flex flex-col justify-center items-center h-5/6">
          <button className="text-color1 py-2 px-5 bg-color4 rounded-full border-2 border-color3">
            Elevate Your Career
          </button>
          <h1 className="font-semibold text-6xl sm:text-8xl text-center sm:text-left text-color1 mt-2">
            Transform <br /> Your{" "}
            <span className="text-color2">
              Career in <br /> Finance
            </span>{" "}
          </h1>
          <p className="text-xl sm:text-3xl w-9/12 sm:w-3/6 text-color7 mt-8 font-medium text-center sm:text-left mr-6">
            Earn accredited qualifications online with CIFA and
            access tools to boost your career in finance.
          </p>
          <div className="buttons mt-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
            <button className="px-4 py-1 sm:px-6 sm:py-2 border-2 border-color2 bg-color3 text-lg text-color1 font-medium rounded-lg">
              Learn More
            </button>
            <div className="play flex flex-row justify-center gap-2">
              <img className="h-8 w-auto" src={play} alt="" />
              <h4 className="uppercase text-lg sm:text-xl text-color8 font-bold">
                Watch Introduction video
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="trust bg-color9 pt-5 sm:pt-10">
        <h4 className="text-color8 text-xl font-normal text-center">
          Trusted By
        </h4>
        <div className="icon_box pb-12 sm:pb-24 pt-6 sm:pt-12  overflow-hidden">
          {/* Continuous scrolling container */}
          <div className="scroll-wrapper flex items-center w-[calc(200%)] animate-scroll">
            {/* Images repeated twice for seamless animation */}
            <div className="flex gap-8">
              <img
                src={bn1}
                alt="Brand 1"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn2}
                alt="Brand 2"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn3}
                alt="Brand 3"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn4}
                alt="Brand 4"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn5}
                alt="Brand 5"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn1}
                alt="Brand 1"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn2}
                alt="Brand 2"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn3}
                alt="Brand 3"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn4}
                alt="Brand 4"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn5}
                alt="Brand 5"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn1}
                alt="Brand 1"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn2}
                alt="Brand 2"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn3}
                alt="Brand 3"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn4}
                alt="Brand 4"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn5}
                alt="Brand 5"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn1}
                alt="Brand 1"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn2}
                alt="Brand 2"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn3}
                alt="Brand 3"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn4}
                alt="Brand 4"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn5}
                alt="Brand 5"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn1}
                alt="Brand 1"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn2}
                alt="Brand 2"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn3}
                alt="Brand 3"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn4}
                alt="Brand 4"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn5}
                alt="Brand 5"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn1}
                alt="Brand 1"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn2}
                alt="Brand 2"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn3}
                alt="Brand 3"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn4}
                alt="Brand 4"
                className="h-12 w-auto ml-24 object-contain"
              />
              <img
                src={bn5}
                alt="Brand 5"
                className="h-12 w-auto ml-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
