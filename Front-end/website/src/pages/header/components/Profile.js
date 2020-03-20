import React from "react"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import "../styles/Profile.css"
import { Link } from "react-router-dom"

class Profile extends React.Component {
    render() {
        return (
            <div className="profile-wrapper">
                <Link to="/menu" className="profile-link">
                    <PersonOutlineIcon className="profile-icon" />
                    <span className="pr-2 profile-name">
                        {this.props.handleName}
                        {" " + this.props.handleSurname}
                    </span>
                </Link>
            </div>
        )
    }
}

export default Profile