import React, {Component} from 'react';

class Gender extends Component {
  render() {
    return (
      <label>
        <h2>Gender</h2>
        <select name='gender' onChange={this.props.onChange} value={this.props.value}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </label>
    );
  }
}

export default Gender;
