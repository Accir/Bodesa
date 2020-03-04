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

    constructor(props) {
        super(props)

        this.state = {
            email: undefined,
            password: undefined,
        }

        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div className="login-wrapper">
                <Container className="login-page">
                    <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 2 }} xs={{ span: 12, offset: 0 }}>
                        <Paper className="input-form-paper">
                            <Logo />
                            <Username handleEmail={this.handleEmail} />
                            <Password handlePassword={this.handlePassword} />
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