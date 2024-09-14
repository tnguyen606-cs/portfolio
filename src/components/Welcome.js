import '../App.css';

export function Welcome() {
  return (
    <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold text-uppercase">welcome to my life</h1>
            <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
            <a className="btn btn-primary btn-xl text-uppercase" href="#aboutMe">aboutme</a>
            </div>
        </div>
    </div>
  );
}