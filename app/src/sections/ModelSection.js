import react, {useRef, useLayoutEffect} from "react";
import styled from "styled-components";
import PhoneModel from "../components/PhoneModel";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ModelContainer = styled.section`
width: 100vw;
height: 100vh;
max-width: 100%;
overflow: hidden;

background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

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
    margin-right: 800px;
    margin-top: 200px;
    margin-bottom: 30px;
`

function ModelSection() {

    gsap.registerPlugin(ScrollTrigger)
    const spanRef = useRef(null)

    useLayoutEffect(() => {
        var Elem = spanRef.current;
        gsap.fromTo(Elem, {translateY: 100}, {translateY: 0, duration: 1, scrollTrigger: {
            trigger: Elem,
            start: "top-=500 top",
            end: "bottom-=500 bottom",
            toggleActions: "play none reverse none",
        }});
    }, [])

    return (
        <ModelContainer>
            <div>
                <span ref={spanRef}>Take a closer look.</span>
            </div>
            <PhoneModel />
        </ModelContainer>
    )
};

export default ModelSection;