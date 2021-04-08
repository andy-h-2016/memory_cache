export const fetchAllLists = () => (
  $.ajax({url: 'api/lists'})
);

export const createList = title => (
  $.ajax({
    url: 'api/lists',
    method: 'POST',
    data: {title}
  })
);

export const renameList = list => (
  $.ajax({
    url: `api/lists/${list.id}`,
    method: 'PATCH',
    data: {list}
  })
);

export const deleteList = listId => (
  $.ajax({
    url: `api/lists/${listId}`,
    method: 'DELETE'
  })
);
