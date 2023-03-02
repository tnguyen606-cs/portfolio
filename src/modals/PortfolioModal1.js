import Popup from 'reactjs-popup';
import '../App.css';
import adobe from '../img/adobe.jpg';

export function Modal1() {
  return (
    <Popup trigger={<button className="btn-text h4 mb-2"> Adobe Inc. - Frontend Engineer Intern </button>} 
    modal
    nested >
      {close => (
      <div className="modal-popup">
        <button className="close" onClick={close}>&times;</button>
        <div className="header">
          <h2 className="text-uppercase">Adobe Internship</h2>
          <p className="item-intro text-muted">Summer Internship 2022</p>
        </div>
        <div className="content">
          <img className="d-block mx-auto" width="180" height="200" src={ adobe } alt="..." />
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="list-inline-item mt-4 mb-5">
                Worked as a front-end developer in the Marketo development team, a part of Adobe Digital Experience. During my time, I continuously practiced of producing HTML, CSS, and presentational TypeScript/JavaScript code to delivering intuitive and enjoyable user experiences on Marketo website. I produced 'clean' code and wrote unit tests to prevent possible bugs, ensure availability and high performance of features and keep the code readable for other developers.
                <li className='fst-italic'>
                Technical Exposure: JavaScript, TypeScript, HTML, CSS, React framework, Jest framework, Git, Jenkins.
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
          <a href="https://tnguyen606-cs.github.io/adobe-react-2022/" 
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