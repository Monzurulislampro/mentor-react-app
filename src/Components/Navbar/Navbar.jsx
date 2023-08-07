import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <NavLink to="/">Mentor</NavLink>
          </h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <NavLink className="active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/trainers">Trainers</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>

              <li className="dropdown">
                <NavLink to="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/#">Drop Down 1</NavLink>
                  </li>
                  <li className="dropdown">
                    <NavLink to="/#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="#">Deep Drop Down 1</NavLink>
                      </li>
                      <li>
                        <NavLink to="/#">Deep Drop Down 2</NavLink>
                      </li>
                      <li>
                        <NavLink to="/#">Deep Drop Down 3</NavLink>
                      </li>
                      <li>
                        <NavLink to="/#">Deep Drop Down 4</NavLink>
                      </li>
                      <li>
                        <NavLink to="/#">Deep Drop Down 5</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/#">Drop Down 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="/#">Drop Down 3</NavLink>
                  </li>
                  <li>
                    <NavLink to="/#">Drop Down 4</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <NavLink to="/courses" className="get-started-btn">
            Get Started
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
