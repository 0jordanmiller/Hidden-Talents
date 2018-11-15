import React, { Component } from "react";
import axios from "axios";
import * as Elements from "../elements";
import userCheck from "../utils/utilities";
import { Grid, Form, Header } from "semantic-ui-react";
import API from "../utils/API";
import * as Images from "../images";

//User verify==========
class Homepage extends Component {
  constructor() {
    super();
    this.verifyUserSession = this.verifyUserSession.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchMaps = this.searchMaps.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      loggedIn: null,
      resultsIn: false,
      results: {}
    };
  }
  async verifyUserSession() {
    const userObj = await userCheck();
    this.setState({
      loggedIn: userObj.loggedIn,
      user: userObj.user
    });
  }

  //API================
  componentDidMount() {
    this.verifyUserSession();
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  searchMaps = query => {
    API.search(query)
      .then(res => {
        this.onSearch(res);
      })
      .catch(err => console.log(err));
  };

  // selectCategory() {
  //   this.setState({
  // When you click on a category, this activates and sets the search parameters
  //   })
  // }

  //Second part of the Call============
  onSearch(zipcodeArray) {
    console.log(zipcodeArray);
    axios
      .post("/search", {
        zipcodes: zipcodeArray
      })
      .then(response => {
        const promise = new Promise((resolve, reject) => {
          this.setState({
            results: response
          });
          resolve();
        });
        promise.then(() => {
          this.setState({
            resultsIn: true
          });
        });
        console.log(this.state);
      });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMaps(this.state.zipcode);
  };

  render() {
    let results;
    if (this.state.resultsIn) {
      results = this.state.results.data.map((object, index) => {
        return (
          <div>
            <Elements.SearchItem
              name={object.name}
              talent={object.talent}
              contact={object.email}
              bio={object.bio}
            />
            <br />
          </div>
        );
      });
    } else {
      results = <p>Search results go here</p>;
    }

    return (
      <div className="ui container" id="homepage">
        <Grid centered>
          <Grid.Row>
            <Header as="h1" id="title">
              HIDDEN TALENTS
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Form>
              <Elements.SearchForm
                search={this.state.zipcode}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleChange}
              />
            </Form>
          </Grid.Row>
        </Grid>
        <Grid>{results}</Grid>
      </div>
    );
  }
}

export default Homepage;
