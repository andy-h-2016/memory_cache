import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../../actions/user_actions';
import {clearErrors} from '../../actions/error_actions';


const mapSTP = (state, ownProps) => ({
  user: {username: '', password: '', email: ''},
  formType: 'Sign Up'
});

const mapDTP = dispatch => ({
  submit: credentials => dispatch(signup(credentials)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(SessionForm);