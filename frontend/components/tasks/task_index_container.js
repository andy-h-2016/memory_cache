import {connect} from 'react-redux';
import TaskIndex from './task_index';

const mapSTP = (state, ownProps) => ({
  tasks: state.entities.tasks
})

export default connect(mapSTP, mapDTP)(TaskIndex);