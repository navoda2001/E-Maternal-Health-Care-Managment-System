
import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBIcon, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navbar from "./adminNav";

function Admin() {
    var userDetail = reactLocalStorage.getObject('User_Detail');

    return (
        <div class="dashboard-main-wrapper" >
            <Navbar />
            <div class="dashboard-wrapper">
                <div style={{ paddingTop: '3%', paddingLeft: '2%', width: '98%' }}>

                    <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{ color: 'black' }}><i class="fas fa-home"></i>Admin Dashboard</h4>
                    <hr />
                    {userDetail[0].userType === "Doctor" ? (
                        <MDBRow style={{ marginTop: '6%' }}>
                            <MDBCol sm='4'>
                                <a href="AppointmentsDashboard">
                                    <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                        <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                            <MDBIcon fab icon="wpforms" className="text-muted" /> <br />Appointments
                                        </MDBCardHeader>
                                    </MDBCard>
                                </a>
                            </MDBCol>
                            <MDBCol sm='4'>
                                <a href="ChatAdmin">
                                    <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                        <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                            <MDBIcon fab icon="wpforms" className="text-muted" /> <br />Community
                                        </MDBCardHeader>
                                    </MDBCard>
                                </a>
                            </MDBCol>
                        </MDBRow>
                    ) : userDetail[0].userType === "Mid Wife" ? (
                        <MDBRow style={{ marginTop: '6%' }}>
                            <MDBCol sm='4'>
                                <a href="ProductDashboard">
                                    <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                        <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                            <MDBIcon fab icon="product-hunt" className="text-muted" /> <br />Products
                                        </MDBCardHeader>
                                    </MDBCard>
                                </a>
                            </MDBCol>
                            <MDBCol sm='4'>
                                <a href="ArticleDashboard">
                                    <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                        <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                            <MDBIcon fas icon="newspaper" /> <br /> Articles
                                        </MDBCardHeader>
                                    </MDBCard>
                                </a>
                            </MDBCol>
                            <MDBCol sm='4'>
                                <a href="ChatAdmin">
                                    <MDBCard className=" square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                        <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'black' }}>
                                            <MDBIcon fab icon="wpforms" className="text-muted" /> <br />Community
                                        </MDBCardHeader>
                                    </MDBCard>
                                </a>
                            </MDBCol>
                        </MDBRow>
                    ) : null}

                </div>
            </div>
        </div>
    )
};


export default Admin;