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
                            <Row>
                                <Col xs={12} md={6}>
                                    <div>
                                        <div></div>
                                        <div>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div>
                                        <div></div>
                                        <div>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default SectionFour;