import React, { useState, useEffect } from 'react';
import {
    MDBCardImage,
    MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from './main_parts/navbar.js';
import Footer from './main_parts/footer.js';

function Home() {

    return (
        <div>
            <div className="pt-1 pb-1" style={{ backgroundColor: '#F4F4F4' }}>
                <center>
                    <small style={{ fontSize: '14px', letterSpacing: '2px' }} className="text-muted text-capitalize">The Largest Medical Service Hub In The Sri Lanka</small>
                </center>
            </div>
            <Navbar />

            <header class="py-5" style={{ backgroundImage: "url('https://images.pexels.com/photos/7089035/pexels-photo-7089035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div className='row'>
                                <div className='col'>
                                    <div class="my-5 text-center text-xl-start">
                                        <h1 class="display-5 fw-bolder text-dark mb-2 text-uppercase">
                                            Explore Our Services <br />
                                            <span
                                                class="txt-rotate text-warning"
                                                data-period="2000"
                                                data-rotate='[ "Health Articles", "Healthcare Products", "Communicate wia Doctors"]'></span>
                                        </h1>
                                        <p class="text-white" style={{ fontSize: '20px', fontWeight: 'bold', }}>
                                            Welcome to our healthcare hub, where convenience meets care. Dive into a world of wellness with our online platform, offering a seamless experience for all your healthcare needs. From purchasing top-quality healthcare products to scheduling appointments with trusted professionals, our website is your one-stop destination. Engage in meaningful communication with our dedicated team of doctors and explore a treasure trove of health articles tailored to empower and educate. Whether you're seeking advice, products, or simply looking to enrich your health journey, we're here to guide you every step of the way. Join us in prioritizing your well-being – because your health matters, and so do you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="container mt-5 pt-5 pb-5 mb-5">
                {/* <h2 className="text-uppercase text-center" style={{ color: '#19011C' }}>Our Products</h2> */}
                <hr />
                <div className="container">
                    <MDBRow className="mt-4">
                        <MDBCol >
                            <div class="my-5 text-center text-xl-start">
                                <h2 class=" fw-bolder text-black mb-2 text-uppercase">
                                    Explaning ABout Services
                                </h2>
                                <p class="text-black" style={{ fontSize: '18px', fontWeight: 'bold', }}>
                                    Our services encompass a holistic approach to your well-being. Explore a curated selection of premium healthcare products, handpicked to meet your needs and elevate your lifestyle. Seamlessly schedule appointments with experienced healthcare professionals who prioritize your health and well-being above all else. Engage in open communication channels, where you can seek guidance, ask questions, and receive personalized care from our dedicated team of experts. Delve into our extensive library of health articles, designed to inform and empower you on your journey to better health. At our healthcare hub, your wellness is our priority, and our services are tailored to support you every step of the way.</p>
                            </div>
                        </MDBCol>
                        <MDBCol >
                            <br />
                            <br />
                            <div >
                                <MDBCardImage src='https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='...' height="
                                400" width="650" />
                            </div>

                        </MDBCol>


                    </MDBRow>
                </div>
                <hr />
            </section>

            <section className="container mt-5 pt-5 pb-5 mb-5">
                <h2 className="text-uppercase text-center" style={{ color: '#19011C' }}>Shop by brand</h2>
                <div className="container">
                    <MDBRow className="mt-4">
                        <MDBCol sm='2'>
                            <div className="shopBox">
                                <MDBCardImage position='top' src='data:image/png;base64,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' alt='...' />
                            </div>
                        </MDBCol>
                        <MDBCol sm='2'>
                            <div className="shopBox">
                                <MDBCardImage position='top' src='data:image/png;base64,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' alt='...' />
                            </div>
                        </MDBCol>
                        <MDBCol sm='2'>
                            <div className="shopBox">
                                <MDBCardImage position='top' src='https://globalhealthcaresupplies.com/wp-content/uploads/2020/10/1.png' alt='...' />
                            </div>
                        </MDBCol>
                        <MDBCol sm='2'>
                            <div className="shopBox">
                                <MDBCardImage position='top' src='https://pbs.twimg.com/profile_images/1325864798693830656/lreWi4kb_400x400.jpg' alt='...' />
                            </div>
                        </MDBCol>
                        <MDBCol sm='2'>
                            <div className="shopBox">
                                <MDBCardImage position='top' src='https://yt3.googleusercontent.com/ytc/AL5GRJXJjltewPXxEl9mHyIQRDR1vkAFnqXOsRs4sYsO=s900-c-k-c0x00ffffff-no-rj' alt='...' />
                            </div>
                        </MDBCol>
                        <MDBCol sm='2'>
                            <div className="shopBox">
                                <MDBCardImage position='top' src='data:image/png;base64,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' alt='...' />
                            </div>
                        </MDBCol>
                    </MDBRow>

                </div>
            </section>
            <br />
            <Footer />
        </div>
    )
};

export default Home;