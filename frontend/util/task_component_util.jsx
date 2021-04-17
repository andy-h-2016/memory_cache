import React from 'react';


export const constructSearchParams = (urlParams, complete) => {
  complete ||= false; //if it's undefined, it's false
  switch(true) {
    case /\d+/.test(urlParams):
      // regex check if urlParams is a number
      return {
        listId: urlParams, 
        complete
      };
    case urlParams === "all":
      return {complete};
    default:
      return {
        custom: urlParams, 
        complete
      }
    }
};

export const parseInput = (input, lists) => {
  let titleMatch = input.match(/((?:\w|\s)+)(?:\s\W)?/)
  let title = titleMatch[1]
  let task = {title};

  let dueDateMatch = input.match(/\^(.*)/);
  if (dueDateMatch) {
    let dueDate = parseDate(dueDateMatch[1])
    task.dueDate = dueDate;
  };

  let listMatch = input.match(/#\((.+)\)/);
  if (listMatch) {
    let listTitle = listMatch[1];
    let listObj = lists.find(list => list.title === listTitle);
    let listId = listObj.id;
    task.listId = listId; 
  }

  let priorityMatch = input.match(/!([1-4])/);
  if (priorityMatch) {
    let priority = priorityMatch[1];
    task.priority = priority;
  }

  let estimateMatch = input.match(/=(\d+)min/);
  if (estimateMatch) {
    let estimate = estimateMatch[1];
    task.estimate = estimate;
  }

  //output is an object with up to 5 key-value pairs depending on which regex matches are found
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