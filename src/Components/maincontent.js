import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import monitor from './../Assets/images/svg/monitor.svg';
import settings from './../Assets/images/svg/settings.svg';
import like from './../Assets/images/svg/like.svg';
import phone from './../Assets/images/svg/phone.svg';
import devices from './../Assets/images/devices.jpg';
import cup from './../Assets/images/svg/cup.svg';
import mouse from './../Assets/images/svg/mouse.svg';
import energy from './../Assets/images/svg/energy.svg';
import speedometer from './../Assets/images/svg/speedometer.svg';
import phone_5 from './../Assets/images/i-phone-5.png';
import pointer from './../Assets/images/svg/pointer.svg';
import envelope from './../Assets/images/svg/envelope.svg';
import warstwa from './../Assets/images/warstwa-15.jpg';
import Testimonial from './testimonial';



class Maincontent extends React.Component{
    render(){
        return(
            <Router>
                <main>
                    <section className="overview-section pb-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="section-title mt-5 pb-3 mb-3 text-center">
                                        <h6>product overview</h6>
                                        <h2>List of amazing features</h2>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                    <div className="feature-list text-center">
                                        <div className="feature-icon">
                                            <img className="img-fluid" src={monitor} alt="svg-icon"/>
                                        </div>
                                        <h4>Responsive</h4>
                                        <p>Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                    <div className="feature-list text-center">
                                        <div className="feature-icon">
                                            <img className="img-fluid" src={settings} alt="svg-icon"/>
                                        </div>
                                        <h4>Customizable</h4>
                                        <p>Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                    <div className="feature-list text-center">
                                        <div className="feature-icon">
                                            <img className="img-fluid" src={like} alt="svg-icon"/>
                                        </div>
                                        <h4>Lovely design</h4>
                                        <p>Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                    <div className="feature-list text-center">
                                        <div className="feature-icon">
                                            <img className="img-fluid" src={phone} alt="svg-icon"/>
                                        </div>
                                        <h4>Mobile Friendly</h4>
                                        <p>Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr/>

                    <section className="overview-section text-left py-5">
                        <div className="container">
                            <div className="row">
                                <div className="order-2 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 order-xl-1 order-md-1">
                                    <div className="content-img">
                                        <img className="img-fluid" src={devices} alt="phone-img"/>
                                    </div>
                                </div>
                                <div className="order-1 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="dip-details">
                                        <div className="section-title title-left mt-5 pb-3 mb-3">
                                            <h6>dip into the details</h6>
                                            <h2>Beautiful on every device</h2>
                                        </div>
                                        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. </p>
                                        <ul className="mt-4">
                                            <li>
                                                <span><img className="img-fluid" src={cup} alt="icon"/></span> Awesome design
                                            </li>
                                            <li>
                                                <span><img className="img-fluid" src={mouse} alt="icon"/></span> Fully responsive
                                            </li>
                                            <li>
                                                <span><img className="img-fluid" src={energy} alt="icon"/></span> Retina ready
                                            </li>
                                            <li>
                                                <span><img className="img-fluid" src={speedometer} alt="icon"/></span> Tons of features and easy to use
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="overview-section bg-light text-left pt-5 pb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="dip-details">
                                        <div className="section-title title-left mt-xl-5 mt-0 pb-3 mb-3">
                                            <h6>dip into the details</h6>
                                            <h2>Super easy to customize</h2>
                                        </div>
                                        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="content-img">
                                        <img className="img-fluid" src={phone_5} alt="phone-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Testimonial></Testimonial>


                    <section className="getting-info py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="geting-flex">
                                        <div className="pr5 pb4 geting-content">
                                            <h2>Like what you see? <span>Get this great theme now!</span></h2>
                                        </div>
                                        <div className="button-right">
                                            <Link to={'/'} className="btn btn-outline-primary mr-3">View Features</Link>
                                            <button type="button" className="btn btn-primary">Download now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="overview-section pb-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="section-title mt-5 pb-3 mb-3 text-center">
                                        <h6>quality has its price</h6>
                                        <h2>Pricings &amp; Plans</h2>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                    <div className="card plan-card mt-5 mb-4">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <h4 className="price-type">Free</h4>
                                            </li>
                                            <li className="list-group-item plan-price">
                                                <div className="price"><sup>$</sup>0</div>
                                                <p>/per month</p>
                                            </li>
                                        </ul>
                                        <div className="card-body">
                                            <p className="card-text">Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum <span>lacinia</span> consectetur.</p>
                                            <Link to={'/'} className="mt-4 btn btn-outline-gray">Order now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                    <div className="card plan-card mt-5 mb-4">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <h4 className="price-type">Personal</h4>
                                            </li>
                                            <li className="list-group-item plan-price">
                                                <div className="price"><sup>$</sup>25</div>
                                                <p>/per month</p>
                                            </li>
                                        </ul>
                                        <div className="card-body">
                                            <p className="card-text">Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum <span>lacinia</span> consectetur.</p>
                                            <Link to={'/'} className="mt-4 btn btn-outline-gray">Order now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                    <div className="card plan-card active-card mt-5 mb-4">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <h4 className="price-type">Business</h4>
                                            </li>
                                            <li className="list-group-item plan-price">
                                                <div className="price"><sup>$</sup>50</div>
                                                <p>/per month</p>
                                            </li>
                                        </ul>
                                        <div className="card-body">
                                            <p className="card-text">Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum <span>lacinia</span> consectetur.</p>
                                            <Link to={'/'} className="mt-4 btn btn-outline-gray">Order now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                    <div className="card plan-card mt-5 mb-4">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <h4 className="price-type">Ultimate</h4>
                                            </li>
                                            <li className="list-group-item plan-price">
                                                <div className="price"><sup>$</sup>99</div>
                                                <p>/per month</p>
                                            </li>
                                        </ul>
                                        <div className="card-body">
                                            <p className="card-text">Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum <span>lacinia</span> consectetur.</p>
                                            <Link to={'/'} className="mt-4 btn btn-outline-gray">Order now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="overview-section bg-light pb-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="section-title mt-5 pb-3 mb-3 text-center">
                                        <h6>stay in touch</h6>
                                        <h2>Contact us</h2>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div className="contact-list text-center my-4">
                                        <div className="contact-icon mb-4">
                                            <img className="img-fluid" src={phone} alt="svg-icon"/>
                                        </div>
                                        <p className="m-0">Phone: (415) 124-5678 <br/>Fax: (412) 123-8290</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div className="contact-list text-center my-4">
                                        <div className="contact-icon mb-4">
                                            <img className="img-fluid" src={pointer} alt="svg-icon"/>
                                        </div>
                                        <p className="m-0">1001 Brickell Bay Dr.<br/>Suite 1900 <br/>Miami, FL 33131</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div className="contact-list text-center my-4">
                                        <div className="contact-icon mb-4">
                                            <img className="img-fluid" src={envelope} alt="svg-icon"/>
                                        </div>
                                        <p className="m-0">support@yourname.com</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 offset-lg-1 offset-xl-1">
                                    <div className="contact-form mt-4">
                                        <form className="form">
                                            <div className="form-row">
                                                <div className="col-12 col-sm-12 col-md-6">
                                                    <input type="text" className="form-control mb-3" placeholder="NAME*"/>
                                                    <input type="email" className="form-control mb-3" placeholder="EMAIL*"/>
                                                    <input type="text" className="form-control mb-3" placeholder="SUBJECT*"/>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6">
                                                    <textarea className="form-control" rows="6" placeholder="MESSAGE*"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="text-right mt-3 w-100">
                                                    <button type="submit" className="btn btn-primary">send message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="contact-map">
                        <div className="location-map">
                            <img className="img-fluid" src={warstwa} alt="map"/>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4273.054780429868!2d-80.19133105507593!3d25.764074099528465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b682fe88bfaf%3A0xc252ff44789de11d!2sBrickell%20Bay%20Dr!5e0!3m2!1sen!2sin!4v1602357477861!5m2!1sen!2sin" width="100%" height="460" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="1"></iframe> */}
                        </div>
                    </div>

                </main>
            </Router>
        )
    }
}

export default Maincontent;