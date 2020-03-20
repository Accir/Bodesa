import React from "react"
import "../styles/TemperingContents.css"
import FormControl from "@material-ui/core/FormControl"
import MenuItem from "@material-ui/core/MenuItem"
import { InputLabel } from "@material-ui/core"
import Select from "@material-ui/core/Select"
import Input from "@material-ui/core/Input"
import AddIcon from '@material-ui/icons/Add';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

class TemperingContents extends React.Component {
  render() {
    const key = this.props.item.id
    var value = 0
    if (this.props.tempering === true) {
      value = 1
    } else if (this.props.insulating) {
      value = 2
    }
    return (
      <div className="contents-wrapper">
        <Row>
          <Col lg={{ span: 3 }} className="thickness-col">
            <FormControl className="thickness-form">
              <InputLabel className="thickness-label">Stiklo storis</InputLabel>
              <Select
                value={this.props.item.thic}
                onChange={(event) => (this.props.handleThicChange(value, key, event))}
              >
                <MenuItem value={3}>3 mm</MenuItem>
                <MenuItem value={4}>4 mm</MenuItem>
              </Select>
            </FormControl>
          </Col>
          <Col lg={{ span: 5 }} className="production-type-col">
            <FormControl className="production-type-form">
              <InputLabel className='production-type-label'>Produkcijos tipas</InputLabel>
              <Select
                value={this.props.item.prodType}
                onChange={(event) => (this.props.handleProdTypeChange(value, key, event))}
              >
                <MenuItem value={"Test 1"}>Test 1</MenuItem>
                <MenuItem value={"Test 2"}>Test 2</MenuItem>
              </Select>
            </FormControl>
          </Col>
          <Col lg={{ span: 1 }} className="units-col">
            <FormControl className="units-form">
              <InputLabel className="units-label">Vnt.</InputLabel>
              <Input
                type="number"
                value={this.props.item.units}
                onChange={(event) => (this.props.handleUnitsChange(value, key, event))}
              />
            </FormControl>
          </Col>
          <Col lg={{ span: 2 }} className="coef-col">
            <FormControl className='coef-text-field'>
              <InputLabel className="coef-label">Suraižymo koeficientas</InputLabel>
              <Input
                className="coef-input"
                type="number"
                value={this.props.item.coef}
                onChange={(event) => (this.props.handleCoefChange(value, key, event))}
              />
            </FormControl>
          </Col>
          <Col lg={{ span: 1 }} className="add-col">
            {this.props.lastItem ? <div><DeleteOutlineIcon className="delete-icon" onClick={() => this.props.handleDelete(key, value)} /> <AddIcon className="add-icon" onClick={() => this.props.handleAdd(key, value)} /> </div> : <DeleteOutlineIcon className="delete-icon" onClick={() => this.props.handleDelete(key, value)} />}
          </Col>
        </Row>
      </div>
    )
  }
}

export default TemperingContents