import React from 'react'
import Image from 'next/image';
import { getTeam } from '@/sanity/sanity-utils';
import { urlForImage } from '@/sanity/lib/image';
import { gallery } from '@/components/constants';
import Gallery from '@/components/Gallery';
import { Metadata } from 'next';
import Pagebanner from '@/components/Pagebanner';
export const metadata:Metadata = {
  title:"About Us",
  description:"Paulosafaris is a unique Kenya Tour Company based in Mombasa offering Kenya Coastal Beach Holidays, Adventures from Mombasa to Nairobi, East Africa Wildlife Tours from the Kenyan Coast, Tsavo Safaris from Mombasa and Maasai Mara Tours."
}

export default async function About() {

  const team = await getTeam();

  return (
  <>
    <Pagebanner 
      header='About Us'
      body="Want to learn more About us ?"
    />
      <section className="w-full min-h-screen">
     <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 p-16 pb-8 sm:pb-12 flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
        <div className="w-full flex flex-col gap-4 pb-2">
          <h2 className="text-4xl font-bold text-center">About Paulosafaris.</h2>
          <p className="text-base text-gray-800">
            Paulosafaris is a unique Kenya Tour Company based in Mombasa offering Kenya Coastal Beach Holidays, Adventures from Mombasa to Nairobi, East Africa Wildlife Tours from the Kenyan Coast, Tsavo Safaris from Mombasa and Maasai Mara Tours.
          </p>
        </div>

        <div className="w-full space-y-4">
          <div className="space-y-1">
            <h5 className="text-2xl font-bold text-center">Our Vision</h5>
            <p className="text-base text-gray-800">
              To offer clients with the best travel needs and leisure, while leading the way to become the leading travel agency in Kenya and beyond.Our vision at Paul Safaris is to be recognized as the foremost authority in providing authentic and enriching African safari experiences. We aspire to set the benchmark for 
              excellence in the tourism industry across Kenya and Tanzania, showcasing the unparalleled beauty, culture, and wildlife of Africa to the world.
            </p>
            <p className="text-base text-gray-800">
             We envision a future where every journey with us is not only a voyage of discovery for our guests but also a step towards sustainable tourism that respects and preserves the natural splendor and cultural heritage of Africa. Our commitment extends to fostering positive impacts within local communities, ensuring that the benefits of 
             tourism are shared equitably, and contributing to conservation efforts that safeguard the future of our wildlife and natural landscapes.
            </p>
            <p className="text-base text-gray-800">
             In our pursuit of excellence, Paul Safaris aims to innovate and elevate the standards of travel in East Africa, continuously enhancing our services to meet and exceed the evolving expectations of our guests. 
             We strive to create journeys that are not only luxurious and comfortable but also deeply meaningful and transformative.
            </p>
            <p className="text-base text-gray-800">
              Our vision is to cultivate a global community of travelers who are as passionate about exploring and 
              protecting the wonders of Africa as we are. We see Paul Safaris as more than a travel company; we are ambassadors of African heritage,
               dedicated to creating a legacy of travel that is responsible, inspiring, and unforgettable.
            </p>
          </div>
          <div className="space-y-1">
            <h5 className="text-2xl font-bold text-center">Our Mission</h5>
            <p className="text-base text-gray-800">
             Our mission is rooted in a harmonious blend of expert local knowledge, creative imagination, and attention to detail.
              This approach allows us to transform your vision into a reality, making every safari not just a trip, but a lifelong memory.
            </p>
            <p className="text-base text-gray-800">
             We take pride in our ability to understand and articulate your travel aspirations, focusing on the critical elements that turn a simple holiday into an adventure of a lifetime. Our experience, honed over many years in the field, 
             is reflected in our management style - pragmatic, yet infused with a sense of wonder and discovery
            </p>
            <p className="text-base text-gray-800">
             Diversity is at the core of our business. Paul Safaris offers an all-encompassing travel experience, catering to a range of needs from hotel reservations, short excursions, camping and lodge safaris, to mountaineering and beach holidays. Our services extend to car hire, air ticketing for domestic, regional,
              and international travel, as well as meet-and-greet services at all major airports within East Africa.
            </p>
            <p className="text-base text-gray-800">
             With a carefully curated selection of safaris in both Kenya and Tanzania, we promise you an exceptional experience of African hospitality - from the sun-kissed beaches of Mombasa to the heart-stirring wilderness of our national parks. At Paul Safaris, 
             every journey is a story waiting to be told, and we are here to help you write yours.
            </p>
          </div>
          <div className="space-y-1">
            <h5 className="text-2xl font-bold text-center">Our Core Values</h5>
            <ul className="list-disc space-y-4 pl-6 text-gray-800">
              <li>
                <h6 className="italic font-medium">Integrity</h6>
                <p className="text-base">
                  We are committed to honesty, loyalty, and a high standards of ethical conduct.
                </p>
              </li>
              <li>
                <h6 className="italic font-medium bold">Customer-Focused</h6>
                <p className="text-base">
                  We are committed to providing the highest level of customer service. We extend this to our agents, their customers and our preferred suppliers.
                </p>
              </li>
              <li>
                <h6 className="italic font-medium">Innovative</h6>
                <p className="text-base">
                  We are committed to developing and implementing cutting-edge technologies for our agents and preferred partners.
                </p>
              </li>
              <li>
                <h6 className="italic font-medium">Commitment</h6>
                <p className="text-base">
                  We are committed to providing an unparalleled level of service and value with individually customized travel management service and dedicated travel manager and corporate travel team.
                </p>
              </li>
              <li>
                <h6 className="italic font-medium">Excellence</h6>
                <p className="text-base">
                  We are committed to being a high performance organization by staying focused on total customer satisfaction. We continuously analyze our processes and ourselves in order to become the best of the best.
                </p>
              </li>
            </ul>
          </div>
        </div>


       <div className="w-full flex justify-center flex-col gap-4 pt-6 pb-8">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {team?.map((item) => (
            <div
              key={item._id}
              className="h-[150px] w-full relative flex gap-2 rounded-md bg-white p-2 shadow-sm flex-col max-w-md">
              <Image
                src={urlForImage(item.image).url()}
                fill
                alt={item.firstname}
                className="rounded-md object-cover"
              />
              <div className="bg-black rounded-bl-md bg-opacity-20 backdrop-blur-sm absolute w-fit bottom-0 left-0 right-0 drop-shadow-sm px-1 py-[2px]">
                <p className="text-yellow uppercase text-sm">
                  {item.firstname}
                  <span className="text-white capitalize">
                    ({item.designation})
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"> 
          {gallery?.map((item) => (
            <div
              key={item.id}
              className="w-full h-[150px] sm:h-[180px] relative rounded-md">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
         </div>
          
      </div>
    </section>
     </>
  );
}
