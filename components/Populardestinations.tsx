import Link from "next/link";
import React from "react";
import { HiStar } from "react-icons/hi";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
const PopularDestinations = () => {
  return (
    <div>
       <section className="popular" id="destination">
            <div className="container">
                <p className="section-subtitle">Uncover place</p>
                <h2 className="h2 section-title">Popular destination</h2>
                <p className="section-text">
                </p>
                <ul className="popular-list">
                <li>
                    <div className="popular-card">
                    <figure className="card-img">
                        <Image
                        src="/popular-1.jpg"
                        alt="San miguel, italy"
                        loading="lazy"
                        width={500} height={200}
                        />
                    </figure>
                    <div className="card-content">
                        <div className="card-rating">
                                 <HiStar size={14} />
                    <HiStar size={14} />
                    <HiStar size={14} />
                    <HiStar size={14} />
                    <HiStar size={14} />{/* <Cistar /> */}
                        </div>
                        <p className="card-subtitle">
                        <a href="#">Italy</a>
                        </p>
                        <h3 className="h3 card-title">
                        <a href="#">San miguel</a>
                        </h3>
                        <p className="card-text">
                        Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                        </p>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="popular-card">
                    <figure className="card-img">
                        <Image
                        src="/popular-2.jpg"
                        alt="Burj khalifa, dubai"
                        loading="lazy" height={200}
                        width={500}
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
                        <a href="#">Dubai</a>
                        </p>
                        <h3 className="h3 card-title">
                        <a href="#">Burj khalifa</a>
                        </h3>
                        <p className="card-text">
                        Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                        </p>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="popular-card">
                    <figure className="card-img">
                        <Image
                        src="/popular-2.jpg"
                        alt="Burj khalifa, dubai"
                        loading="lazy" height={200}
                        width={500}
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
                        <a href="#">Dubai</a>
                        </p>
                        <h3 className="h3 card-title">
                        <a href="#">Burj khalifa</a>
                        </h3>
                        <p className="card-text">
                        Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                        </p>
                    </div>
                    </div>
                </li>
                </ul>
                <button className="btn btn-primary">More destintion</button>
            </div>
            </section>
    </div>

  );
};

export default PopularDestinations;
