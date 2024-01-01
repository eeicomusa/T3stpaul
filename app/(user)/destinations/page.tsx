import Link from 'next/link';
import Image from 'next/image';
import { getDestinations } from "../../../sanity/sanity-utils";
import { urlForImage } from '@/sanity/lib/image';

export default async function Destinations() {
  const destinations = await getDestinations();
  console.log("your destinations",destinations);
  return (
    <section className="w-full min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 p-16 pb-8 sm:pb-12 flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
        <h2 className="text-4xl">Destinations.</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 pb-8">
          {destinations.map((dest) => (
            <Link 
              href={`/destinations/${dest.slug}`}
              key={dest._id}
            >
              <p className="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:border-gray-700">
                <Image 
                  className="rounded-t-lg" 
                  layout="responsive"
                  width={16}
                  height={9}
                  src={urlForImage(dest.image).url()}
                  alt={dest.name}
                />
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{dest.name}</h5>
                  <div className="flex items-center mt-2.5 mb-5">
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-md font-bold text-gray-900 ">${dest.price}</span>
                  </div>
                  <div>
                    <p>{dest.content}</p>
                  </div>
                  <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Book Now
                  </a>
                </div>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
