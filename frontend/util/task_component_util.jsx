import React from 'react';


export const constructSearchParams = (urlParams) => {
  let today;

  switch(true) {
    case /\d/.test(urlParams):
      // regex check if urlParams is a number
      return {listId: urlParams};
    case urlParams === "all":
      return {complete: false};
    case urlParams === "inbox":
      return {custom: 'inbox'};
    case urlParams === "today":
      today = new Date();
      return ({
        dueDate: [
          today.getFullYear(),
          today.getMonth() + 1, //JS uses 0 index on months. Ruby does not.
          today.getDate()
        ]
      });
    case urlParams === "tomorrow":
      today = new Date();
      return ({
        dueDate: [
          today.getFullYear(),
          today.getMonth() + 1, //JS uses 0 index on months. Ruby does not.
          today.getDate() + 1
        ]
      });
    case urlParams === "this-week":
      return {custom: 'this-week'};
  }
}

export const parseInput = input => {
  let titleMatch = input.match(/(.+)\s\W/) //|| input.match(/[\W\S]\S+\s(?!\W\S+\s)(.+)/)

  let title = titleMatch ? titleMatch[1] : input;
  let task = {title};
  let dueDateMatch = input.match(/\^(.*)/);
  if (dueDateMatch) {
    let dueDate = parseDate(dueDateMatch[1])
    task.dueDate = dueDate;
  };

  let listMatch = input.match(/#\((.+)\)/);
  if (listMatch) {
    let listTitle = listMatch[1];
    let listObj = this.props.lists.find(list => list.title === listTitle);
    let listId = listObj.id;
    task.listId = listId; 
  }

  let priorityMatch = input.match(/!([1-4])/);
  if (priorityMatch) {
    let priority = priorityMatch[1];
    task.priority = priority;
  }

  let estimateMatch = input.match(/=(\d+)/);
  if (estimateMatch) {
    let estimate = estimateMatch[1];
    task.estimate = estimate;
  }

  return task;
}

export const parseDate = dateString => {
  
  const YYYYMMDD_Dash = /(\d{4}-[0-1]?\d-[0-3]?\d)\s*/;
  const YYYYMMDD_Slash = /(\d{4}\/[0-1]?\d\/[0-3]?\d)\s*/;


  let matchDash = dateString.match(YYYYMMDD_Dash);
  let matchSlash = dateString.match(YYYYMMDD_Slash);
  switch (true) {
    case !!matchDash:
      return matchDash[1].split('-');
    case !!matchSlash:
      return matchSlash[1].split('/');
  } 

}