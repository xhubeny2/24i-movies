import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Search from './Search';

// component - application header
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header-in">

                        {/* logo on left side */}
                        <div className="w3layouts_logo">
                            <Link to="/">
                                <h1>24/i<span>MovieDB</span></h1>
                            </Link>
                        </div>

                        {/* search bar on the right side */}
                        <Search />
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>

            {/* menu bar */}
            <Navbar />
        </>
    )
}

export default Header;