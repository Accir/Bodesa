import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Drawer from "@material-ui/core/Drawer"
import "../styles/Sidebar.css"
import ListItemText from '@material-ui/core/ListItemText'
import Divider from "@material-ui/core/Divider"



class Sidebar extends React.Component {

    render() {
        return (
            <div>
                <Drawer
                    variant="permanent"
                    className="sidenav-drawer"
                    classes={{
                        paper: "sidenav-paper"
                    }}
                >
                    <Divider />
                    <List className="sidenav-list">
                        <ListItem className="sidenav-item">
                            <ListItemText>
                                Pagrindinis
                            </ListItemText>
                        </ListItem>
                        <ListItem className="sidenav-item">
                            <ListItemText>
                                Stiklo raižymas
                            </ListItemText>
                        </ListItem>
                        <ListItem className="sidenav-item">
                            <ListItemText>
                                Stakles
                            </ListItemText>
                        </ListItem>
                        <ListItem className="sidenav-item">
                            <ListItemText>
                                Grudinimas
                            </ListItemText>
                        </ListItem>
                        <ListItem className="sidenav-item">
                            <ListItemText>
                                Bukinimas
                            </ListItemText>
                        </ListItem>
                        <ListItem className="sidenav-item">
                            <ListItemText>
                                Nustatymai
                            </ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        )
    }
}

export default Sidebar
