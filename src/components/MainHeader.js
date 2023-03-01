// import { NavLink } from 'react-router-dom';
import '../App.css';

import { Welcome } from '../pages/Welcome';

export function MainHeader() {
  return (
    <header className="masthead">
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" >Hi there, I'm Tam!</a>         
          <div className="navbar-collapse">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              {/* <li className="nav-item">
                <NavLink className="navbar-brand" to='/about'>
                About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/exp">
                Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/projects">
                Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/contact">
                Contact
                </NavLink>
              </li> */}
              <li className="nav-item"><a className="navbar-brand" href="#about">About</a></li>
              <li className="nav-item"><a className="navbar-brand" href="#exp">Experience</a></li>
              <li className="nav-item"><a className="navbar-brand" href="#project">Projects</a></li>
              <li className="nav-item"><a className="navbar-brand" href="#project">Skills</a></li>
              <li className="nav-item"><a className="navbar-brand" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <Welcome />
    </header>
  );
}