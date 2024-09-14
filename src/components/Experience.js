import { FaCloudversify } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { RiSpaceShipFill } from "react-icons/ri";
import '../App.css';

export function Experience() {
  return (
    <section className="page-section bg-light" id="experience">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center font-weight-bold">EXPERIENCE</h2>
        <hr className="divider" />
        <div className="row justify-content-center">
          <div className="col-md-3 text-center">
            <div className="mt-5">
              <div className="mb-2"><RiSpaceShipFill className="fs-1 text-primary"/></div>    
              <div>
                <a id="altamiraTech">
                  <button className="btn-text h4 mb-2">Altamira Tech. - Sofware Engineer</button>
                </a>
              </div>      
              <p className="text-black-85 mb-4">June 2023 - Present</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="mt-5">
              <div className="mb-2"><SiAdobe className="fs-1 text-primary"/></div>    
              <div>
                <a href="https://tnguyen606-cs.github.io/adobe-react-2022/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  id="adobe">
                  <button className="btn-text h4 mb-2">Adobe - Frontend Engineer Intern</button>
                </a>
              </div>      
              <p className="text-black-85 mb-4">Summer Internship 2022</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="mt-5">
              <div className="mb-2"><FaCloudversify className="fs-1 text-primary"/></div>    
              <div>
                <a id="citiGroup">
                  <button className="btn-text h4 mb-2">Citi Group - Software Developer Intern</button>
                </a>
              </div>      
              <p className="text-black-85 mb-4">Summer Internship 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>   
  );
}