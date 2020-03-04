import React from "react"
import Col from "react-bootstrap/Col"
import TextField from "@material-ui/core/TextField"

class Password extends React.Component {
    render() {
        return (
            <div>
                <Col lg={{ span: 12 }}>
                    <TextField
                        label="Slaptažodis"
                        className="password-input"
                        margin="dense"
                        onChange={this.props.handlePassword}
                    />
                </Col>
                <Col lg={{ span: 12 }}>
                    <TextField
                        label="Pakartokite slaptažodį"
                        className="password-input"
                        margin="dense"
                        onChange={this.props.handleRepeatPassword}
                    />
                </Col>
            </div>
        )
    }
}

export default Password