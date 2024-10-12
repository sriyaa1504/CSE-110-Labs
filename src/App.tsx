import './App.css';
import { useState } from 'react';
import { Note } from './types'; // Import Note type
import { dummyNotesList } from './constants';
import ClickCounter from './hooksExercise';

function App() {
  const [notes, setNotes] = useState<Note[]>(dummyNotesList);
  const [newNote, setNewNote] = useState({ title: '', content: '', label: 'Other', isFavorite: false });
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedNote, setSelectedNote] = useState<number | null>(null); // To track which note is being edited

  // Function to toggle favorite
  const toggleFavorite = (id: number) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        note.isFavorite = !note.isFavorite;
        if (note.isFavorite) {
          setFavorites([...favorites, note.title]);
        } else {
          setFavorites(favorites.filter(fav => fav !== note.title));
        }
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  // Function to delete a note
  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id !== id); // Remove the note with the matching ID
    setNotes(updatedNotes);
  };

  // Function to add a new note
  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    const newNoteObj = { ...newNote, id: notes.length + 1 };
    setNotes([...notes, newNoteObj]);
    setNewNote({ title: '', content: '', label: 'Other', isFavorite: false });
  };

  // Function to edit note title/content/label
  const saveNoteChanges = (noteId: number, field: string, value: string) => {
    const updatedNotes = notes.map(note => {
      if (note.id === noteId) {
        return { ...note, [field]: value };
      }
      return note;
    });
    setNotes(updatedNotes);
    setSelectedNote(null); // Deselect after editing
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <ClickCounter />
        <form className="note-form" onSubmit={addNote}>
          <div>
            <input
              placeholder="Note Title"
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            />
          </div>
          <div>
            <textarea
              placeholder="Note Content"
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            ></textarea>
          </div>
          <div>
            <select value={newNote.label} onChange={(e) => setNewNote({ ...newNote, label: e.target.value })}>
              <option>Other</option>
              <option>Personal</option>
              <option>Work</option>
              <option>Study</option>
            </select>
          </div>
          <div>
            <button type="submit">Create note</button>
          </div>
        </form>
      </div>

      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <div className="notes-header">
              <button onClick={() => deleteNote(note.id)}>x</button> {/* Delete button */}
            </div>

            {/* Editable Title */}
            <h2
              contentEditable={selectedNote === note.id}
              suppressContentEditableWarning={true}
              onBlur={(e) => saveNoteChanges(note.id, 'title', e.currentTarget.textContent || '')}
              onClick={() => setSelectedNote(note.id)}
              className={selectedNote === note.id ? 'editable' : ''}
            >
              {note.title}
            </h2>

            {/* Editable Content */}
            <p
              contentEditable={selectedNote === note.id}
              suppressContentEditableWarning={true}
              onBlur={(e) => saveNoteChanges(note.id, 'content', e.currentTarget.textContent || '')}
              onClick={() => setSelectedNote(note.id)}
              className={selectedNote === note.id ? 'editable' : ''}
            >
              {note.content}
            </p>

            {/* Editable Label */}
            <p
              contentEditable={selectedNote === note.id}
              suppressContentEditableWarning={true}
              onBlur={(e) => saveNoteChanges(note.id, 'label', e.currentTarget.textContent || '')}
              onClick={() => setSelectedNote(note.id)}
              className={selectedNote === note.id ? 'editable' : ''}
            >
              {note.label}
            </p>

            {/* Toggle favorite */}
            <div onClick={() => toggleFavorite(note.id)} className="heart-icon">
              {note.isFavorite ? "❤️" : "🤍"}
            </div>
          </div>
        ))}
      </div>

      <div className="list-of-favorites">
        <h3>List of favorites:</h3>
        <ul>
          {favorites.map((fav, idx) => (
            <li key={idx}>{fav}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
