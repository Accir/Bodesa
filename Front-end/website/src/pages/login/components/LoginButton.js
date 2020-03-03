import React from "react"
import Col from "react-bootstrap/Col"
import Button from "@material-ui/core/Button"
import "../styles/LoginButton.css"

class LoginButton extends React.Component {
    render() {
        return (
            <div>
                <Col lg={{ span: 12 }}>
                    <Button variant="contained" color="primary" className="login-button mt-3">
                        Prisijungti
                    </Button>
                </Col>
            </div>
        )
    }
}

export default LoginButton