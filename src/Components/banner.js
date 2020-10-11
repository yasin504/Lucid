import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import banner_mobile from './../Assets/images/devices-kopia.png';

class Banner extends React.Component{

    render(){
        return(
            <Router>
            <div className="banner-wrapper">
                <div className="banner-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="banner-block">
                                    <div className="banner-content">
                                        <h6 className="text-uppercase">introducing lucid theme</h6>
                                        <h1 className="text-white">Carefully crafted and beautiful landing page</h1>
                                        <p>Etiam ullamcorper et turpis eget hendrerit. Praesent varius risus mi, at elementum magna ultricies accumsan. Cras venenatis lacus sed dolor placerat tempus. Morbi blandit at neque ut imperdiet.</p>
                                        <div className="mt-4">
                                            <button type="button" className="btn btn-primary mr-3">Download now</button>
                                            <Link to={'/'} className="btn btn-outline-primary">View Features</Link>
                                        </div>
                                    </div>
                                    <div className="banner-right">
                                        <div className="banner-image">
                                            <img className="img-fluid" src={banner_mobile} alt="img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}

export default Banner;