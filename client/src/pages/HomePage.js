import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/assets/images/favicons/favicon-32x32.png" alt="logo" />
          </Link>
        <p className="job-genie">Job <span className="genie">Genie</span></p>
        </div>
        <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/JobSearch">Jobs</Link></li>
          <li><Link to="/AboutPage">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login" className="myBtn">Login</Link></li>
        </ul>
      </nav>

      <video autoPlay muted loop id="myVideo">
        <source src="/assets/videos/bg.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <div className="card w-25">
          <img src="/assets/images/logo/logo.jpg" alt="logo" />
          <hr />
          <div className="card-body" style={{ marginTop: "-60px" }}>
            <h5 className="card-title">Indias No #1 Carrer Platform</h5>
            <p className="card-text">
              Search and manage your jobs with ease. free and open source job
              portal application
            </p>
            <div className="d-flex justify-content-between mt-5">
              <p>
                Not a user Register <Link to="/register">Here !</Link>{" "}
              </p>
              <p>
                <Link to="/login" className="myBtn">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
