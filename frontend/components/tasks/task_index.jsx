import React from 'react';
import {Route} from 'react-router-dom';


class TaskIndex extends React.Component {
  //props: tasks from 
  constructor(props) {
    super(props);
  } 

  componentDidMount() {
    let searchParam;
    let listId = this.props.match.params.listId;
    let today;
    this.props.searchTasks({listId});

    if (typeof listId === 'number') {

      //listId will be number if it is a custom list or the inbox(aka uncategorized) list
    } else {
      // switch(listId) {
      //   case "all":
      //     searchParam = {};
      //     break
      //   case "today":
      //     today = new Date();
      //     searchParam = {
      //       dueDate: {
      //         year: today.getFullYear(),
      //         month: today.getMonth() + 1, //JS uses 0 index on months. Ruby does not.
      //         day: today.getDate()
      //       }
      //     }
      //     break
      //   case "tomorrow":
      //     today = new Date();
      //     searchParam = {
      //       dueDate: {
      //         year: today.getFullYear(),
      //         month: today.getMonth() + 1,
      //         day: today.getDate() + 1
      //       }
      //     }
      //     break
      //   case "this-week":
      //     break
      // }
    }
  }

  componentDidUpdate(prevProps) {
    let listId = this.props.match.params.listId;
    if (listId !== prevProps.match.params.listId) {
      this.props.searchTasks({listId});
    }
  }

  render() {
    if (!this.props.tasks) {
      return <div></div>;
    }
    const tasksList = this.props.tasks.map(task => {

      return (
        <li key={`task ${task.id}`}>{task.title}</li>
      )
    })


    return (
      <div className='tasks-index'>
        <div className="complete-tabs"></div> {/* Incomplete vs Completed tabs will be NavLinks */}
        <div className="task-buttons"></div> {/* task buttons will be separate component */}
        <form>
          <input type="text" placeholder="Add a task..." />
          <button className='modal-button action-button'>Add Task</button>  
        </form>

        <ul className='list-of-tasks'>
          {tasksList}
        </ul>
        {/* <Route path="/list/:listId/:taskId" component={TaskDetails}/> */}
      </div>

    )
  }
}

export default TaskIndex;