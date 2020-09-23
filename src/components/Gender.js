import React, {Component} from 'react';
import './gender.less';

class Gender extends Component {
  render() {
    return (
      <label>
        <h2>Gender</h2>
        <select
          className='gender'
          name='gender' 
          onChange={this.props.onChange} 
          value={this.props.value}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </label>
    );
  }
}

export default Gender;
