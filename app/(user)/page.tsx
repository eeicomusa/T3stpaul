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
import Search from "@/components/Search";

const Home = () => {
  return (
    <div className="bg-slate-50">
      <ImageCarousel />
      <Search />
       <ContactUsBanner /> 
      <Safaris />
      <MombasaSafaris />
      <TestimonialCarousel />
      <FlightSafaris />
      <MainPage />
      <Gallery/>
     {/* <Destinations />  */}
    </div>
  );
};

export default Home;
