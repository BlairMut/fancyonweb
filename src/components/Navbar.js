import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton)
  
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu} style={{fontStyle:'italic'}}>
                        <i className="fa-solid fa-bag-shopping" style={{paddingRight:"20px"}}></i>
                        Fancyon
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/arrival'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                New Arrival
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/women'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Women
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/men'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Men
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'><i class="fa-solid fa-magnifying-glass"></i></Button>} */}
                </div>
            </nav>
        </>
    );
}

export default Navbar