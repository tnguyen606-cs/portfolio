import './App.css';

import { MainHeader } from './components/MainHeader';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App" id="mainApp">
      <MainHeader />
      <main>
        <About id="aboutMe"/>
        <Experience id="experience"/>
        <Projects id="projects"/>
        <Contact id="contactMe"/>
      </main>
      {/* <!-- Footer--> */}
      <footer className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            Copyright &copy; 2022 tnguyen606-cs.github.io | Made by Tam Nguyen
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

