import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class SectionThree extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne p-3">
                            <div className="dTitle">
                                <h5 className="text-capitalize">
                                    <b>
                                        Mengapa Harus Menggunakan Interskill?
                                    </b>
                                </h5>
                            </div>

                            <div className="dTitle">
                                <h5 className="text-capitalize">
                                    <b>
                                        Fitur Apa Saja Yang Akan Anda Dapatkan di <span className="text-danger">Interskill</span>?
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
 
export default SectionThree;