import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout} from '../../actions/session_actions'


const mapSTP = ({entities, session}, ownProps) => ({
  currentUser: entities.users[session.id]
});

const mapDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapSTP, mapDTP)(Greeting)