import React from 'react';
import {NavLink} from 'react-router-dom';
import { constructSearchParams, parseInput } from '../../util/task_component_util';


class TaskIndex extends React.Component {
  //props: tasks from 
  constructor(props) {
    super(props);
    this.state = {input: ""};
    this.constructSearchParams = this.constructSearchParams.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  constructSearchParams() {
    let listId = this.props.match.params.listId;
    let today;

    switch(true) {
      case /\d/.test(listId):
        // check if listId is a number
        return {listId};
      case listId === "all":
        return {complete: false};
      case listId === "inbox":
        return {custom: 'inbox'};
      case listId === "today":
        today = new Date();
        return ({
          dueDate: [
            today.getFullYear(),
            today.getMonth() + 1, //JS uses 0 index on months. Ruby does not.
            today.getDate()
          ]
        });
      case listId === "tomorrow":
        today = new Date();
        return ({
          dueDate: [
            today.getFullYear(),
            today.getMonth() + 1, //JS uses 0 index on months. Ruby does not.
            today.getDate() + 1
          ]
        });
      case listId === "this-week":
        return {custom: 'this-week'};
    }
  }

  componentDidMount() {
    let searchParams = this.constructSearchParams();
    this.props.searchTasks(searchParams);
  } 
        
  componentDidUpdate(prevProps) {
    let urlParams = this.props.match.params.listId;
    if (urlParams !== prevProps.match.params.listId) {
      let searchParams = constructSearchParams(urlParams);
      this.props.searchTasks(searchParams);
    }
  }

  update(e) {
    this.setState({input: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    let task = parseInput(this.state.input)
    // let input = this.state.input;
    
    // let titleMatch = input.match(/(.+)\s\W/);
    // let title = titleMatch ? titleMatch[1] : input;
  
    // let task = {title};

    // let dueDateMatch = input.match(/\^(.*)/);
    // if (dueDateMatch) {
    //   let dueDate = dueDateString[1].split('-');
    //   task['dueDate'] = dueDate;
    // };

    // let listMatch = input.match(/#\((.+)\)/);
    // if (listMatch) {
    //   let listTitle = listMatch[1];
    //   let listObj = this.props.lists.find(list => list.title === listTitle);
    //   let listId = listObj.id;
    //   task['listId'] = listId; 
    // }
    

    
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
          <input onChange={this.update} type="text" placeholder="Add a task..." value={this.state.title}/>
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