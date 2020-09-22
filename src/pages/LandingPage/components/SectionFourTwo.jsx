import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import renderHTML from 'react-render-html';

import PustaHeryKurnia from '../../../assets/images/Pusta-Hery-Kurnia.jpeg';
import MangaraSidabutar from '../../../assets/images/Mangara-Sidabutar.jpeg';
import Abbishallom from '../../../assets/images/Abbishallom.jpg';

class SectionFourTwo extends Component {
    render() {
        const dataGuru = [
            {name: 'Pusta Hery Kurnia', position: 'Bandung', image: PustaHeryKurnia, description: "<span className='dTextWarning RobotoBold'><b>INTERSKILL</b></span> ini platform yang sangat penting untuk Trainer. Fitur-fiturnya terus bertambah sehingga Trainer bisa mengajar dengan kualitas yang top. Tim <span className='dTextWarning RobotoBold'><b>Interskill</b></span> pun fast respond terhadap masukan dan selalu siap membantu. Luar biasa!"},
            {name: 'Mangara Sidabutar', position: 'Jakarta', image: MangaraSidabutar, description: "Sempat men-delay hampir seminggu setelah diundang seorang rekan untuk daftar di <span className='dTextWarning RobotoBold'><b>Interskill</b></span>, akhirnya saya berhasil mendaftar dan langsung ikuti introduction meeting dan <span className='dTextWarning RobotoBold'><b>Interskill</b></span> workshop yang diadakan Pak Ferdinand. Luar biasa! Ternyata fitur-fitur di <span className='dTextWarning RobotoBold'><b>Interskill</b></span> sangat luar biasa, dan  masih banyak improvement yang continuously sedang dikerjakan. I think this is the first training marketplace platform in Indonesia. The pioneer i believe. Dalam perjalanan sebulan setelah bergabung, saya berhasil mengajak 24 orang kolega untuk menjadi Trainer di <span className='dTextWarning RobotoBold'><b>Interskill</b></span> dan 23 rekan untuk menjadi Member. Saya juga terharu dengan visi dari <span className='dTextWarning RobotoBold'><b>Interskill</b></span> untuk memberikan kesempatan setiap orang sampai di pelosok manapun untuk tetap bisa belajar mengajar tanpa batasan waktu dan tempat. Thanks <span className='dTextWarning RobotoBold'><b>Interskill</b></span>!"},
            {name: 'Abbishallom', position: 'Yogyakarta', image: Abbishallom, description: "Hadirnya <a href='https://www.interskill.id' class='dTextWarning RobotoBold' target='_blank'>Interskill.id</a> sebagai salah satu platform belajar terutama di masa pandemi COVID-19 ini sungguh sangat membantu saya sebagai seorang mind therapist dan public trainer. Pengalaman mengadakan event webinar melalui <a href='https://www.interskill.id' class='dTextWarning RobotoBold' target='_blank'>Interskill.id</a> serasa seperti membawakan seminar dipanggung beneran. Berbagai fitur pendukungnya memungkinkan terjadinya interaksi yang baik antara panelis (pembicara) dengan attendee (peserta). Ini sangat membantu saya saat event maupun sesi konseling online. <a href='https://www.interskill.id' class='dTextWarning RobotoBold' target='_blank'>Interskill.id</a> juga memiliki kemudahan-kemudahan lain bagi peserta yang mau mencari topik pembelajaran, daftar event, sampai cara pembayarannya. Saya yakin ke depan semakin banyak trainer bisa berbagi ilmunya melalui <a href='https://www.interskill.id' class='dTextWarning RobotoBold' target='_blank'>Interskill.id</a> dan menjadi rujukan untuk kita semua. Buktikan sendiri dech, gabung <a href='https://www.interskill.id' class='dTextWarning RobotoBold' target='_blank'>Interskill.id</a> dan ikuti event-eventnya"}
        ]
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne">

                            {/* Guru-guru */}
                            <div className="dTitle">
                                <h5>
                                    <b>
                                        Apa kata guru-guru di <span className="dTextWarning">Interskill</span>?
                                    </b>
                                </h5>
                            </div>
                            <Row>
                                {dataGuru.map((value, index) => {
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
 
export default SectionFourTwo;