const links = [
    {
        id:1,
        url:"/",
        name:'HOME',
    },
    // {
    //     id:2,
    //     url:"/destinations",
    //     name:'DESTINATIONS',
    // },
    {
        id:3,
        url:"/about",
        name:'ABOUT US',
        submenu:[
          {
            id: 9,
            url: "/about/our-team",
            name: "Our Team",
          },
          {
            id : 10,
            url : "/about/terms&conditions",
            name: "Terms And Conditions",
          },
          {
            id : 11,
            url : "/about/privacy",
            name: "Privacy Policy",
          },
          {
            id : 12,
            url : "/about/payment",
            name: "Payment Terms",
          },
          {
            id: 13,
            url: "/about/travelguide",
            name: "Travel Guide",
          }
        ]
    },
    
    {
        id:4,
        url:"/blog",
        name:'BLOG',
    },

    {
        id:5,
        url:"/reservation",
        name:'CONTACT US',
    },

];

const safaris = [
  {
    id: 1,
    url: "/safaris/explore-kenya",
    imgUrl: "/safaris/explore-kenya/impala.jpg",
    title: "Explore Kenya (14 days)",
    location:
      "Aberdare N. Park, Samburu G. Reserve, Sweetwaters Sanctuary, Solio Ranch, L. Nakuru, Maasai Mara, L. Naivasha N. Park, Amboseli N. Park, Tsavo East & West N. Park",
    alt: "impalas",
  },
  {
    id: 2,
    url: "/safaris/great-kenya",
    imgUrl: "/safaris/great-kenya/bufallo.jpg",
    title: "Great Kenya (8 days)",
    location:
      "Tsavo East N. Park, Amboseli N. Park, Nairobi N. Park, L. Nakuru, Maasai Mara N. Park, L. Naivasha",
    alt: "bufallos",
  },
  {
    id: 3,
    url: "/safaris/northern-kenya-special",
    imgUrl: "/safaris/nothern-kenya/wildebeasts.jpg",
    title: "Northern Kenya Special (6 days)",
    location:
      "Aberdare N. Park, Samburu G. Reserve, Mt. Kenya & Sweetwaters Sanctuary",
    alt: "wildeasts",
  },
  {
    id: 4,
    url: "/safaris/tsavo-special",
    imgUrl: "/safaris/tsavo-special/elephants.jpg",
    title: "Tsavo Special (3 days)",
    location: "Tsavo East N. Park & Taita Hills Sanctuary",
    alt: "elephants",
  },

  {
    id: 5,
    url: "/safaris/nairobi-special",
    imgUrl: "/safaris/nairobi-special/leopard.jpg",
    title: "Nairobi Special (4 days)",
    location: "Nairibi N. Park , Giraffe Center, Karen Blixen",
    alt: "leopard",
  },

  {
    id: 6,
    url: "/safaris/big-five",
    imgUrl: "/safaris/big-five/lion.jpg",
    title: "Big Five (5 days)",
    location: "L Nakuru & Maasai Mara N. Park",
    alt: "lion",
  },
];

const flightsafaris = [
  {
    id: 1,
    url: "/flight-safaris/maasai-mara-amboseli",
    imgUrl: "/flightsafaris/amboseli-mara/elephant.jpg",
    title: "Maasai Mara & Amboseli (4 nights)",
    location: "Maasai Mara & Amboseli National Parks",
    alt: "elephants",
    description: "Explore the stunning landscapes and incredible wildlife of Maasai Mara & Amboseli National Parks over 4 nights.",
    duration: "5D/4N",
    pax: 8,
    reviews: 30,
    price: 1200
  },
  {
    id: 2,
    url: "/flight-safaris/maasai-mara-special",
    imgUrl: "/flightsafaris/mara-special/ostrich.jpg",
    title: "Maasai Mara Special (3 days)",
    location: "Maasai Mara National Park",
    alt: "ostrich",
    description: "A special 3-day tour of the Maasai Mara, offering a unique opportunity to witness the diverse wildlife and breathtaking scenery.",
    duration: "3D/2N",
    pax: 10,
    reviews: 45,
    price: 950
  },
  {
    id: 3,
    url: "/flight-safaris/maasai-mara-special",
    imgUrl: "/flightsafaris/mara-special/ostrich.jpg",
    title: "Serengeti Adventure (5 days)",
    location: "Serengeti National Park",
    alt: "lion",
    description: "Embark on a 5-day adventure in the vast plains of the Serengeti, home to a rich array of wildlife and breathtaking landscapes.",
    duration: "5D/4N",
    pax: 12,
    reviews: 50,
    price: 1350
  }
];

const mombasasafaris = [
  {
    id: 1,
    url: "/mombasa-tours/dolphins-tour",
    imgUrl: "/mombasa-tours/dolphin-tour/main.jpg",
    title: "Dolphins Watching Tour",
    location: "Wasini Island Kenya",
    alt: "dolphins",
  },
  {
    id: 2,
    url: "/mombasa-tours/half-day-city-tour",
    imgUrl: "/mombasa-tours/city-tour/wood.jpg",
    title: "Mombasa City Half Day Tour",
    location:
      "Mombasa Old Town, Wood Carvings Center(Akamba), Crocodile Farm(Nyali)",
    alt: "mombasa",
  },
  {
    id: 2,
    url: "/mombasa-tours/half-day-city-tour",
    imgUrl: "/mombasa-tours/city-tour/wood.jpg",
    title: "Mombasa City Half Day Tour",
    location:
      "Mombasa Old Town, Wood Carvings Center(Akamba), Crocodile Farm(Nyali)",
    alt: "mombasa",
  },
];
const prev_destination = [
  {
    id: 1,
    image: "/previewDestinations/mara.jpg",
    place: "Masai Mara Game Reserve",
    url: "/top-destinations/maasai-mara-game-reserve",
    alt: "antelope",
  },
  {
    id: 2,
    image: "/previewDestinations/amboseli.jpg",
    place: "Amboseli National Park",
    url: "/top-destinations/amboseli-national-park",
    alt: "elephants",
  },
  {
    id: 3,
    image: "/previewDestinations/serengeti.jpg",
    place: "Serengeti National Park",
    url: "/top-destinations/serengeti-national-park",
    alt: "wildebeasts",
  },

  {
    id: 4,
    image: "/previewDestinations/teast.jpg",
    place: "Tsavo East National Park",
    url: "/top-destinations/tsavo-east-national-park",
    alt: "elephants",
  },
  {
    id: 5,
    image: "/previewDestinations/twest.jpg",
    place: "Tsavo West National Park",
    url: "/top-destinations/tsavo-west-national-park",
    alt: "lizard",
  },
  {
    id: 6,
    image: "/previewDestinations/nakuru.jpg",
    place: "Lake Nakuru National Park",
    url: "/top-destinations/nakuru-national-park",
    alt: "bufallos",
  },
  {
    id: 7,
    image: "/previewDestinations/nairobi.jpg",
    place: "Nairobi National Park",
    url: "/top-destinations/nairobi-national-park",
    alt: "lions",
  },
];

const gallery = [
  {
    id: 1,
    image: "/boat.jpg",
    alt: "boat",
  },
  {
    id: 2,
    image: "/man.jpg",
    alt: "man",
  },
  {
    id: 3,
    image: "/boat1.jpg",
    alt: "boat",
  },
  {
    id: 4,
    image: "/tour.jpg",
    alt: "car",
  },
  {
    id: 5,
    image: "/cars.jpg",
    alt: "cars",
  },
  {
    id: 6,
    image: "/boat2.jpg",
    alt: "",
  },
];

const payments = [
  {
    id: 1,
    img: "/master.png",
    alt: "master card",
  },
  {
    id: 2,
    img: "/visa.png",
    alt: "visa card",
  },
  {
    id: 3,
    img: "/mpesa.png",
    alt: "mpesa",
  },
];

const footerlinks = [
  {
    id: 1,
    url: "/",
    name: "HOME",
  },
  {
    id: 2,
    url: "/destinations",
    name: "DESTINATIONS",
  },
  {
    id: 3,
    url: "/about",
    name: "ABOUT US",
  },

  {
    id: 4,
    url: "/blog",
    name: "BLOG",
  },

  {
    id: 5,
    url: "/reservation",
    name: "CONTACT US",
  },
  {
    id: 6,
    url: "/faqs",
    name: "FAQs",
  },
  {
    id: 8,
    url: "/information",
    name: "USEFUL INFO.",
  },
  {
    id: 9,
    url: "/terms_conditions",
    name: "TERMS & CONDITIONS",
  },
];

const bannerfooterlinks = [
  {
    id: 1,
    name: "Terms & Conditions",
    url: "/terms_conditions",
  },
  {
    id: 2,
    name: "Privacy & Policy",
    url: "/privacy",
  },
];

const amboseli = [
  {
    id: 1,
    img: "/amboseli/bird.jpg",
    alt: "bird",
  },
  {
    id: 2,
    img: "/amboseli/elephants.jpg",
    alt: "elephants",
  },
  {
    id: 3,
    img: "/amboseli/wildebest.jpg",
    alt: "wildebeast",
  },
  {
    id: 4,
    img: "/amboseli/hill.jpg",
    alt: "lake",
  },
  {
    id: 5,
    img: "/amboseli/flamingos.jpg",
    alt: "flamingos",
  },
  {
    id: 6,
    img: "/amboseli/wildebeasts.jpg",
    alt: "wildebeasts",
  },
];

const nakuru = [
  {
    id: 1,
    img: "/nakuru/rhino.jpg",
    alt: "rhino",
  },
  {
    id: 2,
    img: "/nakuru/baboon.jpg",
    alt: "baboon",
  },
  {
    id: 3,
    img: "/nakuru/nakuru3.jpg",
    alt: "rhino",
  },
  {
    id: 4,
    img: "/nakuru/bufallo.jpg",
    alt: "bufallo",
  },
  {
    id: 5,
    img: "/nakuru/hyna.jpg",
    alt: "hyna",
  },
  {
    id: 6,
    img: "/nakuru/nakuru1.jpg",
    alt: "rhino",
  },
];

const maasai = [
  {
    id: 1,
    img: "/maasai/mara1.jpg",
    alt: "giraffe",
  },
  {
    id: 2,
    img: "/maasai/mara2.jpg",
    alt: "car",
  },
  {
    id: 3,
    img: "/maasai/ostrich.JPG",
    alt: "Ostrich",
  },
  {
    id: 4,
    img: "/maasai/mara3.jpg",
    alt: "entelopes",
  },
  {
    id: 5,
    img: "/maasai/wbeasts.jpg",
    alt: "lion",
  },
  {
    id: 6,
    img: "/maasai/mara5.jpg",
    alt: "leopard",
  },
];

const tsavowest = [
  {
    id: 1,
    img: "/tsavowest/lion.jpg",
    alt: "lion",
  },
  {
    id: 2,
    img: "/tsavowest/tourists.jpg",
    alt: "elephants",
  },
  {
    id: 3,
    img: "/tsavowest/welcome.jpg",
    alt: "welcome",
  },
  {
    id: 4,
    img: "/tsavowest/elephants.jpg",
    alt: "elephants",
  },
  {
    id: 5,
    img: "/tsavowest/twiga.jpg",
    alt: "giraffe",
  },
  {
    id: 6,
    img: "/tsavowest/elephant.jpg",
    alt: "elephants",
  },
];

const tsavoeast = [
  {
    id: 1,
    img: "/tsavoeast/lion.jpg",
    alt: "lion",
  },
  {
    id: 2,
    img: "/tsavoeast/giraffe.jpg",
    alt: "giraffe",
  },
  {
    id: 3,
    img: "/tsavoeast/elephant.jpg",
    alt: "elephants",
  },
  {
    id: 4,
    img: "/tsavoeast/ndovu.jpg",
    alt: "elephant",
  },
  {
    id: 5,
    img: "/tsavoeast/ndovu2.jpg",
    alt: "elephants",
  },
  {
    id: 6,
    img: "/tsavoeast/ostrich.jpg",
    alt: "ostrich",
  },
];

const serengeti = [
  {
    id: 1,
    img: "/serengeti/elephants.jpg",
    alt: "cheeter",
  },
  {
    id: 2,
    img: "/serengeti/zebras.jpg",
    alt: "zebras",
  },
  {
    id: 3,
    img: "/serengeti/elephant.jpg",
    alt: "cheeter",
  },
  {
    id: 4,
    img: "/serengeti/cheeter.jpg",
    alt: "cheeter",
  },
  {
    id: 5,
    img: "/serengeti/sereng1.jpg",
    alt: "plains",
  },
  {
    id: 6,
    img: "/serengeti/lions.jpg",
    alt: "lion",
  },
];

const nairobi = [
  {
    id: 1,
    img: "/nairobi/nairobi.jpg",
    alt: "lions",
  },
  {
    id: 2,
    img: "/nairobi/zebras.jpg",
    alt: "zebras",
  },
  {
    id: 3,
    img: "/nairobi/bufallo.jpg",
    alt: "bufallo",
  },
  {
    id: 4,
    img: "/nairobi/impala.jpg",
    alt: "impalas",
  },
  {
    id: 5,
    img: "/nairobi/lion1.jpg",
    alt: "lion",
  },
  {
    id: 6,
    img: "/nairobi/giraffe.jpg",
    alt: "giraffe",
  },
];


const slides = [
  {
    src: "/carausel/elephants.jpg",
    alt: "elephants",
    title: "The Majestic Red Elephants",
    description: "Behold the awe-inspiring beauty of the red elephants, uniquely colored due to the red soil of their natural habitat. Embark on a journey with us to witness these magnificent creatures in their natural environment, offering a once-in-a-lifetime experience that blends adventure with the serenity of nature."
  },
  {
    src: "/carausel/wildebeasts.jpg",
    alt: "wildebeasts",
    title: "Witness the Great Wildebeest Migration",
    description: "Join us to experience the spectacular natural phenomenon of the wildebeest migration. This breathtaking event, featuring thousands of wildebeests crossing rivers and plains, is a testament to the wonders of the wild. It's an unmissable spectacle for nature enthusiasts and photographers alike."
  },
  {
    src: "/carausel/birds.jpg",
    alt: "birds",
    title: "Birdwatcher's Paradise",
    description: "Discover the vibrant and diverse world of exotic birds in their natural habitats. Our tailored bird-watching tours are perfect for both novice enthusiasts and seasoned ornithologists looking to add rare sightings to their life lists."
  },
  {
    src: "/carausel/bufallo.jpg",
    alt: "buffalo",
    title: "The Mighty Buffaloes",
    description: "Experience the thrill of seeing herds of powerful buffaloes roaming freely in the wild. Our guided tours provide a safe and enriching way to observe these magnificent beasts and learn about their role in the ecosystem."
  },
  {
    src: "/carausel/flamingos.jpg",
    alt: "flamingos",
    title: "The Flamboyant Flamingos",
    description: "Be mesmerized by the stunning sight of flamingos painting the lakes pink. This tour offers a serene yet colorful journey into the world of these elegant birds, ideal for families and photography enthusiasts."
  },
  {
    src: "/carausel/car.jpg",
    alt: "safari vehicle",
    title: "Adventure on Wheels",
    description: "Embark on an exhilarating safari adventure in our top-of-the-line vehicles. Enjoy the comfort and safety of our cars as you traverse through the wild, getting up close with nature and its inhabitants."
  },
  {
    src: "/carausel/hotel.jpg",
    alt: "Visit the best Hotels",
    title: "Stay in Luxury",
    description: "After a day of adventure, relax in the finest hotels offering exceptional service and comfort. Our selected accommodations provide the perfect setting to unwind, with stunning views and world-class amenities."
  }
];

const kenyaTouristDestinations = [
  {
    image: "/images/maasai-mara.jpg",
    destination: "Maasai Mara National Reserve",
    city: "Narok",
    description: "Famed for its exceptional population of lions, leopards, cheetahs, and its annual migration of zebra, Thomson's gazelle, and wildebeest to and from the Serengeti every year from July to October, known as the Great Migration."
  },
  {
    image: "/images/amboseli-national-park.jpg",
    destination: "Amboseli National Park",
    city: "Kajiado",
    description: "Known for its large elephant herds and views of immense Mount Kilimanjaro, across the border in Tanzania."
  },
  {
    image: "/images/lake-nakuru.jpg",
    destination: "Lake Nakuru National Park",
    city: "Nakuru",
    description: "Famous for its huge flocks of pink flamingos. The bird life here is world-renowned and offers over 400 species of both aquatic and terrestrial birds."
  },
  {
    image: "/images/tsavo-east.jpg",
    destination: "Tsavo East National Park",
    city: "Voi",
    description: "One of the oldest and largest parks in Kenya. Known for its vast area, diversity of wildlife, and the Yatta Plateau, the world's longest lava flow."
  },
  {
    image: "/images/mount-kenya.jpg",
    destination: "Mount Kenya National Park",
    city: "Nanyuki",
    description: "Home to the second-highest peak in Africa, Mount Kenya. It is an important water tower in the country and offers a unique ecosystem with varied flora and fauna."
  },
  {
    image: "/images/lamu.jpg",
    destination: "Lamu Old Town",
    city: "Lamu",
    description: "A UNESCO World Heritage Site, Lamu Old Town is Kenya's oldest continually inhabited settlement with origins dating back to the 12th century."
  },
  {
    image: "/images/diani-beach.jpg",
    destination: "Diani Beach",
    city: "Kwale",
    description: "A pristine and scenic beach stretch on the Indian Ocean coast, popular for its soft white sands and turquoise waters."
  }
];


export {
  safaris,
  links,
  prev_destination,
  gallery,
  footerlinks,
  amboseli,
  nakuru,
  maasai,
  tsavowest,
  tsavoeast,
  serengeti,
  nairobi,
  payments,
  bannerfooterlinks,
  mombasasafaris,
  flightsafaris,
  slides,
  kenyaTouristDestinations
};
