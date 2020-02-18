import React from 'react';
import { Link } from 'react-router-dom';

function Template({ children }) {
  return (
    <div>
      <nav className="navbar is-light">
        <ul className="navbar-brand">
          <li className="navbar-item">
            <Link to="/">React Flux Introduction</Link>
          </li>
        </ul>
        <ul className="navbar-start">
          <li className="navbar-item">
            <Link to="/flux">Flux</Link>
          </li>
          <li className="navbar-item">
            <Link to="/redux">Redux</Link>
          </li>
          <li className="navbar-item">
            <Link to="/mobx">Mobx</Link>
          </li>
        </ul>
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="https://github.com/studiojms/react-flux">
              <button type="button" className="button is-primary">
                Github
              </button>
            </a>
          </div>
        </div>
      </nav>
      <div className="section">{children}</div>
    </div>
  );
}

export default Template;
