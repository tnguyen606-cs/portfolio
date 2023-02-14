import { Link } from 'react-router-dom';
import { FaAndroid, FaMoneyCheck } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import '../App.css';

export function Projects() {
  return (
    <section className="page-section" id="project">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center font-weight-bold">PROJECTS</h2>
        <hr className="divider" />
        <div className="row-pj gx-lg-5">
        <div className="col-lg-3 text-center">
            <div className="mt-5">
            <div className="mb-2"><FaAndroid className="fs-1 text-primary" /></div>
            <Link to="/DacoApp">
                <h3 className="h4 mb-2">DACO App</h3>
            </Link>
            <p className="text-muted mb-0">An Android mobile application</p>
            </div>
        </div>
        <div className="col-lg-3 text-center">
            <div className="mt-5">
            <div className="mb-2"><SiOpenai className="fs-1 text-primary" /></div>
            <Link to="/ChatGPT">
                <h3 className="h4 mb-2">Travel Plan</h3>
            </Link>
            <p className="text-muted mb-0">A serverless application with OpenAi and ChatGPT</p>
            </div>
        </div>
        <div className="col-lg-3 text-center">
          <div className="mt-5">
            <div className="mb-2"><FaMoneyCheck className="fs-1 text-primary" /></div>
            <Link to="/ExpenseApp">
                <h3 className="h4 mb-2">AI Expense Tracker</h3>
            </Link>
            <p className="text-muted mb-0">An application helps users track expenses using AI and ML concepts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}