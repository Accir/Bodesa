import React from "react"
import Logo from "./Logo"
import Logout from "./Logout"
import Profile from "./Profile"
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container"

import "../styles/Header.css"

class Header extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: undefined,
            surname: undefined
        }

        this.onLogout = this.onLogout.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    onLogout() {
        localStorage.removeItem("jwt");
    }
    componentDidMount() {
        let jwt = require('jsonwebtoken')
        let token = localStorage.getItem('jwt')

        try {
            if (token) {
                let decoded = jwt.decode(token)
                this.setState({
                    name: decoded.name,
                    surname: decoded.surname
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <header className="header-wrapper">
                <Container fluid={true}>
                    <div className="left">
                        <Logo />
                    </div>
                    <div className="right">
                        <Row className="header-right-row">
                            <Profile handleName={this.state.name} handleSurname={this.state.surname} />
                            <Logout handleLogout={this.onLogout} />
                        </Row>
                    </div>
                </Container>
            </header>
        )
    }
}

export default Header