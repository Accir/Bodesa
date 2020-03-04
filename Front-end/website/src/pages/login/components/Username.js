import React from "react"
import Col from "react-bootstrap/Col"
import TextField from "@material-ui/core/TextField"
import "../styles/Username.css"

class Username extends React.Component {
    render() {
        return (
            <Col lg={{ span: 12 }}>
                <TextField
                    label="El. paštas"
                    className="email-input"
                    margin="dense"
                    onChange={this.props.handleEmail}
                />
            </Col>
        )
    }
}

export default Username