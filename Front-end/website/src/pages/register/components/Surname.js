import React from "react"
import TextField from "@material-ui/core/TextField"
import "../styles/Surname.css"
import Col from "react-bootstrap/Col"

class Surname extends React.Component {
    render() {
        return (
            <Col lg={{ span: 12 }}>
                <TextField
                    label="Pavardė"
                    className="surname-input"
                    margin="dense"
                />
            </Col>
        )
    }
}

export default Surname