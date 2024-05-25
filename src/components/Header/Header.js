import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./../../assets/img/gmn_logo3.png";
import './../../assets/css/style.css';

function Header() {
    return ( 
        <>
          <div className="container-fluid bg-light position-relative shadow">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5" >
              <a href="" className="navbar-brand font-weight-bold text-secondary" style={{fontSize: '50px'}} >
                {/* <i className="flaticon-043-teddy-bear"></i> */}
                <span className="text-primary">
                  <img src={logo} width={100} />
                </span>
              </a>

              <div className="compnayName d-flex flex-column justify-content-center align-items-center">
                <p className="m-0">GYAN MALA NIRMAL PUBLIC SCHOOL</p>
                <p className="m-0">Pachna, Sheikhpura, Bihar 81105</p>
              </div>

              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" >
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse" >
                <div className="navbar-nav font-weight-bold ml-auto py-0">
                  <NavLink to="/gmn" className="nav-item nav-link" activeClassName="active">Home</NavLink>
                  <NavLink to="/classes" className="nav-item nav-link" activeClassName="active">Classes</NavLink>
                  <NavLink to="/teachers" className="nav-item nav-link" activeClassName="active">Teachers</NavLink>
                  <NavLink to="/gallery" className="nav-item nav-link" activeClassName="active">Gallery</NavLink>
                  <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
                  <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
                </div>
              </div>
            </nav>
          </div>
        </>
     );
}

export default Header;