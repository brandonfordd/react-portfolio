import React from 'react';
import '../styles/Header.css';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg p-background-color">
        <a 
          className="navbar-brand p-font-color nav-brand-custom swing linear-wipe" 
          href="/"> Brandon Ford's Portfolio
        </a>
        {/* <button 
          className="navbar-toggler custom-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span
           className="navbar-toggler-icon">
          </span>
        </button> */}
        <div className=" navbar-collapse custom-toggler" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === 'About' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc'}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Projects' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc'}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc'}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Resume' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
