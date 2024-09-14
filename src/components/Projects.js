import { FaAndroid, FaMoneyCheck } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import '../App.css';

export function Projects() {
  return (
    <section className="page-section" id="projects">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center font-weight-bold text-uppercase">projects</h2>
        <hr className="divider" />
        <div className="row justify-content-center">
          <div className="col-md-3 text-center">
            <div className="mt-5">
              <div className="mb-2"><FaMoneyCheck className="fs-1 text-primary"/></div>    
              <div>
                <a href="https://github.com/tnguyen606-cs/AI-ExpenseApp" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-text h4 mb-2">AI Expense Tracker</button>
                </a>
              </div>      
              <p className="text-black-85 mb-4">Web App</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="mt-5">
              <div className="mb-2"><FaAndroid className="fs-1 text-primary"/></div>    
              <div>
                <a href="https://github.com/tnguyen606-cs/myDACO" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-text h4 mb-2">DACO Airfield Management</button>
                </a>
              </div>      
              <p className="text-black-85 mb-4">Android App</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="mt-5">
              <div className="mb-2"><SiOpenai className="fs-1 text-primary"/></div>    
              <div>
                <a href="https://github.com/tnguyen606-cs/ChatGPT_TravelPlan" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-text h4 mb-2">Travel Plan</button>
                </a>
              </div>      
              <p className="text-black-85 mb-4">Serverless Web App</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}