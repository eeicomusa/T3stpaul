interface PagebannerProps{
    header : string,
    body: string
}
export default function Pagebanner({header, body}: PagebannerProps){
    return(
         <section className="cta mt-20" id="contact">
                <div className="container">
                    <div className="cta-content">
                    <h3 className="h2 section-title">
                        {header}
                    </h3>
                    <p className="section-text">
                       {body}
                    </p>
                    </div>
                </div>
        </section>
    )
}