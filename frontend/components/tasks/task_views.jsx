import React from 'react';
import {Route} from 'react-router-dom';


class TaskViews extends React.Component {


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

export default TaskViews;