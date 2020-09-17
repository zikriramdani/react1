import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './css/landingpage.css';
import LogoInterskill from '../../assets/images/logo-interskill.png';
import { Link } from 'react-router-dom';

// Import Component
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';
import SectionSeven from './components/SectionSeven';

class Index extends Component {
    render() {
        return (
            <div className="dBody">
                <div className="dTopbar">
                    <Container fluid>
                        <Row>
                            <Col className="text-center p-3">
                                <Link to="/">
                                    <img src={LogoInterskill} width="70" alt="interskill" />
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="dAlert">
                    <Container fluid>
                        <Row>
                            <Col className="text-center p-3">
                                <h6>
                                    Sebelum menutup halaman ini patikan Anda telah mengecek<br></br>penawaran special kami hanya untuk Anda
                                </h6>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
                <SectionSeven />
                <div className="dContact">
                    <Container fluid>
                        <Row>
                            <Col className="text-center p-3">
                                <div className="dTitle">
                                    <h5 className="text-capitalize">
                                        <b>
                                            Klik Tombol “Ya, saya mau solusi ini” untuk<br></br>
                                            Mendapatkan Bonus Ekslusif di atas
                                        </b>
                                    </h5>
                                    <p>Khusus bagi yang Mendaftar Hari ini</p>
                                </div>
                                <div className="mb-3">
                                    <Link to="#" className="btn btn-danger dButtonRed dBlink">
                                        Ya, Saya Mau Solusi ini
                                    </Link>
                                </div>
                                <div className="dTitle">
                                    <h5 className="text-capitalize">
                                        <b>
                                            <i>Limited Time Offer</i>
                                        </b>
                                    </h5>
                                </div>
                            
                            </Col>
                        </Row>
                    </Container>
                
                </div>
                <div className="dFooter">
                    <Container fluid>
                        <Row>
                            <Col className="text-center p-3">
                                <p className="mb-0">
                                    <b>INTERSKILL</b>
                                    <br></br>
                                    Copyright 2020. All Rights Reserved
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
 
export default Index;