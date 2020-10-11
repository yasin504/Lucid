import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import behance from './../Assets/images/behance.png';
import dribbble from './../Assets/images/dribbble.png';
import twitter from './../Assets/images/twitter.png';
import facebook from './../Assets/images/facebook.png';
import linkedin from './../Assets/images/linkedin.png';


class Footer extends React.Component{
    render(){
        return(
            <Router>
                <footer>
                    <div className="footer py-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="social-link">
                                        <ul>
                                            <li><Link to={'/'}><img src={behance} alt="icon"/></Link></li>
                                            <li><Link to={'/'}><img src={dribbble} alt="icon"/></Link></li>
                                            <li><Link to={'/'}><img src={twitter} alt="icon"/></Link></li>
                                            <li><Link to={'/'}><img src={facebook} alt="icon"/></Link></li>
                                            <li><Link to={'/'}><img src={linkedin} alt="icon"/></Link></li>
                                        </ul>
                                    </div>
                                    <p className="text-center">copyright © 2014 lucid onepage theme</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Router>
        )
    }
}

export default Footer;