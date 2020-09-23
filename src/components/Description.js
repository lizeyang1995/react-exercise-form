import React, {Component} from 'react';
import './description.less';

class Description extends Component {
  render() {
    return (
      <label>
        <h2>Description</h2>
        <textarea
          className='description'
          type='text' 
          name='description' 
          onChange={this.props.onChange}
          placeholder='Description about yourself'
          value={this.props.value}
        />
      </label>
    );
  }
}
export default Description;
