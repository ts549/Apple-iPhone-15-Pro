import React from 'react';
import "../sections/Slider.css";
import leftArrow from "../assets/Image/left-arrow.svg";
import rightArrow from "../assets/Image/right-arrow.svg";
import styled from 'styled-components';

const Button = styled.button`
width: 80px;
height: 80px;
background-color: transparent;
border: none;

img{
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-filter:invert(1);
}
`

function BtnSlider({direction, moveSlide}) {
    console.log(direction, moveSlide);
    return (
        <Button onClick={moveSlide} direction={direction === "next" ? "btn-slide-next" : "btn-slide-prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt=""></img>
        </Button>
    )
};


export default BtnSlider;