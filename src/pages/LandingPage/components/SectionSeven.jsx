import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class SectionSeven extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne">
                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Mau Dapat Penjelasan Lebih Lanjut  Mengenai<br></br>
                                        BONUS EKSLUSIF Di Atas?
                                    </b>
                                </h5>
                            </div>
                            <div>
                                <h6 className="mb-4"><b>Klik "Video Penjelasan Bonus Ekslusif" dibawah ini:</b></h6>
                                <iframe  title="Interskill" width="100%" height="450" src="https://www.youtube.com/embed/oDvBTR1GFiI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default SectionSeven;