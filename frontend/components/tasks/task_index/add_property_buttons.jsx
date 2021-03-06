import React from 'react';
import DOMPurify from 'dompurify';
const PROPERTIES = ['dueDate', 'estimate', 'priority', 'list'];
const HOVER_LABELS = {
  dueDate: 'due\ndate', 
  estimate: 'time\nestimate',
  priority: 'priority',
  list: 'list'
};

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

const todayInput = today.toISOString().slice(0,10);
const tomorrowInput = tomorrow.toISOString().slice(0,10);
const nextWeekInput = nextWeek.toISOString().slice(0,10);

const todaySlice = today.toDateString().slice(4,11);
const tomorrowSlice = tomorrow.toDateString().slice(4,11);
const nextWeekSlice = nextWeek.toDateString().slice(4,11);


// THE ACTUAL COMPONENT
const AddPropertyButtons = ({insertModChar, insertPropertyValues, dropdown, lists}) => {

  const listArr = lists.map(list => [list.title, list.title]);

  const dropdownProps = {
    dueDate: [
      [todayInput, todayString, todaySlice],
      [tomorrowInput, tomorrowString, tomorrowSlice],
      [nextWeekInput, nextWeekString, nextWeekSlice]
    ],
    priority: [
      [1, 'Priority 1'],
      [2, 'Priority 2'],
      [3, 'Priority 3'],
      [4, 'Priority 4']
    ],
    estimate: [
      ['2min', '2 minutes'],
      ['5min', '5 minutes'],
      ['10min', '10 minutes'],
      ['10min', '10 minutes'],
      ['15min', '15 minutes'],
      ['30min', '30 minutes'],
      ['60min', '1 hour']
    ],
    list: listArr
  }

  const buttons = PROPERTIES.map(property => {
    let dropdownStatus = dropdown === property ? "" : "hidden";
    
    return(
      <div key={`${property}-button-container`} className='button-dropdown-container'>

        <button
          type='button'
          className="add-property-button" 
          data-hover-label={`${HOVER_LABELS[property]}`}
          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(ICONS[property])}}
          onClick={e => insertModChar(e, property)} >
        </button>

        <ul className={`dropdown add-property-dropdown ${dropdownStatus}`}>
          {
            dropdownProps[property].map((lineItemProp, idx) => (
            <li key={`${property}-dropdown-${idx}`} className='dropdown-option'>
              <a className='dropdown-link' onClick={(e) => insertPropertyValues(e, lineItemProp[0], property)}>
                <span key={`${property}-span-1`}>{lineItemProp[1]}</span>
                <span key={`${property}-span-2`}>{lineItemProp[2]}</span>
              </a>
            </li>
            ))
          }
        </ul>
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