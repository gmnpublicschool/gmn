function Banner({heading, SubHeading}) {
    return ( 
        <div className="container-fluid bg-gmn mb-5">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '200px'}} >
                <div className="text-center pb-2">
                    <p className="section-title px-5">
                        <span className="px-2 bg-gmn">{heading}</span>
                    </p>
                    <h1 className="mb-4">{SubHeading}</h1>
                </div>
            </div>
        </div>
     );
}

export default Banner;