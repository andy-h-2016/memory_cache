import React from 'react';
import { constructSearchParams, parseDate } from '../../util/task_component_util';

class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.task;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log('MOUNT')
    if (!this.props.task) {
      let searchParams = constructSearchParams(this.props.match.params.listId);
      this.props.searchTasks(searchParams);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.task) {
      this.setState(this.props.task)
    } else if (this.props.match.params.taskId !== prevProps.match.params.taskId) {
      this.setState(this.props.task);
    }
  }

  update(e, field) {
    this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e, field) {
    e.preventDefault();
    const task = Object.assign({}, this.state);
    
    if (field === 'dueDate') {
      task.dueDate = parseDate(task.dueDate);
    }
    
    this.props.updateTask(task);

    this.inputRef.current.blur();
  }

  render() {
    console.log('task state', this.state)
    console.log('props', this.props)
    if (!this.state) {
      return null;
    }

    console.log('rendering')
    const {task, list} = this.props;
    return (
      <div className="task-details-pane">


        <table className='task-details'>
          <caption className='task-details-header'>{task.title}</caption>

          <tbody>
            <tr>
              <th className="property-name due-date-header">due</th>
              <td className="property-value due-date-value">
                <form>
                  <input 
                    className='task-detail-edit-form due-date-input' 
                    onChange={e => this.update(e, 'dueDate')}
                    ref={this.inputRef} 
                    type="text" 
                    value={this.state.dueDate}
                  />

                  <input className='hidden-submit-button' onClick={e =>  this.handleSubmit(e, 'dueDate')} type="submit"/>
                </form>
              </td>
            </tr>
            
            <tr>
              <th className="property-name priority-header">priority</th>
              <td className="property-value priority-value">
                <form>
                  <input 
                    className='task-detail-edit-form priority-input' 
                    onChange={e => this.update(e, 'priority')}
                    ref={this.inputRef} 
                    type="text" 
                    value={this.state.priority}
                  />

                  <input className='hidden-submit-button' onClick={e =>  this.handleSubmit(e, 'priority')} type="submit"/>
                </form>
              </td>
            </tr>

            <tr>
              <th className="property-name estimate-header">estimate</th>
              <td className="property-value estimate-value">{task.estimate}</td>
            </tr>

            <tr>
              <th className="property-name list-title-header">list</th>
              <td className="property-value list-title-value">{list ? list.title : 'Inbox'}</td>
            </tr>
          </tbody>
        </table>

      </div>

    )
  }
}

export default TaskDetails;