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
  let titleMatch = input.match(/(.+)\s\W/);
  let title = titleMatch ? titleMatch[1] : input;

  let task = {title};
  let dueDateMatch = input.match(/\^(.*)/);
  if (dueDateMatch) {
    let dueDate = dueDateString[1].split('-');
    task['dueDate'] = dueDate;
  };

  let listMatch = input.match(/#\((.+)\)/);
  if (listMatch) {
    let listTitle = listMatch[1];
    let listObj = this.props.lists.find(list => list.title === listTitle);
    let listId = listObj.id;
    task['listId'] = listId; 
  }

  return task;
}