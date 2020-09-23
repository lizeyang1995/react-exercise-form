import React, {Component} from 'react';

class Conduct extends Component {
  render() {
    return (
      <label>
        <input 
          type='checkbox' 
          name='read'
          onChange={this.props.onChange}
          defaultChecked={true}
        />
        <span>I have read the terms of conduct</span>
      </label>
    );
  }
}
export default Conduct;
