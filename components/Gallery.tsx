import Image from "next/image";
export default function Gallery () {
    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <p className="section-subtitle">Photo Gallery</p>
                <h2 className="h2 section-title">Photo From Travellers</h2>
                <ul className="gallery-list">
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image
                    src="/travellers/boatride.jpg" 
                    alt="Gallery image" 
                    width={500} height={200}
                    />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image 
                    src="/travellers/lion.jpg"
                    alt="Gallery image"  width={500} height={200}
                    />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image src="/travellers/giraffe.jpg" alt="Gallery image" width={500}  height={200} />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image src="/travellers/hyena.jpg" alt="Gallery image" width={500} height={200} />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image src="/travellers/elephant.jpg" alt="Gallery image" width={500} height={200} />
                    </figure>
                </li>
                </ul>
            </div>
             <div className="container mt-2">
                <ul className="gallery-list">
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image
                    src="/travellers/crocodile.jpg" 
                    alt="Gallery image" 
                    width={500} height={200}
                    />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image 
                    src="/travellers/lion.jpg"
                    alt="Gallery image"  width={500} height={200}
                    />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image src="/travellers/elephants.jpg" alt="Gallery image" width={500}  height={200} />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image src="/travellers/ocean.jpg" alt="Gallery image" width={500} height={200} />
                    </figure>
                </li>
                <li className="gallery-item">
                    <figure className="gallery-image">
                    <Image src="/travellers/skies.jpg" alt="Gallery image" width={500} height={200} />
                    </figure>
                </li>
                </ul>
            </div>
            </section>
    )
}