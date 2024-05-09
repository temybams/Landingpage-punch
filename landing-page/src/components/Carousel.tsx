import { useState } from "react";
import Card4 from "../imgs/Group 626340.png";
import Card5 from ".././imgs/Group 626552(1).png";
import Card6 from "../imgs/Group 626552.png";
import Iconbtn2 from "../imgs/Vector (9).png";

const items4 = [
  {
    title: "Onboard without the risk",
    context1: "We pick the best for you to select.",
    context2: "Thousands of vetted candidates in dozens of categories.",
    context3: "Risk-free resource swapping for the best fit.",
    image: Card4,
    color: "#50589F",
  },
  {
    title: "An open book.",
    context1: "Easy and transparent one-to-one chat with candidates.",
    context2: "Simple and convenient payment methods.",
    context3: "Review past ratings.",
    image: Card5,
    color: "#FDDD8B",
  },
  {
    title: "Stay in the loop.",
    context1:
      "Track your staff activity down to every minute with screenshots.",
    context2: "Comprehensive timesheet data to process payments.",
    context3: "Create projects to organize and assign tasks more effectively.",
    image: Card6,
    color: "#50589F",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % items4.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + items4.length) % items4.length
    );
  };

  return (
    <div
      className="carousel"
      style={{
        overflowX: "auto",
      }}
    >
      <div
        className="slides"
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {items4.map((item, index) => (
          <div
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{
              minWidth: "80%",
            }}
            key={item.title}
          >
            <div className="box bg-white shadow-lg rounded-3xl p-10 flex items-center">
              <div className="left flex flex-col gap-12">
                <h1 className="text-5xl font-bold">{item.title}</h1>
                <div className="lists">
                  <div className="list flex flex-col gap-3">
                    <div className="flex gap-5 items-center">
                      <div
                        className="w-6 h-2 rounded-md"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <p>{item.context1}</p>
                    </div>
                    <div className="flex gap-5 items-center">
                      <div
                        className="w-6 h-2 bg-[#50589F] rounded-md"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <p>{item.context2}</p>
                    </div>
                    <div className="flex gap-5 items-center">
                      <div
                        className="w-6 h-2 rounded-md"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <p>{item.context3}</p>
                    </div>
                  </div>
                </div>
                <div className="action flex gap-2 items-center cursor-pointer">
                  <div className="w-20 h-20 flex items-center justify-center bg-black rounded-[30px]">
                    <img src={Iconbtn2} alt="" className="w-[40%]" />
                  </div>
                  <p className="text-3xl">Learn More</p>
                </div>
              </div>
              <div className="right">
                <div className="img_sid w-[500px] h-[500px] flex items-center justify-center">
                  <img src={item.image} alt="" className="w-[200%]" />
                </div>
              </div>
              <button onClick={nextSlide}>Next Slide</button>
              <button onClick={prevSlide}>Previous Slide</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
