import React, { useState, useEffect } from 'react';
import { Button, Card } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../main_parts/navbar.user.log.js';
import Footer from '../main_parts/footer.js';
import '../APIUrl';

function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [rate, setRate] = useState(0); 
    const [feedback, setFeedback] = useState("");
    const email = sessionStorage.getItem('user_name');
    const [submit, setSubmit] = useState(true);
    const uniqueId = "F" + generateId();

    function generateId() {
        let id = '';
        for (let i = 0; i < 9; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    }

    useEffect(() => {
        getFeedbacks();
    }, []);

    const getFeedbacks = async () => {
        try {
            const response = await axios.get(global.APIUrl + "/feedback/allFeedbacks");
            setFeedbacks(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const feedbackData = { rate, feedback, email, uniqueId };
        try {
            const response = await axios.post(global.APIUrl + "/feedback/addFeedback", feedbackData);
            Swal.fire({
                title: "Success!",
                text: "Feedback Added",
                icon: "success",
                confirmButtonText: "OK",
                type: "success",
            });
            setTimeout(() => {
                window.location.href = "/FeedbackPage"; 
            }, 3000);
        } catch (error) {
            console.log(error.message);
            Swal.fire({
                title: "Error!",
                text: "Feedback Not Added",
                icon: 'error',
                confirmButtonText: "OK",
                type: "error"
            })
            setTimeout(() => {
                window.location.href = "/FeedbackPage";
            }, 3000);
        }
    };

    useEffect(() => {
        valid();
    }, [rate, email, feedback]);

    const valid = () => {
        if (rate !== 0 && email !== "" && feedback !== "") {
            setSubmit(false);
        } else {
            setSubmit(true);
        }
    };

    const handleStarClick = (value) => {
        setRate(value);
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    onClick={() => handleStarClick(i)}
                    style={{ cursor: 'pointer', fontSize: '24px', color: i <= rating ? '#FFD700' : '#C0C0C0' }}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div>
            <Navbar />
            <div className='bg-image'>
                <img src='https://img.freepik.com/free-vector/customer-online-review-rating-feedback-set_124507-8052.jpg?size=626&ext=jpg' className='img-fluid' alt='Sample' />
                <div className='mask' style={{ backgroundColor: '#292929' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <p className='text-white h1 mb-0 text-uppercase' style={{ fontSize: '55px', letterSpacing: '2px' }}>Feedbacks</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="container mt-5">
                <h3>Feedbacks</h3>
                <hr/>
                <div className="row">
                    {feedbacks.map((feedback, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <Card className="p-3">
                                <p>Feedback: {feedback.feedback}</p>
                                <p>Email: {feedback.email}</p>
                                <p>Rating: {renderStars(feedback.rate)}</p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <br />
            <center>
                <div className='card' style={{ backgroundColor: "", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", width: "50%" }}>
                    <h3 style={{ marginTop: '40px' }}>Add Your Feedback</h3>
                    <div className="row container-fluid" style={{ marginTop: '7%', marginBottom: '7%' }}>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-4">
                                <div className="col">
                                    <textarea className="form-control" id="feedback" rows="5" placeholder="Enter your feedback here" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <div>{renderStars(rate)}</div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <Button type="submit" variant="contained" className="btn btn-dark btn-block mb-5" style={{ width: "500px" }} disabled={submit}>Submit Feedback</Button>
                        </form>
                    </div>
                </div>
            </center>
            <Footer />
        </div>
    );
}

export default Feedback;
