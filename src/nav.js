// react component for the navigation bar
import React from 'react';
import './style.css'; 
// import { Link } from 'react-router-dom';s

const Nav = () => {
  return (
    <nav>
      <div class="logo">
        <h4>GroGetter</h4>
      </div>
      {/* change this to use the react router */}
      <ul class="nav-links">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="addList.html">Add List</a>
        <a href="manageList.html">Manage List</a>
        <a href="login.html">LogIn/SignUp</a> 
      </ul>
    </nav>
  )
}

export default Nav;