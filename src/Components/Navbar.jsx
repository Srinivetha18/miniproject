import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create this CSS file for styling

const Navbar = () => {
  return (
    <div >
      <nav className='nav'>

        <div className='heading'>
          <ul className='nav-links'>
            <li className='logo'> <img src="https://w7.pngwing.com/pngs/450/256/png-transparent-bakery-logo-thumbnail.png" />
            </li>
            
            <li className='dropbtn'>
              <Link to='/cakes'>Cakes</Link>
                <div className='dropdown-content'>
                  <a href='#'>Pinata Cakes</a>
                  <a href='#'>Suprise Cakes</a>
                  <a href='#'>Gourmet Cakes</a>
                  <a href='#'>Drip Cakes</a>
                  <a href='#'>Pull Me Up Cakes</a>
                  <a href='#'>Bomb Cakes</a>
                </div>
            </li>

            <li className='dropbtn1'>
              <Link to='/myflavour'>My Flavour</Link>
              <div className='dropdown-content1'>
                  <a href='#'>Chocolate Cakes</a>
                  <a href='#'>Butterscotch Cakes</a>
                  <a href='#'>Pineapple Cakes</a>
                  <a href='#'>Black Forest Cakes</a>
                  <a href='#'>Red Velvet Cakes</a>
                  <a href='#'>Vanilla Cakes</a>
                  <a href='#'>Fruit Cakes</a>
                  <a href='#'>Blueberry Cakes</a>
                </div>
            </li>
            
            <li className='dropbtn2'>
              <Link to='/themecakes'>Theme Cakes</Link>
              <div className='dropdown-content2'>
                  <a href='#'><b>Kids Cakes</b></a>
                  <a href='#'>Character Cakes </a>
                  <a href='#'>Grow up Cakes</a>
                  <a href='#'>More Cakes</a>
                </div>
            </li>
            <li className='dropbtn3'>
              <Link to='/myrelationship'>My Relationship</Link>
              <div className='dropdown-content3'>
                  <a href='#'><b>For Him</b></a>
                  <a href='#'> Cakes for Father </a>
                  <a href='#'>Cakes for Husband</a>
                  <a href='#'>Cakes for Brother</a>
                  <a href='#'>Cakes for Boy Friend</a>
                  <a href='#'><b>For Her</b></a>
                  <a href='#'> Cakes for Mother </a>
                  <a href='#'>Cakes for Wife</a>
                  <a href='#'>Cakes for Sister</a>
                  <a href='#'>Cakes for Girl Frien</a>

                </div>
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

            <button type="button" className="btn btn-primary">Login

              {/* <Link to='/login'>Login</Link> */}
            </button>

            <button type='button' className='btn btn-primary'> My Cart
              {/* <Link to='/cart'>My Cart</Link> */}
            </button>

          </ul>
        </div>
      </nav>
      <div className='body-main-con'>


      </div>
    </div>
  );
};

export default Navbar;