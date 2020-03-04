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

    constructor(props) {
        super(props)

        this.state = {
            email: undefined,
            password: undefined,
            name: undefined,
            surname: undefined,
            inviteID: undefined,
            repeatPassword: undefined,
        }
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleSurname = this.handleSurname.bind(this)
        this.handleInviteID = this.handleInviteID.bind(this)
        this.handleRepeatPassword = this.handleRepeatPassword.bind(this)
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

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSurname(e) {
        this.setState({
            surname: e.target.value
        })
    }

    handleInviteID(e) {
        this.setState({
            inviteID: e.target.value
        })
    }

    handleRepeatPassword(e) {
        this.setState({
            repeatPassword: e.target.value
        })
    }

    render() {
        return (
            <div className="register-wrapper">
                <Container className="register-page">
                    <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 2 }} xs={{ span: 12, offset: 0 }}>
                        <Paper className="input-form-paper">
                            <Logo />
                            <Name handleName={this.handleName} />
                            <Surname handleSurname={this.handleSurname} />
                            <Email handleEmail={this.handleEmail} />
                            <Password handlePassword={this.handlePassword} handleRepeatPassword={this.handleRepeatPassword} />
                            <InviteID handleInviteID={this.handleInviteID} />
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