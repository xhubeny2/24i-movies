import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HOME, SEARCH } from '../constants/routerConstants';

// component - responsive navigation bar for whole application
const Navbar = ({ pathname }) => {
    return(
        <div className="movies_nav">
            <div className="container">
                <nav className="navbar navbar-default ">
                    <div className="navbar-collapse navbar-right in" id="bs-example-navbar-collapse-1">
                        <nav>

                            {/* List of menu items */}
                            <ul className="nav navbar-nav">
                                <li className={pathname === HOME ? "active" : ""}>
                                    <Link to={HOME}>
                                        Home
                                    </Link>
                                </li>
                                <li className={pathname === SEARCH ? "active" : ""}>
                                    <Link to={SEARCH}>
                                        Search
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </nav>	
            </div>
        </div>
    )
}

// redux connection
const mapStateToProps = state => ({pathname: state.router.location.pathname});

export default connect(mapStateToProps)(Navbar);