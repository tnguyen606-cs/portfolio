import { Link } from 'react-router-dom';
import '../App.css';

export function Modal4() {
  return (
    <div className="modal-dialog">
      <div className="container">
        <div className="col-lg-12">
          <h2 className="text-uppercase">Expense Tracker App</h2>
          <p className="item-intro text-muted">Self project, Present</p>
          <h3 className="h4 mb-4 mt-5">Introduction</h3>
          <p>A Django web app serving as an expense tracker that helps users track daily, weekly, and monthly expenses through pie charts.</p>
          <h3 className="h4 mb-4 mt-5">How to build this app?</h3>
          <ul className="list-inline-item">
              <li>
                Using React.js, React Hooks for having features of adding, removing, and updating the expenses.
              </li>
              <li>
                Build a tool to send daily summary alerts via SMS using Python, Plaid and Twilio.
              </li>
              <li>
                Deploy project on multiple hosting services: Heroku, AWS-S3.
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