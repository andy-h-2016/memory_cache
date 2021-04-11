import React from 'react';
import { constructSearchParams } from '../../util/task_component_util';

class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   if (!this.props.task) {
  //     let searchParams = constructSearchParams(this.props.match.params.listId);
  //     this.props.searchTasks(searchParams);
  //   }
  // }

  render() {
    if (!this.props.task) {
      return null;
    }

    console.log('taskDetails', this.props);
    const {task} = this.props;
    return (
      <div>
        <h2>{task.title}</h2>
        <div>{`due ${task.dueDate || 'never'}`}</div>
      </div>

    )
  }
}

export default TaskDetails;