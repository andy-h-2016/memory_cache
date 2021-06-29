import React from "react";
import {
  constructSearchParams,
  parseDate,
} from "../../../util/task_component_util";

class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.task;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.closePanel = this.closePanel.bind(this);

    this.completed = this.props.location.pathname.includes("completed");
    this.inputRef = {};

    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    let searchParams = constructSearchParams(this.props.match.params.listId, this.completed);
    this.props.searchTasks(searchParams)
      .then(() => this.setState(this.props.task));
  }

  componentDidUpdate(prevProps) {
    this.completed = this.props.location.pathname.includes("completed");
    let completedPath = this.completed ? '/completed' : '';
    let taskWasHere = Object.values(prevProps.task).length > 0;
    let taskIsNotHere = Object.values(this.props.task).length === 0;

    if (this.props.match.params.taskId !== prevProps.match.params.taskId) {
      this._isMounted && this.setState(this.props.task);

    } else if (taskWasHere && taskIsNotHere) {
      //this conditional runs when the task is no longer in the current list (either after moving, completing, or deleting the task)
      this._isMounted && this.props.history.push(`/list/${this.props.match.params.listId}${completedPath}`);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  update(e, field) {
    this.setState({ [field]: e.currentTarget.value });
  }

  toggleComplete(e) {
    e.preventDefault();
    this.state.complete = !this.state.complete;
    this.handleSubmit(e);
  }

  closePanel(e) {
    e.preventDefault();
    const currentLocation = this.props.location.pathname;
    const taskIdMatch = currentLocation.match(/(\d+)$/);
    const taskId = `/${taskIdMatch[1]}`;

    //Remove taskId wildcard from the url
    const taskIndexURL = currentLocation.replace(taskId, '');
    this.props.history.push(taskIndexURL);
  }

  handleSubmit(e, field) {
    e.preventDefault();
    e.stopPropagation();
    const task = Object.assign({}, this.state)
    
    task.listId = this.props.listsByTitle[this.state.listTitle];
    task.dueDate = parseDate(this.state.dueDate);
    task.estimate = this.state.estimate.match(/(\d+)(?:\sminutes)?/)[1];

    this._isMounted && this.props.updateTask(task)
    .then(() => {
        let searchParams = constructSearchParams(this.props.match.params.listId, this.completed);
        this._isMounted && this.props.searchTasks(searchParams)
          .then(() => {
            this._isMounted && this.setState(this.props.task)
        });
      });

    if (field) {
      this.inputRef[field].blur();
    }
  }

  handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.deleteTask(this.props.task);
  }

  render() {
    if (Object.values(this.state).length === 0) {
      return null;
    }

    const offscreen = this._isMounted ? '' : 'offscreen';

    const editableProperties = ["listTitle", "dueDate", "priority", "estimate"];

    const rows = editableProperties.map((property) => {
      let header = property;
      let htmlClass = property;
      switch (property) {
        case "dueDate":
          header = "due";
          htmlClass = "due-date";
          break;
        case "listTitle":
          header = "list";
          htmlClass = "list-title";
      }

      return (
        <tr key={property} className="task-detail-edit-form">
          <th className={`property-name ${htmlClass}-header`}>{header}</th>
          <td className={`property-value ${htmlClass}-value`}>
            <form className="task-detail-edit-form">
              <input
                className={`task-detail-edit-input ${htmlClass}-input`}
                onChange={(e) => this.update(e, property)}
                ref={(el) => (this.inputRef[property] = el)}
                type="text"
                value={this.state[property]}
              />

              <input
                className="hidden"
                onClick={(e) => this.handleSubmit(e, property)}
                type="submit"
              />
            </form>
          </td>
        </tr>
      );
    });

    return (
      <div className={`task-details-pane ${offscreen}`}>
        
        <i className="fas fa-times close-button details-close-button" onClick={this.closePanel}></i>


        <form className="task-detail-edit-form">
          <input
            className={`task-detail-edit-input title-input`}
            onChange={(e) => this.update(e, "title")}
            ref={(el) => (this.inputRef["title"] = el)}
            type="text"
            value={this.state.title}
          />

          <input
            className="hidden"
            onClick={(e) => this.handleSubmit(e, "title")}
            type="submit"
          />
        </form>

        <table className="task-details-table">
          <tbody>{rows}</tbody>
        </table>


        <div className='button-container'>
          <button 
            className={`modal-button ${this.completed ? 'action-button' : 'complete-button'}`} 
            onClick={this.toggleComplete} >
              {this.completed ? 'Uncomplete' : 'Complete'}
          </button>

          <button className="modal-button delete-button" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default TaskDetails;
