import Popup from 'reactjs-popup';
import '../App.css';
import citi from '../img/cachedImage.jpg';

export function Modal2() {
  return (
    <Popup trigger={<button className="btn-text h4 mb-2"> Citigroup - Software Development Intern </button>} 
    modal
    nested >
      {close => (
      <div className="modal-popup">
        <button className="close" onClick={close}>&times;</button>
        <div className="header">
          <h2 className="text-uppercase">Citi Internship</h2>
          <p className="item-intro text-muted">Summer Internship 2021</p>
        </div>
        <div className="content">
          <img className="d-block mx-auto" width="180" height="200" src={ citi } alt="..." />
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="list-inline-item mt-4 mb-5">
              Worked as a DevOps engineer at Citi. At Citi, I was part of the Devops team helped to build the Developer Portal - A single global platform in which Citi exposes APIs to 3rd parties, who can contract with us and become Partners, to have their applications registered in the production environment of our developer hub. With proper authorization depending on the API types and nature of the application, Partners are able to connect and access data directly from Citibank. 
              <li className='fst-italic'>
                Technical Exposure: AWS S3, DynamoDB, Lambda, API Gateway, Java, JUnit, SpringBoot Framework, Mockito.
              </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="page-modal-actions text-center">
          <button className="btn btn-success btn-l text-uppercase" type="button" 
            onClick={() => {close();}}>
          Close
          </button>
          <a href="https://sandbox.developerhub.citi.com/us/home" 
            target="_blank"
            rel="noopener noreferrer"
            className="col-r">
            <button className="btn btn-primary btn-l text-uppercase" type="button">
              Learn more
            </button>
          </a>
        </div>
      </div>
    )}
    </Popup>
  );
}