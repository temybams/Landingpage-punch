import React from 'react';
import Iconbtn2 from '../imgs/Vector (9).png';
import {  items3 } from '../Data';



const JourneySection: React.FC = () => {
  return (
   
    <div className="journey p-18  text-black ">
      <div className="title text-center text-6xl font-bold mb-4">
        Start Your Journey today.
      </div>
      <div className="flex flex-col lg:m-20 sm:m-10  ">
        {items3.map((item) => (
          <div
            key={item.title}
            className="box  flex h-[350px] lg:p-0 sm:p-28 mb-10" 
            style={{ backgroundColor: `${item.color}` }}
          >
            <div className="left flex gap-3 lg:p-28 sm:pl-0">
              <div className="num w-12 h-12">
                <img src={item.image2} alt="1" />
              </div>
              <div className="article flex flex-col gap-7">
                <h1 className="text-4xl font-semibold w-96">
                  {item.title}
                </h1>
                <p>{item.context}</p>

                <div className="action flex gap-2 items-center cursor-pointer">
                  <div className="button w-12 h-12 flex items-center justify-center bg-black rounded-2xl">
                    <img src={Iconbtn2} alt="" className="w-[50%]" />
                  </div>
                  <p>Join Now</p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="img flex items-center justify-center">
                <img src={item.image} alt="cards" className="w-[90%] " />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
};

export default JourneySection;
