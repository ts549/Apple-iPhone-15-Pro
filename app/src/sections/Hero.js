import styled from 'styled-components';
import heroVideo from '../assets/video/large_2x.mp4';

const Section = styled.section`
width: 100vw;
height: 100vh;
background-color: black;
position: relative;
`

const HeaderContainer = styled.div`
width: auto;
height: 40px;
background-color: #282829;
overflow: hidden;
padding-right: 800px;
`

const Header = styled.div`
width: 100%;
height: 100%;
background-color: #282829;
display: flex;
flex-direction: row;
column-gap: 10px;
align-items: center;
justify-content: center;

span{
    color: white;
    font-size: 0.8em;
    font-weight: 500;
}
`

const NavContainer = styled.div`
width: auto;
height: 45px;
background-color: #282829;
overflow: hidden;
`

const Nav = styled.div`
width: 100%;
height: 100%;
background-color: black;
display: flex;
flex-direction: row;
column-gap: 32px;
align-items: center;
justify-content: center;

span{
    color: white;
    font-size: 0.8em;
}
`

const PromoContainer = styled.div`
width: 100vw;
height: 80px;
background-color: #1d1d1f;
overflow: hidden;
display: flex;
justify-content: center;
`

const Promo = styled.div`
width: 360px;
height: 100%;
background-color: #1d1d1f;
column-gap: 32px;
display: flex;
align-items: center;

span{
    color: white;
    font-size: 1em;
}
`

const VideoContainer = styled.div`
width: 100vw;
min-height: 70vh;

position: relative;
overflow: hidden;
display: flex:
flex-direction: row;

span{
    color: white;
    font-size: 1em;
}

video{
    width: 100%;
    height: 50%;
    object-fit: cover;
    object-position: bottom;
}
`

function Hero() {
    return (
        <Section>
            <HeaderContainer>
                <Header>
                    <span>Education Store Home</span>
                    <span> | </span>
                    <span>Exit</span>
                </Header>
            </HeaderContainer>
            <NavContainer>
                <Nav>
                    <span> Logo </span>
                    <span> Store </span>
                    <span> Mac </span>
                    <span> iPad </span>
                    <span> iPhone </span>
                    <span> Watch </span>
                    <span> Vision </span>
                    <span> AirPods </span>
                    <span> TV & Home </span>
                    <span> Entertainment </span>
                    <span> Accessories </span>
                    <span> Support </span>
                    <span> Sch </span>
                    <span> Bag </span>
                </Nav>
            </NavContainer>
            <PromoContainer>
                <Promo>
                    <span>
                        Get $200-$650 in credit toward iPhone 15 Pro when you
                        trade in iPhone 11 or higher. Buy.
                    </span>
                </Promo>
            </PromoContainer>
            <VideoContainer>
                <span> iPhone 15 Pro </span>
                <video src={heroVideo} type="video/mp4" autoPlay muted />
                <button>Buy</button>
                <span> From $999 or $41.62/mo. for 24 mo. </span>
            </VideoContainer>
        </Section>
    )
}

export default Hero;