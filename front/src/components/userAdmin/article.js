import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import Navbar from '../main_parts/navbar.user.log.js';
import Footer from '../main_parts/footer.js';
import '../APIUrl.js';



function Article() {

    const [article, setArticle] = useState([]);;


    const getArticle = async () => {
        try {
            const res = await axios.get(global.APIUrl + "/article/allarticle/");
            setArticle(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArticle()
    }, [])


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
                        <p className='text-white h1 mb-0 text-uppercase' style={{ fontSize: '55px', letterSpacing: '2px' }}>Article HuB</p>

                    </div>
                </div>
            </div>
            <br />
            <br />
            <center>
                <div className='card' style={{ backgroundColor: "", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", width: "90%" }}>
                    <br />
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {article.map((article, key) => (
                            <div className="col">
                                <div className="card" style={{ width: "250px" }}>
                                    <div className="card-body">
                                        <h3 className="card-title"> {article.name}</h3>
                                        <p className="card-text" >
                                            Code :{article.code}
                                        </p>
                                        <img src={"https://res.cloudinary.com/dnomnqmne/image/upload/v1630743483/" + article.picture} class="card-img-top"
                                        />
                                        <div className='row'>
                                            <div className='col' style={{ paddingTop: "10px" }}>
                                                <a href={article.file}>
                                                    <button type="button" className="btn btn-success btn-block">READ ARTICLE</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </center >

            <Footer />
        </div >
    )
};

export default Article
