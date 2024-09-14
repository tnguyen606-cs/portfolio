import '../App.css';
import { Welcome } from './Welcome';

export function MainHeader() {
  const myResumeUrl = 'https://drive.google.com/file/d/1_BdUnuFR9ZiTibhXlg3fIvzEAdP_j0p0/view?usp=sharing';
  
  // Add the scrolling event to update the nav's bar background when scrolling through the page
  window.addEventListener('scroll', function() {
    const mainNav = document.getElementById('mainNav');
    
    if (window.scrollY > 500) {
      mainNav.classList.add('navbar-shrink');
    } else {
      mainNav.classList.remove('navbar-shrink');
    }
  });
  
  return (
    <header className="masthead" id="mainHeader">
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="/#">Hello World, I'm Tam!</a>         
          <div className="navbar-collapse">
            {/* <!-- Margin Nav to the Right--> */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-uppercase" href={myResumeUrl} target="_blank" rel="noopener noreferrer">my resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/#aboutMe">about me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/#experience">experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/#projects">projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/#contactMe">contact me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Welcome />
    </header>
  );
}