import { useState } from 'react';
import Avatar from "../imgs/zwilt-tba-1-01 2.png";
import Iconbtn2 from "../imgs/Vector (9).png";

function ContainerPage() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e:any) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <div className="flex items-center justify-center gap-0.5em">
                <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                    <p
                        className="font-bold flex items-center justify-center text-center text-black sm:text-4xl md:text-4xl lg:text-5xl"
                        style={{
                            marginTop: "2em",
                            width: "100%",
                        }}
                    >
                        Finding the right fit
                        <img
                            style={{
                                width: "10%",
                                height: "10%",
                            }}
                            src={Avatar}
                            alt="avatars"
                        />
                        <span>has</span>
                    
                    </p>
                    <p className="font-bold  text-center text-black sm:text-4xl md:text-4xl lg:text-5xl">never been easier</p>

                    <div className="small mt-6 text-black/80">
                        <p className="text-xl text-center mt-6 sm:text-lg md:text-xl lg:text-2xl">
                            With our rigorous pre-vetting process, you'll never have to{" "}
                            <br /> worry about finding the ideal candidate ever again
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-white mt-6">
                <div className="input relative flex items-center rounded-xl">
                    <input
                        type="text"
                        className="w-full bg-white text-gray-800 border outline-none rounded-xl py-6 px-6 "
                        placeholder="design"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className="bg-yellow-500 absolute rounded-xl flex items-center justify-center top-0 right-0 bottom-0 outline-none min-h-full w-20">
                        <img src={Iconbtn2} alt="" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContainerPage;
