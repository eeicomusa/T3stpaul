// import React from 'react';
// import { HiStar } from "react-icons/hi";

// export default function Testimonials() {
//   // Mock testimonials data since we can't use await in the component body
//   const testimonials = []; // placeholder for your testimonials data

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       <img
//         src="/backgroundimages.png" 
//         alt="Background"
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       />
//       <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">

//         <div className="absolute" style={{ width: '600px', height: '600px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', transform: 'translate(-50%, -50%)' }}>
//           <img
//             className="absolute"
//             style={{ width: '600px', height: '600px', objectFit: 'cover', borderRadius: '50%' }}
//             alt="Ellipse"
//             src="/public/Ellipse 52.png"
//           />
//         </div>

//         {/* Second Eclipse */}
//         <div className="absolute" style={{ width: '500px', height: '500px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', transform: 'translate(50%, 50%)' }}>
//         <img
//             className="absolute"
//             style={{ width: '600px', height: '600px', objectFit: 'cover', borderRadius: '50%' }}
//             alt="Ellipse"
//             src="/public/Ellipse 53.png"
//           />
//         </div>

//         {/* Text and Buttons */}
//         <div className="relative z-10 p-8 text-center">
//           <div className="inline-block mb-3">
//             <span className="text-sm font-bold text-yellow-400 uppercase px-3 py-1 bg-white rounded-full mr-2">Trending Now</span>
//             {/* Stars */}
//             {[...Array(5)].map((_, i) => (
//               <HiStar key={i} className="inline-block text-yellow-400" />
//             ))}
//           </div>
//           <h2 className="text-4xl font-bold text-white mb-4">Wildlife of Alaska</h2>
//           <p className="text-white mb-6">
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//           </p>
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { HiStar } from "react-icons/hi";

export default function Testimonials() {
  // Mock testimonials data since we can't use await in the component body
  const testimonials = []; // placeholder for your testimonials data

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-blue-500">
      {/* Background image */}
      <img
        src="/backgroundimages.png" // replace with your actual image path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlapping Eclipses with Images */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        {/* First Eclipse with Image */}
        <div className="absolute" style={{ width: '600px', height: '600px', clipPath: 'circle(50% at 50% 50%)', transform: 'translate(-30%, -50%)', zIndex: 1 }}>
          <img
           src="/boat.jpg"
            alt="Eclipse"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Eclipse with Image */}
        <div className="absolute" style={{ width: '500px', height: '500px', clipPath: 'circle(50% at 50% 50%)', transform: 'translate(30%, 50%)', zIndex: 1 }}>
          <img
            src="/Ellipsen.png"
            alt="Eclipse"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 text-center">
          <div className="inline-block mb-3">
            <span className="text-sm font-bold text-yellow-400 uppercase px-3 py-1 bg-white rounded-full mr-2">Trending Now</span>
            {/* Stars */}
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="inline-block text-yellow-400" />
            ))}
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Wildlife of Alaska</h2>
          <p className="text-white mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
