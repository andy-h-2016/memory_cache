import React from 'react';
import {NavLink} from 'react-router-dom';
import { constructSearchParams, parseInput } from '../../../util/task_component_util';
import AddPropertyButtons from './add_property_buttons';
import TasksSummary from '../tasks_summary'

const standardLists = ['all', 'inbox', 'today', 'tomorrow', 'this-week'];
const MIN_NUM_OF_ROWS = 20;

class TaskIndex extends React.Component {
  //props: tasks from 
  constructor(props) {
    super(props);
    this.state = {input: ""};
    
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.insertModChar = this.insertModChar.bind(this);
    this.insertPropertyValues = this.insertPropertyValues.bind(this);

    this.currentListTitle = this.props.match.params.listId;
    this.completed = this.props.location.pathname.includes('completed');
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    let searchParams = constructSearchParams(this.currentListTitle, this.completed);
    this.props.searchTasks(searchParams);
  } 
        
  componentDidUpdate(prevProps) {
    this.currentListTitle = this.props.match.params.listId
    let differentListId = this.currentListTitle !== prevProps.match.params.listId;

    this.completed = this.props.location.pathname.includes('completed');
    let differentCompletedKey = this.completed !== prevProps.location.pathname.includes('completed');
    if (differentListId || differentCompletedKey) {
      let searchParams = constructSearchParams(this.currentListTitle, this.completed);
      this.props.searchTasks(searchParams);
    }
  }

  update(e) {
    let input = e.currentTarget.value;
    this.setState({input: input});
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    let task = parseInput(this.state.input, Object.values(this.props.lists));
    this.setState({input: ''});
    this.props.createTask(task);
  }

  toggleDropdown(e, dropdown) {
    e.stopPropagation();
    this.props.activateDropdown(dropdown);
  }

  insertModChar(e, property) {
    e.preventDefault();
    e.stopPropagation();
    let char;
    switch(property) {
      case 'dueDate':
        char = ' ^';
        break
      case 'priority':
        char = ' !';
        break
      case 'estimate':
        char = ' =';
        break
      case 'list':
        char = ' #()';
        this.props.activateDropdown(property)
        this.setState({input: `${this.state.input}${char}`}, () => {
          this.inputRef.current.focus();
  
          //move cursor to 2nd to last position to be inside the #()
          const cursorPosition = this.state.input.length - 1; 
          this.inputRef.current.setSelectionRange(cursorPosition, cursorPosition)
        });
        return //terminate the function so that the lines below don't run if this case runs.
      default:
        char = '';
    }

    this.props.activateDropdown(property)
    this.setState({input: `${this.state.input}${char}`});
    this.inputRef.current.focus();    
  }

  insertPropertyValues(e, values, property) {
    e.preventDefault();
    const input = (property === 'list') 
      ? this.state.input.replace(/#\(\)/, `#(${values})`) 
      : this.state.input.concat(values);

    this.setState({input})
  } 

  render() {
    if (!this.props.tasks) {
      return <div></div>;
    }

    const completedClass = this.completed ? 'completed' : '';
    

    const tasksList = [];
    this.props.tasks.forEach(task => {
      tasksList.push(
        <li className="tasks-index-row task-row" key={`task ${task.id}`}>
          <NavLink className='task-link' to={`${this.props.match.url}/${task.id}`}>
            <span className={`${completedClass}`}>{task.title}</span>
            <span className="due-date">{task.dueDate}</span>
          </NavLink>
        </li>
      );
    });

    const numAdditionalRows = MIN_NUM_OF_ROWS - tasksList.length;
    for (let i = 0; i < numAdditionalRows; i++) {
      tasksList.push(<li className='tasks-index-row empty-row' key={`empty-${i}`}></li>);
    }

    let listTitle;
    if (this.props.lists[this.currentListTitle] !== undefined) {
      listTitle = this.props.lists[this.currentListTitle].title;
    } else if (standardLists.includes(this.currentListTitle)) {
      //capitalize the standard list title
      listTitle = this.currentListTitle[0].toUpperCase() + this.currentListTitle.substring(1);
    } else {
      listTitle = `Search: ${this.currentListTitle}`;
    }

    return (
      <React.Fragment>

        <section className='tasks-index-pane'>
          

          <ul className='tasks-index'>
            <div className="scrollbar-container">
              <li className="tasks-index-row complete-tabs">
                <NavLink 
                  to={this.props.location.pathname.replace(/\/completed.*/, '')}
                  className="complete-tab-link"
                  exact={true} >
                  Incomplete
                </NavLink>

                <NavLink 
                  to={`/list/${this.props.match.params.listId}/completed`} 
                  className="complete-tab-link" >
                  Complete
                </NavLink>
              </li> 

              <li className="tasks-index-row instructions">
                Type in your task, then use the buttons below to add details.
              </li>

              <li className="tasks-index-row form-row" key='form'>
                <form className='add-task-form'>
                  <input 
                    className='add-task-input'
                    ref={this.inputRef}
                    onChange={this.update} 
                    type="text" 
                    placeholder="Add a task..." 
                    value={this.state.input}
                  />

                  <AddPropertyButtons 
                    dropdown={this.props.dropdown}
                    lists={Object.values(this.props.lists)}

                    insertModChar={this.insertModChar}
                    insertPropertyValues={this.insertPropertyValues}
                    activateDropdown={this.activateDropdown}
                    clearDropdown={this.clearDropdown}
                    />
                  
                  <button onClick={this.handleSubmit} className='modal-button action-button'>Add Task</button>  
                </form>
              </li>
              
              {tasksList}
            </div>
          </ul>
        </section>

        <TasksSummary 
          tasks={this.props.tasks} 
          listTitle={listTitle} />

      </React.Fragment>

    );
  }
}

export default TaskIndex;