import { createContext, useContext, useState } from "react";
import { postNote , archiveNoteHandler, deleteNoteHandler} from "../utils/requestUtils/NoteRequestUtils";

const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const defaultState = {
        title: '',
        content: '',
        pinned: false,
        color: 'default',
        state: 'CREATED',
        tags: []
    }
    const [ note , setNote ] = useState(defaultState);
    const [ notes , setNotes ] = useState([]);
    const [deletedNotes, setDeletedNotes ] = useState([]);

    const saveNote = async () => {
        // eslint-disable-next-line eqeqeq
        console.log(note);
        if(JSON.stringify(note)  === JSON.stringify(defaultState)) return;
        console.log(`Saving...${note}`);
        const updatedNotes = await postNote(note);
        console.log(`Saved...${note}`);
        setNotes(updatedNotes);
        setNote(defaultState);
    }

    const archiveNote = async ({...note}) => {
         const updatedNotes = await archiveNoteHandler(note);
         note = {...note , state: note.state='ARCHIVED'};
         setNotes(updatedNotes);
    }

    const deleteNote = async ({...note}) => {
        const updatedNotes = await deleteNoteHandler(note);
        note = {...note , state: note.state='DELETED'};
        setDeletedNotes(deletedNotes => [...deletedNotes, note]);
        setNotes(updatedNotes);
    }

    return ( <NoteContext.Provider value={{note , setNote,  saveNote, notes, archiveNote, deleteNote, deletedNotes}}>
        {children}
    </NoteContext.Provider> );
}

export const useNote = () => useContext(NoteContext);