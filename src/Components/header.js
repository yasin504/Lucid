import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <Router>
                <header id="sticky-header">
                    <div className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <nav className="navbar navbar-expand-lg navbar-dark px-0">
                                        <Link to={'/'} className="navbar-brand m-logo">Lucid</Link>
                                        <button className="navbar-toggler border" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                    
                                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                                <li className="nav-item active">
                                                    <Link to={'/'} className="nav-link">Home</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to={'/'} className="nav-link">Features</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to={'/'} className="nav-link">About</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to={'/'} className="nav-link">Features</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to={'/'} className="nav-link">Testimonials</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to={'/'} className="nav-link">Pricing</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to={'/'} className="nav-link">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </Router>
        )
    }
}

export default Header;


