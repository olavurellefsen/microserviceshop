import React, { Component } from 'react';
import { LoginBody, LoginForm, LoginItem, LoginLabel, LoginField, LoginButton, Container } from './Login.style';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password:''
    };
  }

handleLogon(text)
{
  this.setState({email:text.targer.value})
}

render() {
  return (
    <LoginBody>
      <LoginForm action="/action_page.php">
          <Container>
            <LoginItem>
              <LoginLabel>Username</LoginLabel>
              <LoginField type="text" placeholder="Enter Username" name="uname" required />
            </LoginItem>
            <LoginItem>
              <LoginLabel>Password</LoginLabel>
              <LoginField type="password" placeholder="Enter Password" name="psw" required />
            </LoginItem>
            <LoginItem>
              <LoginButton type="submit">Login</LoginButton>
            </LoginItem>
          </Container>
      </LoginForm>
    </LoginBody>
  )
}

login()
  {
    console.log('inside login');
   
    let obj={};
    obj.email = this.state.email;
    obj.password= this.state.password;
   
    fetch("http://35.197.240.22/api/getToken",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(obj)
    })
    .then(function(res){ 
      console.log(res) 
    })
    .catch(function(res){
      console.log(res)
    })
  }
}

export default Login;