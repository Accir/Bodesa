import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import { Paper } from "@material-ui/core"
import Logo from "./Logo"
import Username from "./Username"
import Password from "./Password"
import Register from "./Register"
import LoginButton from "./LoginButton"
import "../styles/Login.css"

class Login extends React.Component {
    render() {
        return (
            <div className="login-wrapper">
                <Container className="login-page">
                    <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 2 }} xs={{ span: 12, offset: 0 }}>
                        <Paper className="input-form-paper">
                            <Logo />
                            <Username />
                            <Password />
                            <LoginButton />
                            <Register />
                        </Paper>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default Login