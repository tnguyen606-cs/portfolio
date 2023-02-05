import { Link } from 'react-router-dom';
import '../App.css';
import adobe from '../img/adobe.jpg';

export function Modal1() {
  return (
    <div className="modal-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="modal-body text-center">
                {/* <!-- Project details--> */}
              <h2 className="text-uppercase">Adobe Internship</h2>
              <p className="item-intro text-muted">Summer Internship 2022</p>
              <img className="d-block mx-auto" width="250" height="350" src={ adobe } alt="..." />
              <h3 className="h4 mb-4 mt-5">Responsibilities</h3>
              <ul className="list-inline-item mb-4">
                <li>
                  Programmed in JavaScript, TypeScript, HTML, CSS.
                </li>
                <li>
                  Implemented UI features for web application. Developed unit tests for each feature implemented using Jest framework.
                </li>
                <li>
                  Produced 'clean' code to prevent possible bugs, regression, and keep the code readable for other developers.
                </li>
                <li>
                Participated in daily standup as part of the Agile workflow and delivered solutions on time by practicing continuous collaboration, communication, automation, and integration.
                </li>
              </ul>
              <Link className="col-r" to="/">
                <button className="btn btn-success btn-l text-uppercase mt-6" type="button">
                Close Project
                </button>
              </Link>
              <a href="https://tnguyen606-cs.github.io/adobe-react-2022/" 
                target="_blank"
                rel="noopener noreferrer"
                className="col-r">
                <button className="btn btn-primary btn-l text-uppercase mt-6" type="button">
                  Project Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}