import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { constructSearchParams, parseInput } from '../../../util/task_component_util';
import AddPropertyButtons from './add_property_buttons';
import TasksSummary from '../tasks_summary';
import { activateDropdown, clearDropdown } from '../../../actions/dropdown_actions';
import { searchTasks, createTask } from '../../../actions/task_actions';

const STANDARD_LIST = ['all', 'inbox', 'today', 'tomorrow', 'this-week'];
const MIN_NUM_OF_ROWS = 20;

const TaskIndex = (props) => {
  let currentListTitle = props.match.params.listId;
  const completed = props.location.pathname.includes("completed");
  const inputRef = React.createRef();
  let searchParams;

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const tasks = useSelector(state => Object.values(state.entities.tasks));
  const lists = useSelector(state => Object.values(state.entities.lists));
  const dropdown = useSelector(state => state.ui.dropdown);

  useEffect(() => {
    let searchParams = constructSearchParams(currentListTitle, completed);
    dispatch(searchTasks(searchParams));
  }, [currentListTitle, completed]);

  useEffect(() => {
    inputRef.current.focus();
    const cursorPosition = (input.slice(input.length - 3) === '#()')
      ? input.length - 1
      : input.length;

    inputRef.current.setSelectionRange(cursorPosition, cursorPosition);      
  }, [input])

  function update(e) {
    let input = e.currentTarget.value;
    setInput(input);
  };

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    let task = parseInput(input, lists);
    setInput("");
    dispatch(createTask(task));
  }

  function insertModChar(e, property) {
    e.preventDefault();
    e.stopPropagation();
    const propertyLegend = {
      dueDate: ' ^',
      priority: ' !',
      estimate: ' =',
      list: ' #()'
    };
    const char = propertyLegend[property];

    dispatch(activateDropdown(property));
    setInput(`${input}${char}`);
  }

  function insertPropertyValues(e, values, property) {
    e.preventDefault();
    const newInput = (property === 'list') 
      ? input.replace(/#\(\)/, `#(${values})`) 
      : input.concat(values);
    setInput(newInput);
  }

  if(!tasks) return <div></div>

  const completedClass = completed ? 'completed' : '';

  const tasksList = [];
  tasks.forEach(task => {
    tasksList.push(
      <li className="tasks-index-row task-row" key={`task ${task.id}`}>
        <NavLink className='task-link' to={`${props.match.url}/${task.id}`}>
          <span className={`${completedClass}`}>{task.title}</span>
          <span className="due-date">{task.dueDate}</span>
        </NavLink>
      </li>
    )
  });

  const numAdditionalRows = MIN_NUM_OF_ROWS - tasksList.length;
  for (let i = 0; i < numAdditionalRows; i++) {
    tasksList.push(<li className='tasks-index-row empty-row' key={`empty-${i}`}></li>);
  }

  let listTitle;
  if (lists[currentListTitle] !== undefined) {
    listTitle = lists[currentListTitle].title;
  } else if (STANDARD_LIST.includes(currentListTitle)) {
    //capitalize the standard list title
    listTitle = currentListTitle[0].toUpperCase() + currentListTitle.substring(1);
    listTitle = listTitle.replace('-', ' ');
  } else {
    listTitle = `Search: ${currentListTitle}`;
  }

  return (
    <React.Fragment>
      <section className='tasks-index-pane'>
        <ul className='tasks-index'>
          <div className="scrollbar-container">
            <li className="tasks-index-row complete-tabs">
              <NavLink 
                to={props.location.pathname.replace(/\/completed.*/, '')}
                className="complete-tab-link"
                exact={true} >
                Incomplete
              </NavLink>

              <NavLink 
                to={`/list/${props.match.params.listId}/completed`} 
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
                  ref={inputRef}
                  onChange={update} 
                  type="text" 
                  placeholder="Add a task..." 
                  value={input}
                />

                <AddPropertyButtons 
                  dropdown={dropdown}
                  lists={Object.values(lists)}
                  insertModChar={insertModChar}
                  insertPropertyValues={insertPropertyValues}
                  activateDropdown={activateDropdown}
                  clearDropdown={clearDropdown}
                />
                <button onClick={handleSubmit} className='modal-button action-button'>Add Task</button>  
              </form>
            </li>

            {tasksList}
          </div>
        </ul>
      </section>

      <TasksSummary 
        tasks={tasks} 
        listTitle={listTitle} />
    </React.Fragment>
  )
}

export default TaskIndex;