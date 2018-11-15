import React, { Component } from "react";
import axios from "axios";
// import Homepage from './components/pages/homepage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components and Pages
import userCheck from "./components/utils/utilities";
import * as Pages from "./components/pages";
import * as Elements from "./components/elements";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null
    };
    this._login = this._login.bind(this);
    this._logout = this._logout.bind(this);
    this.verifyUserSession = this.verifyUserSession.bind(this);
  }
  componentDidMount() {
    this.verifyUserSession();
  }

  async verifyUserSession() {
    const userObj = await userCheck();

    this.setState({
      loggedIn: userObj.loggedIn,
      user: userObj.user
    });
  }

  _login(username, password) {
    axios
      .post("/auth/login", {
        username,
        password
      })
      .then(response => {
        if (response.status === 200) {
          this.verifyUserSession();
        }
      });
  }

  _logout(event) {
    event.preventDefault();
    axios.post("/auth/logout").then(response => {
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: {
            name: "",
            bio: "",
            talent: "",
            email: "",
            phone: "",
            zipcode: ""
          }
        });
      }
    });
  }

  // modalDimmer () {
  //   state = { open: false }

  //   show = dimmer => () => this.setState({ dimmer, open: true})
  //   close = () => this.setState({ open: false })
  // }

  render() {
    return (
      <Router>
        <div>
          <div className="ui container">
            <Elements.Navbar
              isLoggedIn={this.state.loggedIn}
              _logout={this._logout}
            />
          </div>
          <div className="ui container" id="topdiv">
            <Switch>
              <Route exact path="/" component={Pages.Homepage} />
              <Route
                exact
                path="/profile"
                render={() => <Pages.Profile userData={this.state} />}
              />
              <Route exact path="/register" render={() => <Pages.Register />} />
              <Route
                exact
                path="/login"
                render={() => <Pages.Login _login={this._login} />}
              />
              <Route component={Pages.NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
