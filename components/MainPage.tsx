import Image from "next/image";

export default function MainPage () {
    return (
        <div>
        <article>
            <section className="hero" id="home">
            <div className="container">
                <h2 className="h1 hero-title">Journey to explore world</h2>
                <p className="hero-text">
                Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit
                class corporis nostra rem quos voluptatibus habitant? Fames, vivamus
                minim nemo enim, gravida lobortis quasi, eum.
                </p>
                <div className="btn-group">
                <button className="btn btn-primary">Learn more</button>
                <button className="btn btn-secondary">Book now</button>
                </div>
            </div>
            </section>
            <section className="tour-search">
            <div className="container">
                <form action="" className="tour-search-form">
                <div className="input-wrapper">
                    <label htmlFor="destination" className="input-label">
                    Search Destination*
                    </label>
                    <input
                    type="text"
                    name="destination"
                    id="destination"
                    //   required=""
                    placeholder="Enter Destination"
                    className="input-field"
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="people" className="input-label">
                    Pax Number*
                    </label>
                    <input
                    type="number"
                    name="people"
                    id="people"
                    //   required=""
                    placeholder="No.of People"
                    className="input-field"
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="checkin" className="input-label">
                    Checkin Date**
                    </label>
                    <input
                    type="date"
                    name="checkin"
                    id="checkin"
                    //   required=""
                    className="input-field"
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="checkout" className="input-label">
                    Checkout Date*
                    </label>
                    <input
                    type="date"
                    name="checkout"
                    id="checkout"
                    //   required=""
                    className="input-field"
                    />
                </div>
                <button type="submit" className="btn btn-secondary">
                    Inquire now
                </button>
                </form>
            </div>
            </section>
            <section className="popular" id="destination">
            <div className="container">
                <p className="section-subtitle">Uncover place</p>
                <h2 className="h2 section-title">Popular destination</h2>
                <p className="section-text">
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
                rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
                aptent.
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
                        {/* <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" /> */}
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
                        {/* <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" /> */}
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
                        src="/popular-3.jpg"
                        alt="Kyoto temple, japan"
                        loading="lazy"
                        width={500} height={200}
                        />
                    </figure>
                    <div className="card-content">
                        <div className="card-rating">
                        {/* <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" /> */}
                        </div>
                        <p className="card-subtitle">
                        <a href="#">Japan</a>
                        </p>
                        <h3 className="h3 card-title">
                        <a href="#">Kyoto temple</a>
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
            {/* 
        - #PACKAGE
        */}
            <section className="package" id="package">
            <div className="container">
                <p className="section-subtitle">Popular Packeges</p>
                <h2 className="h2 section-title">Checkout Our Packeges</h2>
                <p className="section-text">
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
                rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
                aptent.
                </p>
                <ul className="package-list">
                <li>
                    <div className="package-card">
                    <figure className="card-banner">
                        <Image
                        src="/packege-1.jpg"
                        alt="Experience The Great Holiday On Beach"
                        loading="lazy"
                        width={500} height={200}
                        />
                    </figure>
                    <div className="card-content">
                        <h3 className="h3 card-title">
                        Experience The Great Holiday On Beach
                        </h3>
                        <p className="card-text">
                        Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo
                        maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                        </p>
                        <ul className="card-meta-list">
                        <li className="card-meta-item">
                            <div className="meta-box">
                            {/* <ion-icon name="time" /> */}
                            <p className="text">7D/6N</p>
                            </div>
                        </li>
                        <li className="card-meta-item">
                            <div className="meta-box">
                            {/* <ion-icon name="people" /> */}
                            <p className="text">pax: 10</p>
                            </div>
                        </li>
                        <li className="card-meta-item">
                            <div className="meta-box">
                            {/* <ion-icon name="location" /> */}
                            <p className="text">Malaysia</p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div className="card-price">
                        <div className="wrapper">
                        <p className="reviews">(25 reviews)</p>
                        <div className="card-rating">
                            {/* <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star" /> */}
                        </div>
                        </div>
                        <p className="price">
                        $750
                        <span>/ per person</span>
                        </p>
                        <button className="btn btn-secondary">Book Now</button>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="package-card">
                    <figure className="card-banner">
                        <Image
                        src="/packege-2.jpg"
                        alt="Summer Holiday To The Oxolotan River"
                        loading="lazy"
                        width={500} height={200}
                        />
                    </figure>
                    <div className="card-content">
                        <h3 className="h3 card-title">
                        Summer Holiday To The Oxolotan River
                        </h3>
                        <p className="card-text">
                        Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo
                        maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                        </p>
                        <ul className="card-meta-list">
                        <li className="card-meta-item">
                            <div className="meta-box">
                            {/* <ion-icon name="time" /> */}
                            <p className="text">7D/6N</p>
                            </div>
                        </li>
                        <li className="card-meta-item">
                            <div className="meta-box">
                            {/* <ion-icon name="people" /> */}
                            <p className="text">pax: 10</p>
                            </div>
                        </li>
                        <li className="card-meta-item">
                            <div className="meta-box">
                            {/* <ion-icon name="location" /> */}
                            <p className="text">Malaysia</p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div className="card-price">
                        <div className="wrapper">
                        <p className="reviews">(20 reviews)</p>
                        <div className="card-rating">
                            {/* <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star" /> */}
                        </div>
                        </div>
                        <p className="price">
                        $520
                        <span>/ per person</span>
                        </p>
                        <button className="btn btn-secondary">Book Now</button>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="package-card">
                    <figure className="card-banner">
                        <Image
                        src="/packege-3.jpg"
                        alt="Santorini Island's Weekend Vacation"
                        loading="lazy"
                        width={500} height={200}
                        />
                    </figure>
                    <div className="card-content">
                        <h3 className="h3 card-title">
                        Santorini Island Weekend Vacation
                        </h3>
                        <p className="card-text">
                        Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo
                        maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                        </p>
                        <ul className="card-meta-list">
                        <li className="card-meta-item">
                            <div className="meta-box">
                            {/* <ion-icon name="time" /> */}
                            <p className="text">7D/6N</p>
                            </div>
                        </li>
                        <li className="card-meta-item">
                            <div className="meta-box">
                            {/* <ion-icon name="people" /> */}
                            <p className="text">pax: 10</p>
                            </div>
                        </li>
                        <li className="card-meta-item">
                            <div className="meta-box">
                            {/* <ion-icon name="location" /> */}
                            <p className="text">Malaysia</p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div className="card-price">
                        <div className="wrapper">
                        <p className="reviews">(40 reviews)</p>
                        {/* <div className="card-rating">
                            <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star" />
                        </div> */}
                        </div>
                        <p className="price">
                        $660
                        <span>/ per person</span>
                        </p>
                        <button className="btn btn-secondary">Book Now</button>
                    </div>
                    </div>
                </li>
                </ul>
                <button className="btn btn-primary">View All Packages</button>
            </div>
            </section>
            {/* 
        - #GALLERY
        */}
            <section className="gallery" id="gallery">
            <div className="container">
                <p className="section-subtitle">Photo Gallery</p>
                <h2 className="h2 section-title">Photo From Travellers</h2>
                <p className="section-text">
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
                rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
                aptent.
                </p>
                <ul className="gallery-list">
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image
                    src="/gallery-1.jpg" 
                    alt="Gallery image" 
                    width={500} height={200}
                    />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image 
                    src="/gallery-2.jpg"
                    alt="Gallery image"  width={500} height={200}
                    />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image src="/gallery-3.jpg" alt="Gallery image" width={500} height={200} />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image src="/gallery-4.jpg" alt="Gallery image" width={500} height={200} />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image src="/gallery-5.jpg" alt="Gallery image" width={500} height={200} />
                    </figure>
                </li>
                </ul>
            </div>
            </section>
            {/* 
        - #CTA
        */}
            <section className="cta" id="contact">
            <div className="container">
                <div className="cta-content">
                <p className="section-subtitle">Call To Action</p>
                <h2 className="h2 section-title">
                    Ready For Unforgatable Travel. Remember Us!
                </h2>
                <p className="section-text">
                    Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                    nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
                    tenetur, aptent.
                </p>
                </div>
                <button className="btn btn-secondary">Contact Us !</button>
            </div>
            </section>
        </article>
        
        <div className="footer">
  <div className="footer-top">
    <div className="container">
      <div className="footer-brand">
        <a href="#" className="logo">
          <Image src="/logo.svg" alt="Tourly logo" width={200} height={200}/>
        </a>
        <p className="footer-text">
          Urna ratione ante harum provident, eleifend, vulputate molestiae proin
          fringilla, praesentium magna conubia at perferendis, pretium, aenean
          aut ultrices.
        </p>
      </div>
      <div className="footer-contact">
        <h4 className="contact-title">Contact Us</h4>
        <p className="contact-text">Feel free to contact and reach us !!</p>
        <ul>
          <li className="contact-item">
            {/* <ion-icon name="call-outline" /> */}
            <a href="tel:+01123456790" className="contact-link">
              +01 (123) 4567 90
            </a>
          </li>
          <li className="contact-item">
            {/* <ion-icon name="mail-outline" /> */}
            <a href="mailto:info.tourly.com" className="contact-link">
              info.tourly.com
            </a>
          </li>
          <li className="contact-item">
            {/* <ion-icon name="location-outline" /> */}
            <address>3146 Koontz, California</address>
          </li>
        </ul>
      </div>
      <div className="footer-form">
        <p className="form-text">
          Subscribe our newsletter for more update &amp; news !!
        </p>
        <form action="" className="form-wrapper">
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Enter Your Email"
            //required=""
          />
          <button type="submit" className="btn btn-secondary">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <p className="copyright">
        © 2022 <a href="">codewithsadee</a>. All rights reserved
      </p>
      <ul className="footer-bottom-list">
        <li>
          <a href="#" className="footer-bottom-link">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="footer-bottom-link">
            Term &amp; Condition
          </a>
        </li>
        <li>
          <a href="#" className="footer-bottom-link">
            FAQ
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

    </div>

    )
}