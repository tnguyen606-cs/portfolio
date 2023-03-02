import Popup from 'reactjs-popup';
import '../App.css';

export function Modal4() {
  return (
    <Popup trigger={<button className="btn-text h4 mb-2"> Travel Plan </button>} 
    modal
    nested >
      {close => (
      <div className="modal-popup">
        <button className="close" onClick={close}>&times;</button>
        <div className="header">
          <h2 className="text-uppercase">Travel Plan with ChatGPT</h2>
          <p className="item-intro text-muted">Self project</p>
        </div>
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
            <ul className="list-inline-item mb-5">
              <h3 className="h4 mb-4 mt-5">Introduction</h3>
              <p>Through the power of ChatGPT AI, built a serverless application that helps users create detailed itineraries based on location, trip length, and interests.</p>
              <h3 className="h4 mb-4 mt-5">How to build this app?</h3>
              <li>
                  The app connects to OpenAI API and is deployed using Azure functions.
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
            </div>
          </div>
        </div>
        <div className="page-modal-actions text-center">
          <button className="btn btn-success btn-l text-uppercase" type="button" 
            onClick={() => {close();}}>
          Close
          </button>
          <a href="https://github.com/tnguyen606-cs/ChatGPT_TravelPlan" 
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