import React from "react";
import "../styles/Table.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TemperingContents from "./TemperingContents";
import Divider from "@material-ui/core/Divider";
import SaveButton from "./SaveButton";
import { CUTTING_DATA, SAVE_CUTTING_DATA } from "../../../config";
import { withSnackbar } from "notistack";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperArray: [],
      insulateArray: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleThicChange = this.handleThicChange.bind(this);
    this.handleProdTypeChange = this.handleProdTypeChange.bind(this);
    this.handleUnitsChange = this.handleUnitsChange.bind(this);
    this.handleCoefChange = this.handleCoefChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  async handleSave() {
    var tempArray = this.state.temperArray.map(item => {
      return { ...item, id: undefined, tempering: true };
    });
    var tempArray2 = this.state.insulateArray.map(item => {
      return { ...item, id: undefined, tempering: false };
    });
    var data = tempArray.concat(tempArray2);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ machineId: this.props.item.id, data })
    };
    const response = await fetch(SAVE_CUTTING_DATA, requestOptions);
    const responseJson = await response.json();
    if (response.status === 200 && responseJson.error === undefined) {
      this.props.enqueueSnackbar("Išsaugota", {
        variant: "success",
        anchorOrigin: {
          horizontal: "center",
          vertical: "bottom"
        }
      });
    } else if (responseJson.error === "Invalid input") {
      this.props.enqueueSnackbar("Neteisinga įvestis", {
        variant: "error",
        anchorOrigin: {
          horizontal: "center",
          vertical: "bottom"
        }
      });
    } else if (response.status === 500) {
      this.props.enqueueSnackbar("Vidinė serverio klaida", {
        variant: "error",
        anchorOrigin: {
          horizontal: "center",
          vertical: "bottom"
        }
      });
    } else {
      this.props.enqueueSnackbar("Nežinoma klaida", {
        variant: "error",
        anchorOrigin: {
          horizontal: "center",
          vertical: "bottom"
        }
      });
    }
  }

  async componentDidMount() {
    var tempArray;
    var tempArray2;
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const response = await fetch(CUTTING_DATA + this.props.item.id, requestOptions);
    const responseJson = await response.json();
    // Daryti kazka jei erroras
    if (responseJson.error === undefined) {
      tempArray = responseJson
        .filter(item => item.tempering === true)
        .map((item, key) => {
          return { id: key, thic: item.glassThickness, prodType: item.productionType, units: item.units, coef: item.cuttingCoefficient };
        });
      tempArray2 = responseJson
        .filter(item => item.tempering === false)
        .map((item, key) => {
          return { id: key, thic: item.glassThickness, prodType: item.productionType, units: item.units, coef: item.cuttingCoefficient };
        });
      if (tempArray.length === 0) {
        tempArray.push({ id: 0, thic: "", prodType: "", units: "", coef: "" });
      }
      if (tempArray2.length === 0) {
        tempArray2.push({ id: 0, thic: "", prodType: "", units: "", coef: "" });
      }
      this.setState({
        temperArray: tempArray,
        insulateArray: tempArray2
      });
    }
  }

  handleCoefChange(value, key, event) {
    var tempArray = this.state.temperArray;
    var tempArray2 = this.state.insulateArray;
    if (value === 1) {
      tempArray = tempArray.map(item => {
        if (item.id === key) {
          if (event.target.value < 0) {
            item.coef = 0;
          } else {
            item.coef = event.target.value;
          }
        }
        return item;
      });
      this.setState({
        temperArray: tempArray
      });
    } else if (value === 2) {
      tempArray2 = tempArray2.map(item => {
        if (item.id === key) {
          if (event.target.value < 0) {
            item.coef = 0;
          } else {
            item.coef = event.target.value;
          }
        }
        return item;
      });
      this.setState({
        insulateArray: tempArray2
      });
    }
  }

  handleUnitsChange(value, key, event) {
    var tempArray = this.state.temperArray;
    var tempArray2 = this.state.insulateArray;
    if (value === 1) {
      tempArray = tempArray.map(item => {
        if (item.id === key) {
          if (event.target.value < 0) {
            item.units = 0;
          } else {
            item.units = event.target.value;
          }
        }
        return item;
      });
      this.setState({
        temperArray: tempArray
      });
    } else if (value === 2) {
      tempArray2 = tempArray2.map(item => {
        if (item.id === key) {
          if (event.target.value < 0) {
            item.units = 0;
          } else {
            item.units = event.target.value;
          }
        }
        return item;
      });
      this.setState({
        insulateArray: tempArray2
      });
    }
  }

  handleProdTypeChange(value, key, event) {
    var tempArray = this.state.temperArray;
    var tempArray2 = this.state.insulateArray;
    if (value === 1) {
      tempArray = tempArray.map(item => {
        if (item.id === key) {
          item.prodType = event.target.value;
        }
        return item;
      });
      this.setState({
        temperArray: tempArray
      });
    } else if (value === 2) {
      tempArray2 = tempArray2.map(item => {
        if (item.id === key) {
          item.prodType = event.target.value;
        }
        return item;
      });
      this.setState({
        insulateArray: tempArray2
      });
    }
  }

  handleThicChange(value, key, event) {
    var tempArray = this.state.temperArray;
    var tempArray2 = this.state.insulateArray;

    if (value === 1) {
      tempArray = tempArray.map(item => {
        if (item.id === key) {
          item.thic = event.target.value;
        }
        return item;
      });
      this.setState({
        temperArray: tempArray
      });
    } else if (value === 2) {
      tempArray2 = tempArray2.map(item => {
        if (item.id === key) {
          item.thic = event.target.value;
        }
        return item;
      });
      this.setState({
        insulateArray: tempArray2
      });
    }
  }

  handleDelete(key, value) {
    var tempArray = this.state.temperArray;
    var tempArray2 = this.state.insulateArray;
    // temper row
    if (value === 1) {
      if (tempArray.length > 1) {
        tempArray.splice(
          tempArray.findIndex(function(i) {
            return i.id === key;
          }),
          1
        );
        this.setState({
          temperArray: tempArray
        });
        // Delete all items if last row
      } else {
        tempArray = tempArray.map(item => {
          return { ...item, id: key, thic: "", prodType: "", units: "", coef: "" };
        });
        this.setState({
          temperArray: tempArray
        });
      }
      // insulate row
    } else if (value === 2) {
      if (tempArray2.length > 1) {
        tempArray2.splice(
          tempArray2.findIndex(function(i) {
            return i.id === key;
          }),
          1
        );
        this.setState({
          insulateArray: tempArray2
        });
        // Delete all items if last row
      } else {
        tempArray2 = tempArray2.map(item => {
          return { ...item, id: key, thic: "", prodType: "", units: "", coef: "" };
        });
        this.setState({
          insulateArray: tempArray2
        });
      }
    }
  }

  handleAdd(key, value) {
    var tempArray = this.state.temperArray;
    var tempArrayLength = tempArray.length + 1;
    var tempArray2 = this.state.insulateArray;
    var tempArray2Length = tempArray2.length + 1;
    // temper row, reset id's each iteration
    if (value === 1) {
      tempArray.push({ id: tempArrayLength, thic: "", prodType: "", units: "", coef: "" });
      tempArray = this.state.temperArray.map((item, key) => {
        return { ...item, id: key };
      });
      this.setState({
        temperArray: tempArray
      });
      // insulate row, reset id's each iteration
    } else if (value === 2) {
      tempArray2.push({ id: tempArray2Length, thic: "", prodType: "", units: "", coef: "" });
      tempArray2 = this.state.insulateArray.map((item, key) => {
        return { ...item, id: key };
      });
      this.setState({
        insulateArray: tempArray2
      });
    }
  }

  render() {
    const temperingLastIndex = this.state.temperArray.length - 1;
    const insulateLastIndex = this.state.insulateArray.length - 1;
    // Map tempering contents with last item known
    const temperingArray = this.state.temperArray.map((item, key) => {
      if (key === temperingLastIndex) {
        return (
          <TemperingContents
            key={item.id}
            item={item}
            lastItem={true}
            tempering={true}
            handleDelete={this.handleDelete}
            handleAdd={this.handleAdd}
            handleThicChange={this.handleThicChange}
            handleProdTypeChange={this.handleProdTypeChange}
            handleUnitsChange={this.handleUnitsChange}
            handleCoefChange={this.handleCoefChange}
          />
        );
      } else {
        return (
          <TemperingContents
            key={item.id}
            item={item}
            lastItem={false}
            tempering={true}
            handleDelete={this.handleDelete}
            handleAdd={this.handleAdd}
            handleThicChange={this.handleThicChange}
            handleProdTypeChange={this.handleProdTypeChange}
            handleUnitsChange={this.handleUnitsChange}
            handleCoefChange={this.handleCoefChange}
          />
        );
      }
    });
    // Map insulating contents with last item known
    const insulatingArray = this.state.insulateArray.map((item, key) => {
      if (key === insulateLastIndex) {
        return (
          <TemperingContents
            key={item.id}
            item={item}
            lastItem={true}
            insulating={true}
            handleDelete={this.handleDelete}
            handleAdd={this.handleAdd}
            handleThicChange={this.handleThicChange}
            handleProdTypeChange={this.handleProdTypeChange}
            handleUnitsChange={this.handleUnitsChange}
            handleCoefChange={this.handleCoefChange}
          />
        );
      } else {
        return (
          <TemperingContents
            key={item.id}
            item={item}
            lastItem={false}
            insulating={true}
            handleDelete={this.handleDelete}
            handleAdd={this.handleAdd}
            handleThicChange={this.handleThicChange}
            handleProdTypeChange={this.handleProdTypeChange}
            handleUnitsChange={this.handleUnitsChange}
            handleCoefChange={this.handleCoefChange}
          />
        );
      }
    });
    return (
      <div className="table-wrapper">
        <Container fluid>
          <div className="table-title">
            <b>{this.props.item.name}</b> <br />
            {this.props.item.type}
          </div>
          <Row>
            <Col lg={{ span: 1 }} className="tempering-col">
              Grūdinimas
            </Col>
            <Col lg={{ span: 11 }} className="wrapper-col">
              {temperingArray}
            </Col>
          </Row>
          <Divider className="table-divider" />
          <Row>
            <Col lg={{ span: 1 }} className="insulating-glass-col">
              Stiklo paketams
            </Col>
            <Col lg={{ span: 11 }} className="insulating-wrapper-col">
              {insulatingArray}
            </Col>
          </Row>
          <Row className="justify-content-end">
            <SaveButton handleClick={this.handleSave} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default withSnackbar(Table);
