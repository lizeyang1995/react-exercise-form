import React, {Component} from 'react';

class Description extends Component {
  render() {
    return (
      <label>
        <h2>Description</h2>
        <textarea 
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
