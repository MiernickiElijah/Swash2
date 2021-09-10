import './style.css'

function Nav () {
    return ( <nav id="navbar">
    <ul id="navs">
        <li className="delay1 tab active" id="fast"><link></link></li>
        <li className="delay2 tab" id="fast"><a href="/bio">BIO</a></li>
        <li className="delay3 tab" id="fast"><a href="/projects">PROJECTS</a></li>
        <li className="delay4 tab" id="fast"><a href="/contact">CONTACT</a></li>
        <li className="delay5 tab" id="fast"><a href="/services">SERVICES</a></li>
    </ul>
</nav>)
}

export default Nav; 