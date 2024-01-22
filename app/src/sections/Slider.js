import React, {useState, useRef, useLayoutEffect} from 'react';
import './Slider.css';
import dataSlider from '../components/dataSlider.js';
import BtnSlider from '../components/BtnSlider.js';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
width: 100vw;
height: 100vh;
position: relative;
background-color: #101010;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
row-gap: 30px;

div:first-child {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    align-items: flex-end;
    overflow: hidden;
}

span {
    color: #86868b;
    font-size: 3em;
    font-weight: 500;
    margin-right: 540px;
}

a {
    height: 30px;
    width: auto;
    color: #2997ff;
}
`

const ContainerSlider = styled.div`
width: 1200px;
height: 700px;
position: relative;
`

const Slide = styled.div`
width: 100%;
height: 100%;
position: absolute;
opacity: ${props => props.active ? 1 : 0};
overflow: hidden;
border-radius: 20px;

video {
    object-fit: cover;
    width: 1200px;
    height: 700px;
}

span {
    color: white;
    width: 800px;
    height: 700px;
    font-size: 2rem;
    position: absolute;
}
`

const BtnSliderContainerL = styled.div`
width: 70px;
height: 70px;
position: absolute;
margin-top: 300px;
`

const BtnSliderContainerR = styled.div`
width: 70px;
height: 70px;
position: absolute;
right: 10px;
margin-top: 300px;
`

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1);
    const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const nextSlide = () => {
        videoRefs[slideIndex - 1].current.pause();
        videoRefs[slideIndex - 1].current.currentTime = 0;
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
            videoRefs[slideIndex].current.play();
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
            videoRefs[0].current.play();
        }
    }
    const prevSlide = () => {
        videoRefs[slideIndex - 1].current.pause();
        videoRefs[slideIndex - 1].current.currentTime = 0;
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
            videoRefs[slideIndex - 2].current.play();
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
            videoRefs[dataSlider.length - 1].current.play();
        }
    }

    gsap.registerPlugin(ScrollTrigger)
    const spanRef = useRef(null)

    useLayoutEffect(() => {
        var Elem = spanRef.current;
        gsap.fromTo(Elem, {translateY: 50}, {translateY: 0, duration: 1, scrollTrigger: {
            trigger: Elem,
            start: "top-=500 top",
            toggleActions: "play none reverse none",
            end: "bottom-=500 bottom"
        }});
    }, [])

    const a1Ref = useRef(null)

    useLayoutEffect(() => {
        var Elem = a1Ref.current;
        gsap.fromTo(Elem, {translateY: 50}, {translateY: 0, duration: 1, scrollTrigger: {
            trigger: Elem,
            start: "top-=485 top",
            toggleActions: "play none reverse none",
            end: "bottom-=485 bottom"
        }})
    }, [])

    const a2Ref = useRef(null)

    useLayoutEffect(() => {
        var Elem = a2Ref.current;
        gsap.fromTo(Elem, {translateY: 50}, {translateY: 0, duration: 1, scrollTrigger: {
            trigger: Elem,
            start: "top-=450 top",
            toggleActions: "play none reverse none",
            end: "bottom-=450 bottom"
        }})
    }, [])

    return (
        <Section>
            <div>
                <span ref={spanRef}>Get the highlights.</span>
                <a ref={a1Ref} href="/">Watch the film</a>
                <a ref={a2Ref} href="/">Watch the event</a>
            </div>
            <ContainerSlider>
                {dataSlider.map((obj, index) => {
                    return (
                        <Slide
                        key={obj.id}
                        active={slideIndex === index + 1 ? true : false}
                        onEnded={slideIndex === index + 1 ? nextSlide : null}
                        >
                            <video ref={videoRefs[index]} autoPlay muted src={process.env.PUBLIC_URL + `/videos/slide_${index + 1}.mp4`} />
                            {/* <span>{obj.title}</span> */}
                        </Slide>
                    )
                })}
                <BtnSliderContainerR>
                    <BtnSlider moveSlide={nextSlide} direction={"next"} />
                </BtnSliderContainerR>
                <BtnSliderContainerL>
                    <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                </BtnSliderContainerL>
            </ContainerSlider>
        </Section>
    )
}