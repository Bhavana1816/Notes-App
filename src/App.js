
import './App.css';
import React, {useState} from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) =>{
    setNotes([note,...notes]);
  };
  const deleteNote =(id) => {
    setNotes(notes.filter((note) =>note.id !== id));
  };

  return (
    <div className="app">
      <h1>React-Notes-App</h1>
      <NoteForm onAddNote={addNote}/>
      <NoteList notes={notes} onDeleteNote={deleteNote}/>
    </div>
  );
};

export default App;
