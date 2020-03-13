import React from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    return (
      <Col lg={{ span: 12 }}>
        <div className="text-center mt-3">
          Neturite paskyros? <br />
          <Link to="/register">Užsiregistruokite</Link>
        </div>
      </Col>
    );
  }
}

export default Register;
