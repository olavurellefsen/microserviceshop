import React, { Component } from 'react';
import { LoginBody, LoginForm, LoginLabel, LoginField, LoginButton, CancelButton, Container } from './Login.style';

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
            <LoginLabel for="uname">Username</LoginLabel>
            <LoginField type="text" placeholder="Enter Username" name="uname" required />

            <LoginLabel for="psw">Password</LoginLabel>
            <LoginField type="password" placeholder="Enter Password" name="psw" required />
                
            <LoginButton type="submit">Login</LoginButton>
            <LoginLabel>
              <LoginField type="checkbox" checked="checked" name="remember" /> Remember me
            </LoginLabel>
          </Container>

          <Container>
            <CancelButton type="button" class="cancelbtn">Cancel</CancelButton>
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