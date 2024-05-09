import Cardhero from "../components/Cardhero";
import FooterPage from "../components/Footer";
import NavHeader from "../components/Header";
import ContainerPage from "../components/Intro";
import ArtImg from "../components/ColoredLines";
import ExploreSection from "../components/Explore";
import { items1, items2 } from "../Data";
import Iconbtn from "../imgs/Vector.png";
import Iconbtn2 from "../imgs/Vector (9).png";
import HowItWorkedSection from "../components/HowItWorked";
import VideoPage from "../components/Video";
import FAQSection from "../components/FAQSection";
import JourneySection from "../components/Journey";
import CarouselRender from "../components/CarouselRender";

function Layout() {
  return (
    <div className="bg-white/50 m-0 p-0 ">
      <section>
        <NavHeader />
        <ContainerPage />
        <div>
          <Cardhero />
        </div>
      </section>

      <ArtImg />
      <ExploreSection
        items1={items1}
        items2={items2}
        Iconbtn={Iconbtn}
        Iconbtn2={Iconbtn2}
      />

      <HowItWorkedSection />
      <VideoPage />
      <JourneySection/>
    

      <CarouselRender />

      <FAQSection />

      <FooterPage />
    </div>
  );
}

export default Layout;
