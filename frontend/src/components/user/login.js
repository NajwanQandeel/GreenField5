import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import './LogIn.css'



class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userMail: '',
      userPass: '',
      token: ''
    }
    this.changePassword = this.changePassword.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  changeState = () => {
    this.setState({
      login: !this.state.login
    });
  };

  changePassword(e) {
    this.setState({ userPass: e.target.value })
  }

  changeEmail(e) {
    this.setState({ userMail: e.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })

      .then(response => response.json())
      .then((data) => {
        localStorage.setItem("jwt-auth", data.token)

        console.log('Success:', data);
        window.location.href = '/trips'
      })

      .catch(err => {
        console.error(err);
      });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/sign-up', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })

      .then(response => response.json())
      .then((data) => {


        console.log('Success:', data);
        window.location.href = '/sign-up'
      })

      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div >
        <div>
        
        </div>
        <Typography component="h1" variant="h3" align="center" id="title"> Login</Typography><br />
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="40vh">

          <form onSubmit={this.onSubmit} id="form">
            <FormControl margin="normal" id="control" >
              <TextField
                required
                id="email"
                name="email"
                type="email"
                value={this.state.userMail}
                onChange={this.changeEmail}
                label="Email" variant="outlined"
              />
            </FormControl><br />
            <FormControl margin="normal" >
              <TextField
                required
                id="password"
                name="password"
                type="Password"
                value={this.state.userPass}
                onChange={this.changePassword}
                label="Password" variant="outlined"
              />
            </FormControl><br /><br />

            <Button id="btn"
              // onClick={this.handleSubmit}
              type="submit"
              size="large"
              variant="contained"
              justifyContent="center"
              onClick={this.changeState}


            >
              Login
          </Button><br /><br />
            <Typography id="title1"> If you don't have an account ?</Typography><br />
            <Button id="btn1"
              onClick={this.handleSubmit}
              type="submit"
              size="large"
              variant="contained"
              justifyContent="center"


            >
              Signup
              </Button>
          </form>

        </Box>

      </div >
    );
  }
}


export default Login;