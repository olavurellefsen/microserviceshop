import React, { Component } from "react";
import {
  LoginBody,
  LoginForm,
  LoginItem,
  LoginLabel,
  LoginField,
  LoginButton,
  Container
} from "./Login.style";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      token: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    // this.setState({ email: data.get("uname") });
    // this.setState({ password: data.get("psw") });

    this.setState(
      { email: data.get("uname"), password: data.get("psw") },
      () => {
        let obj = {};
        obj.email = this.state.email;
        obj.password = this.state.password;

        //when login is finished: getToken

        //set token to state, and we can see that the user is logged in.s

        // fetch("http://35.197.240.22/api/getToken", {
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json"
        //   },
        //   method: "POST",
        //   body: JSON.stringify(obj)
        // })
        //   .then(function(res) {
        //     this.setState({ token: res });
        //     console.log(res);
        //   })
        //   .catch(function(res) {
        //     console.log(res);
        //   });
      }
    );
  }

  render() {
    return (
      <LoginBody>
        <LoginForm action="/action_page.php">
          <Container>
            <LoginItem>
              <LoginLabel>Username</LoginLabel>
              <LoginField
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />
            </LoginItem>
            <LoginItem>
              <LoginLabel>Password</LoginLabel>
              <LoginField
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
            </LoginItem>
            <LoginItem>
              <LoginButton type="submit">Login</LoginButton>
            </LoginItem>
          </Container>
        </LoginForm>
      </LoginBody>
    );
  }
}

export default Login;
