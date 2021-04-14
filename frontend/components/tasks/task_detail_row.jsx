import React from 'react';

const TaskDetailRow = ({taskDetail, update, handleSubmit}) => {
  

  return (
    <tr>
      <th className={`property-name due-date-header`}>due</th>
      <td className="property-value due-date-value">
        <form>
          <input 
            className='task-detail-edit-form due-date-input' 
            onChange={e => update(e, 'dueDate')}
            ref={DOM_Ele => this.inputRef['dueDate'] = DOM_Ele} 
            type="text" 
            value={this.state.dueDate}
          />

          <input className='hidden-submit-button' onClick={e =>  handleSubmit(e, 'dueDate')} type="submit"/>
        </form>
      </td>
    </tr>
  )
}