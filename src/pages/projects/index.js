/* eslint-disable jsx-a11y/anchor-has-content */
import Dots from './biomovie.mp4'
import './style.css'
import dice from './dice.jpg'
import magic from './magic.jpg'
import poggers from './poggers.jpg'
import focus from './focus.jpg'
import storm from './storm.jpg'

function Projects() {
    return (
        <>
            <div className="overlay"></div><video id="vid" playsInline autoPlay muted loop>
                <source src={Dots} type="video/mp4"></source>
            </video>

            <main className="animate__animated animate__fadeInLeft">
                {/* <!--PROJECTS--> */}
                <div className="page" data-page="3">
                    <section id="deck">
                        {/* <!--P4--> */}
                        <article className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div className="col-lg-6">
                                    <h1 className="display-5 fw-bold lh-1 mb-3"><a className="projectHead"
                                        href="https://poggers-pog.herokuapp.com/login" target="_blank" rel="noreferrer"></a>Poggers</h1>
                                    <p className="lead">This application provides a helping hand for the ultimate gamer to keep track of the current tasks he or she needs to complete in his or her game. Sometimes a gamer will take a break from a game and go back months later. This application will help the gamer remember exactly where he or she left off and what needs to be completed next.(HTML, CSS, JS, bootstrap, Moment/luxon, node.js, SQL, express, node-mailer, sequilize) <a
                                        href="https://github.com/MiernickiElijah/poggers" target="_blank" rel="noreferrer">REPO</a>
                                    </p>
                                </div>
                                <div className="col-10 col-sm-8 col-lg-6">
                                    <a href="https://poggers-pog.herokuapp.com/login" target="_blank" rel="noreferrer">
                                        <img className="d-block mx-lg-auto img-fluid pics"
                                            src={poggers} alt=""></img></a>
                                    <figcaption>Photo by Johannes Ludwig on Unsplash</figcaption>
                                </div>
                            </div>
                        </article>

                        {/* <!--P1--> */}
                        <article className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div className="col-10 col-sm-8 col-lg-6">
                                    <a href="https://miernickielijah.github.io/Skulduggery/" target="_blank" rel="noreferrer">
                                        <img className="d-block mx-lg-auto img-fluid pics"
                                            src={dice} alt="dice"></img>
                                    </a>
                                    <figcaption>photo by Alperen Yazgi on Unsplash</figcaption>
                                </div>
                                <div className="col-lg-6">
                                    <h1 className="display-5 fw-bold lh-1 mb-3"><a className="projectHead"
                                        href="https://miernickielijah.github.io/Skulduggery/" target="_blank" rel="noreferrer"></a>Skulduggery</h1>
                                    <p className="lead">This is a random character generator for 5th edition dungeons and
                                        dragons.
                                        (HTML,
                                        APIs, CSS, vanilla
                                        JS, jQuery, Bulma framework) Utilizing Agile and Kanban methodologies, our group was
                                        able to
                                        finish this project
                                        in under 2 weeks. <a href="https://github.com/MiernickiElijah/Skulduggery"
                                            target="_blank" rel="noreferrer">REPO</a>
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* <!--P2--> */}
                        <article className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div className="col-lg-6">
                                    <h1 className="display-5 fw-bold lh-1 mb-3"><a className="projectHead"
                                        href="https://miernickielijah.github.io/Druid/" target="_blank" rel="noreferrer"></a>Druid</h1>
                                    <p className="lead">This is a live weather dashboard with current and 5 day forecast based on US
                                        city.
                                        (HTML, CSS, HTML,
                                        jQuery, bootstrap, APIs) <a href="https://github.com/MiernickiElijah/Druid"
                                            target="_blank" rel="noreferrer">REPO</a>
                                    </p>
                                </div>
                                <div className="col-10 col-sm-8 col-lg-6">
                                    <a href="https://miernickielijah.github.io/Druid/" target="_blank" rel="noreferrer">
                                        <img className="d-block mx-lg-auto img-fluid pics"
                                            src={storm} alt="storm"></img>
                                    </a>
                                    <figcaption>photo by Johannes Plenio on Unsplash</figcaption>
                                </div>
                            </div>
                        </article>

                        {/* <!--P3--> */}
                        <article className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div className="col-10 col-sm-8 col-lg-6">
                                    <a href="https://github.com/MiernickiElijah/Arcane" target="_blank" rel="noreferrer">
                                        <img className="d-block mx-lg-auto img-fluid pics"
                                            src={magic} alt="holding moon"></img>
                                    </a>
                                    <figcaption>photo by Jasper Benning on Unsplash</figcaption>
                                </div>
                                <div className="col-lg-6">
                                    <h1 className="display-5 fw-bold lh-1 mb-3"><a className="projectHead"
                                        href="https://github.com/MiernickiElijah/Arcane" target="_blank" rel="noreferrer"></a>Arcane(REPO)</h1>
                                    <p className="lead">This is a README.md generator using node.js. Allowing a user to create an entire
                                        professional README file via command line.
                                        (Node.js, JS, jQuery, HTML, markdown)
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* <!--P4--> */}
                        <article className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div className="col-lg-6">
                                    <h1 className="display-5 fw-bold lh-1 mb-3"><a className="projectHead"
                                        href="https://miernickielijah.github.io/barbarian/" target="_blank" rel="noreferrer"></a>Barbarian</h1>
                                    <p className="lead">This is a day scheduler that allows users to save written notes via time to
                                        their
                                        local computer and
                                        track the passing of time.(HTML, CSS, JS, bootstrap, Moment/luxon) <a
                                            href="https://github.com/MiernickiElijah/barbarian" target="_blank" rel="noreferrer">REPO</a>
                                    </p>
                                </div>
                                <div className="col-10 col-sm-8 col-lg-6">
                                    <a href="https://miernickielijah.github.io/barbarian/" target="_blank" rel="noreferrer">
                                        <img className="d-block mx-lg-auto img-fluid pics"
                                            src={focus} alt="storm"></img>
                                    </a>
                                    <figcaption>photo by Paul Skorupskas on Unsplash</figcaption>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <footer id="footer">
                    <a href="#top">Take me to the TOP!</a>
                </footer>
            </main>
        </>
    )
}

export default Projects;