import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class SectionTwo extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne p-3">
                            <div className="dTitle">
                                <h5 className="text-capitalize">
                                    <b>
                                        Mudahnya Mengadakan Live Training
                                        <br></br>
                                        Secara Online, Bahkan Bagi Pemula Sekalipun
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

                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Apakah Anda juga merasakan salah satu<br></br>dari kendala-kendala di atas?
                                    </b>
                                </h5>
                            </div>

                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Platform Edukasi Marketplace
                                    </b>
                                </h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default SectionTwo;