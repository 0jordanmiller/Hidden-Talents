import React, { Component } from "react";
import { Header, Card, Icon, Image, List, Segment, Popup, Button, Divider, Modal, Grid, Container, Rail } from "semantic-ui-react";
import userCheck from "../utils/utilities";
import * as Images from "../images";

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
      <div>
        <br />

      
          <Container className='proContainer' >
            <Card fluid id='profileCard'>
             <Card.Content>
                <Image style={{ 'height': 200 }} src={Images.F} size='medium' className='proImage' floated='left' />
                <Card.Header content={this.state.user.name} as='h1' />
              
                 
                  <Rail size='mini' attached position='right'>
                    <Segment compact id='segContact'> 

                    <Popup
                      trigger={<Button icon>
                      <Icon circular name='phone' /> </Button>}
                      content={this.state.user.phone}
                      hideOnScroll
                      position='right center'
                      />

                      <br />

                      <Popup
                      trigger={<Button icon>
                      <Icon circular name='mail' /> </Button>}
                      content={this.state.user.email}
                      hideOnScroll
                      position='right center'
                      />

                       <br />

                      <Popup
                      trigger={<Button icon>
                      <Icon circular name='marker' /> </Button>}
                      content={this.state.user.zipcode}
                      hideOnScroll
                      position='right center'
                      />


                    </Segment>
                  </Rail> 
                        <Header>Bio</Header>
                      <p >
                        {this.state.user.bio}
                        </p>
                        </Card.Content>
              </Card>

              <Segment id='imageSeg' floated='top right'> 
            <Grid>
              <Grid.Row columns={2}>
              <Grid.Column>
              <Image src={Images.G}  />
                </Grid.Column>
                <Grid.Column>
              <Image src={Images.H}  />
                </Grid.Column>
                <Grid.Column>
              <Image src={Images.G}  />
                </Grid.Column>
                <Grid.Column>
              <Image src={Images.H}  />
                </Grid.Column>
                <Grid.Column>
              <Image src={Images.G}  />
                </Grid.Column>
                <Grid.Column>
              <Image src={Images.H}  />
                </Grid.Column>
                
                </Grid.Row>
            </Grid>
            </Segment>
            </Container>


            {/* <Segment > 
            <Image.Group size='mini'>
      <Image src={Images.G}  />
      <Image src={Images.H}  />
      <Image src={Images.G} />
      <Image src={Images.H}  />
    </Image.Group>
            </Segment> */}

           
       

        {/* <Card fluid id='profileCard'>        
          <Card.Content>
          <Card.Header content={this.state.user.name} as='h1' />
         
            <Image floated='left' size='medium' src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' rounded />

         
                  <Segment clearing floated='right' size='small' >
                   <Segment> textAlign='right' vertical content={this.state.user.email} as="" </Segment>  
                   <Segment> textAlign='right' vertical content={this.state.user.phone} as="" </Segment>
                   </Segment>
            <Card.Description content={this.state.user.talent} as='h3' /> 
            <Card.Description content={this.state.user.bio} as=''/>
            
          </Card.Content>
       
          <Image.Group size='small'>

            
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' rounded />

            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' rounded />

            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' rounded />

            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' rounded />


          </Image.Group>
          <Card.Content extra>
          <Header>Contact Info</Header>
            <Card.Meta content={this.state.user.email} />
            <Card.Meta content={this.state.user.phone} />
            <Card.Meta content={this.state.user.zipcode} />
          </Card.Content>
          
        </Card> */}

      </div>
    );
  }
}

export default Profile;

// <Card>
//     <Image src='../images/placeholder.png' />
//     <Card.Content>
//     <Card.Header>Profile1</Card.Header>
//     <Divider />
//     <Card.Description>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like</Card.Description>
//     {/* <Header as='h2' style={style.h2} textAlign='center'/> */}

//     <Segment.Group horizontal raised>
//     <Segment>Web Developer</Segment>
//     </Segment.Group>
//     </Card.Content>
//     <Divider />

//     <Header size='large'>Show Us Your Talent</Header>

//     <Grid container columns={3}>
//         <Grid.Column>
//             <Image src='../images/placeholder.png' />
//         </Grid.Column>
//         <Grid.Column>
//             <Image src='../images/placeholder.png' />
//         </Grid.Column>
//          <Grid.Column>
//             <Image src='../images/placeholder.png' />
//         </Grid.Column>
//     </Grid>
// </Card>