import React from "react";
import Avatar1 from "../imgs/image 6.png";
import Group from "../imgs/Groupp.png";
import Iconbtnn from "../imgs/Frame 626653.png";
import Iconbtnn2 from "../imgs/Frame 626624.png";
import Groove from "../imgs/Frame 626655.png";

const HowItWorkedSection: React.FC = () => {
  return (
    <section className="howit_worked lg:p-20 sm:p-2 relative bg-gray-900 ">
      <div className=" lg:p-8 flex flex-col lg:flex-row items-center lg:items-start  lg:justify-center lg:gap-20 sm:gap-20">
        <div className="left lg:w-1/2 sm:w-3/4 text-white mb-12 lg:mb-0 lg:gap:20 sm:gap-1">
          <h1 className="text-white font-bold text-4xl lg:text-6xl mb-6 gap-4 lg:h-48 sm:h-auto ">
            How it worked
            <div className="flex flex-row flex-wrap items-center font-bold text-4xl lg:text-6xl">
              for Jason
              <div className="flex mx-2 items-center overflow-hidden justify-center w-10 h-10 rounded-full">
                <img src={Avatar1} alt="" />
              </div>
              at
            </div>
            <div>
              <img src={Group} alt="groove" />
            </div>
          </h1>
          <p className="sm:text-sm  lg:text-xl mb-6 h-16 font-normal mt-10 text-gray-300">
            Zwilt enabled us to deliver on time and they've <br /> been heavy
            hitters in our corner since.
          </p>
          <div className="flex gap-2">
            <button>
              <img src={Iconbtnn} alt="" />
            </button>
            <button>
              <img src={Iconbtnn2} alt="" />
            </button>
          </div>
        </div>
        <div className="right lg:w-1/2">
          <div className=" flex flex-col lg:gap-4 sm:gap-1 ">
            <div className="flex gap-4">
              <div className="itext-3xl w-20 h-20 rounded-3xl overflow-hidden">
                <img src={Groove} alt="groove" />
              </div>
              <div className="title">
                <h2 className="font-bold text-2xl lg:text-4xl text-white">
                  Jason Makki
                </h2>
                <p className="text-gray-500 font-medium text-sm lg:text-base">
                  Engineer at GROOVE
                </p>
                <p className="text-gray-500 font-medium text-sm lg:text-base">
                  San Francisco
                </p>
              </div>
            </div>
            <div className="content w-full lg:w-[460px] font-normal text-sm lg:text-xl text-gray-400 mt-6 lg:mt-10">
              Zwilt enabled us to deliver on time and they've been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they've been heavy hitters in our corner since. Zwilt enabled us
              to deliver on time and they've been heavy hitters.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorkedSection;
