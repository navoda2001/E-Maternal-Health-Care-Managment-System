import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBInput, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { TextField } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from "./adminNav";

function ArticleDashboard() {


    const [code, setCode] = useState("")
    const [imageSelected, setimageSelected] = useState("");
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [file, setFile] = useState("")
    const [submit, setSubmit] = useState(true);
    const [article, setProduct] = useState([]);
    const [picture, setPicture] = useState([]);
    const [disableBtn, setDisabletn] = useState(false)
    const [editBtn, setEditBtn] = useState(true)



    useEffect(() => {
        valid()
        editValid()
        getProducts()
    }, [code, price, category, name, imageSelected])


    const valid = () => {
        if ((code !== "") && (file !== "") && (name !== "") && (imageSelected !== "")) {
            setSubmit(false)
        } else {
            setSubmit(true)
        }
    }
    const editValid = () => {
        if ((code !== "") &&  (name !== "") && (file !== "")) {
            setEditBtn(false)
        } else {
            setEditBtn(true)
        }
    }

    function remove(code) {
        axios.delete(global.APIUrl + "/article/deletearticle/" + code).then(() => {
            window.location.href = "/ArticleDashboard";

        }).catch((err) => {
            Swal.fire({
                title: "Error!",
                text: "Article Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
        })
    }


    const getProducts = async () => {
        try {
            const res = await axios.get(global.APIUrl + "/article/allarticle/");
            setProduct(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "ml_default");

        const responses = await axios.post(
            "https://api.cloudinary.com/v1_1/dnomnqmne/image/upload",
            formData
        );
        const picture = imageSelected.name;
        const article = { code, file, name, picture };
        try {
            const response = await axios.post(global.APIUrl + "/article/addarticle", article);
            console.log(response.data);
            Swal.fire({
                title: "Success!",
                text: "Article Added",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            })
            setTimeout(() => {
                window.location.href = "/ArticleDashboard";
            }, 1000);
        } catch (error) {
            console.log(error.message);
            Swal.fire({
                title: "Error!",
                text: "Article Not Added",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
            window.location.href = "/ArticleDashboard";
        }
    };

    const preedit = (code, file, name, picture) => {

        setCode(code)
        setFile(file)
        setName(name)
        setPicture(picture)
        setDisabletn(true)
    }

    const edit = async (e) => {
        e.preventDefault();
        const article = { code, file, name, picture };
        try {
            const response = await axios.put(global.APIUrl + "/article/updatearticle", article);
            console.log(response.data);
            Swal.fire({
                title: "Success!",
                text: "Article Edited",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            })
            setTimeout(() => {
                window.location.href = "/ArticleDashboard";
            }, 1000);
        } catch (error) {
            console.log(error.message);
            Swal.fire({
                title: "Error!",
                text: "Article Not Edited",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
            window.location.href = "/ArticleDashboard";
        }
    };

    return (
        <div class="dashboard-main-wrapper" >
            <Navbar />
            <div class="dashboard-wrapper">
                <div style={{ paddingTop: '3%', paddingLeft: '2%', width: '98%' }}>
                    <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{ color: 'black' }}><i class="fas fa-home"></i>Admin Dashboard</h4>
                    <hr />
                    <div className="container-fluid bg-white" style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%', paddingRight: '5%' }} >
                        <center>
                            <div className='card' style={{ backgroundColor: "", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", width: "90%" }}>
                                <h3 style={{ marginTop: '40px' }}>Add Article</h3>
                                <div class="row container-fluid" style={{ marginTop: '7%', marginBottom: '7%' }}>
                                    <form onSubmit={handleSubmit}>

                                        <div class="row mb-4">
                                            <div className="col">
                                                <TextField className="form-control" id="outlined-basic" label="Article Code" placeholder='A001' variant="outlined" value={code} onChange={(e) => {
                                                    setCode(e.target.value);
                                                }} disabled={disableBtn} />
                                            </div>
                                            <div className="col">
                                                <TextField className="form-control" id="outlined-basic" label="Article Name" placeholder='Article Name' variant="outlined" value={name} onChange={(e) => {
                                                    setName(e.target.value);
                                                }} />
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div className='col'>
                                                <label for="exampleFormControlInput1" class="form-label h6">File URL</label>
                                                <input type="text" placeholder="URL" onChange={(e) => {
                                                    setFile(e.target.value);
                                                }} class="form-control" id="customFile" value={file} />
                                            </div>
                                            <div className='col'>
                                                <label for="exampleFormControlInput1" class="form-label h6">Image</label>
                                                <input type="file" onChange={(e) => {
                                                    setimageSelected(e.target.files[0]);
                                                }} class="form-control" id="customFile" disabled={disableBtn} />
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                        </div>
                                        {disableBtn ? (
                                            <button type="submit" class="btn btn-dark btn-block mb-5" style={{ width: "500px" }} onClick={edit} disabled={editBtn}>Edit</button>
                                        ) : (
                                            <button type="submit" class="btn btn-dark btn-block mb-5" style={{ width: "500px" }} disabled={submit}>Save</button>
                                        )}


                                    </form>
                                </div>
                            </div>
                        </center >
                        <center>
                            <div className='card' style={{ backgroundColor: "", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", width: "95%" }}>
                                <div class="row row-cols-1 row-cols-md-3 g-4">
                                    {article.map((article, key) => (
                                        <div class="col">
                                            <div class="card h-100">
                                                <img src={"https://res.cloudinary.com/dnomnqmne/image/upload/v1630743483/" + article.picture} class="card-img-top"
                                                />
                                                <div class="card-body">
                                                    <h5 class="card-title"> {article.name}</h5>
                                                    <h6 class="card-title"> {article.code}</h6>
                                                    <div className='row'>
                                                        <div className='col'>
                                                            <button type="button" class="btn btn-danger" onClick={() => remove(article.code)}>Delete</button>
                                                        </div>

                                                        <div className='col'>
                                                            <button type="submit" class="btn btn-dark" onClick={() => preedit(article.code, article.file, article.name, article.picture)}>Edit</button>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className='row'>
                                                        <a href={article.file}>
                                                            <button type="button" class="btn btn-success">Read</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div >
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ArticleDashboard