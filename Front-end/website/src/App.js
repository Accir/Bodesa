import React from "react"
import Menu from "./pages/menu/components/Menu"
import "./App.css"
import "typeface-roboto"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from "./pages/login/components/Login"
import Register from "./pages/register/components/Register"
import { VERIFY_TOKEN } from "./config"
import { SnackbarProvider } from 'notistack';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.getSession = this.getSession.bind(this)
  }

  async getSession() {
    let result = false;
    const token = localStorage.getItem('jwt')
    if (token) {
      let queryParams = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: localStorage.getItem('jwt')
        })
      }
      let response = await fetch(VERIFY_TOKEN, queryParams)
      let responseJson = await response.json()
      if (responseJson === "JWT verified") {
        result = true
      } else {
        result = false
      }
    }
    else {
      result = false
    }
    return result
  }

  render() {
    return (
      <SnackbarProvider maxSnack={3}>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/menu" render={() => (this.getSession() ? (<Menu to="/menu" />) : <Redirect to="/" />)} />
            {/* Redirect all paths to login page */}
            <Redirect to="/" />
          </Switch>
        </Router>
      </SnackbarProvider>
    )
  }
}

export default App