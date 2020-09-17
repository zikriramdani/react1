import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class SectionFive extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne p-3">
                            <div className="dTitle">
                                <h5 className="text-uppercase">
                                    <b>
                                        Otomatis Dapat Menggunakan<br></br>
                                        Aplikasi/Platform <span className="text-danger">Interskill</span> Gratis<br></br>
                                        Lengkap dengan Fasilitas Fitur-fiturnya
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
 
export default SectionFive;