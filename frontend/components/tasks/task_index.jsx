import React from 'react';
import {Route} from 'react-router-dom';


class TaskIndex extends React.Component {
  //props: tasks from 
  constructor(props) {
    super(props);

    this.constructSearchParams = this.constructSearchParams.bind(this);

  }
  
  constructSearchParams() {
    let listId = this.props.match.params.listId;
    let today;

    switch(true) {
      case /\d/.test(listId):
        return {listId};
      case listId === "today":
        today = new Date();
        return ({
          dueDate: {
            year: today.getFullYear(),
            month: today.getMonth() + 1, //JS uses 0 index on months. Ruby does not.
            day: today.getDate()
          }
        });
      case listId === "tomorrow":
        today = new Date();
        return ({
          dueDate: {
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            day: today.getDate() + 1
          }
        });
        // case "this-week":
        //   break
    }
  }

  componentDidMount() {
    let searchParams = this.constructSearchParams();
    this.props.searchTasks(searchParams);
  } 
        
  componentDidUpdate(prevProps) {
    let listId = this.props.match.params.listId;
    if (listId !== prevProps.match.params.listId) {
      let searchParams = this.constructSearchParams();
      this.props.searchTasks(searchParams);
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