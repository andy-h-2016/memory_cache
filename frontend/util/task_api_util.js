
export const fetchTasks = searchParams => {
  return $.ajax({
    url: 'api/tasks',
    method: 'GET',
    data: {task: searchParams}
  })
};

export const createTask = task => {
  return (
  $.ajax({
    url: 'api/tasks',
    method: 'POST',
    data: {task}
  })
);
}

export const updateTask = task => {
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