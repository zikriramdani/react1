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
                                <h5 className="mb-0">Ambil Solusi Ini Dan Daftar Sebagai<br></br>Trainer Hari Ini</h5>
                            </div>
                            <div className="dTitle">
                                <h5 className="text-uppercase">
                                    <b>
                                        Otomatis Dapat Menggunakan<br></br>
                                        Aplikasi/Platform <span className="text-danger">Interskill</span> Gratis<br></br>
                                        Lengkap dengan Fasilitas Fitur-fiturnya
                                    </b>
                                </h5>
                            </div>
                            <div className="mb-3">
                                <Link to="#" className="btn btn-danger dButtonRed">
                                    Ya, Saya Mau Solusi ini
                                </Link>
                            </div>
                            <div className="text-capitalize py-3">
                                <h5>Hanya Bagi Yang Menndaftar Hari Ini!</h5>
                            </div>
                            <div>
                                <h5>Dapatkan Bonus Ekslusif yang Tidak Akan Anda<br></br>Dapatkan di Platform Manapun juga</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default SectionFive;