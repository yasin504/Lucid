import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import warstwa_16 from './../Assets/images/warstwa-16.png';
import warstwa_7 from './../Assets/images/warstwa-7.png';
import Slider from "react-slick";

class Testimonial extends React.Component{
    render(){
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };
        return(
            <section className="testimonial-section overview-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="section-title mt-5 pb-3 pt-3 mb-3 text-center">
                                <h6>quality has its price</h6>
                                <h2 className="text-white">Pricings &amp; Plans</h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="testimonial-slider pb-4">
                                <Slider {...settings}>
                                        <div className="testimonial-content">
                                            <p>Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.</p>
                                            <div className="media py-4">
                                                <img src={warstwa_7} className="mr-3" alt="profile"/>
                                                <div className="media-body">
                                                    <h5 className="mt-0">John Doe</h5>
                                                    <h6>CEO, THE RIVERS COMPANY</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <p>A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.</p>
                                            <div className="media py-4">
                                                <img src={warstwa_16} className="mr-3" alt="profile"/>
                                                <div className="media-body">
                                                    <h5 className="mt-0">Dean Winchester</h5>
                                                    <h6>UX DESIGNER, GOOGLE INC.</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <p>Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.</p>
                                            <div className="media py-4">
                                                <img src={warstwa_7} className="mr-3" alt="profile"/>
                                                <div className="media-body">
                                                    <h5 className="mt-0">John Doe</h5>
                                                    <h6>CEO, THE RIVERS COMPANY</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <p>A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.</p>
                                            <div className="media py-4">
                                                <img src={warstwa_16} className="mr-3" alt="profile"/>
                                                <div className="media-body">
                                                    <h5 className="mt-0">Dean Winchester</h5>
                                                    <h6>UX DESIGNER, GOOGLE INC.</h6>
                                                </div>
                                            </div>
                                        </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonial;