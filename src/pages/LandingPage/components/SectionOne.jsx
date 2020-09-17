import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class SectionOne extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne p-3">
                            <div className="dTitle">
                                <h5 className="text-uppercase">
                                    <b>
                                        Solusi Terbaru Bagi Event Live Streaming Anda<br></br>Dengan Fitur/Tools Online Otomatis<br></br>Dan Tanya Biaya Bulanan
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
 
export default SectionOne;