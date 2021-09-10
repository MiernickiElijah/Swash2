import './style.css'

function Nav () {
    return ( <nav id="navbar">
    <ul id="navs">
        <li className="hide delay1 tab active" id="fast"><a href="/">Home</a></li>
        <li className="hide delay2 tab" id="fast"><a href="/bio">BIO</a></li>
        <li className="hide delay3 tab" id="fast"><a href="/projects">PROJECTS</a></li>
        <li className="hide delay4 tab" id="fast"><a href="/contact">CONTACT</a></li>
        <li className="hide delay5 tab" id="fast"><a href="/services">SERVICES</a></li>
    </ul>
</nav>)
}

export default Nav; 