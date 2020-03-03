import React from "react"
import LogoImg from "../../../images/bodesa.png"
import "../styles/Logo.css"
import { Link } from "react-router-dom"

class Logo extends React.Component {
    render() {
        return (
            <Link to="/">
                <div className="logo-wrapper">
                    <img className="img-fluid header-logo" src={LogoImg} alt="header logo" />
                </div>
            </Link>
        )
    }
}

export default Logo