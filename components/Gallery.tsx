import Image from "next/image";
export default function Gallery () {
    return (
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
    )
}