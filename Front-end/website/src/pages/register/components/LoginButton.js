import React from "react"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"

class LoginButton extends React.Component {
    render() {
        return (
            <Col lg={{ span: 12 }}>
                <div className="text-center mt-3">
                    Jau turite paskyrą? <br />
                    <Link to="/">
                        Prisijunkite
                    </Link>
                </div>
            </Col>
        )
    }
}

export default LoginButton