import React from 'react';
import FacebookLogin from 'react-facebook-login';
 
class FbLogin extends React.Component {
  responseFacebook(response) {
    console.log(response)
  }
 
  render() {
    return (
      <FacebookLogin
        appId="your_api"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    )
  }
}
 
export default FbLogin;