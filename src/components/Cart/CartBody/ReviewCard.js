import React, {useState} from 'react';
import Rating from '@mui/material/Rating';
import "./styles/ReviewCard.css";
import Avatar from '@mui/material/Avatar';

let COLORS = ["red","green","orange","black","blue","pink","grey"];

function ReviewCard({review}) {


    const getColor = () =>{
        let rand = Math.floor((Math.random()*10)%7);    //0-10%7
        return COLORS[rand];
    }

  return (
    <section id="review-card-wrapper" >
        <Avatar sx={{ bgcolor: getColor() }}>{review.Name[0]}</Avatar>
        <h2>{review.Name}</h2>
        <p>{review.Review.slice(0,300)}</p>
        <Rating
        name="half-rating-read"
        value={review.Rating}
        readOnly
      />
    </section>
  )
}

export default ReviewCard