import '../App.css';

export function About() {
  return (
    <section className="page-section" id="aboutMe">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-black font-weight-bold">ABOUT ME</h2>
            <hr className="divider" />
            <p className="text-black-85 mb-4"> 
              I'm a software engineer, graduating from Georgia Tech University with a major in Computer Science.
            </p>
            <p className="text-black-85 mb-4"> 
              With experience in developing full-stack web applications, I have a strong background in 
              Java, JavaScript, TypeScript, HTML/CSS, Amazon Web Services (AWS), RESTful API and much more.
            </p>
            <a className="btn btn-primary btn-xl" href="#experience">Learn more about me</a>
          </div>
        </div>
      </div>
    </section>
  );
}