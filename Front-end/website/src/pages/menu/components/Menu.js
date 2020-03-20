import React from "react"
import Header from "../../header/components/Header"
import Sidebar from "./Sidebar"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
import Divider from "@material-ui/core/Divider"
import Tempering from "../../tempering/components/Tempering"

class Menu extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Divider />
                <Sidebar />
                <Tempering />

            </div>
        )
    }
}

export default Menu