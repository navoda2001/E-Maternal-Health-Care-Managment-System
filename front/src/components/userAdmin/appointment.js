import React, { useState, useEffect } from 'react';
import {
    MDBBtn, MDBTableBody, MDBTable, MDBTableHead
} from 'mdb-react-ui-kit';
import { TextField } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navbar from '../main_parts/navbar.user.log.js';
import Footer from '../main_parts/footer.js';
import '../APIUrl';


function Appointment() {

    const [name, setName] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [nIC, setNIC] = useState("")
    const [date, setDate] = useState("")
    const [doctor, setDoctor] = useState("")
    const [time, setTime] = useState("");
    const [submit, setSubmit] = useState(true);
    const [checkedIndex, setCheckedIndex] = useState(-1);
    const email = sessionStorage.getItem('user_name');
    const [yourAppoiments, setYourAppointments] = useState([]);
    const [doclist, setDoclist] = useState([]);
    const uniqueId = "A" + generateId();
    const [status, setStatus] = useState(0)

    function generateId() {
        let id = '';
        for (let i = 0; i < 9; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
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

    const handleChange = (event) => {
        setDoctor(event.target.value);
    };
    const handleCheckboxChange = (index, value) => {
        setTime(value);
        setCheckedIndex(index);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const appointment = { uniqueId, name, email, phoneNo, nIC, date, doctor, time, status };
        try {
            const response = await axios.post(global.APIUrl + "/appointment/addAppointment", appointment);
            Swal.fire({
                title: "Success!",
                text: "Appointment Added",
                icon: "success",
                confirmButtonText: "OK",
                type: "success",
            });
            setTimeout(() => {
                window.location.href = "/Appointment";
            }, 3000);

        } catch (error) {
            console.log(error.message);
            Swal.fire({
                title: "Error!",
                text: "Appointment Not Added",
                icon: 'error',
                confirmButtonText: "OK",
                type: "error"
            })
            setTimeout(() => {
                window.location.href = "/Appointment";
            }, 3000);
        }
    };


    const valid = () => {
        if ((name !== "") && (email !== "") && (phoneNo !== "") && (nIC !== "") && (date !== "") && (doctor !== "") && (time !== "")) {
            setSubmit(false)
        } else {
            setSubmit(true)
        }
    }
    const getAppointments = async () => {
        try {
            const res = await axios.get(global.APIUrl + "/appointment/allappointment/" + email);
            setYourAppointments(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getDoctors = async () => {
        try {
            const res = await axios.get(global.APIUrl + "/user/allDoctors/");
            console.log(res.data);
            setDoclist(res.data);
        } catch (error) {
            console.log(error);
        }
    };


    function remove(uniqueId) {
        axios.delete(global.APIUrl + "/appointment/deleteAppointment/" + uniqueId).then(() => {
            window.location.href = "/Appointment";

        }).catch((err) => {
            Swal.fire({
                title: "Error!",
                text: "Appointment Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
        })
    }

    function editAppoiment(name, email, phoneNo, nIC, date, doctor, time, status, uniqueId) {
        reactLocalStorage.setObject("AppointmentEdit", [name, email, phoneNo, nIC, date, doctor, time, status, uniqueId]);
        window.location.href = "/AppointmentEdit";
    }

    useEffect(() => {
        getAppointments()
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
                        <p className='text-white h1 mb-0 text-uppercase' style={{ fontSize: '55px', letterSpacing: '2px' }}>Make Your Appointment</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <center>
                <div className='card' style={{ backgroundColor: "", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", width: "90%" }}>
                    <h3 style={{ marginTop: '40px' }}>Add Your Appointment</h3>
                    <div class="row container-fluid" style={{ marginTop: '7%', marginBottom: '7%' }}>
                        <form onSubmit={handleSubmit}>

                            <div class="row mb-4">
                                <div className="col">
                                    <TextField className="form-control" id="outlined-basic" label="Name" variant="outlined" onChange={(e) => {
                                        setName(e.target.value);
                                    }} />
                                </div>


                                <div className="col">
                                    <TextField className="form-control" id="outlined-basic" label="NIC" variant="outlined" onChange={(e) => {
                                        setNIC(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <TextField format="0## ### ####" className="form-control" id="outlined-basic" label="Contact No" variant="outlined" type='number' onChange={(e) => {
                                        setPhoneNo(e.target.value);
                                    }}
                                        onKeyPress={(event) => {
                                            if (event.target.value.length >= 10) {
                                                event.preventDefault();
                                            }
                                        }} />
                                </div>

                                <div class="col">
                                    <TextField className="form-control" id="outlined-basic" type='email' label="Email" variant="outlined" value={email} disabled />
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
                            <br />
                            <br />
                            <button type="submit" class="btn btn-dark btn-block mb-5" style={{ width: "500px" }} disabled={submit}>Completed</button>
                        </form>
                    </div>
                </div>
            </center >
            <center>
                <div className='card' style={{ backgroundColor: "", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", width: "95%" }}>
                    <h4 className='mt-5' id="#current" style={{ color: "#606060FF", paddingBottom: "1%" }}><u> Your Appointments </u></h4>
                    <div style={{ paddingLeft: "1050px", paddingBottom: "5px" }}>
                    </div>
                    <MDBTable className="mt-2" hover>
                        <MDBTableHead className="bg-warning">
                            <tr>
                                <th scope='col' ><h6 className="text-black" style={{ fontWeight: '300', letterSpacing: '2px', fontSize: '18px' }}>Name</h6></th>
                                <th scope='col' ><h6 className="text-black" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>NIC</h6></th>
                                <th scope='col' ><h6 className="text-black" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Contact No</h6></th>
                                <th scope='col' ><h6 className="text-black" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Email</h6></th>
                                <th scope='col' ><h6 className="text-black" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Doctor</h6></th>
                                <th scope='col' ><h6 className="text-black" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Date</h6></th>
                                <th scope='col' ><h6 className="text-black" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Time</h6></th>
                                <th scope='col' ><h6 className="text-black" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Status</h6></th>
                                <th scope='col' ><h6 className="text-black" style={{ fontWeight: '100', letterSpacing: '2px', fontSize: '18px' }}>Action</h6></th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {yourAppoiments.map((yourAppoiments, key) => (
                                <tr className="bg-light">
                                    <td style={{ fontSize: '17px' }}>{yourAppoiments.name}</td>
                                    <td style={{ fontSize: '17px' }}>{yourAppoiments.nIC}</td>
                                    <td style={{ fontSize: '17px' }}>{yourAppoiments.phoneNo}</td>
                                    <td style={{ fontSize: '17px' }}>{yourAppoiments.email}</td>
                                    <td style={{ fontSize: '17px' }}>{"Dr."}{yourAppoiments.doctor}</td>
                                    <td style={{ fontSize: '17px' }}>{yourAppoiments.date}</td>
                                    <td style={{ fontSize: '17px' }}>{yourAppoiments.time}</td>
                                    {yourAppoiments.status === 0 ? (
                                        <td style={{ fontSize: '17px' }}><b>Pending</b></td>
                                    ) : yourAppoiments.status === 1 ? (
                                        <td style={{ fontSize: '17px' }}><b>Accepted</b></td>
                                    ) : yourAppoiments.status === 2 ? (
                                        <td style={{ fontSize: '17px' }}><b>Rejected</b></td>
                                    ) : null}

                                    <td>
                                        {yourAppoiments.status === 1 || yourAppoiments.status === 2 ? (
                                           <b style={{ fontSize: '17px' }}>Accepted</b>
                                        ) : (
                                            <>
                                                <MDBBtn size='lg' className="shadow-0" color="danger" style={{ fontWeight: "bold", fontSize: "12px" }} onClick={() => remove(yourAppoiments.uniqueId)}>Delete</MDBBtn>{''}&nbsp;&nbsp;
                                                <MDBBtn size='lg' className="shadow-0" color="dark" style={{ fontWeight: "bold", fontSize: "12px" }} onClick={() => editAppoiment(yourAppoiments.name, yourAppoiments.nIC, yourAppoiments.phoneNo, yourAppoiments.email, yourAppoiments.doctor, yourAppoiments.date, yourAppoiments.time, yourAppoiments.status, yourAppoiments.uniqueId)}>Edit</MDBBtn>
                                            </>
                                        )}

                                    </td>
                                </tr>
                            ))}
                        </MDBTableBody>
                    </MDBTable>
                </div >
            </center>
            <Footer />
        </div >
    )
};

export default Appointment;