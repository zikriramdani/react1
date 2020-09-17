import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class SectionFour extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne p-3">
                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Apa Kata mereka yang sudah mengajar di <span className="text-danger">Interskill</span>?
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
 
export default SectionFour;