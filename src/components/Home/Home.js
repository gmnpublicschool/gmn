import bannerImg from './../../assets/img/header.png';
function Home() {
    return ( 
        <>
            <div className="bg-gmn container-fluid px-0 px-md-5 mb-5">
                <div className="row align-items-center px-3">
                    <div className="col-lg-6 text-center text-lg-left">
                        
                        <h1 className="display-4 font-weight-bold text-white">
                            Welcome to Gyan Mala Nirmal Public School
                        </h1>
                        <h4 className="text-white mb-4 mt-5 mt-lg-0"><strong>Nurturing Minds, Shaping Futures</strong></h4>
                        <p className="text-white mb-4">
                            At Gyan Mala Nirmal Public School, we are committed to providing an environment where students thrive academically, socially, and emotionally. Our holistic approach to education ensures that every child receives the personalized attention they need to succeed.
                        </p>
                        <a href="" className="btn btn-secondary mt-1 py-3 px-5">Learn More</a>
                    </div>
                    <div className="bannerImgGmnCont col-lg-6 text-center text-lg-right">
                        <img className="img-fluid my-5 bannerImgGmn" src={bannerImg} alt="" />
                    </div>
                </div>
            </div>

            {/* <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://codingyaar.com/wp-content/uploads/dark-flowers-1.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0">
                            <h2 className="bg-dark bg-opacity-50 py-2 px-4">First slide label</h2>
                            <p className="bg-dark bg-opacity-50 py-2 px-4">Some representative placeholder content for the first
                            slide.</p>
                            <a href="#" className="btn btn-outline-light px-4 py-2 rounded-0">Learn More</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://codingyaar.com/wp-content/uploads/dark-flowers-2.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0 ">
                            <h2 className="bg-dark bg-opacity-50 py-2 px-4">Second slide label</h2>
                            <p className="bg-dark bg-opacity-50 py-2 px-4">Some representative placeholder content for the second
                            slide.</p>
                            <a href="#" className="btn btn-outline-light px-4 py-2 rounded-0">Learn More</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://codingyaar.com/wp-content/uploads/dark-flowers-3.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0">
                            <h2 className="bg-dark bg-opacity-50 py-2 px-4">Third slide label</h2>
                            <p className="bg-dark bg-opacity-50 py-2 px-4">Some representative placeholder content for the third
                            slide.</p>
                            <a href="#" className="btn btn-outline-light px-4 py-2 rounded-0">Learn More</a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
        </>
     );
}

export default Home;