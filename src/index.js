// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Modal1 } from "./modals/PortfolioModal1";
import { Modal2 } from "./modals/PortfolioModal2";
import { Modal3 } from "./modals/PortfolioModal3";
import { Modal4 } from "./modals/PortfolioModal4";
import { Modal5 } from "./modals/PortfolioModal5";
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
      {/* <Route path="/exp/AdobeInternship" element={<Modal1 />} /> */}
      <Route path="/CitiInternship" element={<Modal2 />} />
      <Route path="/DacoApp" element={<Modal3 />} />
      <Route path="/ExpenseApp" element={<Modal4 />} />
      <Route path="/ChatGPT" element={<Modal5 />} />
      <Route path='/about' element={<About />} />
      <Route path='/exp' element={<Experience />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
// reportWebVitals();
