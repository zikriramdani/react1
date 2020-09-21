import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SectionFive extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne">
                            <div className="text-capitalize">
                                <h5 className="mb-0">
                                    <b>Ambil Solusi Ini Dan Daftar Sebagai<br></br>Trainer Hari Ini</b>
                                </h5>
                            </div>
                            <div className="dTitle">
                                <h5 className="text-uppercase">
                                    <b>
                                        Otomatis Dapat Menggunakan<br></br>
                                        Aplikasi/Platform <span className="dTextWarning">Interskill</span> Gratis<br></br>
                                        Lengkap dengan Fasilitas Fitur-fiturnya
                                    </b>
                                </h5>
                            </div>
                            <div className="d-flex justify-content-center mb-3">
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
                            <div className="text-capitalize py-3">
                                <h5><b>Hanya Bagi Yang Mendaftar Hari Ini!</b></h5>
                            </div>
                            <div>
                                <h5>
                                    <b>Dapatkan Bonus Ekslusif yang Tidak Akan Anda<br></br>Dapatkan di Platform Manapun juga</b>
                                </h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default SectionFive;