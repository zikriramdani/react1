import React, { Component } from "react";
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './css/squeze.scss';

import VideoCover from '../../assets/images/video-cover.png'

// export const Index: FC = () => {
class Index extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            isLoading: false,
            fields: {},
            errors: {}
        }
    }

    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // Nama
        if(!fields["nama"]){
           formIsValid = false;
           errors["nama"] = "Masukkan nama Anda";
        }
  
        if(typeof fields["nama"] !== "undefined"){
           if(!fields["nama"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["nama"] = "Only letters";
           }        
        }
   
        // Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Masukkan email Anda";
        }
  
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email tidak valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }

    handleChange = (field, e) => {         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    handleSubmit(e) {
        this.state.isLoading = true;
        e.preventDefault();
        if(this.handleValidation()){
            alert("Form submitted");
            this.state.isLoading = false;
        }else{
            alert("Form has errors.")
            this.state.isLoading = false;
        }
    }

    render() {
        return (
            <div className="dBodySqueze">
                <div className="dTopbarSqueze text-center">
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="text-uppercase my-4">
                                    <h3>
                                        <b>
                                            <span className="dTextWarning dBlink">
                                                <i className="fa fa-exclamation-triangle text-warning" aria-hidden="true"></i> GRATIS VIDEO TRAINING
                                            </span> YANG MEMBONGKAR<br></br>STRATEGI & FITUR ONLINE YANG WAJIB DIMILIKI TRAINER<br></br>DI MASA PANDEMI DAN MASA YANG AKAN DATANG
                                        </b>
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md={8}>
                                <div className="dAlertSqueze mb-5">
                                    <h5 className="mb-0">
                                        Daftar sekarang dan <span className="dTextWarning">dapatkan Strategi & Fitur Online terbaru</span> yang <span className="dTextWarning">SIAP</span> dan <span className="dTextWarning">MUDAH</span> diaplikasikan <span className="dTextWarning">(BAHKAN untuk PEMULA)</span>.
                                    </h5>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="dContentSqueze">
                    <Container fluid>
                        <Row>
                            <Col xs={12} md={6} className="d-flex align-self-center">
                                <div>
                                    <Image src={VideoCover} className="w-100"/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div>
                                    <p>
                                        Silahkan isi formulir di bawah untuk mendapatkan<br></br>
                                        <b><span className="dTextWarning"><u>GRATIS Video Training</u></span></b> Anda dan video akan<br></br>
                                        langsung dikirimkan ke email Anda.
                                    </p>
                                    <div>
                                        <Form noValidate onSubmit= {this.handleSubmit.bind(this)}>
                                            <Form.Group controlId="formBasicNama">
                                                <Form.Control onChange={this.handleChange.bind(this, "nama")} value={this.state.fields["nama"]} name="nama" className="dInputGrey" type="text" placeholder="Nama" />
                                                <small className="text-danger">{this.state.errors["nama"]}</small>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control 
                                                onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}
                                                name="email" className="dInputGrey" type="email" placeholder="Email" />
                                                <small className="text-danger">{this.state.errors["email"]}</small>
                                            </Form.Group>
                                            <div className="px-4 mb-2">
                                                <Button className="dButtonDanger" variant="danger" type="submit" block disabled={this.state.isLoading}>
                                                    {this.state.isLoading ? 'Loading…' : 'Download Video Gratis Saya'}
                                                </Button>
                                            </div>
                                            <p className="text-center">Video akan langsung dikirim ke email Anda secara otomatis.</p>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="dFooterSqueze">
                    <Container fluid>
                        <Row>
                            <Col className="text-center p-3">
                                <p className="mb-0">
                                    <b>INTERSKILL</b>
                                    <br></br>
                                    Copyright 2020. All Rights Reserved
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
 
export default Index;