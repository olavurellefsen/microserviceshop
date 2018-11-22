import React, { Component } from 'react';

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
    <div className="shopping-list">
        <ul>
          <li>User name:</li>
          <li>Password:</li>
        </ul>
      </div>
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