
import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from "./adminNav";
import { reactLocalStorage } from 'reactjs-localstorage';




function AppointmentsDashboard() {

    var Appointment = reactLocalStorage.getObject('User_Detail');
    const [appointments, setAppointments] = useState([])
    const [doctor, setDoctor] = useState(Appointment[0].userName)

    const getAppointments = async () => {
        try {
            const res = await axios.get(global.APIUrl + "/appointment/allappointmentdc/" + doctor);
            setAppointments(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    async function edit(name, nIC, phoneNo, email, doctor, date, time, uniqueId) {
        const status = 1
        const appointment = { uniqueId, name, email, phoneNo, nIC, date, doctor, time, status }
        console.log(appointment);
        try {
            const response = await axios.put(global.APIUrl + "/appointment/updateAppointment", appointment);
            Swal.fire({
                title: "Success!",
                text: "Accepted",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            });
            setTimeout(() => {
                window.location.href = "/AppointmentsDashboard";
            }, 1000);

        } catch (error) {
            console.log(error.message);
            Swal.fire({
                title: "Error!",
                text: "Not Accepted",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
            window.location.href = "/AppointmentsDashboard";
        }


    }
    async function remove(name, nIC, phoneNo, email, doctor, date, time, uniqueId) {
        const status = 2
        const appointment = { uniqueId, name, email, phoneNo, nIC, date, doctor, time, status }
        console.log(appointment);
        try {
            const response = await axios.put(global.APIUrl + "/appointment/updateAppointment", appointment);
            Swal.fire({
                title: "Success!",
                text: "Rejected",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            });
            setTimeout(() => {
                window.location.href = "/AppointmentsDashboard";
            }, 1000);

        } catch (error) {
            console.log(error.message);
            Swal.fire({
                title: "Error!",
                text: "Not Rejected",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
            window.location.href = "/AppointmentsDashboard";
        }
    }

    useEffect(() => {
        getAppointments()
    }, [])

    return (
        <div class="dashboard-main-wrapper">
            <Navbar />
            <div class="dashboard-wrapper">
                <div style={{ paddingTop: '4%', paddingLeft: '2%', width: '98%' }}>
                    <br />

                    <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{ color: 'black' }}><i class="fas fa-home"></i>Admin Dashboard</h4>
                    <hr />

                    <div className="container-fluid bg-white" style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%', paddingRight: '5%' }} >

                        <center>
                            <h1 style={{ color: "#422057FF", textAlign: "center", textTransform: "uppercase" }} >Appointments Management</h1>
                        </center>
                        <><br /><br /></>
                        <MDBTable className="mt-2" hover>
                            <MDBTableHead className="bg-dark" >
                                <tr>
                                    <th scope='col' ><h6 className="text-white" style={{ fontWeight: '300', letterSpacing: '2px', fontSize: '18px' }}>Patient Name</h6></th>
                                    <th scope='col' ><h6 className="text-white" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Email</h6></th>
                                    <th scope='col' ><h6 className="text-white" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Phone Number</h6></th>
                                    <th scope='col' ><h6 className="text-white" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>NIC</h6></th>
                                    <th scope='col' ><h6 className="text-white" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Date</h6></th>
                                    <th scope='col' ><h6 className="text-white" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Time</h6></th>
                                    <th scope='col' ><h6 className="text-white" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Status</h6></th>
                                    <th scope='col' ><h6 className="text-white" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Action</h6></th>

                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {appointments.map((appointments, key) => (
                                    <tr className="bg-light" key={key}>
                                        <td style={{ fontSize: '17px' }}>{appointments.name}</td>
                                        <td style={{ fontSize: '17px' }}>{appointments.email}</td>
                                        <td style={{ fontSize: '17px' }}>{appointments.phoneNo}</td>
                                        <td style={{ fontSize: '17px' }}>{appointments.nIC}</td>
                                        <td style={{ fontSize: '17px' }}>{appointments.date}</td>
                                        <td style={{ fontSize: '17px' }}>{appointments.time}</td>
                                        {appointments.status === 0 ? (
                                        <td style={{ fontSize: '17px' }}><b>Pending</b></td>
                                    ) : appointments.status === 1 ? (
                                        <td style={{ fontSize: '17px' }}><b>Accepted</b></td>
                                    ) : appointments.status === 2 ? (
                                        <td style={{ fontSize: '17px' }}><b>Rejected</b></td>
                                    ) : null}
                                        {appointments.status === 0 ? (
                                            <td>
                                                <MDBBtn size='lg' className="shadow-0" outline color="success" onClick={() => edit(appointments.name, appointments.nIC, appointments.phoneNo, appointments.email, appointments.doctor, appointments.date, appointments.time, appointments.uniqueId)}>Accept</MDBBtn>
                                                <MDBBtn size='lg' className="shadow-0" outline color="danger" onClick={() => remove(appointments.name, appointments.nIC, appointments.phoneNo, appointments.email, appointments.doctor, appointments.date, appointments.time, appointments.uniqueId)}>Reject</MDBBtn>
                                            </td>
                                        ) : appointments.status === 1 ? (
                                            <td>                                            
                                            <MDBBtn size='lg' className="shadow-0" outline color="danger" onClick={() => remove(appointments.name, appointments.nIC, appointments.phoneNo, appointments.email, appointments.doctor, appointments.date, appointments.time, appointments.uniqueId)}>Reject</MDBBtn>
                                        </td>
                                        ) : appointments.status === 2 ? (
                                            <td>
                                            <MDBBtn size='lg' className="shadow-0" outline color="success" onClick={() => edit(appointments.name, appointments.nIC, appointments.phoneNo, appointments.email, appointments.doctor, appointments.date, appointments.time, appointments.uniqueId)}>Accept</MDBBtn>                                            
                                        </td>
                                        ) : null}
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default AppointmentsDashboard
