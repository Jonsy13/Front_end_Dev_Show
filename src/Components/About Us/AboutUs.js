import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Jonsy from '../../Assets/Jonsy.jpg';
import './AboutUs.css'


const AboutUs = () => {
    return (
        <div>
            <Container fluid>
            <div className="main7">
                {/* <div className="side_image7">
                    <img className="imgg7" src={Jonsy} />
                </div> */}
                <div className="main_head7">
                    <h1 className="font">Vedant Shrotria</h1>
                    <h2 className="font">Full Stack Web Developer</h2>
                    <p>Technologies used for this website are React JS and Bootstrap.</p>
                    <p>Familiar with some frameworks like React JS front-end designing and Node Js for back-end integration.</p>
                    <p>Worked with Heroku,AWS,Netlify,GitHub pages and Cloud9 like Systems.</p>
                </div>

            </div>

            </Container>
            
        </div>
    );
}

export default AboutUs;