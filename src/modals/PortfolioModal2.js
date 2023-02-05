import { Link } from 'react-router-dom';
import '../App.css';
import citi from '../img/cachedImage.jpg';

export function Modal2() {
  return (
    <div className="modal-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="modal-body text-center">
              {/* <!-- Project details--> */}
              <h2 className="text-uppercase">Citi Internship</h2>
              <p className="item-intro text-muted">Summer Internship 2021</p>
              <img className="d-block mx-auto" width="450" height="350" src={ citi } alt="..." />
              <h3 className="h4 mb-4 mt-5">Responsibilities</h3>
              <ul className="list-inline-item">
                <li>
                  Supported to build a Serverless Web App called Developer Hub with AWS DynamoDB, AWS Lambda, API Gateway, and AWS S3.
                </li>
                <li>
                  Integrated Citi’s internal APIs with API Management (APIM) to Developer Hub for utilization of the full potential of the APIs.
                </li>
                <li>
                  Follow test driven development (TDD), achieved more than ~80% code coverage writing with Junit for each Java function.
                </li>
              </ul>
              <Link to="/">
                <button className="btn btn-success btn-l text-uppercase mt-5" type="button">
                  Close Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}