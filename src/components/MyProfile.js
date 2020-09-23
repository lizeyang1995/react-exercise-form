import React, {Component} from 'react';
import './myProfile.less';
import Name from './Name';
import Gender from './Gender';
import Description from './Description';
import Conduct from './Conduct';

class MyProfile extends Component {
  state = {
    name: '',
    gender: '',
    description: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <form>
        <h1>My Profile</h1>
        <Name onChange={this.handleChange} value={this.state.name} />
        <Gender onChange={this.handleChange} value={this.state.gender} />
        <Description onChange={this.handleChange} value={this.state.description} />
        <Conduct />
      </form>
    );
  }
}

export default MyProfile;


