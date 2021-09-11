import Dots from './biomovie.mp4'
import Self from './Self.jfif'

import './style.css'

function Bio() {
    return (
        <>
            <div className="overlay"></div>
            <video id="vid" playsInline autoPlay muted loop>
                <source src={Dots} type="video/mp4"></source>
            </video>

            <main className="animate__animated animate__fadeInLeft container col-xxl-8 px-4 py-5">
                {/* <!--Biography section with picture--> */}
                <section className="aboutme row flex-lg-row-reverse align-items-center g-5 py-5">

                    <article className="col-lg-6" id="bio">
                        <h1 id="aboutMeTitle">About Me</h1>
                        <p className="lead">
                            Business Intelligence Professional and Full Stack Developer with over 11 years of experience in
                            customer service
                            and sales. Creative
                            problem solver with a proven history of using technical innovations to simplify daily operations,
                            while
                            delivering high quality customer service and sales. Strong entrepreneurial mindset with a Bachelor’s
                            in Business
                            Management Administration, and a Master’s in Exercise Science/Kinesiology. Adaptable individual with
                            strong
                            technical aptitude, passionate about learning additional computer science and project management
                            skills.
                            Currently earning a certificate in Full Stack development through the University of Minnesota.
                        </p>
                    </article>
                    <article className="col-10 col-sm-8 col-lg-6">
                        <img className="d-block mx-lg-auto img-fluid" src={Self} alt='me'></img>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Bio;