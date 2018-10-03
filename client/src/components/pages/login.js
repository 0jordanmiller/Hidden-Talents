import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirect: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }

    handleSubmit(event) {  //how does this work? how does props go up to App.js?
        event.preventDefault();
        this.props._login(this.state.username, this.state.password)
        this.setState({
            redirect: '/'
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: this.state.redirect }} />
        } else {
            return (
                <div className='login-form'>
                    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                    <br />
                    <br />
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='black' textAlign='center'>
                                Login to your account
                        </Header>
                            <Form size='huge' id='login'>
                                <Segment stacked>
                                    <Form.Input name='username' value={this.state.username} onChange={this.handleChange} fluid icon='user' iconPosition='left' placeholder='Username' />
                                    <Form.Input name='password' value={this.state.password} onChange={this.handleChange}
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                    />
                                    <Button onClick={this.handleSubmit} content='Login' id='loginBtn' fluid size='large' />
                                </Segment>
                            </Form>

                        </Grid.Column>
                    </Grid>
                </div>
            )
        }
    }
}

export default Login;