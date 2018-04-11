import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    const authurl = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86m6ogve75awfa&redirect_uri=http%3A%2F%2Flocalhost:3000%2F&state=2522abcde12345&scope=r_basicprofile";

        return (

            <div className="App">

                <a href={authurl}><img src="signin.png" alt="Sign in with Linkedin"/></a>

            </div>

        );

  }
}

export default SignIn
