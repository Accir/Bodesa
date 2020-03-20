import React from "react"
import Col from "react-bootstrap/Col"
import Button from "@material-ui/core/Button"
import "../styles/SaveButton.css"

class SaveButton extends React.Component {
  render() {
    return (
      <div>
        <Col lg={{ span: 12 }} className="justify-content-end d-flex">
          <Button variant="contained" color="primary" className="mt-1 mb-3" onClick={this.props.handleClick}>
            Išsaugoti
          </Button>
        </Col>
      </div>
    )
  }
}

export default SaveButton