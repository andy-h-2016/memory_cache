import React from 'react';
import {NavLink} from 'react-router-dom';
import { constructSearchParams, parseInput } from '../../util/task_component_util';


class TaskIndex extends React.Component {
  //props: tasks from 
  constructor(props) {
    super(props);
    this.state = {input: ""};
    // this.constructSearchParams = this.constructSearchParams.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.urlParams = this.props.match.params.listId;
  }

  componentDidMount() {
    let searchParams = constructSearchParams(this.urlParams);
    this.props.searchTasks(searchParams);
  } 
        
  componentDidUpdate(prevProps) {
    this.urlParams = this.props.match.params.listId
    if (this.urlParams !== prevProps.match.params.listId) {
      let searchParams = constructSearchParams(this.urlParams);
      this.props.searchTasks(searchParams);
    }
  }

  update(e) {
    this.setState({input: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    let task = parseInput(this.state.input);
    this.setState({input: ''});
    this.props.createTask(task);
  }

  render() {
    if (!this.props.tasks) {
      return <div></div>;
    }

    const tasksList = this.props.tasks.map(task => {
      return (
        <li key={`task ${task.id}`}>
          <NavLink to={`${this.props.match.url}/${task.id}`}>
            {task.title} | {task.dueDate}
          </NavLink>
        </li>
      );
    });

    return (
      <div className='tasks-index'>
        <div className="complete-tabs"></div> {/* Incomplete vs Completed tabs will be NavLinks */}
        <div className="task-buttons"></div> {/* task buttons will be separate component */}
        <form>
          <input onChange={this.update} type="text" placeholder="Add a task..." value={this.state.input}/>
          <button onClick={this.handleSubmit} className='modal-button action-button'>Add Task</button>  
        </form>

        <ul className='list-of-tasks'>
          {tasksList}
        </ul>
        {/* <Route path="/list/:listId/:taskId" component={TaskDetails}/> */}
      </div>

    );
  }
}

export default TaskIndex;