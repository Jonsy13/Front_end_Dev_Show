import React from 'react';
import './Home.css';
import dark from '../../Assets/dark2.jpg';
import ThreePics from '../ThreePics/ThreePics'
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Container fluid>
                <div className="main">
                    <div className="main_head">
                        <h1 className="font">Here We Drive The Future!</h1>
                        <p>Aenean vel facilisis risus, non rhoncus dui. Proin eu aliquet tellus. Cras euismod scelerisque leo, a pharetra nisi interdum at. Vivamus ac lectus metus. Maecenas porttitor ex tincidunt risus vestibulum, et luctus nunc tempus. Maecenas lobortis tristique accumsan. Donec semper urna sem, quis pellentesque dui porttitor eu.</p>
                    </div>
                </div>

            </Container>

            <div>
                <div className="main1">
                    <div className="side_image">
                        <img className="imgg" src={dark} alt="Content Pic"/>
                    </div>
                    <div className="main_head">
                        <h1 className="font">Here We Drive The Future!</h1>
                        <p>Aenean vel facilisis risus, non rhoncus dui. Proin eu aliquet tellus. Cras euismod scelerisque leo, a pharetra nisi interdum at. Vivamus ac lectus metus. Maecenas porttitor ex tincidunt risus vestibulum, et luctus nunc tempus. Maecenas lobortis tristique accumsan. Donec semper urna sem, quis pellentesque dui porttitor eu.</p>
                    </div>

                </div>
            </div>
            <ThreePics />
        </div>
    );
}

export default Home;