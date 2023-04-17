import Popup from 'reactjs-popup';
import '../App.css';

export function Modal5() {
  return (
    <Popup trigger={<button className="btn-text h4 mb-2"> AI Expense Tracker </button>} 
    modal
    nested >
      {close => (
      <div className="modal-popup">
        <button className="close" onClick={close}>&times;</button>
        <div className="header">
          <h2 className="text-uppercase">AI-powered Expense App</h2>
          <p className="item-intro text-muted">Self project</p>
        </div>
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="list-inline-item mb-5">
                <h3 className="h4 mb-4">Introduction</h3>
                <p>An awesome AI-powered expense-saving app to jumpstart that helps users in saving little by little for personal goals by tracking users daily expenses and send summary alerts via SMS message.</p>
                <h3 className="h4 mb-4 mt-5">How to build this app?</h3>
                <li>
                  Leveraged Machine Learning recommendation algorithms to analyze the said data and predict the money flow.
                </li>
                <li>
                  Display expenses/categories through visible charts that give users a detailed view.
                </li>
                <li>
                  Use SSO and Google two-factor Authenticator in Python to make users secured authentication. 
                </li>
                <li>
                  Use Python and Twilio API to send updated summary alerts via SMS.
                </li>
                <li>
                  Utilize: Python, Flask, SQLAlchemy, SQLite, PostgreSQL, Pandas, Numpy, Matplotlib, HTML, CSS, Twilio API, Heroku, AWS.
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
          <a href="https://github.com/tnguyen606-cs/AI-ExpenseApp" 
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