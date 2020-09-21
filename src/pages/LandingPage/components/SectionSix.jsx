import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import LogoInterskill from '../../../assets/images/logo-interskill.png';

class SectionSix extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne">
                            <div className="dTitle">
                                <h6>
                                    <b>
                                        Special Offer
                                    </b>
                                </h6>
                            </div>
                            <div className="dTextBonus">
                                <h1>
                                    <b className="dTextGradient">
                                        <i>Bonus 1</i>
                                    </b>
                                </h1>
                            </div>
                            <div className="text-left">
                                <i>
                                    <h6>
                                        <b>
                                            Bonus rate Revenue Sharing yang lebih besar<br></br><br></br>
                                            Daftar Hari Ini juga dan Dapatkan Bonus Rate Revenue Sharing yang lebih besar yaitu 80% untuk Trainer, dan 20% untuk <span className="dTextWarning RobotoBold"><b>Interskill</b></span>. Pendaftaran setelah hari ini, maka Rate Revenue Sharing akan kembali ke 70% untuk Trainer dan 30% untuk <span className="dTextWarning RobotoBold"><b>Interskill</b></span><br></br><br></br>
                                            Promo berlaku hanya untuk Trainer yang mendaftar hari ini. Sistem kami secara otomatis langsung mencatat Revenue Sharing dengan Rate 80% : 20%
                                        </b>
                                    </h6>
                                </i>
                            </div>

                            <div className="dTextBonus">
                                <h1>
                                    <b className="dTextGradient">
                                        <i>Bonus 2</i>
                                    </b>
                                </h1>
                            </div>
                            <div>
                                <i>
                                    <h6>
                                        <b>
                                            Bonus Affiliasi Trainer Get Member (TGM), 5% berlaku seumur hidup<br></br><br></br>
                                            Trainer akan mendapatkan tambahan bonus 5% apabila mengundang Member untuk daftar dan mengikuti event berbayar di <span className="dTextWarning RobotoBold"><b>Interskill</b></span><br></br><br></br>
                                            Pendaftaran setelah hari ini, maka bonus tidak berlaku seumur hidup
                                        </b>
                                    </h6>
                                </i>
                                <Image className="mt-4" src={LogoInterskill} alt="interskill" height="200" />
                            </div>

                            <div className="dTextBonus">
                                <h1>
                                    <b className="dTextGradient">
                                        <i>Bonus 3</i>
                                    </b>
                                </h1>
                            </div>
                            <div>
                                <i>
                                    <h6>
                                        <b>
                                            Bonus Affiliasi Trainer Get Trainer (TGT), 1% berlaku seumur hidup<br></br><br></br>
                                            DAPATKAN TAMBAHAN BONUS 1% DARI OMSET TRAINER YANG BERHASIL KITA UNDANG UNTUK DAFTAR DI <span className="dTextWarning RobotoBold"><b>INTERSKILL</b></span>.<br></br><br></br>
                                            Pendaftaran setelah hari ini, maka bonus tidak berlaku seumur hidup
                                        </b>
                                    </h6>
                                </i>
                                <Image className="mt-4" src={LogoInterskill} alt="interskill" height="200" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default SectionSix;