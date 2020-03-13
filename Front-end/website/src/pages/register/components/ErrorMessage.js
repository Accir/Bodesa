import React from "react";
import Col from "react-bootstrap/Col";
import "../styles/ErrorMessage.css";

class ErrorMessage extends React.Component {
  render() {
    if (
      this.props.passwordsDontMatch ||
      this.props.handleError ||
      this.props.alreadyExists ||
      this.props.passwordError ||
      this.props.nameError ||
      this.props.surnameError ||
      this.props.emailError ||
      this.props.invalidEmail
    ) {
      return (
        <Col lg={{ span: 12 }}>
          <div className="error-wrapper mt-3">
            {this.props.passwordsDontMatch
              ? "Slaptažodžiai nesutampa"
              : this.props.handleError
              ? "Vidinė serverio klaida"
              : this.props.alreadyExists
              ? "El. paštas jau yra naudojamas"
              : this.props.passwordError
              ? "Neįvestas slaptažodis"
              : this.props.nameError
              ? "Neįvestas vardas"
              : this.props.surnameError
              ? "Neįvesta pavardė"
              : this.props.emailError
              ? "Neįvestas el. paštas"
              : this.props.invalidEmail
              ? "Neteisingai įvestas el. paštas"
              : ""}
          </div>
        </Col>
      );
    } else {
      return <span></span>;
    }
  }
}

export default ErrorMessage;
