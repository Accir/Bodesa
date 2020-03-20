import React from "react"
import Table from "./Table"
import "../styles/Tempering.css"
import Container from "react-bootstrap/Container"
import { MACHINES } from "../../../config"

class Tempering extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      tableArray: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  async componentDidMount() {
    var tableArray
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
    const response = await fetch(MACHINES + "1", requestOptions)
    const responseJson = await response.json()
    // Daryti kazka jei erroras
    if (responseJson.error === undefined) {
      tableArray = await responseJson.map(item => {
        return { id: item.id, name: item.name, type: item.type }
      })
      this.setState({
        tableArray: tableArray
      })
    }
    console.log(this.state.tableArray)
  }

  render() {
    const tableMap = this.state.tableArray.map((item, key) => {
      return (
        <Table key={key} item={item} />
      )
    })
    return (
      <div className="tempering-wrapper mb-4">
        <Container fluid>
          {tableMap}
        </Container>
      </div>
    )
  }
}

export default Tempering