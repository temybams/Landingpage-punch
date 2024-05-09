import React from "react";

interface Item {
  name: string;
  image: string;
}

interface Props {
  items1: Item[];
  items2: Item[];
  Iconbtn: string;
  Iconbtn2: string;
}

const ExploreSection: React.FC<Props> = ({
  items1,
  items2,
  Iconbtn,
  Iconbtn2,
}) => {
  return (
    <section>
      <div className="one_step  lg:p-20 sm:p-5 ">
        <div className="classy text-center lg:text-6xl sm:text-xl  text-black lg:p-20 sm:p-0 ">
          Your one-stop marketplace for finding the talent your business needs.
        </div>

        <div className="one_step-bottom text-black gap-10 flex lg:px-20 sm:pl-8 pb-20 flex-col justify-center">
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <div className="article w-96 flex flex-col gap-6">
              <div className="text-2xl font-semibold  ">
                Find Dev and IT professionals to scale your business.
              </div>
              <div className="icon_x_text grid grid-cols-2 gap-4">
                <div className="flex text-sm items-center gap-2">
                  <i className="fa-solid fa-award icon-primary rotate-180"></i>
                  989 Skills
                </div>
                <div className="flex text-sm items-center gap-2">
                  <i className="fa-solid fa-award icon-primary rotate-180"></i>
                  45 Sub-Categories
                </div>
                <div className="flex text-sm items-center gap-2">
                  <i className="fa-solid fa-award icon-primary rotate-180"></i>
                  1011 Profiles
                </div>
              </div>
            </div>
            <div className="right-box min-w-96 flex flex-col items-center justify-end">
              <div className="box mx-20 bg-white max-w-[700px] min-w-80 p-4 rounded-2xl w-full">
                <p className="text-lg">It & Development</p>
                <div className="item flex flex-wrap gap-4 mt-2 p-2">
                  {items1.map((item) => (
                    <div
                      className="item_box w-[100px] flex flex-col items-center lg:justify-center sm:justify-between gap-4"
                      key={item.name}
                    >
                      <div className="img_cont flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="article w-[70px] font-semibold capitalize text-center">
                        {item.name}
                      </div>
                    </div>
                  ))}
                  <button className="item-button w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-gray-200">
                    <img src={Iconbtn} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <div className="article w-96 flex flex-col gap-6">
              <div className="text-2xl font-semibold ">
                Explore Creative individuals with a Keen eye for details
              </div>
              <div className="icon_x_text grid grid-cols-2 gap-4">
                <div className="flex text-sm items-center gap-2">
                  <i className="fa-solid fa-award icon-primary rotate-180"></i>
                  989 Skills
                </div>
                <div className="flex text-sm items-center gap-2">
                  <i className="fa-solid fa-award icon-primary rotate-180"></i>
                  1011 Sub-Categories
                </div>
                <div className="flex text-sm items-center gap-2">
                  <i className="fa-solid fa-award icon-primary rotate-180"></i>
                  1011 Profiles
                </div>
              </div>
            </div>
            <div className="right-box flex flex-col items-center justify-end">
              <div className="box mx-20 bg-white max-w-[700px] min-w-80 p-4 rounded-2xl w-full">
                <p className="text-lg">Design & Creative</p>
                <div className="item flex flex-wrap gap-2 mt-2 p-2">
                  <button className="item-button rotate-180 w-[70px] ml-5 h-[70px] flex items-center lg:justify-center sm:justify-between rounded-2xl bg-gray-200">
                    <img src={Iconbtn} alt="" />
                  </button>
                  {items2.map((item) => (
                    <div
                      className="item_box w-[100px] flex flex-col items-center justify-center gap-4"
                      key={item.name}
                    >
                      <div className="img_cont flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="article w-[70px] font-semibold capitalize text-center">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="article w-96 flex items-center gap-4">
              <button className="item-button w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-black">
                <img src={Iconbtn2} alt="" />
              </button>
              <p className="text-black font-semibold text-xl">Explore More</p>
            </div>
            <div className="right-box flex items-center justify-end">
              <div className="box mx-20 max-w-[700px]sm:hidden p-4 rounded-xl w-full text-xl">
                <span className="font-semibold">30 More</span> to explore
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
