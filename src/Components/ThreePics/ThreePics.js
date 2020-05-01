import React from 'react';
import './ThreePics.css';
import drive from '../../Assets/drive.jpg';
import aim from '../../Assets/aim.jpg';
import repeat from '../../Assets/repeat.jpg';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Container fluid rounded>
                <div className="main3">
                    <h3>WHAT WE HAVE TO DO??</h3>
                </div>

                <div className="main2">
                    <div className="side_image1">
                        <h4>DRIVE</h4>
                        <img className="pic" src={drive} alt="drive" />
                    </div>
                    <div className="side_image1">
                        <h4>AIM</h4>
                        <img className="pic" src={aim} alt="Air"/>
                    </div>
                    <div className="side_image1">
                        <h4>REPEAT</h4>
                        <img className="pic" src={repeat} alt="Repeat"/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;