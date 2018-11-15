import React, { Component } from "react";
import { Header, Card, Image, Container, Grid } from "semantic-ui-react";
import userCheck from "../utils/utilities";
import * as Images from "../images";

class Profile extends Component {
  constructor() {
    super();
    this.verifyUserSession = this.verifyUserSession.bind(this);
    this.state = {
      loggedIn: null,
      user: {
        name: "",
        bio: "",
        talent: "",
        email: "",
        phone: "",
        zipcode: ""
      }
    };
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
    console.log(this.state.user.name);
  }

  render() {
    return (
      <div>
        <Container className="profile" style={{ "background-color": "white" }}>
          <Grid>
            <Grid.Row>
              <Grid.Column width="4">
                <Image src={Images.Sunglasses} />
              </Grid.Column>
              <Grid.Column width="12">
                <Header as="h2">{this.state.user.name}</Header>
                <Header as="h3">Talents:</Header>
                <p>{this.state.user.talent}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Profile;

{
  /* <Card fluid id="profileCard">
  <Image
    style={{ height: 200 }}
    src={Images.E}
    size="medium"
    className="proImage"
  />

  <Card.Content>
    <Header content={this.state.user.name} as="h2" id="h2" />
    <Header as="h5" id="h5">
      Talent:
            </Header>
    <p>{this.state.talent}</p>
    <Header as="h4" id="h4">
      Contact Info:
            </Header>
    <p>{this.state.phone}</p>
    <p>{this.state.email}</p>
    <Header id="header">Bio:</Header>
    <p>{this.state.user.bio}</p>


  </Card.Content>
</Card> */
}
