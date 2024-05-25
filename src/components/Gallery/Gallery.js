import img1 from "./../../assets/img/img1.jpg";
import img2 from "./../../assets/img/img2.jpg";
import img3 from "./../../assets/img/img3.jpg";
import img4 from "./../../assets/img/img4.jpg";
import Banner from './../../common/Banner/Banner';


function Gallery() {
    return ( 
        <>
            {/* Banner Start */}
            <Banner heading={'Our Gallery'} SubHeading={'Our Children School Gallery'} />
            {/* Banner End */}

            {/* Gallery Start */}
            <div className="container-fluid pt-5 pb-3">
                <div className="container">
                    <div className="row portfolio-container">
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" style={{height: '300px', objectFit: 'contain'}} src={img1} alt="" />
                                <div className="portfolio-btn bg-gmn-opacity d-flex align-items-center justify-content-center" >
                                    <a href={img1} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{fontSize: "60px"}}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" style={{height: '300px', objectFit: 'contain'}} src={img2} alt="" />
                                <div className="portfolio-btn bg-gmn-opacity d-flex align-items-center justify-content-center" >
                                    <a href={img1} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{fontSize: "60px"}}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" style={{height: '300px', objectFit: 'contain'}} src={img3} alt="" />
                                <div className="portfolio-btn bg-gmn-opacity d-flex align-items-center justify-content-center" >
                                    <a href={img1} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{fontSize: "60px"}}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" style={{height: '300px', objectFit: 'contain'}} src={img4} alt="" />
                                <div className="portfolio-btn bg-gmn-opacity d-flex align-items-center justify-content-center" >
                                    <a href={img1} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{fontSize: "60px"}}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" style={{height: '300px', objectFit: 'contain'}} src={img1} alt="" />
                                <div className="portfolio-btn bg-gmn-opacity d-flex align-items-center justify-content-center" >
                                    <a href={img1} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{fontSize: "60px"}}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid w-100" style={{height: '300px', objectFit: 'contain'}} src={img2} alt="" />
                                <div className="portfolio-btn bg-gmn-opacity d-flex align-items-center justify-content-center" >
                                    <a href={img1} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" style={{fontSize: "60px"}}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Gallery End */}
        </>
     );
}

export default Gallery;