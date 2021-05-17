import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../../images/logo.svg'

const Navbar = () => {
    return (
        <>      
        <nav className='navbar'>
        <div className="navbar__logo">
          <img className='navbar__img' src={logo} alt="Loopstudios" />
        </div>  
            <ul className='navbar__ul'>
              <li className='navbar__li'><button className='navbar__btn btn'>About</button></li>
              <li className='navbar__li'><button className='navbar__btn btn'>Careers</button></li>
              <li className='navbar__li'><button className='navbar__btn btn'>Events</button></li>
              <li className='navbar__li'><button className='navbar__btn btn'>Products</button></li>
              <li className='navbar__li'><button className='navbar__btn btn'>Support</button></li>
            </ul>
        </nav>
        
        <div className='menu-btn'>
            <div className="bar-bar-1"></div>
            <div className="bar-bar-2"></div>
            <div className="bar-bar-3"></div>
        </div>
        </>
    )
}

export default Navbar
