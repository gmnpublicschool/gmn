import bannerImg from './../../assets/img/header.png';
import Blog from './../../components/Blog/Blog';
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
                        {/* <a href="" className="btn btn-secondary mt-1 py-3 px-5">Learn More</a> */}
                    </div>
                    <div className="bannerImgGmnCont col-lg-6 text-center text-lg-right">
                        <img className="img-fluid my-5 bannerImgGmn" src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
            {/* Facilities Start */}
            <div class="container-fluid pt-5">
                <div class="container pb-3">
                    <div class="row">
                    <div class="col-lg-4 col-md-6 pb-1">
                        <div
                        class="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            class="flaticon-050-fence h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div class="pl-4">
                            <h4>Play Ground</h4>
                            <p class="m-0">
                            Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                            lorem amet elitr vero...
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 pb-1">
                        <div
                        class="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            class="flaticon-022-drum h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div class="pl-4">
                            <h4>Music and Dance</h4>
                            <p class="m-0">
                            Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                            lorem amet elitr vero...
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 pb-1">
                        <div
                        class="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            class="flaticon-030-crayons h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div class="pl-4">
                            <h4>Arts and Crafts</h4>
                            <p class="m-0">
                            Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                            lorem amet elitr vero...
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 pb-1">
                        <div
                        class="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            class="flaticon-017-toy-car h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div class="pl-4">
                            <h4>Safe Transportation</h4>
                            <p class="m-0">
                            Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                            lorem amet elitr vero...
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 pb-1">
                        <div
                        class="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            class="flaticon-025-sandwich h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div class="pl-4">
                            <h4>Healthy food</h4>
                            <p class="m-0">
                            Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                            lorem amet elitr vero...
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 pb-1">
                        <div
                        class="d-flex bg-light shadow-sm border-top rounded mb-4"
                        style={{padding: '30px'}}
                        >
                        <i
                            class="flaticon-047-backpack h1 font-weight-normal text-primary mb-3"
                        ></i>
                        <div class="pl-4">
                            <h4>Educational Tour</h4>
                            <p class="m-0">
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
        </>
     );
}

export default Home;