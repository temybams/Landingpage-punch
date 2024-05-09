import React, { useState } from 'react';

const Cardhero: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('it');

  const handleButtonClick = (button: string): void => {
    setActiveButton(button);
  };

  return (
    <div className='w-full h-full flex items-center justify-center text-black mt-7 '>
      <div className="card_container rounded-xl flex-col py-4 px-10 flex justify-center items-center w-full bg-white">
        
        <div className=" w-fit rounded-md  lg:h-10 sm:h-20 sm:max-h-20 bg-gray-200/90 text-black flex items-center justify-center p-7">
        <button
            className={`font-base text-lg rounded-md capitalize px-5 py-2 justify-center item-center ${activeButton === 'it' ? 'bg-green-200' : ''
              }`}
            onClick={() => handleButtonClick('it')}
          >
            IT & Development
          </button>
          <button
            className={`text-lg px-5 py-2 ${activeButton === 'design' ? 'bg-green-200' : ''
              }`}
            onClick={() => handleButtonClick('design')}
          >
            Design and Creative
          </button>
        </div>

        <div className="  h-full w-full flex items-center cursor-pointer justify-between py-10">
          <ul className="list_item flex flex-col gap-4 capitalize">
            <li> Python developer</li>
            <li>Shopify Developer</li>
            <li>MERN stack Developer</li>
            <li>Full Stack Developer</li>
          </ul>
          <ul className="list_item flex gap-4 flex-col capitalize">
            <li>Data Scientist</li>
            <li>Front End Developer</li>
            <li>Shopify Developer</li>
            <li>Python Developer</li>
          </ul>
          <ul className="list_item gap-4 flex flex-col capitalize">
            <li>Shopify Developer</li>
            <li>Phython developer</li>
            <li>Full Stack Developer</li>
            <li>Explore more</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cardhero;
