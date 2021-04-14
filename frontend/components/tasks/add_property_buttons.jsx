import React from 'react';
import DOMPurify from 'dompurify';
const PROPERTIES = ['dueDate', 'estimate', 'priority', 'list'];
const ICONS = {
  dueDate: '<i class="fas fa-calendar-day"></i>',
  estimate: '<i class="far fa-clock"></i>',
  priority: '<i class="fas fa-exclamation"></i>',
  list: '<i class="fas fa-list-alt"></i>'
}
//title, list, due date, priority , estimate
//complete, postpone, prioritize, move to list

class AddPropertyButtons extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const buttons = PROPERTIES.map(property => {
      return (
        <button
          key={property} 
          className="add-property-button" 
          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(ICONS[property])}}
          onClick={e => this.props.insertChar(e, property)}
        >
        </button>
      );
    })
    
    return(
      <div className='add-property-buttons'>
        {buttons}
      </div>
    )
  }
}


export default AddPropertyButtons