import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

function NavBar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [scrolledBeyondThreshold, setScrolledBeyondThreshold] = useState(false);

  const handleScroll = debounce(() => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      // scrolling down
      setNavbarVisible(false);
    } else {
      // scrolling up
      setNavbarVisible(true);
    }
    setLastScrollTop(currentScrollTop);
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleScrollThreshold = () => {
      const threshold = window.innerHeight * 0.75;
      setScrolledBeyondThreshold(window.pageYOffset > threshold);
    };
    window.addEventListener('scroll', handleScrollThreshold);
    return () => {
      window.removeEventListener('scroll', handleScrollThreshold);
    };
  }, []);

  let navbarClasses = 'navbar navbar-expand-lg fixed-top navbar-scroll';
  if (!navbarVisible) {
    navbarClasses += ' navbar-hidden';
  }
  if (scrolledBeyondThreshold) {
    navbarClasses += ' navbar-scrolled';
  }

  let linkClasses = 'nav-link';
  if (scrolledBeyondThreshold) {
    linkClasses += ' text-secondary';
  }

  return (
    <>
    <nav className={navbarClasses}>
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Navbar brand */}
      <a className="navbar-brand" href="#!">
        Brand
      </a>
      {/* Toggle button */}
      <button
        className='navbar-toggler'
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Link */}
          <li className="5nav-item">
            <a className="nav-link" href="#!">
              Link
            </a>
          </li>
          {/* Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="!"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#!">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
        {/* Icons */}
        <ul className="navbar-nav d-flex flex-row me-1">
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fas fa-shopping-cart" />
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
        {/* Search */}
        <form className="w-auto">
          <input
            type="search"
            className="form-control"
            placeholder="Type query"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  );
}

export default NavBar;
