import { Link } from 'react-router-dom';
import '../App.css';

export function Modal4() {
  return (
    <div className="modal-dialog">
      <div className="container">
        <div className="col-lg-12">
          <h2 className="text-uppercase">AI Expense Tracker App</h2>
          <p className="item-intro text-muted">Self project, Present</p>
          <h3 className="h4 mb-4 mt-5">Introduction</h3>
          <p>An awesome AI-powered expense-saving app to jumpstart that helps users in saving little by little for personal goals by tracking users daily expenses and send summary alerts via SMS message.</p>
          <h3 className="h4 mb-4 mt-5">How to build this app?</h3>
          <ul className="list-inline-item">
              <li>
                Use AI and Machine Learning algorithm (SVM) to answer users’ questions and predict the money flow.
              </li>
              <li>
                Display categories through visible charts that give users a detailed view
              </li>
              <li>
                Use SSO and Google two-factor Authenticator in Python to make users secured authentication. 
              </li>
              <li>
                Build a tool to send daily summary alerts via SMS using Python and Twilio API.
              </li>
              <li>
                Utilize: Python, Flask, PostgreSQL, HTML, CSS, Matplotlib, Twilio API, Heroku, AWS S3.
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
  );
}