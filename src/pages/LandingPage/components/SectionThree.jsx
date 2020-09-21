import React, { Component } from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Foto3 from '../../../assets/images/foto-3.jpg';

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
                        <div className="dSection dSectionOne">
                            <div className="dTitle">
                                <h5 className="text-capitalize">
                                    <b>
                                        Mengapa Harus Menggunakan Interskill?
                                    </b>
                                </h5>
                            </div>

                            <div className="text-left mb-5">
                                <div className="mb-3" style={{height: 300}}>
                                    <div className="dBackgroundImageCenter" style={{backgroundImage: 'url(' + Foto3 + ')'}}></div>
                                </div>
                                <ol className="dList">
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <ul className="dListChecked mb-2">
                                        <li class="dChecked">Hit the gym</li>
                                        <li class="dChecked">Pay bills</li>
                                        <li class="dChecked">Meet George</li>
                                        <li class="dChecked">Buy eggs</li>
                                        <li class="dChecked">Read a book</li>
                                        <li class="dChecked">Organize office</li>
                                    </ul>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
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
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <span className="dTextWarning"><b>Interskill</b></span>.</p>
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