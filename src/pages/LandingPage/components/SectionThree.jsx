import React, { Component } from 'react';
import {Container, Row, Col, Table, Button} from 'react-bootstrap';

class SectionThree extends Component {
    render() {
        const elements = [
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'},
            {features: 'one', interskill: 'Available', zoom: 'None'}
        ];
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
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <span className="text-danger"><b>Interskill</b></span>.</p>
                            </div>
                            <div className="mb-2">
                                <Table responsive className="dTable">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Features/Tools</th>
                                            <th><i className="text-interskill">Interskill</i></th>
                                            <th>Zoom</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {elements.map((value, index) => {
                                            return <tr>
                                                <td>{index+1}</td>
                                                <td className="text-left">{value.features}</td>
                                                <td className="text-interskill">{value.interskill}</td>
                                                <td>{value.zoom}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="mb-3">
                                <Button variant="danger" className="dButtonRed">
                                    <b>Ya, Saya Mau Solusi ini</b>
                                </Button>
                            </div>
                            <div className="text-left">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <ol className="dList">
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                </ol>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <div className="mb-3">
                                <Button variant="danger" className="dButtonRed">
                                    <b>Ya, Saya Mau Solusi ini</b>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default SectionThree;