import React from 'react';
import { constructSearchParams, parseDate } from '../../util/task_component_util';

class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.task;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRef = {};
  }

  componentDidMount() {
      let searchParams = constructSearchParams(this.props.match.params.listId);
      this.props.searchTasks(searchParams)
        .then(() => this.setState(this.props.task));
  
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

    this.inputRef[field].blur();
  }

  render() {
    const {task, list} = this.props;    
    const editableProperties = ['list', 'dueDate', 'priority', 'estimate']
    const rows = editableProperties.map(property => {
      // property.match(/.*[A-Z]+/)
      let header = property;
      let htmlClass = property;
      switch (property) {
        case 'dueDate':
          header = 'due';
          htmlClass = 'due-date';
          break
      }

      return (
        <tr key={property}>
          <th className={`property-name ${htmlClass}-header`}>{header}</th>
          <td className={`property-value ${htmlClass}-value`}>
            <form>
              <input 
                className={`task-detail-edit-form ${htmlClass}-input`} 
                onChange={e => update(e, property)}
                ref={el => this.inputRef[property] = el} 
                type="text" 
                value={this.state[property]}
              />

              <input className='hidden-submit-button' onClick={e =>  handleSubmit(e, property)} type="submit"/>
            </form>
          </td>
        </tr>
      )
    })

    return (
      <div className="task-details-pane">
        

        <table className='task-details'>
          <caption className='task-details-header'>{task.title}</caption>

          <tbody>
            {rows}
          </tbody>
        </table>

      </div>

    )
  }
}

export default TaskDetails;