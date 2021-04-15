
export const fetchTasks = searchParams => {
  console.log('api payload', searchParams)
  return $.ajax({
    url: 'api/tasks',
    method: 'GET',
    data: {task: searchParams}
  })
};

export const createTask = task => {
  console.log('task params', task)
  return (
  $.ajax({
    url: 'api/tasks',
    method: 'POST',
    data: {task}
  })
);
}

export const updateTask = task => {
  console.log('update params', task)
  return $.ajax({
    url: `api/tasks/${task.id}`,
    method: 'PATCH',
    data: {task}
  })
};

export const deleteTask = task => (
  $.ajax({
    url: `api/tasks/${task.id}`,
    method: 'DELETE',
  })
);