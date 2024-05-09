import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";

const CarouselRender: React.FC = () => {
  const [showCarousel, setShowCarousel] = useState<boolean>(true);
  const [showBelow, setShowBelow] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setShowCarousel(window.innerWidth > 640);
      setShowBelow(false);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 
  return (
    <section>
      <div className="why_choose text-black lg:px-20 sm:px-2 align-center justify-center py-80 mx-20 flex">
        {!showBelow && (
          <div className="left w-[340px] lg:min-w-[300px] sm:min-w-[200px] lg:p-10 sm:p-2 flex flex-col gap-10">
            <div className="title text-5xl font-bold">Why choose Zwilt</div>
            <p className="w-[230px] lg:text-base sm:text-xs">
              We take complex hiring processes and simplify them. Connecting you
              to the world's highly qualified talent pool.
            </p>
          </div>
        )}
        {showCarousel && !showBelow && <Carousel />}
        {showCarousel && showBelow && (
          <div className="carousel-below">
            <Carousel />
          </div>
        )}
      </div>
    </section>
  );
};

export default CarouselRender;

