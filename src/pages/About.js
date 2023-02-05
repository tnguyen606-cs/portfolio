import '../App.css';

export function About() {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white font-weight-bold">ABOUT ME</h2>
            <hr className="divider" />
            <p className="text-white-85 mb-4">I'm a senior Computer Science student at Georgia Tech.</p>
            {/* <Link className="btn btn-primary btn-xl" to="/exp">Learn more</Link> */}
            <a className="btn btn-primary btn-xl" href="#exp">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}