import React, { useState } from "react";
import Icon from "../imgs/Vector (15).png";
import Avatar3 from "../imgs/Frame 626623.png";
import Avatar2 from "../imgs/portrait.png";

const VideoPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: "Resume Screening",
      description:
        "Candidates' resumes are screened to select the best fit for your requirements.",
    },
    {
      number: 2,
      title: "Video Interview",
      description:
        "Candidates are interviewed through video calls to assess their skills and fit.",
    },
    {
      number: 3,
      title: "Technical Evaluation",
      description:
        "Technical evaluations are conducted to gauge candidates' proficiency.",
    },
    {
      number: 4,
      title: "Application Evaluation",
      description:
        "Applications are evaluated based on the requirements of the role.",
    },
    {
      number: 5,
      title: "Let's Get to Work",
      description:
        "Once selected, candidates are onboarded and ready to start working.",
    },
  ];

  const handleStepClick = (stepNumber: number) => {
    setActiveStep(stepNumber);
  };

  return (
    <section>
      <div className="flex flex-col-reverse p-4 lg:p-20 gap-4 lg:gap-20">
        <div className="left flex flex-col gap-4 flex-1">
          <h1 className="font-bold sm:text-6xl lg:text-6xl w-[600px] leading-8 text-black   ">
            How we ensure you're in good hands.
          </h1>
          <p className="lg:w-[640px] sm:w-[390px] text-gray-500 font-base lg:text-xl sm:text-sm ">
            With our comprehensive screening process, we hand-pick highly
            skilled candidates so you can onboard them in a matter of days.
          </p>

          <div className="box flex flex-col gap-1">
            {steps.map((step) => (
              <div
                className={`top text-black flex flex-col gap-3 lg:w-[600px] sm:w-fit py-2 px-4 rounded-md border-gray-100 border-[1px] shadow p-2 ${
                  step.number === activeStep ? "active" : ""
                }`}
                key={step.number}
                onClick={() => handleStepClick(step.number)}
              >
                <div className="flex items-center gap-3">
                  <div className="img_cont flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                    <img
                      src={step.number === activeStep ? Avatar3 : Icon}
                      alt=""
                      className="w-[40%]"
                    />
                  </div>
                  <p className="text-sm py-4">
                    <span className="font-bold">Step {step.number}:</span>{" "}
                    {step.title}
                  </p>
                </div>
                {step.number === activeStep && (
                  <div className="bottom">
                    <p className="text-gray-500 font-normal text-base">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="right flex-1 flex  items-end">
          <div className="image_vi relative w-full max-w-[400px]">
            <div className="img w-40 h-40 rounded-full overflow-hidden absolute flex items-center justify-center -right-9 lg:-top-20 sm:-top-30 ">
              <img src={Avatar2} alt="" className="w-full" />
            </div>
            <div className="boxm p-6 mt-10 flex lg:flex sm:block shadow-md">
              <div className="rectangle w-12 h-80 bg-blue-600/70 rounded-lg flex flex-col gap-8 items-center p-2">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className={`w-8 h-8 flex items-center justify-center border-2 rounded-full border-white open-circle relative ${
                      step.number === activeStep ? "active" : ""
                    }`}
                  >
                    <span className="text-white text-xl font-semibold">
                      {step.number}
                    </span>
                  </div>
                ))}
              </div>
              <div className="article mt-2 flex flex-col gap-8 items-center p-2">
                {steps.map((step, index) => (
                  <p
                    key={index}
                    className="w-80 hover:text-black text-gray-500"
                  >
                    {step.title}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPage;
