import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';
import {clearErrors} from '../../actions/error_actions';

const mapSTP = (state, ownProps) => ({
  user: {username: '', email: '', password: ''},
  formType: 'Log In'
});

const mapDTP = dispatch => ({
  submit: credentials => dispatch(login(credentials)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(SessionForm);