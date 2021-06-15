import React from 'react';

const TasksSummary = ({tasks}) => {

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
      <h2 className="list-header"></h2>
      <div className="tasks-summary">
        <div>{`${taskCount} tasks`}</div>
        <div>{`${estimateTotal} min estimated`}</div>
        <div>{`${overdueTaskCount} overdue`}</div>
        <div>{`${completedTaskCount} completed`}</div>
      </div>
    </section>
  );
  
  
}

export default TasksSummary;