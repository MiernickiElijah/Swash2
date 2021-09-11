import './style.css'

function Nav () {
    return ( <nav id="navbar">
    <ul id="navs">
        <li className="hide  tab active" id="fast"><a href="/">Home</a></li>
        <li className="hide  tab" id="fast"><a href="/bio">BIO</a></li>
        <li className="hide  tab" id="fast"><a href="/projects">PROJECTS</a></li>
        <li className="hide  tab" id="fast"><a href="/contact">CONTACT</a></li>
    </ul>
</nav>)
}

export default Nav; 