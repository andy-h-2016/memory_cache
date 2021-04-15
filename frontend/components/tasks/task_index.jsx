import React from 'react';
import {NavLink} from 'react-router-dom';
import { constructSearchParams, parseInput } from '../../util/task_component_util';
import AddPropertyButtons from './add_property_buttons';

const MIN_NUM_OF_ROWS = 15;

class TaskIndex extends React.Component {
  //props: tasks from 
  constructor(props) {
    super(props);
    this.state = {input: ""};
    
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.insertModChar = this.insertModChar.bind(this);
    this.insertPropertyValues = this.insertPropertyValues.bind(this);

    this.urlParams = this.props.match.params.listId;
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    let searchParams = constructSearchParams(this.urlParams);
    this.props.searchTasks(searchParams);
  } 
        
  componentDidUpdate(prevProps) {
    this.urlParams = this.props.match.params.listId
    if (this.urlParams !== prevProps.match.params.listId) {
      let searchParams = constructSearchParams(this.urlParams);
      this.props.searchTasks(searchParams);
    }
    
  }

  update(e) {
    let input = e.currentTarget.value;
    this.setState({input: input});

    let lastChar = input[input.length - 1];
    switch(true) {
      case lastChar === '^':
        break
      case input.match(/#\(\)$/):
        
        break
      case lastChar === '!':
        break
      case lastChar === '=':
        break
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let task = parseInput(this.state.input);
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
      case 'list':
        char = ' #()';
        this.props.activateDropdown(property)
        this.setState({input: `${this.state.input}${char}`}, () => {
          this.inputRef.current.focus();
  
          //move cursor to 2nd to last position to be inside the #()
          const cursorPosition = this.state.input.length - 1; 
          this.inputRef.current.setSelectionRange(cursorPosition, cursorPosition)
        });
        return
      case 'priority':
        char = ' !';
        break
      case 'estimate':
        char = ' =';
        break
      default:
        char = '';
    }

    this.props.activateDropdown(property)
    this.setState({input: `${this.state.input}${char}`});
    this.inputRef.current.focus();    
  }

  insertPropertyValues(e, values, property) {
    e.preventDefault();
    const input = property === 'list' 
      ? this.state.input.replace(/#\(\)/, `#(${values})`) 
      : this.state.input.concat(values);

    this.setState({input})
  } 

  render() {
    if (!this.props.tasks) {
      return <div></div>;
    }

    const tasksList = [];
    this.props.tasks.forEach(task => {
      tasksList.push(
        <li className='tasks-index-row task-row' key={`task ${task.id}`}>
          <NavLink className='task-link' to={`${this.props.match.url}/${task.id}`}>
            <span>{task.title}</span>
            <span className="due-date">{task.dueDate}</span>
          </NavLink>
        </li>
      )
    });

    const numAdditionalRows = MIN_NUM_OF_ROWS - tasksList.length;
    for (let i = 0; i < numAdditionalRows; i++) {
      tasksList.push(<li className='tasks-index-row empty-row' key={`empty-${i}`}></li>)
    }

    // let dropdownStatus = this.props.dropdown === list.id ? "" : "hidden" 

    

    return (
      <section className='tasks-index-pane'>
        <div className="complete-tabs"></div> {/* Incomplete vs Completed tabs will be NavLinks */}

        <ul className='tasks-index'>
          <li className="tasks-index-row task-buttons"></li> {/* task buttons will be separate component */}
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
                lists={this.props.lists}

                insertModChar={this.insertModChar}
                insertPropertyValues={this.insertPropertyValues}
                activateDropdown={this.activateDropdown}
                clearDropdown={this.clearDropdown}
                />
              
              <button onClick={this.handleSubmit} className='modal-button action-button'>Add Task</button>  
            </form>
          </li>
          
          {tasksList}
        </ul>
        
      </section>
        

    );
  }
}

export default TaskIndex;