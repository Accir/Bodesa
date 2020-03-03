import React from "react"
import Menu from "./pages/menu/components/Menu"
import "./App.css"
import "typeface-roboto"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./pages/login/components/Login"
import Register from "./pages/register/components/Register"

class App extends React.Component {


  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/menu" component={Menu} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>

      // <div className="app-wrapper">
      //   <Header />
      // </div>
    )
  }
}

export default App