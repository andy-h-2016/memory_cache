
export const fetchAssocNotes = notes => {
  return $.ajax({
    url: 'api/notes',
    method: 'GET',
    data: {note: notes}
  })
};

export const createNote = note => {
  return (
  $.ajax({
    url: 'api/notes',
    method: 'POST',
    data: {note}
  })
);
}

export const updateNote = note => {
  return $.ajax({
    url: `api/notes/${note.id}`,
    method: 'PATCH',
    data: {note}
  })
};

export const deleteNote = note => (
  $.ajax({
    url: `api/notes/${note.id}`,
    method: 'DELETE',
  })
);