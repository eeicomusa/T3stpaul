import Link from "next/link";
import React from 'react';
import { HiStar } from "react-icons/hi";
import Image from "next/image";

export default function Testimonials() {
  // Mock testimonials data
  const testimonials = []; // placeholder for your testimonials data

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-blue-500">
      {/* Background image */}
      <img
        src="/backgroundimages.png" 
        alt="Background"  
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlapping Eclipses with Images */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        {/* ... Eclipse Images ... */}

        {/* Content with darker background */}
        <div className="relative  p-8 text-center bg-black bg-opacity-50">
          <div className="inline-block mb-3">
            <span className="text-sm font-bold text-yellow-400 uppercase px-3 py-1 bg-white rounded-full mr-2">Trending Now</span>
            {/* Stars */}
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="inline-block text-yellow-400" />
            ))}
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Wildlife of Kenya</h2>
          <p className="text-white mb-6">
            To make a <span className="font-bold">Safari Reservation</span> or
            simply you want to get in touch with us regarding our fantastic
            collection of{" "}
          </p>
          <div className="mt-6">
            <Link href="/reservation">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded inline-block">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
