import {
  Destinations,
  ImageCarousel,
  TestimonialCarousel,
  ContactUsBanner,
  Safaris,
} from "@/components";
import FlightSafaris from "@/components/FlightSafaris";
import MombasaSafaris from "@/components/MombasaSafaris";
import MainPage from "@/components/MainPage";
import Gallery from "@/components/Gallery";

const Home = () => {
  return (
    <div className="bg-slate-50">
      <ImageCarousel />
      <MainPage />
       <ContactUsBanner /> 
      <Safaris />
      <MombasaSafaris />
      <Gallery/>
      <FlightSafaris />
      {/* <TestimonialCarousel /> */}
     {/* <Destinations />  */}
    </div>
  );
};

export default Home;
