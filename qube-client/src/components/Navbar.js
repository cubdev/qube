import React from 'react';

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="navbar-left">
          <ul className="navbar-links">
            <li className="navbar-link-item navbar-logo">
              <a className="navbar-link" href="/">
                <span>DryRun</span>
              </a>
            </li>
            <li className="navbar-link-item">
              <a className="navbar-link" href="/practice">
                <span>Practice</span>
              </a>
            </li>
            <li className="navbar-link-item">
              <a className="navbar-link" href="/">
                <span>Compete</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <a
            className="navbar-btn btn btn-primary bold"
            href="/login"
          >Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
