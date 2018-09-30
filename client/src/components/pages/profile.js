import React, { Component } from "react";
import { Header, Grid, Image, Card, Segment, Divider, Icon, List } from "semantic-ui-react";
import userCheck from "../utils/utilities";


class Profile extends Component {
  constructor() {
    super();
    this.verifyUserSession = this.verifyUserSession.bind(this);
    this.state = {
      loggedIn: null,
      user: {
        name: '',
        bio: '',
        talent: '',
        email: '',
        phone: '',
        zipcode: ''
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

      <Grid divided horizontal>
      
        <Grid.Row>
           <Grid.Column style={{ width: 370}}>
             <br />
              <Card style={{ width: 350 }}>
              <Card.Header  textAlign='center' content= {this.state.user.name}  as='h2' /> 
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                <Segment textAlign='center' vertical content={this.state.user.talent} as="h3" />
                <Card.Description  textAlign='left' style={{ margin: 10 }} content={this.state.user.bio} />
                 <Divider section style={{marginTop: -5}}/>
                <Card.Content extra>
                  <List>
                    <List.Item>
                     <List.Icon name='mail' />
                     <List.Content>{this.state.user.email} </List.Content> 
                    </List.Item>
                    <List.Item>
                     <List.Icon name='marker' />
                     <List.Content>{this.state.user.zipcode} </List.Content> 
                    </List.Item>
                    <List.Item>
                     <List.Icon name='phone' />
                     <List.Content>{this.state.user.phone} </List.Content> 
                    </List.Item>
                  </List>
                </Card.Content>

              </Card>
             
          </Grid.Column>

            {/* <Grid.Row style= {{width: 250, padding: 20,  }}>
                <Segment>
                    <Header>Contact Info</Header>
                </Segment>
                   <Segment  textAlign='left' vertical content={this.state.user.email} as="" />  
                   <Segment color='red'  textAlign='left' vertical content={this.state.user.phone} as="" />
                   <Segment textAlign='left' vertical content={this.state.user.zipcode} as="" />
            </Grid.Row> */}
        </Grid.Row>
        
        </Grid>
        
  
         
         
    
        
     

      
       /* <div>
       <br />
        <Header content={this.state.user.name} as="h1" />
       <Header content={this.state.user.talent} as="h1" />
        <Header content={this.state.user.email} as="h1" />
         <Header content={this.state.user.phone} as="h1" />
       <Header content={this.state.user.zipcode} as="h1" />

       </div> */
    );
  }
}

export default Profile;

