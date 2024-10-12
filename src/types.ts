export enum Label {
    personal = "personal",
    study = "study",
    work = "work",
    other = "other",
 }
 
// types.ts

export interface Note {
    id: number;
    title: string;
    content: string;
    label: string;  // Assuming Label is a string, adjust if it's an enum or another type
    isFavorite: boolean;
  }


  