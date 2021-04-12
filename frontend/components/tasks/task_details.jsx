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
    const {task, listTitle} = this.props;
    return (
      <div className="task-details-pane">

        <table className='task-details'>
          <caption className='task-details-header'>{task.title}</caption>

          <tbody>
            <tr>
              <th className="property-name due-date-header">due</th>
              <td className="property-value due-date-value">{`due ${task.dueDate || 'never'}`}</td>
            </tr>
            
            <tr>
              <th className="property-name priority-header">priority</th>
              <td className="property-value priority-value">{task.priority}</td>
            </tr>

            <tr>
              <th className="property-name estimate-header">estimate</th>
              <td className="property-value estimate-value">{task.estimate}</td>
            </tr>

            <tr>
              <th className="property-name list-title-header">list</th>
              <td className="property-value list-title-value">{listTitle || 'Inbox'}</td>
            </tr>
          </tbody>
        </table>

      </div>

    )
  }
}

export default TaskDetails;