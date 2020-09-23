import React, {Component} from 'react';

class Name extends Component {
  render() {
    return (
      <label>
        <h2>Name</h2>
        <input 
          type='text' 
          name='name' 
          onChange={this.props.onChange}
          placeholder='You name'
          value={this.props.value}
        />
      </label>
    );
  }
}
export default Name;
