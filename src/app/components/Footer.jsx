

export const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container mb-2">
                        <div className="row ">
                            <div className="col-lg-12 col-md-6 footer-contact d-flex justify-content-center">
                                <div className="d-block text-center">
                                    <h3>Contacto</h3>
                                    <div className="social-links mt-3">
                                        <a href="https://github.com/patinoAlexis" className="instagram"><i className="bx bxl-github"></i></a>
                                        <a href="https://www.linkedin.com/in/alexis-iv%C3%A1n-pati%C3%B1o-victoria/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        {/* <!-- All the links in the footer should remain intact. --> */}
                        {/* <!-- You can delete the links only if you purchased the pro version. --> */}
                        {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
                        {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ --> */}
                        Template designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> / Pagina hecha por <a>Alexis Patiño</a>
                    </div>
                </div>
            </footer>
            {/* <div id="preloader"></div> */}
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    )
}