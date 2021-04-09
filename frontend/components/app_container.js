import {connect} from 'react-redux';
import App from './app';
import {clearDropdown} from '../actions/dropdown_actions';

const mapDTP = dispatch => ({
  clearDropdown: () => dispatch(clearDropdown())
});

export default connect(null, mapDTP)(App)