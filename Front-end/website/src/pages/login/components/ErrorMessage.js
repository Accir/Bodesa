import React from "react";
import Col from "react-bootstrap/Col";
import "../styles/ErrorMessage.css";

class ErrorMessage extends React.Component {
  render() {
    if (
      this.props.handleEmail ||
      this.props.handlePassword ||
      this.props.handleError ||
      this.props.handleEmptyEmail ||
      this.props.handleEmptyPassword
    ) {
      return (
        <Col lg={{ span: 12 }}>
          <div className="error-wrapper mt-3">
            {this.props.handleEmail
              ? "Naudotojas neegzistuoja"
              : this.props.handlePassword
              ? "Neteisingas slaptažodis"
              : this.props.handleError
              ? "Vidinė serverio klaida"
              : this.props.handleEmptyEmail
              ? "Neįvestas el. paštas"
              : this.props.handleEmptyPassword
              ? "Neįvestas slaptažodis"
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
