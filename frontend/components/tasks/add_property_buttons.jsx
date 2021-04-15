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
const tomorrow = new Date(year, month, day + 1);
const nextWeek = new Date(year, month, day + 7);

const todayString = 'Today';
const tomorrowString = 'Tomorrow';
const nextWeekString = 'Next Week';

const todayInput = today.toISOString();
const tomorrowInput = tomorrow.toISOString();
const nextWeekInput = nextWeek.toISOString();

const todaySlice = today.toDateString().slice(4,11);
const tomorrowSlice = tomorrow.toDateString().slice(4,11);
const nextWeekSlice = nextWeek.toDateString().slice(4,11);

const DROPDOWN_PROPS = {
  dueDate: [
    [todayInput, todayString, todaySlice],
    [tomorrowInput, tomorrowString, tomorrowSlice],
    [nextWeekInput, nextWeekString, nextWeekSlice]
  ]
}


// THE ACTUAL COMPONENT
const AddPropertyButtons = ({insertModChar, insertPropertyValues, dropdown}) => {

  const buttons = PROPERTIES.map(property => {
    property = 'dueDate'; //for testing purposes only. Delete later!!
    let dropdownStatus = dropdown === property ? "" : "hidden";
    
    return(
      <div className='button-dropdown-container'>
        <button
          key={property} 
          className="add-property-button" 
          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(ICONS[property])}}
          onClick={e => insertModChar(e, property)}
        >
        </button>

        <ul className={`dropdown add-property-dropdown ${dropdownStatus}`}>
          {
            DROPDOWN_PROPS[property].map(lineItemProp => {
            <li className='dropdown-option'>
              <a className='dropdown-link' onClick={(e) => insertPropertyValues(e, lineItemProp[0])}>
                <span>{lineItemProp[1]}</span>
                <span>{lineItemProp[2]}</span>
              </a>
            </li>

            }) 
          }
        </ul>

        {/* <ul className={`dropdown add-property-dropdown ${dropdownStatus}`}>
          <li className='dropdown-option'>
            <a className='dropdown-link' onClick={(e) => insertPropertyValues(e, todayInput)}>
              <span>Today</span>
              <span>{today.toDateString().slice(4,11)}</span>
            </a>
          </li>

          <li className='dropdown-option'>
            <a className='dropdown-link' onClick={(e) => insertPropertyValues(e, tomorrowInput)}>
              <span>Tomorrow</span>
              <span>{tomorrow.toDateString().slice(4,11)}</span>
            </a>
          </li>

          <li className='dropdown-option'>
            <a className='dropdown-link' onClick={(e) => insertPropertyValues(e, nextWeekInput)}>
              <span>Next Week</span>
              <span>{nextWeek.toDateString().slice(4,11)}</span>
            </a>
          </li>
        </ul> */}
      </div >
    );
  });
  
  
  return(
    <div className='add-property-buttons'>
      {buttons}
    </div>
  )
};


export default AddPropertyButtons