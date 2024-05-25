import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../assets/img/gmn_logo3.png";

function Footer() {
    return ( 
        <div className="container-fluid bg_secondary text-white mt-5 py-1 px-sm-3 px-md-5" >
            <div className="row pt-3">
                <div className="col-lg-4 col-md-6 mb-2 pr-5">
                    <a href="" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{fontSize: '40px; line-height: 40px'}} >
                        {/* <i className="flaticon-043-teddy-bear"></i> */}
                        <span className="text-white">
                            <img src={logo} width={100} />
                        </span>
                    </a>
                    <p>Gyan Mala Nirmal Public School is a renowned educational institution dedicated to providing quality education to students from diverse backgrounds. With a focus on holistic development, we strive to nurture young minds and prepare them for the challenges of the modern world.</p>
                    <div className="d-flex justify-content-start mt-4">
                        {/* <a className="social_media_cont btn btn_outline_primary rounded-circle text-center mr-2 px-0" style={{width: '38px; height: 38px'}} href="#" ><i className="fab fa-twitter"></i></a> */}
                        <a className="social_media_cont btn btn_outline_primary rounded-circle text-center mr-2 px-0" style={{width: '38px; height: 38px'}} href="https://www.facebook.com/gmn.pachna" ><i className="fab fa-facebook-f"></i></a>
                        {/* <a className="social_media_cont btn btn_outline_primary rounded-circle text-center mr-2 px-0" style={{width: '38px; height: 38px'}} href="#" ><i className="fab fa-linkedin-in"></i></a> */}
                        {/* <a className="social_media_cont btn btn_outline_primary rounded-circle text-center mr-2 px-0" style={{width: '38px; height: 38px'}} href="#" ><i className="fab fa-instagram"></i></a> */}
                    </div>
                </div>
                <div className="col-lg-1 col-md-6 mb-5"></div>
                <div className="col-lg-4 col-md-6 mb-2">
                    <h3 className="text-primary mb-4">Get In Touch</h3>
                    <div className="d-flex">
                        <h4 className="fa fa-map-marker-alt text-primary"></h4>
                        <div className="pl-3">
                            <h5 className="text-white">Address</h5>
                            <p>Pachna Main Road, Pachna , Sheikhpura, Bihar 811105</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <h4 className="fa fa-envelope text-primary"></h4>
                        <div className="pl-3">
                            <h5 className="text-white">Email</h5>
                            <p>gyanmalanirmalpublicschool@gmail.com</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <h4 className="fa fa-phone-alt text-primary"></h4>
                        <div className="pl-3">
                            <h5 className="text-white">Phone</h5>
                            <p>+91 8757842070</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h3 className="text-primary mb-4">Quick Links</h3>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-white mb-2" to="/gmn" ><i className="fa fa-angle-right mr-2"></i>Home</Link>
                        <Link className="text-white mb-2" to="/gmn/classes" ><i className="fa fa-angle-right mr-2"></i>Our Classes</Link>
                        <Link className="text-white mb-2" to="/gmn/teachers" ><i className="fa fa-angle-right mr-2"></i>Our Teachers</Link>
                        <Link className="text-white mb-2" to="/gmn/gallery" ><i className="fa fa-angle-right mr-2"></i>Our Gallery</Link>
                        {/* <Link className="text-white mb-2" to="/blog" ><i className="fa fa-angle-right mr-2"></i>Our Blog</Link> */}
                        <Link className="text-white mb-2" to="/gmn/about" ><i className="fa fa-angle-right mr-2"></i>About Us</Link>
                        <Link className="text-white" to="/gmn/contact" ><i className="fa fa-angle-right mr-2"></i>Contact Us</Link>
                    </div>
                </div>
            </div>

            <div
                className="container-fluid" >
                <p className="m-0 text-center text-white"> 
                    <a className="text-primary font-weight-bold" href="https://gmnpublicschool.github.io/gmn/">G. M. N. Public School</a>. &copy;
                     2012 - Till Now All rights reserved
                </p>
            </div>
        </div>
     );
}

export default Footer;