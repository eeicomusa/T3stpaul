"use client";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image';
import { slides } from "../components/constants/index";


const ImageCarousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToshow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }
 return (
    <section id="home" className="w-full overflow-hidden pt-[4rem] sm:pt-[4.5rem] h-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-[300px] md:h-[400px] lg:h-[450px] sm:h-[350px] relative">
            <Image
              className="object-cover"
              src={slide.src}
              fill
              alt={slide.alt}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center bg-opacity-50 bg-black text-white">
              <div>
                <h2 className="h1 hero-title">{slide.title || "Journey to explore world"}</h2>
                <p className="hero-text">
                  {slide.description || "Default description..."}
                </p>
                <div className="btn-group">
                  {/* <button className="btn btn-primary">Learn more</button> */}
                  <button className="btn btn-secondary">Book now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageCarousel;