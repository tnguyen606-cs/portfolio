import './App.css';

import { MainHeader } from './components/MainHeader';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Thankyou } from './pages/TY';

function App() {
  return (
    <div className="App" id="page-top">
      <MainHeader />
      <main>
        <About id="about"/>
        <Experience id="exp"/>
        <Projects id="project"/>
        <Thankyou />
        <Contact id="contact"/>
      </main>
      {/* <!-- Footer--> */}
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">&copy; 2022 tnguyen606-cs.github.io</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

