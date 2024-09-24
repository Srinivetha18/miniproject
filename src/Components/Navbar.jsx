import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create this CSS file for styling

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/'>Logo</Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/cakes'>Cakes</Link>
        </li>
        <li>
          <Link to='/myflavour'>My Flavour</Link>
        </li>
        <li>
          <Link to='/themecakes'>Theme Cakes</Link>
        </li>
        <li>
          <Link to='/myrelationship'>My Relationship</Link>
        </li>
        <li>
          <Link to='/dessert'>Dessert</Link>
        </li>
        <li>
          <Link to='/birthday'>Birthday</Link>
        </li>
        <li>
          <Link to='/anniversary'>Anniversary</Link>
        </li>
        <li>
          <Link to='/occasion'>Occasion</Link>
        </li>
        <li>
          <Link to='/customizedcakes'>Customized Cakes</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;