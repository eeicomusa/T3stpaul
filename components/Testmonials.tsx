"use client";
import {useState, useEffect}  from "react"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image';
import { getTestimonials } from "../sanity/sanity-utils";

interface TestMonialTypes {
  _id : string;
  image: string;
  message : string;
  client: string;
}
const TestMonials = () => {

  const [testimonials,setTestimonials] = useState<TestMonialTypes[]>([])
   useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
console.log("your testmonialsare loaded", data);
    };

    fetchTestimonials();
  }, []);
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
        {testimonials.map((testmonial, index) => (
           <section key={index} className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="max-w-lg mx-auto">
              <div className="relative">
                <div className="flex justify-center items-center h-64 bg-gradient-to-r from-[#29AB87] to-[#ffc15c] rounded-lg overflow-hidden">
                  <div className="px-8">
                    <p className="text-lg font-medium text-white mb-2">
                      Hear what our customers have to say
                    </p>
                    <p className="text-white">
                      {testmonial.message}
                    </p>
                    <div className="mt-4 flex items-center">
                      <Image
                              className="mx-auto h-10 w-10 rounded-full"
                              src={testmonial.image}
                              alt=""
                              width={100}
                              height={100}
                            />
                      <div>
                        <p className="text-white font-medium">{testmonial.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </section>
        ))}
        
      </Slider>
    </section>
  );
};

export default TestMonials;