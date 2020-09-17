import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

import Foto1 from '../../../assets/images/foto-1.jpg';
import Foto2 from '../../../assets/images/foto-2.jpg';

class SectionTwo extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne">
                            <div className="dTitle">
                                <h5 className="text-capitalize">
                                    <b>
                                        Mudahnya Mengadakan Live Training
                                        <br></br>
                                        Secara Online, Bahkan Bagi Pemula Sekalipun
                                    </b>
                                </h5>
                            </div>

                            <div>
                                <div className="mb-3" style={{height: 300}}>
                                    <div className="dBackgroundImageCenter" style={{backgroundImage: 'url(' + Foto1 + ')'}}></div>
                                </div>
                                <div className="text-left">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br>
                                    </p>
                                    <ol className="dList">
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="dTitle">
                                <h5 className="text-danger">
                                    <b>
                                        <i>Tapi...</i>
                                    </b>
                                </h5>
                            </div>

                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Mengapa Banyak Trainer. Speaker dan Coaches<br></br>Yang Masih Menemukan Kendala-Kendala Dalam<br></br>Menyelenggarakan Training Online?
                                    </b>
                                </h5>
                            </div>

                            <div className="text-left mb-5">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <ul className="dList">
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <ol type="a">
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    </ol> 
                                </ul>
                            </div>

                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Apakah Anda juga merasakan salah satu<br></br>dari kendala-kendala di atas?
                                    </b>
                                </h5>
                            </div>
                            <div className="text-left">
                                <div className="mb-3" style={{height: 300}}>
                                    <div className="dBackgroundImageTop" style={{backgroundImage: 'url(' + Foto2 + ')'}}></div>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br><br></br>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br><br></br>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br><br></br>
                                </p>
                            </div>

                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Platform Edukasi Marketplace
                                    </b>
                                </h5>
                            </div>
                            <div className="text-left">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br><br></br>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br><br></br>
                                    Pilihan Anda hanya satu: <span className="btn dButtonCream"><b>Interskill</b></span><br></br><br></br>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br><br></br>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry <span className="text-danger"><b>Interskill</b></span><br></br><br></br>
                                </p>
                            </div>
                            <div>
                                <Button variant="danger" className="dButtonRed">
                                    <b>Ya, Saya Mau Solusi ini</b>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default SectionTwo;