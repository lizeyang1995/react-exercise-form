import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Submit extends Component {
  render() {
    return (
      <input 
        type='submit'
        name='name'
        value='Submit'
        disabled={ !this.props.value.name || !this.props.value.gender || !this.props.value.description || !this.props.value.isRead }
      />
    );
  }
}
Submit.propTypes = {
  name: PropTypes.string,
};
export default Submit;
