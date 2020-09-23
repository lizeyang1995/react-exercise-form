import React, {Component} from 'react';
import './myProfile.less';
import Name from './Name';
import Gender from './Gender';
import Description from './Description';
import Conduct from './Conduct';
import Submit from './Submit';

class MyProfile extends Component {
  state = {
    name: '',
    gender: 'Male',
    description: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>My Profile</h1>
        <Name onChange={this.handleChange} value={this.state.name} />
        <Gender onChange={this.handleChange} value={this.state.gender} />
        <Description onChange={this.handleChange} value={this.state.description} />
        <Conduct />
        <Submit />
      </form>
    );
  }
}

export default MyProfile;


