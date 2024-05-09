import styled from "styled-components";
import Companylogo from "../imgs/Group 626553.png";

const FooterContainer = styled.footer`
  background-color: #000;
  opacity: 0.9;
  padding: 40px;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 10px; 
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-bottom: 100px;
`;

const BottomSection = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 20px;
  margin: 20px;

  @media screen and (max-width: 768px) {

    flex-direction: column; 
  }
`;

const LeftSection = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top:20px
  margin-bottom:20px
`;

const Logo = styled.div`
  img {
    width: 30%;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const RightSection = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 768px) {
    width: 100%; 
    flex-direction: column; 
  }
`;

const Lists = styled.ul`
  list-style-type: none;
  padding: 10px;
  margin: 34px;
  flex: 1;
 

  li {
    cursor: pointer;
  }

  a li:hover {
    text-decoration: underline;

    &:hover {
      text-decoration: underline;
    }
  }
  .sub-items {
    padding-left: 1rem;
    margin-top: 0.5rem;
    gap: 10px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    width: 50%;
    margin-bottom: 20px;
  }
`;

const FooterPage = () => {
  return (
    <FooterContainer>
      <TopSection>
        <div className="box_slant h-[500px] w-full flex items-center justify-center  bg-[#525AA0]">
          <h1 className=".box_slant text-white text-5xl font-bold w-[520px] text-center">
            Need a job done, and done well? Get started
          </h1>
        </div>
      </TopSection>
      <BottomSection>
        <LeftSection>
          <Logo>
            <img src={Companylogo} alt="Swilt" />
          </Logo>
          <p className="text-sm text-gray-100 w-[260px]">
            We take complex hiring processes - and simplify them. Connecting you
            to the world&apos;s highly qualified talent pool.
          </p>
          <p className="uppercase text-gray-300/70 text-sm">
            Links and redirect
          </p>
          <ActionButtons>
            <button className="bg-gray-300/10 px-10 rounded-2xl py-2 text-white text-sm">
              Hire now
            </button>
            <button className="bg-gray-300/10 px-10 rounded-2xl py-2 text-white text-sm">
              Apply Now
            </button>
          </ActionButtons>
        </LeftSection>

         <RightSection>
        <div className="top">
          <div className="lg:text-6xl sm:text-4xl font-bold text-white">
            Connecting the right people to the right businesses.
          </div>
        </div>
        <div className="bottom text-sm lg:flex sm:block py-4 ">
          <Lists>
            <li>
              <div className="header text-base uppercase text-gray-400">Platform</div>
              <ul className="sub-items lg:text-lg sm:text-base  ">
                <li>
                  <a href="#">Find Work</a>
                </li>
                <li>
                  <a href="#">Find Talent</a>
                </li>
                <li>
                  <a href="#">Articles</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </li>
          </Lists>
          <Lists>
            <li>
              <div className="header text-base uppercase text-gray-400">Categories</div>
              <ul className="sub-items lg:text-lg sm:text-base ">
                <li>
                  <a href="#">Data Science</a>
                </li>
                <li>
                  <a href="#">IT & Networking</a>
                </li>
                <li>
                  <a href="#">Web and Mobile</a>
                </li>
              </ul>
            </li>
          </Lists>
          <Lists>
            <li>
              <div className="header text-base uppercase text-gray-400">Help</div>
              <ul className="sub-items lg:text-lg sm:text-base ">
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </li>
          </Lists>
          <Lists>
            <li>
              <div className="header text-base uppercase text-gray-400">Get in touch@</div>
              <ul className="sub-items lg:text-lg sm:text-base">
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </li>
          </Lists>
        </div>
      </RightSection>
      </BottomSection>
      <div className="end border-t-2 text-sm border-gray-300/50 py-3 flex  items-center justify-between">
        <p className="uppercase text-sm text-gray-100"> all rights reserved</p>
        <div className="others flex items-center gap-5">
          <p className="decoration-white decoration-slice">
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Terms and Condition</a>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default FooterPage;
