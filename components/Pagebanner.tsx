interface PagebannerProps{
    header : string,
    body: string
}
export default function Pagebanner({header, body}: PagebannerProps){
    return(
        <section className="ctaTop relative flex items-center justify-center mt-20 bg-gradient-to-r from-[#29AB87] to-[#ffc15c]">
            <img
                src="/backgroundimages.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="container z-10">
                <div className="cta-content text-center text-white">
                <h3 className="h2 section-title">{header}</h3>
                <p className="section-text">{body}</p>
                </div>
            </div>
    </section>
    )
}