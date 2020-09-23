import React, {Component} from 'react';

class Conduct extends Component {
  render() {
    return (
      <label>
        <input 
          type='checkbox' 
          name='read'
        />
        <span>I have read the terms of conduct</span>
      </label>
    );
  }
}
export default Conduct;
