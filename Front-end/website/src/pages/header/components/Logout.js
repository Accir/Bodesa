import React from "react"
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import "../styles/Logout.css"
import { Link } from "react-router-dom"

class Logout extends React.Component {
    render() {
        return (
            <div className="logout-wrapper">
                <Link to="/" className="logout-link">
                    <span className="pr-2">
                        Atsijungti
                </span>
                    <ExitToAppOutlinedIcon className="logout-icon" />
                </Link>
            </div>
        )
    }
}

export default Logout