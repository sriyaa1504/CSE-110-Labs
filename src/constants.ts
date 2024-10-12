// constants.ts (or wherever you have defined dummyNotesList)
import { Note } from './types'; // Adjust the path as necessary

export const dummyNotesList: Note[] = [
  { id: 1, title: 'test note 1', content: 'bla bla note1', label: 'other', isFavorite: false },
  { id: 2, title: 'test note 2', content: 'bla bla note2', label: 'personal', isFavorite: false },
  { id: 3, title: 'test note 3', content: 'bla bla note3', label: 'work', isFavorite: false },
  { id: 4, title: 'test note 4', content: 'bla bla note4', label: 'study', isFavorite: false },
  { id: 5, title: 'test note 5', content: 'bla bla note5', label: 'study', isFavorite: false },
  { id: 6, title: 'test note 6', content: 'bla bla note6', label: 'personal', isFavorite: false }
];
