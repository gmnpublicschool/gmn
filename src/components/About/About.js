import Banner from './../../common/Banner/Banner';
import AboutImg from './../../assets/img/class-1.jpg';
import AboutImg2 from './../../assets/img/about-2.jpg';
function About() {
    return ( 
        <>
            {/* Banner Start */}
            <Banner heading={'About Us'} SubHeading={'About GMN School'} />
            {/* Banner End */}

            {/* About Start */}
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-5">
                            <img class="img-fluid rounded mb-5 mb-lg-0" src={AboutImg} alt="" />
                        </div>
                        <div class="col-lg-7">
                            <p class="section-title pr-5">
                                <span class="pr-2">Learn About Us</span>
                            </p>
                            <h1 class="mb-4">Best School For Your Children</h1>
                            <p> Welcome to Gyan Mala Nirmal Public School, where we prioritize the all-around development of your child. Our mission is to provide a nurturing and stimulating environment that fosters intellectual, emotional, and social growth. We believe every child has the potential to excel, and we are dedicated to helping them achieve their best. </p>
                            <p>Here’s why Gyan Mala Nirmal Public School stands out:</p>
                            <div class="row pt-2 pb-4">
                                {/* <div class="col-6 col-md-4">
                                    <img class="img-fluid rounded" src={AboutImg2} alt="" />
                                </div> */}
                                <div class="col-12 col-md-8">
                                    <ul class="list-inline m-0">
                                        <li class="py-2 border-top border-bottom"><i class="fa fa-check text-primary mr-3"></i> <strong>Experienced Faculty:</strong> Our team of dedicated and experienced educators is committed to delivering high-quality education and personalized attention to each student.</li>
                                        <li class="py-2 border-bottom"><i class="fa fa-check text-primary mr-3"></i> <strong>Modern Facilities:</strong> We offer state-of-the-art facilities, including well-equipped classrooms, science and computer labs, sports fields, and libraries to support our students' diverse interests and needs.</li>
                                        <li class="py-2 border-bottom"><i class="fa fa-check text-primary mr-3"></i> <strong>Holistic Approach:</strong> Our curriculum is designed to promote academic excellence while also focusing on arts, sports, and character development, ensuring a well-rounded education.</li>
                                        <li class="py-2 border-bottom"><i class="fa fa-check text-primary mr-3"></i> <strong>Inclusive Environment:</strong> We celebrate diversity and encourage an inclusive atmosphere where every student feels valued and respected.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <a href="" class="btn btn-primary mt-2 py-2 px-4">Learn More</a> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
     );
}

export default About;