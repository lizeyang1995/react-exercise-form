import React, {Component} from 'react';

class Gender extends Component {
  render() {
    return (
      <label>
        <h2>Gender</h2>
        <input
          list='gender'
          type='text' 
          name='gender'
          defaultValue='Male'
        />
        <datalist id='gender'>
          <option>Male</option>
          <option>Female</option>
        </datalist>
      </label>
    );
  }
}

export default Gender;
