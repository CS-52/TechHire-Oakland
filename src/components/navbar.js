import React, {Component} from 'react'
import ReactDom from 'react-dom'
import AppBar from "material-ui/AppBar"
import "../styles/navbar.css"

const NavBar = () => {
  return (
    <header>
    <div className="container">
      <a href="#home" className="logo">Pathways</a>
      <nav className="nav-collapse">
        <ul>
          <li className="menu-item active">
            <a href="#home">Home</a>
          </li>
          <li className="menu-item">
            <a href="#goals">Goals</a>
          </li>
          <li className="menu-item">
            <a href="#pathways">Pathways</a>
          </li>
          <li className="menu-item">
            <a href="#profile">Profile</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )

};

export default NavBar;
