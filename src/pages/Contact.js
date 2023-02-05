import '../App.css';

export function Contact() {
  return (
    <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <h2 className="mt-0">CONTACT</h2>
              <hr className="divider" />
              <i className="bi-envelope fs-2 mb-3 text-muted"></i>
              <div>tamhongnguyen606@gmail.com</div>
              <i className="bi-phone fs-2 mb-3 text-muted"></i>
              <div>+1 (404) 883-7474</div>
              <a className="Linkedin-link"
                href="https://www.linkedin.com/in/hongtam-nguyen/"
                target="_blank"
                rel="noopener noreferrer"><strong>Linkedln</strong>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}