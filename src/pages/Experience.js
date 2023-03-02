import { Link } from 'react-router-dom';
import { FaDesktop, FaCloudversify } from "react-icons/fa";
import { Modal1 } from "../modals/PortfolioModal1";
import '../App.css';

export function Experience() {
  // const [isOpen, setIsOpen] = useState(false);
 
  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // }
  return (
    <section className="page-section bg-light" id="exp">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center font-weight-bold">EXPERIENCE</h2>
        <hr className="divider" />
        <div className="row gx-lg-5">
        <div className="col-lg-6 col-md-3 text-center">
          <div className="mt-5">
            <div className="mb-2"><FaDesktop className="fs-1 text-primary"/></div>          
              {/* <button className="btn">Adobe Inc. - Frontend Engineer Intern</button>
            {/* <Modal1 to="/exp/AdobeInternship">
            </Modal1> */} 
            <Modal1></Modal1>
             <p className="text-muted mb-0">Create UI Features for Adobe Marketo Users</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 text-center">
          <div className="mt-5">
            <div className="mb-2"><FaCloudversify className="fs-1 text-primary" /></div>
            <Link to="/CitiInternship">
                <h3 className="h4 mb-2">Citigroup - Software Development Intern</h3>
            </Link>
            <p className="text-muted mb-0">Build Developer Hub Portal for Citi's APIs</p>
            </div>
          </div>
        </div>
      </div>
    </section>   
  );
}