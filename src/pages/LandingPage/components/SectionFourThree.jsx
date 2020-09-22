import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import renderHTML from 'react-render-html';

import Yovi from '../../../assets/images/yovi.jpg';
import Ina from '../../../assets/images/ina.jpg';
import XiaoLian from '../../../assets/images/xiao-lian.jpg';

class SectionFourThree extends Component {
    render() {
        const dataBelajar = [
            {name: 'Yovi', position: 'Batam', image: Yovi, description: "Terima kasih <span className='dTextWarning RobotoBold'><b>interskill</b></span>. Saya termasuk yang sulit mengerti tentang teknologi, tapi dengan <span className='dTextWarning RobotoBold'><b>interskill</b></span>, saya bisa melakukan pertemuan-pertemuan online dengan lancar dan penuh sense of security. Bagaimana bisa? Langkah-langkah yang perlu dilakukan cukup sederhana dan jelas. Setiap acara dan setiap akun memiliki proteksi sehingga tidak sembarang perangkat bisa melakukan koneksi tanpa terlebih dahulu melakukan pendaftaran acara. Saya senang dengan penanganan masalah yang cukup gesit mulai dari registrasi acara hingga acara selesai. Masalah yg sering terjadi seperti blokir web/app oleh perangkat pengguna, pengguna baru yang tidak mengerti cara daftar atau mendapat kendala saat join, bisa dengan gesit dibantu hingga sukses mengikuti acara. Saya merekomendasikan teman-teman untuk mencoba sendiri dan koleksi pengalaman pribadi menggunakan Interskill. Salam Sukses dan Bahagia."},
            {name: 'Ina', position: 'Bogor', image: Ina, description: "Pertama kali diperkenalkan teman lalu tertarik untuk download serta join aplikasinya. Ternyataaaa, banyak banget pelatihan-pelatihan / seminar-seminar gratis buat nambah ilmu. Tidak harus datang ke lokasi, tidak perlu dandan. Dan yang penting, tidak perlu bayar buat nambah ilmu. Bahkan yang lebih keren lagi, bisa dapetin uang jajan juga kalau kita aktif ikut programnya. Sukses dan maju terus <span className='dTextWarning RobotoBold'><b>interskill</b></span>."},
            {name: 'Xiao Lian', position: 'Batam', image: XiaoLian, description: "Suka banget dengan aplikasi <span className='dTextWarning RobotoBold'><b>INTERSKILL</b></span> yang mempermudah dan mempunyai proteksi yang sangat aman dan saat kita butuhkan sudah cepat banget ditanganin. Baru kali ini saya mencoba aplikasi ini. Pertama sih, saya pikir tidak begitu mudah aplikasinya, tapi ternyata malah sebaliknya. Mudah, jelas, tertata dan bagus sistemnya. Aku suka <span className='dTextWarning RobotoBold'><b>interskill</b></span>. Benar-benar rekomen banget aplikasi ini."}
        ]
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne">

                            {/* Belajar */}
                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Apa kata mereka yang telah belajar dengan <span className="dTextWarning">Interskill</span>?
                                    </b>
                                </h5>
                            </div>
                            <Row>
                                {dataBelajar.map((value, index) => {
                                return <Col xs={12} md={4} key={index} className="mb-3">
                                    <div>
                                        <div className="mb-4">
                                            <Image src={value.image} roundedCircle style={{width: 100, height: 100}} />
                                        </div>
                                        <div>
                                            <p>
                                                {renderHTML(value.description)}
                                            </p>
                                            <b className="RobotoBold">- {value.name} -</b>
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
 
export default SectionFourThree;