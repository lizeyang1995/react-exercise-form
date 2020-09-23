import React, {Component} from 'react';
import './name.less';

class Name extends Component {
  render() {
    return (
      <label>
        <h2>Name</h2>
        <input
          className='name'
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
