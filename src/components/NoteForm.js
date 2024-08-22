import React, { useState } from 'react';

const NoteForm = ({onAddNote}) => {
    const [noteText, setNoteText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(noteText.trim()) {
            onAddNote({
                id: Date.now(),
                text : noteText
            });
            setNoteText('');
        }
    };
  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text" value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder='Enter your note'/>
        <button type='submit'>Add Note</button>
    </form>
  );
};

export default NoteForm;