import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SectionOne extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne">
                            <div className="dTextWarning dBlink">
                                <h6><i className="fa fa-exclamation-triangle text-warning" aria-hidden="true"></i> <u><b>PERHATIAN! Khusus Untuk Para Trainer, Coaches, dan Public Speaker<br></br>yang ingin Sukses di Event Online</b></u></h6>
                            </div>
                            <div className="dTitle">
                                <h5 className="text-uppercase">
                                    <b>
                                        Solusi Terbaru Bagi Event Live Streaming Anda<br></br>Dengan Fitur/Tools Online Otomatis<br></br>Dan Tanya Biaya Bulanan
                                    </b>
                                </h5>
                            </div>
                            <div>
                                <iframe className="mb-4" title="Interskill" width="100%" height="450" src="https://www.youtube.com/embed/oDvBTR1GFiI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div className="d-flex justify-content-center">
                                    <i className="fa fa-minus fa-2x pr-1 align-self-center" aria-hidden="true"></i>
                                    <i className="fa fa-caret-right pr-1 align-self-center" aria-hidden="true"></i>
                                    <i className="fa fa-caret-right pr-1 align-self-center" aria-hidden="true"></i>
                                    <i className="fa fa-caret-right pr-2 align-self-center" aria-hidden="true"></i>
                                    <Link to="#" className="btn btn-danger dButtonRed dBlink">
                                        Ya, Saya Mau Solusi ini
                                    </Link>
                                    <i className="fa fa-caret-left pl-2 align-self-center" aria-hidden="true"></i>
                                    <i className="fa fa-caret-left pl-1 align-self-center" aria-hidden="true"></i>
                                    <i className="fa fa-caret-left pl-1 align-self-center" aria-hidden="true"></i>
                                    <i className="fa fa-minus fa-2x pl-1 align-self-center" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default SectionOne;