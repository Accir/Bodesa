import React from "react"
import Col from "react-bootstrap/Col"
import TextField from "@material-ui/core/TextField"
import "../styles/InviteID.css"

class InviteID extends React.Component {
    render() {
        return (
            <Col lg={{ span: 12 }}>
                <TextField
                    label="Pakvietimo ID"
                    className="invite-input"
                    margin="dense"
                />
            </Col>
        )
    }
}

export default InviteID