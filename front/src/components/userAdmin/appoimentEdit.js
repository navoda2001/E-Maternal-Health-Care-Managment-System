import React, { useState, useEffect } from 'react';
import {
    MDBIcon, MDBCardImage,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBTableBody, MDBTable, MDBTableHead
} from 'mdb-react-ui-kit';
import { TextField } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navbar from '../main_parts/navbar.user.log.js';
import NumberFormat from 'react-number-format';

import Footer from '../main_parts/footer.js';
import '../APIUrl';


function AppointmentEdit() {

    var Appointment = reactLocalStorage.getObject('AppointmentEdit');
    const [name, setName] = useState(Appointment[0])
    const [phoneNo, setPhoneNo] = useState(Appointment[2])
    const [nIC, setNIC] = useState(Appointment[1])
    const [email, setEmail] = useState(Appointment[3])
    const [date, setDate] = useState(Appointment[5])
    const [doctor, setDoctor] = useState(Appointment[4])
    const [time, setTime] = useState(Appointment[6]);
    const [submit, setSubmit] = useState(true);
    const [checkedIndex, setCheckedIndex] = useState(-1);
    const [status, setStatus] = useState(Appointment[7])
    const [uniqueId, setUniqueId] = useState(Appointment[8])
    const [doclist, setDoclist] = useState([]);


    const handleChange = (event) => {
        setDoctor(event.target.value);
    };
    const handleCheckboxChange = (index, value) => {
        setTime(value);
        setCheckedIndex(index);
    };
    const getDoctors = async () => {
        try {
            const res = await axios.get(global.APIUrl + "/user/allDoctors/");            
            setDoclist(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const appointment = { uniqueId, name, email, phoneNo, nIC, date, doctor, time, status };
        try {
            const response = await axios.put(global.APIUrl + "/appointment/updateAppointment", appointment);
            console.log(response.data);
            Swal.fire({
                title: "Success!",
                text: "Appointment Edited",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            });
            setTimeout(() => {
                window.location.href = "/Appointment";
            }, 1000);

        } catch (error) {
            console.log(error.message);
            Swal.fire({
                title: "Error!",
                text: "Appointment Not Edited",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
            window.location.href = "/AppointmentEdit";
        }
    };

    const valid = () => {
        if ((name !== "") && (email !== "") && (phoneNo !== "") && (nIC !== "") && (date !== "") && (doctor !== "") && (time !== "")) {
            setSubmit(false)
        } else {
            setSubmit(true)
        }
    }

    function getCurrentDate() {
        const today = new Date();
        let month = (today.getMonth() + 1).toString();
        let day = today.getDate().toString();
        const year = today.getFullYear();
            
        if (month.length === 1) {
            month = '0' + month;
        }
        if (day.length === 1) {
            day = '0' + day;
        }
    
        return `${year}-${month}-${day}`;
    }
    

    useEffect(() => {
        getDoctors()
        valid()
    }, [name, email, phoneNo, nIC, date, doctor, time])

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
                        <p className='text-white h1 mb-0 text-uppercase' style={{ fontSize: '55px', letterSpacing: '2px' }}>Edit Your Appointment</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <center>
                <div className='card' style={{ backgroundColor: "", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", width: "90%" }}>
                    <h3 style={{ marginTop: '40px' }}>Edit Your Appointment</h3>
                    <div class="row container-fluid" style={{ marginTop: '7%', marginBottom: '7%' }}>
                        <form onSubmit={handleSubmit}>

                            <div class="row mb-4">
                                <div className="col">
                                    <TextField className="form-control" id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => {
                                        setName(e.target.value);
                                    }} />
                                </div>


                                <div className="col">
                                    <TextField className="form-control" id="outlined-basic" label="NIC" variant="outlined" value={nIC} onChange={(e) => {
                                        setNIC(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <TextField className="form-control" id="outlined-basic" label="Contact No" variant="outlined" type='number' value={phoneNo} onChange={(e) => {
                                        setPhoneNo(e.target.value);
                                    }}
                                        onKeyPress={(event) => {
                                            if (event.target.value.length >= 10) {
                                                event.preventDefault();
                                            }
                                        }} />
                                </div>

                                <div class="col">
                                    <TextField className="form-control" id="outlined-basic" type='email' label="Email" variant="outlined" value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} required />
                                </div>
                            </div>
                            <div class="row mb-4">
                            <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <p style={{ paddingLeft: "50px" }}>Select Doctor : </p>
                                        </div>
                                        <div className="col">
                                            <div >
                                                <select id="packages" value={doctor} onChange={handleChange} style={{ backgroundColor: "#343a40", color: "#fff" }}>
                                                    <option value="">Please Select Your Doctor</option>
                                                    {doclist.map(doctor => (
                                                        <option key={doctor.id} value={doctor.userName}>{doctor.userName}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div className="row">
                                        <div className="col">
                                            <p style={{ paddingLeft: "50px" }}>Date : </p>
                                        </div>
                                        <div className="col">
                                            <div id="date-picker-example" style={{ paddingRight: "150px" }} class="md-form md-outline input-with-post-icon datepicker" inline="true">
                                                <input placeholder="Select date" type="date" id="example" class="form-control" value={date} min={getCurrentDate()} onChange={(e) => {
                                                    setDate(e.target.value);
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br />
                            <div class="row mb-4">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <p style={{ paddingLeft: "400px" }}>Select Time : </p>
                                        </div>
                                        <div className="col">
                                            <div style={{ paddingRight: "180px" }}>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="inlineCheckbox1"
                                                        checked={checkedIndex === 0}
                                                        onChange={() => handleCheckboxChange(0, "10.00 AM")}
                                                    />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox1">
                                                        10.00 AM
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="inlineCheckbox2"
                                                        checked={checkedIndex === 1}
                                                        onChange={() => handleCheckboxChange(1, "12.00 PM")}
                                                    />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                        12.00 PM
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="inlineCheckbox3"
                                                        checked={checkedIndex === 2}
                                                        onChange={() => handleCheckboxChange(2, "2.00 PM")}
                                                    />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox3">
                                                        2.00 PM
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="inlineCheckbox4"
                                                        checked={checkedIndex === 3}
                                                        onChange={() => handleCheckboxChange(3, "4.00 PM")}
                                                    />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox4">
                                                        4.00 PM
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="inlineCheckbox5"
                                                        checked={checkedIndex === 4}
                                                        onChange={() => handleCheckboxChange(4, "6.00 PM")}
                                                    />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox5">
                                                        6.00 PM
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="inlineCheckbox6"
                                                        checked={checkedIndex === 5}
                                                        onChange={() => handleCheckboxChange(5, "8.00 PM")}
                                                    />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox6">
                                                        8.00 PM
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p><b>Your Selected Time : {time}</b></p>
                            <br />
                            <br />
                            <button type="submit" class="btn btn-dark btn-block mb-5" style={{ width: "500px" }} disabled={submit}>Complete</button>
                        </form>
                    </div>
                </div>
            </center >
            <Footer />
        </div >
    )
};

export default AppointmentEdit;