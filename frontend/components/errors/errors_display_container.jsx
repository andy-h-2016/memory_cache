import {connect} from 'react-redux';
import ErrorsDisplay from './errors_display';

const mapSTP = (state, ownProps) => {
  let errorTypes = Object.keys(state.errors);
  let errors = [];
  for (let type of errorTypes) {
    errors = errors.concat(state.errors[type]);
  }
  return {errors}
}

export default connect(mapSTP)(ErrorsDisplay)

