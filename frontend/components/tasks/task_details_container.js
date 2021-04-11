import {connect} from 'react-redux';
import TaskDetails from './task_details';
import {searchTasks} from '../../actions/task_actions';

const mapSTP = (state, ownProps)  => {
  console.log('detailsContainer', ownProps)
  // const task = state.tasks ? state.tasks[ownProps.match.params.taskId] : '';
  return ({
    task: state.entities.tasks[ownProps.match.params.taskId]
  })
};

const mapDTP = dispatch => ({
  searchTasks: searchParams => dispatch(searchTasks(searchParams))
});


export default connect(mapSTP, mapDTP)(TaskDetails);