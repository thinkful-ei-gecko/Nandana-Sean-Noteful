import React from 'react';
import ReactDOM from 'react-dom'
import NoteElement from './NoteElement'

class NotesOuterBox extends React.Component {

   handleAdd(e) {
       e.preventDefault();
       console.log("Ive been clicked as well")
   }
   
    render () {
        const notes = (this.props.storeNotes).map((note,id) => {
            return <NoteElement noteName={note.name} /> 
        });
        return(
            <div className="notesOuterBox">
                {notes}
                <button type="button" onClick={this.handleAdd}>Add Note</button>
            </div>
        )
    }
}

export default NotesOuterBox