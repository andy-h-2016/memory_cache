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
        <div>{`due ${task.dueDate || 'never'}`}</div>

      <table class='class-properties'>
        <caption class='task-details-header'>{task.title}</caption>
          <tr>
            <th class="property-name due-date-header">due</th>
            <td class="property-value due-date-value">{`due ${task.dueDate || 'never'}`}</td>
          </tr>
          
          <tr>
            <th class="property-name priority-header">priority</th>
            <td class="property-value priority-value">{task.priority}</td>
          </tr>

          <tr>
            <th class="property-name estimate-header">estimate</th>
            <td class="property-value estimate-value">{task.estimate}</td>
          </tr>

          <tr>
            <th class="property-name list-title-header">list</th>
            <td class="property-value list-title-value">{}</td>
          </tr>
        </table>

      </div>

    )
  }
}

export default TaskDetails;