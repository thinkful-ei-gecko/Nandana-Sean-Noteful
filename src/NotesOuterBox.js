import React from 'react';
import ReactDOM from 'react-dom'
import NoteElement from './NoteElement'

class NotesOuterBox extends React.Component {

    render () {

        return(
            <div className="notesOuterBox">
                <NoteElement />
                <button type="button">Add Note</button>
            </div>
        )
    }
}

export default NotesOuterBox