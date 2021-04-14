import React from 'react';
import { constructSearchParams, parseDate } from '../../util/task_component_util';

class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.task;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.inputRef = {};
  }

  componentDidMount() {
      let searchParams = constructSearchParams(this.props.match.params.listId);
        this.props.searchTasks(searchParams)
          .then(() => this.setState(this.props.task));
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.task) {
      this.setState(this.props.task);
    } else if (this.props.match.params.taskId !== prevProps.match.params.taskId) {
      this.setState(this.props.task);
    }
  }

  update(e, field) {
    this.setState({[field]: e.currentTarget.value});
  }

  completeTask(e) {
    e.preventDefault();
    this.state.complete = true;
    this.handleSubmit(e);
  }

  handleSubmit(e, field) {
    e.preventDefault();
    const task = Object.assign({}, this.state);
    
    task.dueDate = parseDate(task.dueDate);
    task.listId = this.props.listsByTitle[task.listTitle];
    this.props.updateTask(task);

    if (field) {
      this.inputRef[field].blur();
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTask(this.props.task);
  }

  render() {
    const editableProperties = ['listTitle', 'dueDate', 'priority', 'estimate']
    const rows = editableProperties.map(property => {
      let header = property;
      let htmlClass = property;
      switch (property) {
        case 'dueDate':
          header = 'due';
          htmlClass = 'due-date';
          break
        case 'listTitle':
          header = 'list';
          htmlClass = 'list-title';
      }

      return (
        <tr key={property} className='task-detail-edit-form'>
          <th className={`property-name ${htmlClass}-header`}>{header}</th>
          <td className={`property-value ${htmlClass}-value`}>
            <form className='task-detail-edit-form'>
              <input 
                className={`task-detail-edit-input ${htmlClass}-input`} 
                onChange={e => this.update(e, property)}
                ref={el => this.inputRef[property] = el} 
                type="text" 
                value={this.state[property]}
              />

              <input className='hidden-submit-button' onClick={e => this.handleSubmit(e, property)} type="submit"/>
            </form>
          </td>
        </tr>
      )
    });

    return (
      <div className="task-details-pane">
        <form className="task-detail-edit-form">
          <input 
            className={`task-detail-edit-input title-input`} 
            onChange={e =>this.update(e, 'title')}
            ref={el => this.inputRef['title'] = el} 
            type="text" 
            value={this.state.title}
          />

          <input className='hidden-submit-button' onClick={e => this.handleSubmit(e, 'title')} type="submit"/>
        </form>
        

        <table className='task-details-table'>
          <tbody>
            {rows}
          </tbody>
        </table>

        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.completeTask}>Complete</button>

      </div>

    )
  }
}

export default TaskDetails;