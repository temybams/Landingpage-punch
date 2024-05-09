import  { useState } from 'react';

function FAQSection() {

    const [activeIndex, setActiveIndex] = useState(null);


    const handleFieldClick = (index: any) => {
        setActiveIndex(index);
    };

    return (
        <section>
            <div
                className="faq_cont text-black mx-10 py-40 "
                style={{ backgroundColor: "#f9f9f9" }}
            >
                <div className="header text-6xl font-bold text-center ">
                    Frequently asked questions
                </div>
                <div className="questions_cont mt-20 flex flex-col mb-40">
                    <div
                        className={`flex rect border-t-2 border-b-2 w-full h-24 ${activeIndex === 0 ? 'bg-gray-300/50' : ''}`}
                        onClick={() => handleFieldClick(0)}
                    >
                        <div className="box w-48 text-lg border-gray-300 border-r-2 flex items-center justify-center">
                            General
                        </div>
                        <div className="box w-48 flex items-center justify-center"></div>
                        <div className="box  flex items-center text-lg lg:px-20 sm:px-40 justify-center">
                            I want to work part-time, is that possible
                        </div>
                    </div>
                    <div
                        className={`flex rect border-b-2 w-full h-24 ${activeIndex === 1 ? 'bg-gray-300/50' : ''}`}
                        onClick={() => handleFieldClick(1)}
                    >
                        <div className="box w-96 flex items-center justify-center"></div>
                        <div className="box flex items-center text-lg sm:px-20 lg:40 justify-center">
                            How long are the average projects?
                        </div>
                    </div>


                    <div className={`flex rect border-b-2 w-full h-24 ${activeIndex === 2 ? 'bg-gray-300/50' : ''}`}
                        onClick={() => handleFieldClick(2)}>
                        <div className="box w-96 flex items-center justify-center"></div>
                        <div className="box flex items-center text-lg sm:px-20 lg:40 justify-center">
                            How does the payment works?
                        </div>
                    </div>
                    <div className={`flex rect border-b-2 w-full h-24 ${activeIndex === 3 ? 'bg-gray-300/50' : ''}`}
                        onClick={() => handleFieldClick(3)}>
                       <div className="box w-96 flex items-center justify-center"></div>
                      < div className="box flex items-center text-lg sm:px-20 lg:40 justify-center">
                            How much can I earn?
                        </div>
                    </div>
                    <div className={`flex rect border-b-2 w-full h-24 ${activeIndex === 4 ? 'bg-gray-300/50' : ''}`}
                        onClick={() => handleFieldClick(4)}>
                        <div className="box w-48 border-gray-300 text-lg  border-r-2 flex items-center justify-center">
                            General
                        </div>
                        <div className="box w-48 flex items-center justify-center">
                            Joining Process
                        </div>
                        <div className="box flex items-center text-lg sm:px-20 lg:40 justify-center">
                            I want to work part-time, is that possible
                        </div>
                    </div>
                    <div className={`flex rect border-b-2 w-full h-24 ${activeIndex === 1 ? 'bg-gray-300/50' : ''}`}
                        onClick={() => handleFieldClick(1)}>
                       <div className="box w-96 flex items-center justify-center"></div>
                        
                        <div className="box flex items-center text-lg sm:px-20 lg:40 justify-center">
                            How long are the average projects?
                        </div>
                    </div>
                    <div className={`flex rect border-b-2 w-full h-24 ${activeIndex === 2 ? 'bg-gray-300/50' : ''}`}
                        onClick={() => handleFieldClick(2)}>
                        <div className="box w-96 flex items-center justify-center"></div>
                    
                        <div className="box flex items-center text-lg sm:px-20 lg:40 justify-center">
                            How does the payment works?
                        </div>
                    </div>
                    <div className={`flex rect border-b-2 w-full h-24 ${activeIndex === 5 ? 'bg-gray-300/50' : ''}`}
                        onClick={() => handleFieldClick(5)}>
                        <div className="box w-96 flex items-center justify-center"></div>
                        <div className="box flex items-center text-lg sm:px-20 lg:40 justify-center">
                            How long are the average projects?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
