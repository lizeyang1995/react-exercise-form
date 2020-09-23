import React, {Component} from 'react';
import './myProfile.less';
import Name from './Name';
import Gender from './Gender';

class MyProfile extends Component {
  state = {
    name: ''
  }
  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  render() {
    return (
      <form>
        <h1>My Profile</h1>
        <Name onChange={this.handleChange} value={this.state.name} />
        <Gender />
      </form>
    );
  }
}

export default MyProfile;


