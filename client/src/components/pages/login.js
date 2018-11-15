import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    //how does this work? how does props go up to App.js?
    event.preventDefault();
    this.props._login(this.state.username, this.state.password);
    this.setState({
      redirect: "/"
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: this.state.redirect }} />;
    } else {
      return (
        <div>
          <div className="login-form">
            <Header as="h2" textAlign="center" id="header">
              Login to your account
            </Header>
            <Grid>
              <Grid.Row centered>
                <Form size="small" id="login">
                  <Segment>
                    <Form.Group>
                      <Form.Input
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        icon="user"
                        iconPosition="left"
                        placeholder="Username"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                      />
                    </Form.Group>
                    <Button
                      onClick={this.handleSubmit}
                      content="Login"
                      id="loginBtn"
                      size="large"
                    />
                  </Segment>
                </Form>
              </Grid.Row>
            </Grid>
            {/* <div className="axis">
              <div className="box">a</div>
              <div className="box">b</div>
              <div className="box">c</div>
            </div> */}
          </div>
        </div>
      );
    }
  }
}

export default Login;
