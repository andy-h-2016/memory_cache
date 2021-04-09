import {connect} from 'react-redux';
import ErrorsDisplay from './errors_display';

const mapSTP = (state, ownProps) => {
  // let errorTypes = Object.keys(state.errors);
  // let errors = [];
  // for (let type of errorTypes) {
  //   errors.push(...state.errors[type]);
  // }
  // return {errors}
  return {errors: state.errors}
}

const mapDTP = dispatch => ({
  clearErrors: () => dispatch(clearErrors)
});

export default connect(mapSTP)(ErrorsDisplay)

