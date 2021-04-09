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

    if (typeof listId === 'number') {

      //listId will be number if it is a custom list or the inbox(aka uncategorized) list
      this.props.fetchTasks({listId});
    } else {
      switch(listId) {
        case "all":
          searchParam = {};
          break
        case "today":
          today = new Date();
          searchParam = {
            dueDate: {
              year: today.getFullYear(),
              month: today.getMonth() + 1, //JS uses 0 index on months. Ruby does not.
              day: today.getDate()
            }
          }
          break
        case "tomorrow":
          today = new Date();
          searchParam = {
            dueDate: {
              year: today.getFullYear(),
              month: today.getMonth() + 1,
              day: today.getDate() + 1
            }
          }
          break
        case "this-week":
          break
      }
    }
  }

  render() {
    return (
      <div className='tasks-index'>
        Here's your tasks!
        {/* <Route path="/list/:listId" component={TasksIndex}/>
        <Route path="/list/:listId/:taskId" component={TaskDetails}/> */}
      </div>

    )
  }
}

export default TaskIndex;