import React from 'react';
import {NavLink} from 'react-router-dom';
import { constructSearchParams, parseInput } from '../../util/task_component_util';

const MIN_NUM_OF_ROWS = 15;

class TaskIndex extends React.Component {
  //props: tasks from 
  constructor(props) {
    super(props);
    this.state = {input: ""};
    
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

    const tasksList = [];
    this.props.tasks.forEach(task => {
      tasksList.push(
        <li className='tasks-index-row' key={`task ${task.id}`}>
          <NavLink className='task-link' to={`${this.props.match.url}/${task.id}`}>
            <span>{task.title}</span>
            <span>{task.dueDate}</span>
          </NavLink>
        </li>
      )
    });

    const numAdditionalRows = MIN_NUM_OF_ROWS - tasksList.length;
    for (let i = 0; i < numAdditionalRows; i++) {
      tasksList.push(<li className='tasks-index-row' key={`empty-${i}`}></li>)
    }

    return (
      <section className='tasks-index-pane'>
        <div className="complete-tabs"></div> {/* Incomplete vs Completed tabs will be NavLinks */}

        <ul className='tasks-index'>
          <li className="tasks-index-row task-buttons"></li> {/* task buttons will be separate component */}
          <li className="tasks-index-row" key='form'>
            <form>
              <input onChange={this.update} type="text" placeholder="Add a task..." value={this.state.input}/>
              <button onClick={this.handleSubmit} className='modal-button action-button'>Add Task</button>  
            </form>
          </li>
          
          {tasksList}
        </ul>
        
      </section>
        

    );
  }
}

export default TaskIndex;