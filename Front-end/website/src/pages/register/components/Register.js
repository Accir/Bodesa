import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Paper from "@material-ui/core/Paper"
import Logo from "../../login/components/Logo"
import Name from "./Name"
import Surname from "./Surname"
import Email from "./Email"
import Password from "./Password"
import RegisterButton from "./RegisterButton"
import LoginButton from "./LoginButton"
import "../styles/Register.css"
import InviteID from "./InviteID"


class Register extends React.Component {
    render() {
        return (
            <div className="register-wrapper">
                <Container className="register-page">
                    <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 2 }} xs={{ span: 12, offset: 0 }}>
                        <Paper className="input-form-paper">
                            <Logo />
                            <Name />
                            <Surname />
                            <Email />
                            <Password />
                            <InviteID />
                            {/* <ErrorMessage usernameHandle={this.state.usernameCorrect} emailHandle={this.state.emailCorrect} /> */}
                            <RegisterButton handleSubmit={this.onSubmit} />
                            <LoginButton />
                        </Paper>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default Register