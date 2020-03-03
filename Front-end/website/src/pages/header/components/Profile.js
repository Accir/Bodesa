import React from "react"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import "../styles/Profile.css"
import { Link } from "react-router-dom"

class Profile extends React.Component {
    render() {
        return (
            <div className="profile-wrapper">
                <Link to="/" className="profile-link">
                    <span className="pr-2">
                        Vartotojas
                    </span>
                    <PersonOutlineIcon className="profile-icon" />
                </Link>
            </div>
        )
    }
}

export default Profile