import React, { Component } from "react";
import {Container, Row, Col, Image} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './css/squeze.scss';

import VideoCover from '../../assets/images/video-cover.png'
 
class Index extends Component {
    render() {
        return (
            <div className="dBodySqueze">
                <div className="dTopbarSqueze text-center">
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="text-uppercase my-4">
                                    <h3>
                                        <b>
                                            <span className="dTextWarning dBlink">
                                                <i className="fa fa-exclamation-triangle text-warning" aria-hidden="true"></i> GRATIS VIDEO TRAINING
                                            </span> Yang Membongkar<br></br>Strategi & Figur Online Yang Wajib DiMiliki Trainer<br></br>DiMasa Pandemi dan Masa Yang Akan Datang
                                        </b>
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md={8}>
                                <div className="dAlertSqueze mb-5">
                                    <h6 className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h6>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="dContentSqueze">
                    <Container fluid>
                        <Row>
                            <Col xs={12} md={6}>
                                <div>
                                    <Image src={VideoCover} className="w-100"/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="dFooterSqueze">
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