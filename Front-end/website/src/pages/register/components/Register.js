import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Paper from "@material-ui/core/Paper";
import Logo from "../../login/components/Logo";
import Name from "./Name";
import Surname from "./Surname";
import Email from "./Email";
import Password from "./Password";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import "../styles/Register.css";
import InviteID from "./InviteID";
import { USER_REGISTER } from "../../../config";
import ErrorMessage from "./ErrorMessage";
import * as EmailValidator from "email-validator";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      password: undefined,
      name: undefined,
      surname: undefined,
      inviteID: undefined,
      repeatPassword: undefined,
      alreadyExists: undefined,
      passwordsDontMatch: undefined,
      error: undefined,
      passwordError: undefined,
      nameError: undefined,
      surnameError: undefined,
      emailError: undefined,
      invalidEmail: undefined
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSurname = this.handleSurname.bind(this);
    this.handleInviteID = this.handleInviteID.bind(this);
    this.handleRepeatPassword = this.handleRepeatPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
      emailError: undefined,
      invalidEmail: undefined
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
      passwordError: undefined
    });
  }

  handleName(e) {
    this.setState({
      name: e.target.value,
      nameError: undefined
    });
  }

  handleSurname(e) {
    this.setState({
      surname: e.target.value,
      surnameError: undefined
    });
  }

  handleInviteID(e) {
    this.setState({
      inviteID: e.target.value
    });
  }

  handleRepeatPassword(e) {
    this.setState({
      repeatPassword: e.target.value
    });
  }

  async onSubmit() {
    if (this.state.name === undefined || this.state.name === "") {
      this.setState({
        nameError: true
      });
    } else if (this.state.surname === undefined || this.state.surname === "") {
      this.setState({
        surnameError: true
      });
    } else if (this.state.email === undefined || this.state.email === "") {
      this.setState({
        emailError: true
      });
    } else if (this.state.password === undefined || this.state.password === "") {
      this.setState({
        passwordError: true
      });
    } else if (this.state.password !== this.state.repeatPassword) {
      this.setState({
        passwordsDontMatch: true
      });
    } else if (!EmailValidator.validate(this.state.email)) {
      this.setState({
        invalidEmail: true
      });
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          surname: this.state.surname
        })
      };
      const response = await fetch(USER_REGISTER, requestOptions);
      const jsonResponse = await response.json();
      if (jsonResponse.error === "User already exists") {
        this.setState({
          alreadyExists: true
        });
      } else if (response.status === 200) {
        localStorage.setItem("jwt", jsonResponse.token);
        this.setState({
          passwordsDontMatch: undefined,
          alreadyExists: undefined,
          error: undefined
        });
        this.props.history.push("/menu")
      } else {
        this.setState({
          error: true
        });
      }
    }
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
              <ErrorMessage
                passwordsDontMatch={this.state.passwordsDontMatch}
                handleError={this.state.error}
                alreadyExists={this.state.alreadyExists}
                passwordError={this.state.passwordError}
                nameError={this.state.nameError}
                surnameError={this.state.surnameError}
                emailError={this.state.emailError}
                invalidEmail={this.state.invalidEmail}
              />
              <RegisterButton handleSubmit={this.onSubmit} />
              <LoginButton />
            </Paper>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Register;
