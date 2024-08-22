import React from 'react';
import Note from './Note';

const NoteList = ({notes, onDeleteNote}) => {
  return (
    <div className="note-list">
        {notes.map((note) => (
            <Note key={note.id} note={note} onDelete={onDeleteNote}/>
        ))}
    </div>
  );
};

export default NoteList;