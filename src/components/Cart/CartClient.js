import React from "react";
import axios from "axios";


async function getProducts(setData) {
    axios.get('http://localhost:4001/getProducts')
    .then((val)=>{
        setData(val.data.Response);
        // console.log(val)
    })
    .catch((err)=>{
        console.log(err);
    })
}

async function getReviews(setData) {
    axios.get('http://localhost:4001/getReviews')
    .then(val=>{
        setData(val.data.Response)}
        )
    .catch(e=>console.log(e));
}

async function getPopularProducts(setData) {
    axios.get('http://localhost:4001/getPopularProducts')
    .then((val)=>{
        setData(val.data.Response);
        // console.log(val);
    })
    .catch((err)=>{
        console.log(err);
    })
}

async function sendReviewData(data, setIsModalOpen) {
    axios.post('http://localhost:4001/postReviewData', data)
    .then((val)=>{
        setIsModalOpen(false);
    }).catch((error)=>{
        console.log("error")
    })
}

export {
    getProducts,
    getReviews,
    getPopularProducts,
    sendReviewData
}