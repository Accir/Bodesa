import React from "react"
import TextField from "@material-ui/core/TextField"
import "../styles/Name.css"
import Col from "react-bootstrap/Col"

class Name extends React.Component {
    render() {
        return (
            <Col lg={{ span: 12 }}>
                <TextField
                    label="Vardas"
                    className="name-input"
                    margin="dense"
                />
            </Col>
        )
    }
}

export default Name