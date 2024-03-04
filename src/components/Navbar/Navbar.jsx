import React from "react";
import PeepoComfyLogo from '../../peepoComfyLogo.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <img className="logo" src={PeepoComfyLogo} />
        </div>
        <div className="foxx-label">
          Foxx
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/data">Data</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;