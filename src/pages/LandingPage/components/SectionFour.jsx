import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import renderHTML from 'react-render-html'

class SectionFour extends Component {
    render() {
        const testimonial = [
            {name: 'Interskill', position: 'lorem ipsum', image: 'http://placehold.it/834x450', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
            {name: 'Interskill', position: 'lorem ipsum', image: 'http://placehold.it/834x450', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
            {name: 'Interskill', position: 'lorem ipsum', image: 'http://placehold.it/834x450', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
            {name: 'Interskill', position: 'lorem ipsum', image: 'http://placehold.it/834x450', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ]
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne">
                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Apa Kata mereka yang sudah mengajar di <span className="text-danger">Interskill</span>?
                                    </b>
                                </h5>
                            </div>
                            <Row>
                                {testimonial.map((value, index) => {
                                return <Col xs={12} md={6} key={index} className="mb-3">
                                    <div>
                                        <div className="mb-4">
                                            <Image src={value.image} roundedCircle style={{width: 100, height: 100}} />
                                        </div>
                                        <div>
                                            <p>
                                                {renderHTML(value.description)}
                                            </p>
                                            <b>- {value.name} -</b>
                                            <p>{value.position}</p>
                                        </div>
                                    </div>
                                </Col>
                                })}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default SectionFour;