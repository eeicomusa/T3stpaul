import Link from "next/link";
import React from "react";
import { HiStar } from "react-icons/hi";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import {kenyaTouristDestinations} from "../components/constants/index"
const PopularDestinations = () => {
  return (
    <div>
       <section className="popular" id="destination">
       
            <div className="container">
                <h2 className="h2 section-title">Magical Kenya</h2>
                <p className="section-subtitle">Popular Destinations</p>
                <p className="section-text">
                </p>
                <ul    className="popular-list">
                 {kenyaTouristDestinations.map((destination,index) =>(
                <li key={index}>
                    <div className="popular-card">
                    <figure className="card-img">
                        <Image
                        src={destination.image}
                        alt="San miguel, italy"
                        loading="lazy"
                        width={200} height={200}
                        />
                    </figure>
                    <div className="card-content">
                        <div className="card-rating">
                                 <HiStar size={14} />
                    <HiStar size={14} />
                    <HiStar size={14} />
                    <HiStar size={14} />
                    <HiStar size={14} />
                        </div>
                        <p className="card-subtitle">
                        <a href="#">{destination.city}</a>
                        </p>
                        <h3 className="h3 card-title">
                        <a href="#">{destination.city}</a>
                        </h3>
                        <p className="card-text">
                      {destination.description}
                        </p>
                    </div>
                    </div>
                </li>
                 ))}
                 </ul>
               
                <button className="btn btn-primary">More destintion</button>
            </div>
            </section>
    </div>

  );
};

export default PopularDestinations;
