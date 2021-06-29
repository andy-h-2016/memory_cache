import React from 'react';

export default TaskDetailRow = ({taskDetail, update, handleSubmit}) => {
  

  editableProperties.map(property => {
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
}