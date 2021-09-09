import './style.css'

function Nav () {

    return ( <nav id="navbar">
    <ul id="navs">
        <li className="hide delay1 tab active" id="fast"><a href="../Swashbuckler/index.html">HOME</a></li>
        <li className="hide delay2 tab" id="fast"><a href="../Swashbuckler/bio.html">BIO</a></li>
        <li className="hide delay3 tab" id="fast"><a href="../Swashbuckler/projects.html">PROJECTS</a></li>
        <li className="hide delay4 tab" id="fast"><a href="../Swashbuckler/contact.html">CONTACT</a></li>
        <li className="hide delay5 tab" id="fast"><a href="../Swashbuckler/services.html">SERVICES</a></li>
    </ul>
</nav>)

}

export default Nav; 