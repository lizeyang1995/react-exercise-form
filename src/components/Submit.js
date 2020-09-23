import React, {Component} from 'react';
import './submit.less';

class Submit extends Component {
  render() {
    return (
      <input
        className='submit'
        type='submit'
        name='name'
        value='Submit'
        disabled={ !this.props.value.name || !this.props.value.gender || !this.props.value.description || !this.props.value.isRead }
      />
    );
  }
}
export default Submit;
