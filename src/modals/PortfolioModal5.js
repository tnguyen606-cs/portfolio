import { Link } from 'react-router-dom';
import '../App.css';

export function Modal5() {
  return (
    <div className="modal-dialog">
      <div className="container">
        <div className="col-lg-12">
          <div className="modal-body text-center">
            <h2 className="text-uppercase">Travel Plan</h2>
            <p className="item-intro text-muted">Self project</p>
            <h3 className="h4 mb-4 mt-5">Introduction</h3>
            <p>Through the power of ChatGPT AI, built a serverless application that helps users create detailed itineraries based on location, trip length, and interests.</p>
            <h3 className="h4 mb-4 mt-5">How to build this app?</h3>
            <ul className="list-inline-item">
              <li>
                  The app connects to OpenAI API and deployed as Azure functions.
              </li>
              <li>
                  Automated API tests with Postman.
              </li>
              <li>
                  Linked Open API to Bubble.io for front-end.
              </li>
              <li>
                  Wrote main code in Python. 
              </li>
            </ul>
            <Link to="/">
                <button className="btn btn-success btn-l text-uppercase mt-5" type="button">
                Close Project
                </button>
            </Link>
            <a href="https://github.com/tnguyen606-cs/ChatGPT_TravelPlan" 
              target="_blank"
              rel="noopener noreferrer"
              className="col-r">
              <button className="btn btn-primary btn-l text-uppercase mt-5" type="button">
                Project Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}