import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";
import { useCartContext } from "./CartContext";
import CircularProgress from "@mui/material/CircularProgress";
import AddCircle from "@mui/icons-material/AddCircle";
import Modal from "@mui/material/Modal";
import {sendReviewData} from "../CartClient";

const settings = {
    className: "center",
    infinite: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
};

const REVIEWS = [
    {
        Name: "Rahul Gandhi",
        Rating: 5,
        Review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim, diam ac tempor commodo, tellus lectus efficitur ligula, sed dictum eros enim eu sem. In vestibulum dignissim ullamcorper. Ut sagittis rutrum efficitur. Nunc a suscipit dui, id luctus sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at tortor libero. In nec viverra enim. Pellentesque accumsan vitae justo et auctor. Donec gravida placerat pulvinar. In congue augue tristique dapibus congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sit amet laoreet tortor, sit amet pellentesque tortor.",
    },
    {
        "Name": "Shahrukh khan",
        "Rating": 4,
        "Review": "Aenean semper pulvinar sollicitudin. Suspendisse potenti. Etiam id bibendum felis. In aliquam eleifend velit, ac facilisis lacus luctus et. Nullam nec sodales lacus, eget fringilla erat. Fusce sit amet ipsum nec lorem ultricies consequat. Donec vitae arcu non tortor ullamcorper tristique non sit amet ante. Quisque dignissim eu risus eu cursus. Curabitur accumsan nisl sit amet finibus interdum. Nunc eu urna eget quam ornare vestibulum in id ante.",
    },
    {
        "Name": "abc xyz",
        "Rating": 3,
        "Review": "Mauris in dui eget est ornare commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam condimentum id lacus in blandit. Curabitur non feugiat nulla. Fusce vestibulum rhoncus sapien a pretium.",
    },
    {
        "Name": "Akshay Kumar",
        "Rating": 5,
        "Review": "Donec rutrum et purus a aliquam. Sed nec mollis lacus. Cras semper ut lacus id condimentum. Nulla facilisi. Mauris tempor mi orci, vehicula mattis est viverra eget. Etiam euismod sodales eros et tempus. Vestibulum venenatis diam vel nulla venenatis, a euismod diam elementum. Morbi suscipit tellus in quam luctus, non faucibus sem porta.",
    },
    {
        "Name": "Ritesh Deshmuskh",
        "Rating": 4,
        "Review": "Sed eleifend facilisis velit sit amet efficitur. Donec leo erat, vulputate vel pharetra sed, viverra ac felis. Cras felis metus, eleifend a cursus tristique, cursus ut nunc. Integer elementum aliquam tellus vel blandit. Vivamus ultricies dapibus lorem in rutrum. Nullam et venenatis erat, sit amet scelerisque ligula.",
    },
    {
        "Name": "Varun Dhawan",
        "Rating": 3,
        "Review": "Aenean fringilla bibendum justo vel congue. Suspendisse vehicula metus neque, aliquet ultrices lectus consectetur eu. Donec faucibus mattis venenatis. In accumsan quis purus at ultricies. Praesent feugiat magna vel ex condimentum vulputate. Duis purus felis, venenatis quis ipsum in, vestibulum imperdiet risus. Sed quis mauris ut augue luctus rhoncus eu non ligula. Ut ut bibendum lorem, sed consequat magna. Nam vitae tempor orci. Quisque ullamcorper arcu eu sagittis tempor. ",
    },
    {
        "Name": "Shidharth Manhotra",
        "Rating": 5,
        "Review": "Fusce justo dui, cursus porta magna eu, ornare gravida ligula. Nullam ac sapien id leo dictum consectetur nec vitae dolor. Etiam tempor eros ac vulputate commodo. Fusce sit amet dolor non diam faucibus commodo lacinia id eros. In sit amet nisl massa. Aliquam suscipit risus ullamcorper ex volutpat tempus vel in nunc. ",
    },
];

function ReviewSlider() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const { reviews } = useCartContext();

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const getReviewSlider = () => {
        // if (!reviews) return <CircularProgress />;

        return (
            <Slider {...settings}>
                {REVIEWS.map((review, index) => {
                    return <ReviewCard review={review} key={index} />;
                })}
            </Slider>
        );
    };

    const handleCircleClick = () => {
        setIsModalOpen(true);
    };

    const getAddReviewIcon = () => {
        return <AddCircle onClick={handleCircleClick} />;
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleEventSubmit = () =>{
        if(rating>=1 && rating<=5) {
            let data = {
                rating,
                name,
                review
            }
            sendReviewData(data, setIsModalOpen);
        }
    }

    const getModal = () => {
        return (
            <Modal style={{display:'flex',width:300, alignItems:'center',margin:'auto'}} open={isModalOpen} onClose={handleModalClose}>
                <section id="add-event-modal">
                    <span>Name:</span>
                    <input onChange={handleNameChange} type="text" required placeholder="Event" />
                    <span>Rating:</span>
                    <input type="number" onChange={handleRatingChange} />
                    <span>Review:</span>
                    <input onChange={handleReviewChange} type="text" required placeholder="Event" />
                    <button onClick={handleEventSubmit}>Submit</button>
                </section>
            </Modal>
        );
    };
    
    return (
        <section id="review-slider-wrapper">
            {/* {getAddReviewIcon()} */}
            {getModal()}
            {getReviewSlider()}
        </section>
    );
}

export default ReviewSlider;
