import React, { } from 'react';
import {
    MDBCardImage,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol
} from 'mdb-react-ui-kit';

import Navbar from './main_parts/navbar.js';
import Footer from './main_parts/footer.js';
import './APIUrl';

function About() {

    return (
        <div>
            <div className="pt-1 pb-1" style={{ backgroundColor: '#F4F4F4' }}>
                <center>
                    <small style={{ fontSize: '14px', letterSpacing: '2px' }} className="text-muted text-capitalize">The Largest Medical Service Hub In The Sri Lanka</small>
                </center>
            </div>
            <Navbar />
            <div className='bg-image' >
                <img src='https://img.freepik.com/free-vector/customer-online-review-rating-feedback-set_124507-8052.jpg?size=626&ext=jpg' className='img-fluid' alt='Sample' />
                <div className='mask' style={{ backgroundColor: '#292929' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <p className='text-white h1 mb-0 text-uppercase' style={{ fontSize: '55px', letterSpacing: '2px' }}>About US</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <section className="container mt-5 pt-5 pb-5 mb-5">
                <div className="container">
                    <MDBRow className="mt-5">
                        <MDBCol sm='1'></MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard className="border-0 shadow-0">
                                <MDBCardImage style={{ width: '105%', marginTop: '15%' }} position='top' alt='...' src='https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='5'>
                            <MDBCard className="border-0 shadow-0">
                                <MDBCardBody className="pt-5 mt-3 text-left">
                                    <br />
                                    <br />
                                    <br />
                                    <MDBCardTitle className="h3 text-dark text-uppercase">Introduction</MDBCardTitle>
                                    <MDBCardText style={{ color: 'black', textAlign: 'justify' }}>
                                        Welcome to your ultimate healthcare destination! Shop, schedule, and engage with ease on our platform. From top-notch products to seamless appointments, we've got you covered. Connect with experts, explore insights, and take charge of your well-being effortlessly. Your health journey starts here.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-5 pt-5">
                        <MDBCol sm='1'></MDBCol>
                        <MDBCol sm='5'>
                            <MDBCard className="border-0 shadow-0">
                                <MDBCardBody className="pt-5 mt-3 text-left">
                                    <MDBCardTitle className="h3 text-dark text-uppercase">KEY FEATURES</MDBCardTitle>
                                    <MDBCardText style={{ color: 'black', textAlign: 'justify' }}>
                                        Discover a new era of healthcare convenience at our hub. Shop, schedule, and stay informed effortlessly. With seamless access to products, appointments, and expert advice, your well-being is our priority. Join us on your path to a healthier, happier you.</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard className="border-0 shadow-0">
                                <MDBCardImage style={{ width: '99%' }} position='top' alt='...' src='https://images.pexels.com/photos/4270365/pexels-photo-4270365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-5 pt-5">
                        <MDBCol sm='4' className="mt-1">
                            <MDBCard className="border-0 shadow-0 alert-dark p-4" style={{ height: '310px' }}>
                                <MDBCardTitle className="h3 text-dark text-center text-uppercase">Objectives</MDBCardTitle>
                                <hr />
                                <MDBCardText style={{ color: 'black', textAlign: 'justify' }}>
                                    Discover a new era of healthcare convenience at our hub. Shop, schedule, and stay informed effortlessly. With seamless access to products, appointments, and expert advice, your well-being is our priority. Join us on your path to a healthier, happier you.
                                </MDBCardText>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='4' className="mt-1">
                            <MDBCard className="border-0 shadow-0 alert-dark p-4" style={{ height: '310px' }}>
                                <MDBCardTitle className="h3 text-dark text-center text-uppercase">Vision</MDBCardTitle>
                                <hr />
                                <MDBCardText style={{ color: 'black', textAlign: 'justify' }}>
                                    In our vision, we see a future where healthcare is effortless, accessible, and empowering. We're committed to creating a platform where individuals can seamlessly access products, schedule appointments, and engage with trusted professionals to prioritize their well-being. Join us on this journey towards a healthier tomorrow.
                                </MDBCardText>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='4' className="mt-1">
                            <MDBCard className="border-0 shadow-0 alert-dark p-4" style={{ height: '310px' }}>
                                <MDBCardTitle className="h3 text-dark text-center text-uppercase">Mission</MDBCardTitle>
                                <hr />
                                <MDBCardText style={{ color: 'black', textAlign: 'justify' }}>
                                    Our mission is to empower individuals with seamless access to healthcare products, appointments, and expert guidance, fostering a healthier community through convenience and excellence.
                                </MDBCardText>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default About;