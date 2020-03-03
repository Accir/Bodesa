import React from "react"
import Col from "react-bootstrap/Col"
import TextField from "@material-ui/core/TextField"
import "../styles/Password.css"

class Password extends React.Component {
    render() {
        return (
            <Col lg={{ span: 12 }}>
                <TextField
                    label="Slaptažodis"
                    className="password-input"
                    margin="dense"
                />
            </Col>
        )
    }
}

export default Password