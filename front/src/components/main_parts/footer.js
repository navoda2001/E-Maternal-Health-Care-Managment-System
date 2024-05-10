
import React, { useState, useEffect } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse,
    MDBCardImage,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { reactLocalStorage } from 'reactjs-localstorage';

function Footer() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);
    return (
        <div>
            <footer class="text-center text-lg-start bg-dark text-muted">
                <section
                    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div class="me-5 d-none d-lg-block">
                        <span class="text-muted text-capitalize" style={{ letterSpacing: '2px' }}>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h4 class="text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>
                                    <MDBIcon fas icon="fas fa-user-nurse" className="text-success" size='2x' /> <span className="text-success">&nbsp;Wellness</span><span className="text-white">-HealthCare</span>
                                </h4>
                                <p>

                                    Welcome to your ultimate healthcare destination! Shop, schedule, and engage with ease on our platform. From top-notch products to seamless appointments, we've got you covered. Connect with experts, explore insights, and take charge of your well-being effortlessly. Your health journey starts here.                                 </p>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-normal text-F1F1F1 mb-4">
                                    Userful Links
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Affilliate</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Sitemap</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Privacy Policy</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Careers</a>
                                </p>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-normal text-F1F1F1 mb-4">
                                    &nbsp;
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Blogs</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Contact Us</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Help Center</a>
                                </p>
                                <p>
                                    <a href="AdminLogin" class="text-reset">Admin</a>
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-normal text-F1F1F1 mb-4">
                                    Contact
                                </h6>
                                <p><i class="fas fa-home me-3"></i>Vauxall Street, Union Place, Colombo</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    medical@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> + 94 11 90 2903</p>
                                <p><i class="fas fa-print me-3"></i> + 94 33 78 9029</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div class="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright:
                    <a class="text-reset fw-bold" href="https://elearning.com">Medical</a>
                </div>

            </footer>
        </div>
    )
};

export default Footer;