import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Foto1 from '../../../assets/images/foto-1.jpg';
import Foto2 from '../../../assets/images/foto-2.jpg';

class SectionTwo extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionTwo">
                            <div className="dTitle">
                                <h5 className="text-capitalize">
                                    <b>
                                        Mudahnya Mengadakan Live Training
                                        <br></br>
                                        Secara Online, Bahkan Bagi Pemula Sekalipun
                                    </b>
                                </h5>
                            </div>

                            <div className="dSectionOne__description">
                                <div className="mb-3" style={{height: 300}}>
                                    <div className="dBackgroundImageCenter" style={{backgroundImage: 'url(' + Foto1 + ')'}}></div>
                                </div>
                                <div className="text-left">
                                    <p>
                                    Bayangkan Bagaimana mudahnya Anda mengadakan Live Training secara Online bahkan kurang dari 5 menit jika Anda bisa:<br></br>
                                    </p>
                                    <ol className="dList">
                                        <li>Membuat event anda tanpa perlu memikirkan biaya yang akan dikeluarkan untuk menggunakan tools dalam membuat event online?</li>
                                        <li>Membuat event anda tanpa perlu menggaji admin untuk mengurus pembayaran dari peserta2 anda?</li>
                                        <li>Mengadakan event online anda tanpa kuatir dari masuknya peserta yang belum membayar?</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="dTitle">
                                <h5 className="dTextWarning">
                                    <b>
                                        <i>Tapi...</i>
                                    </b>
                                </h5>
                            </div>

                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Mengapa Banyak Trainer. Speaker dan Coaches<br></br>Yang Masih Menemukan Kendala-Kendala Dalam<br></br>Menyelenggarakan Training Online?
                                    </b>
                                </h5>
                            </div>

                            <div className="dSectionOne__description text-left mb-5">
                                <p>
                                    Kebanyakan Trainer-trainer selama ini ingin melakukan event Live Training, tapi terkendala oleh:
                                </p>
                                <ul className="dList">
                                    <li>Sulitnya menyelenggarakan event online</li>
                                    <li>Bingung harus mulai dari mana dan bingung harus bertanya kepada siapa</li>
                                    <li>Merasa gaptek, atau sudah mencoba beberapa cara, tapi masih gagal</li>
                                    <li>Atau sudah membuka event online, tapi masih repot sekali karena pakai cara lama seperti:</li>
                                    <ol type="a">
                                        <li>Kerepotan mencatat database peserta karena sistemnya manual</li>
                                        <li>Proses registrasi dan pembayaran bagi peserta masih manual</li>
                                        <li>Sistem notifikasi dan reminder untuk peserta masih manual</li>
                                        <li>Menggunakan Aplikasi ZOOM untuk event gratis/preview, tapi harus bayar biaya bulanan</li>

                                    </ol> 
                                </ul>
                            </div>

                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Apakah Anda juga merasakan salah satu<br></br>dari kendala-kendala di atas?
                                    </b>
                                </h5>
                            </div>
                            <div className="dSectionOne__description text-left">
                                <div className="mb-3" style={{height: 300}}>
                                    <div className="dBackgroundImageTop" style={{backgroundImage: 'url(' + Foto2 + ')'}}></div>
                                </div>
                                <p>
                                Kami secara pribadi banyak berkomunikasi dengan Trainer-trainer dan menemukan kendala-kendala dan masalah yang sama, padahal di situasi pandemi COVID 19 ini, banyak sekali Trainer, Speaker dan Coaches yang kehilangan banyak pekerjaan  karena tidak memungkinkan lagi bagi Trainer, speaker dan Coaches untuk melakukan event training secara offline.<br></br><br></br>
                                Setelah kami perhatikan dan pelajari lebih lanjut, kami menemukan jawaban bagaimana agar Trainer, Speaker dan Coaches dapat dengan mudah mengadakan event online dan tidak lagi dipersulit dengan kurangnya tools dan fitur otomatis, biaya tools yang mahal, maupun tambahan gaji admin.<br></br><br></br>
                                Jawabannya adalah:
                                </p>
                            </div>

                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Platform Edukasi Marketplace
                                    </b>
                                </h5>
                            </div>
                            <div className="dSectionOne__description text-left">
                                <p>
                                    Dengan teknologi online dan fitur otomatis yang ada di Platform Edukasi Marketplace, kita dapat menjangkau peserta dari seluruh dunia, bisa diselenggarakan kapan saja, dan bahkan bisa dilakukan di rumah saja.<br></br><br></br>
                                    Lalu pertanyaannya, adakah Platform Edukasi Marketplace yang bisa menjawab kendala-kendala yang ada di Trainer, Speaker dan Coaches?<br></br><br></br>
                                    Pilihan Anda hanya satu: <span className="btn dButtonCream dCursorDefault RobotoBold"><b>Interskill</b></span><br></br><br></br>
                                    Tanpa Joining Fee, Tanpa Biaya Bulanan, Dan Tanpa Kontrak maupun Keterikatan Apapun<br></br><br></br>
Anda Bebas Mengadakan Event Live Training Anda di Interskill <span className="dTextWarning RobotoBold"><b>Interskill</b></span><br></br><br></br>
                                </p>
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                <i className="fa fa-minus fa-2x pr-1 align-self-center" aria-hidden="true"></i>
                                <i className="fa fa-caret-right pr-1 align-self-center" aria-hidden="true"></i>
                                <i className="fa fa-caret-right pr-1 align-self-center" aria-hidden="true"></i>
                                <i className="fa fa-caret-right pr-2 align-self-center" aria-hidden="true"></i>
                                <Link to="#" className="btn btn-danger dButtonRed dBlink">
                                    Ya, Saya Mau Solusi ini
                                </Link>
                                <i className="fa fa-caret-left pl-2 align-self-center" aria-hidden="true"></i>
                                <i className="fa fa-caret-left pl-1 align-self-center" aria-hidden="true"></i>
                                <i className="fa fa-caret-left pl-1 align-self-center" aria-hidden="true"></i>
                                <i className="fa fa-minus fa-2x pl-1 align-self-center" aria-hidden="true"></i>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default SectionTwo;