import Link from "next/link";
import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

const ContactUsBanner = () => {
  return (
    <div>
      {/* <section className="w-full -mt-[7px] bg-slate-100 h-screen"> */}
        <article className="max-w-7xl mx-auto py-12 sm:py-16 px-8 flex flex-col space-y-8 justify-center items-center">
          <h2 className="text-4xl text-green text-center">Our Services</h2>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between gap-8 flex-col sm:flex-row">
              <div className="border p-4 rounded w-full">
                <h5 className="text-2xl leading-normal text-center sm:text-start">
                  Kenya Tours
                </h5>
                <p className="text-gray-500 leading-normal text-center sm:text-start lg:max-w-lg mt-3">
                  Samburu Game Reserve, Tsavo West/ East National Park, Maasai
                  Mara Game Reserve, Solio Ranch, Amboseli National Park, Meru
                  National Park,Sweetwaters Sanctuary, Nairobi National Park,
                  L.Nakuru National Park, L.Naivasha National Park, L.Bogiria,
                  L.Baringo, Taita Hills Sanctuary.
                </p>
              </div>
              <div className="border p-4 rounded-md w-full">
                <h5 className="text-2xl leading-normal sm:text-start text-center">
                  Tanzania Tours
                </h5>
                <p className="text-gray-600 leading-normal sm:text-start text-center lg:max-w-lg mt-3">
                  Serengeti National Park, Arusha, Dar es Salaam, Kilimanjaro
                  National Park, Lake Manyara National Park, Ngorongoro Crater.
                </p>
              </div>
            </div>

            <div className="flex justify-between gap-8 flex-col sm:flex-row">
              <div className="border rounded-md w-full p-4">
                <h5 className="text-2xl leading-normal sm:text-start text-center">
                  Rwanda Tours
                </h5>
                <p className="text-gray-600 leading-normal sm:text-start text-center lg:max-w-lg mt-3">
                  Gorilla Trekking - Volcanoes National Park.
                </p>
              </div>

              <div className="border w-full rounded-md p-4">
                <h5 className="text-2xl sm:text-start leading-normal text-center">
                  Uganda Tours
                </h5>
                <p className="text-center sm:text-start leading-normal text-gray-600 lg:max-w-lg mt-3">
                  Gorilla and Chimp Trekking - Bwindi & Kibale National Park.
                </p>
              </div>
            </div>
          </div>
        </article>
      {/* </section> */}
    </div>

  );
};

export default ContactUsBanner;
