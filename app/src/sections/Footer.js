import React from "react";
import styled from "styled-components";

const Section = styled.section`
width: 100vw;
max-width: 100%;
height: 100vh;
background-color: #101010;
padding-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
overflow:hidden;

span {
    color: #eaeaea;
    font-weight: 600;
    font-size: 0.9em;
    margin-top: 40px;
}

a {
    color: #c5c5c5;
    text-decoration: none;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: 600;
}

a:hover {
    text-decoration: underline;
}
`

const Divider = styled.div`
width: 1100px;
height: 1px;
background-color: #86868b;
margin-left: 24px;
`

const Menu = styled.div`
display: flex;
flex-direction: row;
column-gap: 100px;
`

const Col1 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Col2 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Col3 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Col4 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Col5 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`

function Footer() {
    return (
        <Section>
            <Divider />
            <Menu>
                <Col1>
                    <span>Shop and Learn</span>
                    <a href="/">Store</a>
                    <a href="/">Mac</a>
                    <a href="/">iPad</a>
                    <a href="/">iPhone</a>
                    <a href="/">Watch</a>
                    <a href="/">Vision</a>
                    <a href="/">AirPods</a>
                    <a href="/">TV & Home</a>
                    <a href="/">AirTag</a>
                    <a href="/">Accessories</a>
                    <a href="/">Gift Cards</a>
                    <span>Apple Wallet</span>
                    <a href="/">Wallet</a>
                    <a href="/">Apple Card</a>
                    <a href="/">Apple Pay</a>
                    <a href="/">Apple Cash</a>
                </Col1>
                <Col2>
                    <span>Account</span>
                    <a href="/">Manage Your Apple ID</a>
                    <a href="/">Apple Store Account</a>
                    <a href="/">iCloud.com</a>
                    <span>Entertainment</span>
                    <a href="/">Apple One</a>
                    <a href="/">Apple TV+</a>
                    <a href="/">Apple Music</a>
                    <a href="/">Apple Arcade</a>
                    <a href="/">Apple Fitness+</a>
                    <a href="/">Apple News+</a>
                    <a href="/">Apple Podcasts</a>
                    <a href="/">Apple Books</a>
                    <a href="/">App Store</a>
                </Col2>
                <Col3>
                    <span>Apple Store</span>
                    <a href="/">Find a Store</a>
                    <a href="/">Genius Bar</a>
                    <a href="/">Today at Apple</a>
                    <a href="/">Apple Camp</a>
                    <a href="/">Apple Store App</a>
                    <a href="/">Certified Refurbished</a>
                    <a href="/">Apple Trade In</a>
                    <a href="/">Financing</a>
                    <a href="/">Career Deals at Apple</a>
                    <a href="/">Order Status</a>
                    <a href="/">Shopping Help</a>
                </Col3>
                <Col4>
                    <span>For Business</span>
                    <a href="/">Apple and Business</a>
                    <a href="/">Shop for Business</a>
                    <span>For Education</span>
                    <a href="/">Apple Card</a>
                    <a href="/">Shop for K-12</a>
                    <a href="/">Shop for College</a>
                    <span>For Healthcare</span>
                    <a href="/">Apple in Healthcare</a>
                    <a href="/">Health on Apple Watch</a>
                    <a href="/">Health Records on iPhone</a>
                    <span>For Government</span>
                    <a href="/">Shop for Government</a>
                    <a href="/">Shop for Veterans and Military</a>
                </Col4>
                <Col5>
                    <span>Apple Values</span>
                    <a href="/">Accesibility</a>
                    <a href="/">Education</a>
                    <a href="/">Environment</a>
                    <a href="/">Inclusion and Diversity</a>
                    <a href="/">Privacy</a>
                    <a href="/">Racial Equity and Justice</a>
                    <a href="/">Supplier Responsibility</a>
                    <span>About Apple</span>
                    <a href="/">Newsroom</a>
                    <a href="/">Apple Leadership</a>
                    <a href="/">Career Opportunities</a>
                    <a href="/">Investors</a>
                    <a href="/">Ethics & Compliance</a>
                    <a href="/">Events</a>
                    <a href="/">Contact Apple</a>
                </Col5>
            </Menu>
        </Section>
    )
};

export default Footer;