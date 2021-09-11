import { NavLink } from 'react-router-dom';
import './style.css';

function Nav() {
    return (<nav id="navbar">
        <ul id="navs">
            <NavLink to="/" exact activeClassName="active">
                <li className="hide tab" id="fast">Home</li>
            </NavLink>

            <NavLink to="/bio" activeClassName="active">
                <li className="hide tab" id="fast">BIO</li>
            </NavLink>

            <NavLink to="/projects" activeClassName="active">
                <li className="hide tab" id="fast">PROJECTS</li>
            </NavLink>

            <NavLink to="/contact" activeClassName="active">
                <li className="hide  tab" id="fast">CONTACT</li>
            </NavLink>
        </ul>
    </nav>);
};

export default Nav;