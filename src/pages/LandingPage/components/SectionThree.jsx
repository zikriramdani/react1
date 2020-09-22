import React, { Component } from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Foto3 from '../../../assets/images/foto-3.jpg';

class SectionThree extends Component {
    render() {
        const elements = [
            {features: 'Zoom Meeting & Zoom Webinar Option', interskill: 'Available', zoom: 'Available'},
            {features: 'Panelist Setting', interskill: 'Available', zoom: 'None'},
            {features: 'Schedule Notification', interskill: 'Available', zoom: 'Available'},
            {features: 'Event Invitation', interskill: 'Available', zoom: 'Available'},
            {features: 'Event Security System', interskill: 'Interskill Security System', zoom: 'Un-Invited Guest Possibility'},
            {features: 'Email Event Reminder', interskill: 'Available', zoom: 'None'},
            {features: 'Marketing System', interskill: 'Market Place', zoom: 'None'},
            {features: 'Social Media Promotion', interskill: 'Available', zoom: 'None'},
            {features: 'Payment Systeem (CC, TT, Gopay, etc)', interskill: 'Available', zoom: 'None'},
            {features: 'E-Wallet', interskill: 'Available', zoom: 'None'},
            {features: 'Revenue Report', interskill: 'Available', zoom: 'None'},
            {features: 'Transaction History', interskill: 'Available', zoom: 'None'},
            {features: 'Payment History', interskill: 'Available', zoom: 'None'},
            {features: 'Early Bird Event Promo Setting', interskill: 'Available', zoom: 'None'},
            {features: 'Voucher Event Promo Setting', interskill: 'Available', zoom: 'None'},
            {features: 'Event Artificial Intelligent System (AI)', interskill: 'Available', zoom: 'None'},
            {features: 'Trainer Rating System', interskill: 'Available', zoom: 'None'},
            {features: 'Trainers Community', interskill: 'Available', zoom: 'None'},
            {features: 'Follower Management', interskill: 'Available', zoom: 'None'},
            {features: 'Room Management', interskill: 'Available', zoom: 'None'},
            {features: 'Trainer Profile', interskill: 'Available', zoom: 'None'},
            {features: 'Preview Video', interskill: 'Available', zoom: 'None'},
            {features: 'Mobile Push Notification', interskill: 'Available', zoom: 'None'},
            {features: 'Tell a friend', interskill: 'Available', zoom: 'None'},
            {features: 'Articles', interskill: 'Available', zoom: 'None'},
            {features: 'Customer Service Support For Trainer and Participant', interskill: 'Available', zoom: 'None'},
            {features: 'News Notification', interskill: 'Available', zoom: 'None'},
            {features: 'Free Event Trial Website', interskill: 'Available', zoom: 'None'}
        ];
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="dSection dSectionOne">
                            <div className="dTitle">
                                <h5 className="text-capitalize">
                                    <b>
                                        Mengapa Harus Menggunakan Interskill?
                                    </b>
                                </h5>
                            </div>

                            <div className="text-left mb-5">
                                <div className="dBoxBackgroundImage mb-3">
                                    <div className="dBackgroundImageCenter" style={{backgroundImage: 'url(' + Foto3 + ')'}}></div>
                                </div>
                                <ol className="dList">
                                    <li><span className="dTextWarning RobotoBold">Interskill</span> Gratis – Bisa live menggunakan zoom meeting/zoom webinar > 40 menit dan > 100 peserta.</li>
                                    <li>Tidak perlu membayar bulanan zoom maupun live platform lainnya</li>
                                    <li>Walaupun Meeting ID disebar, participant yang tidak register di <span className="dTextWarning RobotoBold">Interskill</span> tidak bisa join</li>
                                    <li>Participant yang tidak diundang tidak bisa masuk, kalau zoom biasa, mereka bisa masuk ke waiting room dan host/co host harus memvalidasi satu persatu.</li>
                                    <li>Mengurangi biaya SDM untuk melakukan hal Administrasi manual yang dibutuhkan trainer:</li>

                                    <ul className="dListChecked mb-2">
                                        <li class="dChecked">Mencatat yang bersedia hadir</li>
                                        <li class="dChecked">Mencatat/meminta peserta untuk menuliskan nama, no  telepon, dan alamat email</li>
                                        <li class="dChecked">Mencatat siapa yang sudah membayar event</li>
                                        <li class="dChecked">Mengirimkan reminder email/mobile phone untuk event yang akan mulai</li>
                                        <li class="dChecked">Memastikan yang masuk event, menjadi ke event adalah yang sudah membayar. (Bayangkan jika peserta lebih dari 100)</li>
                                        <li class="dChecked">Mengirimkan informasi mengenai event terbaru kita ke semua member kita</li>
                                    </ul>
                                    <li>Bisa memilih untuk menggunakan zoom webinar atau zoom meeting. Dimana zoom webinar adalah versi yang lebih mahal dibanding zoom meeting.</li>
                                </ol>
                            </div>

                            <div className="dTitle">
                                <h5 className="text-capitalize">
                                    <b>
                                        Fitur Apa Saja Yang Akan Anda Dapatkan di <span className="dTextWarning">Interskill</span>?
                                    </b>
                                </h5>
                            </div>
                            <div>
                                <p>28 Fitur yang akan Anda Dapatkan sekaligus dari Platform Edukasi <span className="dTextWarning"><b>Interskill</b></span>.</p>
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
                            <div className="text-left">
                                <p>
                                    Fitur-fitur yang ada di <span className="dTextWarning RobotoBold"><b>Interskill</b></span> sudah lengkap, lalu, apa yang menghambat Anda untuk mulai membuat Event Anda yg Pertama? Mungkin ini Masalah Anda…
                                </p>
                                <ol className="dList">
                                    <li className="mb-4">
                                        Saya harus mulai dari mana?<br></br>
                                        Anda dapat klik tombol Saya Mau Mendaftar, kemudian Anda Dapat Mendaftar sebagai Member <span className="dTextWarning RobotoBold"><b>Interskill</b></span> dan kemudian upgrade menjadi Trainer
                                    </li>
                                    <li className="mb-4">
                                        Saya gaptek (gagap teknologi)<br></br>
                                        Di <span className="dTextWarning RobotoBold"><b>Interskill</b></span>, setelah Anda Mendaftar menjadi Trainer, Anda dapat mengakses Video-Video Tutorial yang lengkap di Library <span className="dTextWarning RobotoBold"><b>Interskill</b></span> kapan saja untuk belajar step by step mulai dari bagaimana cara membuat event, bagaimana cara “go live” pada saat akan memulai event Anda, sampai bagaimana cara menggunakan fitur-fitur yang ada di <span className="dTextWarning RobotoBold"><b>Interskill</b></span>. 
                                        Bahkan Pemula yang baru mulai buat Event juga bisa.
                                    </li>
                                    <li className="mb-4">
                                        Saya sudah belajar Video Tutorial di Library <span className="dTextWarning RobotoBold"><b>Interskill</b></span>, tapi masih ada yang saya belum mengerti
                                        Di <span className="dTextWarning RobotoBold"><b>Interskill</b></span>.<br></br>kami mempunyai tim support yang akan membantu Anda apabila Anda menemukan kendala ataupun ada yang masih tidak dimengerti.
                                    </li>
                                </ol>
                                <p>
                                    Anda cukup klik tombol Whatsapp di kanan bawah website Interskill, maka tim support kami akan dengan senang hati membantu Anda.
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
 
export default SectionThree;