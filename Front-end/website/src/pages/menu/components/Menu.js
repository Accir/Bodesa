import React from "react"
import Header from "../../header/components/Header"
import Sidebar from "./Sidebar"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
import Divider from "@material-ui/core/Divider"

class Menu extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Divider />
                <Sidebar />

            </div>
        )
    }
}

export default Menu