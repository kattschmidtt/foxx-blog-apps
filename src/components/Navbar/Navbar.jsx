import React from "react";
import PeepoComfyLogo from '../../peepoComfyLogo.png';
import { Link } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={PeepoComfyLogo} alt="" />
        </Link>
        <ul className="nav-menu">
          <li> <Link to="/profile">User</Link></li>
          <li> <Link to="/create">Create Post</Link></li>
          <li> <Link to="/apps">Apps</Link></li>
          <li> <Link to="/logout">Logout</Link></li>
          <li> 
            <IconButton aria-label="more" size="small">
              <MoreVertIcon fontSize="inherit" />
            </IconButton>
          </li>
        </ul>
        
      </div>
    </nav>
  )
};

export default Navbar;