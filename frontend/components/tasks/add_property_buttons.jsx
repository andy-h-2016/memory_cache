import React from 'react';
import DOMPurify from 'dompurify';
const PROPERTIES = ['dueDate', 'estimate', 'priority', 'list'];
const ICONS = {
  dueDate: '<i class="fas fa-calendar-day"></i>',
  estimate: '<i class="far fa-clock"></i>',
  priority: '<i class="fas fa-exclamation"></i>',
  list: '<i class="fas fa-list-alt"></i>'
}

const today = new Date();
const [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()]
const tomorrow = new Date(year, month, day + 1)
const nextWeek = new Date(year, month, day + 7)
const todayString = today.toISOString();
const tomorrowString = tomorrow.toISOString();
const nextWeekString = nextWeek.toISOString();

const AddPropertyButtons = ({insertModChar, insertPropertyValues}) => {

  
  const buttons = PROPERTIES.map(property => (
    <React.Fragment>
      <button
        key={property} 
        className="add-property-button" 
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(ICONS[property])}}
        onClick={e => insertModChar(e, property)}
      />

      <ul className={`dropdown add-property-dropdown`}>
        <li className='dropdown-option'>
          <a className='dropdown-link' onClick={(e) => insertPropertyValues(e, todayString)}>
            <span>Today</span>
            <span>{today.toDateString().slice(4,11)}</span>
          </a>
        </li>

        <li className='dropdown-option'>
          <a className='dropdown-link' onClick={(e) => insertPropertyValues(e, tomorrowString)}>
            <span>Tomorrow</span>
            <span>{tomorrow.toDateString().slice(4,11)}</span>
          </a>
        </li>

          <li className='dropdown-option'>
          <a className='dropdown-link' onClick={(e) => insertPropertyValues(e, nextWeekString)}>
            <span>Next Week</span>
            <span>{nextWeek.toDateString().slice(4,11)}</span>
          </a>
        </li>

      </ul>
    </React.Fragment>
    )

  );
  
  
  return(
    <div className='add-property-buttons'>
      {buttons}
    </div>
  )
};


export default AddPropertyButtons