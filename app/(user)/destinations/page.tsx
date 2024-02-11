import Link from 'next/link';
import Image from 'next/image';
import { getDestinations } from "../../../sanity/sanity-utils";
import { urlForImage } from '@/sanity/lib/image';
import { HiLocationMarker, HiStar } from "react-icons/hi";
import {PortableText} from '@portabletext/react'

import { components } from '../../../components/Serializer';
import MombasaSafaris from '@/components/MombasaSafaris';
import Gallery from '@/components/Gallery';
import PreviewDestinations from '@/components/PreviewDestinations';
import TestMonials from '@/components/Testmonials';
import Pagebanner from '@/components/Pagebanner';import destination from '../../../sanity/destination-schema';
export default async function Destinations() {
  const destinations = await getDestinations();
  // console.log("your destinations",destinations);
  return (
    <>
    <Pagebanner
      header="Destinations"
      body="Here are our popular destinations"
     />
      <section className="w-full min-h-screen">
     {/* <div className="max-w-6xl m-auto px-4 sm:px-6 lg:px-4 p-16 pb-8 sm:pb-12 flex flex-col space-y-8  mt-10 sm:mt-16 lg:mt-24">
        <h2 className="text-4xl">Destinations.</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-4 pt-4 pb-8">
          {destinations.map((dest) => (
            <Link 
              href={`/destinations/${dest.slug}`}
              key={dest._id}
              className=' border-2  border-black rounded-md'
            >
              <div className="w-full relative h-[300px]">
                 <Image
                  src={urlForImage(dest.image).url()}
                   alt="Destination image"
                   fill
                   className="rounded-t-md object-cover hover:grayscale transition-all filter duration-300 ease-out"
              />
               <div className="p-1 absolute top-1 left-1 bg-white rounded-sm flex flex-row font-bold text-yellow"> 
                   <HiStar size={14} />
                   <HiStar size={14} />
                   <HiStar size={14} />
                   <HiStar size={14} />
                   <HiStar size={14} />
                 </div>  
              </div>
               <div className="flex flex-col gap-2 px-4 pb-6">
                
              <p>
                  
                </p>
                 <div className="flex items-around justify-between text-md bold">
                   <p className="text-black/70 font-talic">
                     <span className="inline-block mr-1">
                       <HiLocationMarker size={20} />
                     </span>
                     City : {dest.name}
                   </p>
                 </div>
                <div className="flex items-around justify-between text-md bold">

                   <p className="text-black/70 font-bold">
                    Price ${dest.price}
                   </p>
                  <button className="bg-green text-white px-4 py-2 rounded-md">Learn More</button>
                </div>
               </div>
            </Link>
          ))}
        </div>
      </div> */}
      <MombasaSafaris/>
      <PreviewDestinations/>
      <Gallery />
      <TestMonials/>
    </section>
    </>
  );
}