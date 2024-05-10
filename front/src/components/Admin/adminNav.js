import React from "react";
import Swal from 'sweetalert2';
import {
    MDBIcon, MDBNavbarItem, MDBNavbarLink
} from 'mdb-react-ui-kit';
import { reactLocalStorage } from 'reactjs-localstorage';

const Navbar = () => {
    const userDetail = reactLocalStorage.getObject('User_Detail');

    const logout = () => {
        Swal.fire({
            title: "Success!",
            text: "Logout Success",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"
        }).then(okay => {
            if (okay.isConfirmed) {
                reactLocalStorage.setObject("User_Detail",{});
                window.location.href = "/AdminLogin";
            }
        });
    }

    return (
        <div>
            <div className="dashboard-header">
                <nav className="navbar navbar-expand-lg bgTopNav fixed-top">
                    <a className="navbar-brand h1 fw-bold" style={{ fontSize: '25px' }} href="Admin">
                        <MDBIcon fas icon="fas fa-user-nurse" className="text-success" size='2x' />
                        <span className="text-success">&nbsp;Wellness</span>
                        <span className="text-dark">-HealthCare</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto navbar-right-top">
                            <li className="nav-item square border border-0">
                                <MDBNavbarItem style={{ paddingRight: "30px", }}>
                                    <MDBNavbarLink style={{ color: 'green', cursor: 'pointer', fontWeight: 'bold', }} active aria-current='page' onClick={logout}>
                                        Logout
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="nav-left-sidebar sidebar-dark">
                <div className="menu-list" style={{ paddingBottom: '40%' }}>
                    <nav className="navbar navbar-expand-lg navbar-light shadow-0">
                        <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <h4 className="mt-4 mb-4 text-success">&nbsp;&nbsp;&nbsp;Admin Dashboard</h4>
                                {userDetail[0].userType === "Doctor" && (
                                    <li className="nav-item ">
                                        <a className="nav-link " style={{ fontSize: '17px' }} href="AppointmentsDashboard" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Appointments </a>
                                    </li>
                                )}
                                {userDetail[0].userType === "Mid Wife" && (
                                    <React.Fragment>
                                        <li className="nav-item ">
                                            <a className="nav-link " style={{ fontSize: '17px' }} href="ProductDashboard" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Products </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="ArticleDashboard" style={{ fontSize: '17px' }} aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"> Articles </a>
                                        </li>
                                    </React.Fragment>
                                )}
                                  <li className="nav-item ">
                                        <a className="nav-link " style={{ fontSize: '17px' }} href="ChatAdmin" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Community </a>
                                    </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
