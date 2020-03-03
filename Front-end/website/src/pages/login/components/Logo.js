import React from "react"
import LogoImg from "../../../images/bodesa.png"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import "../styles/Logo.css"

class Logo extends React.Component {
    render() {
        return (
            <Container className="remove-padding">
                <Col lg={{ span: 10, offset: 1 }} className="remove-padding">
                    <div className="login-logo-wrapper">
                        <img className="img-fluid" alt="" src={LogoImg} />
                    </div>
                </Col>
            </Container>
        )
    }
}

export default Logo