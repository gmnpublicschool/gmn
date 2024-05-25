import bannerImg from './../../assets/img/header.png';
import Blog from './../../components/Blog/Blog';
function Home() {
    return ( 
        <>
            <div className="fistFoldBanner bg-gmn container-fluid px-0 px-md-5 mb-5">
                <div className="row align-items-center px-3 py-4 m-0">
                    <div className="col-lg-6 text-center text-lg-left">
                        
                        <h1 className="display-4 font-weight-bold text-white">
                            Welcome to Gyan Mala Nirmal Public School
                        </h1>
                        <h4 className="text-white mb-4 mt-5 mt-lg-0"><strong>Nurturing Minds, Shaping Futures</strong></h4>
                        <p className="text-white mb-4">
                            At Gyan Mala Nirmal Public School, we are committed to providing an environment where students thrive academically, socially, and emotionally. Our holistic approach to education ensures that every child receives the personalized attention they need to succeed.
                        </p>
                        {/* <a href="" className="btn btn-secondary mt-1 py-3 px-5">Learn More</a> */}
                    </div>
                    <div className="bannerImgGmnCont col-lg-6 text-center text-lg-right">
                        <img className="img-fluid bannerImgGmn" src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
            {/* Facilities Start */}
            <div className="container-fluid pt-5">
                <div className="container pb-3">
                    <div className="row">
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                        className="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            className="flaticon-050-fence h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div className="pl-4">
                            <h4>Play Ground</h4>
                            <p className="m-0">
                            Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                            lorem amet elitr vero...
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                        className="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            className="flaticon-022-drum h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div className="pl-4">
                            <h4>Music and Dance</h4>
                            <p className="m-0">
                            Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                            lorem amet elitr vero...
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                        className="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            className="flaticon-030-crayons h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div className="pl-4">
                            <h4>Arts and Crafts</h4>
                            <p className="m-0">
                            Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                            lorem amet elitr vero...
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                        className="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            className="flaticon-017-toy-car h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div className="pl-4">
                            <h4>Safe Transportation</h4>
                            <p className="m-0">
                            Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                            lorem amet elitr vero...
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                        className="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            className="flaticon-025-sandwich h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div className="pl-4">
                            <h4>Healthy food</h4>
                            <p className="m-0">
                            Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                            lorem amet elitr vero...
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                        className="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            className="flaticon-047-backpack h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div className="pl-4">
                            <h4>Educational Tour</h4>
                            <p className="m-0">
                            Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                            lorem amet elitr vero...
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* Facilities Start */}

            {/* Testimonial Start */}
            {/* <div className="container-fluid py-5">
                <div className="container p-0">
                    <div className="text-center pb-2">
                        <p className="section-title px-5">
                            <span className="px-2">Testimonial</span>
                        </p>
                        <h1 className="mb-4">What Parents Say!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="img/testimonial-1.jpg" style={{width: '70px; height: 70px'}} alt="Image" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="img/testimonial-2.jpg" style={{width: '70px; height: 70px'}} alt="Image" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="img/testimonial-3.jpg" style={{width: '70px; height: 70px'}} alt="Image" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item px-3">
                            <div className="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                                eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="img/testimonial-4.jpg" style={{width: '70px; height: 70px'}} alt="Image" />
                                <div className="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Testimonial End */}
        </>
     );
}

export default Home;