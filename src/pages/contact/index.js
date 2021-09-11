import Dots from './biomovie.mp4'
import Head from './Head.mp4'
import resume from './resume.pdf'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faPhone, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <main className="page">
            <div className="overlay"></div>
            <video id="vid" playsInline autoPlay muted loop>
                <source src={Dots} type="video/mp4"></source>
            </video>

            <div className="d-flex flex-column flex-shrink-0 bg">
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center" id="contactlist">

                    <a className="contactLink aL" href="mailto:miernickielijah@gmail.com">
                        <FontAwesomeIcon class='icon' icon={faInbox} /><strong>Miernickielijah@gmail.com</strong></a>

                    <a className="contactLink aL" href="https://github.com/MiernickiElijah" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon class='icon' icon={faGithub} />
                        <strong>github.com/MiernickiElijah</strong></a>

                    <a className="contactLink aL" href=" https://www.linkedin.com/in/miernickielijah/" target="_blank">
                        <FontAwesomeIcon class='icon' icon={faLinkedin} />
                        <strong>linkedIn.com/in/miernickielijah</strong></a>

                    <a className="contactLink aL" href=" tel:7634129985">
                        <FontAwesomeIcon class='icon' icon={faPhone} />
                        <strong>763-412-9985</strong></a>

                    <a className="contactLink aL" href={resume} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon class='icon' icon={faFilePdf} />
                        Resume</a>
                </ul>
            </div>

            <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="emailModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="emailModalLabel">Scanned my head and messed around with Blender! You know...because why not.</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="myInput">
                            <iframe title="unique" src={Head} width="397" height="480" frameBorder="0" autoPlay="autoplay"
                                className="giphy-embed" allowFullScreen></iframe>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Contact;