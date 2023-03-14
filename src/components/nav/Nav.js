import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { NavLink, Link } from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Huy Web
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/covid19" activeclassname="active" className="nav-link">
                  Covid19 API
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/todoapp" activeclassname="active" className="nav-link">
                  Todo App
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/countdownclock" activeclassname="active" className="nav-link">
                  Count Down Clock
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" activeclassname="active" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/youtube" activeclassname="active" className="nav-link">
                  Youtube API
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
