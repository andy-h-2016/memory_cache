import * as NoteAPIUtil from '../util/note_api_util';
import {receiveErrors} from './error_actions';


export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_ASSOC_NOTES = "RECEIVE_ASSOC_NOTES";
export const REMOVE_TASK = "REMOVE_TASK";

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const receiveAssocNotes = notes => ({
  type: RECEIVE_ASSOC_NOTES,
  notes
});

export const removeNote = noteId => ({
  type: REMOVE_TASK,
  noteId
});

export const fetchAssocNotes = notesParams => dispatch => {
  return NoteAPIUtil.fetchAssocNotes(notesParams)
    .then(
      notes => dispatch(receiveAssocNotes(notes)),
      errors => dispatch(receiveErrors(errors))
    )
};

export const createNote = noteParams => dispatch => {
  return NoteAPIUtil.createNote(noteParams)
    .then(
      note => dispatch(receiveNote(note)),
      errors => dispatch(receiveErrors(errors))
    )
};

export const updateNote = noteParams => dispatch => {
  return NoteAPIUtil.updateNote(noteParams)
    .then(
      editedNote => dispatch(receiveNote(editedNote)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const deleteNote = noteParams => dispatch => {
  return NoteAPIUtil.deleteNote(noteParams)
    .then(
      deletedNote => dispatch(receiveNote(deletedNote.id)),
      errors => dispatch(receiveErrors(errors))
    )
};

