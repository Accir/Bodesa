import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Paper } from "@material-ui/core";
import Logo from "./Logo";
import Username from "./Username";
import Password from "./Password";
import Register from "./Register";
import LoginButton from "./LoginButton";
import "../styles/Login.css";
import { USER_LOGIN } from "../../../config";
import ErrorMessage from "./ErrorMessage";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      password: undefined,
      passwordError: undefined,
      emailError: undefined,
      error: undefined,
      emptyEmail: undefined,
      emptyPassword: undefined
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
      emptyEmail: undefined
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
      emptyPassword: undefined
    });
  }

  async onSubmit() {
    if (this.state.email === undefined || this.state.email === "") {
      this.setState({
        emptyEmail: true,
        passwordError: undefined,
        emailError: undefined,
        error: undefined
      });
    } else if (this.state.password === undefined || this.state.password === "") {
      this.setState({
        emptyPassword: true,
        passwordError: undefined,
        emailError: undefined,
        error: undefined
      });
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      };
      const response = await fetch(USER_LOGIN, requestOptions);
      const jsonResponse = await response.json();
      if (jsonResponse.error === "Access denied") {
        this.setState({
          passwordError: true,
          emailError: undefined,
          error: undefined
        });
      } else if (jsonResponse.error === "User doesn't exist") {
        this.setState({
          emailError: true,
          passwordError: undefined,
          error: undefined
        });
      } else if (response.status === 200) {
        localStorage.setItem("jwt", jsonResponse.token);
        this.setState({
          emailError: undefined,
          passwordError: undefined,
          error: undefined
        });
      } else {
        this.setState({
          error: true,
          emailError: undefined,
          passwordError: undefined
        });
      }
    }
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
              <ErrorMessage
                handlePassword={this.state.passwordError}
                handleEmail={this.state.emailError}
                handleError={this.state.error}
                handleEmptyEmail={this.state.emptyEmail}
                handleEmptyPassword={this.state.emptyPassword}
              />
              <LoginButton handleSubmit={this.onSubmit} />
              <Register />
            </Paper>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Login;
