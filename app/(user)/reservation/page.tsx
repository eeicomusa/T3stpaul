"use client";

import Link from "next/link";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsTiktok,
} from "react-icons/bs";
import { HiPhone, HiMail } from "react-icons/hi";


import Image from "next/image";
import { payments } from "@/components/constants";
import Pagebanner from "@/components/Pagebanner";
import OpeningHours from "@/components/OpeningHours";
import ContactForm  from "@/components/ContactForm";

const Enquire = () => {
  
  return (
   <>
      <Pagebanner
        header="Reservations and contact "
        body="Have anything in mind ,please fill the form below to react out to us or book a resrvation"
      />
      <section className="w-full min-h-screen">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24 p-16 pb-8 sm:pb-12 ">
        <h2 className="text-4xl">Reservation.</h2>
        <div className="w-full flex flex-col gap-8 sm:gap-12 md:flex-row justify-between ">
          {/* Booking Form */}
            <ContactForm />
          {/* Contacts Section */}
          <div className="flex flex-col md:w-1/3 gap-6 w-full items-center sm:items-start border-2 p-2 rounded">
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl">Reach Us On</h4>
              <div className="text-gray-500 flex items-center justify-center gap-2">
                <HiPhone size={18} />
                <p>+25471055659 | +254720484862</p>
              </div>
              <div className="text-gray-500 flex items-center gap-2">
                <HiMail size={18} />
                <p>info@paulosafaris.co.ke</p>
              </div>
            </div>
           <OpeningHours />
            {/* Social icons */}
            <div className="flex gap-4 text-green">
              <Link
                href="https://pinterest.com/paulosafaris/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-[#e60023] hover:opacity-70  flex items-center justify-center h-6 w-6 rounded-full">
                <BsPinterest size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/paul-otieno-294689136/"
                className="hover:opacity-70 text-white bg-[#0077b5] h-6 w-6 flex items-center justify-center  rounded-full"
                target="_blank"
                rel="noopener noreferrer">
                <BsLinkedin size={13} />
              </Link>
              <Link
                href="https://www.twitter.com/PauloSafaris"
                className="hover:opacity-70 text-white bg-[#00acee] h-6 w-6 rounded-full flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer">
                <BsTwitter size={16} />
              </Link>
              <Link
                href="https://www.instagram.com/paulosafaris"
                className="hover:opacity-70 text-white bg-[#e1306c] h-6 w-6 rounded-full flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer">
                <BsInstagram size={16} />
              </Link>
              <Link
                href="https://www.facebook.com/paulosafariskenya/"
                className="hover:opacity-70 text-white bg-[#3b5998] h-6 w-6 rounded-full flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer">
                <BsFacebook size={16} />
              </Link>
              <Link
                href="https://www.tiktok.com/paulosafaris"
                className="hover:opacity-70 text-white bg-[#fe2c55] h-6 w-6 rounded-full flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer">
                <BsTiktok size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="flex flex-col gap-4 pt-6 items-center sm:items-start">
          <h4 className="text-2xl">Accepted Payments</h4>
          <div className="flex flex-row flex-wrap gap-8 md:gap-10 lg:gap-12 items-center sm:items-start">
            {payments.map((mode) => (
              <div
                key={mode.id}
                className="relative shadow-md w-28 h-24 rounded-md">
                <Image
                  src={mode.img}
                  alt={mode.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className=" pt-8 sm:pt-10 text-sm text-opacity-60">
            Check out our safari reservation{" "}
            <Link
              href="/terms_conditions"
              className=" text-red underline cursor-pointer hover:no-underline">
              terms and conditions
            </Link>
          </p>
        </div>
      </div>
    </section>
   </>
  );
};

export default Enquire;
