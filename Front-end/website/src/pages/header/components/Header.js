import React from "react"
import Logo from "./Logo"
import Logout from "./Logout"
import Profile from "./Profile"
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container"

import "../styles/Header.css"

class Header extends React.Component {


    render() {
        return (
            <header className="header-wrapper">
                <Container fluid={true}>
                    <div className="left">
                        <Logo />
                    </div>
                    <div className="right">
                        <Row className="header-right-row">
                            <Profile />
                            <Logout />
                        </Row>
                    </div>
                </Container>
            </header>
        )
    }
}

export default Header