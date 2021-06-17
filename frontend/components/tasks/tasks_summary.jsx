import React from 'react';

const TasksSummary = ({tasks, listTitle}) => {

  const taskCount = tasks.length;
  let estimateTotal = 0;
  let overdueTaskCount = 0;
  let completedTaskCount = 0;

  let today = new Date();
  for (let task of tasks) {
    estimateTotal += task.estimate;
    
    if (task.complete) {completedTaskCount += 1};

    let dueDate = new Date(task.dueDate);
    if (today > dueDate) {overdueTaskCount += 1}
  }
  
  return (
    <section className="tasks-summary-pane">
      <div className="tasks-summary-pane-contents">
        <h2 className="list-header">{listTitle}</h2>

        <div className="tasks-summary">
          <div className="summary-stat-container">
            <div className="summary-stat-content">
              <p className="summary-stat task-count">{taskCount}</p>
              <p className="summary-label">tasks</p>
            </div>
          </div>

          <div className="summary-stat-container">
            <div className="summary-stat-content">
              <span className="summary-stat">{estimateTotal}</span>
              <span className="summary-stat minutes">min</span>
              <p className="summary-label">estimated</p>
            </div>
          </div>

          <div className="summary-stat-container">
            <div className="summary-stat-content">
              <p className="summary-stat overdue-task-count">{overdueTaskCount}</p>
              <p className="summary-label">overdue</p>
            </div>
          </div>

          <div className="summary-stat-container">
            <div className="summary-stat-content">
              <p className="summary-stat">{completedTaskCount}</p>
              <p className="summary-label">completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  
}

export default TasksSummary;