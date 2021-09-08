function Home () {
    return(
        <main class="page">
        {/* <!--VIDEO BACKGROUND--> */}
        <div class="overlay"></div>
        <video id="vid" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="./assets/Images_Videos/Cube.mp4" type="video/mp4"></source>
        </video>

        {/* <!--HEADER--> */}
        <header id="centerAll">
            <section
                class="container-fluid h-100 d-flex justify-content-center home animate__animated animate__fadeIn animate__slow">
                <div class="d-flex h-100 text-center align-items-center main">
                    <div class="w-100">
                        <img id="logo" src="./assets/Images_Videos/logo.png" alt=""></img>
                        <button type="button" class="btn" id="explore"><span id="animate"
                                data-text="Explore...">Explore</span></button>
                    </div>
                </div>
            </section>
        </header>
    </main>
    )
}

export default Home; 