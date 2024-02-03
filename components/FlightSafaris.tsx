import Image from "next/image";
import Link from "next/link";
import {  HiStar } from "react-icons/hi";

import { flightsafaris } from "./constants";

export default function FlightSafaris() {
  return (
    <section className="package" id="package">
      <div className="container">
        <p className="section-subtitle">Popular Packages</p>
        <h2 className="h2 section-title">Checkout Our Packages</h2>
        {/* <p className="section-text"> */}
          {/* Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent. */}
        {/* </p> */}
        <ul className="package-list">
          {flightsafaris.map((item) => (
            <li key={item.id}>
              <div className="package-card">
                <figure className="card-banner">
                  <Image
                    src={item.imgUrl}
                    alt={item.alt}
                    loading="lazy"
                    width={500} height={200}
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        {/* <ion-icon name="time" /> */}
                        <p className="text">{item.duration}</p>
                      </div>
                    </li>
                    <li className="card-meta-item">
                      <div className="meta-box">
                        {/* <ion-icon name="people" /> */}
                        <p className="text">pax: {item.pax}</p>
                      </div>
                    </li>
                    <li className="card-meta-item">
                      <div className="meta-box">
                        {/* <ion-icon name="location" /> */}
                        <p className="text">{item.location}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">({item.reviews} reviews)</p>
                    <div className="card-rating">
                      <HiStar size={14}/>
                      <HiStar size={14}/>
                      <HiStar size={14}/>
                      <HiStar size={14}/>
                      <HiStar size={14}/>
                    </div>
                  </div>
                  {/* <p className="price">
                    ${item.price}
                    <span>/ per person</span>
                  </p> */}
                  <button className="btn btn-secondary">Book Now</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary">View All Packages</button>
      </div>
    </section>
  );
}
