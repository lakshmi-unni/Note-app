import * as React from 'react';
import { Note } from '../Interfaces/noteInterfaces';
import Notes from '../Components/Notes'
interface INoteListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteList: React.FunctionComponent<INoteListProps> = ({ notes, setNotes }) => {
    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id))

    }
    const renderNotes = (): JSX.Element[] => {
        return notes.map(note => {
            return <Notes key={note.id} note={note} handleDelete={handleDelete} />
        })
    }
    return (
        <>
            <h2 className='mt-3'>notes</h2>
            <div>{renderNotes()}</div>
        </>
    );
};

export default NoteList;
