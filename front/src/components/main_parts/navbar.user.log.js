
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

function NavBar() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);

    function logout() {
        sessionStorage.removeItem('user_name');
        Swal.fire({
            title: "Success!",
            text: "Logout Success",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"
        }).then(okay => {
            if (okay) {
                window.location.href = "/UserLogin";
            }
        });
    }


    useEffect(() => {
        const tel = sessionStorage.getItem('user_name');
        if (tel === null) {
            Swal.fire({
                title: "Error!",
                text: "To access web site, First of all you must fill login form.",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            }).then(okay => {
                if (okay) {
                    window.location.href = "/UserLogin";
                }
            });
        }
    })

    return (
        <MDBNavbar expand='lg' className="sticky-top" light bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/' style={{ fontSize: '25px' }} className="pt-2 navbar-brand h1 fw-bold">
                    <MDBIcon fas icon="fas fa-user-nurse" className="text-success" size='2x' /> <span className="text-success">&nbsp;Wellness</span><span className="text-white">-HealthCare</span>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='userAdminDashboard' tabIndex={-1} aria-disabled='true' style={{ color: '#DCDCDC', cursor: 'pointer' }}>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='Product' tabIndex={-1} aria-disabled='true' style={{ color: '#DCDCDC', cursor: 'pointer' }}>
                                Our Products
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='Article' tabIndex={-1} aria-disabled='true' style={{ color: '#DCDCDC', cursor: 'pointer' }}>
                                Article
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='Appointment' tabIndex={-1} aria-disabled='true' style={{ color: '#DCDCDC', cursor: 'pointer' }}>
                                Appointment
                            </MDBNavbarLink>
                        </MDBNavbarItem> 
                        <MDBNavbarItem>
                            <MDBNavbarLink href='FeedbackPage' tabIndex={-1} aria-disabled='true' style={{ color: '#DCDCDC', cursor: 'pointer' }}>
                            Feedback
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='ChatBox' tabIndex={-1} aria-disabled='true' style={{ color: '#DCDCDC', cursor: 'pointer' }}>
                            Community
                            </MDBNavbarLink>
                        </MDBNavbarItem>                       
                    </MDBNavbarNav>

                    <MDBCollapse navbar show={showNavRight}>
                        <MDBCollapse navbar show={showNavRight}>
                            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                                <MDBNavbarItem>
                                    <MDBNavbarLink style={{ color: '#DCDCDC', cursor: 'pointer' }} active aria-current='page' onClick={logout}>
                                        Logout
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBCollapse>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
};

export default NavBar;