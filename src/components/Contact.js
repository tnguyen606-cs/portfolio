import '../App.css';
import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';

export function Contact() {
  return (
    <section className="page-section bg-light" id="contactMe">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center font-weight-bold text-uppercase">Let's Connect</h2>
          <hr className="divider" />
          <div className="row">
            <div className="d-flex justify-content-center mt-5">
              <div className="mx-3 text-center">
                <a href="mailto:nguyenhongtri11@gmail.com">
                  <FaGoogle className="fs-2 text-primary"/>
                </a>  
              </div>
              <div className="mx-3 text-center">
                <a href="https://www.linkedin.com/in/hongtam-nguyen/" 
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedin className="fs-2 text-primary"/>
                </a>  
              </div>
              <div className="mx-3 text-center"> 
                <a href="https://github.com/tnguyen606-cs" 
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub className="fs-2 text-primary"/>
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}