import Cube from './Cube.mp4'
import Logo from './logo.png'
import './style.css'

function Home () {
    return(
        <main className="page">
        <div className="overlay"></div>
        <video id="vid" playsInline autoPlay muted loop>
            <source src= {Cube} type="video/mp4"></source>
        </video>

        <header id="centerAll">
            <section
                className="container-fluid h-100 d-flex justify-content-center home animate__animated animate__fadeIn animate__slow">
                <div className="d-flex h-100 text-center align-items-center main">
                    <div className="w-100">
                        <img id="logo" src={Logo} alt=""></img>
                        <button type="button" className="btn" id="explore"><span id="animate"
                                data-text="Explore...">Explore</span></button>
                    </div>
                </div>
            </section>
        </header>
    </main>
    )
}

export default Home; 